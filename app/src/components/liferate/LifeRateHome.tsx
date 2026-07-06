'use client'

/**
 * LifeRate bespoke homepage (template #3), ported from bespoke/liferate/index.html.
 * Rendered by app/page.tsx only when x-site === 'liferate'. Chrome (LrNav/LrFooter)
 * comes from the root layout. Styling: app/src/styles/liferate.css.
 *
 * Bylines render [BYLINE TBD] until a real credentialed reviewer is confirmed.
 * Cross-brand links are absolute to sibling hosts (ownership/canonical rule).
 */
import Link from 'next/link'
import { useEffect } from 'react'
import Bo from './Bo'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
)

const GUIDES = [
  { tag: 'Pillar guide', title: 'Term vs permanent life insurance', body: 'The real trade-off in plain terms — what each actually does, and how to tell which one your situation calls for.' },
  { tag: 'Pillar guide', title: 'How much life insurance do you actually need?', body: 'Income, debts, dependants and the years that matter — a grounded way to land on a number that isn’t guesswork.' },
  { tag: 'Guide', title: 'What critical-illness cover pays for', body: 'The conditions, the waiting periods, and how a lump sum on diagnosis fits alongside your life policy.' },
]

const FAQ = [
  ['Does using LifeRate cost more than going direct?', 'No. Premiums are set by the insurer and filed with the regulator — they’re identical whether you come through us or approach the carrier yourself. The insurer pays the commission; you don’t pay us.'],
  ['Do I need a medical exam just to see prices?', 'Not to compare. You can see real-time rates across 21 insurers with a few basic details. A medical exam (if one is even required) only comes later, if you choose to apply for a specific policy.'],
  ['Term or permanent — which is right for me?', 'It depends on what you’re protecting and for how long. Term covers a defined period at a lower cost; permanent lasts for life and builds value. Our guides walk through the trade-off, and an advisor can talk it through with your situation in mind.'],
  ['Are you independent, or owned by an insurer?', 'Independent. We compare across a panel of 21 carriers and are paid the same regardless of which one you choose — so the ranking you see has no thumb on the scale.'],
  ['What happens to my information?', 'The calculators run in your browser and don’t require an account. You only share contact details if you choose to speak with an advisor — and then only to arrange the coverage you asked about.'],
]

