'use client';

import { useState } from 'react';
import Link from 'next/link';
import { colors, fonts } from '@/styles/editorialTokens';
import { Pill } from './Pill';
import { Bars, ArrowRight } from './icons';

type TabKey = 'cards' | 'mortgage' | 'gic';

const TAB_PANES: Record<
  TabKey,
  {
    items: {
      logo: string;
      pill: string;
      title: string;
      body: string;
      specs: { k: string; v: string }[];
      cta: string;
      href: string;
    }[];
  }
> = {
  cards: {
    items: [
      {
        logo: 'CB',
        pill: 'Cash back',
        title: 'Everyday Cashback Card',
        body: 'Best flat-rate cash back with no category juggling.',
        specs: [
          { k: 'Annual fee', v: '$0' },
          { k: 'Cash back', v: '2% flat' },
          { k: 'Welcome bonus', v: '$150' },
        ],
        cta: 'Apply at provider →',
        href: '/credit-cards',
      },
      {
        logo: 'TR',
        pill: 'Travel',
        title: 'Voyage Rewards Visa',
        body: 'Strong points multiplier and flexible transfer partners.',
        specs: [
          { k: 'Annual fee', v: '$120' },
          { k: 'Earn rate', v: '3x travel' },
          { k: 'Welcome bonus', v: '35,000 pts' },
        ],
        cta: 'Apply at provider →',
        href: '/credit-cards',
      },
      {
        logo: 'NF',
        pill: 'No fee',
        title: 'Starter No-Fee Mastercard',
        body: 'A clean first card for building Canadian credit history.',
        specs: [
          { k: 'Annual fee', v: '$0' },
          { k: 'Cash back', v: '1%' },
          { k: 'Min. income', v: 'None' },
        ],
        cta: 'Apply at provider →',
        href: '/credit-cards',
      },
    ],
  },
  mortgage: {
    items: [
      {
        logo: '5F',
        pill: 'Most popular',
        title: '5-Year Fixed',
        body: 'Predictable payments — the default choice for most Canadians.',
        specs: [
          { k: 'Sample rate', v: '4.59%' },
          { k: 'Term', v: '5 years' },
          { k: 'Type', v: 'Fixed' },
        ],
        cta: 'See lenders →',
        href: '/mortgages',
      },
      {
        logo: 'VR',
        pill: 'Lower start',
        title: '5-Year Variable',
        body: 'Floats with prime — can win if rates fall from here.',
        specs: [
          { k: 'Sample rate', v: '4.95%' },
          { k: 'Term', v: '5 years' },
          { k: 'Type', v: 'Variable' },
        ],
        cta: 'See lenders →',
        href: '/mortgages',
      },
      {
        logo: '3F',
        pill: 'Flexible',
        title: '3-Year Fixed',
        body: 'A middle path if you expect to move or refinance sooner.',
        specs: [
          { k: 'Sample rate', v: '4.74%' },
          { k: 'Term', v: '3 years' },
          { k: 'Type', v: 'Fixed' },
        ],
        cta: 'See lenders →',
        href: '/mortgages',
      },
    ],
  },
  gic: {
    items: [
      {
        logo: 'HI',
        pill: 'Top rate',
        title: 'High-Interest Savings',
        body: "No lock-in, withdraw anytime — best home for your cash buffer.",
        specs: [
          { k: 'Rate', v: '5.00%' },
          { k: 'Lock-in', v: 'None' },
          { k: 'Min.', v: '$0' },
        ],
        cta: 'See providers →',
        href: '/investing',
      },
      {
        logo: '1Y',
        pill: '1-year',
        title: '1-Year GIC',
        body: "Lock a guaranteed return for cash you won't need this year.",
        specs: [
          { k: 'Rate', v: '5.25%' },
          { k: 'Term', v: '1 year' },
          { k: 'Insured', v: 'CDIC' },
        ],
        cta: 'See providers →',
        href: '/investing',
      },
      {
        logo: 'TF',
        pill: 'Tax-free',
        title: 'TFSA HISA',
        body: 'Earn interest tax-free inside your contribution room.',
        specs: [
          { k: 'Rate', v: '4.75%' },
          { k: 'Lock-in', v: 'None' },
          { k: 'Tax', v: 'Sheltered' },
        ],
        cta: 'See providers →',
        href: '/investing',
      },
    ],
  },
};

export default function CompareModule() {
  const [tab, setTab] = useState<TabKey>('cards');
  const pane = TAB_PANES[tab];
  return (
    <section id="compare" style={{ padding: '96px 0', background: colors.cream }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 680, marginBottom: 32 }}>
          <Pill tone="compare" icon={<Bars size={14} color="currentColor" />}>
            Compare offers
          </Pill>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 600,
              fontSize: 'clamp(30px, 3.6vw, 42px)',
              margin: '14px 0',
              color: colors.navy,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            Our editorial picks, updated monthly
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: 18, color: colors.muted, lineHeight: 1.6 }}>
            We analyse the market and rank what we&rsquo;d actually recommend. Click through to
            apply directly with the provider.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {(
            [
              { k: 'cards', l: 'Credit cards' },
              { k: 'mortgage', l: 'Mortgages' },
              { k: 'gic', l: 'GICs & savings' },
            ] as { k: TabKey; l: string }[]
          ).map((t) => {
            const active = t.k === tab;
            return (
              <button
                key={t.k}
                onClick={() => setTab(t.k)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  border: `1.5px solid ${active ? colors.navy : colors.border}`,
                  background: active ? colors.navy : '#fff',
                  fontFamily: fonts.body,
                  fontWeight: 600,
                  fontSize: 14.5,
                  cursor: 'pointer',
                  color: active ? '#fff' : colors.muted,
                  transition: 'all 0.15s',
                }}
              >
                {t.l}
              </button>
            );
          })}
        </div>

        <div className="ed-compare-grid">
          {pane.items.map((item, i) => (
            <div
              key={`${tab}-${i}`}
              style={{
                border: `1px solid ${colors.border}`,
                borderRadius: 16,
                padding: 24,
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  height: 46,
                  width: 74,
                  borderRadius: 9,
                  background: `linear-gradient(135deg, ${colors.navyMid}, ${colors.navy})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.accent,
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 16,
                }}
              >
                {item.logo}
              </div>
              <Pill tone="compare">{item.pill}</Pill>
              <h4
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 18,
                  margin: '10px 0 6px',
                  color: colors.navy,
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontFamily: fonts.body,
                  fontSize: 14,
                  color: '#4B5563',
                  marginBottom: 18,
                  flex: 1,
                  lineHeight: 1.55,
                }}
              >
                {item.body}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  marginBottom: 20,
                  paddingTop: 16,
                  borderTop: `1px solid ${colors.border}`,
                }}
              >
                {item.specs.map((s, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontFamily: fonts.body }}>
                    <span style={{ color: colors.muted }}>{s.k}</span>
                    <span style={{ fontWeight: 700, color: colors.navy }}>{s.v}</span>
                  </div>
                ))}
              </div>
              <Link
                href={item.href}
                className="ed-btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 28,
            fontSize: 13,
            color: colors.muted,
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: 680,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: fonts.body,
          }}
        >
          Some of these links pay TopRates.ca a commission if you sign up. That never changes
          the rates you see, or how we rank them — our picks are editorial.{' '}
          <a href="#money" style={{ color: colors.compare, fontWeight: 600, textDecoration: 'underline' }}>
            How we make money →
          </a>
        </p>
      </div>
    </section>
  );
}

void ArrowRight;
