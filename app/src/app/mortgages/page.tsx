/**
 * Mortgages landing — ported from /design/mockups/mortgages.html (2026-05-11).
 *
 * Visual structure (navy-gradient hero with rate form, rate table section,
 * calculators grid, 4-step process, CTA strip) is faithful to mockup.
 *
 * Compliance scrubs vs. mockup:
 *   - "Canada's lowest mortgage rates, updated every morning" superlative
 *     replaced with non-superlative editorial framing.
 *   - Hero stats with specific rates (4.49%, 4.95%, ~$11,400 avg savings,
 *     25+ lenders, "updated 7:14 AM") replaced with editorial-stat block.
 *     No live rate feed exists; we cannot truthfully cite a "today's lowest".
 *   - Rate table (6mo / 1y / 2y / 3y / 5y / 7y / 10y with specific %, lender
 *     attribution, weekly delta) replaced with "Rates coming at launch"
 *     placeholder. No rate data partnership signed.
 *   - "Most TopRates pre-approvals come back in under 24 hours · Same-day
 *     if you submit before 2pm ET" pre-approval claims dropped (the
 *     pre-approval service does not exist; mortgage referrals are made
 *     under MBLAA referral exemption to a registered partner).
 *   - Superlative CTA copy softened to "Compare options".
 *   - Footer operator entity + RIBO #84211 licensure claim dropped.
 *
 * Preserved from prior compliance work:
 *   - DisclaimerBlock vertical="mortgage" (MBLAA referral exemption disclosure).
 *   - ContactForm with defaultProduct="mortgages".
 */
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';
import TermRatesMortgageLanding from '@/components/termrates/TermRatesMortgageLanding';

// TopRates metadata is preserved verbatim; generateMetadata() below returns it
// unchanged for every host except termrates (which gets its own self-canonical).
const topRatesMetadata: Metadata = {
  title: 'Compare Canadian mortgage rates | TopRates.ca',
  description:
    'Editorial coverage of Canadian mortgage rates, fixed vs variable, renewals, and the broker referral process. Mortgage referrals made under Ontario MBLAA referral exemption to a registered partner.',
  keywords:
    'Canadian mortgage rates, Ontario mortgage rates, fixed rate mortgage, variable rate mortgage, mortgage renewal, mortgage broker Canada, MBLAA referral, mortgage calculator, first time buyer Canada',
  alternates: { canonical: '/mortgages' },
  openGraph: {
    title: 'Compare Canadian mortgage rates | TopRates.ca',
    description:
      'Editorial guides to Canadian mortgage rates, fixed vs variable, renewals, and the broker referral process.',
    url: 'https://toprates.ca/mortgages',
    siteName: 'TopRates.ca',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TopRates.ca' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Canadian mortgage rates',
    description: 'Editorial guides to Canadian mortgage rates and the broker referral process.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

export function generateMetadata(): Metadata {
  if (headers().get('x-site') === 'termrates') {
    return {
      title: 'Mortgage rates in Canada — compare purchase rates | TermRates.ca',
      description:
        'Compare live purchase mortgage rates across Canadian lenders — fixed and variable, insured and conventional. Filter to your scenario, see the payment, get matched to a broker.',
      alternates: { canonical: '/mortgages' },
    };
  }
  return topRatesMetadata;
}

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: '#2dd4bf',
};

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: colors.teal,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  marginBottom: 6,
};

const CALCULATORS: { title: string; desc: string; href: string }[] = [
  {
    title: 'Mortgage payment',
    desc: 'What will your monthly payment be at a given rate, amortization, and balance?',
    href: '/coming-soon?tool=mortgage-payment',
  },
  {
    title: 'Affordability',
    desc: 'How much house can you qualify for, given income, debts, and the stress test?',
    href: '/coming-soon?tool=affordability',
  },
  {
    title: 'CMHC insurance',
    desc: 'Estimate the default-insurance premium on a high-ratio mortgage.',
    href: '/coming-soon?tool=cmhc',
  },
  {
    title: 'Land transfer tax',
    desc: 'Provincial and municipal land transfer taxes owed on closing day.',
    href: '/coming-soon?tool=ltt',
  },
];

