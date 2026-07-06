import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import { Bo } from '@/components/brand/Bo';
import { colors, fonts } from '@/styles/tokens';
import { WebhubLink } from '@/components/legal/WebhubLink';
import { Icon } from '@/components/brand/Icon';

export const metadata: Metadata = {
  title: 'Quote Comparison — Planned at KLC Group Canada Inc. RIBO Launch | TopRates.ca',
  description:
    'TopRates.ca quote comparison and brokerage are planned, once KLC Group Canada Inc. completes RIBO registration. Independent Canadian insurance education today.',
  alternates: { canonical: '/get-quotes' },
  robots: { index: false, follow: true },
};

export default function GetQuotesPage() {
  return (
    <>
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.navy} 0%, #0f1e38 100%)`,
          padding: '64px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 880,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '0 0 auto' }}>
            <Bo pose="clipboard" accessory="none" size={140} />
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                letterSpacing: 2,
                color: colors.gold,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              INDEPENDENT CANADIAN INSURANCE EDUCATION
            </div>
            <h1
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 36,
                color: '#fff',
                margin: '0 0 14px',
                lineHeight: 1.15,
                letterSpacing: '-1px',
              }}
            >
              The quote engine isn&rsquo;t live yet.
            </h1>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 16,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              TopRates.ca is operated by <WebhubLink />, a Canadian financial technology company.
              Quote comparison and brokerage services are planned, once KLC Group Canada Inc. completes RIBO registration alongside KLC Group
              Canada Inc.&rsquo;s RIBO registration. Until then, you have two options below.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#fbf8f0', padding: '64px 24px' }}>
        <div
          style={{
            maxWidth: 880,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '24px 22px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 18,
                color: colors.navy,
                margin: '0 0 8px',
                letterSpacing: '-0.4px',
              }}
            >
              Get a licensed life insurance referral
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 14px',
              }}
            >
              Life insurance content is reviewed by LLQP-licensed advisors at KLC Group Canada
              Inc. Visit{' '}
              <Link href="/life-insurance" style={{ color: colors.teal, textDecoration: 'underline' }}>
                /life-insurance
              </Link>{' '}
              to be connected with a licensed advisor.
            </p>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.teal,
                fontWeight: 700,
                letterSpacing: 1,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              Available now <Icon name="arrowDown" size={14} color="#F2B441" />
            </span>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '24px 22px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 18,
                color: colors.navy,
                margin: '0 0 8px',
                letterSpacing: '-0.4px',
              }}
            >
              Read the education library
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 14px',
              }}
            >
              Plain-English coverage breakdowns across auto, home, life, business, travel, and
              mortgage. Updated as Canadian regulations change.
            </p>
            <Link
              href="/learn"
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.teal,
                fontWeight: 700,
                letterSpacing: 1,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              Browse /learn <Icon name="arrowRight" size={14} color="#F2B441" />
            </Link>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '24px 22px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 18,
                color: colors.navy,
                margin: '0 0 8px',
                letterSpacing: '-0.4px',
              }}
            >
              See what&rsquo;s coming
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 14,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 14px',
              }}
            >
              The full timeline for the planned KLC Group Canada Inc. RIBO-registered quote-comparison platform launch and the
              KLC Group Canada Inc. RIBO registration.
            </p>
            <Link
              href="/whats-coming"
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.teal,
                fontWeight: 700,
                letterSpacing: 1,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              Read the roadmap <Icon name="arrowRight" size={14} color="#F2B441" />
            </Link>
          </div>
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 26,
              color: colors.navy,
              margin: '0 0 8px',
              letterSpacing: '-0.6px',
            }}
          >
            Send us a note
          </h2>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 15,
              color: colors.muted,
              lineHeight: 1.55,
              margin: '0 0 24px',
            }}
          >
            Tell us what you&rsquo;re looking for. For insurance inquiries, your information may be
            shared with KLC Group Canada Inc. See our{' '}
            <Link href="/privacy" style={{ color: colors.teal }}>
              Privacy Policy
            </Link>
            .
          </p>
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              padding: '28px 24px',
              border: `1px solid ${colors.borderSoft}`,
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
