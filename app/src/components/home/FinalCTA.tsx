'use client';

import { useState } from 'react';
import { colors, fonts } from '@/styles/homeTokens';
import { Icon } from '@/components/brand/Icon';
import { Bo } from '@/components/brand/Bo';
import { WebhubLink } from '@/components/legal/WebhubLink';

export default function FinalCTA() {
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
        body: JSON.stringify({ email, source: 'home_final_cta' }),
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
        background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyDark} 100%)`,
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: -80,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,83,9,0.22) 0%, transparent 70%)',
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
        <div className="final-cta-grid">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(180,83,9,0.15)',
                border: '1px solid rgba(180,83,9,0.35)',
                borderRadius: 999,
                padding: '5px 12px',
                marginBottom: 20,
                fontFamily: fonts.sans,
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: 1.5,
                color: colors.amber,
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: colors.amber,
                }}
              />
              Launching Ontario · once KLC Group completes RIBO registration
            </div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 46,
                color: '#fff',
                margin: '0 0 16px',
                letterSpacing: '-1.4px',
                lineHeight: 1.05,
              }}
            >
              Be the first to compare.
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 17,
                color: 'rgba(246,239,224,0.7)',
                lineHeight: 1.55,
                margin: '0 0 28px',
                maxWidth: 520,
              }}
            >
              Join the launch list and we&rsquo;ll let you know the moment carriers
              turn on. Educational content in the meantime — no spam, no pressure,
              unsubscribe whenever.
            </p>

            {!done ? (
              <div style={{ display: 'flex', gap: 10, maxWidth: 460, flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  style={{
                    flex: 1,
                    minWidth: 220,
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
                  {submitting ? 'Saving…' : 'Join the launch list'}{' '}
                  <Icon name="arrowRight" size={14} color="#F2B441" />
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
                You&rsquo;re on the list. We&rsquo;ll be in touch.
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
                  color: 'rgba(246,239,224,0.45)',
                  marginTop: 14,
                  maxWidth: 460,
                  lineHeight: 1.5,
                }}
              >
                By joining you agree to receive launch updates from{' '}
                <WebhubLink /> (operator of TopRates.ca). See our{' '}
                <a href="/privacy" style={{ color: '#0fbdc9' }}>Privacy Policy</a>.
              </p>
            )}
          </div>

          <div className="final-cta-bo">
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                padding: '28px 28px 24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 140,
                  height: 140,
                  margin: '0 auto 18px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(180,83,9,0.18) 0%, transparent 70%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Bo size={120} pose="wave" accessory="none" />
              </div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 10,
                  fontWeight: 800,
                  color: colors.amber,
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                MEET BO · YOUR GUIDE
              </div>
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 22,
                  color: '#fff',
                  margin: '0 0 10px',
                  letterSpacing: '-0.5px',
                }}
              >
                Building something better.
              </div>
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 13,
                  color: 'rgba(246,239,224,0.6)',
                  lineHeight: 1.55,
                }}
              >
                Bo&rsquo;s our insurance guide — hard at work making Canadian
                insurance simple, transparent, and actually on your side.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
