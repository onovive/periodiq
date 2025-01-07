import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./app/i18n-config";

// Define public files that should bypass locale redirect
const publicFiles = ["/robots.txt", "/sitemap.xml"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip locale redirect for public files
  if (publicFiles.some((file) => pathname === file)) {
    return NextResponse.next();
  }

  // Check if the current pathname already includes a locale
  const pathnameIsMissingLocale = i18n.locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

  // If the pathname does not include a locale, redirect to the default locale
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // If pathname has a locale, continue the request without any redirection
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico
    // - robots.txt
    // - sitemap.xml
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
