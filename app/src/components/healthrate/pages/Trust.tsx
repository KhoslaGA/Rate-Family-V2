/**
 * Trust & transparency — ported from trust.html. Static. Operator, phase status,
 * licensed-referral routing, editorial rules, and the entity disclosure verbatim.
 */
import { Card, EntityDisclosure } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

const FACTS: [string, string, string][] = [
  ['Operated by', 'Webhub4u Inc.', 'A Canadian technology company. Not a licensed insurance broker — and this site does not broker.'],
  ['Phase 1 status', 'Education only', 'HealthRate publishes guides. It does not sell, quote or arrange insurance — affirmatively, not just quietly.'],
  ['Licensed referrals', 'KLC Group Canada Inc.', 'Where sibling Rate-family sites make insurance referrals, they route to this FSRA-licensed brokerage. HealthRate currently makes none.'],
]

export default function Trust() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Trust & transparency', null]]}
        eyebrow="Check our work"
        title="Everything you would want to verify, "
        em="in one place"
        tail="."
        lead="Who operates this site, what we are licensed to do (and pointedly not do), how content is made, and where the money would come from if there were any. If a site will not show you this page, be careful with it."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {FACTS.map(([k, v, d], i) => (
              <Card key={i} pad accentTop>
                <div className="eyebrow" style={{ marginBottom: 10 }}>{k}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 19, color: 'var(--navy)', marginBottom: 8, letterSpacing: '-.01em' }}>{v}</div>
                <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>{d}</p>
              </Card>
            ))}
          </div>
          <div className="prose" style={{ marginTop: 40 }}>
            <h2>What education-only means in practice</h2>
            <p>No page on HealthRate quotes a price, collects insurance applications, or connects you to a salesperson. Tools like the pricing explainer use labeled, illustrative indices — never real premiums. If a future phase adds licensed referrals, this page will say so before any button does.</p>
            <h2>Our editorial rules</h2>
            <p>No superlatives — you will never read &ldquo;cheapest&rdquo; or &ldquo;best&rdquo; here. No urgency — nothing on this site expires in ten minutes. No invented figures — real numbers are dated and sourced, examples are labeled illustrative. And no invented authors — named bylines wait for verified, credentialed people; until then guides carry an honest desk attribution.</p>
          </div>
          <div style={{ marginTop: 36, padding: '26px 28px', background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>The entity disclosure, verbatim</div>
            <EntityDisclosure site="healthrate" />
          </div>
          <div style={{ marginTop: 24 }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
