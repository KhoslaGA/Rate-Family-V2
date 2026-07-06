'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/brand/Icon';
import { Bo } from '@/components/brand/Bo';
import { colors, fonts } from '@/styles/tokens';
import { WebhubLink } from '@/components/legal/WebhubLink';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    if (!email.includes('@') || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source: 'coming_soon' }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) setError("Couldn't save your spot. Please try again.");
      else setDone(true);
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      style={{
        background:
          'linear-gradient(160deg, #1B2A4A 0%, #0f1e38 40%, #132340 70%, #1B2A4A 100%)',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -100,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,126,140,0.2) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Bo size={140} pose="thinking" accessory="hardhat" />
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(184,150,12,0.15)',
            border: '1px solid rgba(184,150,12,0.35)',
            borderRadius: 999,
            padding: '6px 14px',
            marginBottom: 22,
            fontFamily: fonts.mono,
            fontSize: 10,
            letterSpacing: 1.5,
            fontWeight: 700,
            color: colors.gold,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: colors.gold }} />
          Coming soon
        </div>

        <h1
          style={{
            fontFamily: fonts.heading,
            fontWeight: 900,
            fontSize: 48,
            letterSpacing: '-1.6px',
            lineHeight: 1.05,
            color: '#fff',
            margin: '0 0 16px',
          }}
        >
          Bo&apos;s still building this one.
        </h1>
        <p
          style={{
            fontFamily: fonts.heading,
            fontSize: 17,
            color: 'rgba(246,239,224,0.7)',
            maxWidth: 520,
            margin: '0 auto 32px',
            lineHeight: 1.55,
          }}
        >
          This product, location, or tool isn&apos;t live yet — but it&apos;s on the roadmap.
          Drop your email and we&apos;ll let you know the moment it ships.
        </p>

        {!done ? (
          <div
            style={{
              display: 'flex',
              gap: 10,
              maxWidth: 460,
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              onKeyDown={(e) => e.key === 'Enter' && submit()}
              style={{
                flex: 1,
                padding: '14px 18px',
                borderRadius: 12,
                border: '1.5px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontFamily: fonts.heading,
                fontSize: 14,
                outline: 'none',
              }}
            />
            <button
              onClick={submit}
              disabled={submitting}
              className="cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 26px',
                borderRadius: 999,
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: '-0.2px',
                cursor: submitting ? 'wait' : 'pointer',
                border: '1px solid transparent',
                whiteSpace: 'nowrap',
                background: colors.teal,
                color: '#fff',
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? 'Saving…' : 'Notify me'} <Icon name="arrowRight" size={18} color="#F2B441" />
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(15,189,201,0.12)',
              border: '1px solid rgba(15,189,201,0.3)',
              borderRadius: 12,
              padding: '14px 20px',
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 14,
              color: '#0fbdc9',
            }}
          >
            <Icon name="check" size={16} color="#0fbdc9" />
            You&rsquo;re on the list! We&rsquo;ll be in touch.
          </div>
        )}
        {error && !done && (
          <div
            style={{
              marginTop: 12,
              fontFamily: fonts.heading,
              fontSize: 13,
              color: '#f59e0b',
            }}
          >
            {error}
          </div>
        )}

        {!done && (
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 11,
              color: 'rgba(246,239,224,0.5)',
              marginTop: 14,
              marginBottom: 0,
              maxWidth: 460,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.5,
            }}
          >
            By joining, you agree to receive launch updates and Canadian insurance education content from{' '}
            <WebhubLink /> (operator of TopRates.ca). Unsubscribe anytime. See our{' '}
            <a href="/privacy" style={{ color: '#0fbdc9' }}>
              Privacy Policy
            </a>
            .
          </p>
        )}

        <div style={{ marginTop: 40 }}>
          <Link
            href="/"
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              color: 'rgba(246,239,224,0.5)',
              letterSpacing: 0.5,
              textDecoration: 'underline',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Icon name="arrowLeft" size={14} color="#F2B441" /> Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
