/**
 * TermRates local market page (Toronto/GTA), ported from city-mortgage.html.
 * Static (server). Local figures are illustrative regional composites, refreshed
 * periodically — for orientation only, not an offer of credit.
 */
import Link from 'next/link'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const METRICS: [string, string, string, string][] = [
  ['Benchmark price', '$1.06M', '▼ 2.1% YoY', 'down'],
  ['Min. down (benchmark)', '$85,500', 'on $1.06M · tiered', ''],
  ['Toronto LTT (city + prov.)', '$32,950', '▲ two land taxes', 'up'],
  ['Income to qualify', '$196k', 'at 4.09% · 20% down', ''],
]
const RATES: [string, string, string, string, string, string][] = [
  ['NB', 'Nesto', 'Digital lender', 'fixed', '4.09', '$4,485'],
  ['MC', 'MCAP', 'Broker channel', 'fixed', '4.19', '$4,533'],
  ['FN', 'First National', 'Broker channel', 'var', '4.95', '$4,910'],
  ['TD', 'TD Bank', 'Big Six', 'fixed', '4.79', '$4,829'],
]
const HOODS: [string, string, string][] = [
  ['Downtown Core', 'Condo-heavy', '$742k'],
  ['North York', 'Mixed', '$1.18M'],
  ['Scarborough', 'Detached / semi', '$1.02M'],
  ['Etobicoke', 'Detached', '$1.11M'],
  ['Mississauga', 'Suburban', '$1.06M'],
  ['Brampton', 'Suburban', '$975k'],
]

export default function TermRatesCity() {
  return (
    <main>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages">Mortgage</Link><span className="sep">/</span><span>Toronto</span></div>
          <span className="eyebrow">Local market · Greater Toronto Area</span>
          <h1 style={{ marginTop: 12 }}>Toronto mortgage rates, in local numbers.</h1>
          <p className="lead">The same live lender rates, put next to what a Toronto purchase actually takes &mdash; benchmark price, minimum down, the city&apos;s second land transfer tax, and the income to qualify. Built on GTA data, refreshed regularly.</p>
          <div className="tr-hero-cta" style={{ marginTop: 22 }}>
            <Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get my Toronto rate <Arrow /></Link>
            <Link className="btn btn-ghost btn-lg" href="/mortgages/affordability">What I&apos;d qualify for</Link>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap">
          <div className="tr-sec-head reveal in"><span className="eyebrow">GTA snapshot</span><h2 className="h2">What a Toronto purchase looks like right now.</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--sp-3)', marginTop: 'var(--sp-6)' }}>
            {METRICS.map(([l, v, d, dir]) => (
              <div key={l} className="tr-card">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>{l}</div>
                <div className="tnum" style={{ fontWeight: 600, fontSize: '1.7rem', letterSpacing: '-.02em', marginTop: 6 }}>{v}</div>
                <div className="tnum" style={{ fontSize: 'var(--fs-xs)', marginTop: 4, color: dir === 'down' ? 'var(--up)' : dir === 'up' ? 'var(--down)' : 'var(--ink-mute)' }}>{d}</div>
              </div>
            ))}
          </div>
          <p className="tr-note">GTA benchmark and neighbourhood figures are illustrative, drawn from regional board data and refreshed periodically. Toronto buyers pay both the municipal and provincial land transfer tax. First-time-buyer rebates may reduce the amount. Figures for orientation only.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head reveal in"><span className="eyebrow">Today&apos;s rates · GTA borrowers</span><h2 className="h2">Featured 5-year fixed for Toronto.</h2></div>
          <div className="tr-table-wrap reveal in" style={{ marginTop: 22 }}>
            <table className="tr-table">
              <thead><tr><th>Lender</th><th>Type</th><th className="num">Rate</th><th className="num">Payment*</th><th className="num" /></tr></thead>
              <tbody>
                {RATES.map((r, i) => (
                  <tr key={r[1]}>
                    <td><div className="lender-cell"><span className="lg">{r[0]}</span><span><b>{r[1]}</b><small>{r[2]}</small></span></div></td>
                    <td><span className={`pill ${r[3] === 'var' ? 'var' : 'fixed'}`}>5yr {r[3] === 'var' ? 'var' : 'fixed'}</span></td>
                    <td className={`num${i === 0 ? ' best-rate' : ''}`}>{r[4]}%</td>
                    <td className="num" style={{ fontSize: '1rem', color: 'var(--ink-soft)' }}>{r[5]}</td>
                    <td className="row-cta"><Link href="/mortgages/quote">Get rate &rarr;</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tr-note">*Illustrative monthly payment on an $848,000 mortgage (benchmark price, 20% down), 25-yr amortization. Rates for well-qualified borrowers, refreshed on business days. Not an offer of credit; your rate is set by the lender.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head reveal in"><span className="eyebrow">By neighbourhood</span><h2 className="h2">Benchmark price across the GTA.</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-3)', marginTop: 'var(--sp-5)' }}>
            {HOODS.map(([nm, sub, pr]) => (
              <div key={nm} className="tr-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div><div style={{ fontWeight: 600, fontSize: 'var(--fs-sm)' }}>{nm}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)' }}>{sub}</div></div>
                <div className="tnum" style={{ fontWeight: 600, fontSize: '1.15rem', textAlign: 'right' }}>{pr}</div>
              </div>
            ))}
          </div>
          <p className="tr-note">Neighbourhood benchmarks are illustrative regional composites, refreshed periodically. Actual prices vary by property type, street and condition.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-advisor reveal in">
            <div className="tr-advisor-copy">
              <span className="eyebrow">Local broker, national panel</span>
              <h2>Toronto rules, handled.</h2>
              <p>The double land transfer tax, the first-time rebate, the condo status certificate &mdash; a broker who works the GTA daily knows the local wrinkles and prices your file across the full lender panel.</p>
              <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get matched locally</Link><Link className="btn btn-ghost btn-lg" href="/mortgages/calculator">Estimate my payment</Link></div>
            </div>
            <div className="tr-advisor-card">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
              <ul><li><Check />Toronto LTT &amp; first-time rebate handled</li><li><Check />Condo &amp; new-build financing experience</li></ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
