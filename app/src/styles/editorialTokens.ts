/**
 * Editorial homepage redesign tokens — Fraunces + Hanken Grotesk register.
 *
 * Drop-in replacement for @/styles/homeTokens (same shape) used by the
 * post-Outfit homepage redesign. Other pages keep their current tokens.
 *
 * Palette is the "gold-forward" design board:
 *   navy 900   #0B2545     primary ink + dark surface
 *   navy 700   #13315C     secondary navy
 *   ink         #1F2937    body text
 *   surface     #FFFFFF    white
 *   surface 2   #F7F6F0    warm cream
 *   accent      #E0A227    gold — primary CTA
 *   accent-warm #F08A4B    amber — hover/secondary
 *   advisor 2   #10B981    green — life-insurance funnel tier
 *   info        #0EA5E9    blue — compare tier
 *   muted       #6B7280
 *   border      #E5E7EB
 *
 * The 3-tier pill system (Pill.tsx) reads `tones.advisor / learn / compare`
 * directly — keep these in sync if you ever rename.
 */

export const colors = {
  // Surfaces
  paper: '#FFFFFF',
  surface: '#FFFFFF',
  cream: '#F7F6F0',
  white: '#FFFFFF',

  // Ink
  ink: '#1F2937',
  inkStrong: '#0B2545',
  inkMuted: '#6B7280',

  // Brand navy
  navy: '#0B2545',
  navyMid: '#13315C',
  navyDark: '#0B2545',

  // CTA accents (gold-forward)
  accent: '#E0A227',
  accentWarm: '#F08A4B',
  amber: '#E0A227', // alias for backward-compat
  gold: '#E0A227',  // alias

  // 3-tier markers
  advisor: '#10B981',
  advisorInk: '#047857',
  learn: '#6B7280',
  learnInk: '#4B5563',
  compare: '#0EA5E9',
  compareInk: '#0369A1',

  // Generic
  teal: '#10B981', // remapped to advisor green
  green: '#10B981',
  red: '#CC3333',
  canadaRed: '#C8102E',
  muted: '#6B7280',
  mutedAlt: '#4B5563',
  text: '#1F2937',
  border: '#E5E7EB',
  borderSoft: '#E5E7EB',
  borderFaint: 'rgba(31, 41, 55, 0.06)',
  subtleBg: '#F7F6F0',
} as const;

export const fonts = {
  display: "var(--font-fraunces), 'Fraunces', Georgia, serif",
  serif: "var(--font-fraunces), 'Fraunces', Georgia, serif",
  heading: "var(--font-fraunces), 'Fraunces', Georgia, serif",
  body: "var(--font-hanken), 'Hanken Grotesk', -apple-system, sans-serif",
  sans: "var(--font-hanken), 'Hanken Grotesk', -apple-system, sans-serif",
  mono: "var(--font-hanken), 'Hanken Grotesk', -apple-system, sans-serif",
} as const;

export const layout = {
  maxWidth: 1200,
  maxWidthWide: 1200,
  navHeight: 72,
  navHeightMobile: 64,
} as const;

export const shadows = {
  soft: '0 1px 2px rgba(11,37,69,.06), 0 8px 24px rgba(11,37,69,.06)',
  lg: '0 4px 12px rgba(11,37,69,.08), 0 24px 60px rgba(11,37,69,.12)',
} as const;

export const radii = {
  card: 16,
  input: 8,
  pill: 999,
} as const;

export type Tone = 'advisor' | 'learn' | 'compare';

export const tones: Record<Tone, { bg: string; ink: string }> = {
  advisor: { bg: 'rgba(16,185,129,.12)', ink: '#047857' },
  learn: { bg: 'rgba(107,114,128,.13)', ink: '#4B5563' },
  compare: { bg: 'rgba(14,165,233,.12)', ink: '#0369A1' },
};
