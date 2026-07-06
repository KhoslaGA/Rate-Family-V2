/**
 * Newcomers landing — ported from newcomers.html. Static. How provincial coverage
 * begins, the waiting period, bridging the gap, and a calm first-90-days checklist.
 */
import { Bo, Button, Card, Eyebrow, Icon } from '../ds'
import { HrEduNote, HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

const PARTS: [string, string, string, string][] = [
  ['Provincial coverage', 'Every province runs public health insurance — in Ontario it is called OHIP. Once you are covered, most doctor and hospital care is paid for.', R.ohipWait, 'How OHIP starts'],
  ['The waiting period', 'Some provinces have historically made new residents wait — in Ontario, up to 3 months. Rules change; the planner shows how to check yours and plan the gap.', R.ohipWait, 'Open the planner'],
  ['Bridging the gap', 'Families often use temporary visitor-style medical insurance for the uncovered weeks. We explain what that coverage does and does not include.', R.travel, 'What bridge cover does'],
]
const CHECKS = [
  'Apply for your provincial health card as soon as you have an address — do not wait.',
  'Ask when your coverage actually starts, and write the date down.',
  'If there is a gap, read what temporary medical cover includes before you buy anything.',
  'Register with a family doctor or clinic early — waits for a first appointment can be long.',
  'Keep every receipt from the gap period — some costs are claimable later.',
]

export default function Newcomers() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Newcomers', null]]}
        eyebrow="Newcomer health coverage"
        title="Your first months in Canada, "
        em="covered calmly"
        tail="."
        lead="Provincial health coverage is excellent — but it does not always start the day you land. This page explains how coverage begins, what a waiting period means, and how families bridge the gap without panic."
      >
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
          <Button size="lg" withArrow href={R.ohipWait}>Plan around the waiting period</Button>
          <Button variant="ghost" size="lg" href={R.glossary}>Learn the words first</Button>
        </div>
      </HrPageHead>

      <section style={{ padding: '64px 0', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Eyebrow variant="muted">The three-part picture</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 0' }}>How health coverage works when you arrive</h2>
          </div>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {PARTS.map(([t, d, href, cta], i) => (
              <Card key={i} pad hover accentTop as="a" href={href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 18, marginBottom: 16 }}>{i + 1}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)', margin: '0 0 14px' }}>{d}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 800, color: 'var(--accent)' }}>{cta} <Icon name="arrowRight" size={14} color="var(--accent)" /></span>
              </Card>
            ))}
          </div>
          <div style={{ maxWidth: 720, margin: '28px auto 0' }}><HrEduNote /></div>
        </div>
      </section>

      <section style={{ padding: '64px 0 72px', background: 'var(--cream)' }}>
        <div style={hrWrap}>
          <div className="hr-2col" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 40, alignItems: 'center' }}>
            <div>
              <Eyebrow variant="muted">Your first 3 months</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 14px' }}>A calm checklist for the first 90 days</h2>
              <div style={{ display: 'grid', gap: 10 }}>
                {CHECKS.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: 12, padding: '13px 16px', fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink)' }}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}><Icon name="check" size={16} color="var(--accent)" /></span>{c}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Bo pose="wave" size={180} />
              <Card pad style={{ marginTop: 8 }}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>In your city</div>
                <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', lineHeight: 1.6, margin: '0 0 14px' }}>Settling in Toronto? We collected the local version — where to apply, community health centres, and language help.</p>
                <Button variant="outline" withArrow href={R.toronto}>Newcomers in Toronto</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
