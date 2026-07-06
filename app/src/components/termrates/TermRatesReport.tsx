/**
 * TermRates 2026 renewal-wall data report, ported from report-2026.html. Static
 * (server). Figures are modelled/illustrative — not a forecast or an offer.
 */
import Link from 'next/link'

const BARS: [string, number, string][] = [
  ['Greater Toronto Area', 82, '+$611 / mo · +24%'],
  ['Greater Vancouver', 88, '+$690 / mo · +26%'],
  ['Calgary', 58, '+$392 / mo · +17%'],
  ['Montreal', 48, '+$318 / mo · +15%'],
  ['Ottawa', 42, '+$281 / mo · +14%'],
  ['Halifax', 36, '+$236 / mo · +12%'],
]

export default function TermRatesReport() {
  return (
    <main>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/guides">Data reports</Link><span className="sep">/</span><span>2026 renewal wall</span></div>
          <span className="eyebrow">TermRates data report · Q2 2026</span>
          <h1 style={{ marginTop: 12, maxWidth: '22ch' }}>The 2026 renewal wall, in one report.</h1>
          <p className="lead">A wave of Canadian mortgages signed at pandemic-era lows renews this year at materially higher rates. We sized the payment shock &mdash; nationally, and by region.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-3)' }}>
            {[['1.2M', 'Canadian mortgages up for renewal in 2026', 'var(--brand-700)'], ['+18%', 'Average monthly payment increase at renewal', 'var(--brand-600)'], ['$412', 'Median added to the monthly payment', 'var(--brand-500)']].map(([n, l, g]) => (
              <div key={l} style={{ background: `linear-gradient(160deg, ${g}, var(--brand-900))`, color: '#fff', borderRadius: 'var(--r-lg)', padding: 26 }}>
                <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.2rem,4vw,3rem)', letterSpacing: '-.03em' }}>{n}</div>
                <div style={{ fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.8)', marginTop: 8, maxWidth: '22ch' }}>{l}</div>
              </div>
            ))}
          </div>

          <div className="tr-card" style={{ marginTop: 24, padding: 28 }}>
            <h3 style={{ fontSize: '1.3rem' }}>Average payment increase at renewal, by region</h3>
            <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-mute)', marginTop: 4 }}>Modelled increase for a borrower renewing a 5-year term signed in 2021, at 2026 rates. Illustrative.</p>
            <div style={{ display: 'grid', gap: 16, marginTop: 26 }}>
              {BARS.map(([region, w, val]) => (
                <div key={region}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--fs-sm)', marginBottom: 8 }}><span>{region}</span><b className="tnum">{val.split(' · ')[0]}</b></div>
                  <div style={{ height: 26, borderRadius: 6, background: 'var(--panel)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 6, background: 'linear-gradient(90deg,var(--brand-400),var(--brand-600))', width: w + '%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>{val.split(' · ')[1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tr-table-wrap" style={{ marginTop: 24 }}>
            <table className="tr-table">
              <thead><tr><th>Original term signed</th><th className="num">Then</th><th className="num">Renewing at</th><th className="num">Payment change</th></tr></thead>
              <tbody>
                <tr><td>5-yr fixed, 2021</td><td className="num" style={{ color: 'var(--ink-soft)' }}>1.94%</td><td className="num">4.09%</td><td className="num"><span className="delta up">▲ +24%</span></td></tr>
                <tr><td>5-yr variable, 2021</td><td className="num" style={{ color: 'var(--ink-soft)' }}>1.45%</td><td className="num">4.95%</td><td className="num"><span className="delta up">▲ +31%</span></td></tr>
                <tr><td>3-yr fixed, 2023</td><td className="num" style={{ color: 'var(--ink-soft)' }}>5.24%</td><td className="num">4.24%</td><td className="num"><span className="delta down">▼ −8%</span></td></tr>
                <tr><td>2-yr fixed, 2024</td><td className="num" style={{ color: 'var(--ink-soft)' }}>5.79%</td><td className="num">4.79%</td><td className="num"><span className="delta down">▼ −7%</span></td></tr>
              </tbody>
            </table>
          </div>
          <p className="tr-note">Modelled figures for illustration, built from representative posted rates and standard amortization assumptions &mdash; not a forecast or an offer. Individual outcomes vary by balance, term and lender. Borrowers renewing off 2023&ndash;24 highs may see decreases; those off 2021 lows see the sharpest increases.</p>

          <div className="tr-prose" style={{ maxWidth: 760, marginTop: 44 }}>
            <h2>What it means</h2>
            <p>The renewal wall isn&apos;t uniform. Borrowers who locked in during 2021 face the steepest jump; those who signed shorter terms at the 2023&ndash;24 peak are actually renewing <em>down</em>. The lesson isn&apos;t panic &mdash; it&apos;s that renewal is the moment to shop, not to auto-sign.</p>
            <p>Across every region we modelled, the single largest lever a renewing household controls is whether they accept the first offer or compare it. On the average GTA balance, moving 0.40% at renewal is worth more than a year of the payment increase itself.</p>
          </div>

          <div className="tr-callout" style={{ marginTop: 32, maxWidth: 760 }}>
            <span className="k">See your own number</span>
            <p style={{ marginTop: 8, color: 'var(--ink)' }}>Enter your balance and offer to see your renewal shock &mdash; and whether switching beats it.</p>
            <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-accent" href="/mortgages/renewal">Check my renewal</Link>
              <Link className="btn btn-ghost" href="/mortgages/quote">Get my rate</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
