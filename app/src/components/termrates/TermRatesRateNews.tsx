/**
 * TermRates rate-news article, ported from news-rate-decision-2026.html. Static
 * (server). Byline is the desk + [BYLINE TBD]. Illustrative context, not advice.
 */
import Link from 'next/link'

export default function TermRatesRateNews() {
  return (
    <main>
      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ maxWidth: 760, marginInline: 'auto' }}>
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/guides">Rate news</Link><span className="sep">/</span><span>June rate cut</span></div>
          <span className="eyebrow" style={{ marginTop: 12 }}>Rate news · Analysis</span>
          <h1 style={{ fontSize: 'clamp(2rem,3.6vw,2.9rem)', marginTop: 12, maxWidth: '22ch' }}>What the June rate cut does to your renewal.</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', color: 'var(--ink-mute)', fontSize: 'var(--fs-sm)', marginTop: 16 }}>
            <span className="tnum">June 4, 2026</span><span>·</span><span>5 min read</span><span>·</span><span>Bank of Canada</span>
          </div>
          <div data-byline-tbd style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, padding: '16px 0', borderBlock: '1px solid var(--line)' }}>
            <span style={{ width: 38, height: 38, borderRadius: 'var(--r-sm)', background: 'var(--panel)', border: '1px dashed var(--line-2)', display: 'grid', placeItems: 'center', color: 'var(--ink-mute)', fontSize: '.78rem' }}>&mdash;</span>
            <div><b style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink)', display: 'block' }}>By the TermRates rate desk · reviewed by [BYLINE TBD]</b><span style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)' }}>Licensed mortgage professional</span></div>
          </div>

          <div style={{ aspectRatio: '16 / 6', borderRadius: 'var(--r-lg)', background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', margin: '26px 0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: 24 }}>
            <svg viewBox="0 0 400 120" fill="none" preserveAspectRatio="none" style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
              <polyline points="0,30 60,32 120,40 180,55 240,58 300,78 360,86 400,92" stroke="#85A6C9" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="300" cy="78" r="5" fill="#6EE7A8" />
            </svg>
            <span style={{ position: 'absolute', bottom: 16, left: 24, zIndex: 2, color: 'rgba(255,255,255,.7)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>BoC overnight rate, trailing 12 months — latest cut to 2.75%</span>
          </div>

          <article className="tr-prose" style={{ maxWidth: 'none' }}>
            <p style={{ fontSize: '1.2rem' }}>The Bank of Canada lowered its policy rate by 25 basis points this week, bringing the overnight rate to 2.75%. For the roughly 1.2 million Canadian households renewing a mortgage this year, the move changes the arithmetic &mdash; but less dramatically than the headlines suggest.</p>

            <div className="tr-callout" style={{ margin: '24px 0' }}>
              <span className="k">The short version</span>
              <ul style={{ margin: '12px 0 0', paddingLeft: 20 }}>
                <li style={{ marginTop: 8 }}>Variable-rate holders see the cut almost immediately &mdash; prime falls, and either your payment drops or more of it goes to principal.</li>
                <li style={{ marginTop: 8 }}>Fixed rates are set by bond yields, not the overnight rate &mdash; they&apos;d already moved ahead of the announcement.</li>
                <li style={{ marginTop: 8 }}>If you&apos;re renewing off a sub-2% pandemic-era rate, you&apos;re still renewing higher &mdash; the cut softens the jump, it doesn&apos;t erase it.</li>
              </ul>
            </div>

            <h2>Variable holders: the fastest to feel it</h2>
            <p>When the Bank of Canada moves, lenders adjust their prime rate within days. If you hold a variable mortgage, that flows straight through. On a $500,000 balance, a 0.25% cut is roughly $70 a month less in interest &mdash; either your payment falls, or, on a fixed-payment variable, the same payment simply chips away more principal.</p>

            <h2>Fixed rates already priced it in</h2>
            <p>Here&apos;s the part that trips people up: fixed mortgage rates don&apos;t track the overnight rate directly. They follow Government of Canada bond yields, which move on expectations. By the time the Bank actually cuts, fixed rates have usually already adjusted for it.</p>

            <h2>The renewal reality</h2>
            <p>Most borrowers renewing in 2026 signed at rates far below today&apos;s. A cut helps at the margin, but the renewal is still a step up in payment for many. The practical question isn&apos;t &ldquo;should I wait for more cuts&rdquo; &mdash; it&apos;s whether your renewal offer is competitive and whether switching lenders would beat it.</p>
            <blockquote>Renewal offers are rarely a lender&apos;s sharpest rate. The single highest-value move at renewal is to compare the offer against the open market before signing.</blockquote>

            <h2>What to actually do</h2>
            <p>If you&apos;re variable, the cut is good news you don&apos;t have to act on. If you&apos;re renewing, run your offer against live rates and the switch math &mdash; a 0.40% difference on a $450,000 balance is thousands over a term. Our renewal tool does exactly that comparison.</p>

            <div className="tr-callout" style={{ marginTop: 28 }}>
              <span className="k">Put the cut to work</span>
              <p style={{ marginTop: 8, color: 'var(--ink)' }}>Compare your renewal offer against today&apos;s live rates, switch costs included.</p>
              <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link className="btn btn-accent" href="/mortgages/renewal">Check my renewal</Link>
                <Link className="btn btn-ghost" href="/rates">See live rates</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
