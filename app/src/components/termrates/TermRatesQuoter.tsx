'use client'

/**
 * TermRates bespoke quoter — now wired to the backend mortgage rater
 * through the client seam (@/lib/api/client → POST /v1/quotes/mortgage).
 * The lender panel, LTV, CMHC insurance premium, and B-20 stress test are
 * all computed server-side (mock, deterministic) instead of inline. The
 * form drives the request; results fetch async with loading/error states.
 * Illustrative sample math only; the real lender panel reconciles here
 * later via the same adapter seam. Swap-to-live = NEXT_PUBLIC_API_BASE.
 */
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { quoteMortgage, ApiError } from '@/lib/api/client'
import type { MortgageRateType, MortgageTerm } from '@ratefamily/contracts'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
)

// two-letter lender glyphs for the result rows (display only)
const LENDER_GLYPH: Record<string, string> = {
  'Nesto': 'NB', 'MCAP': 'MC', 'First National': 'FN', 'TD Bank': 'TD', 'RBC': 'RB', 'CIBC': 'CB',
}

const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => n.toLocaleString('en-CA', { maximumFractionDigits: 0 })

interface LenderRow { lender: string; channel: string; ratePct: number; monthlyPayment: number }
interface MortgageData {
  loanAmount: number; ltvPct: number; insured: boolean; insurancePremium: number
  principal: number; stressTestRatePct: number; quotes: LenderRow[]; best: LenderRow | null
}
type ResultState =
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'done'; data: MortgageData }

