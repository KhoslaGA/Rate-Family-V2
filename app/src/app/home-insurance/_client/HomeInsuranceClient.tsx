'use client';

import { useState } from 'react';
import Link from 'next/link';
import PostalCodeHero from '@/components/cta/PostalCodeHero';
import { Icon } from '@/components/brand/Icon';

/**
 * Home Insurance Ontario — ported from design/mockups/toprates-home-insurance-ontario.jsx
 */

const TEAL = '#0A7E8C';
const NAVY = '#1B2A4A';

export default function HomeInsuranceClient() {
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
          background: `linear-gradient(135deg, ${NAVY}, #0f1e38)`,
          padding: '88px 32px 96px',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: -60, right: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(10,126,140,0.06)' }} />
        <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 24, textAlign: 'center' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.3, margin: '0 6px' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Home Insurance Ontario</span>
          </div>

          <PostalCodeHero product="home" theme="dark" />
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section style={{ padding: '64px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 8px' }}>
            What does home insurance cover in Ontario?
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', marginBottom: 28, maxWidth: 600 }}>
            Standard policies cover your home, your belongings, your liability, and your living expenses if you&rsquo;re displaced.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            {[
              { title: 'Dwelling coverage', desc: 'Covers the physical structure of your home — walls, roof, foundation, attached garage. Pays to rebuild or repair after a covered loss like fire, windstorm, or vandalism.', icon: '🏠' },
              { title: 'Personal property', desc: 'Covers your belongings — furniture, electronics, clothing, appliances. Typically covered at actual cash value or replacement cost depending on your policy.', icon: '📦' },
              { title: 'Liability protection', desc: "Covers you if someone is injured on your property or if you accidentally damage someone else's property. Minimum $1M recommended in Ontario.", icon: '🛡️' },
              { title: 'Additional living expenses', desc: 'If your home is uninhabitable after a covered claim, this covers temporary housing, meals, and other expenses while your home is being repaired.', icon: '🏨' },
              { title: 'Water damage (add-on)', desc: 'Overland water and sewer backup coverage typically costs extra but is critical in Ontario given increasing flood frequency. Ask about this specifically.', icon: '💧' },
              { title: 'Equipment breakdown', desc: 'Covers sudden failure of heating, cooling, electrical, and appliance systems. Not included by default — worth adding if you have newer systems.', icon: '⚡' },
            ].map((c) => (
              <div key={c.title} style={{ padding: '22px 24px', borderRadius: 10, border: '1px solid #e8ecf0', display: 'flex', gap: 14 }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 16, color: NAVY, margin: '0 0 4px' }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: '#6b7b8d', lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS RATE */}
      <section style={{ padding: '64px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 8px' }}>
            What affects your home insurance rate?
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', marginBottom: 28, maxWidth: 600 }}>
            Unlike auto insurance, home insurance rates in Ontario are not regulated. Rates vary dramatically between carriers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { f: 'Location & flood risk', d: 'Your postal code determines proximity to fire stations, flood plains, and crime rates. Urban vs rural makes a big difference.' },
              { f: 'Age & construction', d: 'Older homes with knob-and-tube wiring, galvanized pipes, or oil heating cost more. Recent renovations help.' },
              { f: 'Replacement cost', d: 'The cost to fully rebuild your home at current prices. Not the same as market value.' },
              { f: 'Claims history', d: 'Previous water damage, fire, or theft claims can significantly increase your rates.' },
              { f: 'Security systems', d: 'Centrally monitored alarms, smart locks, and water leak detectors earn discounts with most carriers.' },
              { f: 'Credit score', d: 'Many Ontario insurers offer better rates with a soft credit check. Good credit = lower premiums.' },
            ].map((f) => (
              <div key={f.f} style={{ padding: '20px 22px', background: '#fff', borderRadius: 10, border: '1px solid #e8ecf0' }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 15, color: NAVY, margin: '0 0 6px' }}>{f.f}</h4>
                <p style={{ fontSize: 13, color: '#6b7b8d', lineHeight: 1.5, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUNDLE CALLOUT */}
      <section style={{ padding: '48px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #f0fafb, #e8f6f7)',
              borderRadius: 12, border: '1px solid rgba(10,126,140,0.1)',
              padding: '32px 36px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 16,
            }}
          >
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 22, color: NAVY, margin: '0 0 6px' }}>
                Bundle home + auto and save 15–20%
              </h3>
              <p style={{ fontSize: 14, color: '#6b7b8d', margin: 0, maxWidth: 480 }}>
                Editorial guides on TopRates.ca explain how bundled and unbundled options differ — so you know what to ask before you choose.
              </p>
            </div>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 36, color: TEAL }}>20%</div>
              <div style={{ fontSize: 12, color: '#6b7b8d' }}>average bundle savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section style={{ padding: '64px 32px', background: '#f8fafb' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 24, color: NAVY, margin: 0 }}>
              Home insurance guides
            </h2>
            <Link href="/blog" style={{ fontSize: 13, fontWeight: 600, color: TEAL, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              View all guides <Icon name="arrowRight" size={15} color="#F2B441" />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { title: 'Bundle Home & Auto in Ontario: Is It Still Worth It?', tag: 'COMPARE', tc: '#0D8050', date: 'Jun 17', slug: 'bundle-home-auto-insurance-ontario-2026' },
              { title: "Water Damage Coverage in Ontario: What's Included and What's Not", tag: 'GUIDE', tc: TEAL, date: 'Coming soon', slug: 'water-damage-coverage-ontario' },
              { title: "Condo Insurance vs Home Insurance: What's the Difference?", tag: 'GUIDE', tc: TEAL, date: 'Coming soon', slug: 'condo-vs-home-insurance' },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                style={{
                  padding: '20px 22px', background: '#fff', borderRadius: 10,
                  border: '1px solid #e8ecf0', textDecoration: 'none', color: 'inherit',
                  display: 'block', transition: 'border-color 0.2s',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: a.tc, letterSpacing: 0.5 }}>{a.tag}</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: 16, color: NAVY, margin: '6px 0 8px', lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <span style={{ fontSize: 11, color: '#b0b8c4' }}>{a.date}, 2026</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '56px 32px', background: '#fff', borderTop: '1px solid #e8ecf0' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 800, fontSize: 26, color: NAVY, margin: '0 0 10px' }}>
            Be first when home insurance comparison launches
          </h2>
          <p style={{ fontSize: 15, color: '#6b7b8d', margin: '0 0 24px' }}>
            Quote comparison and brokerage launch once KLC Group Canada Inc. completes RIBO registration. Independent Canadian insurance education today.
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
