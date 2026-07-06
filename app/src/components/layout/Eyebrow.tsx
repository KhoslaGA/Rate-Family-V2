/**
 * Page-level eyebrow.
 *
 *   <Eyebrow variant="site" />  → INDEPENDENT CANADIAN INSURANCE EDUCATION
 *   <Eyebrow variant="life" />  → TALK TO A LICENSED ADVISOR TODAY
 *
 * Site variant uses amber (replaces the muddy gold from Phase 1 — see
 * SiteFontpostresearch.md "color audit failed; amber #B45309 replaces it
 * for disclosure callouts"). Life variant stays teal (the partnership /
 * active-brokerage color).
 *
 * Typography: Inter caps at 12px / tracking 0.06em. The previous
 * JetBrains Mono treatment carried developer-tool semantics; Inter is
 * the editorial-UI register premium publications use for eyebrows.
 *
 * onDark: bumps contrast for navy / dark-gradient heroes.
 */

import { Inter } from 'next/font/google';

const interEyebrow = Inter({
  subsets: ['latin'],
  weight: ['700'],
});

export type EyebrowVariant = 'site' | 'life';

const TEXT: Record<EyebrowVariant, string> = {
  site: 'INDEPENDENT CANADIAN INSURANCE EDUCATION',
  life: 'TALK TO A LICENSED ADVISOR TODAY',
};

export function Eyebrow({
  variant = 'site',
  onDark = false,
}: {
  variant?: EyebrowVariant;
  /** True when the eyebrow sits on a navy/dark hero — uses higher-contrast text. */
  onDark?: boolean;
}) {
  const isLife = variant === 'life';

  // Pill chip background + border. Different accent per variant.
  // Site = amber; life = teal. Higher opacity on dark backgrounds.
  const accent = isLife ? '#0A7E8C' : '#B45309';
  const bg = onDark
    ? isLife
      ? 'rgba(15, 189, 201, 0.18)' // teal at higher opacity on dark hero
      : 'rgba(180, 83, 9, 0.20)' // amber at higher opacity on dark hero
    : isLife
      ? 'rgba(10, 126, 140, 0.10)'
      : 'rgba(180, 83, 9, 0.10)';
  const border = onDark
    ? isLife
      ? 'rgba(15, 189, 201, 0.45)'
      : 'rgba(180, 83, 9, 0.45)'
    : isLife
      ? 'rgba(10, 126, 140, 0.30)'
      : 'rgba(180, 83, 9, 0.30)';
  const text = onDark
    ? isLife
      ? '#0fbdc9'
      : '#d97706'
    : accent;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 999,
        padding: '6px 14px',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: text,
        }}
      />
      <span
        className={interEyebrow.className}
        style={{
          fontSize: 12,
          letterSpacing: '0.06em',
          fontWeight: 700,
          color: text,
          textTransform: 'uppercase',
        }}
      >
        {TEXT[variant]}
      </span>
    </div>
  );
}
