'use client'

/**
 * HealthRate header — sticky wordmark, primary nav with a hover mega-panel, a
 * language chip and the Super Visa CTA; plus the "body is still English" notice
 * band shown when a non-English language is active. Ported from hr-chrome.jsx.
 */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button, HrWordmark, Icon } from './ds'
import { HR_NAV } from './data'
import { HR_NOTES, pickL } from './data'
import { useHrLang } from './useHrLang'

const wide: React.CSSProperties = { maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 32px' }

export default function HrNav() {
  const lang = useHrLang()
  const L = pickL(lang)
  const [open, setOpen] = useState<string | null>(null)
  const note = lang !== 'en' ? HR_NOTES[lang] : null
  const rtl = lang === 'ur'

  // Entrance-reveal engine (ported from hr-chrome.jsx). Without it, elements
  // carrying .hr-reveal stay at opacity:0 — so this must run on every page.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: no-preference)')
    if (!mq.matches || !('IntersectionObserver' in window)) return
    const root = document.documentElement
    root.classList.add('hr-js')
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.08 })
    const scan = () => document.querySelectorAll('.hr-reveal:not([data-io])').forEach((el) => { el.setAttribute('data-io', ''); io.observe(el) })
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })
    scan()
    return () => { io.disconnect(); mo.disconnect() }
  }, [])

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'var(--white)', borderBottom: '1px solid var(--border-soft)' }} onMouseLeave={() => setOpen(null)}>
        <div style={wide}>
          <div className="hr-head-utils" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '14px 0' }}>
            <Link href="/" aria-label="HealthRate home" style={{ display: 'inline-flex', textDecoration: 'none' }}><HrWordmark height={32} /></Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/health-insurance/languages" style={{ textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', whiteSpace: 'nowrap' }}>
                {lang === 'fr' ? 'Langues' : 'Languages'} · {lang.toUpperCase()}
              </Link>
              <Button size="sm" withArrow href={L.headerCta[1]}>{L.headerCta[0]}</Button>
            </div>
          </div>
          <nav style={{ display: 'flex', borderTop: '1px solid var(--border-soft)', overflowX: 'auto' }} aria-label="Primary">
            {HR_NAV.map((cat) => {
              const isOpen = open === cat.key
              return (
                <div key={cat.key} style={{ position: 'relative' }} onMouseEnter={() => setOpen(cat.key)}>
                  <Link href={cat.href} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '15px 16px', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, whiteSpace: 'nowrap', color: isOpen ? 'var(--accent)' : 'var(--navy)', borderBottom: isOpen ? '2px solid var(--accent)' : '2px solid transparent', marginBottom: -1 }}>
                    {cat.label[lang === 'fr' ? 'fr' : 'en']}<Icon name="chevronDown" size={13} color="var(--accent)" />
                  </Link>
                </div>
              )
            })}
          </nav>
        </div>
        {open && (() => {
          const cat = HR_NAV.find((c) => c.key === open)!
          return (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--white)', borderTop: '2px solid var(--accent)', boxShadow: '0 30px 60px -20px rgba(27,42,74,.18)', zIndex: 70 }}>
              <div style={{ ...wide, padding: '24px 32px', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 32 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px 28px' }}>
                  {cat.subs.map(([label, href], i) => (
                    <Link key={i} href={href} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 10px', margin: '0 -10px', borderRadius: 8, textDecoration: 'none', color: 'var(--navy)', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600 }}>{label}</Link>
                  ))}
                </div>
                <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 14, padding: 18 }}>
                  <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 8 }}>{cat.label.en}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--navy)', lineHeight: 1.25, marginBottom: 8 }}>Plain-English guides, at your pace</div>
                  <p style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.5, margin: '0 0 12px' }}>Education only — we never quote or sell.</p>
                  <Link href={cat.href} style={{ fontSize: 13, fontWeight: 800, color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>Start here <Icon name="arrowRight" size={14} color="var(--accent)" /></Link>
                </div>
              </div>
            </div>
          )
        })()}
      </header>
      {note && (
        <div style={{ background: 'var(--accent-soft)', borderBottom: '1px solid var(--accent-line)' }} dir={rtl ? 'rtl' : 'ltr'}>
          <div style={{ maxWidth: 'var(--container-page)', margin: '0 auto', padding: '10px 24px', fontSize: 13.5, fontWeight: 600, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: 8, justifyContent: rtl ? 'flex-end' : 'flex-start' }}>
            <Icon name="check" size={15} color="var(--accent)" />{note}
          </div>
        </div>
      )}
    </>
  )
}
