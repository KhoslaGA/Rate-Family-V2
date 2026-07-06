'use client'

/**
 * TermRates CMHC / mortgage-default-insurance premium calculator (steel). LTV-tier
 * premium, minimum-down-payment check, 30-yr surcharge, PST-on-premium note.
 * Illustrative — the insurer sets the actual premium. Not an offer of credit.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-CA')

const minDown = (price: number) => (price <= 500000 ? price * 0.05 : 500000 * 0.05 + (price - 500000) * 0.1)

export default function TermRatesCMHC() {
  const [price, setPrice] = useState('650,000')
  const [down, setDown] = useState('45,000')
  const [amort, setAmort] = useState('25')

  const r = useMemo(() => {
    const p = num(price), d = num(down), a = num(amort)
    const minD = minDown(p)
    const downPct = p > 0 ? (d / p) * 100 : 0
    const loan = Math.max(p - d, 0)
    const ltv = p > 0 ? (loan / p) * 100 : 0
    const eligible = p < 1500000 && d >= minD && ltv > 80
    let rate = 0
    if (ltv > 90) rate = 4.0
    else if (ltv > 85) rate = 3.1
    else if (ltv > 80) rate = 2.8
    const surcharge = a > 25 && rate > 0 ? 0.2 : 0
    const rateTotal = rate + surcharge
    const premium = eligible ? loan * (rateTotal / 100) : 0
    const totalMortgage = loan + premium
    const belowMin = d < minD
    const tooExpensive = p >= 1500000 && ltv > 80
    return { minD, downPct, loan, ltv, eligible, rate, surcharge, rateTotal, premium, totalMortgage, belowMin, tooExpensive }
  }, [price, down, amort])

  const statusText = r.tooExpensive
    ? 'Homes at $1.5M or more can’t be insured — 20% down is required.'
    : r.belowMin
    ? `Below the minimum down payment (${fmt(r.minD)}) for this price.`
    : r.eligible
    ? 'Insured — a default-insurance premium applies.'
    : 'No default insurance — your down payment is 20% or more.'

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/calculator">Calculators</Link><span className="sep">/</span><span>CMHC premium</span></div>
          <h1>What your mortgage-default insurance costs.</h1>
          <p className="lead">Put less than 20% down and your mortgage must be insured &mdash; a one-time premium added to your loan. Enter your price and down payment to see the premium and your total mortgage.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ display: 'grid', gap: 18, position: 'sticky', top: 82 }}>
            <div className="tr-field"><label htmlFor="c-price">Purchase price</label><input id="c-price" type="text" inputMode="numeric" value={price} onChange={(e) => setPrice(e.target.value)} onBlur={() => setPrice(num(price).toLocaleString('en-CA'))} /></div>
            <div className="tr-field"><label htmlFor="c-down">Down payment</label><input id="c-down" type="text" inputMode="numeric" value={down} onChange={(e) => setDown(e.target.value)} onBlur={() => setDown(num(down).toLocaleString('en-CA'))} /><span style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', marginTop: 6, fontFamily: 'var(--font-mono)' }}>{r.downPct.toFixed(1)}% · minimum {fmt(r.minD)}</span></div>
            <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>Amortization</span>
              <div className="tr-seg" style={{ width: '100%' }}>{[['25', '25 yr'], ['30', '30 yr']].map(([v, l]) => <button key={v} className={amort === v ? 'on' : ''} onClick={() => setAmort(v)} type="button" style={{ flex: 1 }}>{l}</button>)}</div></div>
            <p className="tr-note" style={{ margin: 0 }}>Premiums follow the standard CMHC/Sagen/Canada Guaranty schedule by loan-to-value. A 30-year amortization adds a 0.20% surcharge.</p>
          </div>

          <div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 30 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Default-insurance premium</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.6rem,5vw,3.6rem)', letterSpacing: '-.03em', marginTop: 4 }}>{r.eligible ? fmt(r.premium) : '$0'}</div>
              <div style={{ fontSize: 'var(--fs-sm)', color: r.belowMin || r.tooExpensive ? '#FCA5A5' : 'var(--brand-200)', marginTop: 2 }}>{statusText}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
                {[[r.ltv.toFixed(1) + '%', 'Loan-to-value'], [r.eligible ? r.rateTotal.toFixed(2) + '%' : '—', 'Premium rate'], [fmt(r.loan), 'Base mortgage'], [fmt(r.totalMortgage), 'Total mortgage incl. premium']].map(([v, l]) => (
                  <div key={l}><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{v}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>{l}</div></div>
                ))}
              </div>
            </div>

            <div className="tr-card" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>How it works</div>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>The premium is <b>added to your mortgage</b> and paid off over your amortization &mdash; not due in cash at closing. However, in Ontario, Quebec, Saskatchewan and Manitoba the <b>provincial sales tax on the premium</b> <i>is</i> payable at closing and can&apos;t be added to the loan. The more you can put down, the lower the tier &mdash; 20% down removes the premium entirely.</p>
            </div>

            <div className="tr-advisor" style={{ padding: 'clamp(24px,3vw,36px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">Weigh the trade-off</span>
                <h2 style={{ fontSize: '1.4rem' }}>Is a bigger down payment worth it?</h2>
                <p>Crossing a tier (e.g. 15% to 20% down) can wipe out the premium and lower your rate. A licensed mortgage professional runs both scenarios so you can decide with the numbers.</p>
                <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get my rate</Link><Link className="btn btn-ghost btn-lg" href="/mortgages/affordability">Check affordability</Link></div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul><li><Check />Compares down-payment scenarios</li><li><Check />Confirms the insurer and premium</li></ul>
              </div>
            </div>
            <p className="tr-note">Illustrative estimate using the standard high-ratio premium schedule (90.01–95% LTV = 4.00%, 85.01–90% = 3.10%, 80.01–85% = 2.80%) plus the 0.20% 30-year surcharge. The actual premium is set by the mortgage insurer (CMHC, Sagen or Canada Guaranty) and can vary with product and borrower. Provincial sales tax on the premium is not included. Not an offer of credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
