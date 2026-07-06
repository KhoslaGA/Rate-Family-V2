'use client'

/**
 * TermRates land transfer tax calculator (steel). Provincial LTT + Toronto
 * municipal LTT + first-time-buyer rebates. Illustrative estimate — confirm the
 * exact amount with your lawyer/notary; rules and rebates change.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6EE7A8" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const num = (s: string) => Number(String(s).replace(/[^0-9.]/g, '')) || 0
const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-CA')

// Marginal bracket helper: [threshold, rate] applied to the amount in each band.
const bracketTax = (price: number, brackets: [number, number][]) => {
  let tax = 0
  for (let i = 0; i < brackets.length; i++) {
    const lower = brackets[i][0]
    const upper = i + 1 < brackets.length ? brackets[i + 1][0] : Infinity
    if (price > lower) tax += (Math.min(price, upper) - lower) * brackets[i][1]
  }
  return tax
}
const ON: [number, number][] = [[0, 0.005], [55000, 0.01], [250000, 0.015], [400000, 0.02], [2000000, 0.025]]
const TORONTO: [number, number][] = [[0, 0.005], [55000, 0.01], [250000, 0.015], [400000, 0.02], [2000000, 0.025], [3000000, 0.035]]
const BC: [number, number][] = [[0, 0.01], [200000, 0.02], [2000000, 0.03]]
const MB: [number, number][] = [[0, 0], [30000, 0.005], [90000, 0.01], [150000, 0.015], [200000, 0.02]]

type Prov = 'ON' | 'BC' | 'AB' | 'MB' | 'QC' | 'NS' | 'SK'
const PROV: [Prov, string][] = [['ON', 'Ontario'], ['BC', 'British Columbia'], ['AB', 'Alberta'], ['SK', 'Saskatchewan'], ['MB', 'Manitoba'], ['QC', 'Quebec'], ['NS', 'Nova Scotia']]

export default function TermRatesLandTransferTax() {
  const [price, setPrice] = useState('850,000')
  const [prov, setProv] = useState<Prov>('ON')
  const [toronto, setToronto] = useState(true)
  const [ftb, setFtb] = useState(false)

  const r = useMemo(() => {
    const p = num(price)
    let provincial = 0, municipal = 0, provNote = ''
    if (prov === 'ON') provincial = bracketTax(p, ON)
    else if (prov === 'BC') provincial = bracketTax(p, BC)
    else if (prov === 'MB') provincial = bracketTax(p, MB)
    else if (prov === 'NS') { provincial = p * 0.015; provNote = 'Nova Scotia rates are set municipally (~1.5% in Halifax) — shown as an estimate.' }
    else if (prov === 'QC') { provincial = bracketTax(p, [[0, 0.005], [58900, 0.01], [294600, 0.015], [552300, 0.02]]); provNote = 'Quebec "welcome tax" (droit de mutation) varies by municipality; Montreal has extra high-value tiers.' }
    else { provincial = 0; provNote = `${prov === 'AB' ? 'Alberta' : 'Saskatchewan'} has no land transfer tax — only modest land title / registration fees (typically a few hundred dollars).` }

    const inToronto = prov === 'ON' && toronto
    if (inToronto) municipal = bracketTax(p, TORONTO)

    // First-time buyer rebates
    let provRebate = 0, muniRebate = 0
    if (ftb) {
      if (prov === 'ON') provRebate = Math.min(provincial, 4000)
      if (prov === 'BC' && p <= 500000) provRebate = provincial // full exemption ≤ $500k
      else if (prov === 'BC' && p <= 835000) provRebate = Math.min(provincial, 8000)
      if (inToronto) muniRebate = Math.min(municipal, 4475)
    }
    const total = Math.max(0, provincial - provRebate) + Math.max(0, municipal - muniRebate)
    return { provincial, municipal, provRebate, muniRebate, total, inToronto, provNote, rebate: provRebate + muniRebate }
  }, [price, prov, toronto, ftb])

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/calculator">Calculators</Link><span className="sep">/</span><span>Land transfer tax</span></div>
          <h1>Land transfer tax, the closing cost people forget.</h1>
          <p className="lead">One of the biggest cheques you write on closing day &mdash; and in Toronto you pay it twice. Enter your price to see the provincial and municipal tax, and any first-time-buyer rebate.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ display: 'grid', gap: 18, position: 'sticky', top: 82 }}>
            <div className="tr-field"><label htmlFor="l-price">Purchase price</label><input id="l-price" type="text" inputMode="numeric" value={price} onChange={(e) => setPrice(e.target.value)} onBlur={() => setPrice(num(price).toLocaleString('en-CA'))} /></div>
            <div className="tr-field"><label htmlFor="l-prov">Province</label><select id="l-prov" value={prov} onChange={(e) => setProv(e.target.value as Prov)}>{PROV.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
            {prov === 'ON' && (
              <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>Property in the City of Toronto?</span>
                <div className="tr-seg" style={{ width: '100%' }}>{[[true, 'Yes'], [false, 'No']].map(([v, l]) => <button key={String(v)} className={toronto === v ? 'on' : ''} onClick={() => setToronto(v as boolean)} type="button" style={{ flex: 1 }}>{l}</button>)}</div></div>
            )}
            <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 7, display: 'block' }}>First-time buyer?</span>
              <div className="tr-seg" style={{ width: '100%' }}>{[[true, 'Yes'], [false, 'No']].map(([v, l]) => <button key={String(v)} className={ftb === v ? 'on' : ''} onClick={() => setFtb(v as boolean)} type="button" style={{ flex: 1 }}>{l}</button>)}</div></div>
            <p className="tr-note" style={{ margin: 0 }}>Toronto buyers pay both the Ontario and a municipal land transfer tax. First-time-buyer rebates apply where eligible.</p>
          </div>

          <div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 30 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Total land transfer tax due on closing</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: 'clamp(2.6rem,5vw,3.6rem)', letterSpacing: '-.03em', marginTop: 4 }}>{fmt(r.total)}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 22 }}>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{fmt(r.provincial)}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Provincial LTT</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{r.inToronto ? fmt(r.municipal) : '—'}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Municipal (Toronto) LTT</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem', color: r.rebate ? '#6EE7A8' : undefined }}>{r.rebate ? '−' + fmt(r.rebate) : '—'}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>First-time-buyer rebate</div></div>
                <div><div className="tnum" style={{ fontWeight: 600, fontSize: '1.3rem' }}>{num(price) > 0 ? ((r.total / num(price)) * 100).toFixed(2) + '%' : '—'}</div><div style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.7)' }}>Effective rate of price</div></div>
              </div>
            </div>

            <div className="tr-card" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 12 }}>Breakdown</div>
              {[['Provincial land transfer tax', fmt(r.provincial)], ...(r.inToronto ? [['Toronto municipal LTT', fmt(r.municipal)] as [string, string]] : []), ...(r.rebate ? [['First-time-buyer rebate', '−' + fmt(r.rebate)] as [string, string]] : [])].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid var(--line)', fontSize: 'var(--fs-sm)' }}><span>{l}</span><b className="tnum">{v}</b></div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 0', fontSize: 'var(--fs-sm)', fontWeight: 600 }}><span>Total due on closing</span><b className="tnum">{fmt(r.total)}</b></div>
              {r.provNote && <p className="tr-note" style={{ marginBottom: 0 }}>{r.provNote}</p>}
            </div>

            <div className="tr-advisor" style={{ padding: 'clamp(24px,3vw,36px)', marginTop: 20 }}>
              <div className="tr-advisor-copy">
                <span className="eyebrow">Budget the whole closing</span>
                <h2 style={{ fontSize: '1.4rem' }}>Land transfer tax is one of several closing costs.</h2>
                <p>Legal fees, title insurance, appraisal and adjustments add up too. A licensed mortgage professional will map your full cash-to-close before you firm up an offer.</p>
                <div className="tr-advisor-cta"><Link className="btn btn-accent btn-lg" href="/mortgages/quote">Get my rate</Link><Link className="btn btn-ghost btn-lg" href="/mortgages/calculator">Estimate my payment</Link></div>
              </div>
              <div className="tr-advisor-card">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '1.05rem', marginBottom: 14 }}>What a licensed mortgage professional does</div>
                <ul><li><Check />Maps your full cash-to-close</li><li><Check />Flags the rebates you qualify for</li></ul>
              </div>
            </div>
            <p className="tr-note">Illustrative estimate using published provincial and Toronto municipal land-transfer-tax brackets and standard first-time-buyer rebate limits. Rebate eligibility, high-value tiers and non-resident/speculation taxes are not modelled. Confirm the exact amount with your real-estate lawyer or notary before closing. Not an offer of credit.</p>
          </div>
        </div>
      </section>
    </>
  )
}
