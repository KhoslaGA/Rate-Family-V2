'use client'

/**
 * TermRates guides + rate-news hub, ported from category.html. Featured pillar +
 * filterable rail (guides / rate news / data reports). Editorial bylines are all
 * [BYLINE TBD] until a real credentialed reviewer is named.
 */
import Link from 'next/link'
import { useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

type Art = { c: string; tag: string; title: string; desc: string; href: string; by: string }
const ARTS: Art[] = [
  { c: 'news', tag: 'Rate news', title: 'What the June rate cut does to your renewal', desc: 'The Bank of Canada moved 25 bps. We translate it into what a renewing borrower actually pays.', href: '/mortgages/news/rate-decision-2026', by: 'TermRates rate desk' },
  { c: 'data', tag: 'Data report', title: 'The 2026 renewal wall, in one chart', desc: 'Over a million mortgages renew this year at higher rates. The payment shock, by region.', href: '/mortgages/report', by: 'TermRates rate desk' },
  { c: 'guide', tag: 'Pillar guide', title: 'Fixed vs variable, decided by math', desc: 'Rate certainty versus expected cost, with the break-even that decides it.', href: '/mortgages/fixed-vs-variable', by: 'Licensed mortgage professional' },
  { c: 'guide', tag: 'Guide', title: 'The stress test, explained without jargon', desc: 'Why lenders qualify you at a higher rate, and the income the home you want really needs.', href: '/mortgages', by: 'Licensed mortgage professional' },
  { c: 'guide', tag: 'Guide', title: 'Refinance or HELOC — which fits?', desc: 'Two ways to tap equity, the costs of each, and when to use one over the other.', href: '/mortgages/refinance', by: 'Licensed mortgage professional' },
  { c: 'guide', tag: 'Local', title: 'Buying in Toronto: the local math', desc: 'Benchmark prices, the double land transfer tax, and the income to qualify in the GTA.', href: '/mortgages/city', by: 'TermRates rate desk' },
]
const FILTERS: [string, string][] = [['all', 'All'], ['guide', 'Guides'], ['news', 'Rate news'], ['data', 'Data reports']]

export default function TermRatesGuidesHub() {
  const [cat, setCat] = useState('all')
  const shown = ARTS.filter((a) => cat === 'all' || a.c === cat)

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><span>Guides &amp; news</span></div>
          <h1>Understand the number before you sign it.</h1>
          <p className="lead">Guides, rate-decision analysis and data reports &mdash; written plainly, reviewed by licensed professionals, and sourced so you can check the work.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap">
          {/* Featured */}
          <Link className="reveal in" href="/mortgages/fixed-vs-variable" style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 'var(--sp-5)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--sh-sm)' }}>
            <div style={{ padding: 'clamp(28px,3.6vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="eyebrow">Featured pillar guide</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,2.6vw,2.2rem)', marginTop: 12 }}>Fixed vs variable, decided by math.</h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 12, maxWidth: '44ch' }}>The real trade-off between rate certainty and expected cost &mdash; with the break-even that actually decides it, plus a calculator to run your own numbers.</p>
              <span className="tr-prod-go" style={{ marginTop: 20 }}>Read the guide <Arrow /></span>
            </div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', minHeight: 240, position: 'relative', overflow: 'hidden' }}>
              <svg viewBox="0 0 300 280" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <polyline points="0,60 60,58 120,70 180,64 240,80 300,72" stroke="#85A6C9" strokeWidth="2.5" fill="none" />
                <polyline points="0,200 60,180 120,160 180,150 240,120 300,100" stroke="#6EE7A8" strokeWidth="2.5" fill="none" strokeDasharray="6 6" />
              </svg>
            </div>
          </Link>

          {/* Filter */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'var(--sp-6)' }}>
            {FILTERS.map(([k, l]) => (
              <button key={k} onClick={() => setCat(k)} type="button" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', padding: '9px 16px', border: '1px solid var(--line-2)', borderRadius: 'var(--r-pill)', cursor: 'pointer', ...(cat === k ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' } : { background: 'var(--paper)', color: 'var(--ink-soft)' }) }}>{l}</button>
            ))}
          </div>

          {/* Rail */}
          <div className="tr-rail" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {shown.map((a) => (
              <Link className="tr-art reveal in" href={a.href} key={a.title}>
                <div className="tr-art-top"><div className="grid-bg" /><span className="tag">{a.tag}</span></div>
                <div className="tr-art-body">
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <div className="tr-byline" data-byline-tbd><span className="av">&mdash;</span><span className="meta"><b>Reviewed by [BYLINE TBD]</b><span>{a.by}</span></span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
