'use client';

import Link from 'next/link';
import { colors, fonts, shadows } from '@/styles/editorialTokens';
import { Pill, Eyebrow } from './Pill';
import { Users, Book, Bars, ArrowRight } from './icons';

export default function ThreeTierStrip() {
  return (
    <section id="tiers" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto 48px', textAlign: 'center' }}>
          <Eyebrow>Three ways we help</Eyebrow>
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
            Know exactly what you&rsquo;re getting
          </h2>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 18,
              color: colors.muted,
              lineHeight: 1.6,
            }}
          >
            Some things we can connect you to a licensed human for. Some we can only
            teach. Some we help you compare. We never blur the line — and the colour
            tells you which is which.
          </p>
        </div>

        <div className="ed-tier-grid">
          <TierCard
            tone="advisor"
            accentBar={colors.advisor}
            pillIcon={<Users size={14} color="currentColor" />}
            pillText="Talk to a licensed advisor"
            title="Life & living-benefits coverage"
            body="Term, whole & universal life, critical illness and disability. We connect you to KLC Group Canada Inc. — a Canadian advisor licensed under Ontario's FSRA LLQP framework."
            cta="Book a free call"
            href="/life-insurance"
            linkColor={colors.advisorInk}
          />
          <TierCard
            tone="learn"
            accentBar={colors.learn}
            pillIcon={<Book size={14} color="currentColor" />}
            pillText="Learn — educational"
            title="Auto, home & business"
            body="Plain-English explainers on property & casualty insurance. We don't sell or quote P&C coverage in Canada yet — these guides help you shop smarter on your own."
            cta="Read the guides"
            href="/auto-insurance"
            linkColor={colors.learnInk}
          />
          <TierCard
            tone="compare"
            accentBar={colors.compare}
            pillIcon={<Bars size={14} color="currentColor" />}
            pillText="Compare offers"
            title="Cards, mortgages & savings"
            body="Editorial picks for credit cards, mortgage rates, GICs and high-interest accounts — updated monthly, with links to apply directly with the provider."
            cta="See the picks"
            href="/credit-cards"
            linkColor={colors.compareInk}
          />
        </div>
      </div>
    </section>
  );
}

function TierCard({
  tone,
  accentBar,
  pillIcon,
  pillText,
  title,
  body,
  cta,
  href,
  linkColor,
}: {
  tone: 'advisor' | 'learn' | 'compare';
  accentBar: string;
  pillIcon: React.ReactNode;
  pillText: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  linkColor: string;
}) {
  return (
    <Link
      href={href}
      style={{
        background: '#fff',
        border: `1px solid ${colors.border}`,
        borderRadius: 16,
        padding: 30,
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        boxShadow: shadows.soft,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: accentBar,
        }}
      />
      <Pill tone={tone} icon={pillIcon}>{pillText}</Pill>
      <h3
        style={{
          fontFamily: fonts.heading,
          fontSize: 23,
          margin: '18px 0 10px',
          color: colors.navy,
          fontWeight: 600,
          letterSpacing: '-0.01em',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 15.5,
          color: '#4B5563',
          marginBottom: 22,
          lineHeight: 1.6,
        }}
      >
        {body}
      </p>
      <span
        style={{
          fontFamily: fonts.body,
          fontWeight: 700,
          fontSize: 15,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          color: linkColor,
        }}
      >
        {cta}
        <ArrowRight size={16} color={linkColor} />
      </span>
    </Link>
  );
}
