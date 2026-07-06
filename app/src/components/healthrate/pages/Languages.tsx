/**
 * Languages — ported from languages.html. The five family locales tracked
 * honestly, with a working switcher. No pretend buttons.
 */
import { Badge, Card, LanguageSwitcher } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

const STATUS: [string, string, string, 'live' | 'soon'][] = [
  ['English', 'EN', 'Everything', 'live'],
  ['Français', 'FR', 'Navigation, homepage & key notices', 'live'],
  ['ਪੰਜਾਬੀ (Punjabi)', 'PA', 'Language notices today — guides in progress', 'soon'],
  ['हिन्दी (Hindi)', 'HI', 'Language notices today — guides in progress', 'soon'],
  ['اردو (Urdu)', 'UR', 'Language notices today — guides in progress', 'soon'],
]

export default function Languages() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Languages', null]]}
        eyebrow="Read in your language"
        title="Five languages, "
        em="tracked honestly"
        tail="."
        lead="Insurance is hard enough in your first language. Switch the site below — and see exactly what is translated today, with no pretending."
      >
        <div style={{ marginTop: 26 }}><LanguageSwitcher /></div>
      </HrPageHead>
      <section style={{ padding: '56px 0 72px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gap: 12 }}>
            {STATUS.map(([name, code, scope, tone], i) => (
              <Card key={i} pad>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{code}</div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontWeight: 800, fontSize: 16.5, color: 'var(--navy)' }}>{name}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink-muted)' }}>{scope}</div>
                  </div>
                  <Badge tone={tone === 'live' ? 'live' : 'soon'}>{tone === 'live' ? 'LIVE' : 'IN PROGRESS'}</Badge>
                </div>
              </Card>
            ))}
          </div>
          <div className="prose" style={{ marginTop: 36 }}>
            <h2>Why the honest tracker</h2>
            <p>Nothing erodes trust faster than a language button that leads to English anyway. So we publish the real status: chrome and key safety notices ship in all five languages first, then full guides roll out — Super Visa content leads, because that is where second-language readers carry the highest stakes.</p>
            <p>Want a language prioritized? <a href={R.contact}>Tell us.</a> Requests genuinely move the queue.</p>
          </div>
          <div style={{ marginTop: 28 }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
