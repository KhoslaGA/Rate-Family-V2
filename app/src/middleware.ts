/**
 * i18n middleware.
 *
 * Two jobs:
 *
 * 1. Detect the locale for every request and inject it as an `x-locale`
 *    request header so the root layout can set <html lang> and <html dir>
 *    correctly (Urdu needs RTL).
 *
 *    Detection order:
 *      a. URL path prefix (/fr/..., /pa/..., /hi/..., /ur/...)
 *      b. NEXT_LOCALE cookie (set by the locale switcher)
 *      c. Accept-Language header
 *      d. Fallback to DEFAULT_LOCALE ('en')
 *
 * 2. Do NOT rewrite or redirect for default-locale URLs. English is
 *    served from the unprefixed routes (e.g. /newcomers/). Other locales
 *    are served from /<locale>/... paths that match real folders.
 *
 * The matcher excludes static assets, API routes, the Sanity studio, and
 * common file extensions so middleware runs only on page navigations.
 */
import { NextResponse, type NextRequest } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALES,
  isLocale,
  type Locale,
} from './i18n/config';
import { siteFromHost, isSite } from './site/config';

const LOCALE_COOKIE = 'NEXT_LOCALE';

function detectLocale(req: NextRequest): Locale {
  const { pathname } = req.nextUrl;
  const firstSegment = pathname.split('/')[1];

  // 1. URL path prefix wins.
  if (isLocale(firstSegment) && firstSegment !== DEFAULT_LOCALE) {
    return firstSegment;
  }
  if (firstSegment === DEFAULT_LOCALE) {
    // A naked /en prefix isn't supported — English is unprefixed.
    // Treat it as a default-locale request.
    return DEFAULT_LOCALE;
  }

  // 2. Sticky cookie from a previous switcher selection.
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) return cookieLocale;

  // 3. Accept-Language negotiation. Best-effort, no full BCP47 parsing.
  const accept = req.headers.get('accept-language') ?? '';
  for (const part of accept.split(',')) {
    const tag = part.split(';')[0]?.trim().toLowerCase();
    if (!tag) continue;
    // Match either the exact tag (e.g. "fr") or a regional variant (e.g. "fr-CA" → "fr").
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const locale = detectLocale(req);

  // Resolve the active site (tenant) from the Host header, the same way the
  // locale is resolved. SITE_OVERRIDE lets you force a site in local dev
  // (e.g. SITE_OVERRIDE=healthrate npm run dev) without spoofing the Host.
  const override = process.env.SITE_OVERRIDE;
  const site = isSite(override)
    ? override
    : siteFromHost(req.headers.get('host'));

  // Pass the resolved locale + site to the rest of the request lifecycle via
  // request headers. The root layout reads them with headers().
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-locale', locale);
  requestHeaders.set('x-site', site);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     *  - /api/*       (API routes)
     *  - /_next/*     (Next.js internals)
     *  - /studio/*    (Sanity Studio)
     *  - paths with a file extension (favicon.ico, robots.txt, *.png, etc.)
     */
    '/((?!api|_next|studio|.*\\..*).*)',
  ],
};

// Export for type-only consumers that need the locale list / cookie name.
export { LOCALES, LOCALE_COOKIE };