const PROCESS_STEPS: { n: string; h: string; p: string }[] = [
  {
    n: '01',
    h: 'Tell us about you',
    p: 'A short form: income, down payment, target neighbourhood. No credit pull yet.',
  },
  {
    n: '02',
    h: 'See illustrative options',
    p: 'We outline the rate categories you can expect to qualify for and the trade-offs (fixed vs. variable, term length, lender type).',
  },
  {
    n: '03',
    h: 'Referral to a broker',
    p: 'If you want to proceed, we refer you to a registered mortgage brokerage partner under Ontario MBLAA referral exemption. The broker handles the file from there.',
  },
  {
    n: '04',
    h: 'Compare & choose',
    p: 'Your broker shops the file across multiple lenders and presents the options. The choice of lender and product stays with you.',
  },
];

const FACT_ROWS: { k: string; v: string }[] = [
  {
    k: 'Fixed vs. variable',
    v: 'Fixed locks the rate for a term (often 5 years). Variable moves with the lender’s prime rate. Neither is universally better.',
  },
  {
    k: 'Insured vs. uninsured',
    v: 'Down payment under 20% requires default insurance (CMHC, Sagen, Canada Guaranty). Insured mortgages are typically priced below uninsured because lender risk is lower.',
  },
  {
    k: 'Stress test',
    v: 'You must qualify at the greater of (contract rate + 2%) or 5.25%. Sets the size of mortgage you can carry.',
  },
  {
    k: 'Broker vs. bank',
    v: 'A mortgage broker shops your file across multiple lenders. We refer to a registered partner under MBLAA referral exemption.',
  },
];

