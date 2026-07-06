/**
 * i18n configuration for TopRates.ca.
 *
 * URL structure:
 *   - English (default): unprefixed — toprates.ca/, toprates.ca/newcomers/
 *   - Other locales:     prefixed   — toprates.ca/fr/newcomers/, etc.
 *
 * Adding a new locale = add to LOCALES + drop a dictionary JSON in
 * src/i18n/dictionaries/. No route changes needed for the [locale] tree.
 */

export const DEFAULT_LOCALE = 'en' as const;

export const LOCALES = ['en', 'fr', 'pa', 'hi', 'ur'] as const;
export type Locale = (typeof LOCALES)[number];

/** Locales other than the default — these get a URL prefix. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** Locales rendered right-to-left. */
export const RTL_LOCALES: ReadonlySet<Locale> = new Set(['ur']);

/** Per-locale HTML `lang` attribute (BCP 47, Canada-specific). */
export const HTML_LANG: Record<Locale, string> = {
  en: 'en-CA',
  fr: 'fr-CA',
  pa: 'pa-CA',
  hi: 'hi-CA',
  ur: 'ur-CA',
};

/** Display labels for locale switchers. Each shown in its own script. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  pa: 'ਪੰਜਾਬੀ',
  hi: 'हिन्दी',
  ur: 'اُردُو',
};

/** Type guard that narrows a string to a known Locale. */
export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.has(locale);
}

/**
 * Build a public URL for a given locale + path. The default locale gets no
 * prefix; other locales get /<locale>/<path>.
 *
 *   localizedUrl('en', '/newcomers')  → '/newcomers'
 *   localizedUrl('fr', '/newcomers')  → '/fr/newcomers'
 *   localizedUrl('ur', '/')           → '/ur'
 */
export function localizedUrl(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === '/' ? '/' : clean;
  if (clean === '/') return `/${locale}`;
  return `/${locale}${clean}`;
}
