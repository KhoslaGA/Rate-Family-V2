'use client'

/**
 * TermRates bespoke homepage (template #3), ported from the design's index.html.
 * Rendered by app/page.tsx when x-site === 'termrates'. Styling in
 * app/src/styles/termrates.css (scoped under html[data-site="termrates"]).
 *
 * Interactive: tabbed live-rate board, marquee ticker (list rendered twice),
 * scroll-reveal. All rates are illustrative — no "lowest rate" claim is made.
 * Editorial bylines stay [BYLINE TBD] until a real credentialed reviewer lands.
 */
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

type Row = { lg: string; ln: string; lt: string; rate: string; term: string }
const BOARD: Record<string, Row[]> = {
  '5f': [
    { lg: 'NB', ln: 'Nesto', lt: 'Digital lender', rate: '4.09', term: '5yr fix' },
    { lg: 'TD', ln: 'TD Bank', lt: 'Big Six', rate: '4.79', term: '5yr fix' },
    { lg: 'RM', ln: 'RBC', lt: 'Big Six', rate: '4.84', term: '5yr fix' },
    { lg: 'MC', ln: 'MCAP', lt: 'Broker channel', rate: '4.19', term: '5yr fix' },
  ],
  '5v': [
    { lg: 'NB', ln: 'Nesto', lt: 'Digital lender', rate: '4.95', term: '5yr var' },
    { lg: 'SC', ln: 'Scotiabank', lt: 'Big Six', rate: '5.35', term: '5yr var' },
    { lg: 'FC', ln: 'First National', lt: 'Broker channel', rate: '5.05', term: '5yr var' },
    { lg: 'TD', ln: 'TD Bank', lt: 'Big Six', rate: '5.45', term: '5yr var' },
  ],
  '3f': [
    { lg: 'NB', ln: 'Nesto', lt: 'Digital lender', rate: '4.24', term: '3yr fix' },
    { lg: 'MC', ln: 'MCAP', lt: 'Broker channel', rate: '4.34', term: '3yr fix' },
    { lg: 'RM', ln: 'RBC', lt: 'Big Six', rate: '4.99', term: '3yr fix' },
    { lg: 'CB', ln: 'CIBC', lt: 'Big Six', rate: '4.94', term: '3yr fix' },
  ],
}
const TABS = [
  { k: '5f', label: '5yr fixed' },
  { k: '5v', label: '5yr variable' },
  { k: '3f', label: '3yr fixed' },
]

const TICKER = [
  { nm: '5yr fixed insured', rt: '4.09%', dl: '▼ 0.06', cls: 'down' },
  { nm: '5yr variable', rt: '4.95%', dl: '▼ 0.25', cls: 'down' },
  { nm: '3yr fixed', rt: '4.24%', dl: '▼ 0.04', cls: 'down' },
  { nm: '1yr fixed', rt: '5.64%', dl: '▲ 0.02', cls: 'up' },
  { nm: 'HELOC prime', rt: '5.95%', dl: '— 0.00', cls: '' },
  { nm: 'BoC overnight', rt: '2.75%', dl: '▼ 0.25', cls: 'down' },
  { nm: '10yr fixed', rt: '5.29%', dl: '▼ 0.03', cls: 'down' },
]

