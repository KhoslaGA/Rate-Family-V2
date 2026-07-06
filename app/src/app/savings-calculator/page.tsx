/**
 * Savings calculator — coming-soon stub.
 *
 * The mockup at /design/mockups/savings-calculator.html is built on
 * "median of 312,840 anonymized Ontario quotes" — proprietary quote-engine
 * data that doesn't exist. Per CLAUDE.md §5: "No fabricated statistics."
 *
 * The calculator becomes feasible when (a) the quote-engine produces real
 * data volume and (b) Webhub4u Inc. has the regulatory standing to surface
 * specific savings claims (Bill C-59 substantiation). Until then, this is
 * an editorial preview that explains the methodology and links to the
 * reform guide for actual policy-impact estimates.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';

export const metadata: Metadata = {
  title: 'Savings calculator — coming with the quote engine | TopRates.ca',
  description:
    'An auto-insurance savings calculator built on real quote-engine data is planned for the 2027 launch. Read the reform guide for current policy-impact estimates.',
  alternates: { canonical: '/savings-calculator' },
  robots: { index: false, follow: true },
};

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.teal,
};

export default function SavingsCalculatorPage() {
  return (
    <main>
      <section
        style={{
          padding: '80px 32px 56px',
          background: colors.cream,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: colors.gold,
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Coming with the quote engine
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 44,
              color: colors.navy,
              margin: '0 0 16px',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
            }}
          >
            A <span style={serifItalic}>savings estimator</span> needs real data.
          </h1>
          <p
            style={{
              fontSize: 17,
              color: colors.muted,
              lineHeight: 1.6,
              maxWidth: 580,
              margin: '0 auto 28px',
            }}
          >
            A meaningful savings estimator compares your current premium to the median rate other
            drivers in your postal code, age, and vehicle profile are getting today. That requires
            quote-engine data we don&rsquo;t yet have. When the engine ships, this page becomes a
            real tool with cited methodology and confidence intervals — not a marketing widget.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/get-quotes"
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
              href="/auto-insurance"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#fff',
                color: colors.navy,
                border: `1px solid ${colors.border}`,
                borderRadius: 10,
                padding: '13px 22px',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Read the auto guide
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 32px' }}>
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            background: '#fff',
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            padding: 32,
          }}
        >
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 20,
              color: colors.navy,
              margin: '0 0 12px',
            }}
          >
            Want to estimate the July 2026 reform impact today?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: colors.text,
              lineHeight: 1.65,
              margin: '0 0 16px',
            }}
          >
            The Ontario auto reform shifts several accident benefits from mandatory to optional.
            For most drivers the practical effect is a moderate premium reduction if you opt for
            the default tier. The reform guide walks through the math and which benefits to keep
            based on your specific situation.
          </p>
          <Link
            href="/auto-insurance"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: colors.teal,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Read the reform guide{' '}
            <Icon name="arrowRight" size={14} color="#F2B441" />
          </Link>
        </div>
      </section>
    </main>
  );
}
