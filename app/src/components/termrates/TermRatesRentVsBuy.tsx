'use client'

/**
 * TermRates rent-vs-buy calculator (steel). Compares the net cost of owning
 * (payments + carrying costs − equity built − appreciation) against renting
 * over a chosen horizon. Illustrative — many assumptions simplified. Not advice.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => (n < 0 ? '−$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-CA')

// Fixed-rate payment, semi-annual compounding (Canadian convention).
const monthlyPayment = (principal: number, annualRate: number, years: number) => {
  if (principal <= 0) return 0
  const i = Math.pow(1 + annualRate / 100 / 2, 2 / 12) - 1
  const n = years * 12
  if (i === 0) return principal / n
  return (principal * i) / (1 - Math.pow(1 + i, -n))
}

export default function TermRatesRentVsBuy() {
  const [price, setPrice] = useState('700,000')
  const [down, setDown] = useState('140,000')
  const [rate, setRate] = useState('4.49')
  const [rent, setRent] = useState('2,600')
  const [years, setYears] = useState('5')
  const [appr, setAppr] = useState('3')

  const r = useMemo(() => {
    const p = num(price), d = num(down), rt = num(rate), rn = num(rent), yr = num(years), ap = num(appr)
    const loan = Math.max(p - d, 0)
    const amort = 25
    const pay = monthlyPayment(loan, rt, amort)
    const months = yr * 12

    // Owning: total payments + carrying costs (property tax ~1%, maintenance ~1%, insurance) over horizon.
    const carryAnnual = p * 0.02 // tax + maintenance + insurance, rough 2%/yr
    const totalPayments = pay * months
    const totalCarry = carryAnnual * yr
    const closingBuy = p * 0.015 + 2000 // LTT + legal, rough
    const sellingCost = 0 // ignore for simplicity; note it

    // Equity at end: appreciated value − remaining balance.
    const iMo = Math.pow(1 + rt / 100 / 2, 2 / 12) - 1
    let bal = loan
    for (let m = 0; m < months; m++) bal = bal * (1 + iMo) - pay
    bal = Math.max(bal, 0)
    const futureValue = p * Math.pow(1 + ap / 100, yr)
    const equity = futureValue - bal

    // Net cost of owning = cash out (down + payments + carry + closing) − equity at end.
    const ownCashOut = d + totalPayments + totalCarry + closingBuy
    const ownNet = ownCashOut - equity

    // Renting: rent grows ~ appreciation-ish (use 2.5%/yr), no equity.
    let rentTotal = 0, curRent = rn
    for (let y = 0; y < yr; y++) { rentTotal += curRent * 12; curRent *= 1.025 }

    const diff = rentTotal - ownNet // positive → buying cheaper
    return { pay, ownNet, rentTotal, equity, diff, buyCheaper: diff > 0, months }
  }, [price, down, rate, rent, years, appr])

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/calculator">Calculators</Link><span className="sep">/</span><span>Rent vs buy</span></div>
          <h1>Rent or buy? Run the numbers over your horizon.</h1>
          <p className="lead">Owning builds equity but costs more to carry; renting is cheaper monthly but builds nothing. Over the years you plan to stay, one usually comes out ahead.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ display: 'grid', gap: 18, position: 'sticky', top: 82 }}>
            <div className="tr-field"><label htmlFor="rb-price">Purchase price</label><input id="rb-price" type="text" inputMode="numeric" value={price} onChange={(e) => setPrice(e.target.value)} onBlur={() => setPrice(num(price).toLocaleString('en-CA'))} /></div>
            <div className="tr-field"><label htmlFor="rb-down">Down payment</label><input id="rb-down" type="text" inputMode="numeric" value={down} onChange={(e) => setDown(e.target.value)} onBlur={() => setDown(num(down).toLocaleString('en-CA'))} /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="tr-field"><label htmlFor="rb-rate">Mortgage rate %</label><input id="rb-rate" type="text" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
              <div className="tr-field"><label htmlFor="rb-appr">Home growth %/yr</label><input id="rb-appr" type="text" inputMode="decimal" value={appr} onChange={(e) => setAppr(e.target.value)} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="tr-field"><label htmlFor="rb-rent">Monthly rent</label><input id="rb-rent" type="text" inputMode="numeric" value={rent} onChange={(e) => setRent(e.target.value)} onBlur={() => setRent(num(rent).toLocaleString('en-CA'))} /></div>
              <div className="tr-field"><label htmlFor="rb-years">Years you&apos;ll stay</label><input id="rb-years" type="text" inputMode="numeric" value={years} onChange={(e) => setYears(e.target.value)} /></div>
            </div>
            <p className="tr-note" style={{ margin: 0 }}>Assumes ~2%/yr carrying costs (tax, maintenance, insurance), 25-yr amortization, ~1.5% closing costs, and rent rising ~2.5%/yr.</p>
          </div>

          <div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 30 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Over {num(years) || 0} years, buying is</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.4rem,4.5vw,3.2rem)', letterSpacing: '-.03em', marginTop: 4, color: r.buyCheaper ? '#6EE7A8' : '#FCA5A5' }}>{r.buyCheaper ? fmt(r.diff) + ' cheaper' : fmt(-r.diff) + ' more'}</div>
              <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--brand-200)', marginTop: 2 }}>{r.buyCheaper ? 'Owning comes out ahead over this horizon.' : 'Renting comes out ahead over this horizon.'}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.ownNet)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Net cost of owning</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.rentTotal)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Total rent paid</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.pay)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Monthly mortgage</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.equity)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Equity at end</div></div>
              </div>
            </div>

            <div className="tr-card" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>What tips the balance</div>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>The longer you stay, the more owning wins &mdash; upfront closing costs and land transfer tax get spread over more years, and equity compounds. Stay only a year or two and renting usually wins. This model ignores selling costs, the return you&apos;d earn by investing your down payment instead, and rent-control specifics &mdash; treat it as a directional guide, not a forecast.</p>
            </div>

            <div className="tr-advisor" style={{ padding: 'clamp(24px,3vw,36px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">Make it your numbers</span>
                <h2 style={{ fontSize: '1.4rem' }}>The decision hinges on your assumptions.</h2>
                <p>A licensed mortgage professional stress-tests the rate, the horizon and your real carrying costs so the rent-vs-buy call reflects your situation, not averages.</p>
                <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/affordability">Check affordability</Link><Link className="btn btn-ghost btn-lg" href="/mortgages/quote">Get my rate</Link></div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul><li><Check />Tunes the assumptions to you</li><li><Check />Factors your full cost to own</li></ul>
              </div>
            </div>
            <p className="tr-note">Illustrative comparison only, using simplified assumptions (2%/yr carrying costs, 1.5% closing costs, 2.5%/yr rent growth, 25-year amortization, no selling costs and no opportunity cost on the down payment). Real outcomes depend on markets, taxes and your circumstances. Not financial advice or an offer of credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
