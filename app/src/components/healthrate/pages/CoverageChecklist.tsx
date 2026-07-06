'use client'

/**
 * Super Visa coverage checklist — ported from coverage-checklist.html. Interactive:
 * progress persists in localStorage, printable. Education only, no personal data.
 */
import { useEffect, useState } from 'react'
import { Button, Card, Icon } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

const ITEMS: [string, string][] = [
  ['Minimum $100,000 in emergency medical coverage', 'The IRCC floor. More is allowed; less fails the application.'],
  ['Valid for at least 1 year from the entry date', 'Shorter policies are not accepted for the Super Visa.'],
  ['From a Canadian insurer, or an approved foreign one', 'IRCC keeps a list of accepted foreign providers — check it if buying abroad.'],
  ['Covers health care, hospitalization AND repatriation', 'All three must be named in the policy wording.'],
  ['Start date can be moved if the flight changes', 'Plans shift. Confirm date changes are free before buying.'],
  ['Refundable if the visa is refused', 'Look for the refund clause and any admin fee it carries.'],
  ['You understand the deductible', 'The amount your family pays first on any claim — it changes the price.'],
  ['You have read the pre-existing condition clause', 'The stability period decides whether ongoing conditions are covered. Read it twice.'],
]

export default function CoverageChecklist() {
  const [done, setDone] = useState<number[]>([])
  useEffect(() => {
    try {
      const raw = localStorage.getItem('hr_checklist_v1')
      if (raw) setDone(JSON.parse(raw))
    } catch { /* ignore */ }
  }, [])
  const toggle = (i: number) => {
    const next = done.includes(i) ? done.filter((x) => x !== i) : [...done, i]
    setDone(next)
    try { localStorage.setItem('hr_checklist_v1', JSON.stringify(next)) } catch { /* ignore */ }
  }
  const pct = Math.round((done.length / ITEMS.length) * 100)

  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Super Visa', R.superVisa], ['Coverage checklist', null]]}
        eyebrow="Interactive checklist · education only"
        title="Eight boxes to tick "
        em="before anyone pays"
        tail="."
        lead="Work through this with the actual policy wording open. Your progress saves in your browser, and you can print the list for the family conversation."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <Card pad accentTop>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 8 }}>
              <div className="eyebrow">Your progress</div>
              <span className="tabular" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: pct === 100 ? 'var(--success)' : 'var(--accent)' }}>{done.length}/{ITEMS.length}</span>
            </div>
            <div style={{ height: 10, borderRadius: 6, background: 'var(--surface-sunk)', overflow: 'hidden', marginBottom: 22 }}>
              <div style={{ height: '100%', width: pct + '%', borderRadius: 6, background: pct === 100 ? 'var(--success)' : 'var(--accent)', transition: 'width .2s ease-out' }} />
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {ITEMS.map(([t, d], i) => {
                const on = done.includes(i)
                return (
                  <button key={i} onClick={() => toggle(i)} type="button" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', textAlign: 'left', cursor: 'pointer', background: on ? 'var(--success-soft)' : 'var(--white)', border: on ? '1px solid var(--success)' : '1px solid var(--border)', borderRadius: 12, padding: '14px 16px', fontFamily: 'var(--font-sans)', transition: 'background .15s, border-color .15s' }}>
                    <span style={{ width: 24, height: 24, borderRadius: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: on ? 'none' : '2px solid var(--border-strong)', background: on ? 'var(--success)' : 'transparent', marginTop: 1 }}>{on && <Icon name="check" size={15} color="#fff" />}</span>
                    <span>
                      <span style={{ display: 'block', fontWeight: 700, fontSize: 15, color: 'var(--navy)', textDecoration: on ? 'line-through' : 'none', opacity: on ? 0.7 : 1 }}>{t}</span>
                      <span style={{ display: 'block', fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.5, marginTop: 3 }}>{d}</span>
                    </span>
                  </button>
                )
              })}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 }}>
              <Button variant="outline" onClick={() => window.print()}>Print this list</Button>
              <Button withArrow href={R.superVisaGuide}>Read the full guide</Button>
            </div>
          </Card>
          <div style={{ marginTop: 22 }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
