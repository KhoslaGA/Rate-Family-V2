'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Bo } from '@/components/brand/Bo';
import { colors, fonts } from '@/styles/tokens';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App route error', error);
  }, [error]);

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
          <Bo pose="thinking" accessory="none" size={200} />
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
          Something went sideways
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
          This page hit a snag.
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
          Something on our end didn&rsquo;t work. Try again, or browse the rest of the site
          while we figure it out.
        </p>

        {error.digest && (
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: 'rgba(0,0,0,0.35)',
              marginBottom: 32,
              wordBreak: 'break-all',
            }}
          >
            Reference: {error.digest}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => reset()}
            style={{
              padding: '14px 28px',
              background: colors.navy,
              color: '#fff',
              borderRadius: 999,
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
          <Link
            href="/"
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
        </div>
      </div>
    </main>
  );
}
