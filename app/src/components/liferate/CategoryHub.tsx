'use client'

/**
 * LifeRate bespoke guides/category hub (template #13), ported from bespoke/liferate/category.html.
 * LifeRate-only; rendered by /life-insurance/guides. Filterable index of LifeRate guides & tools,
 * all linking into LifeRate-owned routes. Reviewed guides carry [BYLINE TBD] on the articles.
 */
import Link from 'next/link'
import { useState } from 'react'
import Bo from './Bo'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

const FILTERS: [string, string][] = [
  ['all', 'All'],
  ['choosing', 'Choosing coverage'],
  ['cost', 'Cost & rates'],
  ['how', 'How it works'],
  ['news', 'News'],
]

type Card = { href: string; cats: string; tag: string; title: string; body: string; read: string }

const CARDS: Card[] = [
  { href: '/life-insurance/term-vs-permanent', cats: 'choosing', tag: 'Choosing', title: 'Term vs permanent life insurance', body: 'The real trade-off in plain terms.', read: 'Pillar guide · 9 min' },
  { href: '/life-insurance/calculator', cats: 'how', tag: 'How it works', title: 'How much life insurance do you need?', body: 'A grounded, four-number method.', read: 'Guide · calculator' },
  { href: '/life-insurance/critical-illness', cats: 'choosing', tag: 'Choosing', title: 'What critical-illness cover pays for', body: 'Conditions, waiting periods, and how it pairs with life.', read: 'Guide · 6 min' },
  { href: '/life-insurance/news/rate-trends-2026', cats: 'news cost', tag: 'News', title: 'Canada’s life rates held steady in 2026', body: 'What flat premiums mean for buyers.', read: 'News · 4 min' },
  { href: '/life-insurance/convert', cats: 'how', tag: 'How it works', title: 'Can you convert a term policy later?', body: 'How conversion privileges work, and why they matter.', read: 'Tool · 5 min' },
  { href: '/life-insurance/compare', cats: 'cost', tag: 'Cost & rates', title: 'What life insurance actually costs', body: 'Illustrative premiums and what moves them.', read: 'Table · 5 min' },
]

export default function CategoryHub() {
  const [cat, setCat] = useState('all')
  const shown = CARDS.filter((c) => cat === 'all' || c.cats.includes(cat))

  return (
    <main>
      <section className="section">
        <div className="wrap">
          <div className="lr-hub-head">
            <span className="eyebrow center">Guides &amp; resources</span>
            <h1>Everything we’ve written about life insurance.</h1>
            <p className="lead">Plain-English guides, reviewed by a licensed advisor. Filter by what you’re trying to figure out.</p>
          </div>
          <div className="lr-filters">
            {FILTERS.map(([k, label]) => (
              <button key={k} className={`lr-filter${cat === k ? ' on' : ''}`} type="button" onClick={() => setCat(k)}>{label}</button>
            ))}
          </div>

          <Link className="lr-feat" href="/life-insurance/term-vs-permanent">
            <div className="lr-feat-art"><Bo pose="idle" className="bo" /></div>
            <div className="lr-feat-body">
              <span className="tag">Featured pillar · Choosing coverage</span>
              <h2>Term vs permanent life insurance: the honest comparison</h2>
              <p>The one real difference, what each costs, and a plain way to tell which fits the life you’re protecting.</p>
              <span className="go">Read the guide <Arrow /></span>
            </div>
          </Link>

          <div className="lr-hub-grid">
            {shown.map((c) => (
              <Link className="lr-hub-card" href={c.href} key={c.title}>
                <div className="lr-hub-top"><span className="tag">{c.tag}</span></div>
                <div className="lr-hub-b"><h3>{c.title}</h3><p>{c.body}</p><span className="read">{c.read}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
