'use client'

/**
 * TermRates mortgage glossary, ported from glossary.html. Search + A–Z filter over
 * plain-English definitions. Reference content — general in nature, not advice.
 */
import Link from 'next/link'
import { useMemo, useState } from 'react'

const TERMS: { t: string; ab: string; d: string }[] = [
  { t: 'Amortization', ab: '', d: 'The total time to pay off your mortgage in full — commonly 25 years. Longer amortization lowers the payment but raises total interest.' },
  { t: 'Term', ab: '', d: 'The length of your current mortgage contract (e.g. 5 years), after which you renew. Different from amortization, which is the full payoff period.' },
  { t: 'Fixed rate', ab: '', d: 'An interest rate locked for the whole term. Your payment and rate don’t change, whatever the Bank of Canada does.' },
  { t: 'Variable rate', ab: '', d: 'A rate that moves with your lender’s prime rate. Usually lower to start, but exposed to increases and decreases.' },
  { t: 'Prime rate', ab: '', d: 'The benchmark lenders set most variable products against. It moves closely with the Bank of Canada’s overnight rate.' },
  { t: 'Interest-rate differential', ab: 'IRD', d: 'A prepayment penalty on fixed mortgages based on the rate gap between your contract and current rates. Can be large — often the biggest cost of breaking early.' },
  { t: 'Stress test', ab: '', d: 'A federal rule requiring lenders to qualify you at the higher of your rate + 2% or 5.25%, to check you could handle higher payments.' },
  { t: 'Gross debt service', ab: 'GDS', d: 'The share of your gross income going to housing costs — mortgage, property tax, heat, half of condo fees. Lenders typically cap it around 39%.' },
  { t: 'Total debt service', ab: 'TDS', d: 'GDS plus all your other debt payments. Usually capped around 44% of gross income.' },
  { t: 'High-ratio mortgage', ab: '', d: 'A mortgage with less than 20% down. It requires mortgage default insurance and usually carries a lower rate than uninsured.' },
  { t: 'Conventional mortgage', ab: '', d: 'A mortgage with 20% or more down payment. No default insurance is required.' },
  { t: 'Mortgage default insurance', ab: 'CMHC', d: 'Insurance protecting the lender if you default, required on high-ratio mortgages. The premium is usually added to your mortgage.' },
  { t: 'Loan-to-value', ab: 'LTV', d: 'Your mortgage as a percentage of the property’s value. 20% down means an 80% LTV.' },
  { t: 'Prepayment privilege', ab: '', d: 'How much extra you can pay each year without penalty — often 15–20% of the original balance, plus a payment increase.' },
  { t: 'Refinance', ab: '', d: 'Replacing your existing mortgage with a new one — to lower the rate, access equity, or consolidate debt. May trigger a break penalty.' },
  { t: 'Home equity line of credit', ab: 'HELOC', d: 'A revolving credit line secured against your home. You borrow, repay and re-borrow up to a limit, paying interest only on what you use.' },
  { t: 'Blend and extend', ab: '', d: 'Combining your current rate with a new one and extending the term, often to avoid a full break penalty when refinancing.' },
  { t: 'Porting', ab: '', d: 'Moving your existing mortgage and its rate to a new property when you sell and buy, avoiding a penalty.' },
  { t: 'Rate hold', ab: '', d: 'A lender’s guarantee to honour a quoted rate for a set window (often 90–120 days) while you shop or close.' },
  { t: 'Closing costs', ab: '', d: 'One-time costs to complete a purchase — land transfer tax, legal fees, title insurance, appraisal. Budget 1.5–4% of price.' },
]
const LETTERS = ['ALL', ...'ABCDEFGHIJKLMNOPRSTV'.split('')]

export default function TermRatesGlossary() {
  const [q, setQ] = useState('')
  const [letter, setLetter] = useState('ALL')
  const out = useMemo(() => {
    const term = q.trim().toLowerCase()
    return TERMS.filter((x) => {
      const hay = (x.t + ' ' + x.ab + ' ' + x.d).toLowerCase()
      return (!term || hay.includes(term)) && (letter === 'ALL' || x.t.toUpperCase().charAt(0) === letter)
    }).sort((a, b) => a.t.localeCompare(b.t))
  }, [q, letter])

  return (
    <>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/guides">Guides</Link><span className="sep">/</span><span>Glossary</span></div>
          <h1>Mortgage terms, in plain English.</h1>
          <p className="lead">Every term defined the way you&apos;d want a friend to explain it &mdash; no circular jargon. Search, or jump by letter.</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'var(--paper)', border: '1.5px solid var(--line-2)', borderRadius: 'var(--r-md)', padding: '4px 4px 4px 16px', maxWidth: 520, boxShadow: 'var(--sh-sm)', marginTop: 22 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink-mute)" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18, flex: 'none' }}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
            <input value={q} onChange={(e) => { setQ(e.target.value); setLetter('ALL') }} type="text" placeholder="Search terms — e.g. IRD, stress test, amortization" style={{ flex: 1, border: 'none', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '1.02rem', padding: '12px 4px', background: 'none', color: 'var(--ink)' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
            {LETTERS.map((L) => (
              <button key={L} onClick={() => setLetter(L)} type="button" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', width: L === 'ALL' ? 'auto' : 30, padding: L === 'ALL' ? '0 12px' : 0, height: 30, border: '1px solid var(--line)', borderRadius: 'var(--r-sm)', cursor: 'pointer', ...(letter === L ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' } : { background: 'var(--paper)', color: 'var(--ink-soft)' }) }}>{L}</button>
            ))}
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
            {out.length ? out.map((x) => (
              <div key={x.t} className="tr-card" style={{ padding: '20px 22px' }}>
                <h3 style={{ fontSize: '1.12rem', display: 'flex', alignItems: 'baseline', gap: 10 }}>{x.t}{x.ab && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--accent-ink)', background: 'var(--accent-soft)', padding: '2px 7px', borderRadius: 'var(--r-sm)' }}>{x.ab}</span>}</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 'var(--fs-sm)', marginTop: 8, lineHeight: 1.6 }}>{x.d}</p>
              </div>
            )) : <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--ink-mute)', padding: 40, fontFamily: 'var(--font-mono)' }}>No terms match &ldquo;{q}&rdquo;. Try another word.</div>}
          </div>
        </div>
      </section>
    </>
  )
}
