/**
 * For Brokers — coming-soon stub.
 *
 * The mockup at /design/mockups/for-brokers.html describes a P&C broker
 * partner program with live metrics: "$48,210 commission last 30 days /
 * 412 active partner brokerages / $640k paid to partners in 2025". None of
 * that exists today.
 *
 * The actual partnership model — RIBO-licensed Ontario brokerages referring
 * P&C overflow to TopRates — depends on KLC Group Canada Inc. completing
 * RIBO registration (targeted 2027). Until then, this page is honest about
 * what's coming and captures broker interest.
 *
 * Compliance scrubs vs. mockup:
 *   - All fabricated KPIs dropped ($640k paid, 412 brokerages, $48,210 last
 *     30 days, 72% quote-to-bind, 4.2 days time-to-bind).
 *   - James Nakamura testimonial dropped (personal name + fabricated quote).
 *   - Specific commission percentages (50%, 30%, 55%) replaced with
 *     "competitive · published at launch" placeholder.
 *   - 8-integration logo grid (Salesforce, Applied Epic, PowerBroker, etc.)
 *     dropped — no integrations exist yet.
 *   - Application form simplified to a "register interest" capture.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';
import { WebhubLink } from '@/components/legal/WebhubLink';

export const metadata: Metadata = {
  title: 'For Ontario brokerages — partner program planned 2027 | TopRates.ca',
  description:
    'A P&C broker partner program is planned for 2027, alongside KLC Group Canada Inc. RIBO registration. Register interest today.',
  alternates: { canonical: '/for-brokers' },
  robots: { index: false, follow: true },
};

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.teal,
};

export default function ForBrokersPage() {
  return (
    <main>
      <section
        style={{
          padding: '72px 32px 56px',
          background: `linear-gradient(180deg, #fff, ${colors.cream})`,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={{ fontSize: 12, color: colors.muted, marginBottom: 14 }}>
            <Link href="/" style={{ color: colors.muted, textDecoration: 'none' }}>
              Home
            </Link>{' '}
            &nbsp;/&nbsp; For Brokers
          </div>
          <div
            style={{
              display: 'inline-flex',
              gap: 8,
              alignItems: 'center',
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 20,
              padding: '6px 14px',
              fontSize: 12,
              color: colors.navy,
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: colors.gold,
                borderRadius: '50%',
              }}
            />
            Partner program · planned 2027 · Ontario
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 48,
              color: colors.navy,
              margin: '0 0 18px',
              lineHeight: 1.05,
              letterSpacing: '-0.6px',
              maxWidth: 820,
            }}
          >
            For RIBO-licensed brokerages: a partner program{' '}
            <span style={serifItalic}>coming with the 2027 launch.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: colors.muted,
              lineHeight: 1.55,
              margin: '0 0 24px',
              maxWidth: 620,
            }}
          >
            When KLC Group Canada Inc. completes RIBO registration in 2027 and the TopRates.ca
            quote-comparison engine launches, we plan to open a revenue-share program for Ontario
            brokerages who want to monetize quote requests outside their appetite without losing
            the client. Until then, we&rsquo;re capturing interest from prospective partner
            brokerages.
          </p>
          <Link
            href="/contact?topic=for-brokers"
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
            Register interest <Icon name="arrowRight" size={15} color="#F2B441" />
          </Link>
        </div>
      </section>

      <section style={{ padding: '56px 32px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 22,
              color: colors.navy,
              margin: '0 0 14px',
            }}
          >
            What we&rsquo;re planning
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 28px',
              fontSize: 15,
              color: colors.text,
              lineHeight: 1.65,
            }}
          >
            {[
              'Revenue-share on referred P&C policies (auto + home, bundled where possible).',
              'No exclusivity. Partner with us and your existing markets.',
              'No minimum referral volume.',
              'Commission paid monthly via EFT. Trailing renewals for as long as policies stay in force.',
              'Compatible with whatever management system you use (Applied Epic, PowerBroker, Salesforce, or just email).',
            ].map((row) => (
              <li
                key={row}
                style={{
                  padding: '8px 0 8px 22px',
                  position: 'relative',
                  borderTop: `1px solid ${colors.border}`,
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
                {row}
              </li>
            ))}
          </ul>

          <div
            style={{
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 24,
            }}
          >
            <h3
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 15,
                color: colors.navy,
                margin: '0 0 8px',
              }}
            >
              The detail comes at launch
            </h3>
            <p
              style={{
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Specific commission percentages, integration timelines, partner-portal features,
              and the partner agreement get published when the program opens. We&rsquo;re
              capturing interest now so we can reach out to prospective partners before
              general announcement. <WebhubLink /> is the operator; KLC Group Canada Inc.
              handles the licensed brokerage side once RIBO registration is granted.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '48px 32px',
          background: colors.cream,
          textAlign: 'center',
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <h3
          style={{
            fontFamily: fonts.heading,
            fontWeight: 700,
            fontSize: 22,
            color: colors.navy,
            margin: '0 0 12px',
          }}
        >
          Want to be on the early list?
        </h3>
        <p
          style={{
            fontSize: 14,
            color: colors.muted,
            margin: '0 auto 22px',
            maxWidth: 520,
          }}
        >
          Drop us a note via the contact form with your brokerage name and RIBO licence number.
          We&rsquo;ll add you to the pre-launch list and reach out as the program is finalized.
        </p>
        <Link
          href="/contact?topic=for-brokers"
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
          Send a note <Icon name="arrowRight" size={15} color="#F2B441" />
        </Link>
      </section>
    </main>
  );
}
