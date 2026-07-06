'use client'

/**
 * LifeRate bespoke Pillar guide (template #9), ported from
 * bespoke/liferate/guide-term-vs-permanent.html. Route:
 * /life-insurance/term-vs-permanent (LifeRate-only; notFound elsewhere).
 *
 * E-E-A-T cornerstone. The named reviewer byline stays [BYLINE TBD] until a
 * real credentialed reviewer is confirmed (never fabricate a YMYL author).
 * Sourced (CLHIA / FSRA / CompuLife). Chrome from layout; styling liferate.css.
 */
import Link from 'next/link'
import { useEffect } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 6 6 6-6 6" /></svg>
)

const TOC: [string, string][] = [
  ['#what', 'The one real difference'],
  ['#term', 'How term works'],
  ['#perm', 'How permanent works'],
  ['#cost', 'What each costs'],
  ['#choose', 'Which one fits you'],
  ['#convert', 'Can you switch later?'],
]

export default function TermVsPermanentGuide() {
  useEffect(() => {
    // reveal
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
        { threshold: 0.12 },
      )
      els.forEach((el) => io.observe(el))
    } else {
      els.forEach((el) => el.classList.add('in'))
    }
    // TOC scroll-spy
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.lr-toc a'))
    const heads = links.map((a) => document.querySelector<HTMLElement>(a.getAttribute('href') || ''))
    const spy = () => {
      const y = window.scrollY + 120
      let idx = 0
      heads.forEach((h, i) => { if (h && h.offsetTop <= y) idx = i })
      links.forEach((a, i) => a.classList.toggle('active', i === idx))
    }
    spy()
    window.addEventListener('scroll', spy, { passive: true })
    return () => window.removeEventListener('scroll', spy)
  }, [])

  return (
    <main>
      <article>
        {/* HEADER */}
        <section className="lr-art-hero">
          <div className="wrap">
            <div className="lr-crumbs" style={{ marginBottom: 18 }}>
              <Link href="/">Home</Link>
              <Chevron />
              <Link href="/life-insurance">Guides</Link>
              <Chevron />
              <span>Term vs permanent</span>
            </div>
            <span className="lr-cat">Pillar guide · Choosing coverage</span>
            <h1 className="lr-art-h1">Term vs permanent life insurance: the honest comparison</h1>
            <p className="lr-art-stand">Neither one is &ldquo;better&rdquo; — they answer different questions. Here&rsquo;s what each actually does, what it costs, and a plain way to tell which fits the life you&rsquo;re protecting.</p>
            <div className="lr-artby">
              <span className="av" data-byline-tbd>—</span>
              <div className="meta" data-byline-tbd>
                <b>Reviewed by [BYLINE TBD]</b>
                <span>Named LLQP-licensed reviewer (FSRA-regulated) · assigned before publish</span>
              </div>
              <div className="lr-artmeta">
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>9 min read</span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M3 20l1-4 11-11 3 3-11 11z" /></svg>Reviewed Jun 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* BODY + TOC */}
        <div className="lr-art-layout">
          <aside className="lr-toc" aria-label="On this page">
            <div className="t">On this page</div>
            {TOC.map(([href, label]) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </aside>

          <div className="lr-prose">
            <h2 id="what">The one real difference</h2>
            <p>Strip away the jargon and life insurance comes in two shapes. <strong>Term</strong> covers you for a set number of years. <strong>Permanent</strong> covers you for your whole life. Almost every other difference — price, cash value, complexity — flows from that single fact.</p>
            <p>So the useful question isn&rsquo;t &ldquo;which is better?&rdquo; It&rsquo;s &ldquo;<strong>for how long do the people I love need to be caught if I fall?</strong>&rdquo; If the answer is &ldquo;until the mortgage is gone and the kids are grown,&rdquo; that&rsquo;s a window — and term fits windows. If the answer is &ldquo;forever,&rdquo; that&rsquo;s permanent&rsquo;s job.</p>
            <div className="lr-pull">Term covers a chapter of your life. Permanent covers the whole book.</div>

            <h2 id="term">How term life works</h2>
            <p>You choose a <span className="term" title="The fixed number of years a term policy covers you at a level price.">term</span> — commonly 10, 20, or 30 years — and a coverage amount. Your premium stays level for that whole period. If you pass away during the term, your <span className="term" title="The person or people who receive the payout.">beneficiary</span> receives the coverage amount, tax-free. If you outlive the term, the coverage simply ends.</p>
            <p>Because it&rsquo;s temporary, term buys the <strong>most coverage per dollar</strong> — which is exactly what a young family protecting an income usually needs. It&rsquo;s the workhorse of life insurance, and for most people it&rsquo;s the right first answer.</p>
            <div className="lr-callout">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
              <p><b>Rule of thumb:</b> match the term to the risk. A 25-year mortgage and a newborn point toward a longer term; a 5-year window points shorter.</p>
            </div>

            <h2 id="perm">How permanent life works</h2>
            <p>Permanent coverage — <span className="term" title="A permanent policy with a fixed premium and guaranteed cash-value schedule.">whole life</span> or <span className="term" title="A permanent policy with flexible premiums and investment-linked cash value.">universal life</span> — never expires as long as premiums are paid. It also builds <span className="term" title="A tax-advantaged pool of value inside a permanent policy you can borrow against.">cash value</span> over time, which you can borrow against while you&rsquo;re alive.</p>
            <p>That permanence and cash value cost more — often several times the premium of term for the same coverage. It earns its place when the need genuinely never ends: a lifelong dependant, estate-planning goals, or leaving a guaranteed legacy.</p>

            <h2 id="cost">What each costs</h2>
            <p>Illustrative monthly premiums for a healthy 35-year-old non-smoker, $500,000 of coverage — real numbers depend on your health and the insurer:</p>
            <div className="lr-deftable">
              <div className="rowh"><div>Coverage type</div><div>Illustrative monthly</div></div>
              <div className="row"><div>20-year term</div><div>~$30–40</div></div>
              <div className="row"><div>30-year term</div><div>~$45–60</div></div>
              <div className="row"><div>Whole life (permanent)</div><div>~$400–550</div></div>
            </div>
            <p>The gap is the point, not a catch: you&rsquo;re paying for <em>lifetime</em> coverage plus a savings component, versus <em>temporary</em> pure protection. <Link className="inl" href="/life-insurance#quote">Compare your own rates across 21 insurers →</Link></p>

            <h2 id="choose">Which one fits you</h2>
            <div className="lr-deftable">
              <div className="rowh"><div>If your situation is…</div><div>Usually points to…</div></div>
              <div className="row"><div>Young family, mortgage, dependent kids</div><div>Term (10–30 yrs)</div></div>
              <div className="row"><div>Income to replace for a set period</div><div>Term</div></div>
              <div className="row"><div>Lifelong dependant (e.g. disability)</div><div>Permanent</div></div>
              <div className="row"><div>Estate planning / guaranteed legacy</div><div>Permanent</div></div>
              <div className="row"><div>Budget-limited, need maximum coverage now</div><div>Term</div></div>
            </div>
            <p>Many people land on a blend — a large term policy for the high-need years, plus a smaller permanent policy for the needs that never end. There&rsquo;s no prize for buying the most expensive option; there&rsquo;s only the right fit.</p>

            <h2 id="convert">Can you switch later?</h2>
            <p>Often, yes. Many term policies include a <span className="term" title="The right to switch a term policy to permanent without new medical underwriting, within a set window.">conversion privilege</span> — the right to turn term into permanent without a new medical exam, within a set window. It&rsquo;s one of the most valuable and overlooked features, because it lets you start affordable and keep the door open.</p>

            <div className="lr-softcta">
              <h3>See your own numbers</h3>
              <p>Compare live term and permanent rates across 21 Canadian insurers — no email wall, no pressure.</p>
              <Link className="btn btn-lg" href="/life-insurance#quote">Compare my rate <Arrow /></Link>
            </div>

            <div className="lr-sources">
              <h3>Sources</h3>
              <ol>
                <li>Canadian Life and Health Insurance Association (CLHIA) — consumer guides to life insurance types.</li>
                <li>Financial Services Regulatory Authority of Ontario (FSRA) — life agent licensing and conduct.</li>
                <li>CompuLife — real-time comparative premium data across Canadian insurers.</li>
              </ol>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
