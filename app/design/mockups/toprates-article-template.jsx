import { useState } from "react";

const TEAL = "#0A7E8C";
const NAVY = "#1B2A4A";

export default function ArticleTemplate() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const handleSubmit = () => { if (email.includes("@")) setSubmitted(true); };

  const toc = ["What's Changing", "Mandatory vs Optional", "Who's Affected", "First Payer Rule", "What Should You Do", "FAQ"];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#2D2D2D", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet" />
      <style>{`
        ::selection { background: rgba(10,126,140,0.12); }
        .ab h2 { font-family: 'Outfit'; font-weight: 700; font-size: 24px; color: ${NAVY}; margin: 48px 0 16px; padding-top: 8px; border-top: 1px solid #f0f2f5; line-height: 1.25; }
        .ab h2:first-of-type { border-top: none; margin-top: 32px; }
        .ab p { font-family: 'Newsreader', Georgia, serif; font-size: 18px; line-height: 1.85; color: #374151; margin: 0 0 22px; }
        .ab ul, .ab ol { font-family: 'Newsreader', Georgia, serif; font-size: 18px; line-height: 1.85; color: #374151; margin: 0 0 22px; padding-left: 20px; }
        .ab li { margin-bottom: 6px; }
        .ab strong { color: ${NAVY}; }
        .ab a { color: ${TEAL}; text-decoration: underline; text-decoration-color: rgba(10,126,140,0.25); text-underline-offset: 3px; }
        .toc-item { display: block; padding: 6px 0; font-size: 13px; cursor: pointer; transition: color 0.15s; border: none; background: none; text-align: left; width: 100%; color: #98a2b3; font-family: 'DM Sans'; }
        .toc-item:hover { color: ${TEAL}; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8ecf0", padding: "0 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 21, color: TEAL, cursor: "pointer" }}>TopRates<span style={{ color: NAVY }}>.ca</span></div>
            {["Car Insurance", "Home Insurance", "Credit Cards", "Guides"].map(l => (
              <span key={l} style={{ fontSize: 13, fontWeight: 500, color: NAVY, cursor: "pointer", borderBottom: l === "Guides" ? `2px solid ${TEAL}` : "2px solid transparent", paddingBottom: 2 }}>{l}</span>
            ))}
          </div>
          <button style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Get Quotes</button>
        </div>
      </nav>

      {/* BREADCRUMBS */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "14px 32px 0", fontSize: 12, color: "#b0b8c4" }}>
        <span style={{ color: TEAL, cursor: "pointer" }}>Home</span> / <span style={{ color: TEAL, cursor: "pointer" }}>Guides</span> / <span style={{ color: "#6b7b8d" }}>Ontario Auto Insurance Changes 2026</span>
      </div>

      {/* LAYOUT */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "28px 32px 80px", display: "flex", gap: 56 }}>

        {/* MAIN */}
        <article style={{ flex: "1 1 0", maxWidth: 680, minWidth: 0 }}>
          <header style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#CC3333", letterSpacing: 0.8, marginBottom: 14 }}>
              REFORM <span style={{ color: "#d0d5db", margin: "0 4px" }}>·</span> <span style={{ color: "#98a2b3", fontWeight: 600 }}>AUTO INSURANCE</span>
            </div>

            <h1 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 36, lineHeight: 1.2, color: NAVY, margin: "0 0 16px" }}>
              Ontario Auto Insurance Changes 2026: Everything You Need to Know
            </h1>

            <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: 19, color: "#6b7b8d", lineHeight: 1.55, margin: "0 0 24px", fontStyle: "italic" }}>
              Starting July 1, 2026, most accident benefits become optional. Here's what every Ontario driver needs to know.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid #f0f2f5" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${NAVY}, #2a3f66)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 14, color: "#fff" }}>G</span>
                </div>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>Gautam</span>
                  <span style={{ fontSize: 12, color: "#b0b8c4", marginLeft: 6 }}>Founder, TopRates.ca</span>
                </div>
              </div>
              <span style={{ fontSize: 12, color: "#b0b8c4" }}>May 4, 2026 · 12 min · <span style={{ color: "#22c55e" }}>●</span> Updated today</span>
            </div>
          </header>

          <div className="ab">

            {/* Key takeaways */}
            <div style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 20, marginBottom: 36 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Key Takeaways</div>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 15, fontFamily: "'DM Sans'", lineHeight: 1.7, color: "#4b5563" }}>
                <li>Income replacement, non-earner, caregiver, housekeeping, and death/funeral benefits become <strong>optional</strong> July 1</li>
                <li>Medical, rehab, and attendant care benefits <strong>stay mandatory</strong></li>
                <li>Auto insurers become <strong>first payer</strong> for medical claims</li>
                <li>Optional benefits now <strong>only cover named insured, spouse, dependants, and listed drivers</strong></li>
                <li>Existing policies auto-renew with current coverage unless you opt out in writing</li>
              </ul>
            </div>

            <h2 id="s-0">What's Changing on July 1, 2026?</h2>
            <p>Ontario's Statutory Accident Benefits Schedule (SABS) — the no-fault benefits portion of your auto insurance policy — is about to undergo its most significant overhaul in over a decade.</p>
            <p>Under the current system, every Ontario auto insurance policy includes a standard package of accident benefits covering everything from income replacement to funeral expenses. That changes on July 1st. Under the new modular framework, most of these benefits become <strong>optional add-ons</strong> that you choose whether to include.</p>
            <p>Only medical, rehabilitation, and attendant care benefits remain mandatory.</p>

            {/* Simple callout */}
            <div style={{ background: "#FFF8F0", borderLeft: `3px solid #e07a3a`, padding: "14px 20px", borderRadius: "0 8px 8px 0", margin: "24px 0 28px" }}>
              <p style={{ margin: 0, fontSize: 15, fontFamily: "'DM Sans'", color: "#7a5a3a", lineHeight: 1.6 }}>
                <strong style={{ color: "#c05a1a" }}>Important:</strong> Optional benefits only apply to the named insured, their spouse, dependants, and listed drivers. Pedestrians and cyclists without their own policy may lose access.
              </p>
            </div>

            <h2 id="s-1">Mandatory vs Optional: The Complete Breakdown</h2>
            <p>Here's what stays mandatory and what becomes optional:</p>

            <div style={{ margin: "0 0 32px", borderRadius: 8, border: "1px solid #e8ecf0", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'DM Sans'", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#f8fafb" }}>
                    <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600, color: NAVY, borderBottom: "1px solid #e8ecf0" }}>Benefit</th>
                    <th style={{ padding: "10px 16px", textAlign: "center", fontWeight: 600, color: NAVY, borderBottom: "1px solid #e8ecf0", width: 100 }}>Before</th>
                    <th style={{ padding: "10px 16px", textAlign: "center", fontWeight: 600, color: NAVY, borderBottom: "1px solid #e8ecf0", width: 100 }}>After</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Medical, rehab & attendant care", "Mandatory", "Mandatory", false],
                    ["Income replacement", "Mandatory", "Optional", true],
                    ["Non-earner benefits", "Mandatory", "Optional", true],
                    ["Housekeeping benefits", "Mandatory", "Optional", true],
                    ["Death & funeral benefits", "Mandatory", "Optional", true],
                    ["Caregiver benefits", "Optional", "Optional", false],
                    ["Dependant care", "Optional", "Optional", false],
                    ["Indexation benefit", "Optional", "Optional", false],
                  ].map(([b, before, after, changed], i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #f0f2f5" }}>
                      <td style={{ padding: "9px 16px", color: "#374151" }}>{b}</td>
                      <td style={{ padding: "9px 16px", textAlign: "center", color: "#6b7b8d" }}>{before}</td>
                      <td style={{ padding: "9px 16px", textAlign: "center", fontWeight: changed ? 600 : 400, color: changed ? "#CC3333" : "#6b7b8d" }}>{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="s-2">Who's Affected?</h2>
            <p>Every Ontario driver is affected, but some groups face significantly more risk:</p>
            <ul>
              <li><strong>Self-employed and gig workers</strong> — no employer disability plan to fall back on. Income replacement is critical.</li>
              <li><strong>Students</strong> — non-earner benefit covers you if an accident prevents normal life activities.</li>
              <li><strong>Retirees</strong> — may not need income replacement, but attendant care matters more.</li>
              <li><strong>Families with kids</strong> — dependant care and caregiver benefits protect your family.</li>
              <li><strong>Pedestrians and cyclists</strong> — may lose access to optional benefits entirely without their own auto policy.</li>
            </ul>

            <h2 id="s-3">The First Payer Rule</h2>
            <p>Starting July 1, your auto insurer becomes the <strong>first payer</strong> for medical and rehabilitation claims after an accident. Previously, your private health plan would cover these costs first.</p>
            <p>Now your auto policy pays first, preserving your workplace benefits for non-accident health needs.</p>

            <div style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 20, margin: "24px 0 28px" }}>
              <p style={{ margin: 0, fontSize: 15, fontFamily: "'DM Sans'", color: "#4a7a7a", lineHeight: 1.6 }}>
                <strong style={{ color: TEAL }}>Tip:</strong> Check if your workplace benefits overlap with your auto coverage. Duplicate protection could help you decide whether certain optional benefits are worth keeping.
              </p>
            </div>

            <h2 id="s-4">What Should You Do Before July 1?</h2>
            <ol>
              <li><strong>Review your current policy.</strong> Understand what benefits you currently have.</li>
              <li><strong>Check your workplace benefits.</strong> Document what your employer-provided plans cover.</li>
              <li><strong>Assess your personal risk.</strong> A self-employed parent needs different coverage than a retired couple.</li>
              <li><strong>Talk to your broker before renewal.</strong> Don't make these decisions alone.</li>
              <li><strong>Don't opt out of everything.</strong> Savings may only be $50–$150/year. Being underinsured after a serious accident is devastating.</li>
            </ol>

            {/* CTA — clean, flat */}
            <div style={{ background: "#f8fafb", border: "1px solid #e8ecf0", borderRadius: 10, padding: "22px 24px", margin: "36px 0" }}>
              <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 4 }}>Compare auto insurance from 30+ carriers</div>
              <p style={{ fontSize: 13, color: "#6b7b8d", margin: "0 0 12px", fontFamily: "'DM Sans'" }}>TopRates.ca launches May 2027. Join the waitlist.</p>
              {!submitted ? (
                <div style={{ display: "flex", gap: 8, maxWidth: 340 }}>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
                    style={{ flex: 1, padding: "9px 14px", borderRadius: 8, border: "1px solid #d0d5db", fontSize: 13, fontFamily: "'DM Sans'", outline: "none" }}
                    onFocus={e => e.target.style.borderColor = TEAL} onBlur={e => e.target.style.borderColor = "#d0d5db"}
                    onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  />
                  <button onClick={handleSubmit} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Join Waitlist</button>
                </div>
              ) : (
                <span style={{ fontSize: 13, color: TEAL, fontWeight: 600 }}>✓ You're on the list!</span>
              )}
            </div>

            <h2 id="s-5">Frequently Asked Questions</h2>
            {[
              { q: "Will my premiums go down?", a: "Possibly, if you remove optional benefits. But savings are typically modest ($50–$150/year) and the risk of being underinsured can be significant." },
              { q: "What if I don't do anything?", a: "Your policy auto-renews with current coverage. But who's covered changes — optional benefits will only cover named insured, spouse, dependants, and listed drivers starting July 1." },
              { q: "Are pedestrians and cyclists still covered?", a: "They may lose access to optional benefits without their own auto policy. Mandatory medical/rehab benefits still apply." },
              { q: "Can I change my benefits mid-policy?", a: "Yes. You can add or remove optional benefits any time after July 1. Only coverage in place at the time of an accident applies." },
              { q: "When should I start thinking about this?", a: "Now. Renewal notices with new options may already be arriving for policies renewing between March and June 2026." },
            ].map((faq, i) => (
              <div key={i} style={{ padding: "16px 0", borderBottom: i < 4 ? "1px solid #f0f2f5" : "none" }}>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 600, fontSize: 16, color: NAVY, marginBottom: 6 }}>{faq.q}</div>
                <p style={{ margin: 0, fontSize: 16 }}>{faq.a}</p>
              </div>
            ))}

            {/* Sources */}
            <div style={{ marginTop: 48, paddingTop: 20, borderTop: "1px solid #f0f2f5" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#b0b8c4", marginBottom: 8 }}>Sources</div>
              {["FSRA — Changes to Statutory Accident Benefits Coverage", "IBAO — Ontario Auto Reform Resources", "IBC — Ontario Auto Insurance Changes", "Ontario Regulation 383/24"].map((s, i) => (
                <div key={i} style={{ fontSize: 12, color: "#b0b8c4", marginBottom: 3 }}><span style={{ color: TEAL }}>[{i+1}]</span> {s}</div>
              ))}
            </div>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside style={{ flex: "0 0 248px" }}>
          <div style={{ position: "sticky", top: 72 }}>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#b0b8c4", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>On This Page</div>
              {toc.map((t, i) => (
                <button key={t} className="toc-item" onClick={() => setActiveSection(i)} style={{ color: activeSection === i ? TEAL : undefined, fontWeight: activeSection === i ? 600 : undefined }}>{t}</button>
              ))}
            </div>

            <div style={{ height: 1, background: "#f0f2f5", marginBottom: 24 }} />

            <div style={{ background: "#f8fafb", borderRadius: 10, border: "1px solid #e8ecf0", padding: "18px 16px", marginBottom: 28 }}>
              <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 4 }}>Compare 30+ carriers</div>
              <p style={{ fontSize: 12, color: "#98a2b3", margin: "0 0 10px", lineHeight: 1.4 }}>Launching May 2027. Snap your pink slip, get quotes in 2 min.</p>
              <button style={{ width: "100%", background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "9px", fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Join Waitlist →</button>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#b0b8c4", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>Related</div>
              {[
                "Which Accident Benefits Are Becoming Optional?",
                "Income Replacement Benefits: Do You Need Them?",
                "Self-Assessment: Which Benefits Do You Need?",
                "What Happens After July 1, 2026?",
              ].map((a, i) => (
                <div key={i} style={{ padding: "9px 0", borderBottom: i < 3 ? "1px solid #f0f2f5" : "none", cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, lineHeight: 1.35, transition: "color 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.color = TEAL}
                    onMouseLeave={e => e.currentTarget.style.color = NAVY}
                  >{a}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#f8fafb", borderTop: "1px solid #e8ecf0", padding: "36px 32px 24px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 40, marginBottom: 24 }}>
            <div style={{ flex: "1 1 28%" }}>
              <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 18, color: TEAL, marginBottom: 6 }}>TopRates<span style={{ color: NAVY }}>.ca</span></div>
              <p style={{ fontSize: 12, color: "#98a2b3", lineHeight: 1.5, margin: 0 }}>AI-powered insurance comparison. Powered by Insurimple (RIBO Licensed).</p>
            </div>
            {[
              { t: "Insurance", l: ["Car Insurance", "Home Insurance", "Business", "Travel"] },
              { t: "Financial", l: ["Mortgage Rates", "Credit Cards"] },
              { t: "Resources", l: ["Guides", "2026 Reform", "About"] },
              { t: "Legal", l: ["Privacy", "Terms", "RIBO Disclosure"] },
            ].map(col => (
              <div key={col.t} style={{ flex: "1 1 17%" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#b0b8c4", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 8 }}>{col.t}</div>
                {col.l.map(l => <div key={l} style={{ fontSize: 12, color: "#98a2b3", marginBottom: 5, cursor: "pointer" }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #e8ecf0", paddingTop: 14, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, color: "#b0b8c4" }}>© 2026 TopRates.ca. Powered by Insurimple (RIBO Licensed).</span>
            <span style={{ fontSize: 11, color: "#d0d5db" }}>Made in Canada 🇨🇦</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
