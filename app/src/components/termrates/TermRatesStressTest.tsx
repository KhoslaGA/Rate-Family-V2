'use client'

/**
 * TermRates mortgage stress-test calculator (steel). Qualifying rate = max(rate+2,
 * 5.25%); computes the qualifying payment and GDS/TDS ratios against income and
 * debts. Illustrative — lenders apply their own overlays. Not an offer of credit.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-CA')

const monthlyPayment = (principal: number, annualRate: number, years: number) => {
  if (principal <= 0) return 0
  const i = Math.pow(1 + annualRate / 100 / 2, 2 / 12) - 1
  const n = years * 12
  if (i === 0) return principal / n
  return (principal * i) / (1 - Math.pow(1 + i, -n))
}

export default function TermRatesStressTest() {
  const [loan, setLoan] = useState('520,000')
  const [rate, setRate] = useState('4.49')
  const [amort, setAmort] = useState('25')
  const [income, setIncome] = useState('130,000')
  const [heat, setHeat] = useState('150')
  const [tax, setTax] = useState('450')
  const [condo, setCondo] = useState('0')
  const [debts, setDebts] = useState('600')

  const r = useMemo(() => {
    const l = num(loan), rt = num(rate), am = num(amort), inc = num(income)
    const monthlyIncome = inc / 12
    const qualRate = Math.max(rt + 2, 5.25)
    const qualPay = monthlyPayment(l, qualRate, am)
    const contractPay = monthlyPayment(l, rt, am)
    const housing = qualPay + num(heat) + num(tax) + num(condo) * 0.5 // 50% of condo fees per lender convention
    const gds = monthlyIncome > 0 ? (housing / monthlyIncome) * 100 : 0
    const tds = monthlyIncome > 0 ? ((housing + num(debts)) / monthlyIncome) * 100 : 0
    const pass = gds <= 39 && tds <= 44
    return { qualRate, qualPay, contractPay, gds, tds, pass, monthlyIncome }
  }, [loan, rate, amort, income, heat, tax, condo, debts])

  const gdsOk = r.gds <= 39, tdsOk = r.tds <= 44

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/calculator">Calculators</Link><span className="sep">/</span><span>Stress test</span></div>
          <h1>Will you pass the mortgage stress test?</h1>
          <p className="lead">Lenders qualify you at the higher of your rate plus 2% or 5.25% &mdash; then check your debt ratios. See where a specific mortgage lands before you apply.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ display: 'grid', gap: 16, position: 'sticky', top: 82 }}>
            <div className="tr-field"><label htmlFor="s-loan">Mortgage amount</label><input id="s-loan" type="text" inputMode="numeric" value={loan} onChange={(e) => setLoan(e.target.value)} onBlur={() => setLoan(num(loan).toLocaleString('en-CA'))} /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="tr-field"><label htmlFor="s-rate">Contract rate %</label><input id="s-rate" type="text" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
              <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>Amortization</span>
                <div className="tr-seg" style={{ width: '100%' }}>{[['25', '25'], ['30', '30']].map(([v, l]) => <button key={v} className={amort === v ? 'on' : ''} onClick={() => setAmort(v)} type="button" style={{ flex: 1 }}>{l}</button>)}</div></div>
            </div>
            <div className="tr-field"><label htmlFor="s-income">Household income (annual)</label><input id="s-income" type="text" inputMode="numeric" value={income} onChange={(e) => setIncome(e.target.value)} onBlur={() => setIncome(num(income).toLocaleString('en-CA'))} /></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="tr-field"><label htmlFor="s-tax">Property tax /mo</label><input id="s-tax" type="text" inputMode="numeric" value={tax} onChange={(e) => setTax(e.target.value)} /></div>
              <div className="tr-field"><label htmlFor="s-heat">Heat /mo</label><input id="s-heat" type="text" inputMode="numeric" value={heat} onChange={(e) => setHeat(e.target.value)} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="tr-field"><label htmlFor="s-condo">Condo fees /mo</label><input id="s-condo" type="text" inputMode="numeric" value={condo} onChange={(e) => setCondo(e.target.value)} /></div>
              <div className="tr-field"><label htmlFor="s-debts">Other debt pmts /mo</label><input id="s-debts" type="text" inputMode="numeric" value={debts} onChange={(e) => setDebts(e.target.value)} /></div>
            </div>
            <p className="tr-note" style={{ margin: 0 }}>GDS must be ≤ 39% and TDS ≤ 44%. Half of condo fees count toward housing costs, per lender convention.</p>
          </div>

          <div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 30 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Stress-test result</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.6rem,5vw,3.6rem)', letterSpacing: '-.03em', marginTop: 4, color: r.pass ? '#6EE7A8' : '#FCA5A5' }}>{r.pass ? 'Pass' : 'Over limit'}</div>
              <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--brand-200)', marginTop: 2 }}>Qualifying rate {r.qualRate.toFixed(2)}% · qualifying payment {fmt(r.qualPay)}/mo</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.5rem', color: gdsOk ? '#6EE7A8' : '#FCA5A5' }}>{r.gds.toFixed(1)}%</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>GDS ratio (limit 39%)</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.5rem', color: tdsOk ? '#6EE7A8' : '#FCA5A5' }}>{r.tds.toFixed(1)}%</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>TDS ratio (limit 44%)</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.contractPay)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Actual payment at contract rate</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.qualPay - r.contractPay)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Stress-test buffer /mo</div></div>
              </div>
            </div>

            <div className="tr-card" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>What the ratios mean</div>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}><b>GDS</b> (Gross Debt Service) is your housing costs &mdash; qualifying mortgage payment, property tax, heat and half of condo fees &mdash; as a share of gross income. <b>TDS</b> (Total Debt Service) adds your other debt payments. Federally regulated lenders cap these at 39% and 44%. If you&apos;re over, a longer amortization, more down, or clearing a debt can bring you back onside.</p>
            </div>

            <div className="tr-advisor" style={{ padding: 'clamp(24px,3vw,36px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">If you&apos;re close to the line</span>
                <h2 style={{ fontSize: '1.4rem' }}>Ratios are one lender&apos;s view, not all.</h2>
                <p>Limits, income treatment and overlays vary by lender. A licensed mortgage professional knows which lenders fit your file and how to structure it to qualify.</p>
                <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get my rate</Link><Link className="btn btn-ghost btn-lg" href="/mortgages/affordability">How much can I afford?</Link></div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul><li><Check />Matches your file to the right lender</li><li><Check />Structures it to pass</li></ul>
              </div>
            </div>
            <p className="tr-note">Illustrative estimate using the federal qualifying rate (higher of contract rate + 2% or 5.25%) and standard GDS/TDS limits (39%/44%) with 50% of condo fees. Lenders apply their own income verification, debt treatment and overlays, and uninsured/insured rules differ. Confirm with a licensed mortgage professional. Not an offer of credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
