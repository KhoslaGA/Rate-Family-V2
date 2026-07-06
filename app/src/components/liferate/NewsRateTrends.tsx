'use client'

/**
 * LifeRate bespoke news article (template #10), ported from bespoke/liferate/news-rate-trends-2026.html.
 * LifeRate-only; rendered by /life-insurance/news/rate-trends-2026. News/programmatic pages carry the
 * lighter "reviewed by the editorial desk" line (named bylines are reserved for pillar guides, and
 * stay [BYLINE TBD] until a real reviewer is assigned). Figures illustrative + sourced.
 */
import Link from 'next/link'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 6 6 6-6 6" /></svg>
)

const KEY = [
  'Term-life premiums were broadly flat across major Canadian insurers in H1 2026.',
  'Steady long-term bond yields and stable mortality assumptions kept pricing calm.',
  'For healthy applicants, locking a level term now carries little downside.',
]

export default function NewsRateTrends() {
  return (
    <main>
      <article>
        <section className="lr-art-hero">
          <div className="wrap">
            <div className="lr-crumbs">
              <Link href="/life-insurance">Home</Link><Chevron />
              <Link href="/life-insurance/guides">News</Link><Chevron />
              <span>Rate trends 2026</span>
            </div>
            <span className="lr-cat">News · Rate trends</span>
            <h1 className="lr-art-h1">Canada’s life insurance rates held steady in 2026 — what it means for buyers</h1>
            <p className="lr-art-stand">Term premiums stayed broadly flat across Canadian insurers through the first half of the year. Here’s what’s behind the calm — and why it’s a reasonable moment to lock a rate.</p>
            <div className="lr-artby" data-byline-tbd>
              <span className="rev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>Reviewed by the LifeRate editorial desk</span>
              <span className="sep">·</span><span>Published Jun 24, 2026</span>
              <span className="sep">·</span><span>4 min read</span>
            </div>
          </div>
        </section>

        <div className="lr-news-body">
          <figure className="lr-figure">
            <div className="ph">Rate index · H1 2026</div>
            <figcaption>Illustrative — term-life premium index across the LifeRate carrier panel, Jan–Jun 2026.</figcaption>
          </figure>

          <div className="lr-prose">
            <div className="lr-keyfacts">
              <h4>The short version</h4>
              <ul>{KEY.map((k) => <li key={k}>{k}</li>)}</ul>
            </div>

            <p>If you’ve been putting off comparing life insurance because you assumed rates were climbing with everything else, the first half of 2026 offers some quiet reassurance: for most healthy applicants, term-life pricing barely moved.</p>

            <h2>Why rates stayed flat</h2>
            <p>Life insurance pricing leans heavily on two things — long-term interest rates and mortality assumptions. Both were stable through the period. Insurers price level-term products years ahead, so the day-to-day noise that moves mortgage rates doesn’t ripple through term premiums the same way.</p>
            <p>The practical upshot: the number you’d be quoted today is, for most people, close to what it would have been a year ago. <Link className="inl" href="/life-insurance/quote">Comparing across 21 insurers</Link> still surfaces meaningful spread between carriers, which is where the real savings live — not in market timing.</p>

            <h2>What it means if you’re shopping</h2>
            <p>Two things matter far more than the month you buy in. First, <strong>your age and health</strong> — premiums rise with age and can change if your health does, so waiting rarely helps. Second, <strong>the spread between insurers</strong>, which for identical coverage can differ by a wide margin.</p>
            <p>If you’re healthy and have a clear need — a mortgage, young kids, an income to protect — locking a level term now removes the one variable you actually control. Use the <Link className="inl" href="/life-insurance/calculator">needs calculator</Link> to size it, then compare.</p>

            <div className="lr-softcta">
              <h3>See where rates sit for you</h3>
              <p>Compare illustrative term rates across 21 Canadian insurers — no email wall, no pressure.</p>
              <Link className="btn btn-lg" href="/life-insurance/quote">Compare my rate <Arrow /></Link>
            </div>

            <div className="lr-sources">
              <h3>Sources</h3>
              <ol>
                <li>CompuLife — comparative term-premium data across Canadian insurers, H1 2026.</li>
                <li>Bank of Canada — long-term benchmark bond yields.</li>
                <li>Canadian Life and Health Insurance Association (CLHIA) — industry pricing context.</li>
              </ol>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
