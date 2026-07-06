'use client'

/**
 * HealthRate design-system primitives, reconstructed. The original spoke rendered
 * these from a compiled `RateFamilyDesignSystem_c89c5e` bundle that was never
 * uploaded; this rebuilds each primitive's public API from its usage across the
 * 24 source pages + kit. Green "welcoming" skin, education-only. Scoped visuals
 * come from healthrate.css tokens (html[data-site="healthrate"]).
 */
import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import { setHrLang, useHrLang, type HrLang } from './useHrLang'

/* ── HrWordmark — name-as-logo: "Health" (navy) + zigzag rate-line + "Rate" ─ */
export function HrWordmark({ height = 32, onDark }: { height?: number; onDark?: boolean }) {
  const structure = onDark ? '#ffffff' : 'var(--navy)'
  const accent = onDark ? '#63C892' : 'var(--accent)'
  const fs = Math.round(height * 0.72)
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: fs, letterSpacing: '-.02em', lineHeight: 1 }}>
      <span style={{ position: 'relative', color: structure }}>
        Health
        <svg viewBox="0 0 26 16" fill="none" aria-hidden style={{ position: 'absolute', right: '-.62em', top: '-.4em', width: '1.22em', height: '.75em', pointerEvents: 'none' }}>
          <path d="M2 12.5 L8 5 L12.5 9.5 L21 2.5 M21 2.5 L16.6 2.7 M21 2.5 L20.2 7" stroke={accent} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{ color: accent }}>Rate</span>
    </span>
  )
}

/* ── Icon ────────────────────────────────────────────────────────────────── */
const PATHS: Record<string, ReactNode> = {
  check: <path d="M20 6 9 17l-5-5" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  plane: <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5S18 3 16.5 4.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />,
}
export function Icon({ name, size = 18, color = 'currentColor' }: { name: string; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}>
      {PATHS[name] ?? PATHS.check}
    </svg>
  )
}

/* ── Eyebrow ─────────────────────────────────────────────────────────────── */
export function Eyebrow({ children, variant, style }: { children: ReactNode; variant?: 'muted'; style?: CSSProperties }) {
  return <div className="eyebrow" style={{ ...(variant === 'muted' ? { color: 'var(--ink-muted)' } : null), ...style }}>{children}</div>
}

/* ── Badge ───────────────────────────────────────────────────────────────── */
const BADGE: Record<string, CSSProperties> = {
  accent: { background: 'var(--accent-soft)', color: 'var(--accent-strong)' },
  neutral: { background: 'var(--surface-sunk)', color: 'var(--ink-muted)' },
  soon: { background: '#FBF0DD', color: 'var(--warning)' },
  live: { background: 'var(--accent-soft)', color: 'var(--accent-strong)' },
  success: { background: 'var(--success-soft)', color: 'var(--success)' },
}
export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: keyof typeof BADGE }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '.06em', ...BADGE[tone] }}>{children}</span>
  )
}

/* ── Button ──────────────────────────────────────────────────────────────── */
type BtnProps = {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  withArrow?: boolean
  href?: string
  onClick?: () => void
  style?: CSSProperties
}
export function Button({ children, variant = 'primary', size = 'md', withArrow, href, onClick, style }: BtnProps) {
  const pad = size === 'lg' ? '14px 24px' : size === 'sm' ? '8px 15px' : '11px 19px'
  const fs = size === 'lg' ? 16 : size === 'sm' ? 13.5 : 15
  const base: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    padding: pad, fontSize: fs, fontFamily: 'var(--font-display)', fontWeight: 700,
    borderRadius: 999, cursor: 'pointer', textDecoration: 'none', lineHeight: 1,
    border: '1.5px solid transparent', transition: 'background var(--dur), border-color var(--dur), color var(--dur)',
    ...(variant === 'primary' ? { background: 'var(--accent)', color: 'var(--accent-on)', borderColor: 'var(--accent)' }
      : variant === 'outline' ? { background: 'transparent', color: 'var(--accent-strong)', borderColor: 'var(--border-strong)' }
      : { background: 'transparent', color: 'var(--navy)', borderColor: 'transparent' }),
    ...style,
  }
  const inner = <>{children}{withArrow && <Icon name="arrowRight" size={size === 'lg' ? 18 : 15} />}</>
  if (href) return <Link href={href} style={base}>{inner}</Link>
  return <button type="button" onClick={onClick} style={base}>{inner}</button>
}

/* ── Card ────────────────────────────────────────────────────────────────── */
type CardProps = {
  children: ReactNode
  pad?: boolean
  accentTop?: boolean
  hover?: boolean
  as?: 'a'
  href?: string
  style?: CSSProperties
}
export function Card({ children, pad, accentTop, hover, as, href, style }: CardProps) {
  const base: CSSProperties = {
    background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-soft)', position: 'relative', overflow: 'hidden',
    ...(accentTop ? { borderTop: '3px solid var(--accent)' } : null),
    ...(pad ? { padding: 26 } : null),
    ...(hover ? { transition: 'transform var(--dur), box-shadow var(--dur)' } : null),
    ...style,
  }
  const hoverProps = hover
    ? {
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)' },
      }
    : {}
  if (as === 'a' || href) return <Link href={href || '#'} style={base} {...hoverProps}>{children}</Link>
  return <div style={base} {...hoverProps}>{children}</div>
}

