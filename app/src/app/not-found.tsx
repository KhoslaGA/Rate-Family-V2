import Link from 'next/link';
import { Bo } from '@/components/brand/Bo';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts } from '@/styles/tokens';

export const metadata = {
  title: '404 — TopRates.ca',
  description:
    'This page doesn\'t exist yet — like our quote engine — planned, once KLC Group Canada Inc. completes RIBO registration. Browse our Canadian insurance education in the meantime.',
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 24px',
        background: '#fbf8f0',
      }}
    >
      <div style={{ maxWidth: 640, width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <Bo pose="sleep" accessory="none" size={200} />
        </div>

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
            fontSize: 40,
            color: colors.navy,
            margin: '0 0 16px',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}
        >
          This page doesn&rsquo;t exist yet.
        </h1>

        <p
          style={{
            fontFamily: fonts.heading,
            fontSize: 17,
            color: colors.muted,
            lineHeight: 1.6,
            margin: '0 auto 32px',
            maxWidth: 480,
          }}
        >
          Some things don&rsquo;t exist yet — like our quote engine — planned, once KLC Group Canada Inc. completes RIBO registration. In the meantime, here&rsquo;s everything that does.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/"
            style={{
              padding: '14px 28px',
              background: colors.navy,
              color: '#fff',
              borderRadius: 999,
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
          <Link
            href="/learn"
            style={{
              padding: '14px 28px',
              background: 'transparent',
              color: colors.navy,
              border: `2px solid ${colors.navy}`,
              borderRadius: 999,
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            Learn
          </Link>
          <Link
            href="/whats-coming"
            style={{
              padding: '14px 28px',
              background: 'transparent',
              color: colors.navy,
              border: `2px solid ${colors.navy}`,
              borderRadius: 999,
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            What&rsquo;s coming <Icon name="arrowRight" size={16} color="#F2B441" />
          </Link>
        </div>
      </div>
    </main>
  );
}
