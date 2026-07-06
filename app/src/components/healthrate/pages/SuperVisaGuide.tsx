/**
 * Super Visa pillar guide — ported from guide-super-visa.html. Static long-form
 * article; byline is the desk + [BYLINE TBD]. Education only, sourced to IRCC.
 */
import { Badge, Button, Card, Eyebrow, EntityDisclosure, FaqAccordion } from '../ds'
import { HrByline } from '../parts'
import { R } from '../data'

const FAQS = [
  { q: 'Can we pay monthly instead of all at once?', a: 'IRCC has allowed insurers to offer instalment options in recent years. Not every insurer does, and instalment plans can carry fees or cancellation rules — ask directly, and confirm the current IRCC position on canada.ca.' },
  { q: 'What if the visa is refused?', a: 'Policies sold for Super Visa applications are normally refundable in full if you show the refusal letter, sometimes minus an administration fee. Find the refund clause before buying — our checklist shows where it usually lives.' },
  { q: 'Is a bigger deductible a good idea?', a: 'A deductible trades a lower premium for more out-of-pocket cost if something happens. For an older visitor, a large deductible can sting — the right answer depends on the family budget, not a universal rule.' },
  { q: 'Does the policy renew if they stay a second year?', a: 'The Super Visa allows long stays, and coverage must remain valid. Most families buy year by year. Diarize the expiry date — a lapse can matter at re-entry.' },
]

export default function SuperVisaGuide() {
  return (
    <article style={{ background: 'var(--cream)', padding: '56px 24px 0' }}>
      <div style={{ maxWidth: 'var(--measure-prose)', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
          <Badge tone="accent">Pillar guide</Badge>
          <Badge tone="neutral">10 min read</Badge>
          <Badge tone="neutral">Super Visa</Badge>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.4vw, 44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--ink-strong)', margin: '0 0 18px' }}>
          Super Visa insurance, explained from the first dollar
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--ink-muted)', margin: '0 0 26px' }}>
          Everything a family needs to understand before buying the medical coverage that makes a parent&apos;s Super Visa possible — written to be read slowly, in a second language, without a dictionary.
        </p>
        <div style={{ paddingBottom: 26, marginBottom: 32, borderBottom: '1px solid var(--border)' }}>
          <HrByline date="Reviewed June 2026" />
        </div>

        <div className="prose">
          <p>The Super Visa is generous: it lets parents and grandparents of Canadian citizens and permanent residents visit for years at a time instead of months. In exchange, the government asks for one guarantee — that a medical emergency during the visit will not fall on the public health system. That guarantee is the insurance policy.</p>
          <h2>The three numbers that matter</h2>
          <p>Every qualifying policy has to clear the same bar: at least <strong>$100,000</strong> of emergency medical coverage, valid for at least <strong>one year</strong> from the day your family member enters Canada, covering <strong>health care, hospitalization and repatriation</strong>. The policy must come from a Canadian insurer or a foreign provider on IRCC&apos;s approved list. Anything less and the application fails — regardless of how good the policy is otherwise.</p>
          <h2>What actually drives the cost</h2>
          <p>Age is the biggest lever — premiums step up in bands, and the jump past 70 is real. After that: the coverage amount, the deductible your family is willing to carry, and — most importantly — how the policy treats pre-existing conditions. A policy that covers a stable heart condition is worth more than one that quietly excludes it. Our <a href={R.pricing}>pricing explainer</a> lets you flip each lever and watch the effect.</p>
        </div>

        <figure style={{ margin: '36px 0', padding: '24px 28px', background: 'var(--white)', borderLeft: '3px solid var(--accent)', borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontFamily: 'var(--font-wordmark)', fontStyle: 'italic', fontSize: 24, lineHeight: 1.4, color: 'var(--navy)', margin: 0 }}>
            &ldquo;The cheapest policy that fails at the hospital is the most expensive thing a family can buy.&rdquo;
          </p>
        </figure>

        <div className="prose">
          <h2>The clause families miss</h2>
          <p>Pre-existing condition stability. Most policies only cover a condition that has been &ldquo;stable&rdquo; — same medication, same dose, no new symptoms — for a set period before the policy starts, commonly 90 or 180 days. If your mother&apos;s blood pressure medication changed last month, that detail decides whether her most likely claim is covered. Read this clause before comparing prices; it is the difference between real coverage and expensive paper.</p>
          <h2>Refunds, changes, and real life</h2>
          <p>Good policies bend around real life: the start date moves if the flight does, the premium comes back (sometimes minus a fee) if the visa is refused, and unused months can be refundable if your parent goes home early with no claims. None of this is automatic — it lives in the policy wording, which is why our <a href={R.checklist}>checklist</a> makes you find each clause before anyone pays.</p>
          <h2>Where a licensed human fits</h2>
          <p>HealthRate explains; we do not sell. When your family is ready to buy, talk to a licensed insurance professional or go to insurers directly — and arrive with the checklist done. Ten minutes of preparation turns the sales conversation into a confirmation exercise.</p>
        </div>

        <div style={{ margin: '40px 0 8px' }}>
          <Eyebrow variant="muted">Common questions</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 8px' }}>Super Visa guide FAQ</h2>
        </div>
        <FaqAccordion items={FAQS} />

        <Card pad accentTop style={{ margin: '40px 0' }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)', margin: '0 0 6px' }}>Put it into practice</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.55 }}>Open the interactive checklist and walk through the eight clauses with a real policy wording.</p>
            </div>
            <Button size="lg" withArrow href={R.checklist}>Open the checklist</Button>
          </div>
        </Card>

        <div style={{ padding: '28px 0 56px', borderTop: '1px solid var(--border)' }}>
          <EntityDisclosure site="healthrate" />
        </div>
      </div>
    </article>
  )
}
