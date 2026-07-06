/**
 * TermRates refinance & HELOC landing, ported from refinance.html. Static
 * (server component) — two product cards, the "worth-it" break-even table,
 * a broker band and FAQ. Illustrative examples only, not advice.
 */
import Link from 'next/link'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = ({ dark }: { dark?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={dark ? '#6EE7A8' : 'var(--accent)'} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none', marginTop: 2 }}><path d="M20 6 9 17l-5-5" /></svg>
)

const FAQS: [string, string][] = [
  ['Refinance or HELOC — which do I want?', 'A refinance gives you a lump sum at a lower fixed or variable rate with a set payment — good for consolidating debt or a big one-time need. A HELOC is a flexible revolving line at a floating rate — good for ongoing or uncertain needs. Many people use both together.'],
  ['How much can I actually take out?', 'On a refinance you can borrow up to 80% of your home’s appraised value, minus what you still owe. A HELOC portion is capped at 65% of value, with total secured borrowing not exceeding 80%.'],
  ['What’s the penalty to break my mortgage?', 'Usually the greater of three months’ interest or an interest-rate differential (IRD). On fixed mortgages the IRD can be large. Getting your exact figure from the lender is step one — a broker does this for you before any decision.'],
  ['Will refinancing reset my amortization?', 'It can. Extending your amortization lowers the payment but increases total interest. A broker will show you the payment and the lifetime-interest trade-off side by side so it’s a deliberate choice, not a surprise.'],
]

export default function TermRatesRefinance() {
  return (
    <main>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><span>Refinance &amp; HELOC</span></div>
          <h1>Put your equity to work &mdash; with the math shown.</h1>
          <p className="lead">Refinance to a lower rate, consolidate higher-interest debt, or open a home-equity line. Two different tools for the equity in your home &mdash; here&apos;s what each actually costs.</p>
          <div className="tr-hero-cta" style={{ marginTop: 22 }}>
            <Link className="btn btn-accent btn-lg" href="/mortgages/quote">Compare refinance rates <Arrow /></Link>
            <Link className="btn btn-ghost btn-lg" href="/mortgages/calculator">Run the numbers</Link>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
          <div className="tr-card reveal in" style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-ink)', fontWeight: 500 }}>Refinance</span>
            <div className="tnum" style={{ fontWeight: 600, fontSize: '2.4rem', letterSpacing: '-.02em', color: 'var(--accent-ink)', margin: '14px 0 2px' }}>4.44%</div>
            <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}>from · 5yr fixed, uninsured refi</div>
            <h3 style={{ fontSize: 'var(--fs-h3)', marginTop: 18 }}>Break your term or renew into a new one</h3>
            <p style={{ color: 'var(--ink-soft)', marginTop: 8, fontSize: 'var(--fs-sm)' }}>A refinance replaces your mortgage &mdash; usually to drop your rate, pull out equity, or fold in other debt. Best when the interest saved clears the break penalty and legal costs.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 10 }}>
              <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)' }}><Check />Borrow up to 80% of your home&apos;s value</li>
              <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)' }}><Check />One fixed payment, lower blended rate</li>
              <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)' }}><Check />Watch for the prepayment penalty to break early</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 22 }}><Link className="btn btn-accent" href="/mortgages/quote">Compare refinance rates <Arrow /></Link></div>
          </div>
          <div className="tr-card reveal in" style={{ display: 'flex', flexDirection: 'column', background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderColor: 'var(--brand-700)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-200)', fontWeight: 500 }}>HELOC</span>
            <div className="tnum" style={{ fontWeight: 600, fontSize: '2.4rem', letterSpacing: '-.02em', color: '#fff', margin: '14px 0 2px' }}>5.95%</div>
            <div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.65)', fontFamily: 'var(--font-mono)' }}>prime-based · interest-only option</div>
            <h3 style={{ fontSize: 'var(--fs-h3)', marginTop: 18, color: '#fff' }}>A revolving line against your equity</h3>
            <p style={{ color: 'rgba(255,255,255,.82)', marginTop: 8, fontSize: 'var(--fs-sm)' }}>A home-equity line lets you borrow, repay and re-borrow up to a limit &mdash; you pay interest only on what you draw. Flexible, but the rate floats with prime.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 10 }}>
              <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.82)' }}><Check dark />Draw up to 65% of value (80% combined)</li>
              <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.82)' }}><Check dark />Pay interest only on what you use</li>
              <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.82)' }}><Check dark />Floating rate &mdash; payments move with prime</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 22 }}><Link className="btn btn-accent" href="/mortgages/quote" style={{ background: '#fff', color: 'var(--brand-700)' }}>Explore HELOC options <Arrow /></Link></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head reveal in">
            <span className="eyebrow">The honest test</span>
            <h2 className="h2">A refinance is worth it only when the numbers say so.</h2>
            <p className="lead">Breaking a mortgage triggers a penalty &mdash; often three months&apos; interest, or an interest-rate differential that can run into thousands. The rule: refinance when the interest you save beats the cost to break, over the time you&apos;ll keep the mortgage.</p>
          </div>
          <div className="tr-table-wrap reveal in" style={{ marginTop: 22, maxWidth: 820 }}>
            <table className="tr-table">
              <thead><tr><th>Scenario</th><th className="num">You save</th><th className="num">Cost to break</th><th className="num">Verdict</th></tr></thead>
              <tbody>
                <tr><td>Drop 0.90% on $500k, 3 yrs left</td><td className="num best-rate">$13,100</td><td className="num">$4,200</td><td className="num"><span className="delta down">Worth it</span></td></tr>
                <tr><td>Drop 0.30% on $400k, 1 yr left</td><td className="num">$1,180</td><td className="num">$3,600</td><td className="num"><span className="delta up">Not yet</span></td></tr>
                <tr><td>Consolidate $60k debt at 19%</td><td className="num best-rate">$9,400/yr</td><td className="num">$3,900</td><td className="num"><span className="delta down">Worth it</span></td></tr>
              </tbody>
            </table>
          </div>
          <p className="tr-note">Illustrative examples only, not advice for your situation. Break penalties vary by lender and mortgage type and can be substantial. A licensed broker can pull your exact penalty and run the break-even before you commit.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-advisor reveal in">
            <div className="tr-advisor-copy">
              <span className="eyebrow">Before you break anything</span>
              <h2>Get your real penalty, then decide.</h2>
              <p>A broker pulls the exact prepayment figure from your lender and runs the break-even against today&apos;s rates &mdash; so a refinance only happens if it genuinely puts you ahead.</p>
              <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/quote">Run my refinance</Link><Link className="btn btn-ghost btn-lg" href="/mortgages/renewal">Compare to renewing</Link></div>
            </div>
            <div className="tr-advisor-card">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
              <ul>
                <li><Check dark />Exact penalty pulled, not estimated</li>
                <li><Check dark />Blend-and-extend options included</li>
                <li><Check dark />Straight answer when it&apos;s not worth it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tr-sec-head center reveal in"><span className="eyebrow center">Refinance &amp; HELOC questions</span><h2 className="h2">Pulling equity, answered</h2></div>
          <div className="tr-faq reveal in">
            {FAQS.map(([q, a], i) => (<details key={i} open={i === 0}><summary>{q}<span className="pm" /></summary><div className="ans">{a}</div></details>))}
          </div>
        </div>
      </section>
    </main>
  )
}
