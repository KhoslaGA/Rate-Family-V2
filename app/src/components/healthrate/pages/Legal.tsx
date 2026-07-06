/**
 * Legal & disclosures — ported from legal.html. Static. Privacy, terms,
 * accessibility, and the entity disclosure, kept readable.
 */
import type { CSSProperties } from 'react'
import { EntityDisclosure } from '../ds'
import { HrPageHead } from '../parts'
import { R } from '../data'

const H2: CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--ink-strong)', margin: '0 0 6px', scrollMarginTop: 120 }
const UPD: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-muted)', marginBottom: 16 }
const NAV: [string, string][] = [['#privacy', 'Privacy'], ['#terms', 'Terms'], ['#accessibility', 'Accessibility'], ['#disclosures', 'Disclosures']]

export default function Legal() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Legal', null]]}
        eyebrow="The fine print, kept readable"
        title="Legal & disclosures"
        lead="Plain sections, plainly written. The same reading standard we hold our guides to applies here too."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose)', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {NAV.map(([href, label]) => (
              <a key={href} href={href} style={{ padding: '8px 16px', borderRadius: 999, border: '1px solid var(--border-strong)', textDecoration: 'none', fontSize: 13.5, fontWeight: 700, color: 'var(--ink-muted)' }}>{label}</a>
            ))}
          </div>
          <div id="privacy" style={{ paddingBottom: 36, marginBottom: 36, borderBottom: '1px solid var(--border)' }}>
            <h2 style={H2}>Privacy</h2>
            <div style={UPD}>Last updated June 2026</div>
            <div className="prose">
              <p>You can read everything on HealthRate without an account, an email address, or any personal information. Tools like the coverage checklist save progress in your own browser — that data never leaves your device.</p>
              <p>If you contact us or subscribe to updates, we collect what you type and use it for exactly that purpose. We do not sell personal information, and because HealthRate sells nothing, there is no lead file to build. Standard, aggregate analytics help us see which guides get read.</p>
              <p>You may ask us to show, correct or delete anything you have sent us — use the contact page.</p>
            </div>
          </div>
          <div id="terms" style={{ paddingBottom: 36, marginBottom: 36, borderBottom: '1px solid var(--border)' }}>
            <h2 style={H2}>Terms of use</h2>
            <div style={UPD}>Last updated June 2026</div>
            <div className="prose">
              <p>HealthRate content is general education, not advice for your specific situation, and not an offer or arrangement of insurance. Immigration and insurance rules change; confirm current requirements with official sources — IRCC at canada.ca, your provincial ministry, and the actual policy wording — before acting.</p>
              <p>Illustrative figures are labeled as such and are not prices. Do not rely on any number here to make a purchase decision. Please do not misuse the site, attempt to disrupt it, or scrape it for commercial republication.</p>
            </div>
          </div>
          <div id="accessibility" style={{ paddingBottom: 36, marginBottom: 36, borderBottom: '1px solid var(--border)' }}>
            <h2 style={H2}>Accessibility</h2>
            <div style={UPD}>Last updated June 2026</div>
            <div className="prose">
              <p>We aim for WCAG 2.1 AA: keyboard navigation, sufficient contrast, respect for reduced-motion preferences, and semantic structure for assistive technology. Plain language is itself an accessibility feature — it is the founding one here.</p>
              <p>If anything on this site is hard for you to use, tell us. Accessibility reports are treated as priority fixes, and we will help you get the information another way in the meantime.</p>
            </div>
          </div>
          <div id="disclosures">
            <h2 style={H2}>Entity disclosure</h2>
            <div style={UPD}>Reproduced verbatim on every page footer</div>
            <div style={{ padding: '22px 24px', background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
              <EntityDisclosure site="healthrate" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
