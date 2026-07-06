'use client'

/**
 * LifeRate bespoke needs calculator (template #7), ported from bespoke/liferate/calculator.html.
 * LifeRate-only; rendered by /life-insurance/calculator on the LifeRate host. Chrome from root
 * layout. Illustrative only — the recommended figure is a planning estimate, not a quote. Hands
 * the rounded amount to the quoter via /life-insurance/quote?coverage=N.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
)

const money = (n: number) => '$' + Math.round(n).toLocaleString()

const METHOD = [
  { dot: 'var(--brand-400)', h: 'Replace income', p: 'The years your household would lean on your paycheque, times what you actually bring home.' },
  { dot: 'var(--brand-300)', h: 'Clear debts', p: 'The mortgage and anything else that would otherwise fall to someone you love.' },
  { dot: '#D8B36A', h: 'Fund futures', p: 'Education, childcare, a final-expenses cushion — the plans you’d want kept.' },
  { dot: 'rgba(142,74,86,.5)', h: 'Subtract savings', p: 'Group coverage and savings already in place come off the top — you don’t double-buy.' },
]

const ADV = [
  'Refines the estimate to your real situation',
  'Independent across 21 carriers',
  'Tells you if it’s more than you need',
]

export default function LifeRateCalculator() {
  const [income, setIncome] = useState(75000)
  const [years, setYears] = useState(10)
  const [mortgage, setMortgage] = useState(320000)
  const [debts, setDebts] = useState(25000)
  const [future, setFuture] = useState(100000)
  const [existing, setExisting] = useState(50000)

  const v = (n: number) => Math.max(0, Number(n) || 0)
  const incomeNeed = v(income) * years
  const gross = incomeNeed + v(mortgage) + v(debts) + v(future)
  const total = Math.max(0, gross - v(existing))
  const recommended = Math.round(total / 10000) * 10000

  const seg = useMemo(
    () =>
      [
        [incomeNeed, 'var(--brand-300)'],
        [v(mortgage), 'var(--brand-200)'],
        [v(debts), '#D8B36A'],
        [v(future), '#C98B8B'],
      ] as [number, string][],
    [incomeNeed, mortgage, debts, future],
  )
  const denom = gross || 1

  return (
    <main>
      <section className="section">
        <div className="wrap lr-calc-wrap">
          <div className="lr-calc-head">
            <span className="eyebrow center">Needs calculator</span>
            <h1>How much life insurance do you actually need?</h1>
            <p className="lead">Coverage isn’t a guess. It’s four honest numbers — replace your income, clear your debts, fund the futures that matter, then subtract what you already have. Adjust anything; the total updates as you go.</p>
          </div>

          <div className="lr-calc">
            <form className="lr-calc-form" onSubmit={(e) => e.preventDefault()} aria-label="Needs analysis">
              <div className="lr-cf">
                <label htmlFor="c-income">Your annual income <span className="q">take-home, roughly</span></label>
                <div className="lr-money-in"><input id="c-income" type="number" min={0} step={1000} value={income} inputMode="numeric" onChange={(e) => setIncome(+e.target.value)} /></div>
              </div>
              <div className="lr-cf">
                <label htmlFor="c-years">Years to replace it <span className="q">until dependants are independent</span></label>
                <select id="c-years" value={years} onChange={(e) => setYears(+e.target.value)}>
                  {[5, 10, 15, 20, 25].map((y) => <option key={y} value={y}>{y} years</option>)}
                </select>
              </div>
              <div className="lr-cf">
                <label htmlFor="c-mortgage">Mortgage balance <span className="q">what’s left</span></label>
                <div className="lr-money-in"><input id="c-mortgage" type="number" min={0} step={1000} value={mortgage} inputMode="numeric" onChange={(e) => setMortgage(+e.target.value)} /></div>
              </div>
              <div className="lr-cf">
                <label htmlFor="c-debts">Other debts <span className="q">loans, credit, car</span></label>
                <div className="lr-money-in"><input id="c-debts" type="number" min={0} step={1000} value={debts} inputMode="numeric" onChange={(e) => setDebts(+e.target.value)} /></div>
              </div>
              <div className="lr-cf">
                <label htmlFor="c-future">Future goals <span className="q">education, final expenses</span></label>
                <div className="lr-money-in"><input id="c-future" type="number" min={0} step={1000} value={future} inputMode="numeric" onChange={(e) => setFuture(+e.target.value)} /></div>
              </div>
              <div className="lr-cf">
                <label htmlFor="c-existing">Existing coverage &amp; savings <span className="q">what’s already there</span></label>
                <div className="lr-money-in"><input id="c-existing" type="number" min={0} step={1000} value={existing} inputMode="numeric" onChange={(e) => setExisting(+e.target.value)} /></div>
              </div>
            </form>

            <div className="lr-calc-out">
              <span className="eyebrow">Your estimated need</span>
              <div className="fig">{money(recommended)}</div>
              <div className="figsub">A grounded starting point — round to what feels comfortable.</div>
              <div className="lr-bar">
                {seg.map(([amt, color], i) => (
                  <span key={i} style={{ width: `${(amt / denom) * 100}%`, background: color }} />
                ))}
              </div>
              <div className="lr-bd">
                <div className="lr-bd-row"><span className="lab"><span className="dot" style={{ background: 'var(--brand-300)' }} />Income replacement</span><span className="val">{money(incomeNeed)}</span></div>
                <div className="lr-bd-row"><span className="lab"><span className="dot" style={{ background: 'var(--brand-200)' }} />Mortgage</span><span className="val">{money(v(mortgage))}</span></div>
                <div className="lr-bd-row"><span className="lab"><span className="dot" style={{ background: '#D8B36A' }} />Other debts</span><span className="val">{money(v(debts))}</span></div>
                <div className="lr-bd-row"><span className="lab"><span className="dot" style={{ background: '#C98B8B' }} />Future goals</span><span className="val">{money(v(future))}</span></div>
                <div className="lr-bd-row minus"><span className="lab"><span className="dot" style={{ background: 'rgba(255,255,255,.4)' }} />Already covered</span><span className="val">−{money(v(existing))}</span></div>
              </div>
              <Link className="btn btn-lg" href={`/life-insurance/quote?coverage=${recommended}`}>Quote this amount <Arrow /></Link>
              <p className="lr-calc-note">An estimate for planning — not advice. Your advisor can refine it.</p>
            </div>
          </div>

          <div className="lr-method">
            <div className="lr-sec-head center reveal">
              <span className="eyebrow center">The method, in plain sight</span>
              <h2 className="h2">Why these four numbers</h2>
            </div>
            <div className="lr-method-grid">
              {METHOD.map((m) => (
                <div className="lr-method-card" key={m.h}>
                  <span className="dot" style={{ background: m.dot }} />
                  <h4>{m.h}</h4>
                  <p>{m.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-advisor reveal">
            <div className="lr-advisor-copy">
              <span className="eyebrow">Want a second opinion on the number?</span>
              <h2>An advisor will sanity-check it with you.</h2>
              <p>The calculator gets you a grounded figure. A licensed advisor can factor in the things a form can’t — and tell you plainly if it’s more than you need.</p>
              <div className="lr-advisor-cta">
                <Link className="btn btn-accent btn-lg" href={`/life-insurance/quote?coverage=${recommended}`}>Take this into a quote</Link>
                <Link className="btn btn-ghost btn-lg" href="/contact">Book a free call</Link>
              </div>
            </div>
            <div className="lr-advisor-card">
              <div className="who">
                <span className="av">GK</span>
                <div><b style={{ display: 'block', color: '#fff' }}>Gautam Khosla</b><span>LLQP-Licensed Advisor · KLC Group</span></div>
              </div>
              <ul>{ADV.map((t) => <li key={t}><Check />{t}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