export default function TermRatesQuoter() {
  const [purpose, setPurpose] = useState('buy')
  const [type, setType] = useState('fixed')
  const [term, setTerm] = useState('5')
  const [price, setPrice] = useState('750,000')
  const [down, setDown] = useState('150,000')
  const [amort, setAmort] = useState('25')
  const [prov, setProv] = useState('Ontario')

  const [results, setResults] = useState<ResultState>({ phase: 'loading' })
  const debounce = useRef<ReturnType<typeof setTimeout>>()

  const p = num(price)
  const d = num(down)
  const loan = Math.max(p - d, 0)
  const ltv = p > 0 ? Math.round((loan / p) * 100) : 0
  const insured = ltv > 80

  const purposeApi = purpose === 'refi' ? 'refinance' : (purpose as 'buy' | 'renew')

  const fetchRates = useCallback(async () => {
    setResults({ phase: 'loading' })
    try {
      const data = (await quoteMortgage({
        purpose: purposeApi,
        rateType: (type === 'var' ? 'variable' : 'fixed') as MortgageRateType,
        term: term as MortgageTerm,
        propertyPrice: p,
        downPayment: d,
        amortizationYears: num(amort),
      })) as unknown as MortgageData
      setResults({ phase: 'done', data })
    } catch (err) {
      setResults({ phase: 'error', message: err instanceof ApiError ? err.message : 'Could not load rates.' })
    }
  }, [purposeApi, type, term, p, d, amort])

  // re-fetch (debounced) whenever the scenario changes — the "re-sorting live" feel
  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current)
    debounce.current = setTimeout(fetchRates, 300)
    return () => { if (debounce.current) clearTimeout(debounce.current) }
  }, [fetchRates])

  const cards = results.phase === 'done' ? results.data.quotes : []

  const Seg = ({ opts, val, set }: { opts: [string, string][]; val: string; set: (v: string) => void }) => (
    <div className="q-seg">
      {opts.map(([v, label]) => (
        <button key={v} className={val === v ? 'on' : ''} onClick={() => set(v)} type="button">{label}</button>
      ))}
    </div>
  )

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><span>Get my rate</span></div>
          <h1>Your scenario, matched to the market.</h1>
          <p className="lead">Set your details on the left and watch matched rates re-sort on the right &mdash; instantly, no email required. When one looks right, a licensed broker takes it from there.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          {/* FORM */}
          <div className="tr-card" style={{ padding: 0, overflow: 'hidden', position: 'sticky', top: 82 }}>
            <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--line)', background: 'var(--panel-2)' }}>
              <b style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem' }}>Your scenario</b>
              <span style={{ display: 'block', fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', marginTop: 3 }}>No account, no email to compare</span>
            </div>
            <div style={{ padding: 22, display: 'grid', gap: 18 }}>
              <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>I&apos;m looking to</span>
                <Seg opts={[['buy', 'Buy'], ['renew', 'Renew'], ['refi', 'Refinance']]} val={purpose} set={setPurpose} /></div>
              <div className="tr-field"><label htmlFor="q-price">Property value</label><input id="q-price" type="text" inputMode="numeric" value={price} onChange={(e) => setPrice(e.target.value)} onBlur={() => setPrice(fmt(num(price)))} /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div className="tr-field"><label htmlFor="q-down">Down / equity</label><input id="q-down" type="text" inputMode="numeric" value={down} onChange={(e) => setDown(e.target.value)} onBlur={() => setDown(fmt(num(down)))} /></div>
                <div className="tr-field"><label htmlFor="q-amort">Amortization</label><select id="q-amort" value={amort} onChange={(e) => setAmort(e.target.value)}><option>20</option><option>25</option><option>30</option></select></div>
              </div>
              <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>Rate type</span>
                <Seg opts={[['fixed', 'Fixed'], ['var', 'Variable']]} val={type} set={setType} /></div>
              <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>Term</span>
                <Seg opts={[['3', '3 yr'], ['5', '5 yr'], ['10', '10 yr']]} val={term} set={setTerm} /></div>
              <div className="tr-field"><label htmlFor="q-prov">Province</label><select id="q-prov" value={prov} onChange={(e) => setProv(e.target.value)}><option>Ontario</option><option>British Columbia</option><option>Alberta</option><option>Quebec</option><option>Manitoba</option><option>Nova Scotia</option></select></div>
              <div className="tr-callout" style={{ padding: '12px 14px' }}>
                <span className="k">Loan-to-value</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}><b className="tnum" style={{ fontSize: '1.3rem' }}>{ltv}%</b><span style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)' }}>{insured ? 'High-ratio · insured' : 'Conventional · uninsured'}</span></div>
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
              <h2 style={{ fontSize: '1.5rem' }}>Matched rates</h2>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)' }}>
                {results.phase === 'loading' ? 'Re-sorting…' : results.phase === 'done' ? `Re-sorting live · ${cards.length} lenders` : ''}
              </span>
            </div>

            {results.phase === 'error' && (
              <div className="tr-card" style={{ padding: 22, textAlign: 'center' }}>
                <b style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem' }}>Couldn’t load rates</b>
                <p style={{ color: 'var(--ink-soft)', fontSize: 'var(--fs-sm)', margin: '8px 0 16px' }}>{results.message} Your scenario is saved — nothing to re-enter.</p>
                <button className="btn btn-accent" type="button" onClick={fetchRates}>Try again <Arrow /></button>
              </div>
            )}

            <div style={{ display: 'grid', gap: 12 }}>
              {results.phase === 'loading' && [0, 1, 2, 3].map((i) => (
                <div key={i} className="tr-card" style={{ height: 76, opacity: 0.5, animation: 'pulse 1.2s ease-in-out infinite' }} />
              ))}

              {results.phase === 'done' && cards.map((c, i) => (
                <div key={c.lender} className="tr-card" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', alignItems: 'center', gap: 16, position: 'relative', ...(i === 0 ? { borderColor: 'var(--brand-300)', boxShadow: '0 0 0 3px var(--accent-soft), var(--sh-sm)' } : {}) }}>
                  {i === 0 && <span style={{ position: 'absolute', top: -10, left: 20, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.06em', textTransform: 'uppercase', color: '#fff', background: 'var(--accent)', padding: '3px 9px', borderRadius: 'var(--r-pill)' }}>Best match</span>}
                  <span style={{ width: 40, height: 40, borderRadius: 'var(--r-sm)', background: 'var(--panel)', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.9rem', color: 'var(--accent-ink)' }}>{LENDER_GLYPH[c.lender] ?? c.lender.slice(0, 2).toUpperCase()}</span>
                  <div><b style={{ fontWeight: 600 }}>{c.lender}</b><div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)', display: 'flex', gap: 8, marginTop: 3 }}><span>{c.channel}</span><span>·</span><span>{term}yr {type === 'var' ? 'variable' : 'fixed'}</span></div></div>
                  <div className="tnum" style={{ fontWeight: 600, fontSize: '1.7rem', letterSpacing: '-.02em', textAlign: 'right', ...(i === 0 ? { color: 'var(--accent-ink)' } : {}) }}>{c.ratePct.toFixed(2)}%</div>
                  <div style={{ textAlign: 'right' }}><div className="tnum" style={{ fontWeight: 600, fontSize: '1.1rem' }}>${fmt(c.monthlyPayment)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-mute)' }}>/mo est.</div></div>
                </div>
              ))}
            </div>

            {results.phase === 'done' && (
              <div className="tr-callout" style={{ padding: '12px 14px', marginTop: 12 }}>
                <span className="k">Stress-test qualifying rate</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
                  <b className="tnum" style={{ fontSize: '1.2rem' }}>{results.data.stressTestRatePct.toFixed(2)}%</b>
                  <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-soft)' }}>lenders qualify you at this rate (B-20){results.data.insured ? ` · CMHC premium $${fmt(results.data.insurancePremium)}` : ''}</span>
                </div>
              </div>
            )}

            <div className="tr-advisor" style={{ padding: 'clamp(26px,3.4vw,40px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">Ready to lock it?</span>
                <h2 style={{ fontSize: '1.5rem' }}>Get matched to a licensed mortgage professional.</h2>
                <p>Share your details once and a licensed mortgage professional confirms eligibility and holds the rate &mdash; paid by the lender, not by you. TermRates connects you; it does not arrange the mortgage itself.</p>
                <div className="tr-advisor-cta">
                  <Link className="btn btn-accent btn-lg" href="/mortgages/signup">Get matched now</Link>
                  <Link className="btn btn-ghost btn-lg" href="/mortgages/calculator">See full payment</Link>
                </div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul>
                  <li><Check />One application, full lender panel</li>
                  <li><Check />No fee to you on prime deals</li>
                </ul>
              </div>
            </div>
            <p className="tr-note">Rates matched to your inputs are illustrative estimates for well-qualified borrowers, not an offer of credit or a guarantee of eligibility. Final rate and approval are set by the lender after a full application. Figures for comparison only.</p>
          </div>
        </div>
      </section>
    </>
  )
}
