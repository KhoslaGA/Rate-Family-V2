/**
 * Multi-tenant site configuration for the Rate family.
 *
 * One Next.js codebase serves four hosts; the Host header selects the active
 * site (resolved in middleware.ts → `x-site` request header, read by the root
 * layout the same way `x-locale` is).
 *
 * The CORE palette and fonts are fixed network-wide (see globals.css @theme).
 * Only `--site-accent` and the homepage emphasis (`leadVertical`) change per
 * site. Canonical URLs enforce the ownership map (see src/lib/seo/canonical.ts):
 * a topic is owned by exactly one site, and non-owner hosts canonicalize toward
 * the owner so four domains never trip duplicate-content penalties.
 *
 * This mirrors the structure of src/i18n/config.ts on purpose.
 */

export const SITES = ['toprates', 'liferate', 'termrates', 'healthrate'] as const;
export type Site = (typeof SITES)[number];

/** The hub. Served for any unrecognised host and for local dev by default. */
export const DEFAULT_SITE: Site = 'toprates';

export interface SiteConfig {
  key: Site;
  /** Display name used in metadata + UI. */
  name: string;
  /** Canonical production host (no scheme). */
  host: string;
  /** CSS color applied to `--site-accent` for this site. Core tokens stay fixed. */
  accent: string;
  /** Route foregrounded on the homepage / nav for this site. */
  leadVertical: string;
  /** Route prefixes this site OWNS — canonical for these points to this host. */
  owns: string[];
  /** Per-site <title> suffix + default description (kept plain-English, no superlatives). */
  title: string;
  description: string;
}

export const SITE_CONFIG: Record<Site, SiteConfig> = {
  toprates: {
    key: 'toprates',
    name: 'TopRates.ca',
    host: 'toprates.ca',
    accent: '#B45309', // amber — hub stays neutral/authoritative (matches --color-amber)
    leadVertical: '/insurance',
    owns: [
      '/auto-insurance',
      '/home-insurance',
      '/tenant-insurance',
      '/business-insurance',
      '/credit-cards',
      '/investing',
      '/insurance',
      '/blog',
      '/news-hub',
      '/rate-index',
      '/newcomers',
    ],
    title: 'TopRates.ca — Insurance, in plain English',
    description:
      'Independent Canadian insurance education. Plain-English guides on auto, home, life, business, and travel insurance. Operated by Webhub4u Inc.',
  },
  liferate: {
    key: 'liferate',
    name: 'LifeRate.ca',
    host: 'liferate.ca',
    accent: '#8E4A56', // warm rosewood brand-500 (DESIGN-TOKEN-CONTRACT.md) — legible fill + link text
    leadVertical: '/life-insurance',
    owns: ['/life-insurance'],
    title: 'LifeRate.ca — Life insurance, in plain English',
    description:
      'Plain-English life insurance education for Canadians. Compare options and talk to a LLQP-licensed advisor at KLC Group Canada Inc. Operated by Webhub4u Inc.',
  },
  termrates: {
    key: 'termrates',
    name: 'TermRates.ca',
    host: 'termrates.ca',
    accent: '#3D5A85', // steel-600 (provisional; DESIGN-TOKEN-CONTRACT.md) — legible fill + link text
    // Canon (RateFamily_DECISIONS_FINAL) + bespoke design confirm: TermRates = MORTGAGE,
    // not term-life. Term-LIFE editorial lives on LifeRate (its term-vs-permanent pillar +
    // critical-illness). This kills the LifeRate/TermRates cannibalization on life-insurance
    // intent. TermRates owns mortgage + the rates-data silo (GIC / term-deposit / mortgage tables).
    leadVertical: '/mortgages',
    owns: ['/mortgages', '/rates'],
    title: 'TermRates.ca — Mortgage rates & renewals, in plain English',
    description:
      'Plain-English Canadian mortgage education: rates, renewals, refinance and affordability with sources. Operated by Webhub4u Inc.',
  },
  healthrate: {
    key: 'healthrate',
    name: 'HealthRate.ca',
    host: 'healthrate.ca',
    accent: '#257F49', // green-600 (provisional; DESIGN-TOKEN-CONTRACT.md) — legible fill + link text
    leadVertical: '/health-insurance',
    owns: ['/health-insurance', '/travel-insurance'],
    title: 'HealthRate.ca — Health & travel insurance, in plain English',
    description:
      'Plain-English health and travel insurance education for Canadians and newcomers — OHIP gaps, super visa, supplemental coverage. Operated by Webhub4u Inc.',
  },
};

/**
 * Map an incoming Host header to a Site. Supports production hosts and the
 * `*.localhost` dev pattern (e.g. `liferate.localhost:3000`). Anything
 * unrecognised falls back to the hub.
 */
export function siteFromHost(host: string | null | undefined): Site {
  if (!host) return DEFAULT_SITE;
  const h = host.toLowerCase().split(':')[0];
  if (h.includes('liferate')) return 'liferate';
  if (h.includes('termrates')) return 'termrates';
  if (h.includes('healthrate')) return 'healthrate';
  return 'toprates';
}

/** Type guard for a string that may be a Site key. */
export function isSite(v: string | undefined | null): v is Site {
  return !!v && (SITES as readonly string[]).includes(v);
}

/** Convenience: the production host for a given site. */
export function hostFor(site: Site): string {
  return SITE_CONFIG[site].host;
}
