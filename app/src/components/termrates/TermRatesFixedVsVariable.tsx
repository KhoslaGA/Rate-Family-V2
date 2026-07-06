'use client'

/**
 * TermRates pillar guide: fixed vs variable, ported from guide-fixed-vs-variable.html.
 * TOC + editorial prose + a live break-even widget. Byline is [BYLINE TBD] until a
 * real credentialed reviewer is named. Illustrative; not advice.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const TOC = [
  ['#what', 'The core trade-off'],
  ['#spread', 'Reading the spread'],
  ['#breakeven', 'The break-even test'],
  ['#penalty', 'The penalty difference'],
  ['#who', 'Who each suits'],
  ['#bottom', 'The bottom line'],
]
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const pay = (rate: number) => { const i = rate / 100 / 12, n = 25 * 12, P = 500000; return i > 0 ? (P * i) / (1 - Math.pow(1 + i, -n)) : P / n }

export default function TermRatesFixedVsVariable() {
  const [fix, setFix] = useState('4.09')
  const [vr, setVr] = useState('4.95')
  const diff = useMemo(() => pay(num(vr)) - pay(num(fix)), [fix, vr])

  return (
    <main>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/guides">Guides</Link><span className="sep">/</span><span>Fixed vs variable</span></div>
          <span className="eyebrow">Pillar guide · 9 min read</span>
          <h1 style={{ marginTop: 12, maxWidth: '24ch' }}>Fixed vs variable, decided by math &mdash; not by nerves.</h1>
          <p className="lead">Both are defensible choices. The question isn&apos;t which is &ldquo;safer&rdquo; &mdash; it&apos;s what you&apos;re paying for certainty, and whether that price is worth it for your situation.</p>
          <div data-byline-tbd style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
            <span style={{ width: 38, height: 38, borderRadius: 'var(--r-sm)', background: 'var(--panel)', border: '1px dashed var(--line-2)', display: 'grid', placeItems: 'center', color: 'var(--ink-mute)', fontSize: '.8rem' }}>&mdash;</span>
            <div><b style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink)', display: 'block' }}>Reviewed by [BYLINE TBD]</b><span style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)' }}>Licensed mortgage professional · Updated June 2026</span></div>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-7)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 'var(--sp-7)', alignItems: 'start' }}>
          <aside style={{ position: 'sticky', top: 84, fontSize: 'var(--fs-sm)' }} className="tr-hide-mobile">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 12 }}>On this page</div>
            {TOC.map(([h, l]) => <a key={h} href={h} style={{ display: 'block', padding: '7px 0 7px 14px', color: 'var(--ink-soft)', borderLeft: '2px solid var(--line)' }}>{l}</a>)}
          </aside>

          <article className="tr-prose">
            <p style={{ fontSize: '1.2rem', color: 'var(--ink)' }}>A fixed mortgage locks your rate for the whole term. A variable moves with your lender&apos;s prime rate, which tracks the Bank of Canada. That single difference &mdash; certainty versus exposure &mdash; is the entire decision. Everything else is detail.</p>

            <h2 id="what">The core trade-off</h2>
            <p>With a fixed rate you buy insurance against rates rising: your payment and your rate are set, whatever the Bank of Canada does. With a variable rate you accept the risk of increases in exchange for a rate that&apos;s usually lower at the start &mdash; and that falls immediately if the central bank cuts.</p>
            <p>Historically, variable rates have cost borrowers less on average &mdash; but &ldquo;on average&rdquo; is cold comfort in a year when rates climb and your payment jumps. The right question is personal: <strong>can your budget and your nerves handle a payment that moves?</strong></p>

            <h2 id="spread">Reading the spread</h2>
            <p>The &ldquo;spread&rdquo; is the gap between today&apos;s fixed and variable rates. When variable sits well below fixed, you&apos;re being paid to take the risk. When they&apos;re close &mdash; or variable is higher, as happens when cuts are expected &mdash; the case for fixed strengthens because you give up little to lock in.</p>
            <blockquote>A useful frame: the spread is the price of certainty. A 0.90% spread on a $500,000 mortgage is roughly $375 a month you&apos;re paying, up front, to not worry about rate moves.</blockquote>

            <h2 id="breakeven">The break-even test</h2>
            <p>Variable only &ldquo;wins&rdquo; if rates stay low enough, long enough, that the savings beat the fixed premium before any increases catch up. Run it as a break-even: how many rate hikes, and how soon, would erase the head start? Try it below.</p>

            <div className="tr-card" style={{ margin: '28px 0' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', margin: '0 0 4px' }}>Fixed-vs-variable break-even</h4>
              <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-mute)', marginBottom: 18 }}>On a $500,000 mortgage, 25-yr amortization. Illustrative only.</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
                <div className="tr-field"><label htmlFor="w-fix">Fixed rate %</label><input id="w-fix" type="text" inputMode="decimal" value={fix} onChange={(e) => setFix(e.target.value)} /></div>
                <div className="tr-field"><label htmlFor="w-var">Starting variable %</label><input id="w-var" type="text" inputMode="decimal" value={vr} onChange={(e) => setVr(e.target.value)} /></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--panel-2)', borderRadius: 'var(--r-md)', padding: '16px 20px' }}>
                <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)' }}>{diff >= 0 ? 'Fixed is currently cheaper by' : 'Variable starts cheaper by'}</span>
                <span className="tnum" style={{ fontWeight: 600, fontSize: '1.5rem', color: diff >= 0 ? 'var(--up)' : 'var(--accent-ink)' }}>${Math.round(Math.abs(diff)).toLocaleString('en-CA')} / mo</span>
              </div>
              <p className="tr-note">When variable starts above fixed, you&apos;d need cuts before variable pulls ahead. When variable starts below, that gap is your cushion against future hikes.</p>
            </div>

            <h2 id="penalty">The penalty difference few mention</h2>
            <p>If you break your mortgage early, the penalty is usually far larger on a fixed than a variable. Fixed penalties use an interest-rate differential (IRD) that can run to many thousands; most variable penalties are simply three months&apos; interest. If there&apos;s any chance you&apos;ll move, sell, or refinance mid-term, that asymmetry is a real point in variable&apos;s favour.</p>

            <h2 id="who">Who each tends to suit</h2>
            <ul>
              <li><strong>Fixed</strong> &mdash; tight budget with no room for a payment increase, a first mortgage where certainty lowers stress, or a plan to hold the full term.</li>
              <li><strong>Variable</strong> &mdash; financial cushion to absorb increases, a view that rates will hold or fall, or a real chance of breaking early.</li>
              <li><strong>A hybrid</strong> &mdash; some lenders split your mortgage into fixed and variable portions, splitting the difference deliberately.</li>
            </ul>

            <h2 id="bottom">The bottom line</h2>
            <p>Neither choice is a mistake if it&apos;s made on purpose. Price the spread, run the break-even, weigh the penalty risk against your plans &mdash; then choose. If you&apos;d like a second set of eyes, a licensed broker can pressure-test the decision against your exact file and today&apos;s live rates.</p>

            <div className="tr-callout" style={{ marginTop: 28 }}>
              <span className="k">Next step</span>
              <p style={{ marginTop: 8, color: 'var(--ink)' }}>See where fixed and variable actually sit for your scenario, side by side.</p>
              <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link className="btn btn-accent" href="/mortgages/quote">Get my personalized rate</Link>
                <Link className="btn btn-ghost" href="/rates">Compare the full table</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
