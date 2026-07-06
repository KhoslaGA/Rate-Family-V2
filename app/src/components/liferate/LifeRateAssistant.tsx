'use client'

/**
 * LifeRate bespoke assistant (template #8), ported from bespoke/liferate/chatbot.html.
 * LifeRate-only; rendered by /life-insurance/assistant. A scripted plain-English helper — not a
 * person, not advice, and it never quotes a binding price. It routes to the quoter / a licensed
 * advisor (KLC Group Canada Inc.) for anything real.
 */
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type Msg = { who: 'bot' | 'user'; node: React.ReactNode }
type Key = 'term-vs-perm' | 'how-much' | 'exam' | 'cost' | 'fallback'

const ANSWERS: Record<Key, React.ReactNode> = {
  'term-vs-perm': <>Term covers you for a set number of years at a lower cost; permanent covers your whole life and builds cash value. Most families start with term. The full breakdown is in our <Link href="/life-insurance/term-vs-permanent">term vs permanent guide</Link>.</>,
  'how-much': <>A common approach: replace a few years of income, clear the mortgage and debts, and fund future goals — then subtract savings. Our <Link href="/life-insurance/calculator">needs calculator</Link> does the math in about a minute.</>,
  exam: <>Not to compare rates — those are estimates from a few basics. A medical exam only comes up if you apply, and some policies offer simplified or no-exam options. An advisor can point you to those.</>,
  cost: <>For a healthy 35-year-old, $500k of 20-year term often runs around $30–40/month — but it depends on age, health, and coverage. See real numbers in the <Link href="/life-insurance/quote">quoter</Link>, no email required.</>,
  fallback: <>Good question. The clearest place to start is our <Link href="/life-insurance/guides">guides</Link>, or you can <Link href="/contact">ask a licensed advisor</Link> directly — they can speak to your situation in a way I can’t.</>,
}

const CHIPS: [string, Key][] = [
  ['Term vs permanent?', 'term-vs-perm'],
  ['How much do I need?', 'how-much'],
  ['Do I need a medical exam?', 'exam'],
  ['What does it cost?', 'cost'],
]

function classify(q: string): Key {
  const s = q.toLowerCase()
  if (/perm|whole|term/.test(s)) return 'term-vs-perm'
  if (/how much|need|coverage|amount/.test(s)) return 'how-much'
  if (/exam|medical|health/.test(s)) return 'exam'
  if (/cost|price|premium|much|\$/.test(s)) return 'cost'
  return 'fallback'
}

const Send = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
)

export default function LifeRateAssistant() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { who: 'bot', node: 'Hi! I can explain life insurance in plain terms — term vs permanent, how much you might need, how rates work. What’s on your mind?' },
  ])
  const [q, setQ] = useState('')
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [msgs])

  const ask = (text: string, key?: Key) => {
    const t = text.trim()
    if (!t) return
    const k = key ?? classify(t)
    setMsgs((m) => [...m, { who: 'user', node: t }])
    window.setTimeout(() => setMsgs((m) => [...m, { who: 'bot', node: ANSWERS[k] }]), 320)
  }

  return (
    <main>
      <section className="section">
        <div className="wrap lr-cb-wrap">
          <div className="lr-cb-head">
            <span className="eyebrow center">Ask LifeRate</span>
            <h1>Have a question? Ask it plainly.</h1>
            <p className="lead">A plain-English assistant for the common questions. It won’t quote a binding price — for real numbers it’ll point you to the quoter or a licensed advisor.</p>
          </div>

          <div className="lr-cb">
            <div className="lr-cb-bar">
              <span className="av"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
              <div><b>LifeRate Assistant</b><span>Plain-English · not financial advice</span></div>
            </div>
            <div className="lr-cb-log" ref={logRef}>
              {msgs.map((m, i) => (
                <div className={`lr-msg ${m.who}`} key={i}>{m.node}</div>
              ))}
            </div>
            <div className="lr-cb-chips">
              {CHIPS.map(([label, key]) => (
                <button className="lr-cb-chip" key={key} type="button" onClick={() => ask(label, key)}>{label}</button>
              ))}
            </div>
            <form className="lr-cb-input" onSubmit={(e) => { e.preventDefault(); ask(q); setQ('') }}>
              <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type your question…" autoComplete="off" aria-label="Your question" />
              <button type="submit" aria-label="Send"><Send /></button>
            </form>
          </div>
          <p className="lr-cb-note">This assistant gives general information, not a recommendation. Coverage is arranged by KLC Group Canada Inc. See our <Link href="/terms" style={{ color: 'var(--accent-ink)' }}>terms</Link>.</p>
        </div>
      </section>
    </main>
  )
}
