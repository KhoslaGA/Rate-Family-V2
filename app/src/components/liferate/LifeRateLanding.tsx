'use client'

/**
 * LifeRate bespoke Life landing (template #4), ported from bespoke/liferate/life.html.
 * Rendered by app/life-insurance/page.tsx only when x-site === 'liferate'; the hub
 * (TopRates) keeps its own /life-insurance page. Chrome (LrNav/LrFooter) comes from
 * the root layout. Styling: app/src/styles/liferate.css (rosewood, scoped to host).
 *
 * The inline quoter ENTRY (#quote) is the design's illustrative entry form — it does
 * not compute live premiums. The live code-side quoter (PR #18) reconciles into this
 * slot once that engine merges onto this branch (QUOTER-CONTRACT.md). Advisor CTA is
 * live today (LLQP referral to KLC Group Canada Inc.). Bylines: [BYLINE TBD].
 */
import Link from 'next/link'
import { useEffect } from 'react'
import Bo from './Bo'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
)
const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 6 6 6-6 6" /></svg>
)

const COMPARE = [
  {
    kicker: 'Covers a set number of years',
    title: 'Term life',
    sub: 'Lower cost, fixed period — the workhorse for most families.',
    points: [
      'Level premium for 10, 20, or 30 years',
      'Most coverage per dollar while the kids are home / the mortgage runs',
      'Often convertible to permanent later, no new medical',
    ],
    best: 'you have a clear window to protect — an income, a mortgage, dependent years.',
  },
  {
    kicker: 'Covers your whole life',
    title: 'Permanent life',
    sub: 'Lifelong coverage that builds cash value over time.',
    points: [
      'Never expires as long as premiums are paid',
      'Builds tax-advantaged cash value you can borrow against',
      'Useful for estate planning and lifelong dependants',
    ],
    best: 'the need never ends — a lifelong dependant, estate goals, or leaving a guaranteed legacy.',
  },
]

const COV = [
  { n: '1', h: 'Replace the income', p: 'Roughly the years your family would need your salary, times your take-home. The biggest piece for most.' },
  { n: '2', h: 'Clear the debts', p: 'Mortgage, loans, anything that would otherwise land on someone else. Add it on top.' },
  { n: '3', h: 'Fund the futures', p: 'Childcare, education, a final-expenses cushion — the things you’d want handled.' },
]

const GUIDES = [
  { tag: 'Pillar guide', title: 'Term vs permanent life insurance', body: 'The real trade-off in plain terms — what each does, and how to tell which one your situation calls for.' },
  { tag: 'Pillar guide', title: 'How much life insurance do you actually need?', body: 'Income, debts, dependants and the years that matter — a grounded way to land on a number.' },
  { tag: 'Guide', title: 'Can you convert a term policy later?', body: 'How conversion privileges work, the windows that matter, and why they’re worth checking before you buy.' },
]

const FAQ: [string, string][] = [
  ['Is term or permanent cheaper?', 'Term is almost always lower cost for the same coverage amount, because it covers a set period rather than your whole life. Permanent costs more but never expires and builds cash value. The right one depends on how long the need lasts, not just the monthly price.'],
  ['Do I need a medical exam?', 'Not to compare rates — those are estimates from a few basics. If you apply, some policies require an exam and some offer simplified or no-exam underwriting; an advisor can point you to the ones that fit your health and timeline.'],
  ['Can I convert term to permanent later?', 'Often, yes — many term policies include a conversion privilege that lets you switch to permanent without a new medical, within a set window. It’s one of the most valuable features to check before buying.'],
  ['How much coverage should I get?', 'A common starting point is replacing several years of income, clearing debts like your mortgage, and funding future needs such as childcare or education. Our needs calculator walks through it in under a minute.'],
  ['Does it cost more to buy through LifeRate?', 'No. Premiums are set by the insurer and filed with the regulator — identical whether you come through us or go direct. The insurer pays the commission; you don’t pay us.'],
]

const AdvisorCard = () => (
  <div className="lr-advisor-card">
    <div className="who">
      <span className="av">GK</span>
      <div>
        <b style={{ display: 'block', color: '#fff' }}>Gautam Khosla</b>
        <span>LLQP-Licensed Advisor · KLC Group</span>
      </div>
    </div>
    <ul>
      <li><Check />Independent across 21 carriers</li>
      <li><Check />Same price as going direct</li>
      <li><Check />The honest answer, even when it&rsquo;s &ldquo;you don&rsquo;t need this&rdquo;</li>
    </ul>
  </div>
)

