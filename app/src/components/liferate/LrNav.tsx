'use client'

/**
 * LifeRate bespoke header (template #1). Rendered by the root layout only when
 * x-site === 'liferate' (host-conditional chrome). Styling lives in
 * app/src/styles/liferate.css, scoped under html[data-site="liferate"].
 */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Life', href: '/life-insurance' },
  { label: 'Critical illness', href: '/life-insurance/critical-illness' },
  { label: 'Guides', href: '/life-insurance/guides' },
  { label: 'Calculators', href: '/life-insurance/calculator' },
  { label: 'About', href: '/about' },
]

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function LrNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const nav = document.getElementById('lr-nav')
    const onScroll = () => nav?.classList.toggle('is-condensed', window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="lr-nav" id="lr-nav">
      <div className="wrap lr-nav-in">
        <Link className="lr-logo" href="/" aria-label="LifeRate home">
          <svg className="lr-logo-mark" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="17" fill="var(--brand-500)" />
            <path d="M32 47 C21 39 16 32 16 25.5 C16 20.8 19.4 17.5 23.5 17.5 C27 17.5 30 19.8 32 23 C34 19.8 37 17.5 40.5 17.5 C44.6 17.5 48 20.8 48 25.5 C48 32 43 39 32 47 Z" fill="#fff" />
          </svg>
          <span className="lr-logo-word"><span className="a">Life</span><span className="b">Rate</span></span>
        </Link>
        <nav
          className="lr-nav-links"
          aria-label="Primary"
          style={
            open
              ? {
                  display: 'flex',
                  position: 'absolute',
                  top: '76px',
                  right: '20px',
                  flexDirection: 'column',
                  background: 'var(--paper)',
                  padding: '12px',
                  borderRadius: '14px',
                  boxShadow: 'var(--sh-md)',
                }
              : undefined
          }
        >
          {NAV.map((l) => {
            const current = l.href === '/life-insurance' ? pathname === l.href : pathname.startsWith(l.href)
            return (
              <Link key={l.href} className={`lr-nav-link${current ? ' is-current' : ''}`} href={l.href}>
                {l.label}
              </Link>
            )
          })}
          <Link className="btn btn-accent lr-nav-cta" href="/life-insurance/quote">
            Get a life quote <Arrow />
          </Link>
        </nav>
        <button className="lr-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