export default function LifeRateHome() {
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

  return (
    <>
      {/* HERO */}
      <section className="lr-hero">
        <div className="wrap lr-hero-grid">
          <div className="lr-hero-copy">
            <span className="eyebrow">Life &amp; critical-illness cover</span>
            <h1>The people who <span className="em">depend on you</span> shouldn’t depend on luck.</h1>
            <p className="lead">Life insurance is really just a promise kept after you’re gone. We help you compare that promise across 21 Canadian insurers — in plain English, at your pace, with a real advisor when you want one.</p>
            <div className="lr-hero-cta">
              <Link className="btn btn-accent btn-lg" href="/life-insurance#quote">See your rate in 2 minutes <Arrow /></Link>
              <Link className="btn btn-ghost btn-lg" href="/life-insurance#advisor">Talk it through first</Link>
            </div>
            {/* CTA microcopy (Rate_Family_Disclosure_Suite §2B) — one line at the primary CTA. */}
            <p className="lr-cta-note" style={{ fontSize: '.82rem', color: 'var(--ink-mute, #8a7f82)', margin: '12px 0 0', maxWidth: '46ch' }}>
              Free, no-obligation consultation with a licensed LLQP advisor (KLC Group Canada Inc.). No coverage is bound until the insurer approves your application.
            </p>
            <div className="lr-hero-assure">
              <span className="a"><Check />No medical exam to compare</span>
              <span className="a"><Check />No email wall</span>
              <span className="a"><Check />FSRA-licensed advice</span>
            </div>
          </div>
          <div className="lr-hero-art">
            <div className="lr-hero-card">
              <div className="lr-hero-photo"><Bo className="bo" pose="idle" /></div>
              <div className="lr-hero-quote">
                <span className="mk">&ldquo;</span>
                <p>I put off life insurance for years because I thought it’d be a sales pitch. This was just… a clear explanation. <b>Booked in an afternoon.</b></p>
              </div>
            </div>
            <div className="lr-float"><span className="n">21</span><span className="l">Canadian insurers<br />compared, side by side</span></div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="lr-trust">
        <div className="wrap lr-trust-in">
          <span className="lr-trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>FSRA-licensed (LLQP)</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18" /></svg>21 insurers, independent</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6 4 4 6-7" /><path d="M4 21h16" /></svg>Real-time CompuLife rates</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h10" /></svg>Plain-English, always</span>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="section">
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">Why LifeRate feels different</span>
            <h2 className="h2">We explain the decision. You make it.</h2>
            <p className="lead">Most life-insurance sites are a form with a headline. We built the opposite: understand it first, compare honestly, and only talk to a human when you’re ready.</p>
          </div>
          <div className="lr-help">
            <div className="lr-help-card reveal"><div className="lr-help-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4" /></svg></div><h3>Compare, honestly</h3><p>Real-time rates from 21 insurers, ranked by price and fit — not by who pays us most. Our commission is the same either way, so the ranking has nothing to hide.</p></div>
            <div className="lr-help-card reveal"><div className="lr-help-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a7 7 0 0 0-4 12.7V18h8v-2.3A7 7 0 0 0 12 3z" /><path d="M9 21h6" /></svg></div><h3>Understand, fully</h3><p>Term or permanent, riders, the fine print — every term defined in the sentence it appears. If a guide can’t be understood by a normal human, it doesn’t go up.</p></div>
            <div className="lr-help-card reveal"><div className="lr-help-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div><h3>Talk to a human</h3><p>When you want a person, you get a licensed advisor — not a call-centre script. No pressure, no upsell, and the honest answer when a policy isn’t right for you.</p></div>
          </div>
        </div>
      </section>

      {/* COVERAGE PATHS + NEEDS TEASER */}
      <section className="section" id="paths" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">Where would you like to start?</span>
            <h2 className="h2">Two kinds of protection. One clear path to each.</h2>
          </div>
          <div className="lr-paths">
            <Link className="lr-path primary reveal" href="/life-insurance">
              <span className="lr-path-tag">Most people start here</span>
              <h3>Life insurance</h3>
              <p>Term or permanent coverage that pays your family a tax-free amount if you’re gone. The core promise — sized to what they’d actually need.</p>
              <span className="lr-path-go">Compare life rates <Arrow /></span>
            </Link>
            <Link className="lr-path reveal" href="/life-insurance/critical-illness">
              <span className="lr-path-tag">Protect your income too</span>
              <h3>Critical illness</h3>
              <p>A tax-free lump sum on diagnosis of a covered condition — money to focus on recovery, not bills, while you’re still very much here.</p>
              <span className="lr-path-go">Explore critical illness <Arrow /></span>
            </Link>
          </div>
          <div className="lr-needs reveal" id="needs">
            <div className="txt">
              <h3>Not sure how much you need?</h3>
              <p>Answer five plain questions — income, debts, dependants — and see a coverage figure in under a minute. No account, no email.</p>
            </div>
            <Link className="btn btn-ghost btn-lg" href="/savings-calculator">Try the needs calculator <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL RAIL */}
      <section className="section" id="guides" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">Learn before you buy</span>
            <h2 className="h2">Guides that respect your intelligence.</h2>
            <p className="lead">Written to be understood, reviewed by a licensed advisor, and sourced so you can check our work.</p>
          </div>
          <div className="lr-rail">
            {GUIDES.map((g) => (
              <article className="lr-art reveal" key={g.title}>
                <div className="lr-art-top"><span className="tag">{g.tag}</span></div>
                <div className="lr-art-body">
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                  <div className="lr-byline" data-byline-tbd>
                    <span className="av">—</span>
                    <span className="meta"><b>Reviewed by [BYLINE TBD]</b><span>Named LLQP reviewer · FSRA-regulated</span></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISOR BAND */}
      <section className="section" id="advisor" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-advisor reveal">
            <div className="lr-advisor-copy">
              <span className="eyebrow">Talk to a real, licensed advisor</span>
              <h2>When you’re ready for a person, we’ve got a good one.</h2>
              <p>No call-centre queue, no script. A licensed advisor who’ll walk you through your options, answer the awkward questions, and tell you plainly if you don’t need what you came for.</p>
              <div className="lr-advisor-cta">
                <Link className="btn btn-accent btn-lg" href="/life-insurance#quote">Book a free call</Link>
                <Link className="btn btn-ghost btn-lg" href="/life-insurance#quote">See your rate first</Link>
              </div>
            </div>
            <div className="lr-advisor-card">
              <div className="who">
                <span className="av">GK</span>
                <div><b style={{ display: 'block', color: '#fff' }}>Gautam Khosla</b><span>LLQP-Licensed Advisor · KLC Group</span></div>
              </div>
              <ul>
                <li><Check />Licensed, independent, carrier-neutral</li>
                <li><Check />Same price as going direct to the insurer</li>
                <li><Check />Zero pressure — the honest answer, always</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY CROSS-LINKS */}
      <section className="section" id="family" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head center reveal">
            <span className="eyebrow center">One family, four kinds of cover</span>
            <h2 className="h2">Part of the Rate family</h2>
            <p className="lead" style={{ marginInline: 'auto' }}>Same standards, same plain-English DNA. When your question is bigger than life insurance, there’s a sibling site for it.</p>
          </div>
          <div className="lr-family">
            <div className="lr-fam self">
              <svg className="lr-fam-mark" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="var(--brand-500)" /><path d="M32 47 C21 39 16 32 16 25.5 C16 20.8 19.4 17.5 23.5 17.5 C27 17.5 30 19.8 32 23 C34 19.8 37 17.5 40.5 17.5 C44.6 17.5 48 20.8 48 25.5 C48 32 43 39 32 47 Z" fill="#fff" /></svg>
              <span className="nm">LifeRate</span><span className="ds">Life &amp; critical-illness cover</span><span className="go">You’re here</span>
            </div>
            <a className="lr-fam" href="https://termrates.ca">
              <svg className="lr-fam-mark" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#3D5A85" /><g fill="#fff"><rect x="17" y="14" width="30" height="5" rx="2.5" /><rect x="17" y="45" width="30" height="5" rx="2.5" /><path d="M21 19 H43 L34 32 L43 45 H21 L30 32 Z" /></g></svg>
              <span className="nm">TermRates</span><span className="ds">Mortgage rates &amp; renewals</span><span className="go">Visit →</span>
            </a>
            <a className="lr-fam" href="https://healthrate.ca">
              <svg className="lr-fam-mark" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#257F49" /><path d="M27 15 h10 a3 3 0 0 1 3 3 v6 h6 a3 3 0 0 1 3 3 v10 a3 3 0 0 1 -3 3 h-6 v6 a3 3 0 0 1 -3 3 h-10 a3 3 0 0 1 -3 -3 v-6 h-6 a3 3 0 0 1 -3 -3 v-10 a3 3 0 0 1 3 -3 h6 v-6 a3 3 0 0 1 3 -3 Z" fill="#fff" /></svg>
              <span className="nm">HealthRate</span><span className="ds">Health, dental &amp; travel</span><span className="go">Visit →</span>
            </a>
            <a className="lr-fam" href="https://toprates.ca">
              <svg className="lr-fam-mark" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#B45309" /><text x="32" y="34" fontFamily="Newsreader, serif" fontWeight="600" fontSize="40" textAnchor="middle" dominantBaseline="central" fill="#fff">R</text></svg>
              <span className="nm">TopRates</span><span className="ds">Compare everything</span><span className="go">Visit →</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head center reveal">
            <span className="eyebrow center">Common questions</span>
            <h2 className="h2">The things people ask first</h2>
          </div>
          <div className="lr-faq reveal">
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}>
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
