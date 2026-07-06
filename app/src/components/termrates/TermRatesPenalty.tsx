'use client'

/**
 * TermRates prepayment-penalty calculator (steel). Estimates the cost to break a
 * mortgage early: three-months'-interest vs interest-rate differential (IRD),
 * greater of the two on fixed. Simplified/illustrative — your lender's exact
 * penalty (esp. posted-rate IRD) can differ materially. Not an offer of credit.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-CA')

export default function TermRatesPenalty() {
  const [bal, setBal] = useState('420,000')
  const [type, setType] = useState<'fixed' | 'var'>('fixed')
  const [rate, setRate] = useState('4.79')
  const [compare, setCompare] = useState('4.09')
  const [months, setMonths] = useState('30')

  const r = useMemo(() => {
    const b = num(bal), rt = num(rate), cmp = num(compare), mo = num(months)
    const threeMonth = (b * (rt / 100)) / 4
    const ird = Math.max(0, (b * ((rt - cmp) / 100) * mo) / 12)
    const penalty = type === 'fixed' ? Math.max(threeMonth, ird) : threeMonth
    const applies = type === 'var' ? '3 months’ interest' : ird > threeMonth ? 'Interest-rate differential (IRD)' : 'Three months’ interest'
    return { threeMonth, ird, penalty, applies }
  }, [bal, type, rate, compare, months])

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/calculator">Calculators</Link><span className="sep">/</span><span>Prepayment penalty</span></div>
          <h1>What it costs to break your mortgage early.</h1>
          <p className="lead">Refinancing, selling, or switching before your term ends usually triggers a penalty &mdash; and on a fixed mortgage the IRD can be large. Estimate it before you decide.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ display: 'grid', gap: 18, position: 'sticky', top: 82 }}>
            <div className="tr-field"><label htmlFor="p-bal">Mortgage balance</label><input id="p-bal" type="text" inputMode="numeric" value={bal} onChange={(e) => setBal(e.target.value)} onBlur={() => setBal(num(bal).toLocaleString('en-CA'))} /></div>
            <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>Rate type</span>
              <div className="tr-seg" style={{ width: '100%' }}>{([['fixed', 'Fixed'], ['var', 'Variable']] as const).map(([v, l]) => <button key={v} className={type === v ? 'on' : ''} onClick={() => setType(v)} type="button" style={{ flex: 1 }}>{l}</button>)}</div></div>
            <div className="tr-field"><label htmlFor="p-rate">Your mortgage rate %</label><input id="p-rate" type="text" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
            {type === 'fixed' && <>
              <div className="tr-field"><label htmlFor="p-cmp">Lender&apos;s current rate for your remaining term %</label><input id="p-cmp" type="text" inputMode="decimal" value={compare} onChange={(e) => setCompare(e.target.value)} /></div>
              <div className="tr-field"><label htmlFor="p-mo">Months left in term</label><input id="p-mo" type="text" inputMode="numeric" value={months} onChange={(e) => setMonths(e.target.value)} /></div>
            </>}
            <p className="tr-note" style={{ margin: 0 }}>Fixed penalties are the greater of three months&apos; interest or the IRD. Variable penalties are typically just three months&apos; interest.</p>
          </div>

          <div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 30 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Estimated penalty to break</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.6rem,5vw,3.6rem)', letterSpacing: '-.03em', marginTop: 4 }}>{fmt(r.penalty)}</div>
              <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--brand-200)', marginTop: 2 }}>Applies: {r.applies}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.threeMonth)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Three months&apos; interest</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{type === 'fixed' ? fmt(r.ird) : '—'}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Interest-rate differential</div></div>
              </div>
            </div>

            <div className="tr-card" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>Read this before you break</div>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>Real IRD penalties are often calculated against the lender&apos;s <b>posted</b> rate at origination (not your discounted rate), which can make them much larger than a simple estimate. Some lenders also use different formulas. Always get your <b>exact penalty in writing</b> from your lender before making a decision &mdash; then run the break-even against the rate you&apos;d move to.</p>
            </div>

            <div className="tr-advisor" style={{ padding: 'clamp(24px,3vw,36px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">Before you break anything</span>
                <h2 style={{ fontSize: '1.4rem' }}>Get the exact penalty, then decide.</h2>
                <p>A licensed mortgage professional pulls your real penalty from the lender and runs the break-even against today&apos;s rates &mdash; so you only break if it genuinely puts you ahead.</p>
                <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/refinance">Should I refinance?</Link><Link className="btn btn-ghost btn-lg" href="/mortgages/renewal">Compare to renewing</Link></div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul><li><Check />Pulls your exact penalty, not an estimate</li><li><Check />Runs the break-even for you</li></ul>
              </div>
            </div>
            <p className="tr-note">Illustrative estimate only. The IRD here is a simplified calculation on your stated rates; your lender&apos;s actual penalty may use posted rates and a different formula, and can be substantially higher. Confirm your exact figure with your lender before acting. Not an offer of credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
