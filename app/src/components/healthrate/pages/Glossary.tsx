'use client'

/**
 * Health-insurance glossary — ported from glossary.html. Search + tap-through
 * detail, written for second-language readers. Reference content, education only.
 */
import { useState } from 'react'
import { Badge, Icon, Input } from '../ds'
import { useHrLang } from '../useHrLang'

type Term = { term: string; letter: string; short: string; long: string }
const TERMS: Term[] = [
  { term: 'Super Visa', letter: 'S', short: 'A visa letting parents/grandparents visit Canada long-term.', long: 'The Super Visa lets parents and grandparents of Canadian citizens or permanent residents visit for extended stays — years at a time. Applicants must hold qualifying medical insurance: at least $100,000 of coverage, valid one year, covering care, hospitalization and repatriation.' },
  { term: 'OHIP', letter: 'O', short: 'Ontario Health Insurance Plan — the provincial public coverage.', long: 'OHIP is Ontario’s public health insurance. Once covered, most doctor and hospital care is paid for. New residents should confirm exactly when their coverage starts — rules about waiting periods have changed over the years.' },
  { term: 'Waiting period', letter: 'W', short: 'Time before provincial coverage begins for new residents.', long: 'Some provinces have made new residents wait before public coverage starts — historically up to 3 months in Ontario. During a wait, families often bridge the gap with temporary private coverage. Confirm the current rule with your province.' },
  { term: 'Deductible', letter: 'D', short: 'What you pay out of pocket before coverage kicks in.', long: 'The amount you agree to pay yourself on a claim before the insurer pays the rest. A higher deductible lowers the premium — and raises what a bad day costs.' },
  { term: 'Premium', letter: 'P', short: 'The price you pay for the policy.', long: 'The premium is the cost of coverage, paid up front or in instalments. For visitor policies it is driven mostly by age, coverage amount, deductible and how pre-existing conditions are treated.' },
  { term: 'Pre-existing condition', letter: 'P', short: 'A health condition that existed before the policy started.', long: 'Any condition diagnosed or treated before the policy begins. Most visitor policies cover it only if it has been stable — same treatment, no new symptoms — for a set period. This clause decides more claims than any other.' },
  { term: 'Stability period', letter: 'S', short: 'How long a condition must be unchanged to be covered.', long: 'The stretch of time — commonly 90 or 180 days — during which a pre-existing condition must have had no changes in treatment, medication or symptoms for the policy to cover it. Shorter stability requirements make a policy more protective, and more expensive.' },
  { term: 'Repatriation', letter: 'R', short: 'Returning a patient to their home country for care.', long: 'Coverage for transporting a seriously ill or deceased person home. Super Visa policies must include it — it is one of the three named requirements.' },
  { term: 'Emergency medical', letter: 'E', short: 'Sudden, unexpected illness or injury — the core of visitor cover.', long: 'Visitor and travel policies cover emergencies: the unexpected. Routine checkups, planned treatments and ongoing care schedules are not emergencies and are generally excluded.' },
  { term: 'Beneficiary', letter: 'B', short: 'The person who receives a payout from a policy.', long: 'Whoever is named to receive a benefit when a claim is paid. On travel policies this matters mainly for accidental-death coverage.' },
  { term: 'IRCC', letter: 'I', short: 'Immigration, Refugees and Citizenship Canada.', long: 'The federal department that runs immigration programs, including the Super Visa. Its website, canada.ca, is the source of truth for insurance requirements and the approved foreign insurer list.' },
  { term: 'Exclusion', letter: 'E', short: 'Something the policy specifically does not cover.', long: 'Every policy lists what it will not pay for — certain activities, conditions or situations. The exclusions section deserves as much attention as the coverage table.' },
]

export default function Glossary() {
  const lang = useHrLang()
  const [q, setQ] = useState('')
  const [active, setActive] = useState<Term | null>(null)
  const filtered = TERMS.filter((t) => (t.term + ' ' + t.short).toLowerCase().includes(q.toLowerCase()))

  return (
    <div style={{ background: 'var(--cream)', minHeight: 480, padding: '48px 24px 64px' }}>
      <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto' }}>
        <div className="eyebrow" style={{ color: 'var(--ink-muted)' }}>{lang === 'fr' ? 'Glossaire HealthRate' : 'HealthRate glossary'}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 900, letterSpacing: '-.02em', color: 'var(--ink-strong)', margin: '12px 0 8px' }}>
          The words on the policy, demystified
        </h1>
        <p style={{ fontSize: 17, color: 'var(--ink-muted)', maxWidth: 560, margin: '0 0 28px', lineHeight: 1.55 }}>
          Short definitions first, plain-English detail on tap. Written for readers working in a second language.
        </p>
        {active ? (
          <div style={{ background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)', padding: 28, boxShadow: 'var(--shadow-soft)' }}>
            <button onClick={() => setActive(null)} type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, fontSize: 13, cursor: 'pointer', marginBottom: 16, padding: 0 }}>
              <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}><Icon name="arrowRight" size={14} color="var(--accent)" /></span> All terms
            </button>
            <Badge tone="accent">{active.letter}</Badge>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--navy)', margin: '12px 0 12px' }}>{active.term}</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink)', maxWidth: 'var(--measure-prose)' }}>{active.long}</p>
          </div>
        ) : (
          <div>
            <div style={{ maxWidth: 360, marginBottom: 24 }}>
              <Input label="Search terms" placeholder="Try: stability, OHIP, deductible" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
              {filtered.map((t, ti) => (
                <button key={t.term + ti} onClick={() => setActive(t)} type="button"
                  style={{ textAlign: 'left', background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: 18, cursor: 'pointer', boxShadow: 'var(--shadow-soft)', transition: 'transform var(--dur), box-shadow var(--dur)', fontFamily: 'var(--font-sans)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 16, color: 'var(--accent)' }}>{t.letter}</span>
                    <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--navy)' }}>{t.term}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5 }}>{t.short}</p>
                </button>
              ))}
              {filtered.length === 0 && <p style={{ color: 'var(--ink-muted)', fontStyle: 'italic' }}>No terms match. Try a shorter word.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
