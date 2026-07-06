'use client'

/**
 * LifeRate bespoke city-geo landing (template #23), ported from bespoke/liferate/city-gta.html.
 * LifeRate-only; rendered by /life-insurance/gta. R7: geo pages publish only where real per-city
 * data exists — this GTA page carries illustrative regional context (not a quote) and a live quote.
 */
import Link from 'next/link'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
)
const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 6 6 6-6 6" /></svg>
)

const STATS: [string, string][] = [
  ['Median 20-yr term, age 35, $500k', '$32/mo'],
  ['Typical GTA mortgage protected', '$650k+'],
  ['Insurers compared', '21'],
]

const LOCAL = [
  { h: 'Bigger mortgages', p: 'GTA home prices mean larger balances to protect — coverage here often starts higher than the national norm.' },
  { h: 'Newcomer families', p: 'New to Canada? You can usually get covered well before citizenship — we explain what insurers look for and in your language.' },
  { h: 'Multi-generational homes', p: 'Supporting parents and kids under one roof changes the math. We help size coverage for everyone who depends on you.' },
]

const ADV = [
  'Works with GTA newcomer families',
  'Punjabi & Hindi available',
  'Independent across 21 carriers',
]

export default function CityGta() {
  return (
    <main>
      <section className="lr-hero lr-geo-hero">
        <div className="wrap">
          <div className="lr-crumbs">
            <Link href="/life-insurance">Home</Link>
            <Chevron />
            <Link href="/life-insurance">Locations</Link>
            <Chevron />
            <span>Greater Toronto Area</span>
          </div>
          <div className="lr-geo-grid">
            <div>
              <span className="eyebrow">Life insurance · Greater Toronto Area</span>
              <h1>Life insurance for <span className="em">GTA families</span>, in plain English.</h1>
              <p className="lead">Toronto, Mississauga, Brampton, Markham — whether you were born here or arrived last year, protecting your family works the same way. We compare 21 insurers and explain it clearly, in the language that fits.</p>
              <div style={{ marginTop: 22 }}>
                <span className="lr-lang">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h12M9 3v2c0 6-4 9-6 10M5 9c0 4 5 6 9 6M12 20l4-9 4 9M13.5 17h5" /></svg>
                  Also available in ਪੰਜਾਬੀ &amp; हिंदी
                </span>
              </div>
              <div className="lr-geo-cta">
                <Link className="btn btn-accent btn-lg" href="/life-insurance/quote">Compare GTA rates <Arrow /></Link>
                <Link className="btn btn-ghost btn-lg" href="/contact">Talk to an advisor</Link>
              </div>
            </div>
            <div className="lr-geo-stat">
              {STATS.map(([l, v]) => (
                <div className="row" key={l}><span className="l">{l}</span><span className="v">{v}</span></div>
              ))}
              <p className="cap">Illustrative figures for the GTA market, healthy non-smoker — not a quote. Your rate depends on underwriting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lr-trust">
        <div className="wrap lr-trust-in">
          <span className="lr-trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>FSRA-licensed (LLQP)</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18" /></svg>Independent, 21 insurers</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h10" /></svg>Plain-English · multilingual</span>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">Local context</span>
            <h2 className="h2">What matters for GTA households</h2>
            <p className="lead">The principles are national, but a few things come up again and again across the Greater Toronto Area.</p>
          </div>
          <div className="lr-geo-local">
            {LOCAL.map((c) => (
              <div className="lr-geo-card reveal" key={c.h}><h3>{c.h}</h3><p>{c.p}</p></div>
            ))}
          </div>
          <div className="lr-geo-note reveal">
            <strong>A note on this page:</strong> GTA figures shown are illustrative market context. Individual city pages publish only where we have real, current local data — we don’t generate empty “life insurance in [city]” pages just to rank. Where the data is thin, this page stands in with regional context and a live quote.
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-advisor reveal">
            <div className="lr-advisor-copy">
              <span className="eyebrow">GTA advisor, your language</span>
              <h2>Talk it through with someone local.</h2>
              <p>Our licensed advisor works with GTA families every week — including newcomers navigating Canadian coverage for the first time. Punjabi and Hindi available.</p>
              <div className="lr-advisor-cta">
                <Link className="btn btn-accent btn-lg" href="/life-insurance/quote">Compare my rate</Link>
                <Link className="btn btn-ghost btn-lg" href="/contact">Book a free call</Link>
              </div>
            </div>
            <div className="lr-advisor-card">
              <div className="who"><span className="av">GK</span><div><b style={{ display: 'block', color: '#fff' }}>Gautam Khosla</b><span>LLQP-Licensed Advisor · KLC Group</span></div></div>
              <ul>{ADV.map((t) => <li key={t}><Check />{t}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
