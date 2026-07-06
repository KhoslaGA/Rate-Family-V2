'use client'

/**
 * HealthRate footer — navy, five link columns, the entity disclosure stated once
 * (Webhub4u Inc. · education only), and a working language switcher. Ported from
 * hr-chrome.jsx with hrefs pointed at this app's routes + sibling hosts.
 */
import Link from 'next/link'
import { EntityDisclosure, HrWordmark, LanguageSwitcher } from './ds'
import { HR_FOOTER, pickL } from './data'
import { useHrLang } from './useHrLang'

export default function HrFooter() {
  const lang = useHrLang()
  const L = pickL(lang)
  const li = lang === 'fr' ? 1 : 0

  return (
    <footer style={{ background: 'var(--navy)', padding: '56px 32px 28px', borderTop: '1px solid var(--navy-mid)' }}>
      <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto' }}>
        <div className="hr-foot-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 1.4fr) repeat(5, 1fr)', gap: 32, marginBottom: 40 }}>
          <div>
            <Link href="/" style={{ display: 'inline-flex', textDecoration: 'none', marginBottom: 14 }}><HrWordmark height={26} onDark /></Link>
            <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 14 }}>{L.footEyebrow}</div>
            <EntityDisclosure site="healthrate" onNavy />
            <div style={{ marginTop: 18 }}><LanguageSwitcher /></div>
          </div>
          {HR_FOOTER.map((col) => (
            <div key={col.t[0]}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.5)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 16 }}>{col.t[li]}</div>
              {col.links.map((l) => (
                <Link key={l[2] + l[0]} href={l[2]} style={{ display: 'block', marginBottom: 10, fontSize: 13, textDecoration: 'none', color: 'rgba(255,255,255,.6)' }}>{l[li]}</Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px 24px' }}>
          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.45)', margin: 0 }}>© 2026 HealthRate.ca <span style={{ color: 'rgba(255,255,255,.22)', margin: '0 6px' }}>|</span> a Webhub4u Inc. company.</p>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.6)', fontWeight: 600 }}>Made in Canada 🇨🇦</span>
        </div>
      </div>
    </footer>
  )
}
