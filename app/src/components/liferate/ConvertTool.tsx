'use client'

/**
 * LifeRate bespoke term-to-permanent conversion tool (template #21), ported from
 * bespoke/liferate/convert-tool.html. LifeRate-only; rendered by /life-insurance/convert.
 * Educational guide, not advice — conversion terms vary by policy; the verdict is a plain read,
 * and the CTA routes to a licensed advisor (/contact).
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const ProIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
)
const ConIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
)

type Win = 'yes' | 'unsure' | 'no'
type Need = 'short' | 'long' | 'forever'
type Health = 'worse' | 'same'
type Budget = 'yes' | 'tight'
type Factor = { kind: 'pro' | 'con'; head: string; body: string }

const Seg = <T extends string>({ options, value, onChange }: { options: [T, string][]; value: T; onChange: (v: T) => void }) => (
  <div className="lr-seg">
    {options.map(([v, label]) => (
      <button key={v} className={value === v ? 'sel' : ''} type="button" onClick={() => onChange(v)}>{label}</button>
    ))}
  </div>
)

export default function ConvertTool() {
  const [win, setWin] = useState<Win>('yes')
  const [need, setNeed] = useState<Need>('long')
  const [health, setHealth] = useState<Health>('worse')
  const [budget, setBudget] = useState<Budget>('yes')

  const { verdict, explain, factors } = useMemo(() => {
    let score = 0
    const f: Factor[] = []
    if (win === 'no') { f.push({ kind: 'con', head: 'Conversion window closed', body: 'Most policies only allow conversion within a set period — if it’s expired, a new application (and medical) may be needed.' }); score -= 3 }
    else if (win === 'unsure') { f.push({ kind: 'pro', head: 'Check your window first', body: 'Conversion is only possible while the privilege is open — worth confirming the exact date on your policy.' }); score += 1 }
    else { f.push({ kind: 'pro', head: 'You’re still in the window', body: 'You can convert without new medical underwriting — the core advantage.' }); score += 1 }

    if (need === 'short') { f.push({ kind: 'con', head: 'Short remaining need', body: 'If you only need a few more years, keeping term (or renewing) is usually cheaper than permanent.' }); score -= 2 }
    else { f.push({ kind: 'pro', head: 'Long or lifelong need', body: 'Permanent earns its cost when the need genuinely doesn’t end.' }); score += 2 }

    if (health === 'worse') { f.push({ kind: 'pro', head: 'Health has changed', body: 'Converting skips new underwriting — valuable if you’d now be rated or declined on a fresh application.' }); score += 2 }
    else f.push({ kind: 'con', head: 'Health unchanged', body: 'If you’re still healthy, a fresh permanent policy or a new term might price competitively — worth comparing.' })

    if (budget === 'tight') { f.push({ kind: 'con', head: 'Budget would be tight', body: 'Permanent premiums are materially higher; converting only part of the coverage is one option to discuss.' }); score -= 1 }
    else f.push({ kind: 'pro', head: 'Budget can absorb it', body: 'The higher permanent premium is manageable for you.' })

    let v: string, ex: string
    if (score >= 3) { v = 'Converting looks worth exploring'; ex = 'Your answers point toward conversion being a strong fit. Confirm the specifics with an advisor.' }
    else if (score >= 0) { v = 'It could go either way'; ex = 'There are real points on both sides — this is exactly the kind of call worth an advisor’s read of your actual policy.' }
    else { v = 'Converting may not be the best move'; ex = 'Your answers lean away from conversion. An advisor can confirm and lay out the alternatives.' }
    return { verdict: v, explain: ex, factors: f }
  }, [win, need, health, budget])

  return (
    <main>
      <section className="section">
        <div className="wrap lr-cv-wrap">
          <div className="lr-cv-head">
            <span className="eyebrow center">Conversion tool</span>
            <h1>Should you convert your term policy to permanent?</h1>
            <p className="lead">If your term policy has a conversion privilege, you can switch to permanent without a new medical — but it’s not always the right move. Answer four questions for a plain read.</p>
          </div>

          <div className="lr-cv-grid">
            <form className="lr-cv-form" onSubmit={(e) => e.preventDefault()} aria-label="Conversion inputs">
              <div className="lr-cv-f">
                <label>Are you still inside your conversion window?</label>
                <Seg<Win> options={[['yes', 'Yes'], ['unsure', 'Not sure'], ['no', 'No / expired']]} value={win} onChange={setWin} />
              </div>
              <div className="lr-cv-f">
                <label htmlFor="cv-need">How long will you still need coverage?</label>
                <select id="cv-need" value={need} onChange={(e) => setNeed(e.target.value as Need)}>
                  <option value="short">A few more years</option>
                  <option value="long">Decades / lifelong</option>
                  <option value="forever">A lifelong dependant or estate goal</option>
                </select>
              </div>
              <div className="lr-cv-f">
                <label>Has your health changed since you bought the term?</label>
                <Seg<Health> options={[['worse', 'Worse'], ['same', 'About the same']]} value={health} onChange={setHealth} />
              </div>
              <div className="lr-cv-f">
                <label>Can your budget absorb a higher premium?</label>
                <Seg<Budget> options={[['yes', 'Yes'], ['tight', 'It’d be tight']]} value={budget} onChange={setBudget} />
              </div>
            </form>

            <div className="lr-cv-out">
              <div className="lr-cv-verdict">
                <span className="eyebrow">Your read</span>
                <div className="v">{verdict}</div>
                <p>{explain}</p>
              </div>
              <div className="lr-cv-factors">
                {factors.map((f, i) => (
                  <div className={`lr-cv-factor ${f.kind}`} key={i}>
                    {f.kind === 'pro' ? <ProIcon /> : <ConIcon />}
                    <div><b>{f.head}</b> <span>{f.body}</span></div>
                  </div>
                ))}
              </div>
              <Link className="btn btn-accent btn-lg" href="/contact">Talk it through with an advisor <Arrow /></Link>
            </div>
          </div>
          <p className="lr-tbl-note" style={{ marginTop: 20 }}>This is an educational guide, not advice. Conversion terms vary by policy — an advisor can read yours and confirm what’s possible.</p>
        </div>
      </section>
    </main>
  )
}
