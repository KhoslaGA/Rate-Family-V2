'use client';

import { useState } from 'react';
import Link from 'next/link';
import PostalCodeHero from '@/components/cta/PostalCodeHero';
import { Icon } from '@/components/brand/Icon';

/**
 * Auto Insurance Ontario — ported from design/mockups/toprates-auto-insurance-ontario.jsx
 */

const TEAL = '#0A7E8C';
const NAVY = '#1B2A4A';
const GOLD = '#B45309'; // amber — was muddy #B8960C in Phase 1, swapped per typography brief

export default function AutoInsuranceClient() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #0f1e38 100%)`,
          padding: '88px 32px 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: -60, right: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(10,126,140,0.06)' }} />
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 12, color: '#b0b8c4', marginBottom: 24, textAlign: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 6px', opacity: 0.3 }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Car Insurance Ontario</span>
          </div>

          <PostalCodeHero product="auto" theme="dark" />
        </div>
      </section>

      {/* REFORM ALERT */}
      <section style={{ background: '#FFF8F0', borderBottom: '1px solid rgba(184,150,12,0.12)', padding: '20px 32px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 20 }}>⚠️</span>
          <div style={{ flex: 1, minWidth: 240 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>
              Ontario Auto Insurance Reform — July 1, 2026:{' '}
            </span>
            <span style={{ fontSize: 14, color: '#7a6d4a' }}>
              Most accident benefits becoming optional.{' '}
            </span>
            <Link
              href="/blog/ontario-auto-insurance-changes-2026"
              style={{ fontSize: 14, fontWeight: 600, color: TEAL, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              Read our complete guide <Icon name="arrowRight" size={15} color="#F2B441" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '64px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>
              Once KLC Group is RIBO-registered
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 28, color: NAVY, margin: 0 }}>
              How quote comparison will work
            </h2>
            <p style={{ fontSize: 14, color: '#6b7b8d', maxWidth: 540, margin: '10px auto 0', lineHeight: 1.55 }}>
              The platform launches once KLC Group Canada Inc.&rsquo;s RIBO registration is granted. Until then, the page below is education only.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { n: '1', title: 'Tell us about your driving', desc: 'A short form on your vehicle, driving history, and current coverage. Available at RIBO-registered launch.', icon: '📝' },
              { n: '2', title: 'See ranked offers from 30+ carriers', desc: "Quote comparison across Ontario's top carriers, ranked by price and coverage. Available at RIBO-registered launch under KLC Group Canada Inc.'s RIBO registration.", icon: '🔍' },
              { n: '3', title: 'Choose & bind', desc: 'Compare coverage and deductibles side by side and bind online through KLC Group. Today: join the waitlist below for launch notification.', icon: '✅' },
            ].map((s) => (
              <div key={s.n} style={{ flex: 1, minWidth: 260, padding: '28px 24px', borderRadius: 12, border: '1px solid #e8ecf0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: s.n === '1' ? `linear-gradient(135deg, ${TEAL}, #0d9aa8)` : '#f0f2f5',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 0.8 }}>STEP {s.n}</div>
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 18, color: NAVY, margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7b8d', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS YOUR RATE */}
      <section style={{ padding: '64px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 8px' }}>
            What affects your auto insurance rate in Ontario?
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', marginBottom: 28, maxWidth: 600 }}>
            Every carrier weighs these factors differently — which is why comparing quotes matters.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { factor: 'Driving record', detail: 'Tickets, accidents, and convictions from the past 6 years. Clean records get more competitive pricing.' },
              { factor: 'Location', detail: 'Your postal code matters. Urban areas like Brampton and Toronto have higher rates than rural Ontario.' },
              { factor: 'Vehicle', detail: 'Make, model, year, and safety features. Cars that are expensive to repair or commonly stolen cost more to insure.' },
              { factor: 'Age & experience', detail: 'Young drivers (under 25) and new drivers pay more. Rates typically drop after 6+ years of experience.' },
              { factor: 'Coverage level', detail: 'Liability limits, collision, comprehensive, and optional add-ons all affect your premium.' },
              { factor: 'Claims history', detail: 'At-fault claims stay on your record for 6 years. Even not-at-fault claims can affect rates with some carriers.' },
            ].map((f) => (
              <div key={f.factor} style={{ padding: '20px 22px', background: '#fff', borderRadius: 10, border: '1px solid #e8ecf0' }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 15, color: NAVY, margin: '0 0 6px' }}>{f.factor}</h4>
                <p style={{ fontSize: 13, color: '#6b7b8d', lineHeight: 1.5, margin: 0 }}>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section style={{ padding: '64px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 24, color: NAVY, margin: 0 }}>
              Ontario auto insurance guides
            </h2>
            <Link href="/blog" style={{ fontSize: 13, fontWeight: 600, color: TEAL, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              View all guides <Icon name="arrowRight" size={15} color="#F2B441" />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { tag: 'REFORM', tc: '#CC3333', title: 'Ontario Auto Insurance Changes 2026: Everything You Need to Know', date: 'May 4', read: '12 min', slug: 'ontario-auto-insurance-changes-2026' },
              { tag: 'GUIDE', tc: TEAL, title: 'Income Replacement Benefits: Do You Need Them?', date: 'May 11', read: '7 min', slug: 'income-replacement-benefits-ontario' },
              { tag: 'COMPARE', tc: '#0D8050', title: 'Lowest-Premium Car Insurance Territories in Ontario 2026', date: 'Jun 5', read: '10 min', slug: 'lowest-premium-car-insurance-ontario-2026' },
              { tag: 'TOOL', tc: '#6B46C1', title: 'Self-Assessment: Which Optional Benefits Do You Need?', date: 'May 22', read: 'Interactive', slug: 'optional-benefits-self-assessment-checklist' },
              { tag: 'PERSONA', tc: GOLD, title: 'Self-Employed & Gig Workers: Coverage Guide', date: 'May 27', read: '6 min', slug: 'self-employed-gig-worker-auto-insurance-ontario' },
              { tag: 'REFORM', tc: '#CC3333', title: "What Happens If You're in an Accident After July 1?", date: 'Jun 22', read: '8 min', slug: 'accident-after-july-2026-ontario-auto-insurance' },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                style={{
                  padding: '20px 22px', borderRadius: 10,
                  border: '1px solid #e8ecf0',
                  textDecoration: 'none', color: 'inherit',
                  display: 'block', transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: a.tc, letterSpacing: 0.5 }}>{a.tag}</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 16, color: NAVY, margin: '6px 0 8px', lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <span style={{ fontSize: 11, color: '#b0b8c4' }}>{a.date}, 2026 · {a.read}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '56px 32px', background: '#f8fafb', borderTop: '1px solid #e8ecf0' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 10px' }}>
            Ready to compare?
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', margin: '0 0 24px' }}>
            Quote comparison and brokerage launch once KLC Group Canada Inc. completes RIBO registration. Join the launch list to be first when carriers turn on.
          </p>
          {!submitted ? (
            <div style={{ display: 'flex', gap: 8, maxWidth: 380, margin: '0 auto' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                style={{
                  flex: 1, padding: '11px 16px', borderRadius: 8,
                  border: '1px solid #d0d5db', fontSize: 14,
                  fontFamily: "var(--font-serif)", outline: 'none',
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  background: TEAL, color: '#fff', border: 'none', borderRadius: 8,
                  padding: '11px 22px', fontSize: 14, fontWeight: 700,
                  fontFamily: "var(--font-serif)", cursor: 'pointer',
                }}
              >
                Join Waitlist
              </button>
            </div>
          ) : (
            <span style={{ fontSize: 14, color: TEAL, fontWeight: 600 }}>✓ You&rsquo;re on the list!</span>
          )}
        </div>
      </section>
    </>
  );
}
