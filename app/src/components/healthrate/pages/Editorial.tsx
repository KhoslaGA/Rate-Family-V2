/**
 * Editorial desk — ported from author.html. Static E-E-A-T page. Named reviewer
 * slot stays [BYLINE TBD] until a verified, credentialed person is confirmed.
 */
import { Bo, Card, Eyebrow } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

const GATES: [string, string][] = [
  ['Sourced', 'Rules trace to IRCC, provincial ministries or policy wordings. If we cannot source it, we do not say it.'],
  ['Plain-language tested', 'Drafted to a comfortable reading level for second-language readers. Short sentences win.'],
  ['Accuracy reviewed', 'Insurance claims are checked by a licensed professional before publishing.'],
  ['Dated & revisited', 'Every guide carries a review date and gets re-checked when rules move.'],
]

export default function Editorial() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Editorial desk', null]]}
        eyebrow="Who stands behind the words"
        title="Real people, real review — "
        em="or an honest TBD"
        tail="."
        lead="Health content for newcomer families deserves a real reviewer with a real credential. Until each named slot is verified, it stays an entity byline. We never invent an author."
      />
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <Card pad accentTop>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
              <Bo pose="wave" size={90} />
              <div style={{ flex: 1, minWidth: 260 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', margin: '0 0 6px' }}>The HealthRate desk</h2>
                <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>Guides are drafted by the Rate family editorial team, held to a plain-reading standard, and fact-checked against IRCC, provincial and insurer sources before publishing. Insurance-accuracy review is routed to licensed professionals at KLC Group Canada Inc.</p>
              </div>
            </div>
          </Card>

          <div data-byline-tbd style={{ marginTop: 18, background: 'var(--surface-sunk)', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-lg)', padding: 26 }}>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: 'var(--white)', border: '1px dashed var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--ink-faint)', flexShrink: 0 }}>TBD</div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <h3 style={{ fontSize: 19, fontWeight: 800, color: 'var(--ink-muted)', margin: '0 0 6px' }}>Named health reviewer — [BYLINE TBD]</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>This slot is reserved for a verified, credentialed reviewer and stays empty until that person is confirmed on our masthead. On a health-money site, an invented persona would be worse than no byline at all — so guides carry a desk attribution in the meantime.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 44 }}>
            <Eyebrow variant="muted">The gauntlet</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 20px' }}>Every guide clears four gates</h2>
            <div className="rf-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {GATES.map(([t, d], i) => (
                <Card key={i} pad>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 15, marginBottom: 12 }}>{i + 1}</div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, color: 'var(--navy)', margin: '0 0 6px' }}>{t}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.55, margin: 0 }}>{d}</p>
                </Card>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 32 }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
