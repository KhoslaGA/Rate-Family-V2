'use client'

/**
 * Shared HealthRate page pieces — the interior page-head band, the TBD-locked
 * editorial byline, and the affirmative "education only" note (self-localizing).
 * Ported from hr-chrome.jsx. Byline never names an invented author.
 */
import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { Eyebrow, Icon } from './ds'
import { pickL } from './data'
import { useHrLang } from './useHrLang'

export const hrWrap: CSSProperties = { maxWidth: 'var(--container-page)', margin: '0 auto', padding: '0 24px' }

type Crumb = [string, string | null]

export function HrPageHead({ crumbs, eyebrow, title, em, tail, lead, children }: {
  crumbs?: Crumb[]
  eyebrow?: string
  title: string
  em?: string
  tail?: string
  lead?: string
  children?: ReactNode
}) {
  return (
    <section style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden', padding: '44px 0 48px' }}>
      <div aria-hidden style={{ position: 'absolute', top: -160, right: -140, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-soft), transparent 70%)' }} />
      <div style={{ ...hrWrap, position: 'relative' }}>
        {crumbs && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 13, marginBottom: 18 }}>
            {crumbs.map(([label, href], i) => (
              <span key={i} style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
                {i > 0 && <span style={{ color: 'var(--ink-faint)' }}>/</span>}
                {href ? <Link href={href} style={{ color: 'var(--ink-muted)', textDecoration: 'none', fontWeight: 600 }}>{label}</Link> : <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{label}</span>}
              </span>
            ))}
          </div>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 style={{ fontSize: 'clamp(32px, 4.6vw, 46px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--navy)', margin: '16px 0 14px', maxWidth: 720, fontFamily: 'var(--font-display)' }}>
          {title}{em && <span style={{ color: 'var(--accent)' }}>{em}</span>}{tail}
        </h1>
        {lead && <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink)', maxWidth: 640, margin: 0 }}>{lead}</p>}
        {children}
      </div>
    </section>
  )
}

export function HrByline({ date }: { date?: string }) {
  return (
    <div data-byline-tbd style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name="users" size={20} color="var(--accent)" />
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)' }}>The HealthRate editorial desk · reviewed by [BYLINE TBD]</div>
        <div className="mono" style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Licensed review pending masthead confirmation · {date || 'June 2026'}</div>
      </div>
    </div>
  )
}

export function HrEduNote({ style }: { style?: CSSProperties }) {
  const lang = useHrLang()
  const L = pickL(lang)
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--surface-sunk)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px', fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-muted)', ...style }}>
      <span style={{ flexShrink: 0, marginTop: 1 }}><Icon name="check" size={16} color="var(--accent)" /></span>
      <span><strong style={{ color: 'var(--navy)' }}>{lang === 'fr' ? 'Éducation seulement.' : 'Education only.'}</strong> {L.edu}</span>
    </div>
  )
}
