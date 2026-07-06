/**
 * Visitor & travel medical insurance — ported from travel.html. Static. Who it is
 * for, covered vs excluded, and a plain-English FAQ. Education only.
 */
import { Button, Card, Eyebrow, FaqAccordion, Icon } from '../ds'
import { HrEduNote, HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

const WHO: [string, string][] = [
  ['Visitors to Canada', 'Family visiting for weeks or months. Provincial plans do not cover them — a visitor policy pays for emergencies, from a broken wrist to a hospital stay.'],
  ['International students', 'Some provinces cover students, some do not, and schools often arrange group plans. The first question: what does your school already give you?'],
  ['Snowbirds & travellers', 'Leaving Canada? Your provincial plan covers very little abroad. Travel medical cover picks up emergency costs outside the country.'],
]
const COVERED = ['Emergency hospital stays and surgery', 'Emergency doctor visits and diagnostics', 'Prescription drugs for the emergency', 'Ambulance to the nearest hospital', 'Repatriation home if medically needed']
const EXCLUDED = ['Routine checkups and cleanings', 'Conditions that were not stable before the trip', 'Elective or planned treatment', 'Pregnancy close to the due date (varies)', 'High-risk activities named in the policy']
const FAQS = [
  { q: 'What does "emergency only" actually mean?', a: 'Visitor policies pay for sudden, unexpected illness or injury — not routine checkups, dental cleanings or conditions being treated on a planned schedule. If it could wait until home, it is usually not covered.' },
  { q: 'What is a pre-existing condition clause?', a: 'A rule about health conditions that existed before the policy started. Many policies cover a condition only if it has been stable for a set period — often 90 or 180 days. This is the single most important clause to read.' },
  { q: 'What is a deductible?', a: 'The amount you pay yourself on a claim before the insurer pays the rest. A higher deductible lowers the price of the policy — our pricing explainer shows how the levers interact.' },
]

export default function Travel() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Travel', null]]}
        eyebrow="Visitor & travel insurance"
        title="Travel medical cover, "
        em="without the fine-print anxiety"
        tail="."
        lead="Whether family is visiting you or you are heading abroad, travel medical insurance is about one thing: an emergency should not become a financial disaster. Here is how the coverage works, in plain words."
      >
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
          <Button size="lg" withArrow href={R.pricing}>See how pricing works</Button>
          <Button variant="ghost" size="lg" href={R.glossary}>Decode the jargon</Button>
        </div>
      </HrPageHead>

      <section id="who" style={{ padding: '64px 0', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Eyebrow variant="muted">Who this is for</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 0' }}>Three situations, one idea</h2>
          </div>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {WHO.map(([t, d], i) => (
              <Card key={i} pad accentTop>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)', margin: 0 }}>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: 'var(--cream)' }}>
        <div style={hrWrap}>
          <div className="hr-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <Card pad>
              <div className="eyebrow" style={{ marginBottom: 14, color: 'var(--success)' }}>Usually covered</div>
              {COVERED.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '9px 0', fontSize: 14.5, color: 'var(--ink)', alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 2, flexShrink: 0 }}><Icon name="check" size={16} color="var(--success)" /></span>{c}
                </div>
              ))}
            </Card>
            <Card pad>
              <div className="eyebrow" style={{ marginBottom: 14, color: 'var(--error)' }}>Usually excluded</div>
              {EXCLUDED.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '9px 0', fontSize: 14.5, color: 'var(--ink)', alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 2, flexShrink: 0, width: 16, textAlign: 'center', color: 'var(--error)', fontWeight: 800 }}>×</span>{c}
                </div>
              ))}
            </Card>
          </div>
          <p style={{ fontSize: 12.5, fontStyle: 'italic', color: 'var(--ink-muted)', textAlign: 'center', margin: '18px 0 0' }}>General patterns across visitor policies — every policy wording is different. Always read yours.</p>
          <div style={{ maxWidth: 720, margin: '24px auto 0' }}><HrEduNote /></div>
        </div>
      </section>

      <section style={{ padding: '64px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: 24 }}>
            <Eyebrow variant="muted">Common questions</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 0' }}>Travel cover FAQ</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </main>
  )
}
