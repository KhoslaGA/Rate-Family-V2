'use client';

import { colors, fonts } from '@/styles/homeTokens';

/**
 * Visible "Pre-launch preview · not real customer data" badge.
 * Required on any homepage section that shows fabricated numbers, names,
 * testimonials, or carrier-partnership claims while TopRates.ca is
 * pre-RIBO. Strip the wrapper (or replace the children) once the section
 * is backed by real data.
 */
export default function PreviewBadge({ label = 'Pre-launch preview · not real customer data' }: { label?: string }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(204,51,51,0.08)',
        border: '1px solid rgba(204,51,51,0.3)',
        borderRadius: 999,
        padding: '5px 12px',
        fontFamily: fonts.sans,
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: 1.2,
        color: colors.red,
        textTransform: 'uppercase',
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: colors.red,
        }}
      />
      {label}
    </div>
  );
}
