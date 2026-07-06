/**
 * Newcomer health in Toronto — ported from city-newcomer.html. Static city guide:
 * where to apply, what things cost before coverage, help in your language.
 */
import { Bo, Button, Card } from '../ds'
import { HrEduNote, HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

const STOPS: [string, string][] = [
  ['Apply for OHIP', 'ServiceOntario centres handle health-card applications. Bring your immigration documents and proof of a Toronto address — a lease or utility bill works.'],
  ['Before the card arrives', 'Community Health Centres (CHCs) serve people without coverage, on a sliding scale or free. Walk-in clinics see anyone — ask the visit price up front.'],
  ['Help in your language', 'Toronto settlement agencies offer health-system navigation in dozens of languages, free. Your library card is also a gateway — librarians know the map.'],
  ['If there is a coverage gap', 'Temporary visitor-style medical insurance can bridge the wait. Read what it covers before buying — emergencies, not checkups.'],
]

export default function Toronto() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Newcomers', R.newcomers], ['Toronto', null]]}
        eyebrow="City guide · Toronto"
        title="Newcomer health in Toronto, "
        em="street level"
        tail="."
        lead="The national rules are one thing; the city you actually live in is another. Here is the Toronto version — where to go, what it costs before coverage starts, and who helps in your language."
      >
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
          <Button size="lg" withArrow href={R.ohipWait}>Plan your coverage gap</Button>
        </div>
      </HrPageHead>

      <section style={{ padding: '64px 0 72px', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div className="rf-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {STOPS.map(([t, d], i) => (
              <Card key={i} pad accentTop>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 17, marginBottom: 14 }}>{i + 1}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)', margin: 0 }}>{d}</p>
              </Card>
            ))}
          </div>
          <p style={{ fontSize: 12.5, fontStyle: 'italic', color: 'var(--ink-muted)', margin: '18px 0 0', textAlign: 'center' }}>
            General orientation, not an official directory. Locations, hours and programs change — confirm with the organization before travelling across the city.
          </p>
          <div style={{ maxWidth: 720, margin: '26px auto 0' }}><HrEduNote /></div>
          <Card pad style={{ marginTop: 32, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              <Bo pose="wave" size={64} />
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', margin: '0 0 4px' }}>More cities coming</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.55 }}>Vancouver, Calgary, Montréal and Brampton guides are in the works. Tell us where you landed and we will prioritize it.</p>
              </div>
              <Button variant="outline" withArrow href={R.contact}>Request a city</Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
