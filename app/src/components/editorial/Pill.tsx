'use client';

import React from 'react';
import { colors, fonts, tones, type Tone } from '@/styles/editorialTokens';

interface PillProps {
  tone: Tone;
  icon?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Three-tier badge — the visual contract that tells visitors which
 * mode each section operates in:
 *   advisor (green)  — licensed human path, life/disability funnel
 *   learn   (gray)   — pure educational content, no transaction
 *   compare (blue)   — affiliate-style editorial picks (cards/mortgages/GICs)
 *
 * Used in section headers, hero pills, mega-nav indicators, and inline CTAs.
 */
export function Pill({ tone, icon, children, style }: PillProps) {
  const t = tones[tone];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: fonts.sans,
        fontSize: 12.5,
        fontWeight: 700,
        padding: '5px 12px',
        borderRadius: 999,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        background: t.bg,
        color: t.ink,
        ...style,
      }}
    >
      {icon}
      {children}
    </span>
  );
}

export function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: fonts.sans,
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: color ?? colors.accentWarm,
      }}
    >
      {children}
    </span>
  );
}
