/**
 * Quote results — coming-soon stub.
 *
 * The mockup at /design/mockups/quote-results.html is the quote-engine UI
 * (carrier-attributed premium quotes with promotional savings deltas, filter
 * sidebar, hero comparison cards, results table). Per CLAUDE.md §5:
 *
 *   "Don't build quote-engine UI. That's the `quote-engine` repo,
 *    ships summer 2027."
 *
 * Building the full UI here would (a) violate the repo boundary, (b) require
 * proprietary quote data that doesn't exist, and (c) attribute premium dollars
 * to specific carriers — explicitly prohibited at v1.
 *
 * This stub is a placeholder route that redirects intent to /get-quotes
 * (existing waitlist) and references the editorial guides instead.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';
import { WebhubLink } from '@/components/legal/WebhubLink';

export const metadata: Metadata = {
  title: 'Quote results — coming with the quote engine launch | TopRates.ca',
  description:
    'Quote comparison launches alongside the TopRates.ca quote engine. Until then, read the editorial guides or talk to a licensed advisor.',
  alternates: { canonical: '/quote-results' },
  robots: { index: false, follow: true },
};

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.teal,
};

export default function QuoteResultsPage() {
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
            Coming with the quote engine launch
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
            Quote comparison <span style={serifItalic}>arrives</span> in 2027.
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
            Live multi-carrier auto and home quote comparison launches alongside KLC Group Canada
            Inc.&rsquo;s planned RIBO registration. Until then, this site is editorial: read the
            guides, understand the reform, and submit a contact form to be matched with a licensed
            advisor when the engine ships.
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
              href="/learn"
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
              Read the guides
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
            Why no quote table today?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: colors.text,
              lineHeight: 1.65,
              margin: '0 0 12px',
            }}
          >
            Showing carrier-attributed quotes (e.g., "Wawanesa $1,838 / yr") requires a live
            policy-engine relationship with each carrier and an Ontario RIBO licence to broker
            the resulting policies. <WebhubLink /> holds neither today. KLC Group Canada Inc., our
            insurance referral partner, holds LLQP (life, accident, sickness) licensure today and
            plans RIBO registration for property &amp; casualty in 2027.
          </p>
          <p
            style={{
              fontSize: 15,
              color: colors.text,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Until those pieces are in place, this route stays a placeholder. The mockup at{' '}
            <code>/design/mockups/quote-results.html</code> describes the intended v2 UI; the
            engineering work to ship it sits in a separate <code>quote-engine</code> repo.
          </p>
        </div>
      </section>
    </main>
  );
}
