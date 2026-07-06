/**
 * Build hreflang alternates for Next.js Metadata `alternates.languages`.
 *
 * Pass the canonical path (the part after the domain, without any locale
 * prefix) and you get back a `{ canonical, languages }` block ready to
 * spread into `generateMetadata`.
 *
 * Example:
 *   alternates: buildHreflang('/newcomers')
 *
 * Emits:
 *   <link rel="canonical" href="https://toprates.ca/newcomers" />
 *   <link rel="alternate" hreflang="en-CA" href="https://toprates.ca/newcomers" />
 *   <link rel="alternate" hreflang="fr-CA" href="https://toprates.ca/fr/newcomers" />
 *   <link rel="alternate" hreflang="pa-CA" href="https://toprates.ca/pa/newcomers" />
 *   <link rel="alternate" hreflang="hi-CA" href="https://toprates.ca/hi/newcomers" />
 *   <link rel="alternate" hreflang="ur-CA" href="https://toprates.ca/ur/newcomers" />
 *   <link rel="alternate" hreflang="x-default" href="https://toprates.ca/newcomers" />
 *
 * x-default points at the unprefixed English version. Google uses this
 * when no other hreflang matches the user's language.
 */
import {
  DEFAULT_LOCALE,
  HTML_LANG,
  LOCALES,
  localizedUrl,
  type Locale,
} from '@/i18n/config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toprates.ca';

export interface HreflangAlternates {
  canonical: string;
  languages: Record<string, string>;
}

/**
 * `currentLocale` is the locale this specific page renders in. The
 * canonical URL points at THIS page's localized URL — Google treats it
 * as authoritative for that locale, with the other hreflang entries as
 * sibling alternates.
 *
 * `path` is the unprefixed canonical path (e.g. '/newcomers').
 */
export function buildHreflang(
  path: string,
  currentLocale: Locale = DEFAULT_LOCALE,
): HreflangAlternates {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const canonicalPath = localizedUrl(currentLocale, clean);

  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[HTML_LANG[locale]] = `${SITE_URL}${localizedUrl(locale, clean)}`;
  }
  // x-default fallback always points at the default-locale (unprefixed) URL.
  languages['x-default'] = `${SITE_URL}${localizedUrl(DEFAULT_LOCALE, clean)}`;

  return {
    canonical: `${SITE_URL}${canonicalPath}`,
    languages,
  };
}
