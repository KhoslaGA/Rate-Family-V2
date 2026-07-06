/**
 * Homepage-only design tokens — mirror of @/styles/tokens but with the
 * brand-prototype palette and typography (Outfit + JetBrains Mono +
 * bright gold) instead of the editorial Source Serif 4 + amber.
 *
 * Used exclusively by /src/components/home/* on the home-prelaunch-sections
 * branch so the homepage matches the prototype zip without disturbing the
 * rest of the site (blog, glossary, /auto-insurance, etc. keep editorial
 * via the regular tokens.ts).
 *
 * Shape matches tokens.ts exactly so swapping the import line in a home
 * component is the only change needed.
 */

export const colors = {
  paper: '#ffffff',
  surface: '#fbf8f0',
  cream: '#f6efe0',
  white: '#ffffff',
  ink: '#1B2A4A',
  inkStrong: '#1B2A4A',
  inkMuted: 'rgba(27,42,74,0.6)',
  teal: '#0A7E8C',
  tealHover: '#0d9aa8',
  tealDark: '#086874',
  navy: '#1B2A4A',
  navyDark: '#0f1e38',
  amber: '#B8960C',          // prototype gold (was editorial #B45309)
  gold: '#B8960C',           // alias
  border: 'rgba(27,42,74,0.10)',
  borderSoft: 'rgba(27,42,74,0.10)',
  borderFaint: 'rgba(27,42,74,0.06)',
  subtleBg: '#fbf8f0',
  muted: 'rgba(27,42,74,0.6)',
  mutedAlt: 'rgba(27,42,74,0.55)',
  text: '#1B2A4A',
  red: '#CC3333',
  green: '#0D8050',
  canadaRed: '#C8102E',
} as const;

export const fonts = {
  display: "var(--font-outfit), 'Outfit', system-ui, -apple-system, sans-serif",
  body: "var(--font-outfit), 'Outfit', system-ui, -apple-system, sans-serif",
  serif: "var(--font-outfit), 'Outfit', system-ui, -apple-system, sans-serif",
  heading: "var(--font-outfit), 'Outfit', system-ui, -apple-system, sans-serif",
  sans: "var(--font-outfit), 'Outfit', system-ui, -apple-system, sans-serif",
  mono: "var(--font-jet-mono), 'JetBrains Mono', 'SF Mono', Menlo, monospace",
} as const;

export const layout = {
  maxWidth: 1240,
  maxWidthWide: 1280,
  navHeight: 64,
  navHeightMobile: 56,
} as const;

export const TEAL = colors.teal;
export const NAVY = colors.navy;
export const GOLD = colors.gold;
