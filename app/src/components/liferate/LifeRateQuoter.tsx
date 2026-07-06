'use client'

/**
 * LifeRate bespoke live quoter — v2, wired to the mock API.
 *
 * Changes from v1 (synchronous demo):
 *   - Rates come from POST /api/mock/quote/results (deterministic seeded
 *     engine, scenario-switchable) — async, with skeleton loading, an error
 *     state with retry, an honest empty state, and declines RENDERED, never
 *     hidden.
 *   - New step 4: advisor handoff. Collects name/email/phone/province/
 *     preferred-contact/best-time + CASL consent and POSTs to
 *     /api/mock/quote/lead — whose validation is a 1:1 mirror of the real
 *     /api/life-referral, so going live is a one-line URL change.
 *     Success shows a reference number; the tracker freezes after submit.
 *   - QUOTER-CONTRACT events wired both directions: fires `rates:lead`
 *     outbound on every advisor CTA; listens for `rates:setcoverage`
 *     inbound (the landing form prefill promised in the contract).
 *
 * NUMBERS ARE ILLUSTRATIVE — every payload carries mock:true. Production
 * swaps the two fetch URLs; shapes are identical per QUOTER-CONTRACT.md.
 */
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { quoteLife as apiQuoteLife, submitLead as apiSubmitLead, ApiError } from '@/lib/api/client'
import type { LifeTerm, LeadRequest } from '@ratefamily/contracts'

type LeadContactTime = NonNullable<LeadRequest['contactTime']>

// The quoter now talks to the backend through the client seam
// (@/lib/api/client), which enforces the mock:true guard and carries the
// tenant header. Swap-to-live is a NEXT_PUBLIC_API_BASE change — no code
// here moves. The old in-Next /api/mock/quote/* routes remain as a
// standalone fallback but are no longer the primary path.

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

const COV = [
  { v: 250000, label: '$250k', tag: 'starter' },
  { v: 500000, label: '$500k', tag: 'common' },
  { v: 750000, label: '$750k', tag: '' },
  { v: 1000000, label: '$1M', tag: 'higher income' },
  { v: 1500000, label: '$1.5M', tag: '' },
  { v: 2000000, label: '$2M', tag: 'max common' },
]

const TERMS = [
  { v: '10', label: 'Term — 10 years' },
  { v: '20', label: 'Term — 20 years' },
  { v: '30', label: 'Term — 30 years' },
  { v: 'perm', label: 'Permanent (whole life)' },
]

const PROVINCES = ['ON', 'QC', 'BC', 'AB', 'MB', 'SK', 'NS', 'NB', 'NL', 'PE']

const CONTACT_TIMES: [string, string][] = [
  ['weekday_mornings', 'Weekday mornings'],
  ['weekday_afternoons', 'Weekday afternoons'],
  ['weekday_evenings', 'Weekday evenings'],
  ['weekends', 'Weekends'],
]

/** The wording shown IS the wording the real referral route stores. */
const CONSENT_TEXT = `I consent to KLC Group Canada Inc. (an FSRA-licensed Ontario life insurance advisory firm) and Webhub4u Inc. (operator of TopRates.ca) contacting me about the insurance products I've expressed interest in. I understand I can withdraw consent at any time. See the privacy policy for details.`

const money = (n: number) => '$' + (n < 100 ? n.toFixed(2) : Math.round(n).toLocaleString())
const covLabel = (n: number) => (n >= 1000000 ? '$' + n / 1000000 + 'M' : '$' + n / 1000 + 'k')

interface QuoteRow {
  carrier: string
  product?: string
  monthly?: number
  declined: boolean
  reason?: string
  highlights?: string[]
}
interface ResultsPayload {
  ok: boolean
  quotes: QuoteRow[]
  best: QuoteRow | null
  summary: { count: number }
}

type ResultsState =
  | { phase: 'idle' }
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'done'; data: ResultsPayload }

