'use client'

/**
 * TermRates assistant, ported from chatbot.html. A scripted plain-English helper
 * for mortgage basics — general information only, not advice or an offer of credit.
 * Anything file-specific routes to a licensed broker.
 */
import Link from 'next/link'
import { useRef, useState } from 'react'

type Msg = { who: 'bot' | 'user'; text: string }
const KB: { k: string[]; a: string }[] = [
  { k: ['fixed', 'variable'], a: 'A <b>fixed</b> rate is locked for your whole term — your payment never moves. A <b>variable</b> rate follows your lender’s prime and is usually lower to start, but can rise or fall. Fixed buys certainty; variable takes on risk for a usually-lower starting rate. Our <a href="/mortgages/fixed-vs-variable">fixed-vs-variable guide</a> runs the break-even math.' },
  { k: ['stress test', 'qualify', 'qualifying rate'], a: 'The <b>stress test</b> requires lenders to qualify you at the higher of your rate + 2% or 5.25%. It checks you could still handle payments if rates rose. Our <a href="/mortgages/affordability">affordability tool</a> shows what you’d qualify for under it.' },
  { k: ['insured', 'uninsured', 'high ratio', 'high-ratio', 'default insurance', 'cmhc'], a: '<b>Insured</b> (high-ratio) mortgages have under 20% down and carry default insurance — usually a lower rate. <b>Uninsured</b> (conventional) mortgages have 20%+ down. The <a href="/rates">rate table</a> lets you filter to your case.' },
  { k: ['penalty', 'break', 'ird', 'prepayment'], a: 'Breaking a mortgage early triggers a penalty — usually the greater of three months’ interest or an interest-rate differential (IRD). On fixed mortgages the IRD can be large; variable penalties are typically just three months’ interest. A broker can pull your exact figure.' },
  { k: ['down payment', 'down', 'deposit'], a: 'In Canada the minimum is <b>5%</b> on the first $500,000 and <b>10%</b> on the portion above, up to $1.5M; 20%+ avoids default insurance. Our <a href="/mortgages/affordability">affordability tool</a> shows the minimum for your price.' },
  { k: ['refinance', 'heloc', 'equity'], a: 'A <b>refinance</b> replaces your mortgage — often to lower the rate or pull equity — and may trigger a break penalty. A <b>HELOC</b> is a revolving line against your equity at a floating rate. See our <a href="/mortgages/refinance">refinance &amp; HELOC page</a>.' },
  { k: ['renew', 'renewal', 'switch'], a: 'At <b>renewal</b> you can stay with your lender or switch — a straight switch usually has no penalty, just discharge/legal fees. Renewal offers are rarely the sharpest rate, so it pays to compare. Try the <a href="/mortgages/renewal">renewal tool</a>.' },
  { k: ['amortization', 'term'], a: '<b>Amortization</b> is the total time to pay off the mortgage (often 25 years). The <b>term</b> is your current contract length (e.g. 5 years), after which you renew. Longer amortization lowers the payment but raises total interest.' },
  { k: ['rate', 'rates', 'today', 'current'], a: 'You can see live featured rates on our <a href="/rates">rate table</a>, filterable by term, type and insurance. For a rate matched to your exact scenario, use the <a href="/mortgages/quote">quoter</a> — no email needed to compare.' },
]
const FALLBACK = 'I can cover the basics — fixed vs variable, the stress test, penalties, down payment, refinancing and renewals. For anything specific to your file, a <a href="/mortgages/quote">licensed broker</a> is the right call. What else can I explain?'
const CHIPS = ['Fixed or variable?', 'What’s the stress test?', 'Insured vs uninsured?', 'Penalty to break early?', 'How much down do I need?']

export default function TermRatesAssistant() {
  const [msgs, setMsgs] = useState<Msg[]>([{ who: 'bot', text: 'Hi — I can explain the mortgage basics in plain terms. What would you like to know?' }])
  const [q, setQ] = useState('')
  const logRef = useRef<HTMLDivElement>(null)

  const answer = (text: string) => {
    const s = text.toLowerCase()
    for (const e of KB) if (e.k.some((k) => s.includes(k))) return e.a
    return FALLBACK
  }
  const ask = (text: string) => {
    if (!text.trim()) return
    setMsgs((m) => [...m, { who: 'user', text }])
    setTimeout(() => {
      setMsgs((m) => [...m, { who: 'bot', text: answer(text) }])
      setTimeout(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight }, 40)
    }, 500)
  }

  return (
    <main>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><span>Assistant</span></div>
          <h1>Quick mortgage answers.</h1>
          <p className="lead">Ask the basics &mdash; fixed vs variable, the stress test, penalties, insured vs uninsured. For anything specific to your file, we&apos;ll point you to a licensed broker.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ maxWidth: 820, marginInline: 'auto' }}>
          <div className="tr-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 'min(70vh,640px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid var(--line)', background: 'var(--panel-2)' }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--r-sm)', background: 'linear-gradient(160deg,var(--brand-500),var(--brand-700))', display: 'grid', placeItems: 'center', flex: 'none' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <div><b style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem' }}>TermRates assistant</b><div style={{ fontSize: 'var(--fs-xs)', color: 'var(--up)', display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--up)' }} />Online · answers the basics</div></div>
            </div>
            <div ref={logRef} style={{ flex: 1, overflowY: 'auto', padding: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ maxWidth: '80%', padding: '13px 16px', borderRadius: 14, fontSize: 'var(--fs-md)', lineHeight: 1.5, alignSelf: m.who === 'user' ? 'flex-end' : 'flex-start', background: m.who === 'user' ? 'var(--accent)' : 'var(--panel)', color: m.who === 'user' ? '#fff' : 'var(--ink)', borderBottomRightRadius: m.who === 'user' ? 4 : 14, borderBottomLeftRadius: m.who === 'user' ? 14 : 4 }} dangerouslySetInnerHTML={{ __html: m.text }} />
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '0 22px 14px' }}>
              {CHIPS.map((c) => (
                <button key={c} onClick={() => ask(c)} type="button" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', padding: '9px 14px', border: '1px solid var(--line-2)', borderRadius: 'var(--r-pill)', background: 'var(--paper)', color: 'var(--ink-soft)', cursor: 'pointer' }}>{c}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, padding: '16px 20px', borderTop: '1px solid var(--line)' }}>
              <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { ask(q); setQ('') } }} type="text" placeholder="Type your question…" autoComplete="off" style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '12px 14px', border: '1.5px solid var(--line-2)', borderRadius: 'var(--r-pill)', outline: 'none', background: 'var(--paper)', color: 'var(--ink)' }} />
              <button onClick={() => { ask(q); setQ('') }} type="button" aria-label="Send" style={{ width: 46, height: 46, borderRadius: '50%', border: 'none', background: 'var(--accent)', color: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', flex: 'none' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
              </button>
            </div>
          </div>
          <p className="tr-note" style={{ textAlign: 'center', maxWidth: 600, marginInline: 'auto' }}>This assistant gives general information only &mdash; not advice for your situation, and not an offer of credit. For anything specific to your file, speak with a licensed mortgage professional. TermRates.ca is operated by Webhub4u Inc.</p>
        </div>
      </section>
    </main>
  )
}
