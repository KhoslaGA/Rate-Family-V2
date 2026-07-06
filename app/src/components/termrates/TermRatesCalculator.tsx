'use client'

/**
 * TermRates mortgage payment calculator, ported from calculator.html. Sliders →
 * live payment, CMHC premium, total interest and a principal/interest donut, with
 * Canadian semi-annual compounding. Illustrative; runs entirely in the browser.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-CA')
const premiumRate = (ltv: number) => (ltv <= 80 ? 0 : ltv <= 85 ? 0.028 : ltv <= 90 ? 0.031 : 0.04)
const FREQ: [number, string][] = [[12, 'Monthly'], [26, 'Bi-weekly'], [24, 'Semi-monthly']]
const AMORTS = [15, 20, 25, 30]

const labelStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 9, display: 'block' }

export default function TermRatesCalculator() {
  const [price, setPrice] = useState(750000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(4.09)
  const [amort, setAmort] = useState(25)
  const [freq, setFreq] = useState(12)

  const m = useMemo(() => {
    const down = (price * downPct) / 100
    const ltv = 100 - downPct
    const prem = premiumRate(ltv) * (price - down)
    const loan = price - down + prem
    const perAnnual = Math.pow(1 + rate / 100 / 2, 2) - 1
    const i = Math.pow(1 + perAnnual, 1 / freq) - 1
    const n = amort * freq
    const pay = i > 0 ? (loan * i) / (1 - Math.pow(1 + i, -n)) : loan / n
    let bal = loan, interestTerm = 0, principalTerm = 0
    for (let k = 0; k < 5 * freq; k++) { const intr = bal * i; interestTerm += intr; principalTerm += pay - intr; bal -= pay - intr; if (bal < 0) bal = 0 }
    const totInt = pay * n - loan
    const frac = principalTerm / (principalTerm + interestTerm || 1)
    return { down, ltv, prem, loan, pay, bal, totInt, principalTerm, interestTerm, frac }
  }, [price, downPct, rate, amort, freq])

  const freqLbl = FREQ.find((f) => f[0] === freq)![1]
  const C = 289

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/calculator">Calculators</Link><span className="sep">/</span><span>Payment</span></div>
          <h1>Mortgage payment calculator.</h1>
          <p className="lead">Drag the inputs and watch the payment, the default-insurance premium, and the total interest recalculate in real time. Everything runs in your browser &mdash; nothing is sent anywhere.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          {/* Inputs */}
          <div className="tr-card" style={{ display: 'grid', gap: 20 }}>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', ...labelStyle }}>Home price <b className="tnum" style={{ fontSize: '1.05rem', color: 'var(--ink)', textTransform: 'none', letterSpacing: 0 }}>{fmt(price)}</b></label>
              <input type="range" min={200000} max={2000000} step={10000} value={price} onChange={(e) => setPrice(+e.target.value)} style={{ width: '100%' }} />
            </div>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', ...labelStyle }}>Down payment <b className="tnum" style={{ fontSize: '1.05rem', color: 'var(--ink)', textTransform: 'none', letterSpacing: 0 }}>{fmt(m.down)} · {downPct}%</b></label>
              <input type="range" min={5} max={50} step={1} value={downPct} onChange={(e) => setDownPct(+e.target.value)} style={{ width: '100%' }} />
            </div>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', ...labelStyle }}>Interest rate <b className="tnum" style={{ fontSize: '1.05rem', color: 'var(--ink)', textTransform: 'none', letterSpacing: 0 }}>{rate.toFixed(2)}%</b></label>
              <input type="range" min={1.5} max={9} step={0.01} value={rate} onChange={(e) => setRate(+e.target.value)} style={{ width: '100%' }} />
            </div>
            <div>
              <span style={labelStyle}>Amortization</span>
              <div className="tr-seg" style={{ display: 'flex' }}>{AMORTS.map((a) => <button key={a} className={amort === a ? 'on' : ''} onClick={() => setAmort(a)} type="button" style={{ flex: 1 }}>{a} yr</button>)}</div>
            </div>
            <div>
              <span style={labelStyle}>Payment frequency</span>
              <div className="tr-seg" style={{ display: 'flex' }}>{FREQ.map(([v, l]) => <button key={v} className={freq === v ? 'on' : ''} onClick={() => setFreq(v)} type="button" style={{ flex: 1 }}>{l}</button>)}</div>
            </div>
            <Link className="btn btn-accent btn-lg" href="/mortgages/quote" style={{ justifyContent: 'center' }}>Get real rates for this scenario <Arrow /></Link>
          </div>

          {/* Output */}
          <div style={{ display: 'grid', gap: 16 }}>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: '28px 30px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>{freqLbl} payment</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.8rem,5vw,3.8rem)', letterSpacing: '-.03em', marginTop: 4 }}>{fmt(m.pay)}<small style={{ fontSize: '1rem', color: 'var(--brand-200)' }}>/{freq === 12 ? 'mo' : freq === 26 ? '2wk' : '½mo'}</small></div>
              <div style={{ display: 'flex', gap: 22, marginTop: 16, flexWrap: 'wrap' }}>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.15rem' }}>{fmt(price - m.down)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Mortgage amount</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.15rem' }}>{fmt(m.prem)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>CMHC premium</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.15rem' }}>{Math.round(m.ltv)}%</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Loan-to-value</div></div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="tr-card"><div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Total interest / term</div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.5rem', marginTop: 6 }}>{fmt(m.totInt)}</div></div>
              <div className="tr-card"><div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Balance at term end</div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.5rem', marginTop: 6 }}>{fmt(m.bal)}</div></div>
            </div>
            <div className="tr-card" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <svg width="118" height="118" viewBox="0 0 118 118">
                <circle cx="59" cy="59" r="46" fill="none" stroke="var(--panel)" strokeWidth="16" />
                <circle cx="59" cy="59" r="46" fill="none" stroke="var(--brand-500)" strokeWidth="16" strokeDasharray={C} strokeDashoffset={(C * (1 - m.frac)).toFixed(0)} transform="rotate(-90 59 59)" strokeLinecap="round" />
              </svg>
              <div style={{ display: 'grid', gap: 10, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 'var(--fs-sm)' }}><span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--brand-500)' }} />Principal, 5-yr term <b className="tnum" style={{ marginLeft: 'auto' }}>{fmt(m.principalTerm)}</b></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 'var(--fs-sm)' }}><span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--panel)' }} />Interest, 5-yr term <b className="tnum" style={{ marginLeft: 'auto' }}>{fmt(m.interestTerm)}</b></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 'var(--fs-sm)', borderTop: '1px solid var(--line)', paddingTop: 9 }}><span style={{ width: 12 }} />Paid over 5 years <b className="tnum" style={{ marginLeft: 'auto' }}>{fmt(m.principalTerm + m.interestTerm)}</b></div>
              </div>
            </div>
            <p className="tr-note">Illustrative estimate. Assumes a fixed rate held for a 5-year term with Canadian semi-annual compounding. CMHC premium applies to insured (under 20% down) mortgages and is estimated by standard bands. Actual figures depend on your lender, product and approval. Not an offer of credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
