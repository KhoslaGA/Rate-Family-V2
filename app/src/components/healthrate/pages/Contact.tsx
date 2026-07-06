'use client'

/**
 * Contact — ported from contact.html. Interactive (client-side only; no network).
 * We answer questions and sell nothing, so nobody gets called back with a pitch.
 */
import { useState } from 'react'
import Link from 'next/link'
import { Button, Card, Icon, Input } from '../ds'
import { HrEduNote, HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

const SIDE: [string, string, string, string][] = [
  ['Request a language', 'Punjabi, Hindi and Urdu guides are rolling out — requests set the order.', R.languages, 'See language status'],
  ['Request a city guide', 'Toronto is live. Vancouver, Calgary, Montréal and Brampton are queued.', R.toronto, 'See the Toronto guide'],
  ['Report an error', 'Rules move. If a guide is out of date, we want to know within the day.', R.trust, 'How we correct'],
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const ok = name.trim() && email.trim() && msg.trim()

  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Contact', null]]}
        eyebrow="Talk to the desk"
        title="Questions welcome. "
        em="Sales calls, never"
        tail="."
        lead="Ask about a guide, request a language or a city, or tell us something is wrong. A human reads everything — and because we sell nothing, nobody will call you back with a pitch."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div className="hr-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 36, alignItems: 'start' }}>
            <Card pad accentTop>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon name="check" size={26} color="var(--success)" />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)', margin: '0 0 8px' }}>Message sent</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.6 }}>Thank you. The desk usually replies within two business days — in the language you wrote in, where we can.</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gap: 16 }}>
                  <div className="hr-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <Input label="Your name" placeholder="First name is fine" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input label="Email" placeholder="you@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-muted)', marginBottom: 6 }}>Your message</label>
                    <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="A question, a correction, a language request…" rows={6}
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border-strong)', borderRadius: 8, fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink)', resize: 'vertical', boxSizing: 'border-box', background: 'var(--white)' }} />
                  </div>
                  <div>
                    <Button withArrow onClick={() => { if (ok) setSent(true) }} style={{ opacity: ok ? 1 : 0.5, pointerEvents: ok ? 'auto' : 'none' }}>Send message</Button>
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.55 }}>We use your message only to reply. No lists, no lead files — see <Link href={R.legal + '#privacy'} style={{ color: 'var(--accent)' }}>privacy</Link>.</p>
                </div>
              )}
            </Card>
            <div style={{ display: 'grid', gap: 14 }}>
              {SIDE.map(([t, d, href, cta], i) => (
                <Card key={i} pad>
                  <h3 style={{ fontSize: 16.5, fontWeight: 800, color: 'var(--navy)', margin: '0 0 6px' }}>{t}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.55, margin: '0 0 10px' }}>{d}</p>
                  <Link href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 800, color: 'var(--accent)', textDecoration: 'none' }}>{cta} <Icon name="arrowRight" size={14} color="var(--accent)" /></Link>
                </Card>
              ))}
              <HrEduNote />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
