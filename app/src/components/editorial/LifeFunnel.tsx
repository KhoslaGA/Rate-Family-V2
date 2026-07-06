'use client';

import { useState } from 'react';
import { colors, fonts } from '@/styles/editorialTokens';
import { Pill } from './Pill';
import { ArrowRight, Lock, Users } from './icons';

type Goal = 'term' | 'whole' | 'critical' | 'unsure';

export default function LifeFunnel() {
  const [goal, setGoal] = useState<Goal>('term');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    province: 'Ontario',
  });

  const submit = async () => {
    if (!form.email.includes('@') || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          phone: form.phone,
          province: form.province,
          goal,
          source: 'home_life_funnel',
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setError("Couldn't send your request. Please try again.");
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
    <section id="funnel" style={{ padding: '96px 0', background: colors.cream }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            background: colors.navy,
            color: '#fff',
            borderRadius: 28,
            padding: 56,
            position: 'relative',
            overflow: 'hidden',
          }}
          className="ed-funnel"
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -140,
              left: -100,
              width: 480,
              height: 480,
              background:
                'radial-gradient(circle, rgba(16,185,129,.16), transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
          <div className="ed-funnel-grid">
            <div>
              <Pill
                tone="advisor"
                style={{ background: 'rgba(16,185,129,.18)', color: '#6ee7b7' }}
                icon={<Users size={14} color="currentColor" />}
              >
                Licensed life-insurance help
              </Pill>
              <h2
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 3.4vw, 40px)',
                  color: '#fff',
                  margin: '16px 0 24px',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                }}
              >
                Find coverage that fits — without the runaround.
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  marginTop: 8,
                  padding: 0,
                }}
              >
                {[
                  { n: 1, title: 'Tell us a little about you', sub: 'Takes about two minutes. No medical exam to start.' },
                  { n: 2, title: 'A licensed Canadian advisor calls you', sub: 'Real human, no obligation, no pressure.' },
                  { n: 3, title: 'Apply digitally — only if you choose', sub: 'Compare real options and decide on your own time.' },
                ].map((s) => (
                  <li
                    key={s.n}
                    style={{
                      display: 'flex',
                      gap: 16,
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,.1)',
                        border: '1px solid rgba(255,255,255,.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: colors.accent,
                        flexShrink: 0,
                        fontSize: 15,
                        fontFamily: fonts.body,
                      }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <b style={{ display: 'block', color: '#fff', fontSize: 16, fontFamily: fonts.body }}>
                        {s.title}
                      </b>
                      <span style={{ color: 'rgba(255,255,255,.7)', fontSize: 14.5, fontFamily: fonts.body }}>
                        {s.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 30,
                color: colors.ink,
                position: 'relative',
              }}
            >
              <h3 style={{ fontFamily: fonts.heading, fontSize: 20, marginBottom: 6, color: colors.navy, fontWeight: 600 }}>
                {done ? "You're on the list" : 'Get a free call back'}
              </h3>
              <p style={{ fontSize: 14, color: colors.muted, marginBottom: 20, fontFamily: fonts.body }}>
                {done
                  ? "An advisor at KLC Group will reach out within one business day."
                  : 'A licensed advisor will reach out — usually within one business day.'}
              </p>

              {!done ? (
                <>
                  <Field label="Full name">
                    <input
                      type="text"
                      placeholder="Jordan Singh"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      type="tel"
                      placeholder="(416) 555-0142"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </Field>
                  <Field label="Province">
                    <select
                      value={form.province}
                      onChange={(e) => setForm({ ...form, province: e.target.value })}
                      style={inputStyle}
                    >
                      <option>Ontario</option>
                      <option>Alberta</option>
                      <option>British Columbia</option>
                      <option>Manitoba</option>
                      <option>Other / not sure</option>
                    </select>
                  </Field>

                  <Field label="What are you looking for?">
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 8,
                      }}
                    >
                      {(
                        [
                          { v: 'term', l: 'Term life' },
                          { v: 'whole', l: 'Whole life' },
                          { v: 'critical', l: 'Critical illness' },
                          { v: 'unsure', l: 'Not sure yet' },
                        ] as { v: Goal; l: string }[]
                      ).map((opt) => (
                        <label
                          key={opt.v}
                          style={{
                            display: 'block',
                            textAlign: 'center',
                            padding: 10,
                            border: `1.5px solid ${goal === opt.v ? colors.accent : colors.border}`,
                            background: goal === opt.v ? 'rgba(224,162,39,.1)' : 'transparent',
                            borderRadius: 8,
                            fontSize: 13.5,
                            fontWeight: 600,
                            cursor: 'pointer',
                            color: colors.navy,
                            fontFamily: fonts.body,
                            transition: 'all 0.15s',
                          }}
                        >
                          <input
                            type="radio"
                            name="goal"
                            checked={goal === opt.v}
                            onChange={() => setGoal(opt.v)}
                            style={{ position: 'absolute', opacity: 0 }}
                          />
                          {opt.l}
                        </label>
                      ))}
                    </div>
                  </Field>

                  <p
                    style={{
                      fontSize: 12,
                      color: colors.muted,
                      lineHeight: 1.5,
                      margin: '14px 0 16px',
                      fontFamily: fonts.body,
                    }}
                  >
                    By submitting, your details are shared with KLC Group Canada Inc., an LLQP-licensed
                    advisor regulated by FSRA, who pays TopRates.ca a referral fee. You&rsquo;re under
                    no obligation, and the price you pay is never increased by this referral.
                  </p>

                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="ed-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {submitting ? 'Sending…' : 'Request my free call'}
                    <ArrowRight size={18} color={colors.navy} />
                  </button>

                  {error && (
                    <p style={{ fontSize: 13, color: '#CC3333', marginTop: 10, fontFamily: fonts.body }}>
                      {error}
                    </p>
                  )}

                  <p
                    style={{
                      fontSize: 12,
                      color: colors.muted,
                      textAlign: 'center',
                      marginTop: 14,
                      fontFamily: fonts.body,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                    }}
                  >
                    <Lock size={13} color={colors.muted} />
                    Your information is kept private and only used for this referral.
                  </p>
                </>
              ) : (
                <div
                  style={{
                    padding: '24px 0',
                    fontFamily: fonts.body,
                    fontSize: 15,
                    color: colors.navy,
                    lineHeight: 1.6,
                  }}
                >
                  Thanks — we&rsquo;ve forwarded your request to a licensed advisor at KLC Group.
                  They&rsquo;ll reach out by phone or email within one business day.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid #E5E7EB',
  borderRadius: 8,
  fontFamily: 'inherit',
  fontSize: 15,
  color: '#1F2937',
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label
        style={{
          display: 'block',
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 6,
          color: '#13315C',
          fontFamily: 'var(--font-hanken), Hanken Grotesk, sans-serif',
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
