'use client'

/**
 * TermRates purchase-mortgage landing, ported from mortgage.html. Rendered on the
 * TermRates host at /mortgages (host-branched additively — the TopRates /mortgages
 * page is untouched). Live mini payment estimator; featured rates are illustrative.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => n.toLocaleString('en-CA', { maximumFractionDigits: 0 })

const RATES: [string, string, string, string, string][] = [
  ['NB', 'Nesto', 'Digital lender', 'fixed', '4.09'],
  ['MC', 'MCAP', 'Broker channel', 'fixed', '4.19'],
  ['FN', 'First National', 'Broker channel', 'var', '4.95'],
  ['TD', 'TD Bank', 'Big Six', 'fixed', '4.79'],
  ['RB', 'RBC', 'Big Six', 'fixed', '4.84'],
]
const STEPS: [string, string, string][] = [
  ['01', 'Set your scenario', 'Price, down payment, city and whether you’re insured or conventional. Takes under a minute, no account.'],
  ['02', 'Compare the market', 'The full lender panel sorts by rate for your exact case — Big Six, monolines and broker channels together.'],
  ['03', 'Lock it with a broker', 'Like a rate? A licensed broker confirms eligibility and submits it — paid by the lender, not by you.'],
]
const FAQS: [string, string][] = [
  ['How much down payment do I actually need?', 'In Canada the minimum is 5% on the first $500,000 and 10% on the portion above, up to $1.5M. Under 20% down means an insured (high-ratio) mortgage with default insurance. Our affordability tool shows the minimum for your price.'],
  ['What’s the stress test and does it still apply?', 'Lenders qualify you at the higher of your contract rate plus 2% or the benchmark rate. It’s designed to check you could handle a payment increase. A broker can tell you the qualifying income for the home you’re eyeing.'],
  ['Fixed or variable for a purchase?', 'Neither is universally better — it depends on your tolerance for payment changes and your view on where rates go. Our fixed-vs-variable guide runs the break-even math in plain terms.'],
  ['Can a broker really beat my bank’s rate?', 'Often, yes — brokers access monoline and broker-channel lenders that don’t have branches and price aggressively. But not always; sometimes your bank’s relationship offer wins, and a good broker will tell you so.'],
]

export default function TermRatesMortgageLanding() {
  const [price, setPrice] = useState('750,000')
  const [down, setDown] = useState('150,000')
  const [rate, setRate] = useState('4.09')
  const [amort, setAmort] = useState('25')

  const pay = useMemo(() => {
    const P = Math.max(num(price) - num(down), 0)
    const r = num(rate) / 100 / 12
    const n = num(amort) * 12
    return r > 0 ? (P * r) / (1 - Math.pow(1 + r, -n)) : P / n
  }, [price, down, rate, amort])

  return (
    <main>
      <section className="section" style={{ paddingTop: 'clamp(30px,4vw,52px)', paddingBottom: 'clamp(36px,5vw,64px)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(26px,4vw,52px)', alignItems: 'start' }}>
          <div>
            <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><span>Mortgage rates</span></div>
            <span className="eyebrow">Purchase mortgage</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 600, marginTop: 8 }}>Buying? See <span style={{ color: 'var(--accent-ink)' }}>every lender&apos;s rate</span> before you see a branch.</h1>
            <p className="lead" style={{ marginTop: 18, maxWidth: '46ch' }}>Live purchase rates across 30+ Canadian lenders and broker channels &mdash; fixed and variable, insured and conventional. Set your scenario once and the whole market sorts itself by the number.</p>
            <div className="tr-hero-cta">
              <Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get my personalized rate <Arrow /></Link>
              <Link className="btn btn-ghost btn-lg" href="/rates">Full rate table</Link>
            </div>
            <div className="tr-hero-assure">
              <span className="a"><Check />No email wall</span>
              <span className="a"><Check />Broker-channel pricing</span>
            </div>
          </div>

          {/* Mini estimator */}
          <div className="tr-card" style={{ padding: 0, overflow: 'hidden', boxShadow: 'var(--sh-lg)' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--line)', background: 'var(--panel-2)' }}>
              <b style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem' }}>Quick payment estimate</b>
              <span style={{ display: 'block', fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', marginTop: 3 }}>Change the inputs — the payment updates live</span>
            </div>
            <div style={{ padding: 20, display: 'grid', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="tr-field"><label htmlFor="e-price">Home price</label><input id="e-price" type="text" inputMode="numeric" value={price} onChange={(e) => setPrice(e.target.value)} onBlur={() => setPrice(fmt(num(price)))} /></div>
                <div className="tr-field"><label htmlFor="e-down">Down payment</label><input id="e-down" type="text" inputMode="numeric" value={down} onChange={(e) => setDown(e.target.value)} onBlur={() => setDown(fmt(num(down)))} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="tr-field"><label htmlFor="e-rate">Rate %</label><input id="e-rate" type="text" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
                <div className="tr-field"><label htmlFor="e-amort">Amortization</label><select id="e-amort" value={amort} onChange={(e) => setAmort(e.target.value)}><option>20</option><option>25</option><option>30</option></select></div>
              </div>
            </div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Est. monthly payment</span>
              <span className="tnum" style={{ fontWeight: 600, fontSize: '1.9rem', letterSpacing: '-.02em' }}>${fmt(Math.round(pay))}</span>
            </div>
            <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, background: 'var(--panel-2)' }}>
              <span className="tr-note" style={{ margin: 0 }}>Insured est., 25-yr amort. Illustrative only.</span>
              <Link className="btn btn-accent" href="/mortgages/quote" style={{ padding: '10px 16px', fontSize: '.9rem' }}>Get real rates</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured rates */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head reveal in"><span className="eyebrow">Today&apos;s purchase rates</span><h2 className="h2">Featured 5-year rates, high-ratio insured.</h2></div>
          <div className="tr-table-wrap" style={{ marginTop: 22 }}>
            <table className="tr-table">
              <thead><tr><th>Lender</th><th>Type</th><th className="num">Rate</th><th className="num" /></tr></thead>
              <tbody>
                {[...RATES].sort((a, b) => parseFloat(a[4]) - parseFloat(b[4])).map((r, i, arr) => (
                  <tr key={r[1]}>
                    <td><div className="lender-cell"><span className="lg">{r[0]}</span><span><b>{r[1]}</b><small>{r[2]}</small></span></div></td>
                    <td><span className={`pill ${r[3] === 'var' ? 'var' : 'fixed'}`}>5yr {r[3] === 'var' ? 'var' : 'fixed'}</span></td>
                    <td className={`num${i === 0 ? ' best-rate' : ''}`}>{r[4]}%</td>
                    <td className="row-cta"><Link href="/mortgages/quote">Get this rate &rarr;</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tr-note">Illustrative rates for well-qualified borrowers on insured high-ratio mortgages, refreshed on business days. Not an offer of credit. Your rate depends on your application, credit and property, and is set by the lender. Figures shown for comparison only.</p>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head reveal in"><span className="eyebrow">How a purchase works here</span><h2 className="h2">Rate first. Broker second. No forms in between.</h2></div>
          <div className="tr-prod" style={{ marginTop: 'var(--sp-6)' }}>
            {STEPS.map(([n, h, p]) => (
              <div key={n} className="tr-card">
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '.85rem', color: 'var(--accent-ink)', background: 'var(--accent-soft)', width: 34, height: 34, borderRadius: 'var(--r-sm)', display: 'grid', placeItems: 'center', marginBottom: 14 }}>{n}</div>
                <h3 style={{ fontSize: '1.14rem' }}>{h}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 'var(--fs-sm)', marginTop: 7 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-advisor reveal in">
            <div className="tr-advisor-copy">
              <span className="eyebrow">Pre-approval, done right</span>
              <h2>Shopping seriously? Get pre-approved first.</h2>
              <p>A pre-approval locks a rate hold while you shop and tells you the ceiling you can actually offer at. A licensed broker sets it up across the market so you&apos;re not tied to one bank&apos;s number.</p>
              <div className="tr-advisor-cta">
                <Link className="btn btn-accent btn-lg" href="/mortgages/quote">Start a pre-approval</Link>
                <Link className="btn btn-ghost btn-lg" href="/mortgages/affordability">How much can I afford?</Link>
              </div>
            </div>
            <div className="tr-advisor-card">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
              <ul>
                <li><Check />Rate hold up to 120 days while you shop</li>
                <li><Check />Full lender panel, one application</li>
                <li><Check />Straight talk on what you qualify for</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head center reveal in"><span className="eyebrow center">Purchase questions</span><h2 className="h2">Buying a home, answered</h2></div>
          <div className="tr-faq reveal in">
            {FAQS.map(([q, a], i) => (
              <details key={i} open={i === 0}><summary>{q}<span className="pm" /></summary><div className="ans">{a}</div></details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
