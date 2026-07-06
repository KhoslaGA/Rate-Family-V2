import { useState } from "react";

const TEAL = "#0A7E8C";
const NAVY = "#1B2A4A";

export default function HomeInsuranceOntario() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const handleSubmit = () => { if (email.includes("@")) setSubmitted(true); };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#2D2D2D", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8ecf0", padding: "0 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 21, color: TEAL, cursor: "pointer" }}>TopRates<span style={{ color: NAVY }}>.ca</span></div>
            {["Car Insurance", "Home Insurance", "Credit Cards", "Guides"].map(l => (
              <span key={l} style={{ fontSize: 13, fontWeight: 500, color: NAVY, cursor: "pointer", borderBottom: l === "Home Insurance" ? `2px solid ${TEAL}` : "2px solid transparent", paddingBottom: 2 }}>{l}</span>
            ))}
          </div>
          <button style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Get Quotes</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${NAVY}, #0f1e38)`, padding: "64px 32px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(10,126,140,0.06)" }} />
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
            <span style={{ cursor: "pointer" }}>Home</span> <span style={{ opacity: 0.3, margin: "0 6px" }}>/</span> <span style={{ color: "rgba(255,255,255,0.6)" }}>Home Insurance Ontario</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 38, lineHeight: 1.15, color: "#fff", margin: "0 0 14px" }}>
                Compare Home Insurance<br />in Ontario
              </h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: "0 0 28px", maxWidth: 460 }}>
                Homeowner, condo, or tenant — compare coverage and pricing from Ontario's top carriers. Bundle with auto and save up to 20%.
              </p>

              {/* Property type selector */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                {["Detached Home", "Condo", "Townhouse", "Tenant / Rental"].map(t => (
                  <button key={t} onClick={() => setPropertyType(t)} style={{
                    padding: "10px 18px", borderRadius: 8, cursor: "pointer",
                    fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans'",
                    background: propertyType === t ? "rgba(10,126,140,0.15)" : "rgba(255,255,255,0.05)",
                    border: propertyType === t ? `2px solid ${TEAL}` : "2px solid rgba(255,255,255,0.08)",
                    color: propertyType === t ? "#12b8ca" : "rgba(255,255,255,0.5)",
                    transition: "all 0.2s",
                  }}>{t}</button>
                ))}
              </div>

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
                  <span>✅</span><span style={{ color: "#12b8ca", fontWeight: 600, fontSize: 13 }}>You're on the list!</span>
                </div>
              )}
            </div>

            <div style={{ flex: "0 0 260px" }}>
              {[
                { label: "Average Ontario home premium", value: "$1,450/yr", sub: "2026 average" },
                { label: "Bundle savings (home + auto)", value: "15–20%", sub: "with same carrier" },
                { label: "Climate claims increase", value: "+42%", sub: "Ontario since 2020" },
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

      {/* WHAT'S COVERED */}
      <section style={{ padding: "64px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: NAVY, margin: "0 0 8px" }}>What does home insurance cover in Ontario?</h2>
          <p style={{ fontSize: 15, color: "#6b7b8d", marginBottom: 28, maxWidth: 600 }}>Standard policies cover your home, your belongings, your liability, and your living expenses if you're displaced.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { title: "Dwelling coverage", desc: "Covers the physical structure of your home — walls, roof, foundation, attached garage. Pays to rebuild or repair after a covered loss like fire, windstorm, or vandalism.", icon: "🏠" },
              { title: "Personal property", desc: "Covers your belongings — furniture, electronics, clothing, appliances. Typically covered at actual cash value or replacement cost depending on your policy.", icon: "📦" },
              { title: "Liability protection", desc: "Covers you if someone is injured on your property or if you accidentally damage someone else's property. Minimum $1M recommended in Ontario.", icon: "🛡️" },
              { title: "Additional living expenses", desc: "If your home is uninhabitable after a covered claim, this covers temporary housing, meals, and other expenses while your home is being repaired.", icon: "🏨" },
              { title: "Water damage (add-on)", desc: "Overland water and sewer backup coverage typically costs extra but is critical in Ontario given increasing flood frequency. Ask about this specifically.", icon: "💧" },
              { title: "Equipment breakdown", desc: "Covers sudden failure of heating, cooling, electrical, and appliance systems. Not included by default — worth adding if you have newer systems.", icon: "⚡" },
            ].map((c, i) => (
              <div key={i} style={{ padding: "22px 24px", borderRadius: 10, border: "1px solid #e8ecf0", display: "flex", gap: 14 }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: NAVY, margin: "0 0 4px" }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7b8d", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS RATE */}
      <section style={{ padding: "64px 32px", background: "#f8fafb" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: NAVY, margin: "0 0 8px" }}>What affects your home insurance rate?</h2>
          <p style={{ fontSize: 15, color: "#6b7b8d", marginBottom: 28, maxWidth: 600 }}>Unlike auto insurance, home insurance rates in Ontario are not regulated. Rates vary dramatically between carriers.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { f: "Location & flood risk", d: "Your postal code determines proximity to fire stations, flood plains, and crime rates. Urban vs rural makes a big difference." },
              { f: "Age & construction", d: "Older homes with knob-and-tube wiring, galvanized pipes, or oil heating cost more. Recent renovations help." },
              { f: "Replacement cost", d: "The cost to fully rebuild your home at current prices. Not the same as market value." },
              { f: "Claims history", d: "Previous water damage, fire, or theft claims can significantly increase your rates." },
              { f: "Security systems", d: "Centrally monitored alarms, smart locks, and water leak detectors earn discounts with most carriers." },
              { f: "Credit score", d: "Many Ontario insurers offer better rates with a soft credit check. Good credit = lower premiums." },
            ].map((f, i) => (
              <div key={i} style={{ padding: "20px 22px", background: "#fff", borderRadius: 10, border: "1px solid #e8ecf0" }}>
                <h4 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 15, color: NAVY, margin: "0 0 6px" }}>{f.f}</h4>
                <p style={{ fontSize: 13, color: "#6b7b8d", lineHeight: 1.5, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUNDLE CALLOUT */}
      <section style={{ padding: "48px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #f0fafb, #e8f6f7)", borderRadius: 12, border: "1px solid rgba(10,126,140,0.1)", padding: "32px 36px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 22, color: NAVY, margin: "0 0 6px" }}>Bundle home + auto and save 15–20%</h3>
              <p style={{ fontSize: 14, color: "#6b7b8d", margin: 0, maxWidth: 480 }}>
                TopRates.ca automatically compares both bundled and unbundled rates to find you the actual cheapest option — not just the best single-carrier discount.
              </p>
            </div>
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 36, color: TEAL }}>20%</div>
              <div style={{ fontSize: 12, color: "#6b7b8d" }}>average bundle savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section style={{ padding: "64px 32px", background: "#f8fafb" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 24, color: NAVY, margin: 0 }}>Home insurance guides</h2>
            <span style={{ fontSize: 13, fontWeight: 600, color: TEAL, cursor: "pointer" }}>View all guides →</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { title: "Bundle Home & Auto in Ontario: Is It Still Worth It?", tag: "COMPARE", tc: "#0D8050", date: "Jun 17" },
              { title: "Water Damage Coverage in Ontario: What's Included and What's Not", tag: "GUIDE", tc: TEAL, date: "Coming soon" },
              { title: "Condo Insurance vs Home Insurance: What's the Difference?", tag: "GUIDE", tc: TEAL, date: "Coming soon" },
            ].map((a, i) => (
              <div key={i} style={{ padding: "20px 22px", background: "#fff", borderRadius: 10, border: "1px solid #e8ecf0", cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = TEAL}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#e8ecf0"}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: a.tc, letterSpacing: 0.5 }}>{a.tag}</span>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: NAVY, margin: "6px 0 8px", lineHeight: 1.3 }}>{a.title}</h3>
                <span style={{ fontSize: 11, color: "#b0b8c4" }}>{a.date}, 2026</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: "56px 32px", background: "#fff", borderTop: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: NAVY, margin: "0 0 10px" }}>Protect your home at the best rate</h2>
          <p style={{ fontSize: 15, color: "#6b7b8d", margin: "0 0 24px" }}>TopRates.ca launches May 2027. Compare home insurance from Ontario's top carriers.</p>
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
