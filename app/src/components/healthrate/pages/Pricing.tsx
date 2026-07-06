'use client'

/**
 * Pricing explainer — ported from how-pricing-works.html. Interactive: flip the
 * five levers that move visitor-insurance pricing and watch a relative index.
 * An index, never a price — education only, not a quote.
 */
import { useState } from 'react'
import { Card, Eyebrow } from '../ds'
import { HrEduNote, HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

type Lever = { k: string; label: string; opts: [string, number][]; note: string }
const LEVERS: Lever[] = [
  { k: 'age', label: 'Age of the visitor', opts: [['Under 55', 0], ['55–69', 30], ['70–79', 75], ['80+', 130]], note: 'The biggest single factor. Premiums step up in age bands.' },
  { k: 'amount', label: 'Coverage amount', opts: [['$50,000', -15], ['$100,000', 0], ['$150,000', 12], ['$300,000', 30]], note: 'Super Visa requires at least $100,000.' },
  { k: 'deductible', label: 'Deductible', opts: [['$0', 10], ['$500', 0], ['$1,000', -8], ['$3,000', -18]], note: 'Pay more yourself per claim, pay less for the policy.' },
  { k: 'preex', label: 'Pre-existing conditions covered?', opts: [['Not covered', -12], ['Stable 180 days', 0], ['Stable 90 days', 15]], note: 'Shorter stability requirements cost more — and matter most.' },
]

export default function Pricing() {
  const [sel, setSel] = useState<Record<string, number>>({ age: 1, amount: 1, deductible: 1, preex: 1 })
  const idx = 100 + LEVERS.reduce((sum, l) => sum + l.opts[sel[l.k]][1], 0)
  const barPct = Math.min(100, Math.max(8, (idx / 260) * 100))

  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Travel', R.travel], ['How pricing works', null]]}
        eyebrow="Pricing explainer · education only"
        title="What actually moves the price of "
        em="visitor cover"
        tail="."
        lead="No quotes here — something better: the levers. Flip them and watch a relative index move, so when a real quote arrives you understand exactly why it looks the way it does."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div className="hr-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 36, alignItems: 'start' }}>
            <div style={{ display: 'grid', gap: 16 }}>
              {LEVERS.map((l) => (
                <Card key={l.k} pad>
                  <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--navy)', marginBottom: 4 }}>{l.label}</div>
                  <p style={{ fontSize: 13, color: 'var(--ink-muted)', margin: '0 0 12px', lineHeight: 1.5 }}>{l.note}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {l.opts.map(([label], i) => {
                      const on = sel[l.k] === i
                      return (
                        <button key={i} type="button" onClick={() => setSel({ ...sel, [l.k]: i })}
                          style={{ padding: '9px 16px', borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13.5, border: on ? '1.5px solid var(--accent)' : '1px solid var(--border-strong)', background: on ? 'var(--accent-soft)' : 'var(--white)', color: on ? 'var(--accent)' : 'var(--ink-muted)', transition: 'all .15s ease-out' }}>{label}</button>
                      )
                    })}
                  </div>
                </Card>
              ))}
            </div>
            <div style={{ position: 'sticky', top: 140 }}>
              <Card pad accentTop>
                <div className="eyebrow" style={{ marginBottom: 16 }}>Relative price index</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                  <span className="tabular" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 52, letterSpacing: '-.03em', color: 'var(--accent)' }}>{idx}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink-muted)' }}>vs. a baseline of 100</span>
                </div>
                <div style={{ height: 14, borderRadius: 8, background: 'var(--surface-sunk)', overflow: 'hidden', marginBottom: 18 }}>
                  <div style={{ height: '100%', width: barPct + '%', borderRadius: 8, background: 'linear-gradient(90deg, var(--accent), var(--accent-strong))', transition: 'width .2s ease-out' }} />
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
                  Baseline 100 = a visitor aged 55–69 with $100,000 coverage, a $500 deductible and a 180-day stability clause.
                </p>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: 11.5, fontStyle: 'italic', color: 'var(--ink-muted)', lineHeight: 1.5, textAlign: 'center' }}>
                  Illustrative index for education only — not a quote, not a price, and not specific to any insurer.
                </div>
              </Card>
              <div style={{ marginTop: 16 }}><HrEduNote /></div>
              <div style={{ marginTop: 16 }}><Eyebrow variant="muted">Super Visa requires ≥ $100,000</Eyebrow></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
