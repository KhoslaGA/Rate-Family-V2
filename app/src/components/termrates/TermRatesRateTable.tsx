'use client'

/**
 * TermRates full rate table, ported from compare-table.html. Filter by type /
 * term / insurance, sort by any column. Illustrative rates, refreshed on
 * business days in the live build — no "lowest rate" claim is made or implied.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const LENDERS = [
  { lg: 'NB', lender: 'Nesto', channel: 'Digital lender', off: 0.0 },
  { lg: 'MC', lender: 'MCAP', channel: 'Broker channel', off: 0.1 },
  { lg: 'FN', lender: 'First National', channel: 'Broker channel', off: 0.12 },
  { lg: 'TD', lender: 'TD Bank', channel: 'Big Six', off: 0.7 },
  { lg: 'RB', lender: 'RBC', channel: 'Big Six', off: 0.75 },
  { lg: 'SC', lender: 'Scotiabank', channel: 'Big Six', off: 0.8 },
  { lg: 'CB', lender: 'CIBC', channel: 'Big Six', off: 0.72 },
  { lg: 'BM', lender: 'BMO', channel: 'Big Six', off: 0.78 },
]
const TERMS = [1, 2, 3, 5, 10]
const BASE: Record<string, number> = {
  '1-fixed': 5.64, '2-fixed': 4.79, '3-fixed': 4.24, '5-fixed': 4.09, '10-fixed': 5.29,
  '1-var': 6.2, '2-var': 5.55, '3-var': 5.2, '5-var': 4.95, '10-var': 6.1,
}
const DELTAS = [-0.06, 0, 0.03, -0.25, -0.04, 0.02]

type BaseRow = { lg: string; lender: string; channel: string; term: number; type: string; insured: number; uninsured: number; delta: number }
const ROWS: BaseRow[] = []
LENDERS.forEach((L) => {
  TERMS.forEach((t) => {
    (['fixed', 'var'] as const).forEach((ty) => {
      if (t === 10 && ty === 'var') return
      const r = BASE[`${t}-${ty}`] + L.off
      ROWS.push({ lg: L.lg, lender: L.lender, channel: L.channel, term: t, type: ty, insured: r, uninsured: r + 0.15, delta: DELTAS[(t + L.lender.length) % 6] })
    })
  })
})

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export default function TermRatesRateTable() {
  const [segType, setSegType] = useState('all')
  const [term, setTerm] = useState('5')
  const [ins, setIns] = useState('insured')
  const [sortK, setSortK] = useState('rate')
  const [sortDir, setSortDir] = useState(1)

  const out = useMemo(() => {
    const rows = ROWS.filter((r) => (segType === 'all' || r.type === segType) && (term === 'all' || String(r.term) === term)).map((r) => ({
      lg: r.lg, lender: r.lender, channel: r.channel, term: r.term, type: r.type,
      rate: ins === 'uninsured' ? r.uninsured : r.insured, delta: r.delta,
    }))
    rows.sort((x, y) => {
      const nk = sortK as 'rate' | 'term' | 'delta'
      const v = sortK === 'lender' ? x.lender.localeCompare(y.lender) : x[nk] - y[nk]
      return v * sortDir
    })
    return rows
  }, [segType, term, ins, sortK, sortDir])

  const min = out.length ? Math.min(...out.map((r) => r.rate)) : 0
  const sort = (k: string) => { if (sortK === k) setSortDir((d) => -d); else { setSortK(k); setSortDir(1) } }

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><span>Rate table</span></div>
          <h1>The whole Canadian rate table.</h1>
          <p className="lead">Every tracked lender, one grid. Filter to your exact scenario and sort by the column that matters. Refreshed on business days &mdash; no account, no email wall.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap">
          <div className="tr-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 18, alignItems: 'flex-end' }}>
            <div className="tr-controls">
              <div className="tr-field">
                <label>Rate type</label>
                <div className="tr-seg">
                  {[['all', 'All'], ['fixed', 'Fixed'], ['var', 'Variable']].map(([v, l]) => (
                    <button key={v} className={segType === v ? 'on' : ''} onClick={() => setSegType(v)} type="button">{l}</button>
                  ))}
                </div>
              </div>
              <div className="tr-field"><label htmlFor="f-term">Term</label>
                <select id="f-term" value={term} onChange={(e) => setTerm(e.target.value)}><option value="all">All terms</option><option value="1">1 year</option><option value="2">2 year</option><option value="3">3 year</option><option value="5">5 year</option><option value="10">10 year</option></select>
              </div>
              <div className="tr-field"><label htmlFor="f-ins">Insurance</label>
                <select id="f-ins" value={ins} onChange={(e) => setIns(e.target.value)}><option value="all">All</option><option value="insured">Insured (&lt;20%)</option><option value="uninsured">Uninsured (20%+)</option></select>
              </div>
            </div>
            <Link className="btn btn-accent" href="/mortgages/quote">Get my personalized rate <Arrow /></Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '16px 0', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--ink-soft)' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--up)' }} />Live · updated 08:30 ET, business days</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--ink-mute)', marginLeft: 'auto' }}>{out.length} rates shown</span>
          </div>

          <div className="tr-table-wrap">
            <table className="tr-table">
              <thead>
                <tr>
                  <th style={{ cursor: 'pointer' }} onClick={() => sort('lender')}>Lender</th>
                  <th>Channel</th>
                  <th>Type</th>
                  <th style={{ cursor: 'pointer' }} onClick={() => sort('term')}>Term</th>
                  <th className="num" style={{ cursor: 'pointer' }} onClick={() => sort('rate')}>Rate</th>
                  <th className="num" style={{ cursor: 'pointer' }} onClick={() => sort('delta')}>7-day</th>
                  <th className="num" />
                </tr>
              </thead>
              <tbody>
                {out.map((r, i) => (
                  <tr key={i}>
                    <td><div className="lender-cell"><span className="lg">{r.lg}</span><b>{r.lender}</b></div></td>
                    <td><small style={{ color: 'var(--ink-mute)' }}>{r.channel}</small></td>
                    <td><span className={`pill ${r.type === 'var' ? 'var' : 'fixed'}`}>{r.type === 'var' ? 'Variable' : 'Fixed'}</span></td>
                    <td className="tnum" style={{ color: 'var(--ink-soft)' }}>{r.term}yr</td>
                    <td className={`num${r.rate === min ? ' best-rate' : ''}`}>{r.rate.toFixed(2)}%</td>
                    <td className="num">
                      {r.delta < 0 ? <span className="delta down">▼ {Math.abs(r.delta).toFixed(2)}</span> : r.delta > 0 ? <span className="delta up">▲ {r.delta.toFixed(2)}</span> : <span className="delta flat">— 0.00</span>}
                    </td>
                    <td className="row-cta"><Link href="/mortgages/quote">Get rate &rarr;</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tr-note">Illustrative rates for well-qualified borrowers, refreshed on business days from lender and broker-channel postings. Not an offer of credit and not a guarantee of eligibility. Your actual rate is set by the lender based on your application, credit, property, term and applicable regulations, and varies by province. Figures shown for comparison only &mdash; no &ldquo;lowest rate&rdquo; claim is made or implied.</p>
        </div>
      </section>
    </>
  )
}
