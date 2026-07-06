'use client'

/**
 * OHIP waiting-period planner — ported from ohip-wait.html. Interactive: pick a
 * landing date, see the gap a classic 3-month wait would create. Illustrative
 * planning aid, not a determination — confirm with ServiceOntario.
 */
import { useState } from 'react'
import { Button, Card, Icon } from '../ds'
import { HrEduNote, HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

function addMonths(d: Date, m: number) { const x = new Date(d); x.setMonth(x.getMonth() + m); return x }
function firstOfNextMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth() + 1, 1) }
function fmt(d: Date) { return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' }) }

const GAP: [string, string][] = [
  ['Walk-in clinics still see you', 'You pay out of pocket without coverage — ask prices up front.'],
  ['Temporary medical cover exists', 'Visitor-style policies can bridge the gap for emergencies.'],
  ['Keep every receipt', 'If rules let you claim later, you will want the paper trail.'],
]

export default function OhipWait() {
  const [landing, setLanding] = useState('2026-09-01')
  const landDate = landing ? new Date(landing + 'T12:00:00') : null
  const waitEnd = landDate ? firstOfNextMonth(addMonths(landDate, 2)) : null
  const gapDays = landDate && waitEnd ? Math.max(0, Math.round((waitEnd.getTime() - landDate.getTime()) / 86400000)) : 0

  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Newcomers', R.newcomers], ['OHIP wait planner', null]]}
        eyebrow="Planning tool · education only"
        title="If a waiting period applies, "
        em="here is your gap"
        tail="."
        lead="Ontario has historically made some new residents wait up to 3 months before OHIP begins — and the rules have changed more than once since 2020. This planner shows the gap a classic 3-month wait would create, so you can check your real dates with ServiceOntario and plan calmly."
      />
      <section style={{ padding: '56px 0', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div className="hr-2col" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 36, alignItems: 'start' }}>
            <Card pad>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Your dates</div>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-muted)', marginBottom: 6 }}>The day you become an Ontario resident</label>
              <input type="date" value={landing} onChange={(e) => setLanding(e.target.value)}
                style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', border: '1px solid var(--border-strong)', borderRadius: 8, fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink)', background: 'var(--white)' }} />
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.55, margin: '14px 0 0' }}>The classic rule counted the rest of your landing month plus two full months, with coverage starting on the first day of the following month.</p>
              <div style={{ marginTop: 16 }}><HrEduNote /></div>
            </Card>
            <div>
              <Card pad accentTop>
                <div className="eyebrow" style={{ marginBottom: 18 }}>The gap, visualized</div>
                {landDate && (
                  <div>
                    <div style={{ display: 'grid', gap: 10 }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--navy)', flexShrink: 0 }} />
                        <div><div style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)' }}>{fmt(landDate)}</div><div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>You arrive and establish residency</div></div>
                      </div>
                      <div style={{ marginLeft: 5, borderLeft: '3px dashed var(--accent-line)', padding: '10px 0 10px 16px' }}>
                        <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 10, padding: '12px 16px', display: 'inline-flex', alignItems: 'baseline', gap: 10 }}>
                          <span className="tabular" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 30, color: 'var(--accent)' }}>{gapDays}</span>
                          <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--navy)' }}>days to plan for, if the classic wait applies</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                        <div><div style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)' }}>{waitEnd && fmt(waitEnd)}</div><div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>Earliest first day of coverage under the classic rule</div></div>
                      </div>
                    </div>
                    <p className="mono" style={{ fontSize: 11.5, color: 'var(--ink-muted)', margin: '18px 0 0', lineHeight: 1.6 }}>Illustrative planning aid, not a determination. Ontario waived the wait in March 2020 and rules have shifted since — confirm your start date with ServiceOntario before relying on any gap plan.</p>
                  </div>
                )}
              </Card>
              <Card pad style={{ marginTop: 18 }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>During the gap</div>
                {GAP.map(([t, d], i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '9px 0', alignItems: 'flex-start' }}>
                    <span style={{ marginTop: 2, flexShrink: 0 }}><Icon name="check" size={16} color="var(--accent)" /></span>
                    <div><span style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>{t}</span><span style={{ fontSize: 14, color: 'var(--ink-muted)' }}> — {d}</span></div>
                  </div>
                ))}
                <div style={{ marginTop: 12 }}><Button variant="outline" size="sm" withArrow href={R.travel}>What bridge cover includes</Button></div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
