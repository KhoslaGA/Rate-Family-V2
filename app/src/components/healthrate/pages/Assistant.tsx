'use client'

/**
 * Education assistant — ported from chatbot.html. A scripted plain-English helper
 * for the basics; never advice, never a price, never asks for personal details.
 */
import { useRef, useState } from 'react'
import { Bo, Button, Card } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

type Msg = { who: 'bot' | 'user'; text: string }
const KB: { k: string[]; a: string }[] = [
  { k: ['super visa', 'supervisa', 'parents', 'grandparent'], a: 'Super Visa insurance must offer at least $100,000 of emergency medical coverage, be valid one year from entry, and cover health care, hospitalization and repatriation — from a Canadian insurer or an IRCC-approved foreign one. Start with the landing page, then the full guide.' },
  { k: ['ohip', 'wait', 'waiting period', 'health card'], a: 'Provincial coverage does not always start on landing day — Ontario historically applied a wait of up to 3 months, and rules have shifted since 2020. Confirm your start date with ServiceOntario, and use our OHIP wait planner to see the gap a classic wait would create.' },
  { k: ['deductible'], a: 'A deductible is what you pay yourself on a claim before the insurer pays the rest. Higher deductible, lower premium — and a bigger out-of-pocket hit on a bad day. The pricing explainer shows how it interacts with the other levers.' },
  { k: ['stability', 'pre-existing', 'preexisting', 'condition'], a: 'Most visitor policies cover a pre-existing condition only if it has been stable — same treatment, same dose, no new symptoms — for a set period, often 90 or 180 days. This clause decides more claims than any other. Read it before comparing prices.' },
  { k: ['price', 'cost', 'how much', 'quote', 'premium'], a: 'HealthRate never quotes prices — we are education only. What we can do is show you the five levers that move visitor-insurance pricing (age, amount, deductible, stability, term) in the pricing explainer, so a real quote makes sense when you get one.' },
  { k: ['refund', 'refused', 'cancel'], a: 'Policies bought for a Super Visa application are normally refundable if the visa is refused (show the refusal letter; an admin fee may apply), and often partially refundable if the visitor leaves early with no claims. The exact rules live in the policy wording — the checklist points you to them.' },
  { k: ['travel', 'visitor', 'emergency'], a: 'Visitor and travel policies cover emergencies: sudden illness or injury, emergency hospital care, and repatriation. They exclude routine checkups and planned treatment. The travel page has the covered/excluded lists side by side.' },
  { k: ['language', 'french', 'punjabi', 'hindi', 'urdu', 'translate'], a: 'The site chrome and key notices ship in English, French, Punjabi, Hindi and Urdu; full guide translations are rolling out, Super Visa first. The languages page tracks the real status — no pretend buttons.' },
  { k: ['who are you', 'about', 'sell', 'broker'], a: 'HealthRate is an education site operated by Webhub4u Inc. — not a broker, and nothing here sells or arranges insurance. When you are ready to buy, you deal with insurers or licensed professionals directly, better prepared.' },
]
const FALLBACK = 'I cover the basics: Super Visa rules, waiting periods, deductibles, stability clauses, refunds and travel cover. Try one of the chips below — or for anything specific to your family, the FAQ and guides go deeper. I never give advice or prices.'
const CHIPS = ['Super Visa rules', 'OHIP waiting period', 'What is a deductible?', 'Stability clause', 'Do you sell insurance?']
function answer(q: string) {
  const s = q.toLowerCase()
  for (const e of KB) if (e.k.some((k) => s.includes(k))) return e.a
  return FALLBACK
}

export default function Assistant() {
  const [msgs, setMsgs] = useState<Msg[]>([{ who: 'bot', text: 'Hello! I answer the basics about Super Visa, newcomer and travel coverage — in plain English, education only. What would you like to understand?' }])
  const [q, setQ] = useState('')
  const logRef = useRef<HTMLDivElement>(null)
  const ask = (text: string) => {
    if (!text.trim()) return
    setMsgs((m) => [...m, { who: 'user', text }])
    setTimeout(() => {
      setMsgs((m) => [...m, { who: 'bot', text: answer(text) }])
      setTimeout(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight }, 60)
    }, 500)
  }

  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Assistant', null]]}
        eyebrow="Education assistant"
        title="Instant answers to "
        em="the basics"
        tail="."
        lead="Quick, plain-English explanations of the concepts. For anything about your specific family, read the full guides — and know that nothing here is advice, a quote, or a sales conversation."
      />
      <section style={{ padding: '48px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <Card style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: '1px solid var(--border)', background: 'var(--surface-sunk)' }}>
              <Bo pose="idle" size={40} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'var(--navy)' }}>HealthRate assistant</div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Education only · answers the basics</div>
              </div>
            </div>
            <div ref={logRef} style={{ height: 360, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--cream)' }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ maxWidth: '82%', padding: '12px 15px', borderRadius: 14, fontSize: 14.5, lineHeight: 1.55, alignSelf: m.who === 'user' ? 'flex-end' : 'flex-start', background: m.who === 'user' ? 'var(--accent)' : 'var(--white)', color: m.who === 'user' ? 'var(--accent-on)' : 'var(--ink)', border: m.who === 'user' ? 'none' : '1px solid var(--border-soft)', borderBottomRightRadius: m.who === 'user' ? 4 : 14, borderBottomLeftRadius: m.who === 'user' ? 14 : 4 }}>{m.text}</div>
              ))}
            </div>
            <div style={{ padding: '12px 16px 4px', display: 'flex', gap: 8, flexWrap: 'wrap', borderTop: '1px solid var(--border)' }}>
              {CHIPS.map((c) => (
                <button key={c} type="button" onClick={() => ask(c)} style={{ padding: '7px 13px', borderRadius: 999, border: '1px solid var(--border-strong)', background: 'var(--white)', color: 'var(--ink-muted)', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, cursor: 'pointer' }}>{c}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, padding: 16 }}>
              <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { ask(q); setQ('') } }} placeholder="Type a question…"
                style={{ flex: 1, padding: '12px 16px', borderRadius: 999, border: '1px solid var(--border-strong)', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--ink)', outline: 'none', background: 'var(--white)' }} />
              <Button onClick={() => { ask(q); setQ('') }}>Send</Button>
            </div>
          </Card>
          <p style={{ fontSize: 12, fontStyle: 'italic', color: 'var(--ink-muted)', textAlign: 'center', margin: '16px 0 0', lineHeight: 1.6 }}>
            A scripted education helper, not a person and not advice. It never quotes prices and never asks for personal details.
          </p>
          <div style={{ marginTop: 18 }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
