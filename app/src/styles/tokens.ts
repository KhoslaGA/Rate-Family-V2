/**
 * Design tokens — single source of truth for inline styles.
 *
 * Updated per SiteFontpostresearch.md to align with the new editorial
 * register. Components that import from here pick up the new typography
 * automatically without per-file edits:
 *
 *   fonts.heading / display / serif  →  Source Serif 4 via next/font
 *   fonts.body                        →  Source Serif 4 (editorial body)
 *   fonts.sans                        →  Inter (UI / forms / commerce body)
 *   fonts.mono                        →  Inter (was JetBrains Mono — eyebrows
 *                                         use Inter caps now, not code font)
 *   colors.gold                       →  amber #B45309 (backward-compat alias;
 *                                         was muddy gold #B8960C in Phase 1)
 *
 * Use these in inline styles across the app. Keep string values so they
 * drop straight into style={{...}} without interpolation.
 */

export const colors = {
  paper: '#FBF7EE',          // editorial canvas (was #ffffff)
  surface: '#FBF7EE',        // alias
  cream: '#FBF7EE',          // alias (was #f6efe0 — slightly warmer now)
  white: '#FFFFFF',          // commerce canvas
  ink: '#1F2024',            // warm near-black body text
  inkStrong: '#121214',      // headings
  inkMuted: '#5C5C66',       // eyebrows / metadata
  teal: '#0A7E8C',
  tealHover: '#0d9aa8',
  tealDark: '#086874',
  navy: '#1B2A4A',
  navyDark: '#0f1e38',
  amber: '#B45309',          // disclosure callouts + site eyebrow
  // gold remains as an alias pointing at amber — components that still
  // import colors.gold render in amber. Migrate to colors.amber over time.
  gold: '#B45309',
  border: 'rgba(31,32,36,0.10)',
  borderSoft: 'rgba(31,32,36,0.10)',
  borderFaint: 'rgba(31,32,36,0.06)',
  subtleBg: '#f8fafb',
  muted: '#5C5C66',          // mapped to ink-muted
  mutedAlt: '#5C5C66',
  text: '#1F2024',           // mapped to ink
  red: '#CC3333',
  green: '#0D8050',
  canadaRed: '#C8102E',
} as const;

// Font tokens — point at next/font CSS variables loaded in layout.tsx.
// System fallbacks ensure SSR + first paint render with sensible substitutes.
export const fonts = {
  display: "var(--font-serif), 'Newsreader', Georgia, serif",
  body: "var(--font-serif), 'Newsreader', Georgia, serif",
  serif: "var(--font-serif), 'Newsreader', Georgia, serif",
  heading: "var(--font-serif), 'Newsreader', Georgia, serif",
  sans: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  // mono is now Inter (per the editorial brief — eyebrows/captions use
  // sans caps, not a code typeface). Backward-compat alias only.
  mono: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const layout = {
  maxWidth: 1080,
  maxWidthWide: 1200,
  navHeight: 64,
  navHeightMobile: 56,
} as const;

// Shorthand exports for places that still read TEAL/NAVY/GOLD the way mockups did.
export const TEAL = colors.teal;
export const NAVY = colors.navy;
export const GOLD = colors.gold; // now resolves to amber #B45309
