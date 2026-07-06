/**
 * Travel insurance landing — ported from /design/mockups/travel-insurance.html (2026-05-11).
 *
 * Compliance scrubs vs. mockup:
 *   - "Coming Q4 2026" hardcoded date dropped; KLC handles travel today.
 *   - "624 on the waitlist", "+12 this week" counters dropped (fabricated).
 *   - "30% off launch pricing" promotional claim dropped.
 *   - Plan pricing ("From $48 · 7 days · Europe" etc.) relabeled as
 *     illustrative ranges, not committed quotes.
 *   - Footer entity + RIBO claims dropped.
 *
 * Preserved: DisclaimerBlock vertical="life" (covers travel today via KLC),
 * ContactForm with defaultProduct="travel-insurance".
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import ContactForm from '@/components/contact/ContactForm';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';
import HealthRateTravel from '@/components/healthrate/pages/Travel';

// TopRates metadata is preserved verbatim; HealthRate (travel-insurance is an
// owned route for that host) supplies its own via generateMetadata below.
const topRatesMetadata: Metadata = {
  title: 'Travel insurance — single-trip, multi-trip, visitors | TopRates.ca',
  description:
    'Editorial coverage of Canadian travel insurance: single-trip, annual multi-trip, and visitors-to-Canada plans. Insurance referrals to LLQP-licensed advisors at KLC Group Canada Inc.',
  alternates: { canonical: '/travel-insurance' },
};

export function generateMetadata(): Metadata {
  if (headers().get('x-site') === 'healthrate') {
    return {
      title: 'Visitor & travel medical insurance, explained | HealthRate.ca',
      description:
        'Travel medical insurance for visitors to Canada, students and snowbirds — what it covers, what it excludes, and how to read a policy before anyone buys. Education only.',
      alternates: { canonical: '/travel-insurance' },
    };
  }
  return topRatesMetadata;
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

const PLAN_CARDS: { title: string; meta: string; desc: string; bullets: string[] }[] = [
  {
    title: 'Single trip',
    meta: 'Illustrative · pricing varies by destination, length, age',
    desc: 'One trip, one premium. Covers emergency medical, trip cancellation, baggage, and trip interruption. The right choice when you travel once or twice a year.',
    bullets: [
      'Emergency medical (typical Canadian policies cover into the millions)',
      'Trip cancellation and interruption',
      'Lost or delayed baggage',
      'Adventure-sport riders available',
    ],
  },
  {
    title: 'Annual multi-trip',
    meta: 'Illustrative · one premium covers every trip in the policy year',
    desc: 'One annual premium covers every trip within a year. Each trip is capped at a defined length (often 15–60 days). The right choice for travellers taking 3+ trips a year.',
    bullets: [
      'One annual premium covers every trip',
      'Standard per-trip length cap; extendable',
      'Coverage typically extends to spouse and dependants',
      'Best value when you travel often',
    ],
  },
  {
    title: 'Visitors to Canada',
    meta: 'Illustrative · per-day pricing for non-residents',
    desc: 'For non-residents visiting Canada — including Super Visa applicants who must show insurance as part of the visa process. Covers emergency medical while in Canada.',
    bullets: [
      'For non-residents visiting Canada',
      'Required for Super Visa applications',
      'Emergency medical coverage in Canada',
      'Stable pre-existing conditions often covered',
    ],
  },
];

const COVERAGE_GAPS: { ok: boolean; title: string; body: string }[] = [
  {
    ok: true,
    title: 'Emergency medical (with caveats)',
    body: 'Most premium cards include emergency medical, but only for the first 15–21 days of a trip. Longer trips need standalone coverage for the remainder.',
  },
  {
    ok: false,
    title: 'Trip cancellation often capped low',
    body: 'Many cards cap cancellation around $1,500/person — a single international flight already exceeds that for most destinations.',
  },
  {
    ok: false,
    title: 'Pre-existing conditions often excluded',
    body: 'Default credit-card travel coverage typically excludes pre-existing conditions, even stable ones. Standalone policies have explicit "stable period" rules.',
  },
  {
    ok: false,
    title: 'Reduced coverage for older travellers',
    body: 'Coverage often ends or drops sharply past age 60 or 65 — exactly when emergency medical is most likely to be needed.',
  },
  {
    ok: false,
    title: 'Adventure sports usually excluded',
    body: 'Skiing, scuba, motorbike rentals, and some hiking activities are commonly excluded on major Canadian cards. Adventure-sport riders are sold separately.',
  },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Do I need travel insurance if my credit card covers me?',
    a: 'It depends on the trip length, your age, and the card. Most premium cards cover the first 15–21 days of a trip; pre-existing conditions and adventure sports are commonly excluded. Read the card’s certificate of insurance (search the issuer’s site) before relying on it.',
  },
  {
    q: 'What does "stable pre-existing" mean?',
    a: 'Most policies require any pre-existing condition to be "stable" for a defined period before the trip — typically 90 or 180 days. "Stable" generally means no new symptoms, no medication change, and no specialist consultation for that condition in the window. The certificate spells out the exact rule.',
  },
  {
    q: 'Can I get travel insurance after I leave?',
    a: 'Most policies must be purchased before departure. A few carriers offer post-departure plans but at higher premiums and with stricter pre-existing exclusions. Buy before you go.',
  },
  {
    q: 'How does TopRates make money on travel insurance?',
    a: 'Insurance inquiries through TopRates.ca are referred to KLC Group Canada Inc., a licensed LLQP advisory firm. Webhub4u Inc. (operator of TopRates.ca) receives a per-referral fee from KLC. Carrier commissions go to KLC’s licensed advisors. See /legal.',
  },
];

function TopRatesTravelInsurancePage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          padding: '72px 32px 64px',
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyDark} 100%)`,
          color: '#fff',
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
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                Home
              </Link>{' '}
              &nbsp;/&nbsp; Travel Insurance
            </div>
            <h1
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 48,
                lineHeight: 1.08,
                margin: '0 0 16px',
                letterSpacing: '-0.6px',
              }}
            >
              Travel insurance for
              <br />
              <span style={{ ...serifItalic, color: '#2dd4bf' }}>trips</span> you actually take.
            </h1>
            <p
              style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.55,
                margin: '0 0 28px',
                maxWidth: 460,
              }}
            >
              Single-trip, annual multi-trip, or visitors-to-Canada — we&rsquo;ll explain when
              your credit-card coverage is enough and when it isn&rsquo;t. KLC Group Canada
              Inc.&rsquo;s LLQP-licensed advisors quote and bind policies today.
            </p>

            <Link
              href="#contact"
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
              Talk to a licensed advisor{' '}
              <Icon name="arrowRight" size={15} color="#F2B441" />
            </Link>
          </div>

          {/* Decorative passport-style card */}
          <div
            style={{
              width: 320,
              height: 440,
              background: 'linear-gradient(135deg, #0a3a4a 0%, #082730 100%)',
              borderRadius: 14,
              padding: 28,
              marginLeft: 'auto',
              boxShadow: '0 32px 60px rgba(0,0,0,0.4)',
              transform: 'rotate(-4deg)',
              position: 'relative',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            role="presentation"
            aria-hidden="true"
          >
            <div
              style={{
                position: 'absolute',
                inset: 14,
                border: '1px solid rgba(184,150,12,0.25)',
                borderRadius: 8,
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'rgba(184,150,12,0.1)',
                border: '2px solid rgba(184,150,12,0.4)',
                margin: '36px auto 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.gold,
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 22,
              }}
            >
              ✈
            </div>
            <div
              style={{
                textAlign: 'center',
                fontFamily: fonts.serif,
                fontStyle: 'italic',
                color: 'rgba(184,150,12,0.85)',
                fontSize: 13,
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              Illustrative coverage
            </div>
            <div
              style={{
                textAlign: 'center',
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 19,
                color: '#fff',
                letterSpacing: 1.5,
                marginBottom: 24,
              }}
            >
              EXAMPLE
            </div>
            {[
              { l: 'Plan type', v: 'MULTI-TRIP · ANNUAL' },
              { l: 'Emergency medical', v: 'Per certificate' },
              { l: 'Trip cancel', v: 'Per certificate' },
              { l: 'Baggage', v: 'Per certificate' },
              { l: 'Adventure sports', v: 'OPTIONAL RIDER' },
              { l: 'Pre-existing', v: 'STABLE PERIOD' },
            ].map((row) => (
              <div
                key={row.l}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '6px 0',
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.4)',
                  borderBottom: '1px dotted rgba(255,255,255,0.08)',
                  letterSpacing: 0.5,
                }}
              >
                <span>{row.l}</span>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DisclaimerBlock vertical="life" />

      {/* Plan types */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={eyebrow}>Three plans · pick the one that fits the trip</div>
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
            Single trip, multi-trip, or{' '}
            <span style={serifItalic}>visitors to Canada.</span>
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
            Most travellers are over-insured on one trip and under-insured on the next.
            Here&rsquo;s how to know which plan fits.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
          >
            {PLAN_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#fff',
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: '26px 24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 19,
                    color: colors.navy,
                    margin: '0 0 6px',
                  }}
                >
                  {card.title}
                </h3>
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 600,
                    fontSize: 12,
                    color: colors.muted,
                    margin: '0 0 14px',
                    paddingBottom: 14,
                    borderBottom: `1px solid ${colors.border}`,
                  }}
                >
                  {card.meta}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: colors.text,
                    lineHeight: 1.6,
                    margin: '0 0 14px',
                  }}
                >
                  {card.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 12.5 }}>
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        padding: '4px 0 4px 20px',
                        position: 'relative',
                        lineHeight: 1.5,
                        color: colors.text,
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage gaps */}
      <section
        style={{
          background: colors.surface,
          padding: '56px 32px',
          borderTop: `1px solid ${colors.border}`,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <div>
            <div style={eyebrow}>Reality check</div>
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
              Is your{' '}
              <span style={serifItalic}>credit-card</span> coverage enough?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: colors.muted,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Premium credit cards advertise travel insurance, but when you read the fine print
              the gaps are wider than most travellers realize. Here are the patterns that show up
              most often.
            </p>
          </div>

          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: '24px 28px',
            }}
          >
            <h4
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 14,
                color: colors.navy,
                margin: '0 0 14px',
              }}
            >
              Common credit-card travel coverage
            </h4>
            {COVERAGE_GAPS.map((gap, i) => (
              <div
                key={gap.title}
                style={{
                  display: 'flex',
                  gap: 10,
                  padding: '10px 0',
                  borderTop: i === 0 ? 'none' : `1px solid ${colors.border}`,
                  paddingTop: i === 0 ? 0 : 10,
                  alignItems: 'flex-start',
                  fontSize: 13.5,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: 1,
                    color: gap.ok ? colors.teal : colors.red,
                    fontWeight: 800,
                  }}
                >
                  {gap.ok ? '✓' : '✗'}
                </span>
                <div>
                  <b style={{ color: colors.navy, fontWeight: 600 }}>{gap.title}</b>
                  <br />
                  <span style={{ color: colors.muted }}>{gap.body}</span>
                </div>
              </div>
            ))}
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

      {/* Bottom CTA */}
      <section
        id="contact"
        style={{
          padding: '64px 32px',
          background: colors.cream,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 32,
              color: colors.navy,
              margin: '0 0 8px',
              textAlign: 'center',
            }}
          >
            Get a <span style={serifItalic}>travel quote.</span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: colors.muted,
              margin: '0 auto 22px',
              lineHeight: 1.6,
              maxWidth: 560,
              textAlign: 'center',
            }}
          >
            Send us a note with your trip and we&rsquo;ll route the inquiry to KLC Group Canada
            Inc.&rsquo;s LLQP-licensed advisors. Reply within one business day.
          </p>
          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 28,
            }}
          >
            <ContactForm defaultProduct="travel-insurance" />
          </div>
        </div>
      </section>
    </main>
  );
}

// travel-insurance is owned by HealthRate; on that host we render its bespoke
// education landing. Every other host keeps the TopRates page byte-identical.
export default function TravelInsurancePage() {
  if (headers().get('x-site') === 'healthrate') return <HealthRateTravel />;
  return <TopRatesTravelInsurancePage />;
}
