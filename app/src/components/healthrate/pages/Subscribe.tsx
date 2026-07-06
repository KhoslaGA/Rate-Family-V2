'use client'

/**
 * Subscribe — ported from subscribe.html. Interactive (client-side only). One
 * short email when a guide or translation ships. No offers, no quotes, ever.
 */
import { useState } from 'react'
import Link from 'next/link'
import { Bo, Button, Card, Icon, Input } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Subscribe', null]]}
        eyebrow="Guides by email"
        title="One email when something ships. "
        em="That is the whole deal"
        tail="."
        lead="New guides and new translations, announced in a short note. No offers, no partner promotions, no urgency — because we have nothing to sell you."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 620, margin: '0 auto', padding: '0 24px' }}>
          <Card pad accentTop>
            {done ? (
              <div style={{ textAlign: 'center', padding: '28px 8px' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--success-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon name="check" size={26} color="var(--success)" />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)', margin: '0 0 8px' }}>You are on the list</h3>
                <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.6 }}>Expect mail rarely, and only when something is genuinely new. Unsubscribe is one click, forever.</p>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18 }}>
                  <Bo pose="wave" size={54} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: 'var(--navy)' }}>What you will get</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>New guides · new languages · corrections that matter</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: 12 }}>
                  <Input label="Email" placeholder="you@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Button withArrow onClick={() => { if (email.trim()) setDone(true) }} style={{ width: '100%', opacity: email.trim() ? 1 : 0.5, pointerEvents: email.trim() ? 'auto' : 'none' }}>Subscribe</Button>
                </div>
                <div style={{ marginTop: 14, fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.55, textAlign: 'center' }}>
                  No quotes, no offers, ever — this list announces education, nothing else. <Link href={R.legal + '#privacy'} style={{ color: 'var(--accent)' }}>Privacy</Link>.
                </div>
              </div>
            )}
          </Card>
          <div style={{ marginTop: 20 }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
