'use client'

/**
 * TermRates affordability tool, ported from affordability-gap.html. Income + debts
 * + down → the max home price you'd qualify for under the Canadian stress test,
 * with GDS/TDS and the gap to a target. Illustrative; not an offer of credit.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-CA')
const fmtk = (n: number) => '$' + Math.round(n / 1000) + 'k'

export default function TermRatesAffordability() {
  const [income, setIncome] = useState('140,000')
  const [debt, setDebt] = useState('600')
  const [down, setDown] = useState('120,000')
  const [rate, setRate] = useState('4.09')
  const [tax, setTax] = useState('4,200')
  const [target, setTarget] = useState('850,000')

  const m = useMemo(() => {
    const inc = num(income), d = num(debt), dn = num(down), rt = num(rate), tx = num(tax), tg = num(target)
    const stress = Math.max(rt + 2, 5.25)
    const mInc = inc / 12, taxM = tx / 12, heat = 175
    const maxHousing = 0.44 * mInc - d
    const maxPI = Math.max(0, maxHousing - taxM - heat)
    const i = stress / 100 / 12, n = 25 * 12
    const maxMort = i > 0 ? (maxPI * (1 - Math.pow(1 + i, -n))) / i : maxPI * n
    const maxPrice = maxMort + dn
    const gds = ((maxPI + taxM + heat) / mInc) * 100
    const tds = ((maxPI + taxM + heat + d) / mInc) * 100
    return { stress, maxPI, taxM, heat, maxMort, maxPrice, gds, tds, target: tg, gap: maxPrice - tg }
  }, [income, debt, down, rate, tax, target])

  const scale = Math.max(m.maxPrice, m.target) * 1.05 || 1
  const F = ({ id, label, val, set }: { id: string; label: string; val: string; set: (v: string) => void }) => (
    <div className="tr-field"><label htmlFor={id}>{label}</label><input id={id} type="text" inputMode="numeric" value={val} onChange={(e) => set(e.target.value)} /></div>
  )

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/calculator">Calculators</Link><span className="sep">/</span><span>Affordability</span></div>
          <h1>How much can you actually afford?</h1>
          <p className="lead">The number a lender will approve, not the number a listing tempts you with. Enter your income and debts to see your ceiling under the Canadian stress test &mdash; and the gap to the home you have in mind.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ display: 'grid', gap: 18, position: 'sticky', top: 82 }}>
            <F id="a-income" label="Household income (annual)" val={income} set={setIncome} />
            <F id="a-debt" label="Monthly debt payments" val={debt} set={setDebt} />
            <F id="a-down" label="Down payment saved" val={down} set={setDown} />
            <div className="tr-field"><label htmlFor="a-rate">Contract rate %</label><input id="a-rate" type="text" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} /></div>
            <F id="a-tax" label="Est. annual property tax" val={tax} set={setTax} />
            <F id="a-target" label="Target home price (optional)" val={target} set={setTarget} />
            <p className="tr-note" style={{ margin: 0 }}>Qualified at the stress-test rate &mdash; the greater of your rate + 2% or 5.25%. Uses standard GDS/TDS limits.</p>
          </div>

          <div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 30 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Maximum home price you&apos;d qualify for</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.6rem,5vw,3.6rem)', letterSpacing: '-.03em', marginTop: 4 }}>{fmt(m.maxPrice)}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
                {[[fmt(m.maxMort), 'Max mortgage'], [m.stress.toFixed(2) + '%', 'Qualifying rate'], [fmt(m.maxPI + m.taxM + m.heat), 'Max monthly (P+I+tax)'], [Math.round(m.tds) + '%', 'TDS at ceiling']].map(([v, l]) => (
                  <div key={l}><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{v}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>{l}</div></div>
                ))}
              </div>
            </div>

            <div className="tr-card" style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 'var(--fs-sm)', marginBottom: 12 }}><span>Your ceiling vs your target</span><b className="tnum" style={{ color: m.gap >= 0 ? 'var(--up)' : 'var(--down)' }}>{m.gap >= 0 ? fmtk(m.gap) + ' of headroom' : fmtk(-m.gap) + ' under target'}</b></div>
              <div style={{ height: 12, borderRadius: 6, background: 'var(--panel)', overflow: 'hidden', position: 'relative' }}>
                <i style={{ position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: 6, background: 'var(--brand-500)', width: (m.maxPrice / scale) * 100 + '%' }} />
                <span style={{ position: 'absolute', top: -4, bottom: -4, width: 3, background: 'var(--down)', borderRadius: 2, left: (m.target / scale) * 100 + '%' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', marginTop: 8, fontFamily: 'var(--font-mono)' }}><span>Qualify: {fmtk(m.maxPrice)}</span><span>Target: {fmtk(m.target)}</span></div>
              <div style={{ display: 'grid', gap: 12, marginTop: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 'var(--fs-sm)' }}><span>Gross debt service (GDS)</span><b className="tnum" style={{ color: m.gds <= 39 ? 'var(--up)' : 'var(--down)' }}>{Math.round(m.gds)}% · {m.gds <= 39 ? 'OK' : 'High'}</b></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 'var(--fs-sm)' }}><span>Total debt service (TDS)</span><b className="tnum" style={{ color: m.tds <= 44 ? 'var(--up)' : 'var(--down)' }}>{Math.round(m.tds)}% · {m.tds <= 44 ? 'OK' : 'High'}</b></div>
              </div>
            </div>

            <div className="tr-advisor" style={{ padding: 'clamp(24px,3vw,36px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">Close the gap</span>
                <h2 style={{ fontSize: '1.4rem' }}>A broker can often stretch the ceiling.</h2>
                <p>Different lenders read income and debt differently &mdash; self-employed, bonus, rental. A licensed broker finds the lender whose rules fit your file, and pre-approves it.</p>
                <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get pre-approved</Link></div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul><li><Check />Lenders matched to your income type</li><li><Check />Real pre-approval, not a guess</li></ul>
              </div>
            </div>
            <p className="tr-note">Illustrative estimate using standard GDS 39% / TDS 44% guidelines and the Canadian mortgage stress test. Heating and condo-fee assumptions are simplified. Actual approval depends on the lender&apos;s full assessment of your credit, income and property. Not an offer of credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
