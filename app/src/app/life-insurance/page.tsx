/**
 * Life insurance landing — ported from /design/mockups/life-insurance.html (2026-05-11).
 *
 * Visual structure (cream hero with type-comparison card, 3 type cards, coverage
 * calculator panel, waitlist CTA repeats, FAQ) is faithful to mockup.
 *
 * Compliance scrubs vs. mockup:
 *   - "1,840 on the waitlist" and "+24 this week" counters removed (fabricated).
 *   - "30% off launch pricing" promotional claim removed (no such offer).
 *   - "Coming Q3 2026" hardcoded timeline replaced with non-dated framing.
 *     KLC Group Canada Inc. is LLQP-licensed today; we surface that fact
 *     rather than a fake launch date.
 *   - "Premium for $500k coverage · age 35 · non-smoker" bars kept but labeled
 *     "Illustrative ranges" and sourced as "industry-typical".
 *   - Calculator framed as illustrative-only; recommended-coverage figure
 *     is illustrative not a quote.
 *   - Footer entity + fictional licensure claims dropped.
 *
 * Preserved from prior compliance work:
 *   - DisclaimerBlock vertical="life" (active KLC referral notice).
 *   - LifeLeadForm (LLQP-scoped lead capture, not generic ContactForm).
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';
import { LifeLeadForm } from '@/components/life/LifeLeadForm';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';
import LifeRateLanding from '@/components/liferate/LifeRateLanding';

export function generateMetadata(): Metadata {
  const liferate = headers().get('x-site') === 'liferate';
  return liferate
    ? {
        // LifeRate OWNS /life-insurance (ownership map) — self-canonical on this host.
        title: 'Life insurance — term & permanent, compared | LifeRate.ca',
        description:
          'Compare term and permanent life insurance from 21 Canadian insurers in plain English. Talk to an LLQP-licensed advisor at KLC Group Canada Inc.',
        alternates: { canonical: '/life-insurance' },
      }
    : {
        title: 'Life insurance — term, whole, universal | TopRates.ca',
        description:
          'Plain-English Canadian life insurance education — term, whole, and universal life. Insurance referrals to LLQP-licensed advisors at KLC Group Canada Inc.',
        alternates: { canonical: '/life-insurance' },
      };
}

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.teal,
};

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: colors.teal,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  marginBottom: 6,
};

const TYPE_CARDS: {
  tag: string;
  title: string;
  serif: string;
  illust: string;
  desc: string;
  bullets: string[];
  bestFor: string;
}[] = [
  {
    tag: '01 · Most common',
    title: 'Term life',
    serif: 'simple, affordable, finite.',
    illust: 'Lower end of the range',
    desc: 'Pure protection for a defined period — typically 10, 20, or 30 years. If you die during the term, your family receives the death benefit. If you outlive the term, the policy ends.',
    bullets: [
      'Lowest premium of the three structures',
      'Easy to understand, easy to compare',
      'Renewable and convertible to permanent',
      'Premium locked for the term length',
    ],
    bestFor: 'Young families, mortgage-holders, parents covering dependants.',
  },
  {
    tag: '02 · Permanent',
    title: 'Whole life',
    serif: 'forever, with a savings tail.',
    illust: 'Top of the range',
    desc: 'Permanent coverage that never expires, plus a guaranteed cash-value account that grows tax-deferred. Premiums stay level. Substantially higher cost than term for the same death benefit.',
    bullets: [
      'Coverage for your entire life',
      'Builds cash value you can borrow against',
      'Predictable, level premiums forever',
      'Used in estate planning strategies',
    ],
    bestFor: 'Estate equalization, business buy-sell agreements, high-net-worth tax planning.',
  },
  {
    tag: '03 · Flexible',
    title: 'Universal life',
    serif: 'permanent, but adjustable.',
    illust: 'Middle of the range',
    desc: 'Permanent like whole life, but you control the premium and the investment side. Can be funded aggressively, paused, or restructured. More complex — needs hands-on management.',
    bullets: [
      'Permanent coverage that adapts to you',
      'Choose the investment account inside the policy',
      'Pay extra to grow tax-sheltered cash value',
      'Skip premiums in lean years (with limits)',
    ],
    bestFor: 'Already maxing TFSA/RRSP, want additional tax-sheltered growth.',
  },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Should I just take whatever my employer offers?',
    a: 'Group life through work is usually 1–2× salary, which often isn’t enough if you have a mortgage or dependants. Worse, you typically lose it the day you change jobs. A personal term policy locked in while you’re young and healthy stays with you regardless of employer.',
  },
  {
    q: 'Do I need a medical exam?',
    a: 'It depends on the carrier, your age, and the policy size. Some "simplified issue" policies skip the medical and ask only health questions; "fully underwritten" policies typically require a paramedical visit (height/weight, blood, urine) and bloodwork. The advisor will tell you which path applies.',
  },
  {
    q: 'What if I have a pre-existing condition?',
    a: 'Disclose everything truthfully on the application. Most conditions are insurable, sometimes at a "rated" premium. Non-disclosure voids the policy and the carrier will refuse the death benefit. The advisor reviews your history before submission.',
  },
  {
    q: 'How does TopRates make money on life insurance?',
    a: 'Insurance inquiries through TopRates.ca are referred to KLC Group Canada Inc., a licensed LLQP advisory firm. Webhub4u Inc. (the company operating TopRates.ca) receives a per-referral fee from KLC. Carrier commissions are paid to KLC’s licensed advisors, not to us. See /legal for the full structure.',
  },
  {
    q: 'Can I change my coverage later?',
    a: 'Yes — most term policies have a "convertibility" feature that lets you swap to a permanent policy without a new medical exam during a defined window. Coverage amounts can also be reduced. Increases typically require new underwriting.',
  },
];

export default function LifeInsurancePage() {
  // LifeRate host gets the bespoke rosewood life landing; the hub (TopRates)
  // keeps its own editorial life page below.
  if (headers().get('x-site') === 'liferate') return <LifeRateLanding />;
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          padding: '72px 32px 64px',
          background: colors.cream,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: 56,
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: colors.muted, marginBottom: 14 }}>
              <Link href="/" style={{ color: colors.muted, textDecoration: 'none' }}>
                Home
              </Link>{' '}
              &nbsp;/&nbsp; Life Insurance
            </div>
            <h1
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 48,
                lineHeight: 1.08,
                color: colors.navy,
                margin: '0 0 16px',
                letterSpacing: '-0.6px',
              }}
            >
              Life insurance,
              <br />
              <span style={serifItalic}>explained</span> plainly.
            </h1>
            <p
              style={{
                fontSize: 17,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 28px',
                maxWidth: 480,
              }}
            >
              No fear-based selling. No "estate planning specialists" with a quota. Just the
              actual math: how much coverage you need, what term length makes sense, and which
              advisor you&rsquo;ll be talking to.
            </p>
            <LifeLeadForm />
          </div>

          {/* Right column — type-comparison visual */}
          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 16px 40px rgba(27,42,74,0.04)',
            }}
          >
            <div
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 13,
                color: colors.navy,
                letterSpacing: 0.4,
                marginBottom: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Illustrative monthly premium · $500k coverage · age 35 · non-smoker</span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: colors.teal,
                  background: 'rgba(10,126,140,0.1)',
                  padding: '3px 8px',
                  borderRadius: 4,
                }}
              >
                Illustrative
              </span>
            </div>

            {[
              { name: 'Term · 20yr', sub: 'Most common', width: 22, color: 'linear-gradient(90deg, #0A7E8C, #2dd4bf)', range: 'Lowest premium' },
              { name: 'Universal', sub: 'Permanent + flex', width: 58, color: `linear-gradient(90deg, ${colors.navy}, #4a5a7d)`, range: 'Middle of the range' },
              { name: 'Whole', sub: 'Permanent + cash value', width: 78, color: `linear-gradient(90deg, ${colors.gold}, #d97706)`, range: 'Top of the range' },
            ].map((b, i) => (
              <div
                key={b.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '84px 1fr',
                  gap: 14,
                  padding: '14px 0',
                  borderTop: i === 0 ? 'none' : `1px solid ${colors.border}`,
                  paddingTop: i === 0 ? 4 : 14,
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 700,
                      fontSize: 13,
                      color: colors.navy,
                    }}
                  >
                    {b.name}
                  </div>
                  <div style={{ fontSize: 11, color: colors.muted, fontWeight: 500, marginTop: 2 }}>
                    {b.sub}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div
                    style={{
                      height: 10,
                      background: colors.subtleBg,
                      borderRadius: 5,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${b.width}%`,
                        borderRadius: 5,
                        background: b.color,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: colors.muted,
                      fontWeight: 600,
                    }}
                  >
                    {b.range}
                  </div>
                </div>
              </div>
            ))}

            <div
              style={{
                fontSize: 11,
                color: colors.muted,
                paddingTop: 14,
                borderTop: `1px solid ${colors.border}`,
                marginTop: 6,
                lineHeight: 1.5,
              }}
            >
              For most people, term insurance provides the right coverage during the years you
              actually need it. The premium gap vs. permanent products is often better put toward
              registered savings (TFSA/RRSP) and a separate term policy.
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure block */}
      <DisclaimerBlock vertical="life" />

      {/* TYPES */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={eyebrow}>The three types · in plain English</div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 32,
              color: colors.navy,
              margin: '6px 0 14px',
              letterSpacing: '-0.3px',
            }}
          >
            Term, whole, or <span style={serifItalic}>universal</span> — which fits?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.muted,
              maxWidth: 640,
              lineHeight: 1.55,
              margin: '0 0 36px',
            }}
          >
            Most Canadians only need one of these. The KLC advisor can walk you through which one
            based on what you&rsquo;re trying to protect.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
          >
            {TYPE_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#fff',
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: '26px 24px',
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 12,
                    color: colors.gold,
                    letterSpacing: 0.5,
                  }}
                >
                  {card.tag}
                </span>
                <h3
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 22,
                    color: colors.navy,
                    margin: '6px 0 4px',
                  }}
                >
                  {card.title}
                  <span style={{ ...serifItalic, fontSize: 18, display: 'block' }}>
                    {card.serif}
                  </span>
                </h3>
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 13,
                    color: colors.muted,
                    margin: '14px 0 6px',
                    paddingTop: 14,
                    borderTop: `1px solid ${colors.border}`,
                  }}
                >
                  Illustrative cost: <b style={{ color: colors.navy, fontSize: 14 }}>{card.illust}</b>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: colors.muted,
                    lineHeight: 1.6,
                    margin: '0 0 14px',
                  }}
                >
                  {card.desc}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '14px 0 0',
                    fontSize: 12.5,
                    color: colors.text,
                  }}
                >
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        padding: '5px 0 5px 20px',
                        position: 'relative',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: colors.teal,
                          fontWeight: 800,
                        }}
                      >
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    background: colors.surface,
                    padding: '10px 12px',
                    borderRadius: 8,
                    fontSize: 12,
                    color: colors.navy,
                    marginTop: 14,
                  }}
                >
                  <b>Best for:</b> {card.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage rule of thumb (replaces fictional interactive calculator) */}
      <section
        style={{
          background: colors.navy,
          padding: '64px 32px',
          color: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ ...eyebrow, color: '#2dd4bf' }}>Coverage rule of thumb</div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 32,
                color: '#fff',
                margin: '6px 0 14px',
                letterSpacing: '-0.3px',
              }}
            >
              How much do you <span style={{ ...serifItalic, color: '#2dd4bf' }}>actually</span>{' '}
              need?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.55,
                margin: '0 0 18px',
              }}
            >
              The industry-typical guideline: 10–12× your annual income, plus outstanding mortgage
              and a fund for dependants&rsquo; education. A licensed LLQP advisor at KLC Group
              Canada Inc. will walk through your specific number.
            </p>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              No interactive calculator here yet — recommendations require a 15-minute call with
              the advisor, since the right number depends on dependants, mortgage, group benefits,
              and registered-savings balance.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: 28,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                color: 'rgba(255,255,255,0.45)',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Worked example
            </div>
            {[
              { l: 'Household income', v: '$95,000' },
              { l: 'Mortgage remaining', v: '$420,000' },
              { l: 'Children to support', v: '2 kids · ages 4, 7' },
              { l: '10× income + mortgage + education fund', v: '~$1.4M coverage' },
            ].map((row, i) => (
              <div
                key={row.l}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  paddingBottom: 12,
                  borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  fontSize: 13.5,
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>{row.l}</span>
                <span style={{ fontFamily: fonts.heading, fontWeight: 700, color: '#fff' }}>
                  {row.v}
                </span>
              </div>
            ))}
            <div
              style={{
                background: 'rgba(10,126,140,0.15)',
                border: '1px solid rgba(45,212,191,0.3)',
                borderRadius: 12,
                padding: '14px 18px',
                marginTop: 14,
                fontSize: 11.5,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.5,
              }}
            >
              Illustrative only. A real KLC advisor recommendation reviews dependants, mortgage,
              group benefits, and registered-savings balance before quoting coverage.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 32px' }}>
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 56,
          }}
        >
          <div>
            <div style={eyebrow}>FAQ</div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 32,
                color: colors.navy,
                margin: '6px 0 0',
                letterSpacing: '-0.3px',
              }}
            >
              Common <span style={serifItalic}>questions.</span>
            </h2>
          </div>
          <div>
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                {...(i === 0 ? { open: true } : {})}
                style={{
                  borderTop: `1px solid ${colors.border}`,
                  padding: '18px 0',
                  ...(i === FAQ_ITEMS.length - 1
                    ? { borderBottom: `1px solid ${colors.border}` }
                    : {}),
                }}
              >
                <summary
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 15,
                    color: colors.navy,
                    cursor: 'pointer',
                    listStyle: 'none',
                  }}
                >
                  {item.q}
                </summary>
                <p
                  style={{
                    fontSize: 13.5,
                    color: colors.muted,
                    lineHeight: 1.6,
                    padding: '10px 0 0',
                    margin: 0,
                    maxWidth: 540,
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — repeat LifeLeadForm */}
      <section
        style={{
          padding: '64px 32px',
          background: colors.cream,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={eyebrow}>Talk to a licensed advisor</div>
          <h3
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 32,
              color: colors.navy,
              margin: '0 0 12px',
            }}
          >
            Get a <span style={serifItalic}>quote</span> from KLC.
          </h3>
          <p
            style={{
              fontSize: 15,
              color: colors.muted,
              margin: '0 auto 22px',
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            KLC Group Canada Inc.&rsquo;s LLQP-licensed advisors quote, advise, and place life
            insurance policies today. We&rsquo;ll route your inquiry within one business day.
          </p>
          <div style={{ maxWidth: 460, margin: '0 auto' }}>
            <LifeLeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
