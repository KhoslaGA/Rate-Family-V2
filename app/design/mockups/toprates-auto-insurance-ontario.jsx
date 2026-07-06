import { useState } from "react";

const TEAL = "#0A7E8C";
const NAVY = "#1B2A4A";
const GOLD = "#B8960C";

export default function AutoInsuranceOntario() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => { if (email.includes("@")) setSubmitted(true); };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#2D2D2D", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet" />

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8ecf0", padding: "0 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 21, color: TEAL, cursor: "pointer" }}>TopRates<span style={{ color: NAVY }}>.ca</span></div>
            {["Car Insurance", "Home Insurance", "Credit Cards", "Guides"].map(l => (
              <span key={l} style={{ fontSize: 13, fontWeight: 500, color: NAVY, cursor: "pointer", borderBottom: l === "Car Insurance" ? `2px solid ${TEAL}` : "2px solid transparent", paddingBottom: 2 }}>{l}</span>
            ))}
          </div>
          <button style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Get Quotes</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #0f1e38 100%)`,
        padding: "64px 32px 72px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(10,126,140,0.06)" }} />
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 12, color: "#b0b8c4", marginBottom: 6 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>Home</span>
            <span style={{ margin: "0 6px", opacity: 0.3 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Car Insurance Ontario</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
            <div style={{ flex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(204,51,51,0.15)", border: "1px solid rgba(204,51,51,0.25)",
                borderRadius: 14, padding: "4px 12px", marginBottom: 18,
              }}>
                <span style={{ fontSize: 10 }}>⚡</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#ff6b6b", letterSpacing: 0.3 }}>Major changes coming July 1, 2026</span>
              </div>

              <h1 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 38, lineHeight: 1.15, color: "#fff", margin: "0 0 14px" }}>
                Compare Car Insurance<br />in Ontario
              </h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: "0 0 28px", maxWidth: 460 }}>
                Get quotes from 30+ carriers in under 2 minutes. AI-powered comparison finds you the best rate and the right coverage.
              </p>

              {!submitted ? (
                <div style={{ display: "flex", gap: 10, maxWidth: 420 }}>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email for early access"
                    style={{ flex: 1, padding: "13px 16px", borderRadius: 10, border: "2px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.07)", color: "#fff", fontSize: 14, fontFamily: "'DM Sans'", outline: "none" }}
                    onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  />
                  <button onClick={handleSubmit} style={{ background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, color: "#fff", border: "none", borderRadius: 10, padding: "13px 24px", fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>Join Waitlist</button>
                </div>
              ) : (
                <div style={{ background: "rgba(10,126,140,0.15)", border: "1px solid rgba(10,126,140,0.3)", borderRadius: 10, padding: "12px 16px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span>✅</span><span style={{ color: "#12b8ca", fontWeight: 600, fontSize: 13 }}>You're on the list! We'll notify you at launch.</span>
                </div>
              )}

              <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
                {["30+ carriers", "Under 2 min", "100% free", "RIBO licensed"].map(t => (
                  <span key={t} style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
                    <span style={{ color: TEAL }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ flex: "0 0 260px" }}>
              {[
                { label: "Average Ontario auto premium", value: "$1,920/yr", sub: "2026 average" },
                { label: "Average savings with TopRates", value: "$612/yr", sub: "by comparing carriers" },
                { label: "Time to compare quotes", value: "<2 min", sub: "with pink slip upload" },
              ].map((s, i) => (
                <div key={i} style={{ padding: "16px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: i === 1 ? "#12b8ca" : "#fff" }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFORM ALERT */}
      <section style={{ background: "#FFF8F0", borderBottom: "1px solid rgba(184,150,12,0.12)", padding: "20px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 20 }}>⚠️</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>Ontario Auto Insurance Reform — July 1, 2026: </span>
            <span style={{ fontSize: 14, color: "#7a6d4a" }}>Most accident benefits becoming optional. </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: TEAL, cursor: "pointer" }}>Read our complete guide →</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "64px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>How It Works</div>
            <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 28, color: NAVY, margin: 0 }}>Compare Ontario auto insurance in 3 steps</h2>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            {[
              { n: "1", title: "Snap your pink slip", desc: "Upload a photo of your current insurance card. Our AI extracts vehicle, driver, and coverage details automatically. Or enter your info manually — takes about 5 minutes.", icon: "📸" },
              { n: "2", title: "We compare 30+ carriers", desc: "Your profile is sent to Ontario's top insurance companies simultaneously. Real quotes from real carriers, personalized to your driving history and coverage needs.", icon: "🔍" },
              { n: "3", title: "Choose & save", desc: "See quotes side by side. Compare not just price, but coverage, deductibles, and discounts. Bind your policy online through our licensed brokerage partner.", icon: "✅" },
            ].map(s => (
              <div key={s.n} style={{ flex: 1, padding: "28px 24px", borderRadius: 12, border: "1px solid #e8ecf0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: s.n === "1" ? `linear-gradient(135deg, ${TEAL}, #0d9aa8)` : "#f0f2f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 0.8 }}>STEP {s.n}</div>
                </div>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 18, color: NAVY, margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7b8d", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS YOUR RATE */}
      <section style={{ padding: "64px 32px", background: "#f8fafb" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: NAVY, margin: "0 0 8px" }}>What affects your auto insurance rate in Ontario?</h2>
          <p style={{ fontSize: 15, color: "#6b7b8d", marginBottom: 28, maxWidth: 600 }}>Every carrier weighs these factors differently — which is why comparing quotes matters.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { factor: "Driving record", detail: "Tickets, accidents, and convictions from the past 6 years. Clean records get the best rates." },
              { factor: "Location", detail: "Your postal code matters. Urban areas like Brampton and Toronto have higher rates than rural Ontario." },
              { factor: "Vehicle", detail: "Make, model, year, and safety features. Cars that are expensive to repair or commonly stolen cost more to insure." },
              { factor: "Age & experience", detail: "Young drivers (under 25) and new drivers pay more. Rates typically drop after 6+ years of experience." },
              { factor: "Coverage level", detail: "Liability limits, collision, comprehensive, and optional add-ons all affect your premium." },
              { factor: "Claims history", detail: "At-fault claims stay on your record for 6 years. Even not-at-fault claims can affect rates with some carriers." },
            ].map((f, i) => (
              <div key={i} style={{ padding: "20px 22px", background: "#fff", borderRadius: 10, border: "1px solid #e8ecf0" }}>
                <h4 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 15, color: NAVY, margin: "0 0 6px" }}>{f.factor}</h4>
                <p style={{ fontSize: 13, color: "#6b7b8d", lineHeight: 1.5, margin: 0 }}>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section style={{ padding: "64px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 24, color: NAVY, margin: 0 }}>Ontario auto insurance guides</h2>
            <span style={{ fontSize: 13, fontWeight: 600, color: TEAL, cursor: "pointer" }}>View all guides →</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { tag: "REFORM", tc: "#CC3333", title: "Ontario Auto Insurance Changes 2026: Everything You Need to Know", date: "May 4", read: "12 min" },
              { tag: "GUIDE", tc: TEAL, title: "Income Replacement Benefits: Do You Need Them?", date: "May 11", read: "7 min" },
              { tag: "COMPARE", tc: "#0D8050", title: "Cheapest Car Insurance in Ontario 2026", date: "Jun 5", read: "10 min" },
              { tag: "TOOL", tc: "#6B46C1", title: "Self-Assessment: Which Optional Benefits Do You Need?", date: "May 22", read: "Interactive" },
              { tag: "PERSONA", tc: GOLD, title: "Self-Employed & Gig Workers: Coverage Guide", date: "May 27", read: "6 min" },
              { tag: "REFORM", tc: "#CC3333", title: "What Happens If You're in an Accident After July 1?", date: "Jun 22", read: "8 min" },
            ].map((a, i) => (
              <div key={i} style={{
                padding: "20px 22px", borderRadius: 10, border: "1px solid #e8ecf0",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = TEAL; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8ecf0"; }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: a.tc, letterSpacing: 0.5 }}>{a.tag}</span>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: NAVY, margin: "6px 0 8px", lineHeight: 1.3 }}>{a.title}</h3>
                <span style={{ fontSize: 11, color: "#b0b8c4" }}>{a.date}, 2026 · {a.read}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: "56px 32px", background: "#f8fafb", borderTop: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: NAVY, margin: "0 0 10px" }}>Ready to compare?</h2>
          <p style={{ fontSize: 15, color: "#6b7b8d", margin: "0 0 24px" }}>TopRates.ca launches May 2027. Join the waitlist and never overpay for auto insurance again.</p>
          {!submitted ? (
            <div style={{ display: "flex", gap: 8, maxWidth: 380, margin: "0 auto" }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"
                style={{ flex: 1, padding: "11px 16px", borderRadius: 8, border: "1px solid #d0d5db", fontSize: 14, fontFamily: "'DM Sans'", outline: "none" }}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
              />
              <button onClick={handleSubmit} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "11px 22px", fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Join Waitlist</button>
            </div>
          ) : (
            <span style={{ fontSize: 14, color: TEAL, fontWeight: 600 }}>✓ You're on the list!</span>
          )}
        </div>
      </section>

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
