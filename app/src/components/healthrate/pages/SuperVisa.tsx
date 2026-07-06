/**
 * Super Visa landing — ported from super-visa.html. Static. The rules at a
 * glance, order-of-operations, and FAQ. Per-IRCC figures dated + "confirm on
 * canada.ca". Education only; nothing here sells or quotes.
 */
import { Badge, Bo, Button, Card, Eyebrow, FaqAccordion } from '../ds'
import { HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

const FACTS: [string, string, string][] = [
  ['Minimum coverage', '$100,000', 'Emergency medical coverage from a Canadian insurer (or an approved foreign insurer).'],
  ['Policy length', '1 year', 'Valid for at least one year from the day your parent or grandparent enters Canada.'],
  ['Must cover', 'Care, hospital, return', 'Health care, hospitalization and repatriation must all be included.'],
  ['Proof', 'At the border', 'Officers can ask to see proof of paid coverage when your family member arrives.'],
]
const ORDER: [string, string, string][] = [
  ['1', 'Plan the visit', 'Decide roughly when your parent or grandparent will arrive.'],
  ['2', 'Arrange the coverage', 'A policy with a start date matching the arrival — minimum $100,000, one year.'],
  ['3', 'Apply with proof', 'The insurance certificate goes in with the Super Visa application.'],
  ['4', 'Adjust if plans change', 'Move the start date or request a refund if the visa is refused.'],
]
const FAQS = [
  { q: 'Who needs Super Visa insurance?', a: 'Parents and grandparents of Canadian citizens or permanent residents applying for the Super Visa. Proof of qualifying medical insurance is part of the application — without it, the visa is refused.' },
  { q: 'Can the policy be monthly instead of a full year?', a: 'IRCC has allowed some flexibility over time, but the safe assumption is a policy valid for one year from entry. Confirm the current rule on the IRCC website before your family applies.' },
  { q: 'What happens if my parent leaves Canada early?', a: 'Many insurers refund the unused portion of a policy if there is no claim, minus a fee. The refund rules live in the policy wording — our checklist shows you where to look.' },
  { q: 'Does HealthRate sell this insurance?', a: 'No. HealthRate is education only — we explain how the coverage works so you can talk to a licensed professional or insurer with confidence. We never quote or sell.' },
]

export default function SuperVisa() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Super Visa', null]]}
        eyebrow="Super Visa insurance"
        title="Inviting your parents? Here is the insurance rule, "
        em="made simple"
        tail="."
        lead="The Super Visa lets parents and grandparents visit Canada for years at a time — but the application needs proof of medical insurance. This page explains exactly what that means, before anyone pays for anything."
      >
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
          <Button size="lg" withArrow href={R.superVisaGuide}>Read the full guide</Button>
          <Button variant="ghost" size="lg" href={R.checklist}>Open the coverage checklist</Button>
        </div>
      </HrPageHead>

      <section style={{ padding: '64px 0', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Eyebrow variant="muted">The rules, at a glance</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 6px' }}>Four things the policy must get right</h2>
            <p className="mono" style={{ fontSize: 12, color: 'var(--ink-muted)', margin: 0 }}>Per IRCC requirements · as of June 2026 · confirm on canada.ca before applying</p>
          </div>
          <div className="rf-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {FACTS.map(([k, v, d], i) => (
              <Card key={i} pad accentTop>
                <div className="eyebrow" style={{ marginBottom: 10 }}>{k}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, color: 'var(--navy)', letterSpacing: '-.02em', marginBottom: 8 }}>{v}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-muted)', margin: 0 }}>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: 'var(--cream)' }}>
        <div style={hrWrap}>
          <div className="hr-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <Eyebrow variant="muted">How it fits the application</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 14px' }}>Insurance comes before the visa, not after</h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', margin: '0 0 12px' }}>The proof of insurance goes into the Super Visa application itself. That means your family shops for coverage while the trip is still a plan — and the policy has to start the day they land, not the day they buy it.</p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', margin: 0 }}>Most insurers understand this and let you set a future start date, change it if the flight moves, and refund the policy if the visa is refused. The checklist walks through each of those protections in plain language.</p>
              <div style={{ marginTop: 22 }}><Button withArrow href={R.checklist}>Walk through the checklist</Button></div>
            </div>
            <Card pad>
              <div className="eyebrow" style={{ marginBottom: 14 }}>The order of operations</div>
              {ORDER.map(([n, t, d]) => (
                <div key={n} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: n !== '4' ? '1px solid var(--border-soft)' : 'none' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 15, flexShrink: 0 }}>{n}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)' }}>{t}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{d}</div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 24 }}>
            <Eyebrow variant="muted">Common questions</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 0' }}>Super Visa insurance FAQ</h2>
          </div>
          <FaqAccordion items={FAQS} />
          <Card pad accentTop style={{ marginTop: 36 }}>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
              <Bo pose="wave" size={64} />
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ fontSize: 21, fontWeight: 800, color: 'var(--navy)', margin: '0 0 6px' }}>Ready to go deeper?</h3>
                <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.55 }}>The full guide covers costs, refunds, monthly-payment options and the questions to ask an insurer — at your own pace.</p>
              </div>
              <Button size="lg" withArrow href={R.superVisaGuide}>Read the full guide</Button>
            </div>
          </Card>
          <div style={{ marginTop: 20 }}><Badge tone="accent">Education only</Badge></div>
        </div>
      </section>
    </main>
  )
}
