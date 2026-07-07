'use client'

/**
 * Super Visa eligibility pre-check.
 *
 * COMPLIANCE-CRITICAL: HealthRate is education-only — it never quotes or
 * sells. This widget therefore consumes ONLY the *eligibility* signal from
 * POST /v1/quotes/health (how many carriers would consider the applicant,
 * and whether a pre-existing condition narrows the market). It deliberately
 * does NOT read, compute, or display any premium. The endpoint returns
 * prices; we throw them away here on purpose. Showing a sellable price on
 * HealthRate would break the "education only" posture the page states
 * outright ("Does HealthRate sell this insurance? No.").
 *
 * The value it adds: an applicant learns, before talking to anyone, whether
 * their situation is straightforward (most carriers consider them) or
 * benefits from a licensed advisor (pre-existing narrows the field) — then
 * routes to the guide / checklist, never to a checkout.
 */
import { useState } from 'react'
import { Button, Card, Eyebrow, Badge, Bo } from '../ds'
import { quoteHealth, ApiError } from '@/lib/api/client'

type Phase =
  | { s: 'idle' }
  | { s: 'loading' }
  | { s: 'error'; msg: string }
  | { s: 'done'; eligible: number; total: number; narrowed: boolean }

export default function SuperVisaEligibilityCheck({ guideHref, checklistHref }: { guideHref: string; checklistHref: string }) {
  const [age, setAge] = useState('66')
  const [coverage, setCoverage] = useState<100000 | 150000 | 300000>(100000)
  const [preExisting, setPreExisting] = useState<boolean | null>(null)
  const [phase, setPhase] = useState<Phase>({ s: 'idle' })

  const canCheck = preExisting !== null && Number(age) >= 18

  async function check() {
    if (!canCheck) return
    setPhase({ s: 'loading' })
    try {
      const res = await quoteHealth({
        branch: 'super_visa',
        applicantAge: Number(age) || 66,
        coverageAmount: coverage,
        preExisting: preExisting === true,
      })
      // eligibility ONLY — premiums intentionally discarded
      const total = res.quotes.length
      const eligible = res.quotes.filter((q) => q.eligible).length
      setPhase({ s: 'done', eligible, total, narrowed: eligible < total })
    } catch (err) {
      setPhase({ s: 'error', msg: err instanceof ApiError ? err.message : 'Could not run the check just now.' })
    }
  }

  const Seg = ({ opts, val, set }: { opts: [string, number][]; val: number; set: (v: number) => void }) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {opts.map(([label, v]) => (
        <button
          key={v}
          type="button"
          onClick={() => { set(v as 100000 | 150000 | 300000); setPhase({ s: 'idle' }) }}
          style={{
            padding: '9px 16px', borderRadius: 10, cursor: 'pointer', fontSize: 14, fontWeight: 600,
            border: `1.5px solid ${val === v ? 'var(--accent)' : 'var(--border-soft)'}`,
            background: val === v ? 'var(--accent-soft)' : 'var(--white)',
            color: val === v ? 'var(--accent)' : 'var(--ink)',
          }}
        >{label}</button>
      ))}
    </div>
  )

  return (
    <Card pad accentTop>
      <Eyebrow variant="muted">Free eligibility pre-check</Eyebrow>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--navy)', margin: '10px 0 6px' }}>
        Will most insurers consider your parent?
      </h3>
      <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6, margin: '0 0 20px', maxWidth: '52ch' }}>
        A 20-second check of how many insurers on our reference panel would consider a Super&nbsp;Visa applicant with these details.
        <strong> No prices, no account, nothing sold here</strong> — just whether your situation is straightforward or worth an advisor’s help.
      </p>

      <div style={{ display: 'grid', gap: 18, maxWidth: 460 }}>
        <div>
          <label htmlFor="sv-age" className="eyebrow" style={{ display: 'block', marginBottom: 7 }}>Applicant’s age</label>
          <input
            id="sv-age" type="number" min={18} max={99} value={age}
            onChange={(e) => { setAge(e.target.value); setPhase({ s: 'idle' }) }}
            style={{ width: 120, padding: '10px 12px', borderRadius: 10, border: '1.5px solid var(--border-soft)', fontSize: 15 }}
          />
        </div>

        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 7 }}>Coverage amount</span>
          <Seg opts={[['$100k', 100000], ['$150k', 150000], ['$300k', 300000]]} val={coverage} set={(v) => setCoverage(v as 100000 | 150000 | 300000)} />
        </div>

        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 7 }}>Any managed pre-existing condition?</span>
          <div style={{ display: 'flex', gap: 8 }}>
            {([['No', false], ['Yes', true]] as [string, boolean][]).map(([label, v]) => (
              <button
                key={label} type="button"
                onClick={() => { setPreExisting(v); setPhase({ s: 'idle' }) }}
                style={{
                  padding: '9px 20px', borderRadius: 10, cursor: 'pointer', fontSize: 14, fontWeight: 600,
                  border: `1.5px solid ${preExisting === v ? 'var(--accent)' : 'var(--border-soft)'}`,
                  background: preExisting === v ? 'var(--accent-soft)' : 'var(--white)',
                  color: preExisting === v ? 'var(--accent)' : 'var(--ink)',
                }}
              >{label}</button>
            ))}
          </div>
        </div>

        <div>
          <button
            type="button" onClick={check} disabled={!canCheck || phase.s === 'loading'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 24px',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, borderRadius: 999,
              border: '1.5px solid var(--accent)', cursor: canCheck ? 'pointer' : 'not-allowed',
              background: canCheck ? 'var(--accent)' : 'var(--border-soft)',
              color: canCheck ? 'var(--accent-on)' : 'var(--ink-muted)',
              opacity: phase.s === 'loading' ? 0.7 : 1, transition: 'background var(--dur), opacity var(--dur)',
            }}
          >
            {phase.s === 'loading' ? 'Checking…' : 'Run my pre-check →'}
          </button>
        </div>
      </div>

      {phase.s === 'error' && (
        <p role="alert" style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: '#a33a3a' }}>{phase.msg}</p>
      )}

      {phase.s === 'done' && (
        <div style={{ marginTop: 22, paddingTop: 20, borderTop: '1px solid var(--border-soft)' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Bo pose={phase.narrowed ? 'idle' : 'wave'} size={56} />
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--navy)', marginBottom: 4 }}>
                {phase.eligible} of {phase.total} insurers would consider this application
              </div>
              <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>
                {phase.narrowed
                  ? 'A managed pre-existing condition narrows the field — that’s common and very workable, but it’s exactly where a licensed advisor earns their keep, matching your parent to insurers whose stability rules fit.'
                  : 'That’s a straightforward profile — most insurers on the panel would consider it. Use the checklist to make sure the policy meets every IRCC requirement before your family applies.'}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 18 }}>
            <Button withArrow href={guideHref}>Read the full guide</Button>
            <Button variant="ghost" href={checklistHref}>Open the coverage checklist</Button>
          </div>
          <div style={{ marginTop: 16 }}>
            <Badge tone="accent">Eligibility guidance only · no prices · nothing sold</Badge>
          </div>
        </div>
      )}
    </Card>
  )
}
