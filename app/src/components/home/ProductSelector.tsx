'use client';

import { useState } from 'react';
import Link from 'next/link';
import { colors, fonts } from '@/styles/homeTokens';
import { Icon } from '@/components/brand/Icon';
import type { IconName } from '@/components/brand/Icon';
import PreviewBadge from './PreviewBadge';

type ProductTab = {
  id: string;
  label: string;
  icon: IconName;
  status: 'live' | 'soon';
  when?: string;
};

const TABS: ProductTab[] = [
  { id: 'life',     label: 'Life',         icon: 'shield',  status: 'live' },
  { id: 'auto',     label: 'Car',          icon: 'car',     status: 'soon', when: 'TBD' },
  { id: 'home',     label: 'Home',         icon: 'home',    status: 'soon', when: 'TBD' },
  { id: 'cards',    label: 'Credit Cards', icon: 'card',    status: 'soon', when: 'TBD' },
  { id: 'travel',   label: 'Travel',       icon: 'plane',   status: 'soon', when: 'TBD' },
  { id: 'mortgage', label: 'Mortgage',     icon: 'piggy',   status: 'soon', when: 'TBD' },
];

export default function ProductSelector() {
  const [tab, setTab] = useState<string>('life');
  const active = TABS.find((t) => t.id === tab) ?? TABS[0];

  return (
    <section style={{ padding: '80px 0', background: '#fff', position: 'relative' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <PreviewBadge label="Pre-launch design preview · educational links only" />
        </div>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 11,
              letterSpacing: 2,
              color: colors.teal,
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Start exploring
          </div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 34,
              color: colors.navy,
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            What are you reading about today?
          </h2>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 2,
            background: colors.cream,
            borderRadius: '14px 14px 0 0',
            padding: '6px 6px 0',
            flexWrap: 'wrap',
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: '1 1 120px',
                padding: '16px 10px 14px',
                background: tab === t.id ? '#fff' : 'transparent',
                border: 'none',
                borderRadius: '10px 10px 0 0',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                position: 'relative',
                color: tab === t.id ? colors.teal : colors.navy,
                fontFamily: fonts.heading,
                fontWeight: tab === t.id ? 800 : 600,
                fontSize: 12,
                transition: 'all 0.18s',
              }}
            >
              <Icon name={t.icon} size={20} strokeWidth={1.8} />
              <span>{t.label}</span>
              <span
                style={{
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  fontFamily: fonts.sans,
                  fontSize: 8,
                  fontWeight: 800,
                  background:
                    t.status === 'live' ? 'rgba(13,128,80,0.15)' : 'rgba(180,83,9,0.15)',
                  color: t.status === 'live' ? colors.green : colors.amber,
                  padding: '1px 5px',
                  borderRadius: 3,
                  letterSpacing: 0.5,
                }}
              >
                {t.status === 'live' ? 'NOW' : 'SOON'}
              </span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          style={{
            background: '#fff',
            border: `1px solid ${colors.border}`,
            borderTop: `3px solid ${colors.teal}`,
            borderRadius: '0 0 18px 18px',
            padding: '32px 36px',
            boxShadow: '0 20px 40px -20px rgba(27,42,74,0.12)',
          }}
        >
          <Panel active={active} />
        </div>
      </div>
    </section>
  );
}

const COPY: Record<string, { h: string; p: string; href: string; cta: string }> = {
  life: {
    h: 'Life insurance, available now via KLC Group',
    p: 'Talk to a LLQP-licensed advisor at KLC Group Canada Inc. — the only product we can sell today.',
    href: '/life-insurance',
    cta: 'Talk to an advisor',
  },
  auto: {
    h: 'Ontario auto insurance education',
    p: "Plain-English guides on how Ontario auto premiums work, the 2026 reform, and what to expect. Quote comparison launches once KLC Group's RIBO registration completes.",
    href: '/auto-insurance',
    cta: 'Read the guide',
  },
  home: {
    h: 'Canadian home insurance education',
    p: 'Coverage, deductibles, bundling — explained without jargon. Quote comparison opens at the RIBO-registered launch.',
    href: '/home-insurance',
    cta: 'Read the guide',
  },
  cards: {
    h: 'Independent Canadian credit card reviews',
    p: 'Editorial reviews with full affiliate disclosure. No card is ranked higher because the issuer pays us more.',
    href: '/credit-cards',
    cta: 'See picks',
  },
  travel: {
    h: 'Travel insurance education',
    p: 'Single-trip, multi-trip, snowbird, visitor — what each covers, what gets denied at claim time, and what to skip.',
    href: '/travel-insurance',
    cta: 'Read the guide',
  },
  mortgage: {
    h: 'Canadian mortgage education',
    p: 'Fixed, variable, HELOC, renewal — explained for first-time buyers and renewers. Rate comparison opens later.',
    href: '/mortgages',
    cta: 'Read the guide',
  },
};

function Panel({ active }: { active: ProductTab }) {
  const copy = COPY[active.id];
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        flexWrap: 'wrap',
      }}
    >
      <div style={{ flex: '1 1 320px' }}>
        <h3
          style={{
            fontFamily: fonts.heading,
            fontWeight: 900,
            fontSize: 22,
            color: colors.navy,
            margin: '0 0 8px',
            letterSpacing: '-0.5px',
          }}
        >
          {copy.h}
        </h3>
        <p
          style={{
            fontFamily: fonts.heading,
            fontSize: 14,
            color: colors.muted,
            margin: '0 0 18px',
            lineHeight: 1.5,
          }}
        >
          {copy.p}
        </p>
        <Link
          href={copy.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 22px',
            borderRadius: 999,
            background: active.status === 'live' ? colors.teal : 'transparent',
            color: active.status === 'live' ? '#fff' : colors.teal,
            border: `1px solid ${colors.teal}`,
            fontFamily: fonts.heading,
            fontWeight: 800,
            fontSize: 14,
            textDecoration: 'none',
          }}
        >
          {copy.cta}{' '}
          <Icon
            name="arrowRight"
            size={14}
            color={active.status === 'live' ? '#fff' : colors.teal}
          />
        </Link>
      </div>
      <div
        style={{
          background:
            active.status === 'live' ? 'rgba(13,128,80,0.1)' : 'rgba(180,83,9,0.1)',
          borderRadius: 12,
          padding: '16px 22px',
          textAlign: 'center',
          minWidth: 140,
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 9,
            fontWeight: 800,
            color: active.status === 'live' ? colors.green : colors.amber,
            letterSpacing: 1.5,
            marginBottom: 4,
          }}
        >
          STATUS
        </div>
        <div
          style={{
            fontFamily: fonts.heading,
            fontWeight: 900,
            fontSize: 20,
            color: active.status === 'live' ? colors.green : colors.amber,
            letterSpacing: '-0.5px',
          }}
        >
          {active.status === 'live' ? 'Available now' : 'Editorial today'}
        </div>
        <div
          style={{
            fontFamily: fonts.heading,
            fontSize: 11,
            color: colors.muted,
            marginTop: 2,
          }}
        >
          {active.status === 'live' ? 'Via KLC Group' : 'Marketplace TBD'}
        </div>
      </div>
    </div>
  );
}
