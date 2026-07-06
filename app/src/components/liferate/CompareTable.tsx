'use client'

/**
 * LifeRate bespoke premium comparison table (template #20), ported from
 * bespoke/liferate/compare-table.html. LifeRate-only; rendered by /life-insurance/compare.
 * Illustrative monthly premiums for a healthy non-smoker — comparison only, no "lowest rate"
 * claim, not an offer. Hands off to the quoter for a personalized figure.
 */
import Link from 'next/link'
import { useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

const ROWS = [
  { prod: '10-year term', sub: 'Level for 10 years', f: 0.11, m: 0.13 },
  { prod: '20-year term', sub: 'Level for 20 years', f: 0.16, m: 0.19 },
  { prod: '30-year term', sub: 'Level for 30 years', f: 0.24, m: 0.30 },
  { prod: 'Whole life', sub: 'Lifelong + cash value', f: 1.05, m: 1.22 },
]

const money = (n: number) => '$' + (n < 100 ? n.toFixed(2) : Math.round(n).toLocaleString())

export default function CompareTable() {
  const [age, setAge] = useState(35)
  const [sex, setSex] = useState<'F' | 'M'>('F')
  const [cov, setCov] = useState(500000)

  const ageF = 1 + Math.pow(Math.max(age - 25, 0), 1.5) * 0.012
  const rows = ROWS.map((r) => ({ ...r, monthly: Math.max(9, (sex === 'F' ? r.f : r.m) * ageF * (cov / 1000)) }))
  const min = Math.min(...rows.map((r) => r.monthly))

  return (
    <main>
      <section className="section">
        <div className="wrap lr-tbl-wrap">
          <div className="lr-tbl-head">
            <span className="eyebrow center">Premium comparison</span>
            <h1>Term vs whole life, in real numbers.</h1>
            <p className="lead">Illustrative monthly premiums for a healthy non-smoker. Change the inputs to see how the term-vs-permanent gap shifts.</p>
          </div>

          <div className="lr-tbl-ctrl">
            <div className="grp">
              <label htmlFor="t-age">Age</label>
              <select id="t-age" value={age} onChange={(e) => setAge(+e.target.value)}>
                {[25, 30, 35, 40, 45, 50, 55].map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div className="grp">
              <label htmlFor="t-sex">Sex</label>
              <select id="t-sex" value={sex} onChange={(e) => setSex(e.target.value as 'F' | 'M')}>
                <option value="F">Female</option>
                <option value="M">Male</option>
              </select>
            </div>
            <div className="grp">
              <label htmlFor="t-cov">Coverage</label>
              <select id="t-cov" value={cov} onChange={(e) => setCov(+e.target.value)}>
                <option value={250000}>$250,000</option>
                <option value={500000}>$500,000</option>
                <option value={750000}>$750,000</option>
                <option value={1000000}>$1,000,000</option>
              </select>
            </div>
          </div>

          <table className="lr-tbl">
            <thead><tr><th>Coverage type</th><th>What it does</th><th className="num">Est. monthly</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.prod}>
                  <td className="prod">{r.prod}<small>{r.sub}</small></td>
                  <td>{r.prod === 'Whole life' ? 'Never expires; builds value' : 'Temporary, most cover per dollar'}</td>
                  <td className={`num${r.monthly === min ? ' best' : ''}`}>{money(r.monthly)}<span style={{ fontSize: '.7rem', color: 'var(--ink-mute)' }}>/mo</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="lr-tbl-note">Illustrative estimates for a healthy non-smoker, drawn from comparative rate data — not an offer. Final premiums are set by the insurer after underwriting. No “lowest rate” claim is made; figures shown for comparison only.</p>

          <div className="lr-tbl-cta">
            <Link className="btn btn-accent btn-lg" href="/life-insurance/quote">Get your own rate across 21 insurers <Arrow /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
