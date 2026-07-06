'use client'

/**
 * LifeRate bespoke coverage-gap picker (template #22), ported from bespoke/liferate/gap-picker.html.
 * LifeRate-only; rendered by /life-insurance/coverage. Tap the obligations that matter → a
 * recommended band, then straight into the quoter via /life-insurance/quote?coverage=N.
 * Planning aid only, not advice.
 */
import Link from 'next/link'
import { useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
)

type Gap = { key: string; amt: number; t: string; s: string; icon: React.ReactNode; on: boolean }

const INITIAL: Gap[] = [
  { key: 'mortgage', amt: 350000, t: 'Pay off the mortgage', s: 'So the family keeps the home, free and clear', on: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 5l8 6.5M6.5 10v9h11v-9" /></svg> },
  { key: 'income', amt: 300000, t: 'Replace my income', s: 'A few years of take-home pay to steady things', on: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4" /></svg> },
  { key: 'kids', amt: 150000, t: 'Childcare & education', s: 'Daycare, school, a start on tuition', on: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="3" /><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></svg> },
  { key: 'debts', amt: 30000, t: 'Clear other debts', s: 'Car loan, credit, line of credit', on: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg> },
  { key: 'final', amt: 25000, t: 'Final expenses', s: 'A cushion so no one scrambles', on: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" /></svg> },
]

const money = (n: number) => '$' + Math.round(n).toLocaleString()

export default function GapPicker() {
  const [gaps, setGaps] = useState<Gap[]>(INITIAL)
  const toggle = (key: string) => setGaps((g) => g.map((x) => (x.key === key ? { ...x, on: !x.on } : x)))

  const chosen = gaps.filter((g) => g.on)
  const total = Math.round(chosen.reduce((s, g) => s + g.amt, 0) / 10000) * 10000
  const href = `/life-insurance/quote?coverage=${total}`

  return (
    <main>
      <section className="section">
        <div className="wrap lr-gap-wrap">
          <div className="lr-gap-head">
            <span className="eyebrow center">Coverage-gap picker</span>
            <h1>What should your policy actually cover?</h1>
            <p className="lead">Tap the obligations that would fall on someone else if you weren’t here. We’ll turn them into a recommended coverage band — then straight into a quote.</p>
          </div>

          <div className="lr-gap-grid">
            <div className="lr-gap-picks">
              {gaps.map((g) => (
                <button type="button" className="lr-gap-chip" key={g.key} data-on={g.on} onClick={() => toggle(g.key)}>
                  <span className="ic">{g.icon}</span>
                  <span className="t">{g.t}</span>
                  <span className="s">{g.s}</span>
                  <span className="tick"><Tick /></span>
                </button>
              ))}
            </div>

            <div className="lr-gap-out">
              <span className="eyebrow">Suggested coverage</span>
              <div className="fig">{chosen.length ? money(total) : '$0'}</div>
              <div className="figsub">Based on {chosen.length} obligation{chosen.length === 1 ? '' : 's'} selected.</div>
              <Link className="btn btn-lg" href={href} aria-disabled={!chosen.length}>Quote this amount <Arrow /></Link>
              <p className="note">A starting point for planning — not advice. Refine it with an advisor or the full <Link href="/life-insurance/calculator">needs calculator</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
