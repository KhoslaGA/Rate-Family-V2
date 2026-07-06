'use client'

/**
 * LifeRate bespoke data report (template #14), ported from bespoke/liferate/report-cost-2026.html.
 * LifeRate-only; rendered by /life-insurance/cost-report. Illustrative medians from comparative
 * rate data — labelled, sourced, not a quote. Byline stays [BYLINE TBD] until a real reviewer.
 */
import Link from 'next/link'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 6 6 6-6 6" /></svg>
)

const KF: [string, string][] = [
  ['$32', 'Median monthly for a 35-year-old, $500k, 20-year term'],
  ['~8%', 'Average premium rise per year of age, 30s–40s'],
  ['2.4×', 'What smokers pay vs non-smokers, like-for-like'],
]

const BARS: [string, number, string][] = [
  ['Age 25', 34, '$22'],
  ['Age 30', 42, '$27'],
  ['Age 35', 50, '$32'],
  ['Age 40', 66, '$43'],
  ['Age 45', 92, '$61'],
  ['Age 50', 100, '$92'],
]

export default function CostReport() {
  return (
    <main>
      <article>
        <section className="lr-rp-hero">
          <div className="wrap">
            <div className="lr-crumbs">
              <Link href="/life-insurance">Home</Link><Chevron />
              <Link href="/life-insurance/guides">Data &amp; reports</Link><Chevron />
              <span>Cost of life insurance 2026</span>
            </div>
            <span className="cat">Data report · 2026</span>
            <h1>The cost of life insurance in Canada, 2026</h1>
            <p className="stand">We analysed illustrative term-life premiums across 21 Canadian insurers to show what coverage actually costs — and how much waiting really adds. The short version: it’s cheaper than most people guess, and every year of delay has a price.</p>
            <div className="lr-rp-by" data-byline-tbd>
              <span className="rev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>Reviewed by [BYLINE TBD] · LLQP-licensed</span>
              <span className="sep">·</span><span>Published Jun 2026</span>
              <span className="sep">·</span><span>Data-backed report</span>
            </div>
          </div>
        </section>

        <div className="lr-rp-body">
          <div className="lr-kf">
            {KF.map(([n, l]) => (
              <div className="lr-kf-card" key={l}><div className="n">{n}</div><div className="l">{l}</div></div>
            ))}
          </div>

          <div className="lr-prose">
            <p>Life insurance has a reputation for being expensive. For healthy adults buying term coverage, the data tells a different story — and it also shows, in dollars, why “I’ll get to it next year” is the costliest plan of all.</p>

            <h2>What term costs by age</h2>
            <p>The single biggest driver of your premium is your age when you buy. Here’s the illustrative median monthly premium for $500,000 of 20-year term coverage, healthy non-smoker, across our carrier panel:</p>

            <div className="lr-chart">
              <h4>Median monthly premium by age</h4>
              <div className="cap">$500,000 · 20-year term · healthy non-smoker · illustrative</div>
              <div className="lr-bars">
                {BARS.map(([age, w, val]) => (
                  <div className="lr-bar-row" key={age}>
                    <span className="age">{age}</span>
                    <div className="lr-bar-track"><div className="lr-bar-fill" style={{ width: `${w}%` }} /></div>
                    <span className="val">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>The curve is the point: premiums are near-flat through the late twenties and thirties, then steepen. Between 35 and 45 the median roughly doubles. Because a level term locks your rate for its whole duration, the age you buy at is the age you keep paying at.</p>

            <h2>The cost of waiting a year</h2>
            <p>For a 35-year-old, waiting until 36 adds only a few dollars a month — but that increase is locked in for the entire term. Over a 20-year policy, a single year of delay can quietly cost hundreds of dollars in total, for identical coverage. Waiting from 40 to 45 costs far more.</p>

            <h2>What moves your rate most</h2>
            <p>After age, two factors dominate: <strong>smoking status</strong> (smokers pay roughly 2.4× non-smokers in our data) and <strong>coverage amount</strong> (which scales close to linearly). Sex and term length matter, but less than most people expect. <Link className="inl" href="/life-insurance/quote">Comparing across all 21 insurers</Link> typically surfaces more spread than any single-carrier quote — which is where real savings live.</p>

            <div className="lr-rp-method"><b>Methodology.</b> Figures are illustrative medians derived from comparative term-life premium data across a panel of 21 Canadian insurers, for standard-health applicants, as of June 2026. They are not quotes; individual premiums depend on underwriting and vary by province. Rounded for readability.</div>

            <div className="lr-softcta">
              <h3>See your own number</h3>
              <p>Size your coverage in a minute, then compare illustrative rates across 21 Canadian insurers.</p>
              <Link className="btn btn-lg" href="/life-insurance/calculator">Open the calculator <Arrow /></Link>
            </div>

            <div className="lr-sources">
              <h3>Sources</h3>
              <ol>
                <li>CompuLife — comparative term-premium data across the LifeRate carrier panel, June 2026.</li>
                <li>Canadian Life and Health Insurance Association (CLHIA) — industry context on pricing factors.</li>
                <li>Financial Services Regulatory Authority of Ontario (FSRA) — regulatory framework.</li>
              </ol>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
