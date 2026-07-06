/**
 * Ownership-map canonical resolution for the multi-tenant Rate family.
 *
 * Every editorial topic is OWNED by exactly one site. A page served on a
 * non-owner host must canonicalize toward the owner's host so the four
 * domains never compete for the same query (the cannibalization guard,
 * enforced at the HTML level).
 *
 * Locale-aware: the canonical path carries the same locale prefix logic as
 * the rest of the site (reuses `localizedUrl` from i18n/config), and the
 * hreflang alternates point at the OWNER host for every locale.
 *
 * Usage in a page's generateMetadata (the canonical-remediation target):
 *   export async function generateMetadata(): Promise<Metadata> {
 *     return { alternates: buildSiteHreflang('/life-insurance', locale) };
 *   }
 */
import {
  DEFAULT_LOCALE,
  HTML_LANG,
  LOCALES,
  localizedUrl,
  type Locale,
} from '@/i18n/config';
import { SITE_CONFIG, SITES, type Site } from '@/site/config';

/**
 * Which site owns this path? The first site whose `owns` prefix matches wins;
 * more specific owners (e.g. termrates `/life-insurance/term`) must be checked
 * before broader ones (liferate `/life-insurance`), so we sort owned prefixes
 * by length, longest first, across all sites.
 */
const OWNED_PREFIXES: { prefix: string; site: Site }[] = SITES.flatMap((site) =>
  SITE_CONFIG[site].owns.map((prefix) => ({ prefix, site })),
).sort((a, b) => b.prefix.length - a.prefix.length);

export function ownerOf(pathname: string): Site {
  const clean = stripLocale(pathname);
  for (const { prefix, site } of OWNED_PREFIXES) {
    if (clean === prefix || clean.startsWith(prefix + '/')) return site;
  }
  return 'toprates';
}

/** Production host (no scheme) of the site that owns this path. */
export function ownerHostFor(pathname: string): string {
  return SITE_CONFIG[ownerOf(pathname)].host;
}

/**
 * Absolute canonical URL for a path, regardless of which host served it.
 * Locale-aware: respects the unprefixed-English / prefixed-other-locale rule.
 */
export function canonicalFor(
  pathname: string,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const clean = ensureLeadingSlash(stripLocale(pathname));
  const host = ownerHostFor(clean);
  return `https://${host}${localizedUrl(locale, clean)}`;
}

export interface SiteHreflang {
  canonical: string;
  languages: Record<string, string>;
}

/**
 * Multi-tenant hreflang block: canonical points at THIS page's locale on the
 * OWNER host; each language alternate points at the same path on the OWNER
 * host in that locale; x-default points at the owner's default-locale URL.
 *
 * Drop-in for `alternates` in generateMetadata — the multi-tenant replacement
 * for the single-host buildHreflang().
 */
export function buildSiteHreflang(
  path: string,
  currentLocale: Locale = DEFAULT_LOCALE,
): SiteHreflang {
  const clean = ensureLeadingSlash(stripLocale(path));
  const host = ownerHostFor(clean);
  const base = `https://${host}`;

  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[HTML_LANG[locale]] = `${base}${localizedUrl(locale, clean)}`;
  }
  languages['x-default'] = `${base}${localizedUrl(DEFAULT_LOCALE, clean)}`;

  return {
    canonical: `${base}${localizedUrl(currentLocale, clean)}`,
    languages,
  };
}

// ── helpers ────────────────────────────────────────────────────────────────

function ensureLeadingSlash(p: string): string {
  return p.startsWith('/') ? p : `/${p}`;
}

/** Remove a leading locale segment (/fr, /pa, /hi, /ur) if present. */
function stripLocale(pathname: string): string {
  const segs = pathname.split('/');
  // segs[0] is '' for an absolute path; segs[1] is the first real segment.
  if (segs[1] && (LOCALES as readonly string[]).includes(segs[1]) && segs[1] !== DEFAULT_LOCALE) {
    segs.splice(1, 1);
  }
  const out = segs.join('/');
  return out === '' ? '/' : out;
}
