'use client'

/**
 * TermRates renewal & switch tool, ported from renewal-tool.html. Compares
 * staying with your lender against switching (with switch costs) over the term,
 * Cdn semi-annual compounding. Illustrative; confirm exact figures before deciding.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-CA')
const pay = (bal: number, rate: number, years: number, freq = 12) => {
  const perAnnual = Math.pow(1 + rate / 100 / 2, 2) - 1
  const i = Math.pow(1 + perAnnual, 1 / freq) - 1
  const n = years * freq
  return i > 0 ? (bal * i) / (1 - Math.pow(1 + i, -n)) : bal / n
}
const interestOverTerm = (bal: number, rate: number, years: number, term: number) => {
  const perAnnual = Math.pow(1 + rate / 100 / 2, 2) - 1
  const i = Math.pow(1 + perAnnual, 1 / 12) - 1
  const p = pay(bal, rate, years)
  let b = bal, intr = 0
  for (let k = 0; k < term * 12; k++) { const it = b * i; intr += it; b -= p - it }
  return intr
}

export default function TermRatesRenewal() {
  const [bal, setBal] = useState('420,000')
  const [amort, setAmort] = useState('20')
  const [term, setTerm] = useState('5')
  const [stayR, setStayR] = useState('4.79')
  const [switchR, setSwitchR] = useState('4.19')
  const [cost, setCost] = useState('1,100')

  const r = useMemo(() => {
    const B = num(bal), years = num(amort), sr = num(stayR), wr = num(switchR), c = num(cost), t = num(term)
    const sInt = interestOverTerm(B, sr, years, t), wInt = interestOverTerm(B, wr, years, t)
    const sTot = sInt, wTot = wInt + c
    return { sPay: pay(B, sr, years), wPay: pay(B, wr, years), sInt, wInt, c, sTot, wTot, diff: sTot - wTot }
  }, [bal, amort, term, stayR, switchR, cost])

  const switchWins = r.diff >= 0
  const Col = ({ side, rate, p, int, c, tot, win }: { side: string; rate: string; p: number; int: number; c: number; tot: number; win: boolean }) => (
    <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--sh-sm)', display: 'flex', flexDirection: 'column', ...(win ? { borderColor: 'var(--brand-300)', boxShadow: '0 0 0 3px var(--accent-soft), var(--sh-sm)' } : {}) }}>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--line)', ...(side === 'switch' ? { background: 'linear-gradient(160deg,var(--brand-600),var(--brand-800))', color: '#fff' } : { background: 'var(--panel-2)' }) }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.8 }}>{side === 'switch' ? 'Switch — move to a new lender' : 'Stay — renew with lender'}</span>
        <h3 style={{ fontSize: '1.2rem', marginTop: 4, ...(side === 'switch' ? { color: '#fff' } : {}) }}>{side === 'switch' ? 'Best available rate' : 'Your current lender'}</h3>
        <div className="tnum" style={{ fontWeight: 600, fontSize: '2rem', letterSpacing: '-.02em', marginTop: 6 }}>{rate}%</div>
      </div>
      <div style={{ padding: '18px 20px', flex: 1 }}>
        {[['Monthly payment', fmt(p)], ['Interest over term', fmt(int)], ['Switch costs', fmt(c)]].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--line)', fontSize: 'var(--fs-sm)' }}><span>{l}</span><b className="tnum">{v}</b></div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', fontSize: 'var(--fs-sm)', fontWeight: 600, borderTop: '2px solid var(--line-2)', marginTop: 4 }}><span>Total cost over term</span><b className="tnum">{fmt(tot)}</b></div>
      </div>
    </div>
  )

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><span>Renewal &amp; switch</span></div>
          <h1>Renew or switch? See both, with costs.</h1>
          <p className="lead">Most people just sign the renewal letter. Enter your numbers and compare staying put against moving your mortgage &mdash; including the switch costs, so the winner is honest.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ display: 'grid', gap: 18, position: 'sticky', top: 82 }}>
            <div className="tr-field"><label htmlFor="r-bal">Balance at renewal</label><input id="r-bal" type="text" inputMode="numeric" value={bal} onChange={(e) => setBal(e.target.value)} onBlur={() => setBal(num(bal).toLocaleString('en-CA'))} /></div>
            <div className="tr-field"><label htmlFor="r-amort">Years remaining</label><select id="r-amort" value={amort} onChange={(e) => setAmort(e.target.value)}><option>15</option><option>20</option><option>25</option></select></div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 8, display: 'block' }}>New term</span>
              <div className="tr-seg" style={{ width: '100%' }}>{[['3', '3 yr'], ['5', '5 yr']].map(([v, l]) => <button key={v} className={term === v ? 'on' : ''} onClick={() => setTerm(v)} type="button" style={{ flex: 1 }}>{l}</button>)}</div>
            </div>
            <div className="tr-field"><label htmlFor="r-stay">Lender&apos;s renewal offer %</label><input id="r-stay" type="text" inputMode="decimal" value={stayR} onChange={(e) => setStayR(e.target.value)} /></div>
            <div className="tr-field"><label htmlFor="r-switch">Best switch rate %</label><input id="r-switch" type="text" inputMode="decimal" value={switchR} onChange={(e) => setSwitchR(e.target.value)} /></div>
            <div className="tr-field"><label htmlFor="r-cost">Est. switch cost (legal/discharge)</label><input id="r-cost" type="text" inputMode="numeric" value={cost} onChange={(e) => setCost(e.target.value)} onBlur={() => setCost(num(cost).toLocaleString('en-CA'))} /></div>
            <p className="tr-note" style={{ margin: 0 }}>A straight switch at renewal usually carries no penalty &mdash; just discharge and legal fees, often covered by the new lender.</p>
          </div>

          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'stretch' }}>
              <Col side="stay" rate={num(stayR).toFixed(2)} p={r.sPay} int={r.sInt} c={0} tot={r.sTot} win={!switchWins} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--ink-mute)', fontSize: '.9rem', background: 'var(--panel)', width: 44, height: 44, borderRadius: '50%', display: 'grid', placeItems: 'center' }}>vs</span></div>
              <Col side="switch" rate={num(switchR).toFixed(2)} p={r.wPay} int={r.wInt} c={r.c} tot={r.wTot} win={switchWins} />
            </div>
            <div style={{ background: 'var(--accent-soft)', border: '1px solid var(--brand-200)', borderRadius: 'var(--r-md)', padding: '18px 22px', marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-ink)' }}>Over the term, switching would</div>
                <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)', marginTop: 4 }}>{switchWins ? 'put you ahead by' : `cost you more — staying wins by ${fmt(-r.diff)}`}</div>
              </div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: '1.8rem', color: 'var(--accent-ink)', marginLeft: 'auto' }}>{switchWins ? fmt(r.diff) : '−' + fmt(-r.diff)}</div>
            </div>
            <div className="tr-advisor" style={{ padding: 'clamp(24px,3vw,36px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">Don&apos;t just sign the letter</span>
                <h2 style={{ fontSize: '1.4rem' }}>Have a broker shop your renewal.</h2>
                <p>Renewal offers are rarely a lender&apos;s best rate. A broker runs your file across the market and handles the switch paperwork if moving wins.</p>
                <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/quote">Shop my renewal</Link></div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul><li><Check />Switch paperwork handled for you</li><li><Check />Told plainly if staying wins</li></ul>
              </div>
            </div>
            <p className="tr-note">Illustrative comparison based on your inputs, using Canadian semi-annual compounding over the selected term. Not an offer of credit. Renewal and switch rates and eligibility are set by the lender. Confirm your exact figures before deciding.</p>
          </div>
        </div>
      </section>
    </>
  )
}
