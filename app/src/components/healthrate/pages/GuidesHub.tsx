'use client'

/**
 * Guides hub — ported from category.html. Filterable shelf of every guide, tool
 * and report. Each card stands alone and never ends in a sales pitch.
 */
import { useState } from 'react'
import { Badge, Card, Icon } from '../ds'
import { HrEduNote, HrPageHead, hrWrap } from '../parts'
import { R } from '../data'

type Guide = { c: string; tag: string; title: string; desc: string; href: string }
const ALL: Guide[] = [
  { c: 'supervisa', tag: 'PILLAR', title: 'Super Visa insurance, explained', desc: 'The full guide — rules, cost levers, refunds, and the questions to ask.', href: R.superVisaGuide },
  { c: 'supervisa', tag: 'TOOL', title: 'Coverage checklist', desc: 'Eight boxes to tick with the policy wording open, before anyone pays.', href: R.checklist },
  { c: 'supervisa', tag: 'UPDATE', title: 'Buying from an approved foreign insurer', desc: 'The 2022 rule change and the two checks that come with it.', href: R.news },
  { c: 'newcomers', tag: 'GUIDE', title: 'OHIP waiting period', desc: 'How coverage starts in Ontario and how families plan a gap.', href: R.ohipWait },
  { c: 'newcomers', tag: 'GUIDE', title: 'Your first months in Canada', desc: 'Provincial coverage, waiting periods and bridging — the calm version.', href: R.newcomers },
  { c: 'newcomers', tag: 'CITY', title: 'Newcomer health in Toronto', desc: 'Where to apply, what things cost before coverage, help in your language.', href: R.toronto },
  { c: 'travel', tag: 'GUIDE', title: 'Visitor & travel cover', desc: 'What travel medical insurance does, excludes, and how to read one.', href: R.travel },
  { c: 'travel', tag: 'TOOL', title: 'How pricing works', desc: 'Flip the five levers and watch a relative index move. No quotes.', href: R.pricing },
  { c: 'reports', tag: 'REPORT', title: 'The comprehension gap', desc: 'Why we publish in five languages — and what to demand from documents.', href: R.report },
  { c: 'reports', tag: 'REFERENCE', title: 'Glossary', desc: 'The words on every policy, defined for second-language readers.', href: R.glossary },
]
const CATS: [string, string][] = [['all', 'All'], ['supervisa', 'Super Visa'], ['newcomers', 'Newcomers'], ['travel', 'Travel'], ['reports', 'Reports & reference']]

export default function GuidesHub() {
  const [cat, setCat] = useState('all')
  const shown = ALL.filter((g) => cat === 'all' || g.c === cat)
  return (
    <main>
      <HrPageHead
        crumbs={[['Home', R.home], ['Guides', null]]}
        eyebrow="Health insurance 101"
        title="Every guide, "
        em="one calm shelf"
        tail="."
        lead="Start anywhere. Each guide stands alone, links to the next step, and never ends in a sales pitch."
      />
      <section style={{ padding: '48px 0 72px', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {CATS.map(([k, label]) => {
              const on = cat === k
              return (
                <button key={k} type="button" onClick={() => setCat(k)} style={{ padding: '9px 18px', borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13.5, border: on ? '1.5px solid var(--accent)' : '1px solid var(--border-strong)', background: on ? 'var(--accent-soft)' : 'var(--white)', color: on ? 'var(--accent)' : 'var(--ink-muted)', transition: 'all .15s ease-out' }}>{label}</button>
              )
            })}
          </div>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {shown.map((g, i) => (
              <Card key={g.href + i} hover accentTop pad as="a" href={g.href} style={{ textDecoration: 'none', display: 'block' }}>
                <Badge tone={g.tag === 'UPDATE' ? 'soon' : 'accent'}>{g.tag}</Badge>
                <h3 style={{ fontSize: 18.5, fontWeight: 700, color: 'var(--navy)', margin: '14px 0 8px', lineHeight: 1.3 }}>{g.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-muted)', margin: '0 0 14px' }}>{g.desc}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 800, color: 'var(--accent)' }}>Read the guide <Icon name="arrowRight" size={14} color="var(--accent)" /></span>
              </Card>
            ))}
          </div>
          <div style={{ maxWidth: 720, margin: '30px auto 0' }}><HrEduNote /></div>
        </div>
      </section>
    </main>
  )
}
