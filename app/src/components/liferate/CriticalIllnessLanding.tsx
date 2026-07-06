'use client'

/**
 * LifeRate bespoke Critical-illness landing (template #5), ported from
 * bespoke/liferate/critical-illness.html. Route: /life-insurance/critical-illness,
 * rendered only on the LifeRate host (the route notFound()s on other hosts).
 * Chrome from the root layout; styling from app/src/styles/liferate.css (rosewood).
 * Advisor CTA is live today (LLQP referral, KLC Group Canada Inc.).
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
const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 6 6 6-6 6" /></svg>
)

const STEPS = [
  { n: '1', h: 'You’re diagnosed', p: 'With one of the covered conditions in your policy — and you survive the short waiting period.' },
  { n: '2', h: 'You claim', p: 'Your advisor helps you file. There’s no requirement to prove how you’ll spend it.' },
  { n: '3', h: 'You’re paid', p: 'A single tax-free lump sum lands — to cover income, treatment, the mortgage, or time off. Your call.' },
]

const COVERS: { label: string; icon: React.ReactNode }[] = [
  { label: 'Heart attack', icon: <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" /> },
  { label: 'Cancer', icon: <><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></> },
  { label: 'Stroke', icon: <path d="M9 3v6l-4 4a5 5 0 0 0 7 7l4-4h3" /> },
  { label: '20+ more', icon: <path d="M12 2v20M5 8h14M5 16h14" /> },
]

export default function CriticalIllnessLanding() {
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
            <span>Critical illness</span>
          </div>
          <div className="lr-hero-grid">
            <div className="lr-hero-copy">
              <span className="eyebrow">Critical illness cover</span>
              <h1>Life insurance is for them. <span className="em">This one&rsquo;s for you.</span></h1>
              <p className="lead">Critical illness cover pays a tax-free lump sum if you&rsquo;re diagnosed with a covered condition — money to focus on getting better instead of the bills, while you&rsquo;re very much still here.</p>
              <div className="lr-hero-cta">
                <Link className="btn btn-accent btn-lg" href="/life-insurance#quote">Compare CI rates <Arrow /></Link>
                <Link className="btn btn-ghost btn-lg" href="#pair">How it pairs with life</Link>
              </div>
              <div className="lr-hero-assure">
                <span className="a"><Check />Tax-free lump sum</span>
                <span className="a"><Check />Yours to spend any way</span>
                <span className="a"><Check />FSRA-licensed</span>
              </div>
            </div>
            <div className="lr-hero-art">
              <div className="lr-hero-card">
                <div className="lr-hero-photo"><Bo className="bo" pose="idle" /></div>
                <div className="lr-hero-quote">
                  <span className="mk">&ldquo;</span>
                  <p>The payout covered the mortgage while I took six months off to recover. <b>I didn&rsquo;t have to think about money once.</b></p>
                </div>
              </div>
              <div className="lr-float">
                <span className="n">1 in 2</span>
                <span className="l">Canadians will face a<br />critical illness in their life</span>
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
          <span className="lr-trust-item"><Check />Real-time rates</span>
          <span className="lr-trust-sep" />
          <span className="lr-trust-item"><Check />Same price as direct</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="h2">A lump sum, three simple steps.</h2>
          </div>
          <div className="lr-ci-steps">
            {STEPS.map((s) => (
              <div className="lr-ci-step reveal" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          <div className="lr-sec-head reveal" style={{ marginTop: 56 }}>
            <span className="eyebrow">What&rsquo;s typically covered</span>
            <h2 className="h2">The big conditions</h2>
            <p className="lead">Most policies center on the three that account for the majority of claims — with many covering 20+ conditions in total.</p>
          </div>
          <div className="lr-ci-covers">
            {COVERS.map((c) => (
              <div className="lr-ci-cov" key={c.label}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE + CI PAIR */}
      <section className="section" id="pair" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-sec-head reveal">
            <span className="eyebrow">Life + critical illness</span>
            <h2 className="h2">Two different jobs — often held together.</h2>
            <p className="lead">They answer different questions, which is why many people carry both.</p>
          </div>
          <div className="lr-pair">
            <div className="lr-pair-card">
              <span className="tag">Life insurance</span>
              <h3>Protects the people you leave behind</h3>
              <p>Pays your family a tax-free amount if you pass away — replacing income and clearing debts so their life can continue.</p>
            </div>
            <div className="lr-pair-card accent">
              <span className="tag">Critical illness</span>
              <h3>Protects you while you&rsquo;re recovering</h3>
              <p>Pays you a tax-free lump sum on diagnosis — so a serious illness doesn&rsquo;t become a financial crisis on top of a health one.</p>
            </div>
          </div>
          <p className="lead reveal" style={{ marginTop: 24, fontSize: '1rem' }}>
            <Link href="/life-insurance#quote" style={{ color: 'var(--accent-ink)', fontWeight: 600 }}>Compare life and critical-illness rates together →</Link>
          </p>
        </div>
      </section>

      {/* ADVISOR BAND */}
      <section className="section" id="advisor" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lr-advisor reveal">
            <div className="lr-advisor-copy">
              <span className="eyebrow">Not sure if you need it?</span>
              <h2>An advisor will tell you straight.</h2>
              <p>Critical illness isn&rsquo;t right for everyone. A licensed advisor will look at your situation, your existing coverage, and your savings — and say plainly whether it earns its place.</p>
              <div className="lr-advisor-cta">
                <Link className="btn btn-accent btn-lg" href="/life-insurance#quote">Compare my rate</Link>
                <Link className="btn btn-ghost btn-lg" href="#advisor">Book a free call</Link>
              </div>
            </div>
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
                <li><Check />Tells you if you don&rsquo;t need it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