const ZIG = 'M12 44 L26 25 L36 35 L52 20 M52 20 L41.5 20.5 M52 20 L50 30.5'
const FamMark = ({ fill }: { fill: string }) => (
  <svg className="tr-fam-mark" viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="15" fill={fill} />
    <path d={ZIG} stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const FAQS = [
  ['Are these rates real, or teaser numbers?', 'They’re representative of what lenders and brokers are posting for well-qualified borrowers, refreshed on business days. Your actual rate depends on your credit, down payment, property and the lender’s assessment — that’s why the quoter asks a few questions before showing you a personalized figure.'],
  ['Does going through TermRates cost more than my bank?', 'No. On standard prime deals the lender pays the broker, so there’s typically no fee to you — and a broker can often access lender pricing you wouldn’t get walking into a single branch. Certain non-prime or private files may carry a fee, which is disclosed to you before anything proceeds.'],
  ['What’s the difference between insured and uninsured rates?', 'Insured (high-ratio) mortgages have less than 20% down and carry default insurance, which usually means a lower rate. Uninsured or conventional mortgages have 20%+ down. The table lets you filter to the one that matches your situation so you’re comparing like with like.'],
  ['Should I take fixed or variable?', 'It depends on your tolerance for payment changes and where you think rates are headed — neither is universally “better.” Our fixed-vs-variable guide walks through the break-even math, and a licensed broker can pressure-test it against your specific plan.'],
  ['Do I have to give my email to see rates?', 'No. The rate table and calculators are open — no account, no email wall. You only share contact details if you choose to get a personalized quote or speak with a broker.'],
]

export default function TermRatesHome() {
  const [tab, setTab] = useState('5f')

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const rows = [...BOARD[tab]].sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate))
  const min = Math.min(...rows.map((r) => parseFloat(r.rate)))

  return (
    <>
      {/* Rate ticker */}
      <div className="tr-ticker" aria-label="Live rate ticker">
        <div className="wrap tr-ticker-in">
          <span className="tr-ticker-lbl"><span className="dot" />Live</span>
          <div className="tr-ticker-track">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span className="tr-tk" key={i}>
                <span className="nm">{t.nm}</span>
                <span className="rt">{t.rt}</span>
                <span className={`dl${t.cls ? ' ' + t.cls : ''}`}>{t.dl}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero + live board */}
      <section className="tr-hero">
        <div className="wrap tr-hero-grid">
          <div className="tr-hero-copy">
            <span className="eyebrow">Canadian mortgage rates</span>
            <h1>Every lender&apos;s rate. <span className="em">One screen.</span> No pitch.</h1>
            <p className="lead">TermRates puts live fixed and variable mortgage rates from Canada&apos;s major lenders and brokers side by side &mdash; sorted by the number, not by who paid to sit at the top. Filter to your exact scenario and see where you&apos;d actually land.</p>
            <div className="tr-hero-cta">
              <Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get my personalized rate <Arrow /></Link>
              <Link className="btn btn-ghost btn-lg" href="/rates">Browse the full table</Link>
            </div>
            <div className="tr-hero-assure">
              <span className="a"><Check />Updated every business day</span>
              <span className="a"><Check />Insured &amp; uninsured</span>
              <span className="a"><Check />No email wall to compare</span>
            </div>
          </div>

          <div className="tr-hero-art">
            <div className="tr-board">
              <div className="tr-board-head">
                <span className="t"><span className="dot" />Featured rates</span>
                <span className="upd tnum">Updated 08:30 ET</span>
              </div>
              <div className="tr-board-tabs">
                {TABS.map((t) => (
                  <button key={t.k} className={`tr-board-tab${tab === t.k ? ' on' : ''}`} onClick={() => setTab(t.k)}>{t.label}</button>
                ))}
              </div>
              <div>
                {rows.map((r) => {
                  const best = parseFloat(r.rate) === min
                  return (
                    <div className="tr-board-row" key={r.ln}>
                      <div className="lender"><span className="lg">{r.lg}</span><div><div className="ln">{r.ln}</div><div className="lt">{r.lt}</div></div></div>
                      <div className="rate" style={best ? { color: 'var(--accent-ink)' } : undefined}>{r.rate}<small>%</small></div>
                      <div className="term">{r.term}</div>
                    </div>
                  )
                })}
              </div>
              <div className="tr-board-foot">
                <span className="note">Insured, high-ratio. Illustrative &mdash; not an offer.</span>
                <Link className="btn btn-ghost" href="/rates" style={{ padding: '9px 15px', fontSize: '.85rem' }}>All lenders <Arrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="tr-stats">
        <div className="wrap tr-stats-in">
          <div className="tr-stat"><div className="n tnum">30+</div><div className="l">Lenders &amp; brokers tracked</div></div>
          <div className="tr-stat"><div className="n tnum">Daily</div><div className="l">Rate refresh, business days</div></div>
          <div className="tr-stat"><div className="n tnum">7</div><div className="l">Terms, fixed and variable</div></div>
          <div className="tr-stat"><div className="n tnum">$0</div><div className="l">Cost to compare &mdash; always</div></div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="wrap">
          <div className="tr-sec-head reveal">
            <span className="eyebrow">What you can price here</span>
            <h2 className="h2">Four decisions, priced in real numbers.</h2>
            <p className="lead">Whether you&apos;re buying, coming up for renewal, or pulling equity out &mdash; start from the rate, not from a form.</p>
          </div>
          <div className="tr-prod">
            <Link className="tr-prod-card reveal" href="/mortgages">
              <div className="top">
                <div className="tr-prod-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg></div>
                <div className="from"><div className="rt tnum">4.09%</div><div className="rl">from &middot; 5yr fixed</div></div>
              </div>
              <h3>New purchase</h3>
              <p>Buying your first place or your next. Compare what every lender would offer on your down payment and price, insured or conventional.</p>
              <span className="tr-prod-go">Price a purchase <Arrow /></span>
            </Link>
            <Link className="tr-prod-card reveal" href="/mortgages/renewal">
              <div className="top">
                <div className="tr-prod-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 3v5h-5" /></svg></div>
                <div className="from"><div className="rt tnum">4.24%</div><div className="rl">from &middot; 3yr fixed</div></div>
              </div>
              <h3>Renewal &amp; switch</h3>
              <p>Your term is ending. See whether staying put or moving your mortgage to another lender is worth it &mdash; with the switch costs shown, not hidden.</p>
              <span className="tr-prod-go">Check my renewal <Arrow /></span>
            </Link>
            <Link className="tr-prod-card reveal" href="/mortgages/refinance">
              <div className="top">
                <div className="tr-prod-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                <div className="from"><div className="rt tnum">4.44%</div><div className="rl">from &middot; refi 5yr</div></div>
              </div>
              <h3>Refinance &amp; HELOC</h3>
              <p>Consolidate debt, fund a renovation, or unlock equity. Compare refinance rates and home-equity lines with the trade-offs laid out plainly.</p>
              <span className="tr-prod-go">Explore refinancing <Arrow /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator feature */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-feat reveal">
            <div className="tr-feat-copy">
              <span className="eyebrow">Payment calculator</span>
              <h2>See the payment before you see a broker.</h2>
              <p>Punch in a price, a down payment and a rate &mdash; get the monthly payment, the CMHC premium, and the total interest over the term. Change the amortization and watch it move, live, in your browser.</p>
              <div className="tr-hero-cta">
                <Link className="btn btn-accent btn-lg" href="/mortgages/calculator">Open the calculator <Arrow /></Link>
                <Link className="btn btn-ghost btn-lg" href="/mortgages/affordability">How much can I borrow?</Link>
              </div>
            </div>
            <div className="tr-feat-viz">
              <div className="tr-readout">
                <div className="lbl">Est. monthly payment</div>
                <div className="big tnum">$2,847<small>/mo</small></div>
                <div className="bars">
                  <div className="bar"><div className="r"><span>Principal &amp; interest</span><b className="tnum">$2,847</b></div><div className="tk"><i style={{ width: '100%' }} /></div></div>
                  <div className="bar"><div className="r"><span>Of which interest, yr 1</span><b className="tnum">$1,912</b></div><div className="tk"><i style={{ width: '67%' }} /></div></div>
                  <div className="bar"><div className="r"><span>CMHC premium (financed)</span><b className="tnum">$22,400</b></div><div className="tk"><i style={{ width: '31%' }} /></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial rail */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head reveal">
            <span className="eyebrow">Understand the number</span>
            <h2 className="h2">Rates move. Here&apos;s why, and what it means for you.</h2>
            <p className="lead">Written plainly, reviewed by a licensed professional, and sourced back to the Bank of Canada and lender filings so you can check the work.</p>
          </div>
          <div className="tr-rail">
            <Link className="tr-art reveal" href="/mortgages/fixed-vs-variable">
              <div className="tr-art-top"><div className="grid-bg" /><span className="tag">Pillar guide</span></div>
              <div className="tr-art-body">
                <h3>Fixed vs variable, decided by math</h3>
                <p>The real trade-off &mdash; rate certainty versus expected cost &mdash; laid out with the break-even that actually decides it.</p>
                <div className="tr-byline" data-byline-tbd><span className="av">&mdash;</span><span className="meta"><b>Reviewed by [BYLINE TBD]</b><span>Licensed mortgage professional</span></span></div>
              </div>
            </Link>
            <Link className="tr-art reveal" href="/mortgages/news/rate-decision-2026">
              <div className="tr-art-top"><div className="grid-bg" /><span className="tag">Rate news</span></div>
              <div className="tr-art-body">
                <h3>What the June rate cut does to your renewal</h3>
                <p>The Bank of Canada moved. We translate the 25-basis-point cut into what a renewing borrower actually pays.</p>
                <div className="tr-byline" data-byline-tbd><span className="av">&mdash;</span><span className="meta"><b>Reviewed by [BYLINE TBD]</b><span>TermRates rate desk</span></span></div>
              </div>
            </Link>
            <Link className="tr-art reveal" href="/mortgages/report">
              <div className="tr-art-top"><div className="grid-bg" /><span className="tag">Data report</span></div>
              <div className="tr-art-body">
                <h3>The 2026 renewal wall, in one chart</h3>
                <p>Over a million Canadian mortgages renew this year at higher rates than they were signed. Here&apos;s the payment shock, by region.</p>
                <div className="tr-byline" data-byline-tbd><span className="av">&mdash;</span><span className="meta"><b>Reviewed by [BYLINE TBD]</b><span>TermRates rate desk</span></span></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Broker band */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-advisor reveal">
            <div className="tr-advisor-copy">
              <span className="eyebrow">Talk to a licensed broker</span>
              <h2>When the number&apos;s right, a real broker closes it.</h2>
              <p>See a rate you like and a licensed mortgage professional takes it from there &mdash; a full-market broker who&apos;s paid by the lender, not by you, and who&apos;ll tell you straight when your current deal is already the one to keep.</p>
              <div className="tr-advisor-cta">
                <Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get matched to a rate</Link>
                <Link className="btn btn-ghost btn-lg" href="/how-we-make-money">How we&apos;re paid</Link>
              </div>
            </div>
            <div className="tr-advisor-card">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
              <ul>
                <li><Check />Full-market: 30+ lenders, not one bank</li>
                <li><Check />Paid by the lender &mdash; no fee to you on prime deals</li>
                <li><Check />The honest answer, even when it&apos;s &ldquo;stay put&rdquo;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family cross-links */}
      <section className="section" style={{ paddingTop: 0 }} id="family">
        <div className="wrap">
          <div className="tr-sec-head center reveal">
            <span className="eyebrow center">One family, four kinds of cover</span>
            <h2 className="h2">Part of the Rate family</h2>
            <p className="lead" style={{ marginInline: 'auto' }}>Same standards, same no-pitch DNA. When your question is bigger than a mortgage rate, there&apos;s a sibling site built for it.</p>
          </div>
          <div className="tr-family">
            <div className="tr-fam self">
              <FamMark fill="var(--brand-500)" />
              <span className="nm">TermRates</span><span className="ds">Mortgage rates &amp; renewals</span><span className="go">You&apos;re here</span>
            </div>
            <a className="tr-fam" href="https://liferate.ca">
              <FamMark fill="#8E4A56" />
              <span className="nm">LifeRate</span><span className="ds">Life &amp; critical illness</span><span className="go">Visit &rarr;</span>
            </a>
            <a className="tr-fam" href="https://healthrate.ca">
              <FamMark fill="#2E9E5B" />
              <span className="nm">HealthRate</span><span className="ds">Health, dental &amp; travel</span><span className="go">Visit &rarr;</span>
            </a>
            <a className="tr-fam" href="https://toprates.ca">
              <FamMark fill="#B8960C" />
              <span className="nm">TopRates</span><span className="ds">Compare everything</span><span className="go">Visit &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }} id="faq">
        <div className="wrap">
          <div className="tr-sec-head center reveal">
            <span className="eyebrow center">Common questions</span>
            <h2 className="h2">The things people ask first</h2>
          </div>
          <div className="tr-faq reveal">
            {FAQS.map(([q, a], i) => (
              <details key={i} open={i === 0}>
                <summary>{q}<span className="pm" /></summary>
                <div className="ans">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
