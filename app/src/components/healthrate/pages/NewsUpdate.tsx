/**
 * News update — ported from news-update-2026.html. Static. The 2022 approved
 * foreign-insurer rule and the checks it adds. Byline is desk + [BYLINE TBD].
 */
import { Badge, EntityDisclosure } from '../ds'
import { HrByline, HrEduNote } from '../parts'
import { R } from '../data'

export default function NewsUpdate() {
  return (
    <article style={{ background: 'var(--cream)', padding: '56px 24px 0' }}>
      <div style={{ maxWidth: 'var(--measure-prose)', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
          <Badge tone="soon">Update</Badge>
          <Badge tone="neutral">4 min read</Badge>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 900, lineHeight: 1.12, letterSpacing: '-.02em', color: 'var(--ink-strong)', margin: '0 0 16px' }}>
          Buying Super Visa insurance from outside Canada: how the approved-insurer rule works
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-muted)', margin: '0 0 24px' }}>
          Families used to have exactly one option: a Canadian insurer. Since 2022, IRCC also accepts policies from foreign insurers it has specifically approved. Here is what that changes — and the two checks to do before anyone buys abroad.
        </p>
        <div style={{ paddingBottom: 24, marginBottom: 30, borderBottom: '1px solid var(--border)' }}>
          <HrByline date="Published 18 June 2026" />
        </div>
        <div className="prose">
          <h2>What changed</h2>
          <p>The Super Visa rules once required coverage from a Canadian insurance company, full stop. IRCC&apos;s 2022 update opened the door to foreign insurers — but only those on a list the government maintains. A policy from an insurer not on that list, however solid, does not qualify.</p>
          <h2>Check one: the list, on the day you buy</h2>
          <p>The approved list can change. The only version that matters is the one on canada.ca on the day the policy is purchased. Screenshot it with the date visible and keep it with the application — if a border officer asks, the family has the receipt.</p>
          <h2>Check two: the same three requirements</h2>
          <p>Approved insurer or not, the policy itself still has to clear the standard bar — $100,000 minimum, one year of validity, and coverage for health care, hospitalization and repatriation. A foreign policy that caps hospital coverage below the threshold fails exactly the way a Canadian one would.</p>
          <h2>Our plain-English take</h2>
          <p>Buying from home can be more comfortable — familiar language, familiar company, sometimes familiar pricing. It adds one obligation: proving the insurer is approved. If that check feels uncertain, a Canadian policy removes the question entirely. Either way, the <a href={R.checklist}>coverage checklist</a> applies unchanged.</p>
        </div>
        <div style={{ margin: '36px 0' }}><HrEduNote /></div>
        <div style={{ padding: '24px 0 56px', borderTop: '1px solid var(--border)' }}>
          <EntityDisclosure site="healthrate" />
        </div>
      </div>
    </article>
  )
}
