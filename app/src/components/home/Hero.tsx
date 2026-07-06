'use client';

import { useState } from 'react';
import { Icon } from '../brand/Icon';
import { Bo } from '../brand/Bo';
import { colors, fonts } from '@/styles/homeTokens';
import { WebhubLink } from '@/components/legal/WebhubLink';


export default function Hero() {
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
        body: JSON.stringify({ email, source: 'home_hero' }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setError("Couldn't save your spot. Please try again.");
      } else {
        setDone(true);
      }
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
        padding: '88px 0 108px',
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
          background:
            'radial-gradient(circle, rgba(10,126,140,0.2) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: -140,
          left: -120,
          width: 440,
          height: 440,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(184,150,12,0.1) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
        }}
      >
        <div className="hero-grid-v2">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'rgba(184,150,12,0.15)',
                border: '1px solid rgba(184,150,12,0.35)',
                borderRadius: 999,
                padding: '6px 14px',
                marginBottom: 26,
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: 1.5,
                fontWeight: 700,
                color: colors.gold,
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: colors.gold,
                }}
              />
              INDEPENDENT CANADIAN INSURANCE EDUCATION
            </div>
            <h1 className="hero-h1-v2">
              Insurance,
              <br />
              in <span style={{ color: '#0fbdc9' }}>plain English.</span>
            </h1>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 17,
                color: 'rgba(246,239,224,0.68)',
                maxWidth: 560,
                margin: '24px 0 32px',
                lineHeight: 1.6,
              }}
            >
              Reviewed by LLQP-licensed advisors at KLC Group Canada Inc. and the editorial team at TopRates.ca · operated by <WebhubLink />. We read the fine print. We rewrite it in English. You decide what to do with it.
            </p>

            {!done ? (
              <div className="hero-form-v2">
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
                  {submitting ? 'Saving…' : 'Join waitlist'} <Icon name="arrowRight" size={18} color="#F2B441" />
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
                  marginTop: 12,
                  marginBottom: 0,
                  lineHeight: 1.5,
                  maxWidth: 460,
                }}
              >
                By joining, you agree to receive launch updates and Canadian insurance education content
                from <WebhubLink /> (operator of TopRates.ca). Unsubscribe anytime. See our{' '}
                <a href="/privacy" style={{ color: '#0fbdc9' }}>
                  Privacy Policy
                </a>
                .
              </p>
            )}

            <div style={{ display: 'flex', gap: 22, marginTop: 22, flexWrap: 'wrap' }}>
              {['No spam, ever', 'Free to compare', '100% Canadian'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    letterSpacing: 0.5,
                    color: 'rgba(246,239,224,0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span style={{ color: '#0fbdc9' }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Bo pose="clipboard" accessory="none" size={320} />
          </div>
        </div>
      </div>
    </section>
  );
}
