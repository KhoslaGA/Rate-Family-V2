'use client'

/**
 * TermRates bespoke header (template #1). Rendered by the root layout only when
 * x-site === 'termrates' (host-conditional chrome). Styling lives in
 * app/src/styles/termrates.css, scoped under html[data-site="termrates"].
 *
 * Nav is limited to TermRates' own owned routes (/mortgages/*, /rates) — the
 * cross-family "Our services" dropdown from the static design is dropped here
 * for the same reason LifeRate dropped it: sibling spokes live on other hosts.
 */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const CALCS = [
  { label: 'Payment calculator', href: '/mortgages/calculator' },
  { label: 'Affordability', href: '/mortgages/affordability' },
  { label: 'Stress test', href: '/mortgages/stress-test' },
  { label: 'Land transfer tax', href: '/mortgages/land-transfer-tax' },
  { label: 'CMHC premium', href: '/mortgages/cmhc-calculator' },
  { label: 'Prepayment penalty', href: '/mortgages/penalty-calculator' },
  { label: 'Rent vs buy', href: '/mortgages/rent-vs-buy' },
]

const NAV = [
  { label: 'Mortgage', href: '/mortgages' },
  { label: 'Refinance', href: '/mortgages/refinance' },
  { label: 'Rate table', href: '/rates' },
  { label: 'Calculators', href: '/mortgages/calculator', children: CALCS },
  { label: 'Guides', href: '/mortgages/guides' },
]

const Zig = () => (
  <svg className="tr-logo-zig" viewBox="0 0 26 16" fill="none" aria-hidden="true">
    <path
      d="M2 12.5 L8 5 L12.5 9.5 L21 2.5 M21 2.5 L16.6 2.7 M21 2.5 L20.2 7"
      stroke="var(--accent)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const Caret = () => (
  <svg className="tr-nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export default function TrNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [calcOpen, setCalcOpen] = useState(false)

  useEffect(() => {
    const nav = document.getElementById('tr-nav')
    const onScroll = () => nav?.classList.toggle('is-condensed', window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="tr-nav" id="tr-nav">
      <div className="wrap tr-nav-in">
        <Link className="tr-logo" href="/" aria-label="TermRates home">
          <span className="tr-logo-word">
            <span className="a">Term<Zig /></span>
            <span className="b">Rates</span>
          </span>
        </Link>
        <nav
          className="tr-nav-links"
          aria-label="Primary"
          style={
            open
              ? {
                  display: 'flex',
                  position: 'absolute',
                  top: '66px',
                  right: '18px',
                  flexDirection: 'column',
                  background: 'var(--paper)',
                  padding: '12px',
                  borderRadius: '12px',
                  boxShadow: 'var(--sh-md)',
                  border: '1px solid var(--line)',
                }
              : undefined
          }
        >
          {NAV.map((l) => {
            if (l.children) {
              const current = l.children.some((c) => pathname === c.href)
              return (
                <div
                  key={l.href}
                  className="tr-nav-group"
                  onMouseEnter={() => setCalcOpen(true)}
                  onMouseLeave={() => setCalcOpen(false)}
                >
                  <button
                    type="button"
                    className={`tr-nav-link tr-nav-trigger${current ? ' is-current' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={calcOpen}
                    onClick={() => setCalcOpen((v) => !v)}
                  >
                    {l.label} <Caret />
                  </button>
                  {calcOpen && (
                    <div className="tr-nav-menu" role="menu">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          role="menuitem"
                          className={`tr-nav-menu-link${pathname === c.href ? ' is-current' : ''}`}
                          href={c.href}
                          onClick={() => { setCalcOpen(false); setOpen(false) }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            const current = l.href === '/mortgages' ? pathname === l.href : pathname.startsWith(l.href)
            return (
              <Link key={l.href} className={`tr-nav-link${current ? ' is-current' : ''}`} href={l.href}>
                {l.label}
              </Link>
            )
          })}
          <Link className="btn btn-accent tr-nav-cta" href="/mortgages/quote">
            Get my rate <Arrow />
          </Link>
        </nav>
        <button className="tr-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