function TopRatesMortgagesPage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyDark} 100%)`,
          padding: '56px 32px 80px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(10,126,140,0.06)',
          }}
        />
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
              Home
            </Link>{' '}
            &nbsp;/&nbsp; Mortgages
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 42,
                  lineHeight: 1.1,
                  margin: '0 0 14px',
                  letterSpacing: '-0.5px',
                }}
              >
                Canadian <span style={serifItalic}>mortgage rates,</span>
                <br />
                explained plainly.
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.55,
                  margin: '0 0 28px',
                  maxWidth: 480,
                }}
              >
                Editorial coverage of how Canadian mortgages work — fixed vs. variable, insured
                vs. uninsured, the stress test, and what brokers do for you. When real rates
                appear here, they’ll be cited to lender filings, not made up.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link
                  href="/coming-soon?product=mortgages"
                  className="cta-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: colors.teal,
                    color: '#fff',
                    borderRadius: 10,
                    padding: '13px 22px',
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  Join the waitlist <Icon name="arrowRight" size={15} color="#F2B441" />
                </Link>
                <Link
                  href="#process"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'transparent',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: 10,
                    padding: '13px 22px',
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  How referrals work
                </Link>
              </div>
            </div>

            {/* Right column — editorial fact block (replaces fictional rate form) */}
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: 24,
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
                What to know
              </div>
              {FACT_ROWS.map((row) => (
                <div
                  key={row.k}
                  style={{
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 700,
                      fontSize: 13,
                      color: '#fff',
                      marginBottom: 4,
                    }}
                  >
                    {row.k}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.55,
                    }}
                  >
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MBLAA disclosure */}
      <DisclaimerBlock vertical="mortgage" />

      {/* Rates placeholder */}
      <section style={{ background: '#fff', padding: '56px 32px' }}>
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 22,
              gap: 24,
            }}
          >
            <div>
              <div style={eyebrow}>Rate data</div>
              <h2
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 28,
                  color: colors.navy,
                  margin: 0,
                  letterSpacing: '-0.3px',
                }}
              >
                Rates coming at launch
              </h2>
            </div>
            <div style={{ fontSize: 12.5, color: colors.muted }}>
              Will cite lender filings + posted rates
            </div>
          </div>

          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 32,
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: colors.muted,
                lineHeight: 1.65,
                margin: '0 auto 18px',
                maxWidth: 640,
              }}
            >
              We&rsquo;re standing up the rate-data feed in partnership with a registered
              mortgage brokerage. Until that&rsquo;s in place, this page is editorial: how
              mortgages work, how to evaluate a broker&rsquo;s offer, and what the stress test
              actually measures. When the table goes live, every rate will be sourced and
              timestamped.
            </p>
            <Link
              href="/coming-soon?product=mortgages"
              className="cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: colors.teal,
                color: '#fff',
                borderRadius: 10,
                padding: '12px 22px',
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              Notify me when rates are live{' '}
              <Icon name="arrowRight" size={15} color="#F2B441" />
            </Link>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section
        style={{
          background: colors.cream,
          padding: '56px 32px',
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={eyebrow}>Calculators</div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 28,
              color: colors.navy,
              margin: '6px 0 24px',
              letterSpacing: '-0.3px',
            }}
          >
            Run the numbers before you sign.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 14,
            }}
          >
            {CALCULATORS.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                style={{
                  background: '#fff',
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: 22,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <h4
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 15,
                    color: colors.navy,
                    margin: '0 0 4px',
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    fontSize: 12.5,
                    color: colors.muted,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {c.desc}
                </p>
                <span
                  style={{
                    display: 'block',
                    marginTop: 12,
                    fontSize: 12,
                    color: colors.teal,
                    fontWeight: 600,
                  }}
                >
                  Open calculator →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto', textAlign: 'center' }}>
          <div style={eyebrow}>How referrals work</div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 28,
              color: colors.navy,
              margin: '6px 0 8px',
              letterSpacing: '-0.3px',
            }}
          >
            From your situation to a registered broker.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: colors.muted,
              margin: '0 auto 36px',
              maxWidth: 560,
              lineHeight: 1.55,
            }}
          >
            Mortgage referrals on TopRates.ca are made under Ontario&rsquo;s MBLAA referral
            arrangement exemption to a registered mortgage brokerage partner. We are not a
            registered mortgage brokerage; we do not provide mortgage advice.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
              textAlign: 'left',
            }}
          >
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.n}
                style={{
                  background: '#fff',
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: 22,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 14,
                    color: colors.gold,
                    display: 'block',
                    marginBottom: 10,
                  }}
                >
                  {s.n}
                </span>
                <h5
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 15,
                    color: colors.navy,
                    margin: '0 0 6px',
                  }}
                >
                  {s.h}
                </h5>
                <p
                  style={{
                    fontSize: 12.5,
                    color: colors.muted,
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{
          background: colors.navy,
          padding: '48px 32px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontFamily: fonts.heading,
            fontWeight: 800,
            fontSize: 28,
            color: '#fff',
            margin: '0 0 10px',
          }}
        >
          Compare your <span style={serifItalic}>options.</span>
        </h3>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            margin: '0 auto 22px',
            maxWidth: 480,
          }}
        >
          Mortgage rate-data and broker matching launch later this year. Join the waitlist for
          first-look access and the editorial guide series.
        </p>
        <Link
          href="/coming-soon?product=mortgages"
          className="cta-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: colors.teal,
            color: '#fff',
            borderRadius: 8,
            padding: '14px 28px',
            fontSize: 14,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Join the waitlist <Icon name="arrowRight" size={15} color="#F2B441" />
        </Link>
      </section>

      {/* Contact form */}
      <section
        style={{
          padding: '56px 32px',
          background: colors.surface,
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 28,
              color: colors.navy,
              margin: '0 0 8px',
            }}
          >
            Mortgage question?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: colors.muted,
              lineHeight: 1.6,
              margin: '0 0 22px',
            }}
          >
            Send us a note and we&rsquo;ll be in touch within one business day. Mortgage
            inquiries are referred to a registered partner under MBLAA referral exemption.
          </p>
          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 28,
            }}
          >
            <ContactForm defaultProduct="mortgages" />
          </div>
        </div>
      </section>
    </main>
  );
}

/**
 * Host-branch: the TermRates spoke serves its own purchase-mortgage landing at
 * /mortgages; every other host (incl. the TopRates hub) renders the existing
 * page above, byte-identical. Additive — no TopRates output or canonical change.
 */
export default function MortgagesPage() {
  if (headers().get('x-site') === 'termrates') return <TermRatesMortgageLanding />;
  return <TopRatesMortgagesPage />;
}
