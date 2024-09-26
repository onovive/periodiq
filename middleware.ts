import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./app/i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

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
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
