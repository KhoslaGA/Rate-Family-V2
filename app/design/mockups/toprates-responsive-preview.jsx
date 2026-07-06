import { useState } from "react";

const TEAL = "#0A7E8C";
const NAVY = "#1B2A4A";
const GOLD = "#B8960C";

export default function ResponsiveShowcase() {
  const [activeDevice, setActiveDevice] = useState("mobile");
  const [activeProduct, setActiveProduct] = useState("auto");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => { if (email.includes("@")) setSubmitted(true); };

  const devices = [
    { id: "mobile", label: "Mobile", icon: "📱", width: 375, height: 812 },
    { id: "tablet", label: "Tablet", icon: "📲", width: 768, height: 1024 },
    { id: "desktop", label: "Desktop", icon: "🖥️", width: 1280, height: 800 },
  ];
  const dev = devices.find(d => d.id === activeDevice);

  // Scale to fit viewport
  const containerWidth = activeDevice === "desktop" ? 1280 : activeDevice === "tablet" ? 768 : 375;
  const scale = activeDevice === "desktop" ? 0.68 : activeDevice === "tablet" ? 0.72 : 0.82;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0a0f16", minHeight: "100vh", color: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes typingDot { 0%,60%,100%{opacity:0.3;transform:translateY(0)} 30%{opacity:1;transform:translateY(-3px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes statusTick0 { 0%,28%{transform:translateY(0)} 33%,61%{transform:translateY(-13px)} 66%,94%{transform:translateY(-26px)} 100%{transform:translateY(0)} }
        @keyframes statusTick1 { 0%,28%{transform:translateY(0)} 33%,61%{transform:translateY(-13px)} 66%,94%{transform:translateY(-26px)} 100%{transform:translateY(0)} }
        * { box-sizing: border-box; }
      `}</style>

      {/* Device switcher bar */}
      <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, borderBottom: "1px solid #1e2d3d" }}>
        <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 18, color: TEAL, marginRight: 16 }}>
          TopRates<span style={{ color: "rgba(255,255,255,0.5)" }}>.ca</span>
          <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.3)", marginLeft: 8 }}>Responsive Preview</span>
        </span>
        {devices.map(d => (
          <button key={d.id} onClick={() => setActiveDevice(d.id)} style={{
            padding: "8px 18px", borderRadius: 10, cursor: "pointer",
            background: activeDevice === d.id ? TEAL : "rgba(255,255,255,0.05)",
            border: activeDevice === d.id ? `2px solid ${TEAL}` : "2px solid rgba(255,255,255,0.08)",
            color: activeDevice === d.id ? "#fff" : "rgba(255,255,255,0.5)",
            fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans'",
            display: "flex", alignItems: "center", gap: 6,
            transition: "all 0.2s",
          }}>
            <span>{d.icon}</span> {d.label}
            <span style={{ fontSize: 10, opacity: 0.6 }}>{d.width}px</span>
          </button>
        ))}
      </div>

      {/* Device frame */}
      <div style={{ display: "flex", justifyContent: "center", padding: "32px 16px", overflow: "hidden" }}>
        <div style={{
          width: containerWidth * scale,
          height: (activeDevice === "desktop" ? 900 : dev.height) * scale,
          overflow: "hidden",
          borderRadius: activeDevice === "mobile" ? 36 * scale : activeDevice === "tablet" ? 24 * scale : 12,
          border: activeDevice === "mobile" ? "8px solid #2a2a2a" : activeDevice === "tablet" ? "6px solid #2a2a2a" : "4px solid #2a2a2a",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
          position: "relative",
          background: "#fff",
        }}>
          {/* Notch for mobile */}
          {activeDevice === "mobile" && (
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: 120 * scale, height: 28 * scale, background: "#2a2a2a",
              borderRadius: `0 0 ${16 * scale}px ${16 * scale}px`, zIndex: 10,
            }}>
              <div style={{ position: "absolute", top: 8 * scale, left: "50%", transform: "translateX(-50%)", width: 50 * scale, height: 5 * scale, background: "#444", borderRadius: 10 }} />
            </div>
          )}

          {/* Scaled content */}
          <div style={{
            width: containerWidth,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            overflow: "auto",
            height: (activeDevice === "desktop" ? 900 : dev.height) / scale,
          }}>

            {/* ========== NAVBAR ========== */}
            {activeDevice === "mobile" ? (
              <nav style={{ background: "#fff", borderBottom: "1px solid #e8ecf0", padding: "0 16px", position: "sticky", top: 0, zIndex: 50 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
                  <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 20, color: TEAL }}>
                    TopRates<span style={{ color: NAVY }}>.ca</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <button style={{ background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, color: "#fff", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans'" }}>Get Quotes</button>
                    <div style={{ width: 32, height: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 4, cursor: "pointer" }}>
                      {[0,1,2].map(i => <div key={i} style={{ width: 18, height: 2, background: NAVY, borderRadius: 2 }} />)}
                    </div>
                  </div>
                </div>
              </nav>
            ) : activeDevice === "tablet" ? (
              <nav style={{ background: "rgba(255,255,255,0.97)", borderBottom: "1px solid #e8ecf0", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(12px)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 22, color: TEAL }}>
                      TopRates<span style={{ color: NAVY }}>.ca</span>
                    </div>
                    <div style={{ display: "flex", gap: 2 }}>
                      {["Car Insurance", "Home", "Credit Cards", "More ▾"].map(l => (
                        <span key={l} style={{ padding: "6px 10px", fontSize: 12, fontWeight: 500, color: NAVY, borderRadius: 6 }}>{l}</span>
                      ))}
                    </div>
                  </div>
                  <button style={{ background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans'" }}>Get Quotes</button>
                </div>
              </nav>
            ) : (
              <nav style={{ background: "rgba(255,255,255,0.95)", borderBottom: "1px solid #e8ecf0", padding: "0 32px", position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(12px)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 24, color: TEAL }}>
                      TopRates<span style={{ color: NAVY }}>.ca</span>
                    </div>
                    <div style={{ display: "flex", gap: 2 }}>
                      {[
                        { l: "Car Insurance", badge: "NEW", bc: "#CC3333" },
                        { l: "Home Insurance" },
                        { l: "Business Insurance" },
                        { l: "Mortgage Rates" },
                        { l: "Credit Cards", badge: "LIVE", bc: "#0D8050" },
                        { l: "Guides ▾" },
                      ].map(item => (
                        <span key={item.l} style={{ padding: "6px 10px", fontSize: 12, fontWeight: 500, color: NAVY, borderRadius: 6, display: "flex", alignItems: "center", gap: 4 }}>
                          {item.l}
                          {item.badge && <span style={{ fontSize: 8, fontWeight: 700, background: item.bc, color: "#fff", padding: "1px 5px", borderRadius: 8 }}>{item.badge}</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button style={{ background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, color: "#fff", border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", boxShadow: "0 2px 12px rgba(10,126,140,0.25)" }}>Get Quotes</button>
                </div>
              </nav>
            )}

            {/* ========== HERO ========== */}
            <section style={{
              background: `linear-gradient(135deg, ${NAVY} 0%, #0f1e38 40%, #162844 100%)`,
              padding: activeDevice === "mobile" ? "48px 20px 40px" : activeDevice === "tablet" ? "56px 32px 48px" : "72px 48px 80px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -80, right: -80, width: 250, height: 250, borderRadius: "50%", background: "rgba(10,126,140,0.07)" }} />

              <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Reform badge */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(184,150,12,0.15)", border: "1px solid rgba(184,150,12,0.3)",
                  borderRadius: 16, padding: activeDevice === "mobile" ? "4px 12px" : "5px 14px",
                  marginBottom: activeDevice === "mobile" ? 16 : 20,
                }}>
                  <span style={{ fontSize: activeDevice === "mobile" ? 10 : 11 }}>⚡</span>
                  <span style={{ fontSize: activeDevice === "mobile" ? 10 : 11, fontWeight: 700, color: "#d4ad0e", letterSpacing: 0.3 }}>Ontario Auto Insurance Changes July 2026</span>
                </div>

                <div style={{ display: "flex", flexDirection: activeDevice === "desktop" ? "row" : "column", alignItems: activeDevice === "desktop" ? "center" : "flex-start", gap: activeDevice === "desktop" ? 48 : 28 }}>
                  <div style={{ flex: activeDevice === "desktop" ? "1 1 55%" : "1 1 auto" }}>
                    <h1 style={{
                      fontFamily: "'Outfit'", fontWeight: 900,
                      fontSize: activeDevice === "mobile" ? 30 : activeDevice === "tablet" ? 38 : 46,
                      lineHeight: 1.1, color: "#fff", margin: "0 0 14px",
                    }}>
                      Stop overpaying for{" "}
                      <span style={{ background: `linear-gradient(135deg, ${TEAL}, #12b8ca)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        auto & home insurance
                      </span>
                    </h1>
                    <p style={{
                      fontSize: activeDevice === "mobile" ? 14 : 16,
                      color: "rgba(255,255,255,0.55)", lineHeight: 1.6,
                      margin: "0 0 24px", maxWidth: 440,
                    }}>
                      Snap your pink slip. Get quotes from 30+ carriers in under 2 minutes.
                    </p>

                    {/* Waitlist form */}
                    {!submitted ? (
                      <div style={{ display: "flex", flexDirection: activeDevice === "mobile" ? "column" : "row", gap: 8, maxWidth: activeDevice === "mobile" ? "100%" : 400 }}>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"
                          style={{
                            flex: 1, padding: activeDevice === "mobile" ? "12px 16px" : "13px 16px",
                            borderRadius: 10, border: "2px solid rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.07)", color: "#fff",
                            fontSize: 14, fontFamily: "'DM Sans'", outline: "none",
                          }}
                          onKeyDown={e => e.key === "Enter" && handleSubmit()}
                        />
                        <button onClick={handleSubmit} style={{
                          background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`,
                          color: "#fff", border: "none", borderRadius: 10,
                          padding: "13px 24px", fontSize: 14, fontWeight: 700,
                          fontFamily: "'DM Sans'", boxShadow: "0 4px 16px rgba(10,126,140,0.3)",
                          whiteSpace: "nowrap", cursor: "pointer",
                        }}>Join Waitlist</button>
                      </div>
                    ) : (
                      <div style={{ background: "rgba(10,126,140,0.15)", border: "1px solid rgba(10,126,140,0.3)", borderRadius: 10, padding: "12px 16px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <span>✅</span>
                        <span style={{ color: "#12b8ca", fontWeight: 600, fontSize: 13 }}>You're on the list!</span>
                      </div>
                    )}

                    <div style={{ display: "flex", gap: activeDevice === "mobile" ? 12 : 20, marginTop: 14, flexWrap: "wrap" }}>
                      {["No spam, ever", "Free to compare", "RIBO licensed"].map(t => (
                        <span key={t} style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", gap: 4 }}>
                          <span style={{ color: TEAL }}>✓</span> {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Savings card — hidden on mobile, compact on tablet */}
                  {activeDevice !== "mobile" && (
                    <div style={{
                      flex: activeDevice === "desktop" ? "1 1 40%" : "1 1 auto",
                      display: "flex", justifyContent: "center",
                      width: activeDevice === "tablet" ? "100%" : "auto",
                    }}>
                      <div style={{
                        background: "rgba(255,255,255,0.04)", borderRadius: 20,
                        border: "1px solid rgba(255,255,255,0.08)", padding: 22,
                        width: activeDevice === "tablet" ? "100%" : 300, maxWidth: 340,
                        position: "relative",
                      }}>
                        <div style={{ position: "absolute", top: -10, left: 20, background: GOLD, color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 16, letterSpacing: 0.6 }}>SAMPLE SAVINGS</div>
                        <div style={{ textAlign: "center", marginBottom: 14, paddingTop: 6 }}>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Current premium</div>
                          <div style={{ fontSize: 24, fontWeight: 700, color: "rgba(255,255,255,0.25)", textDecoration: "line-through", fontFamily: "'Outfit'" }}>$2,450/yr</div>
                        </div>
                        {[
                          { c: "Wawanesa", r: "$1,838", s: "$612", best: true },
                          { c: "Intact", r: "$1,956", s: "$494" },
                          { c: "Aviva", r: "$2,104", s: "$346" },
                        ].map(q => (
                          <div key={q.c} style={{
                            background: q.best ? "rgba(10,126,140,0.12)" : "rgba(255,255,255,0.03)",
                            border: q.best ? "1px solid rgba(10,126,140,0.3)" : "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 10, padding: "11px 14px", marginBottom: 6,
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                          }}>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{q.c}</div>
                              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Save {q.s}/yr</div>
                            </div>
                            <div style={{ fontSize: 20, fontWeight: 800, color: q.best ? "#12b8ca" : "rgba(255,255,255,0.6)", fontFamily: "'Outfit'" }}>{q.r}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ========== REFORM BANNER ========== */}
            <section style={{
              background: "linear-gradient(135deg, #FDF6E3, #fef9ed)",
              borderBottom: "1px solid rgba(184,150,12,0.15)",
              padding: activeDevice === "mobile" ? "16px" : "20px 28px",
            }}>
              <div style={{ display: "flex", flexDirection: activeDevice === "mobile" ? "column" : "row", alignItems: activeDevice === "mobile" ? "flex-start" : "center", gap: activeDevice === "mobile" ? 12 : 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${GOLD}, #d4ad0e)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>⚠️</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: activeDevice === "mobile" ? 13 : 14, fontWeight: 700, color: NAVY }}>Ontario Auto Reform — July 1, 2026</div>
                  <div style={{ fontSize: activeDevice === "mobile" ? 11 : 12, color: "#7a6d4a" }}>Most accident benefits becoming optional. Learn what's changing.</div>
                </div>
                <button style={{ background: NAVY, color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap", fontFamily: "'DM Sans'", cursor: "pointer", alignSelf: activeDevice === "mobile" ? "stretch" : "auto", textAlign: "center" }}>Read Our Guide →</button>
              </div>
            </section>

            {/* ========== PRODUCT SELECTOR ========== */}
            <section style={{ padding: activeDevice === "mobile" ? "32px 16px" : activeDevice === "tablet" ? "40px 24px" : "48px 32px", background: "#fff" }}>
              <div style={{ maxWidth: 800, margin: "0 auto" }}>
                {/* Tabs — scrollable on mobile */}
                <div style={{
                  display: "flex", gap: activeDevice === "mobile" ? 2 : 4,
                  justifyContent: activeDevice === "mobile" ? "flex-start" : "center",
                  overflowX: activeDevice === "mobile" ? "auto" : "visible",
                  paddingBottom: activeDevice === "mobile" ? 4 : 0,
                }}>
                  {[
                    { id: "auto", icon: "🚗", label: activeDevice === "mobile" ? "Car" : "Car Insurance" },
                    { id: "home", icon: "🏠", label: activeDevice === "mobile" ? "Home" : "Home Insurance" },
                    { id: "travel", icon: "✈️", label: "Travel" },
                    { id: "business", icon: "🏢", label: "Business" },
                    { id: "mortgage", icon: "💰", label: "Mortgage" },
                    { id: "cards", icon: "💳", label: activeDevice === "mobile" ? "Cards" : "Credit Cards" },
                  ].map(prod => (
                    <button key={prod.id} onClick={() => setActiveProduct(prod.id)} style={{
                      flex: activeDevice === "mobile" ? "0 0 auto" : "1 1 0",
                      maxWidth: activeDevice === "mobile" ? 80 : 120,
                      minWidth: activeDevice === "mobile" ? 60 : "auto",
                      padding: activeDevice === "mobile" ? "10px 6px 8px" : "12px 8px 10px",
                      background: activeProduct === prod.id ? `linear-gradient(135deg, ${TEAL}, #0d8f9e)` : "transparent",
                      border: "none", borderRadius: "12px 12px 0 0",
                      cursor: "pointer", display: "flex", flexDirection: "column",
                      alignItems: "center", gap: 4, transition: "all 0.2s",
                    }}>
                      <span style={{ fontSize: activeDevice === "mobile" ? 18 : 22, filter: activeProduct === prod.id ? "none" : "grayscale(0.5)", opacity: activeProduct === prod.id ? 1 : 0.5 }}>{prod.icon}</span>
                      <span style={{ fontSize: activeDevice === "mobile" ? 9 : 10, fontWeight: activeProduct === prod.id ? 700 : 500, color: activeProduct === prod.id ? "#fff" : "#98a2b3", whiteSpace: "nowrap" }}>{prod.label}</span>
                    </button>
                  ))}
                </div>

                {/* Content area */}
                <div style={{
                  background: "linear-gradient(135deg, #f0fafb, #f6f8fa)",
                  borderRadius: "0 0 16px 16px", border: "2px solid #e8ecf0",
                  borderTop: `2px solid ${TEAL}`,
                  padding: activeDevice === "mobile" ? "20px 16px" : "28px 28px",
                }}>
                  {activeProduct === "auto" && (
                    <div>
                      <div style={{ fontSize: activeDevice === "mobile" ? 15 : 17, fontWeight: 700, color: NAVY, fontFamily: "'Outfit'", marginBottom: 6 }}>
                        Compare car insurance from 30+ carriers
                      </div>
                      <p style={{ fontSize: 12, color: "#6b7b8d", margin: "0 0 14px" }}>
                        Snap your pink slip or enter your postal code.
                      </p>
                      <div style={{ display: "flex", flexDirection: activeDevice === "mobile" ? "column" : "row", gap: 8, alignItems: activeDevice === "mobile" ? "stretch" : "center" }}>
                        <input placeholder="📍 Postal Code" style={{ flex: activeDevice === "mobile" ? "auto" : 1, maxWidth: activeDevice === "mobile" ? "100%" : 200, padding: "11px 14px", borderRadius: 8, border: "2px solid #e0e4e8", fontSize: 13, fontFamily: "'DM Sans'", outline: "none", background: "#fff" }} />
                        <div style={{ display: "flex", gap: 8 }}>
                          <button style={{ flex: 1, background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, color: "#fff", border: "none", borderRadius: 8, padding: "11px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>Get My Quote</button>
                          <button style={{ flex: 1, background: "#fff", color: TEAL, border: `2px solid ${TEAL}`, borderRadius: 8, padding: "9px 14px", fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>📸 Snap Pink Slip</button>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeProduct === "home" && (
                    <div>
                      <div style={{ fontSize: activeDevice === "mobile" ? 15 : 17, fontWeight: 700, color: NAVY, fontFamily: "'Outfit'", marginBottom: 6 }}>Protect your home at the best rate</div>
                      <p style={{ fontSize: 12, color: "#6b7b8d", margin: "0 0 14px" }}>Homeowner, condo, or tenant — compare top carriers.</p>
                      <div style={{ display: "flex", flexDirection: activeDevice === "mobile" ? "column" : "row", gap: 8 }}>
                        <select style={{ flex: 1, padding: "11px 14px", borderRadius: 8, border: "2px solid #e0e4e8", fontSize: 13, fontFamily: "'DM Sans'", background: "#fff" }}>
                          <option>Property Type</option><option>Detached</option><option>Condo</option><option>Tenant</option>
                        </select>
                        <input placeholder="📍 Postal Code" style={{ flex: 1, padding: "11px 14px", borderRadius: 8, border: "2px solid #e0e4e8", fontSize: 13, fontFamily: "'DM Sans'", outline: "none", background: "#fff" }} />
                        <button style={{ background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, color: "#fff", border: "none", borderRadius: 8, padding: "11px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>Get Quote</button>
                      </div>
                    </div>
                  )}
                  {activeProduct === "cards" && (
                    <div>
                      <div style={{ fontSize: activeDevice === "mobile" ? 15 : 17, fontWeight: 700, color: NAVY, fontFamily: "'Outfit'", marginBottom: 6 }}>Find the best credit card</div>
                      <p style={{ fontSize: 12, color: "#6b7b8d", margin: "0 0 14px" }}>Cashback, rewards, no-fee — compare Canada's top cards.</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {["Cash Back", "Travel", "No Fee", "Low Interest", "Student"].map(c => (
                          <button key={c} style={{ background: "#fff", border: "2px solid #e0e4e8", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 600, color: NAVY, cursor: "pointer", fontFamily: "'DM Sans'" }}>{c}</button>
                        ))}
                      </div>
                    </div>
                  )}
                  {(activeProduct === "travel" || activeProduct === "business" || activeProduct === "mortgage") && (
                    <div style={{ textAlign: "center", padding: "12px 0" }}>
                      <span style={{ fontSize: 28 }}>🚧</span>
                      <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, fontFamily: "'Outfit'", marginTop: 8 }}>Coming {activeProduct === "mortgage" ? "2029" : "2028"}</div>
                      <p style={{ fontSize: 12, color: "#6b7b8d", margin: "8px 0 14px" }}>
                        {activeProduct === "travel" ? "Single-trip and multi-trip coverage comparison" : activeProduct === "business" ? "Commercial, liability, and cyber insurance" : "Fixed, variable, and HELOC rate comparison"}
                      </p>
                      <button style={{ background: NAVY, color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Notify Me</button>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ========== HOW IT WORKS ========== */}
            <section style={{ padding: activeDevice === "mobile" ? "40px 16px" : activeDevice === "tablet" ? "56px 24px" : "64px 32px", background: "#fff" }}>
              <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: activeDevice === "mobile" ? 24 : 40 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>How It Works</div>
                  <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: activeDevice === "mobile" ? 22 : activeDevice === "tablet" ? 26 : 30, color: NAVY, margin: 0 }}>Compare rates in 3 simple steps</h2>
                </div>
                <div style={{ display: "flex", flexDirection: activeDevice === "mobile" ? "column" : "row", gap: activeDevice === "mobile" ? 12 : 16 }}>
                  {[
                    { step: "1", icon: "📸", title: "Snap your pink slip", desc: "Upload a photo. AI extracts details automatically.", time: "30 sec", hl: true },
                    { step: "2", icon: "🔍", title: "We compare 30+ carriers", desc: "Real quotes, real-time, personalized to you.", time: "60 sec" },
                    { step: "3", icon: "✅", title: "Choose & save", desc: "Pick the best rate. Bind online through our broker.", time: "30 sec" },
                  ].map(s => (
                    <div key={s.step} style={{
                      flex: 1, background: s.hl ? "linear-gradient(135deg, #f0fafb, #e6f7f8)" : "#f8fafb",
                      borderRadius: 16, padding: activeDevice === "mobile" ? "20px 18px" : "28px 22px",
                      border: s.hl ? "2px solid rgba(10,126,140,0.12)" : "2px solid #f0f2f5",
                      position: "relative",
                    }}>
                      {s.hl && <div style={{ position: "absolute", top: -8, right: 14, background: GOLD, color: "#fff", fontSize: 8, fontWeight: 700, padding: "2px 8px", borderRadius: 12, letterSpacing: 0.5 }}>AI-POWERED</div>}
                      <div style={{ display: "flex", alignItems: activeDevice === "mobile" ? "center" : "flex-start", gap: activeDevice === "mobile" ? 14 : 0, flexDirection: activeDevice === "mobile" ? "row" : "column" }}>
                        <div style={{ width: activeDevice === "mobile" ? 42 : 48, height: activeDevice === "mobile" ? 42 : 48, borderRadius: 12, background: s.hl ? `linear-gradient(135deg, ${TEAL}, #0d9aa8)` : "#e8ecf0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: activeDevice === "mobile" ? 20 : 22, flexShrink: 0, marginBottom: activeDevice === "mobile" ? 0 : 14 }}>{s.icon}</div>
                        <div>
                          <div style={{ fontSize: 10, fontWeight: 700, color: TEAL, letterSpacing: 0.8, marginBottom: 4 }}>STEP {s.step}</div>
                          <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: activeDevice === "mobile" ? 15 : 17, color: NAVY, marginBottom: 4 }}>{s.title}</div>
                          <div style={{ fontSize: 12, color: "#6b7b8d", lineHeight: 1.5, marginBottom: 8 }}>{s.desc}</div>
                          <span style={{ fontSize: 10, color: TEAL, fontWeight: 600, background: "rgba(10,126,140,0.08)", padding: "3px 8px", borderRadius: 6 }}>⏱ {s.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== FEATURED GUIDES ========== */}
            <section style={{ padding: activeDevice === "mobile" ? "40px 16px" : "56px 32px", background: "#f8fafb" }}>
              <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ marginBottom: activeDevice === "mobile" ? 20 : 32 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Latest Guides</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: activeDevice === "mobile" ? 20 : 26, color: NAVY, margin: 0 }}>Ontario insurance, explained</h2>
                    <span style={{ fontSize: 12, fontWeight: 600, color: TEAL, cursor: "pointer" }}>View all →</span>
                  </div>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: activeDevice === "mobile" ? "1fr" : activeDevice === "tablet" ? "1fr 1fr" : "1fr 1fr 1fr",
                  gap: activeDevice === "mobile" ? 12 : 16,
                }}>
                  {[
                    { tag: "REFORM", tc: "#CC3333", tb: "#FFF0F0", title: "Ontario Auto Insurance Changes 2026: Everything You Need to Know", date: "May 4", read: "12 min" },
                    { tag: "GUIDE", tc: TEAL, tb: "#E6F4F6", title: "Which Accident Benefits Are Becoming Optional?", date: "May 6", read: "8 min" },
                    { tag: "TOOL", tc: "#6B46C1", tb: "#F3EEFF", title: "Self-Assessment: Which Optional Benefits Do You Need?", date: "May 22", read: "Interactive" },
                    ...(activeDevice === "mobile" ? [] : [
                      { tag: "PERSONA", tc: GOLD, tb: "#FDF6E3", title: "Self-Employed & Gig Workers: Coverage Matters More Than Ever", date: "May 27", read: "6 min" },
                      ...(activeDevice === "tablet" ? [] : [
                        { tag: "COMPARE", tc: "#0D8050", tb: "#E6F5ED", title: "Cheapest Car Insurance in Ontario 2026", date: "Jun 5", read: "10 min" },
                        { tag: "REFORM", tc: "#CC3333", tb: "#FFF0F0", title: "What Happens After July 1, 2026?", date: "Jun 22", read: "8 min" },
                      ]),
                    ]),
                  ].map((a, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e8ecf0", overflow: "hidden", cursor: "pointer" }}>
                      <div style={{ height: 6, background: `linear-gradient(90deg, ${a.tc}, ${a.tc}cc)` }} />
                      <div style={{ padding: activeDevice === "mobile" ? "14px 16px" : "18px 20px" }}>
                        <span style={{ fontSize: 9, fontWeight: 700, color: a.tc, background: a.tb, padding: "2px 7px", borderRadius: 5, letterSpacing: 0.6 }}>{a.tag}</span>
                        <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: activeDevice === "mobile" ? 14 : 15, color: NAVY, margin: "8px 0", lineHeight: 1.3 }}>{a.title}</div>
                        <div style={{ fontSize: 11, color: "#98a2b3" }}>{a.date} · {a.read}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== DUAL CHAT Q&A ========== */}
            <section style={{ padding: activeDevice === "mobile" ? "40px 16px" : "56px 32px", background: "#fff" }}>
              <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: activeDevice === "mobile" ? 20 : 32 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Got Questions?</div>
                  <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: activeDevice === "mobile" ? 20 : 26, color: NAVY, margin: 0 }}>We help Canadians make better decisions</h2>
                </div>

                <div style={{ display: "flex", flexDirection: activeDevice === "mobile" ? "column" : "row", gap: activeDevice === "mobile" ? 16 : 16 }}>
                  {[
                    {
                      theme: "How It Works", icon: "⚡",
                      items: [
                        { q: "Is it actually free?", a: "Yes, always. Insurers pay us. You never pay a cent. 🙌" },
                        { q: "How is this different?", a: "We show 30+ carriers at once. 2 minutes vs 2 hours. ⚡" },
                        { q: "Do I have to buy through you?", a: "Nope! But our broker ensures coverage fits you — free. 🤝" },
                      ],
                    },
                    {
                      theme: "Trust & Privacy", icon: "🔒",
                      items: [
                        { q: "What about my data?", a: "Only shared with your chosen carrier. Never sold. 🔒" },
                        { q: "My uploaded documents?", a: "Permanently deleted the instant we extract the data. 🗑️", hl: true },
                        { q: "What's the catch?", a: "Same rates as going direct. Insurers pay us, not you. ✅", hl: true },
                      ],
                    },
                  ].map((chat, ci) => (
                    <div key={ci} style={{ flex: 1, background: "#0a0f16", borderRadius: 16, overflow: "hidden", border: "1px solid #1e2d3d" }}>
                      {/* Header */}
                      <div style={{ background: "linear-gradient(135deg, #1B2A4A, #162844)", padding: "12px 14px", borderBottom: "1px solid #1e2d3d", display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", flexShrink: 0 }}>
                          <span style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 10, color: "#fff" }}>TR</span>
                          <div style={{ position: "absolute", bottom: -1, right: -1, width: 13, height: 13, borderRadius: "50%", background: "#1d9bf0", border: "2px solid #1B2A4A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="7" height="7" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        </div>
                        <div>
                          <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 12, color: "#fff" }}>TopRates.ca</div>
                          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", overflow: "hidden", height: 13 }}>
                            <div style={{ animation: `statusTick${ci} 8s ease-in-out infinite` }}>
                              {[
                                "142 Canadians comparing today",
                                ci === 0 ? "30+ carriers connected" : "256-bit encrypted",
                                ci === 0 ? "AI-powered · No calls" : "Docs auto-deleted",
                              ].map((t,ti) => (
                                <div key={ti} style={{ height: 13, display: "flex", alignItems: "center", gap: 3 }}>
                                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />{t}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div style={{ marginLeft: "auto", fontSize: 14 }}>{chat.icon}</div>
                      </div>

                      {/* Messages */}
                      <div style={{ padding: "14px 12px", display: "flex", flexDirection: "column", gap: 10, background: "#0d1318" }}>
                        {chat.items.map((item, i) => (
                          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                              <div style={{ background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, borderRadius: "12px 12px 3px 12px", padding: "7px 12px", maxWidth: "78%" }}>
                                <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>{item.q}</span>
                              </div>
                            </div>
                            <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
                              <div style={{ width: 18, height: 18, borderRadius: "50%", background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 7, color: "#fff" }}>TR</span>
                              </div>
                              <div style={{ background: "#1a2332", border: "1px solid #243044", borderRadius: "12px 12px 12px 3px", padding: "7px 12px", maxWidth: "85%" }}>
                                {item.hl ? (
                                  <span style={{ fontSize: 11, lineHeight: 1.5, color: "#fff", fontWeight: 600, background: "rgba(10,126,140,0.2)", padding: "1px 4px", borderRadius: 4, border: "1px solid rgba(10,126,140,0.3)" }}>{item.a}</span>
                                ) : (
                                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{item.a}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        {/* Typing dots */}
                        <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
                          <div style={{ width: 18, height: 18, borderRadius: "50%", background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 7, color: "#fff" }}>TR</span>
                          </div>
                          <div style={{ background: "#1a2332", border: "1px solid #243044", borderRadius: "12px 12px 12px 3px", padding: "7px 12px", display: "flex", gap: 3 }}>
                            {[0,1,2].map(d => <div key={d} style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", animation: `typingDot 1.4s ease-in-out ${d*0.2}s infinite` }} />)}
                          </div>
                        </div>
                      </div>

                      {/* Input */}
                      <div style={{ padding: "8px 12px", background: "#0d1318", borderTop: "1px solid #1a2332", display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ flex: 1, background: "#1a2332", border: "1px solid #243044", borderRadius: 16, padding: "7px 12px", fontSize: 10, color: "rgba(255,255,255,0.2)" }}>
                          {ci === 0 ? "Ask how it works..." : "Ask about privacy..."}
                        </div>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: `linear-gradient(135deg, ${TEAL}, #0d9aa8)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer style={{ background: "#0a0f16", padding: activeDevice === "mobile" ? "32px 16px 20px" : "40px 32px 24px" }}>
              <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: activeDevice === "mobile" ? "column" : "row", gap: activeDevice === "mobile" ? 24 : 32, marginBottom: 24 }}>
                  <div style={{ flex: activeDevice === "mobile" ? "auto" : "1 1 28%" }}>
                    <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 18, color: TEAL, marginBottom: 8 }}>
                      TopRates<span style={{ color: "rgba(255,255,255,0.4)" }}>.ca</span>
                    </div>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.5, margin: 0 }}>AI-powered insurance comparison. Powered by Insurimple (RIBO Licensed).</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: activeDevice === "mobile" ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: activeDevice === "mobile" ? 20 : 16, flex: 1 }}>
                    {[
                      { t: "Insurance", l: ["Car Insurance", "Home Insurance", "Business", "Travel"] },
                      { t: "Financial", l: ["Mortgage Rates", "Credit Cards", "Cashback", "No-Fee Cards"] },
                      { t: "Resources", l: ["Guides", "2026 Reform", "Calculator", "About"] },
                      { t: "Legal", l: ["Privacy", "Terms", "RIBO Disclosure", "Contact"] },
                    ].map(col => (
                      <div key={col.t}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>{col.t}</div>
                        {col.l.map(l => <div key={l} style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginBottom: 7, cursor: "pointer" }}>{l}</div>)}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.15)" }}>© 2026 TopRates.ca. Powered by Insurimple (RIBO Licensed).</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.12)" }}>Made in Canada 🇨🇦</span>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}
