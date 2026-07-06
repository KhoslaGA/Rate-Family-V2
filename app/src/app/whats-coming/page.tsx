import type { Metadata } from 'next';
import Link from 'next/link';
import { Bo } from '@/components/brand/Bo';
import { colors, fonts } from '@/styles/tokens';
import { WebhubLink } from '@/components/legal/WebhubLink';
import { Icon } from '@/components/brand/Icon';

export const metadata: Metadata = {
  title: "What's coming summer 2027 — TopRates.ca",
  description:
    'TopRates.ca is launching a RIBO-registered insurance brokerage (KLC Group) in summer 2027. Here is the full roadmap.',
  alternates: { canonical: '/whats-coming' },
};

const ROADMAP: { when: string; what: string; status: 'now' | 'next' | 'soon' }[] = [
  { when: 'Now (May 2026)', what: 'Educational platform live. Newsletter live. Credit card affiliate disclosure in place.', status: 'now' },
  { when: 'Q4 2026', what: 'More guides published across every pillar.', status: 'next' },
  { when: 'Q1 2027', what: 'Beta of the quote engine on staging.', status: 'next' },
  { when: 'Q2 2027', what: 'RIBO Level 3 management licence (expected May/June 2027).', status: 'next' },
  { when: 'Summer 2027', what: 'KLC Group registered with RIBO. Quote engine goes live across 30+ Canadian carriers.', status: 'soon' },
];

export default function WhatsComingPage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background:
            'linear-gradient(160deg, #1B2A4A 0%, #0f1e38 40%, #132340 70%, #1B2A4A 100%)',
          padding: '88px 24px',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  letterSpacing: 2,
                  color: colors.gold,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                INDEPENDENT CANADIAN INSURANCE EDUCATION
              </div>
              <h1
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 56,
                  letterSpacing: '-1.8px',
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                The brokerage launches<br />
                <span style={{ color: '#0fbdc9' }}>summer 2027.</span>
                <br />
                Here&rsquo;s the plan.
              </h1>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 18,
                  color: 'rgba(246,239,224,0.7)',
                  marginTop: 24,
                  lineHeight: 1.55,
                  maxWidth: 560,
                }}
              >
                TopRates.ca is operated by <WebhubLink /> as an independent insurance education
                platform today. Summer 2027, KLC Group launches as a RIBO-registered insurance
                brokerage to handle the quoting and policy placement. This page lays out the
                roadmap.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Bo size={220} pose="tag" accessory="hardhat" />
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section style={{ padding: '88px 24px', background: colors.paper }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 36,
              color: colors.navy,
              margin: '0 0 28px',
              letterSpacing: '-1px',
            }}
          >
            The roadmap
          </h2>
          {ROADMAP.map((row) => (
            <div
              key={row.when}
              style={{
                padding: '20px 24px',
                background: row.status === 'now' ? 'rgba(13,128,80,0.08)' : row.status === 'soon' ? 'rgba(184,150,12,0.08)' : colors.cream,
                borderRadius: 14,
                border: `1px solid ${colors.borderSoft}`,
                borderLeft: `4px solid ${row.status === 'now' ? colors.green : row.status === 'soon' ? colors.gold : colors.teal}`,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: row.status === 'now' ? colors.green : row.status === 'soon' ? colors.gold : colors.teal,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                {row.when}
              </div>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 15,
                  color: colors.navy,
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                {row.what}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT CHANGES + WHAT DOESN'T */}
      <section style={{ padding: '88px 24px', background: colors.cream }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            <div style={{ background: colors.paper, borderRadius: 18, padding: 32, border: `1px solid ${colors.borderSoft}` }}>
              <h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 22, color: colors.navy, marginTop: 0 }}>
                What summer 2027 changes
              </h3>
              <ul style={{ fontFamily: fonts.heading, fontSize: 15, color: colors.muted, lineHeight: 1.7, paddingLeft: 18, margin: 0 }}>
                <li>Compare real quotes from 30+ Canadian carriers</li>
                <li>Switch policies with one click via KLC Group</li>
                <li>Talk to a licensed broker at KLC Group Canada Inc.</li>
                <li>Same plain-English content, now actionable</li>
              </ul>
            </div>
            <div style={{ background: colors.paper, borderRadius: 18, padding: 32, border: `1px solid ${colors.borderSoft}` }}>
              <h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 22, color: colors.navy, marginTop: 0 }}>
                What summer 2027 doesn&rsquo;t change
              </h3>
              <ul style={{ fontFamily: fonts.heading, fontSize: 15, color: colors.muted, lineHeight: 1.7, paddingLeft: 18, margin: 0 }}>
                <li>The educational layer stays editorial</li>
                <li>Articles never push to the brokerage</li>
                <li>Newsletter stays insurance-education-only</li>
                <li>&ldquo;We explain it&rdquo; remains the promise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THE WAIT */}
      <section style={{ padding: '64px 24px', background: colors.paper }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 28, color: colors.navy, margin: '0 0 16px' }}>
            Why the wait
          </h2>
          <p style={{ fontFamily: fonts.heading, fontSize: 16, color: colors.muted, lineHeight: 1.7, margin: 0 }}>
            RIBO Level 3 management licence and KLC Group&rsquo;s registration with RIBO take time
            to do correctly. We&rsquo;re not rushing it. The educational layer comes first
            because that&rsquo;s the foundation a good brokerage rests on. Summer 2027 is when
            both layers exist together.
          </p>
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section
        style={{
          padding: '64px 24px',
          background: 'linear-gradient(135deg, #1B2A4A 0%, #0f1e38 100%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 30,
              margin: '0 0 12px',
              letterSpacing: '-0.8px',
            }}
          >
            Be there when quotes go live.
          </h2>
          <p style={{ fontFamily: fonts.heading, fontSize: 16, color: 'rgba(246,239,224,0.7)', marginBottom: 24 }}>
            Subscribe to the newsletter. We&rsquo;ll send the next guide today and the launch
            announcement summer 2027.
          </p>
          <Link
            href="/#newsletter"
            className="cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: colors.teal,
              color: '#fff',
              borderRadius: 999,
              fontFamily: fonts.heading,
              fontWeight: 800,
              textDecoration: 'none',
              fontSize: 15,
            }}
          >
            Subscribe <Icon name="arrowRight" size={16} color="#F2B441" />
          </Link>
        </div>
      </section>
    </main>
  );
}
