import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./app/i18n-config";

// Game routes that should NOT get locale-prefixed
const gameRoutes = [
  "/login",
  "/signup",
  "/onboarding",
  "/dashboard",
  "/hunt",
  "/profile",
  "/admin",
  "/auth",
];

// Protected routes that require authentication
const protectedPaths = ["/dashboard", "/hunt", "/profile", "/admin"];

// Auth pages that logged-in users should skip
const authPaths = ["/login", "/signup"];

// Public files that bypass all middleware
const publicFiles = ["/robots.txt", "/sitemap.xml"];

function isGameRoute(pathname: string): boolean {
  return gameRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );
}

function isProtectedPath(pathname: string): boolean {
  return protectedPaths.some((path) => pathname.startsWith(path));
}

function isAuthPath(pathname: string): boolean {
  return authPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip public files
  if (publicFiles.some((file) => pathname === file)) {
    return NextResponse.next();
  }

  // Create response for Supabase session refresh
  let response = NextResponse.next({ request });

  // Refresh Supabase session (for both game and marketing routes)
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Handle game route auth logic
    if (isGameRoute(pathname)) {
      // Redirect to login if accessing protected route without auth
      if (isProtectedPath(pathname) && !user) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("redirectTo", pathname);
        return NextResponse.redirect(url);
      }

      // Redirect logged-in users away from auth pages
      if (isAuthPath(pathname) && user) {
        // Check if admin to redirect to /admin instead of /dashboard
        const { data: profile } = await supabase
          .from("profiles")
          .select("user_role")
          .eq("id", user.id)
          .single();

        const url = request.nextUrl.clone();
        url.pathname = profile?.user_role === "admin" ? "/admin" : "/dashboard";
        return NextResponse.redirect(url);
      }

      // Game routes don't need locale prefix
      return response;
    }
  } else if (isGameRoute(pathname)) {
    // No Supabase configured, game routes still bypass locale
    return response;
  }

  // Marketing routes: handle locale redirect
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon.png|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
