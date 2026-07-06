/**
 * Rate Index Report — coming-soon stub.
 *
 * The mockup at /design/mockups/rate-index.html is a quarterly data report
 * built on proprietary quote-engine data ("312,840 quote requests this
 * quarter / Q3 2026 / n = 312,840 / 14 carriers tracked"). None of that
 * data exists. Per CLAUDE.md §5: "No fabricated statistics. Cite FSRA,
 * IBC, Statistics Canada, or carrier filings only."
 *
 * The report becomes feasible when the quote engine has sufficient volume
 * to produce meaningful aggregates AND the methodology has been reviewed
 * by an independent actuary. Until then, this is a methodology preview.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';

export const metadata: Metadata = {
  title: 'Rate Index Report — coming with the quote engine | TopRates.ca',
  description:
    'A quarterly Ontario insurance rate index built on real quote-engine data is planned post-launch. Methodology preview available today.',
  alternates: { canonical: '/rate-index' },
  robots: { index: false, follow: true },
};

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.gold,
};

export default function RateIndexPage() {
  return (
    <main>
      <section
        style={{
          background: colors.navy,
          color: '#fff',
          padding: '64px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              fontFamily: fonts.serif,
              fontSize: 11,
              letterSpacing: 1,
              color: colors.gold,
              marginBottom: 18,
            }}
          >
            ISSUE 0 · METHODOLOGY PREVIEW · 2026
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 52,
              margin: '0 0 18px',
              lineHeight: 1.04,
              letterSpacing: '-0.8px',
              maxWidth: 820,
            }}
          >
            The TopRates Rate <span style={serifItalic}>Index.</span>
          </h1>
          <p
            style={{
              fontFamily: fonts.serif,
              fontSize: 19,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.78)',
              fontStyle: 'italic',
              margin: '0 0 28px',
              maxWidth: 620,
            }}
          >
            A quarterly Ontario rate index ships alongside the 2027 quote-engine launch. This page
            previews the methodology; Issue 1 publishes with real data once we&rsquo;ve cleared
            the volume threshold and an independent actuary has signed off.
          </p>
          <Link
            href="/get-quotes"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: colors.gold,
              color: colors.navyDark,
              borderRadius: 10,
              padding: '12px 18px',
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Notify me when Issue 1 ships{' '}
            <Icon name="arrowRight" size={14} color={colors.navyDark} />
          </Link>
        </div>
      </section>

      <section style={{ padding: '56px 32px' }}>
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: colors.teal,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              marginBottom: 6,
            }}
          >
            Methodology preview
          </div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 28,
              color: colors.navy,
              margin: '6px 0 18px',
              letterSpacing: '-0.3px',
            }}
          >
            What the Index will measure.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.text,
              lineHeight: 1.65,
              margin: '0 0 18px',
            }}
          >
            Each quarter we&rsquo;ll publish the average and median Ontario auto and home premium,
            weighted by postal-code population, with city-by-city movement and a carrier-level
            breakdown for carriers with greater than 1% market share. Source: anonymized quote
            requests through the TopRates quote engine. Confidence intervals reported. Outliers
            (single fields more than 3σ from median) filtered.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '20px 0 28px',
              fontSize: 15,
              color: colors.text,
              lineHeight: 1.65,
            }}
          >
            {[
              'Average + median Ontario auto premium, weighted by postal-code population.',
              'Quarter-over-quarter and year-over-year movement, with confidence intervals.',
              'City-level breakdown for the largest Ontario centres.',
              'Carrier-level breakdown for carriers > 1% market share, peer-reviewed for outliers.',
              'Methodology appendix on filters, weights, and statistical bounds. Open to scrutiny.',
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
                fontSize: 16,
                color: colors.navy,
                margin: '0 0 10px',
              }}
            >
              Why no Q1 issue today?
            </h3>
            <p
              style={{
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Publishing a "rate index" before the quote engine has volume would mean either (a)
              citing inflated sample sizes or (b) running too small a sample to be meaningful.
              Neither is honest. The first issue publishes when the engine has been live long
              enough to produce a sample size that survives peer review.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
