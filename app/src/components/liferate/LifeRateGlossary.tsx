'use client'

/**
 * LifeRate bespoke glossary (template #11), ported from bespoke/liferate/glossary.html.
 * LifeRate-only; rendered by /life-insurance/glossary. Plain-English definitions with live
 * search + A–Z jump. Reference content, self-canonical on the LifeRate host.
 */
import { useMemo, useState } from 'react'

type Term = { term: string; letter: string; means: string; def: string }

const TERMS: Term[] = [
  { term: 'Beneficiary', letter: 'B', means: '= who gets paid', def: 'The person or people who receive the payout from your policy. You can name more than one and split the amount between them.' },
  { term: 'Contingent beneficiary', letter: 'B', means: '= the backup', def: 'Who receives the payout if your primary beneficiary can’t — a second name on the policy, in case the first no longer applies.' },
  { term: 'Cash value', letter: 'C', means: '= savings inside the policy', def: 'A pool that builds inside a permanent policy over time, tax-advantaged. You can borrow against it or withdraw from it while you’re alive.' },
  { term: 'Critical illness cover', letter: 'C', means: '= a lump sum on diagnosis', def: 'Pays a single, tax-free amount if you’re diagnosed with a covered condition — money to use however you need during recovery.' },
  { term: 'Convertibility', letter: 'C', means: '= your right to switch', def: 'The option to turn a term policy into permanent coverage, usually without a new medical exam, within a window set by your contract.' },
  { term: 'Death benefit', letter: 'D', means: '= the payout', def: 'The tax-free amount your beneficiary receives when you pass away. Also called the coverage or face amount.' },
  { term: 'Dependant', letter: 'D', means: '= who relies on you', def: 'Anyone whose day-to-day costs lean on your income — usually a partner or children. The starting point for sizing coverage.' },
  { term: 'Face amount', letter: 'F', means: '= the payout size', def: 'The coverage amount your beneficiary would receive — the headline number on the policy, also called the coverage amount.' },
  { term: 'Grace period', letter: 'G', means: '= a late-payment buffer', def: 'A short window after a missed premium during which your coverage stays active and you can pay without the policy lapsing.' },
  { term: 'Lapse', letter: 'L', means: '= coverage ends early', def: 'When a policy stops because premiums weren’t paid. Reinstating it later can require new health questions, so it’s worth avoiding.' },
  { term: 'Premium', letter: 'P', means: '= what you pay', def: 'The amount you pay to keep coverage in force — monthly or annually. With term it’s level; with permanent it depends on the product.' },
  { term: 'Permanent life', letter: 'P', means: '= lifelong coverage', def: 'Insurance that never expires as long as premiums are paid, and builds cash value. Whole life and universal life are the main kinds.' },
  { term: 'Rider', letter: 'R', means: '= an optional add-on', def: 'Extra protection you attach to a policy for an added cost — child coverage or a waiver of premium, for example.' },
  { term: 'Renewable', letter: 'R', means: '= you can keep going', def: 'A term policy you can continue past its end date — usually at a higher, age-based price — without re-qualifying medically.' },
  { term: 'Surrender value', letter: 'S', means: '= cash if you cancel', def: 'The amount you’d receive if you ended a permanent policy early — the cash value, less any fees the contract sets out.' },
  { term: 'Term', letter: 'T', means: '= the fixed window', def: 'The set number of years a term policy covers you — commonly 10, 20, or 30 — during which your premium stays level.' },
  { term: 'Underwriting', letter: 'U', means: '= how they set your price', def: 'The insurer’s review of your age, health and lifestyle to decide whether to offer coverage and at what premium.' },
  { term: 'Universal life', letter: 'U', means: '= flexible permanent', def: 'A permanent policy with adjustable premiums and cash value tied to investment options — more control, and more decisions.' },
  { term: 'Whole life', letter: 'W', means: '= predictable permanent', def: 'A permanent policy with a fixed premium and a guaranteed cash-value schedule. The steady, no-surprises option.' },
  { term: 'Waiver of premium', letter: 'W', means: '= a pause if you can’t pay', def: 'A rider that keeps your coverage in force without premiums if you become disabled and can’t work.' },
]

const LETTERS = Array.from(new Set(TERMS.map((t) => t.letter)))

export default function LifeRateGlossary() {
  const [q, setQ] = useState('')

  const groups = useMemo(() => {
    const v = q.trim().toLowerCase()
    const shown = TERMS.filter((t) => !v || (t.term + ' ' + t.means + ' ' + t.def).toLowerCase().includes(v))
    return LETTERS.map((L) => ({ L, terms: shown.filter((t) => t.letter === L) })).filter((g) => g.terms.length)
  }, [q])

  return (
    <main>
      <section className="section">
        <div className="wrap">
          <div className="lr-gl-head">
            <span className="eyebrow center">Glossary</span>
            <h1>Life insurance, in plain English.</h1>
            <p className="lead">The words the industry uses — beneficiary, cash value, convertibility — translated into what they actually mean for you.</p>
          </div>
          <div className="lr-gl-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a term — e.g. “beneficiary”" autoComplete="off" aria-label="Search glossary" />
          </div>
          {!q && (
            <nav className="lr-gl-index" aria-label="Jump to letter">
              {LETTERS.map((L) => <a key={L} href={`#g-${L.toLowerCase()}`}>{L}</a>)}
            </nav>
          )}

          {groups.length === 0 && <div className="lr-gl-none">No terms match that search.</div>}
          {groups.map((g) => (
            <div className="lr-gl-group" id={`g-${g.L.toLowerCase()}`} key={g.L}>
              <div className="lr-gl-letter">{g.L}</div>
              <div className="lr-gl-grid">
                {g.terms.map((t) => (
                  <div className="lr-term" key={t.term}>
                    <h3>{t.term}</h3>
                    <span className="means">{t.means}</span>
                    <p>{t.def}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