export default function LifeRateQuoter() {
  const [step, setStep] = useState(1)
  const [coverage, setCoverage] = useState(500000)
  const [age, setAge] = useState(35)
  const [female, setFemale] = useState(true)
  const [smoker, setSmoker] = useState(false)
  const [term, setTerm] = useState('20')

  const [results, setResults] = useState<ResultsState>({ phase: 'idle' })
  const [shown, setShown] = useState(0) // progressive reveal count
  const revealTimers = useRef<ReturnType<typeof setTimeout>[]>([])

  // handoff state
  const [handoffQuote, setHandoffQuote] = useState<QuoteRow | null | undefined>(undefined) // undefined = not in handoff
  const [lead, setLead] = useState<Record<string, string | boolean>>({ preferredContact: 'phone' })
  const [leadErr, setLeadErr] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const [reference, setReference] = useState<string | null>(null)

  const snapCoverage = useCallback((want: number) => {
    if (!want) return
    let best = COV[0].v
    let diff = Infinity
    COV.forEach((c) => {
      const d = Math.abs(c.v - want)
      if (d < diff) { diff = d; best = c.v }
    })
    setCoverage(best)
  }, [])

  // ?coverage= prefill from the calculator / gap-picker
  useEffect(() => {
    snapCoverage(Number(new URLSearchParams(window.location.search).get('coverage')))
  }, [snapCoverage])

  // QUOTER-CONTRACT inbound: the Life-landing inline form fires
  // `rates:setcoverage` with { amount } (and may carry more LifeState fields).
  useEffect(() => {
    const onSet = (e: Event) => {
      const d = (e as CustomEvent).detail || {}
      if (typeof d.amount === 'number') snapCoverage(d.amount)
      if (typeof d.age === 'number') setAge(Math.max(18, Math.min(80, d.age)))
      if (typeof d.female === 'boolean') setFemale(d.female)
      if (typeof d.smoker === 'boolean') setSmoker(d.smoker)
      setStep(1)
    }
    window.addEventListener('rates:setcoverage', onSet)
    return () => window.removeEventListener('rates:setcoverage', onSet)
  }, [snapCoverage])

  // QUOTER-CONTRACT outbound: every advisor CTA fires rates:lead
  const fireLeadEvent = (q: QuoteRow | null, mode?: 'advisor') => {
    window.dispatchEvent(new CustomEvent('rates:lead', {
      detail: {
        carrier: q?.carrier,
        product: q?.product,
        monthly: q?.monthly,
        coverage,
        vertical: 'life',
        ...(mode ? { mode } : {}),
      },
    }))
  }

  const clearReveal = () => {
    revealTimers.current.forEach(clearTimeout)
    revealTimers.current = []
  }

  const fetchResults = useCallback(async () => {
    clearReveal()
    setShown(0)
    setResults({ phase: 'loading' })
    try {
      const data = (await apiQuoteLife({
        coverage, age, female, smoker, term: term as LifeTerm,
      })) as unknown as ResultsPayload
      setResults({ phase: 'done', data })
      // progressive reveal — offers appear one at a time, declines after
      data.quotes.forEach((_, i) => {
        revealTimers.current.push(setTimeout(() => setShown((n) => Math.max(n, i + 1)), i * 240))
      })
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message
        : err instanceof Error ? err.message
        : 'Something went wrong fetching rates.'
      setResults({ phase: 'error', message })
    }
  }, [coverage, age, female, smoker, term])

  useEffect(() => clearReveal, [])

  const goto = (s: number) => {
    if (reference) return // frozen after a submitted handoff
    setStep(s)
    if (s === 3) fetchResults()
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const startHandoff = (q: QuoteRow | null) => {
    fireLeadEvent(q, q ? undefined : 'advisor')
    setHandoffQuote(q)
    setLeadErr(null)
    setStep(4)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function submitLead() {
    setLeadErr(null)
    if (lead.consented !== true) { setLeadErr('We need your consent to connect you with an advisor.'); return }
    setSending(true)
    try {
      const b = await apiSubmitLead({
        vertical: 'life',
        name: String(lead.name ?? ''),
        email: String(lead.email ?? ''),
        province: String(lead.province ?? ''),
        phone: lead.phone ? String(lead.phone) : undefined,
        preferredContact: (lead.preferredContact as 'email' | 'phone') ?? 'email',
        contactTime: (lead.contactTime as LeadContactTime) || undefined,
        consented: lead.consented === true,
        consentText: CONSENT_TEXT,
        quoteContext: {
          carrier: handoffQuote?.carrier ?? null,
          product: handoffQuote?.product ?? null,
          monthly: handoffQuote?.monthly ?? null,
          coverage,
        },
      })
      if (!b.ok) { setLeadErr(b.error || 'That didn’t go through — try again.'); setSending(false); return }
      setReference(b.reference || null)
      setSending(false)
    } catch (err) {
      setLeadErr(err instanceof ApiError ? err.message : 'That didn’t go through — check your connection and try again.')
      setSending(false)
    }
  }

  const termTxt = term === 'perm' ? 'permanent' : `${term}-year term`
  const up = (k: string, v: string | boolean) => setLead((o) => ({ ...o, [k]: v }))

  const offers = results.phase === 'done' ? results.data.quotes.filter((q) => !q.declined) : []
  const declines = results.phase === 'done' ? results.data.quotes.filter((q) => q.declined) : []
  const best = offers[0]

  const STEP_LABELS: [string, string][] = [['1', 'Coverage'], ['2', 'About you'], ['3', 'Your rate'], ['4', 'Advisor']]

  return (
    <main>
      <section className="section">
        <div className="wrap lr-q-wrap">
          <div className="lr-q-head">
            <span className="eyebrow center">Live rate comparison</span>
            <h1>Let’s find your rate — one question at a time.</h1>
            <p className="lead">No account, no email wall. We’ll compare 21 Canadian insurers on illustrative rates, and only connect you to a licensed advisor if you ask.</p>
          </div>

          <div className="lr-q-steps" aria-hidden="true">
            {STEP_LABELS.map(([n, lbl], i) => {
              const s = i + 1
              return (
                <span key={n} style={{ display: 'contents' }}>
                  {i > 0 && <span className="lr-q-line" />}
                  <span className={`lr-q-dot${step === s ? ' active' : step > s ? ' done' : ''}`}><span className="n">{n}</span><span className="lbl">{lbl}</span></span>
                </span>
              )
            })}
          </div>

          <div className="lr-q-card">
            {/* STEP 1 — coverage */}
            <div className={`lr-q-step${step === 1 ? ' on' : ''}`}>
              <div className="lr-q-q">How much should we protect?</div>
              <p className="lr-q-help">A rough figure is fine — you can fine-tune later. Most families land between $250k and $1M.</p>
              <div className="lr-q-chips">
                {COV.map((c) => (
                  <div key={c.v} className={`lr-q-chip${coverage === c.v ? ' sel' : ''}`} onClick={() => setCoverage(c.v)}>
                    {c.label}<small>{c.tag}</small>
                  </div>
                ))}
              </div>
              <p className="lr-q-needlink">Not sure? <Link href="/life-insurance/calculator">Use the needs calculator →</Link></p>
              <div className="lr-q-nav">
                <span className="spacer" />
                <button className="btn btn-accent btn-lg" onClick={() => goto(2)}>Continue <Arrow /></button>
              </div>
            </div>

            {/* STEP 2 — about you */}
            <div className={`lr-q-step${step === 2 ? ' on' : ''}`}>
              <div className="lr-q-q">A few basics about you.</div>
              <p className="lr-q-help">Just what the insurers need to price a rate. Nothing identifying, no exam.</p>
              <div className="lr-q-fields">
                <div className="lr-q-field">
                  <label htmlFor="q-age">Age</label>
                  <input id="q-age" type="number" min={18} max={80} value={age} inputMode="numeric" onChange={(e) => setAge(Math.max(18, Math.min(80, Number(e.target.value) || 35)))} />
                </div>
                <div className="lr-q-field">
                  <label>Sex</label>
                  <div className="lr-seg">
                    <button className={female ? 'sel' : ''} onClick={() => setFemale(true)}>Female</button>
                    <button className={!female ? 'sel' : ''} onClick={() => setFemale(false)}>Male</button>
                  </div>
                </div>
                <div className="lr-q-field">
                  <label>Smoked in the last 12 months?</label>
                  <div className="lr-seg">
                    <button className={!smoker ? 'sel' : ''} onClick={() => setSmoker(false)}>No</button>
                    <button className={smoker ? 'sel' : ''} onClick={() => setSmoker(true)}>Yes</button>
                  </div>
                </div>
                <div className="lr-q-field">
                  <label htmlFor="q-term">Coverage length</label>
                  <select id="q-term" value={term} onChange={(e) => setTerm(e.target.value)}>
                    {TERMS.map((t) => <option key={t.v} value={t.v}>{t.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="lr-q-nav">
                <button className="btn btn-ghost btn-lg" onClick={() => goto(1)}>Back</button>
                <span className="spacer" />
                <button className="btn btn-accent btn-lg" onClick={() => goto(3)}>See my rate <Arrow /></button>
              </div>
            </div>

            {/* STEP 3 — results (async: skeleton → reveal → declines · error · empty) */}
            <div className={`lr-q-step${step === 3 ? ' on' : ''}`}>
              {results.phase === 'loading' && (
                <div>
                  <div className="lr-res-top">
                    <div className="est">Checking 21 Canadian insurers…</div>
                    <div className="lr-q-skel lr-q-skel--big" />
                    <div className="who">{covLabel(coverage)} · {termTxt} · age {age}, {smoker ? 'smoker' : 'non-smoker'}</div>
                  </div>
                  <div className="lr-res-list">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="lr-res lr-res--skel">
                        <span className="lr-q-skel" style={{ width: 30, height: 30, borderRadius: '50%' }} />
                        <span style={{ flex: 1 }}><span className="lr-q-skel" style={{ width: '46%', height: 14 }} /></span>
                        <span className="lr-q-skel" style={{ width: 74, height: 20 }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.phase === 'error' && (
                <div className="lr-q-err" role="alert">
                  <div className="lr-q-q" style={{ fontSize: '1.3rem' }}>That didn’t go through.</div>
                  <p className="lr-q-help">{results.message} Your answers are saved on this page — nothing to re-enter.</p>
                  <div className="lr-q-nav">
                    <button className="btn btn-ghost btn-lg" onClick={() => goto(2)}>Adjust details</button>
                    <span className="spacer" />
                    <button className="btn btn-accent btn-lg" onClick={fetchResults}>Try again <Arrow /></button>
                  </div>
                </div>
              )}

              {results.phase === 'done' && offers.length === 0 && (
                <div className="lr-q-err">
                  <div className="lr-q-q" style={{ fontSize: '1.3rem' }}>No insurer priced this automatically.</div>
                  <p className="lr-q-help">That’s not a no — profiles like this are usually placed by a licensed advisor working directly with carriers. The call is free and unhurried.</p>
                  <div className="lr-q-nav">
                    <button className="btn btn-ghost btn-lg" onClick={() => goto(2)}>Adjust details</button>
                    <span className="spacer" />
                    <button className="btn btn-accent btn-lg" onClick={() => startHandoff(null)}>Book a free advisor call <Arrow /></button>
                  </div>
                </div>
              )}

              {results.phase === 'done' && best && (
                <div>
                  <div className="lr-res-top">
                    <div className="est">Best of {offers.length} insurers that quoted — illustrative</div>
                    <div className="big">{money(best.monthly!)}<span>/mo</span></div>
                    <div className="who">{covLabel(coverage)} · {termTxt} · age {age}, {smoker ? 'smoker' : 'non-smoker'}</div>
                  </div>
                  <div className="lr-res-list">
                    {offers.slice(0, 6).map((q, i) => (
                      <div key={q.carrier} className={`lr-res${i === 0 ? ' best' : ''}`} style={{ opacity: i < shown ? 1 : 0, transition: 'opacity .3s' }}>
                        <span className="rank">{i + 1}</span>
                        <span className="co"><b>{q.carrier}</b><small>{q.product}</small></span>
                        {i === 0 && <span className="badge">Lowest for you</span>}
                        <span className="mo">{money(q.monthly!)}<span>/mo</span></span>
                      </div>
                    ))}
                    {declines.map((q) => (
                      <div key={q.carrier} className="lr-res lr-res--declined">
                        <span className="co"><b>{q.carrier}</b><small>No offer for this profile</small></span>
                        <span className="lr-res-reason">{q.reason}</span>
                      </div>
                    ))}
                  </div>
                  <div className="lr-res-cta">
                    <button className="btn btn-accent btn-lg" onClick={() => startHandoff(best)}>Apply with an advisor <Arrow /></button>
                    <button className="btn btn-ghost btn-lg" onClick={() => startHandoff(null)}>Book a free call</button>
                  </div>
                  <p className="lr-res-src">Illustrative estimates · final price set by the insurer after underwriting · KLC Group Canada Inc. arranges coverage</p>
                  <div className="lr-q-nav">
                    <button className="btn btn-ghost" onClick={() => goto(2)}>Adjust details</button>
                  </div>
                </div>
              )}
            </div>

            {/* STEP 4 — advisor handoff (contact capture → reference) */}
            <div className={`lr-q-step${step === 4 ? ' on' : ''}`}>
              {reference ? (
                <div className="lr-res-top">
                  <div className="est">Request received</div>
                  <div className="big" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>Ref {reference}</div>
                  <p className="lr-q-help" style={{ maxWidth: '48ch', marginInline: 'auto' }}>
                    A licensed KLC advisor will {lead.preferredContact === 'phone' ? 'call' : 'email'} you within one business day
                    {handoffQuote ? ` about the ${handoffQuote.carrier} quote` : ''}. The health questionnaire and any medical details
                    happen there — at your pace, and nothing is bound until you say so. Keep the reference number for your records.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="lr-q-q">Where should the advisor reach you?</div>
                  <p className="lr-q-help">
                    {handoffQuote
                      ? `You picked ${handoffQuote.carrier} at ${money(handoffQuote.monthly!)}/mo — a licensed KLC advisor confirms eligibility and the final rate.`
                      : 'A licensed KLC advisor will walk through your options — free, no obligation.'}
                  </p>
                  <div className="lr-q-fields">
                    <div className="lr-q-field">
                      <label htmlFor="l-name">Full name</label>
                      <input id="l-name" value={(lead.name as string) || ''} onChange={(e) => up('name', e.target.value)} autoComplete="name" />
                    </div>
                    <div className="lr-q-field">
                      <label htmlFor="l-email">Email</label>
                      <input id="l-email" type="email" value={(lead.email as string) || ''} onChange={(e) => up('email', e.target.value)} autoComplete="email" />
                    </div>
                    <div className="lr-q-field">
                      <label htmlFor="l-phone">Phone {lead.preferredContact === 'phone' ? '' : '(optional)'}</label>
                      <input id="l-phone" type="tel" value={(lead.phone as string) || ''} onChange={(e) => up('phone', e.target.value)} autoComplete="tel" placeholder="(416) 555-0100" />
                    </div>
                    <div className="lr-q-field">
                      <label htmlFor="l-prov">Province</label>
                      <select id="l-prov" value={(lead.province as string) || ''} onChange={(e) => up('province', e.target.value)}>
                        <option value="" disabled>Choose…</option>
                        {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div className="lr-q-field">
                      <label>Reach me by</label>
                      <div className="lr-seg">
                        <button className={lead.preferredContact === 'phone' ? 'sel' : ''} onClick={() => up('preferredContact', 'phone')}>Phone</button>
                        <button className={lead.preferredContact === 'email' ? 'sel' : ''} onClick={() => up('preferredContact', 'email')}>Email</button>
                      </div>
                    </div>
                    <div className="lr-q-field">
                      <label htmlFor="l-time">Best time</label>
                      <select id="l-time" value={(lead.contactTime as string) || ''} onChange={(e) => up('contactTime', e.target.value)}>
                        <option value="">No preference</option>
                        {CONTACT_TIMES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                      </select>
                    </div>
                    <div className="lr-q-field full">
                      <label className="lr-q-consent">
                        <input type="checkbox" checked={lead.consented === true} onChange={(e) => up('consented', e.target.checked)} />
                        <span>{CONSENT_TEXT}</span>
                      </label>
                    </div>
                  </div>
                  {leadErr && <p className="lr-q-err-msg" role="alert">{leadErr}</p>}
                  <div className="lr-q-nav">
                    <button className="btn btn-ghost btn-lg" onClick={() => { setStep(3); }}>Back to rates</button>
                    <span className="spacer" />
                    <button className="btn btn-accent btn-lg" disabled={sending} onClick={submitLead}>
                      {sending ? 'Sending…' : 'Request my advisor call'} {!sending && <Arrow />}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="lr-res-src" style={{ marginTop: 22 }}>Comparing rates is always free. Premiums are set by the insurer and filed with the regulator — the same whether you come through LifeRate or go direct.</p>
        </div>
      </section>
    </main>
  )
}
