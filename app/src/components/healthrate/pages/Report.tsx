/**
 * Education report — ported from report-2026.html. Static. The comprehension gap,
 * shown as reading-level bars. Illustrative analysis by the HealthRate desk.
 */
import { Card } from '../ds'
import { HrEduNote, HrPageHead } from '../parts'
import { R } from '../data'

const BARS: [string, number, string, string][] = [
  ['A policy wording, as published', 14, 'Grade-14+ reading level', 'var(--error)'],
  ['The same clause, plain English', 8, 'Grade-8 reading level', 'var(--warning)'],
  ['Plain English + first language', 5, 'Comfortable reading', 'var(--success)'],
]

export default function Report() {
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Guides', R.guides], ['Education report', null]]}
        eyebrow="HealthRate education report · 2026"
        title="The comprehension gap, "
        em="measured in reading levels"
        tail="."
        lead="Insurance fails people twice: once in jargon, once in a second language. This short report explains why HealthRate publishes the way it does — and what a family should demand from any document they are asked to sign."
      />
      <section style={{ padding: '56px 0', background: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--measure-prose-wide)', margin: '0 auto', padding: '0 24px' }}>
          <Card pad accentTop>
            <div className="eyebrow" style={{ marginBottom: 6 }}>The same sentence, three ways</div>
            <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: '0 0 22px', lineHeight: 1.55 }}>Typical reading level required to understand a pre-existing condition clause, by presentation. Illustrative analysis by the HealthRate desk.</p>
            <div style={{ display: 'grid', gap: 16 }}>
              {BARS.map(([label, grade, note, color], i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, gap: 12, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>{label}</span>
                    <span className="mono" style={{ fontSize: 12.5, color: 'var(--ink-muted)' }}>{note}</span>
                  </div>
                  <div style={{ height: 22, borderRadius: 8, background: 'var(--surface-sunk)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: (grade / 14) * 100 + '%', borderRadius: 8, background: color, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10 }}>
                      <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>Gr. {grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: 11.5, fontStyle: 'italic', color: 'var(--ink-muted)', textAlign: 'center' }}>
              Illustrative example for education only, based on standard readability scoring of typical policy language.
            </div>
          </Card>

          <div className="prose" style={{ marginTop: 40 }}>
            <h2>What the gap does in practice</h2>
            <p>A clause you cannot comfortably read is a clause you cannot act on. Families skip the stability period, discover the exclusion at the hospital, and conclude that insurance itself is a trick. It is not — but the document was never written for them.</p>
            <h2>What we do about it</h2>
            <p>Every HealthRate guide is written at a plain-reading level first, then reviewed for accuracy. Our chrome — navigation, key facts, safety notes — ships in English, French, Punjabi, Hindi and Urdu, with full guide translations rolling out. The <a href={R.languages}>languages page</a> tracks exactly what is translated today, honestly.</p>
            <h2>What to demand from any insurer</h2>
            <p>Ask for the policy wording before paying. Ask which clauses matter most — a good agent names the stability period without being prompted. And if the answer to &ldquo;can you explain that simply?&rdquo; is a worse sentence than the document, keep shopping.</p>
          </div>
          <div style={{ margin: '36px 0 64px' }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
