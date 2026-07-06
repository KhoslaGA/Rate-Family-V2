/**
 * FAQ — ported from faq.html. Grouped plain-English answers with an honest
 * "confirm with the source" where rules move. Education only.
 */
import { Button, Card, Eyebrow, FaqAccordion } from '../ds'
import { HrPageHead } from '../parts'
import { R } from '../data'

const GROUPS: [string, { q: string; a: string }[]][] = [
  ['Super Visa', [
    { q: 'How much coverage does the Super Visa require?', a: 'At least $100,000 of emergency medical coverage, valid for one year from entry, covering health care, hospitalization and repatriation — from a Canadian insurer or an IRCC-approved foreign one. Confirm current rules on canada.ca.' },
    { q: 'Does HealthRate sell Super Visa insurance?', a: 'No. HealthRate is education only — we never quote, sell or arrange coverage. We explain how it works so your family can deal with insurers and licensed professionals confidently.' },
    { q: 'Can the policy start date be changed?', a: 'Most insurers allow free date changes before the policy starts — flights move, and they know it. Confirm this before buying; it is on our checklist.' },
  ]],
  ['Newcomers', [
    { q: 'Does provincial coverage start the day I land?', a: 'Not always. Some provinces have applied waiting periods for new residents — Ontario historically up to 3 months, with rules changing since 2020. Ask your province for your exact start date and plan any gap deliberately.' },
    { q: 'What do I do during a coverage gap?', a: 'Walk-in clinics and community health centres still see you — ask prices up front. Many families bridge the gap with temporary visitor-style coverage for emergencies. Keep every receipt.' },
  ]],
  ['Travel & visitors', [
    { q: 'What does visitor insurance actually cover?', a: 'Emergencies: sudden illness or injury, emergency hospital care, diagnostics, prescriptions tied to the emergency, and repatriation. Routine and planned care is excluded.' },
    { q: 'Why is the pre-existing condition clause such a big deal?', a: 'Because for an older visitor, the most likely claim relates to an existing condition. Whether the policy covers it depends on the stability period — read that clause before comparing prices.' },
    { q: 'Is more coverage always better?', a: 'More coverage costs more. The right amount depends on the visitor, the length of stay and the family budget. Understanding the levers matters more than any single number — our pricing explainer walks through them.' },
  ]],
]

export default function Faq() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['FAQ', null]]}
        eyebrow="Questions, answered plainly"
        title="Ask us anything — "
        em="here is what families ask first"
        tail="."
        lead="Short answers, no jargon, and an honest 'confirm with the source' where rules move. If your question is missing, tell us and we will add it."
      />
      <section style={{ padding: '48px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          {GROUPS.map(([g, items], gi) => (
            <div key={gi} style={{ marginBottom: 36 }}>
              <Eyebrow variant="muted">{g}</Eyebrow>
              <div style={{ marginTop: 14 }}><FaqAccordion items={items} /></div>
            </div>
          ))}
          <Card pad accentTop>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)', margin: '0 0 6px' }}>Question not here?</h3>
                <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.55 }}>Send it over — plain questions make the best guides. Or try the education assistant for instant basics.</p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Button variant="outline" withArrow href={R.assistant}>Ask the assistant</Button>
                <Button withArrow href={R.contact}>Contact us</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