/* ── Bo — the family mascot, approximated as a friendly rounded figure ─────── */
export function Bo({ pose = 'idle', size = 80 }: { sibling?: string; pose?: 'idle' | 'wave'; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" aria-hidden style={{ flexShrink: 0 }}>
      <rect x="18" y="26" width="60" height="58" rx="20" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="2.5" />
      <circle cx="48" cy="20" r="11" fill="var(--white)" stroke="var(--accent)" strokeWidth="2.5" />
      <circle cx="48" cy="20" r="3.4" fill="var(--accent)" />
      <circle cx="39" cy="50" r="4" fill="var(--navy)" />
      <circle cx="57" cy="50" r="4" fill="var(--navy)" />
      <path d="M40 62c4 4 12 4 16 0" stroke="var(--navy)" strokeWidth="2.6" strokeLinecap="round" />
      {pose === 'wave'
        ? <path d="M78 44c6-2 10-8 9-14" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
        : <path d="M78 50c4 0 7 3 7 7" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />}
      <path d="M18 50c-4 0-7 3-7 7" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

/* ── FaqAccordion ────────────────────────────────────────────────────────── */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {items.map((it, i) => {
        const on = open === i
        return (
          <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--white)', overflow: 'hidden' }}>
            <button type="button" onClick={() => setOpen(on ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '16px 18px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15.5, color: 'var(--navy)' }}>
              {it.q}
              <span style={{ transform: on ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur)', flexShrink: 0, color: 'var(--accent)' }}><Icon name="chevronDown" size={18} color="var(--accent)" /></span>
            </button>
            {on && <div style={{ padding: '0 18px 18px', fontSize: 14.5, lineHeight: 1.65, color: 'var(--ink-muted)' }}>{it.a}</div>}
          </div>
        )
      })}
    </div>
  )
}

/* ── Input ───────────────────────────────────────────────────────────────── */
export function Input({ label, placeholder, value, onChange, type = 'text' }: { label?: string; placeholder?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string }) {
  return (
    <label style={{ display: 'block' }}>
      {label && <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-muted)', marginBottom: 6 }}>{label}</span>}
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
        style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', border: '1px solid var(--border-strong)', borderRadius: 8, fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink)', background: 'var(--white)', outline: 'none' }} />
    </label>
  )
}

/* ── LanguageSwitcher — self-drives via the store when uncontrolled ────────── */
const LANGS: [HrLang, string][] = [['en', 'EN'], ['fr', 'FR'], ['pa', 'PA'], ['hi', 'HI'], ['ur', 'UR']]
export function LanguageSwitcher({ value, onChange }: { value?: HrLang; onChange?: (v: HrLang) => void }) {
  const stored = useHrLang()
  const active = value ?? stored
  const set = (v: HrLang) => { if (onChange) onChange(v); else setHrLang(v) }
  return (
    <div role="group" aria-label="Language" style={{ display: 'inline-flex', gap: 4, padding: 4, background: 'var(--surface-sunk)', borderRadius: 999 }}>
      {LANGS.map(([code, label]) => {
        const on = active === code
        return (
          <button key={code} type="button" onClick={() => set(code)} aria-pressed={on}
            style={{ padding: '6px 11px', borderRadius: 999, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, background: on ? 'var(--accent)' : 'transparent', color: on ? 'var(--accent-on)' : 'var(--ink-muted)' }}>{label}</button>
        )
      })}
    </div>
  )
}

/* ── EntityDisclosure — stated once (footer/legal). Education only. ─────────── */
export function EntityDisclosure({ short, onNavy, onDark }: { site?: string; short?: boolean; onNavy?: boolean; onDark?: boolean }) {
  const dark = onNavy || onDark
  const col = dark ? 'rgba(255,255,255,.6)' : 'var(--ink-muted)'
  const strong = dark ? 'rgba(255,255,255,.85)' : 'var(--ink)'
  return (
    <p style={{ fontSize: 12.5, lineHeight: 1.6, color: col, margin: 0 }}>
      <strong style={{ color: strong, fontWeight: 700 }}>HealthRate.ca is operated by Webhub4u Inc.</strong>{' '}
      a Canadian technology company and publisher. Webhub4u Inc. is not a licensed insurance broker. Health, travel, and visitor/Super Visa insurance content on this site is educational only and is not an offer to sell or arrange insurance.
      {!short && ' Government programs (such as provincial health coverage, OHIP, CDCP, and IRCC Super Visa requirements) change over time — always confirm current rules with the official source before making decisions. To purchase coverage, you must deal with a licensed insurer or advisor.'}
    </p>
  )
}
