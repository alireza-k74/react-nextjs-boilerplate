import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/config/env";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "@/config/routes";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (
    segments.length > 0 &&
    routing.locales.includes(segments[0] as (typeof routing.locales)[number])
  ) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join("/")}` : "/";
  }
  return pathname;
}

function isProtectedRoute(pathname: string): boolean {
  const path = stripLocale(pathname);
  return PROTECTED_ROUTES.some((route) => path === route || path.startsWith(`${route}/`));
}

function isAuthRoute(pathname: string): boolean {
  const path = stripLocale(pathname);
  return AUTH_ROUTES.some((route) => path === route || path.startsWith(`${route}/`));
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(env.auth.cookieName)?.value;
  const isAuthenticated = Boolean(token);

  if (isProtectedRoute(pathname) && !isAuthenticated) {
    const locale = pathname.split("/")[1] ?? routing.defaultLocale;
    const loginUrl = new URL(`/${locale}/login`, request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute(pathname) && isAuthenticated) {
    const locale = pathname.split("/")[1] ?? routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
