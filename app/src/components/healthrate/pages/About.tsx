/**
 * About — ported from about.html. Static. What HealthRate is (and is not), and
 * the family it belongs to. Entity disclosure stated in the footer, not boasted.
 */
import { Card } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

const PRINCIPLES: [string, string][] = [
  ['Plain English first', 'Short sentences. Defined words. No jargon left unexplained.'],
  ['Education only', 'No quotes, no sales, no pressure — here or anywhere on this site.'],
  ['Honest about limits', 'Rules change. We date our claims and tell you where to confirm.'],
]

export default function About() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['About', null]]}
        eyebrow="The welcoming one"
        title="Built for the family member "
        em="doing the explaining"
        tail="."
        lead="Every newcomer family has one — the person who reads the documents, translates the clauses, and carries the worry. HealthRate exists to make that job lighter."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <div className="prose">
            <h2>What we are</h2>
            <p>HealthRate is an education site about health-adjacent insurance in Canada — Super Visa coverage, newcomer health gaps, and travel medical policies. We write in plain English at a pace comfortable for second-language readers, and we are building the same content in French, Punjabi, Hindi and Urdu.</p>
            <h2>What we are not</h2>
            <p>We are not a broker, an agent, or a quote engine. Nothing on this site sells insurance, and no button here starts a purchase. That is a deliberate phase-one choice: education first, earned trust before anything else. When you are ready to buy, you will deal with insurers or licensed professionals directly — better prepared than most of their customers.</p>
            <h2>The family we belong to</h2>
            <p>HealthRate is one of four sibling sites — with TopRates, TermRates and LifeRate — sharing one design, one plain-English standard, and one compliance bar. Trust earned on one site is meant to transfer to the others. The family is operated by Webhub4u Inc.; where sibling sites make insurance referrals, those route to KLC Group Canada Inc., an FSRA-licensed brokerage.</p>
          </div>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 36 }}>
            {PRINCIPLES.map(([t, d], i) => (
              <Card key={i} pad accentTop>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'var(--navy)', margin: '0 0 6px' }}>{t}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </Card>
            ))}
          </div>
          <div style={{ marginTop: 32 }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