export default function LifeRateLanding() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main>
      {/* HERO */}
      <section className="lr-hero lr-lp-hero">
        <div className="wrap">
          <div className="lr-crumbs">
            <Link href="/">Home</Link>
            <Chevron />
            <span>Life insurance</span>
          </div>
          <div className="lr-hero-grid">
            <div className="lr-hero-copy">
              <span className="eyebrow">Life insurance</span>
              <h1>Two ways to keep the <span className="em">promise</span>. We&rsquo;ll help you pick.</h1>
              <p className="lead">Term or permanent, it comes down to one question: for how long do the people you love need to be caught if you fall? Compare both across 21 insurers, in plain English.</p>
              <div className="lr-hero-cta">
                <Link className="btn btn-accent btn-lg" href="#quote">Compare your rate <Arrow /></Link>
                <Link className="btn btn-ghost btn-lg" href="#fit">Which one fits me?</Link>
              </div>
              <div className="lr-hero-assure">
                <span className="a"><Check />Real-time rates</span>
                <span className="a"><Check />No exam to compare</span>
                <span className="a"><Check />FSRA-licensed</span>
              </div>
            </div>
            <div className="lr-hero-art">
              <div className="lr-hero-card">
                <div className="lr-hero-photo"><Bo className="bo" pose="idle" /></div>
                <div className="lr-hero-quote">
                  <span className="mk">&ldquo;</span>
                  <p>They didn&rsquo;t push permanent on me — said term was the right call for my situation. <b>That&rsquo;s when I trusted them.</b></p>
                </div>
              </div>
              <div className="lr-float">
                <span className="n">$32</span>
                <span className="l">/mo — sample 20-year<br />term, healthy non-smoker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="lr-trust">
        <div className="wrap lr-trust-in">
          <span className="lr-trust-item"><Check />FSRA-licensed (LLQP)</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><Check />21 insurers, independent</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><Check />Real-time CompuLife rates</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><Check />Same price as going direct</span>
        </div>
      </section>

      {/* WHICH FITS */}
      <section className="section" id="fit">
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">Term vs permanent</span>
            <h2 className="h2">Which kind of life insurance fits you?</h2>
            <p className="lead">Neither is &ldquo;better&rdquo; — they answer different questions. Here&rsquo;s the honest version of each.</p>
          </div>
          <div className="lr-compare">
            {COMPARE.map((c) => (
              <div className="lr-cmp reveal" key={c.title}>
                <span className="kicker">{c.kicker}</span>
                <h3>{c.title}</h3>
                <p className="sub">{c.sub}</p>
                <ul>
                  {c.points.map((p) => (
                    <li key={p}><Check />{p}</li>
                  ))}
                </ul>
                <div className="best"><b>Best when</b> {c.best}</div>
              </div>
            ))}
          </div>
          <p className="lead reveal" style={{ marginTop: 24, fontSize: '1rem' }}>
            <Link href="#fit" style={{ color: 'var(--accent-ink)', fontWeight: 600 }}>Read the full term-vs-permanent guide →</Link>
          </p>
        </div>
      </section>

      {/* INLINE QUOTER ENTRY */}
      <section className="section" id="quote" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-qentry reveal">
            <div>
              <span className="eyebrow">See real numbers</span>
              <h2>Your rate, in about two minutes.</h2>
              <p>Five basics is all it takes to compare live rates across 21 Canadian insurers. No account, no email wall — the number first, the conversation only if you want it.</p>
            </div>
            <form className="lr-qform" onSubmit={(e) => e.preventDefault()} aria-label="Start a life quote">
              <div className="lr-qrow">
                <div className="lr-qfield">
                  <label htmlFor="q-age">Age</label>
                  <input id="q-age" type="number" min={18} max={80} placeholder="35" inputMode="numeric" />
                </div>
                <div className="lr-qfield">
                  <label htmlFor="q-sex">Sex</label>
                  <select id="q-sex" defaultValue="Female"><option>Female</option><option>Male</option></select>
                </div>
              </div>
              <div className="lr-qrow">
                <div className="lr-qfield">
                  <label htmlFor="q-smoke">Smoker</label>
                  <select id="q-smoke" defaultValue="No"><option>No</option><option>Yes</option></select>
                </div>
                <div className="lr-qfield">
                  <label htmlFor="q-cov">Coverage</label>
                  <select id="q-cov" defaultValue="$500,000"><option>$500,000</option><option>$250,000</option><option>$750,000</option><option>$1,000,000</option></select>
                </div>
              </div>
              <div className="lr-qfield full">
                <label htmlFor="q-term">Term length</label>
                <select id="q-term" defaultValue="20 years"><option>20 years</option><option>10 years</option><option>30 years</option><option>Permanent</option></select>
              </div>
              <Link className="btn btn-accent btn-lg" href="#advisor">Compare 21 insurers <Arrow /></Link>
              <p className="lr-qnote">Powered by real-time CompuLife rates · no email required</p>
            </form>
          </div>
        </div>
      </section>

      {/* COVERAGE GUIDANCE */}
      <section className="section" id="needs" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">How much do you need?</span>
            <h2 className="h2">A grounded way to land on a number.</h2>
            <p className="lead">Coverage isn&rsquo;t a guess. Most people size it from three things — then round to what&rsquo;s comfortable.</p>
          </div>
          <div className="lr-cov">
            {COV.map((c) => (
              <div className="lr-cov-card reveal" key={c.n}>
                <span className="n">{c.n}</span>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
          <div className="lr-needs reveal" style={{ marginTop: 32 }}>
            <div className="txt">
              <h3>Do the math with our calculator</h3>
              <p>Answer five plain questions and see a coverage figure in under a minute — then carry it straight into a quote.</p>
            </div>
            <Link className="btn btn-ghost btn-lg" href="#quote">Open the needs calculator <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">Before you decide</span>
            <h2 className="h2">Read up, at your own pace.</h2>
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
              <h2>Still deciding term vs permanent? Ask a human.</h2>
              <p>A licensed advisor will look at your actual situation, tell you which fits, and say so plainly if you&rsquo;re about to over-buy. No script, no pressure.</p>
              <div className="lr-advisor-cta">
                <Link className="btn btn-accent btn-lg" href="#quote">Book a free call</Link>
                <Link className="btn btn-ghost btn-lg" href="#quote">See your rate first</Link>
              </div>
            </div>
            <AdvisorCard />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head center reveal">
            <span className="eyebrow center">Common questions</span>
            <h2 className="h2">Life insurance, answered</h2>
          </div>
          <div className="lr-faq reveal">
            {FAQ.map(([q, a], i) => (
              <details key={q} {...(i === 0 ? { open: true } : {})}>
                <summary>{q}<span className="pm" /></summary>
                <div className="ans">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
