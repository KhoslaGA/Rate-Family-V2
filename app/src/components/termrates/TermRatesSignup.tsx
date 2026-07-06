'use client'

/**
 * TermRates "get matched" step, ported from signup.html. Light 3-step lead capture
 * — we only ask for details once you're ready to act; comparing needs no account.
 * Illustrative matched rate; a licensed broker confirms eligibility.
 */
import Link from 'next/link'
import { useState } from 'react'

const Arrow = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Check = ({ light }: { light?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={light ? '#6EE7A8' : 'var(--up)'} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flex: 'none' }}><path d="M20 6 9 17l-5-5" /></svg>
)
const fieldStyle: React.CSSProperties = { fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '12px 13px', border: '1.5px solid var(--line-2)', borderRadius: 'var(--r-sm)', background: 'var(--paper)', color: 'var(--ink)' }
const labelStyle: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500 }

export default function TermRatesSignup() {
  const [step, setStep] = useState(1)

  return (
    <main>
      <div className="tr-phead">
        <div className="wrap tr-phead-in">
          <div className="tr-crumb"><Link href="/">Home</Link><span className="sep">/</span><Link href="/mortgages/quote">Get my rate</Link><span className="sep">/</span><span>Get matched</span></div>
          <h1>Lock the number in with a broker.</h1>
          <p className="lead">Create a free account to save your scenario, get matched to a licensed mortgage professional, and track your rate. We only ask for details now that you&apos;re ready to act.</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--sp-6)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'var(--sp-6)', alignItems: 'start' }}>
          <div className="tr-card" style={{ padding: 30 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>{[1, 2, 3].map((n) => <div key={n} style={{ flex: 1, height: 5, borderRadius: 3, background: n <= step ? 'var(--accent)' : 'var(--panel)' }} />)}</div>

            {step === 1 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem' }}>Your details</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 'var(--fs-sm)', margin: '6px 0 20px' }}>So a broker can prepare your file and reach you.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>First name</label><input type="text" style={fieldStyle} /></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>Last name</label><input type="text" style={fieldStyle} /></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>Email</label><input type="email" placeholder="you@email.com" style={fieldStyle} /></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>Phone</label><input type="tel" placeholder="(000) 000-0000" style={fieldStyle} /></div>
                <button className="btn btn-accent btn-lg" type="button" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setStep(2)}>Continue <Arrow /></button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem' }}>Your mortgage</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 'var(--fs-sm)', margin: '6px 0 20px' }}>Confirm the scenario you&apos;d like priced.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>Purpose</label><select style={fieldStyle}><option>New purchase</option><option>Renewal</option><option>Refinance</option></select></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>Province</label><select style={fieldStyle}><option>Ontario</option><option>British Columbia</option><option>Alberta</option><option>Quebec</option></select></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>Property value</label><input type="text" inputMode="numeric" defaultValue="750,000" style={fieldStyle} /></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}><label style={labelStyle}>Timeline</label><select style={fieldStyle}><option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Just researching</option></select></div>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button className="btn btn-ghost btn-lg" type="button" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(1)}>Back</button>
                  <button className="btn btn-accent btn-lg" type="button" style={{ flex: 2, justifyContent: 'center' }} onClick={() => setStep(3)}>Get matched <Arrow /></button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--up-soft)', color: 'var(--up)', display: 'grid', placeItems: 'center', margin: '0 auto 18px' }}><Check /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.4rem' }}>You&apos;re matched</h3>
                <p style={{ color: 'var(--ink-soft)', marginTop: 8, maxWidth: '38ch', marginInline: 'auto' }}>Your scenario is saved and a licensed broker will reach out &mdash; usually within one business day &mdash; to confirm your rate and next steps.</p>
                <Link className="btn btn-accent btn-lg" href="/rates" style={{ marginTop: 22 }}>Keep browsing rates</Link>
              </div>
            )}
            <p className="tr-note" style={{ marginTop: 18 }}>By continuing you agree we may contact you about your enquiry and share your details with a lender to arrange the mortgage you requested. We don&apos;t sell your information. See our <Link href="/legal" style={{ color: 'var(--accent-ink)', textDecoration: 'underline' }}>privacy policy</Link>.</p>
          </div>

          {/* Summary */}
          <div>
            <div style={{ background: 'linear-gradient(160deg,var(--brand-700),var(--brand-900))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 28 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--brand-200)' }}>Your matched rate</div>
              <div className="tnum" style={{ fontWeight: 600, fontSize: '3rem', letterSpacing: '-.03em', marginTop: 4 }}>4.09%</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: 'var(--brand-200)' }}>5yr fixed · insured · from Nesto</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0', padding: '16px 0', borderBlock: '1px solid rgba(255,255,255,.15)' }}>
                <span style={{ width: 44, height: 44, borderRadius: 'var(--r-sm)', background: 'var(--brand-200)', color: 'var(--brand-700)', display: 'grid', placeItems: 'center' }} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div><b style={{ display: 'block' }}>A licensed mortgage professional</b><span style={{ fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.7)' }}>Matched to your scenario</span></div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.88)' }}><Check light />Full lender panel, one application</li>
                <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.88)' }}><Check light />Rate hold while you finalize</li>
                <li style={{ display: 'flex', gap: 9, fontSize: 'var(--fs-sm)', color: 'rgba(255,255,255,.88)' }}><Check light />No fee to you on prime deals</li>
              </ul>
            </div>
            <div className="tr-callout" style={{ marginTop: 16 }}>
              <span className="k">Already have an account?</span>
              <p style={{ marginTop: 6, color: 'var(--ink)', fontSize: 'var(--fs-sm)' }}>Sign in to see your saved scenarios and rate alerts.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
