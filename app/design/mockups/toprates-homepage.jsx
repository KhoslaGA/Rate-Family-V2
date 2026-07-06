import { useState } from "react";

export default function Homepage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeProduct, setActiveProduct] = useState("auto");

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#2D2D2D", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* ===== NAVIGATION ===== */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e8ecf0",
        padding: "0 32px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 24, color: "#0A7E8C", letterSpacing: -0.5 }}>
              TopRates<span style={{ color: "#1B2A4A" }}>.ca</span>
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              {[
                { label: "Car Insurance", hot: true, dropdown: true },
                { label: "Home Insurance", dropdown: true },
                { label: "Business Insurance", dropdown: true, soon: true },
                { label: "Mortgage Rates", dropdown: true, soon: true },
                { label: "Credit Cards", dropdown: true, live: true },
                { label: "More", dropdown: true },
                { label: "Guides & Resources", dropdown: true },
              ].map(item => (
                <div key={item.label} style={{
                  padding: "8px 12px", borderRadius: 8, cursor: "pointer",
                  fontSize: 13, fontWeight: 500, color: "#1B2A4A",
                  transition: "all 0.2s", position: "relative",
                  display: "flex", alignItems: "center", gap: 5,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#f0fafb"; e.currentTarget.style.color = "#0A7E8C"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1B2A4A"; }}
                >
                  {item.label}
                  {item.hot && <span style={{ fontSize: 8, fontWeight: 700, background: "#CC3333", color: "#fff", padding: "2px 5px", borderRadius: 10, letterSpacing: 0.4 }}>NEW</span>}
                  {item.live && <span style={{ fontSize: 8, fontWeight: 700, background: "#0D8050", color: "#fff", padding: "2px 5px", borderRadius: 10, letterSpacing: 0.4 }}>LIVE</span>}
                  {item.dropdown && (
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4 }}>
                      <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", background: "transparent",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f0fafb"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#1B2A4A" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <button style={{
              background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
              color: "#fff", border: "none", borderRadius: 10,
              padding: "10px 20px", fontSize: 13, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 2px 12px rgba(10,126,140,0.25)",
              fontFamily: "'DM Sans'",
            }}>Get Quotes</button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #0f1e38 40%, #162844 100%)",
        padding: "80px 32px 100px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(10,126,140,0.08)" }} />
        <div style={{ position: "absolute", bottom: -150, left: -50, width: 350, height: 350, borderRadius: "50%", background: "rgba(184,150,12,0.04)" }} />
        <div style={{ position: "absolute", top: "20%", right: "15%", width: 200, height: 200, borderRadius: "50%", background: "rgba(10,126,140,0.05)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
            {/* Left: Copy */}
            <div style={{ flex: "1 1 55%" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(184,150,12,0.15)", border: "1px solid rgba(184,150,12,0.3)",
                borderRadius: 20, padding: "6px 16px", marginBottom: 24,
              }}>
                <span style={{ fontSize: 12 }}>⚡</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#d4ad0e", letterSpacing: 0.5 }}>Ontario Auto Insurance Is Changing July 2026</span>
              </div>

              <h1 style={{
                fontFamily: "'Outfit'", fontWeight: 900, fontSize: 48, lineHeight: 1.1,
                color: "#fff", margin: "0 0 20px",
              }}>
                Stop overpaying for
                <br />
                <span style={{ background: "linear-gradient(135deg, #0A7E8C, #12b8ca)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  auto & home insurance
                </span>
              </h1>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 32px", maxWidth: 480 }}>
                Snap your pink slip. Get quotes from 30+ carriers in under 2 minutes. AI-powered comparison that finds you the best rate — not just the cheapest.
              </p>

              {/* Waitlist form */}
              {!submitted ? (
                <div style={{ display: "flex", gap: 10, maxWidth: 440 }}>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{
                      flex: 1, padding: "14px 18px", borderRadius: 12,
                      border: "2px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.07)",
                      color: "#fff", fontSize: 15, fontFamily: "'DM Sans'", outline: "none",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(10,126,140,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                    onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  />
                  <button onClick={handleSubmit} style={{
                    background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
                    color: "#fff", border: "none", borderRadius: 12,
                    padding: "14px 28px", fontSize: 15, fontWeight: 700,
                    cursor: "pointer", fontFamily: "'DM Sans'",
                    boxShadow: "0 4px 20px rgba(10,126,140,0.35)",
                    whiteSpace: "nowrap",
                  }}>Join Waitlist</button>
                </div>
              ) : (
                <div style={{
                  background: "rgba(10,126,140,0.15)", border: "1px solid rgba(10,126,140,0.3)",
                  borderRadius: 12, padding: "14px 20px",
                  display: "flex", alignItems: "center", gap: 10, maxWidth: 440,
                }}>
                  <span style={{ fontSize: 20 }}>✅</span>
                  <span style={{ color: "#12b8ca", fontWeight: 600, fontSize: 14 }}>You're on the list! We'll notify you when TopRates.ca goes live.</span>
                </div>
              )}

              <div style={{ display: "flex", gap: 24, marginTop: 20 }}>
                {["No spam, ever", "Free to compare", "RIBO licensed"].map(t => (
                  <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ color: "#0A7E8C" }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div style={{ flex: "1 1 45%", display: "flex", justifyContent: "center" }}>
              <div style={{
                background: "rgba(255,255,255,0.04)", borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.08)", padding: 28,
                width: 340, position: "relative",
              }}>
                <div style={{ position: "absolute", top: -12, left: 24, background: "#B8960C", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: 0.8 }}>SAMPLE SAVINGS</div>
                <div style={{ textAlign: "center", marginBottom: 20, paddingTop: 8 }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 500, marginBottom: 4 }}>Current premium</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "rgba(255,255,255,0.3)", textDecoration: "line-through", fontFamily: "'Outfit'" }}>$2,450/yr</div>
                </div>
                {[
                  { carrier: "Wawanesa", rate: "$1,838", save: "$612", best: true },
                  { carrier: "Intact", rate: "$1,956", save: "$494" },
                  { carrier: "Aviva", rate: "$2,104", save: "$346" },
                ].map((q, i) => (
                  <div key={q.carrier} style={{
                    background: q.best ? "rgba(10,126,140,0.12)" : "rgba(255,255,255,0.03)",
                    border: q.best ? "1px solid rgba(10,126,140,0.3)" : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12, padding: "14px 16px", marginBottom: 8,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{q.carrier}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Save {q.save}/yr</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: q.best ? "#12b8ca" : "rgba(255,255,255,0.7)", fontFamily: "'Outfit'" }}>{q.rate}</div>
                  </div>
                ))}
                <div style={{ textAlign: "center", marginTop: 12 }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>Illustrative rates. Actual quotes vary.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REFORM ALERT BANNER ===== */}
      <section style={{
        background: "linear-gradient(135deg, #FDF6E3 0%, #fef9ed 100%)",
        borderBottom: "1px solid rgba(184,150,12,0.15)",
        padding: "24px 32px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: "linear-gradient(135deg, #B8960C, #d4ad0e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, boxShadow: "0 4px 12px rgba(184,150,12,0.2)",
          }}>⚠️</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#1B2A4A", marginBottom: 2 }}>
              Ontario Auto Insurance Reform Takes Effect July 1, 2026
            </div>
            <div style={{ fontSize: 13, color: "#7a6d4a" }}>
              Most accident benefits are becoming optional. Millions of drivers need to make new coverage decisions. Learn what's changing and how to protect yourself.
            </div>
          </div>
          <button style={{
            background: "#1B2A4A", color: "#fff", border: "none", borderRadius: 10,
            padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer",
            whiteSpace: "nowrap", fontFamily: "'DM Sans'",
          }}>Read Our Guide →</button>
        </div>
      </section>

      {/* ===== PRODUCT SELECTOR ===== */}
      <section style={{ padding: "60px 32px 64px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Product tabs */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 6,
            marginBottom: 0, position: "relative",
          }}>
            {[
              { id: "auto", icon: "🚗", label: "Car Insurance", live: true },
              { id: "home", icon: "🏠", label: "Home Insurance", live: true },
              { id: "travel", icon: "✈️", label: "Travel", live: false },
              { id: "business", icon: "🏢", label: "Business", live: false },
              { id: "mortgage", icon: "💰", label: "Mortgage", live: false },
              { id: "cards", icon: "💳", label: "Credit Cards", live: true },
            ].map(prod => (
              <button key={prod.id} onClick={() => setActiveProduct(prod.id)} style={{
                flex: "1 1 0", maxWidth: 130,
                padding: "14px 8px 12px",
                background: activeProduct === prod.id
                  ? "linear-gradient(135deg, #0A7E8C, #0d8f9e)"
                  : "transparent",
                border: activeProduct === prod.id
                  ? "2px solid #0A7E8C"
                  : "2px solid transparent",
                borderBottom: activeProduct === prod.id
                  ? "2px solid #0A7E8C"
                  : "2px solid transparent",
                borderRadius: "14px 14px 0 0",
                cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                transition: "all 0.25s ease",
                position: "relative",
              }}>
                <div style={{
                  fontSize: 24,
                  filter: activeProduct === prod.id ? "none" : "grayscale(0.5)",
                  opacity: activeProduct === prod.id ? 1 : 0.6,
                  transition: "all 0.25s",
                }}>{prod.icon}</div>
                <span style={{
                  fontSize: 11, fontWeight: activeProduct === prod.id ? 700 : 500,
                  color: activeProduct === prod.id ? "#fff" : "#98a2b3",
                  letterSpacing: 0.2, transition: "all 0.25s",
                  whiteSpace: "nowrap",
                }}>{prod.label}</span>
                {!prod.live && (
                  <span style={{
                    position: "absolute", top: 4, right: 4,
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#B8960C",
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Product content area */}
          <div style={{
            background: "linear-gradient(135deg, #f0fafb, #f6f8fa)",
            borderRadius: "0 0 20px 20px",
            border: "2px solid #e8ecf0",
            borderTop: "2px solid #0A7E8C",
            padding: "32px 36px",
            minHeight: 140,
          }}>
            {activeProduct === "auto" && (
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit'", marginBottom: 6 }}>
                    Compare car insurance from 30+ Ontario carriers
                  </div>
                  <p style={{ fontSize: 13, color: "#6b7b8d", margin: "0 0 16px", lineHeight: 1.5 }}>
                    Snap your pink slip or enter your postal code. AI-powered quotes in under 2 minutes.
                  </p>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ position: "relative", flex: 1, maxWidth: 220 }}>
                      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14 }}>📍</span>
                      <input placeholder="Postal Code" style={{
                        width: "100%", padding: "12px 14px 12px 36px", borderRadius: 10,
                        border: "2px solid #e0e4e8", fontSize: 14, fontFamily: "'DM Sans'",
                        outline: "none", boxSizing: "border-box", background: "#fff",
                      }}
                      onFocus={e => e.target.style.borderColor = "#0A7E8C"}
                      onBlur={e => e.target.style.borderColor = "#e0e4e8"}
                      />
                    </div>
                    <button style={{
                      background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
                      color: "#fff", border: "none", borderRadius: 10,
                      padding: "12px 24px", fontSize: 14, fontWeight: 700,
                      cursor: "pointer", fontFamily: "'DM Sans'",
                      boxShadow: "0 4px 16px rgba(10,126,140,0.25)",
                      whiteSpace: "nowrap",
                    }}>Get My Quote</button>
                    <span style={{ fontSize: 12, color: "#98a2b3" }}>or</span>
                    <button style={{
                      background: "#fff", color: "#0A7E8C", border: "2px solid #0A7E8C",
                      borderRadius: 10, padding: "10px 18px", fontSize: 13, fontWeight: 700,
                      cursor: "pointer", fontFamily: "'DM Sans'",
                      display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
                    }}>📸 Snap Pink Slip</button>
                  </div>
                </div>
                <div style={{
                  background: "rgba(10,126,140,0.08)", borderRadius: 12, padding: "10px 16px",
                  textAlign: "center", flexShrink: 0,
                }}>
                  <div style={{ fontSize: 10, color: "#0A7E8C", fontWeight: 600, letterSpacing: 0.5, marginBottom: 2 }}>AVG SAVINGS</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#0A7E8C", fontFamily: "'Outfit'" }}>$612</div>
                  <div style={{ fontSize: 10, color: "#6b7b8d" }}>/year</div>
                </div>
              </div>
            )}

            {activeProduct === "home" && (
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit'", marginBottom: 6 }}>
                    Protect your home at the best rate in Ontario
                  </div>
                  <p style={{ fontSize: 13, color: "#6b7b8d", margin: "0 0 16px", lineHeight: 1.5 }}>
                    Homeowner, condo, or tenant — compare coverage and pricing from top carriers.
                  </p>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <select style={{
                      padding: "12px 14px", borderRadius: 10, border: "2px solid #e0e4e8",
                      fontSize: 14, fontFamily: "'DM Sans'", color: "#6b7b8d",
                      background: "#fff", outline: "none", cursor: "pointer",
                    }}>
                      <option>Type of Property</option>
                      <option>Detached Home</option>
                      <option>Semi-Detached</option>
                      <option>Townhouse</option>
                      <option>Condo</option>
                      <option>Rental / Tenant</option>
                    </select>
                    <div style={{ position: "relative", flex: 1, maxWidth: 200 }}>
                      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14 }}>📍</span>
                      <input placeholder="Postal Code" style={{
                        width: "100%", padding: "12px 14px 12px 36px", borderRadius: 10,
                        border: "2px solid #e0e4e8", fontSize: 14, fontFamily: "'DM Sans'",
                        outline: "none", boxSizing: "border-box", background: "#fff",
                      }} />
                    </div>
                    <button style={{
                      background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
                      color: "#fff", border: "none", borderRadius: 10,
                      padding: "12px 24px", fontSize: 14, fontWeight: 700,
                      cursor: "pointer", fontFamily: "'DM Sans'",
                      boxShadow: "0 4px 16px rgba(10,126,140,0.25)",
                      whiteSpace: "nowrap",
                    }}>Get My Quote</button>
                  </div>
                </div>
                <div style={{
                  background: "rgba(10,126,140,0.08)", borderRadius: 12, padding: "10px 16px",
                  textAlign: "center", flexShrink: 0,
                }}>
                  <div style={{ fontSize: 10, color: "#0A7E8C", fontWeight: 600, letterSpacing: 0.5, marginBottom: 2 }}>BUNDLE & SAVE</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#0A7E8C", fontFamily: "'Outfit'" }}>20%</div>
                  <div style={{ fontSize: 10, color: "#6b7b8d" }}>home + auto</div>
                </div>
              </div>
            )}

            {activeProduct === "cards" && (
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit'", marginBottom: 6 }}>
                    Find the best credit card for your spending habits
                  </div>
                  <p style={{ fontSize: 13, color: "#6b7b8d", margin: "0 0 16px", lineHeight: 1.5 }}>
                    Cashback, travel rewards, no-fee, low interest — compare Canada's top cards side by side.
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    {["Cash Back", "Travel Rewards", "No Fee", "Low Interest", "Student"].map(cat => (
                      <button key={cat} style={{
                        background: "#fff", border: "2px solid #e0e4e8", borderRadius: 10,
                        padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#1B2A4A",
                        cursor: "pointer", fontFamily: "'DM Sans'", transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#0A7E8C"; e.currentTarget.style.color = "#0A7E8C"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#e0e4e8"; e.currentTarget.style.color = "#1B2A4A"; }}
                      >{cat}</button>
                    ))}
                  </div>
                </div>
                <div style={{
                  background: "rgba(13,128,80,0.08)", borderRadius: 12, padding: "10px 16px",
                  textAlign: "center", flexShrink: 0,
                }}>
                  <div style={{ fontSize: 10, color: "#0D8050", fontWeight: 600, letterSpacing: 0.5, marginBottom: 2 }}>STATUS</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0D8050", fontFamily: "'Outfit'" }}>Live Now</div>
                  <div style={{ fontSize: 10, color: "#6b7b8d" }}>50+ cards</div>
                </div>
              </div>
            )}

            {(activeProduct === "travel" || activeProduct === "business" || activeProduct === "mortgage") && (
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit'", marginBottom: 6 }}>
                    {activeProduct === "travel" && "Compare travel insurance for your next trip"}
                    {activeProduct === "business" && "Protect your business with the right coverage"}
                    {activeProduct === "mortgage" && "Compare mortgage rates from top Canadian lenders"}
                  </div>
                  <p style={{ fontSize: 13, color: "#6b7b8d", margin: "0 0 16px", lineHeight: 1.5 }}>
                    {activeProduct === "travel" && "Single-trip, multi-trip, or snowbird coverage. Medical, cancellation, and baggage protection."}
                    {activeProduct === "business" && "Commercial property, liability, professional, and cyber insurance for Canadian businesses."}
                    {activeProduct === "mortgage" && "Fixed, variable, and HELOC rates from banks, credit unions, and mortgage brokers across Canada."}
                  </p>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "rgba(184,150,12,0.1)", border: "1px solid rgba(184,150,12,0.2)",
                      borderRadius: 10, padding: "10px 18px",
                    }}>
                      <span style={{ fontSize: 14 }}>🚧</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#B8960C" }}>Coming {activeProduct === "mortgage" ? "2029" : "2028"}</span>
                    </div>
                    <button style={{
                      background: "#1B2A4A", color: "#fff", border: "none", borderRadius: 10,
                      padding: "10px 20px", fontSize: 13, fontWeight: 700,
                      cursor: "pointer", fontFamily: "'DM Sans'",
                    }}>Notify Me When Live</button>
                  </div>
                </div>
                <div style={{
                  background: "rgba(184,150,12,0.08)", borderRadius: 12, padding: "10px 16px",
                  textAlign: "center", flexShrink: 0,
                }}>
                  <div style={{ fontSize: 10, color: "#B8960C", fontWeight: 600, letterSpacing: 0.5, marginBottom: 2 }}>COMING SOON</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#B8960C", fontFamily: "'Outfit'" }}>{activeProduct === "mortgage" ? "2029" : "2028"}</div>
                  <div style={{ fontSize: 10, color: "#6b7b8d" }}>join waitlist</div>
                </div>
              </div>
            )}
          </div>

          {/* Trust bar below selector */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 32,
            padding: "20px 0 0",
          }}>
            {[
              { icon: "⭐", text: "4.9/5 on Google", sub: "Join thousands of happy customers" },
              { icon: "🍁", text: "1M+ Canadians helped", sub: "Finding better rates since 2026" },
              { icon: "🤝", text: "Trusted carrier partners", sub: "Intact · Wawanesa · Aviva · 30+ more" },
            ].map(t => (
              <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>{t.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1B2A4A" }}>{t.text}</div>
                  <div style={{ fontSize: 11, color: "#98a2b3" }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ padding: "80px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0A7E8C", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>How It Works</div>
            <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 34, color: "#1B2A4A", margin: 0 }}>
              Compare rates in 3 simple steps
            </h2>
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            {[
              { step: "1", icon: "📸", title: "Snap your pink slip", desc: "Upload a photo of your current insurance card. Our AI extracts your vehicle, driver, and coverage details automatically.", time: "30 seconds", highlight: true },
              { step: "2", icon: "🔍", title: "We compare 30+ carriers", desc: "Your details are sent to Ontario's top insurance companies simultaneously. Real quotes, real-time, personalized to your profile.", time: "60 seconds" },
              { step: "3", icon: "✅", title: "Choose & save", desc: "See your quotes side by side. Pick the best rate. Bind your policy online through our licensed brokerage partner.", time: "30 seconds" },
            ].map((s, i) => (
              <div key={s.step} style={{
                flex: 1, background: s.highlight ? "linear-gradient(135deg, #f0fafb, #e6f7f8)" : "#f8fafb",
                borderRadius: 20, padding: "36px 28px",
                border: s.highlight ? "2px solid rgba(10,126,140,0.15)" : "2px solid #f0f2f5",
                position: "relative",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {s.highlight && <div style={{ position: "absolute", top: -10, right: 20, background: "#B8960C", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: 0.8 }}>AI-POWERED</div>}
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: s.highlight ? "linear-gradient(135deg, #0A7E8C, #0d9aa8)" : "#e8ecf0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, marginBottom: 20,
                  boxShadow: s.highlight ? "0 8px 24px rgba(10,126,140,0.2)" : "none",
                }}>{s.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#0A7E8C", letterSpacing: 1, marginBottom: 8 }}>STEP {s.step}</div>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 20, color: "#1B2A4A", margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7b8d", lineHeight: 1.6, margin: "0 0 16px" }}>{s.desc}</p>
                <div style={{ fontSize: 12, color: "#0A7E8C", fontWeight: 600, background: "rgba(10,126,140,0.08)", display: "inline-block", padding: "4px 10px", borderRadius: 8 }}>⏱ {s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED GUIDES ===== */}
      <section style={{ padding: "80px 32px", background: "#f8fafb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#0A7E8C", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Latest Guides</div>
              <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 30, color: "#1B2A4A", margin: 0 }}>
                Ontario insurance, explained simply
              </h2>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#0A7E8C", cursor: "pointer" }}>View all guides →</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {[
              { tag: "REFORM", tagColor: "#CC3333", tagBg: "#FFF0F0", title: "Ontario Auto Insurance Changes 2026: Everything You Need to Know", date: "May 4, 2026", read: "12 min read", featured: true },
              { tag: "GUIDE", tagColor: "#0A7E8C", tagBg: "#E6F4F6", title: "Which Accident Benefits Are Becoming Optional? Complete Breakdown", date: "May 6, 2026", read: "8 min read" },
              { tag: "REFORM", tagColor: "#CC3333", tagBg: "#FFF0F0", title: "Income Replacement Benefits: Do You Need Them?", date: "May 11, 2026", read: "7 min read" },
              { tag: "PERSONA", tagColor: "#B8960C", tagBg: "#FDF6E3", title: "Self-Employed & Gig Workers: Why Coverage Matters More Than Ever", date: "May 27, 2026", read: "6 min read" },
              { tag: "TOOL", tagColor: "#6B46C1", tagBg: "#F3EEFF", title: "Self-Assessment Checklist: Which Optional Benefits Do You Need?", date: "May 22, 2026", read: "Interactive" },
              { tag: "COMPARE", tagColor: "#0D8050", tagBg: "#E6F5ED", title: "Cheapest Car Insurance in Ontario 2026: Complete Guide", date: "Jun 5, 2026", read: "10 min read" },
            ].map((article, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 16,
                border: "1px solid #e8ecf0",
                overflow: "hidden", cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.06)"; e.currentTarget.style.borderColor = "#0A7E8C"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e8ecf0"; }}
              >
                <div style={{
                  height: 8,
                  background: article.tag === "REFORM" ? "linear-gradient(90deg, #CC3333, #e05555)" :
                    article.tag === "TOOL" ? "linear-gradient(90deg, #6B46C1, #8b6dd1)" :
                    article.tag === "COMPARE" ? "linear-gradient(90deg, #0D8050, #10a065)" :
                    article.tag === "PERSONA" ? "linear-gradient(90deg, #B8960C, #d4ad0e)" :
                    "linear-gradient(90deg, #0A7E8C, #12a3b3)",
                }} />
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: article.tagColor, background: article.tagBg, padding: "3px 8px", borderRadius: 6, letterSpacing: 0.8 }}>{article.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 17, color: "#1B2A4A", margin: "0 0 12px", lineHeight: 1.3 }}>{article.title}</h3>
                  <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#98a2b3" }}>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.read}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST / STATS ===== */}
      <section style={{ padding: "64px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { number: "30+", label: "Insurance carriers compared", icon: "🏢" },
              { number: "<2 min", label: "Average time to get quotes", icon: "⚡" },
              { number: "$612", label: "Average annual savings", icon: "💰" },
              { number: "100%", label: "Free, no obligation", icon: "🔒" },
            ].map((s, i) => (
              <div key={s.label} style={{
                flex: 1, textAlign: "center", padding: "24px 20px",
                borderRight: i < 3 ? "1px solid #f0f2f5" : "none",
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 32, color: "#0A7E8C", marginBottom: 4 }}>{s.number}</div>
                <div style={{ fontSize: 13, color: "#98a2b3", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GOT QUESTIONS ===== */}
      <section style={{ padding: "80px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0A7E8C", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Got Questions?</div>
            <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 30, color: "#1B2A4A", margin: "0 0 12px" }}>
              We help Canadians make better insurance<br />and money decisions
            </h2>
            <p style={{ fontSize: 15, color: "#6b7b8d", maxWidth: 520, margin: "0 auto" }}>
              Here's exactly how TopRates.ca works — no jargon, no fine print.
            </p>
          </div>

          {/* We Are / We're Not cards */}
          <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
            <div style={{
              flex: 1, background: "linear-gradient(135deg, #f0fafb, #e6f7f8)",
              borderRadius: 20, padding: "32px 28px",
              border: "2px solid rgba(10,126,140,0.12)",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(10,126,140,0.1)", borderRadius: 20,
                padding: "6px 14px", marginBottom: 20,
              }}>
                <span style={{ fontSize: 16 }}>✅</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0A7E8C" }}>What we are</span>
              </div>
              {[
                "A free comparison platform that shows you real rates from 30+ carriers",
                "Powered by Insurimple, a RIBO-licensed brokerage in Ontario",
                "AI-powered tools that save you time (snap your pink slip, done)",
                "Your advocate — we find the best rate AND the right coverage for you",
                "100% Canadian-owned and operated, based in Ontario",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#0A7E8C", fontSize: 14, marginTop: 2, flexShrink: 0 }}>●</span>
                  <span style={{ fontSize: 14, color: "#1B2A4A", lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{
              flex: 1, background: "#fafbfc",
              borderRadius: 20, padding: "32px 28px",
              border: "2px solid #f0f2f5",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#f0f2f5", borderRadius: 20,
                padding: "6px 14px", marginBottom: 20,
              }}>
                <span style={{ fontSize: 16 }}>🚫</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#98a2b3" }}>What we're not</span>
              </div>
              {[
                "Not an insurance company — we don't underwrite or issue policies",
                "Not a lead-gen site — we never sell your information to third parties",
                "Not biased — our rankings are based on price and fit, not who pays us more",
                "Not complicated — no 40-field forms, no hour-long phone calls",
                "Not going to spam you — ever",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#c0c5cc", fontSize: 14, marginTop: 2, flexShrink: 0 }}>●</span>
                  <span style={{ fontSize: 14, color: "#6b7b8d", lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Chat Q&A */}
          <div style={{ display: "flex", gap: 20 }}>
            {[
              {
                theme: "How TopRates.ca Works",
                icon: "⚡",
                items: [
                  { q: "Is TopRates.ca actually free?", a: "Yes, always. We're paid by insurance providers when you choose to connect with them. You never pay us a cent. Don't like the quotes? Just close the tab — no follow-up calls, no pressure. 🙌" },
                  { q: "How is this different from going to an insurer directly?", a: "When you go to Intact or Aviva, you only see their price. We show you 30+ carriers at once. Like checking one hotel site vs. all of them — except we do it in 2 minutes, not 2 hours. ⚡" },
                  { q: "Do I have to buy through you?", a: "Nope! Compare rates and buy direct from the carrier if you want. But through us, a licensed Insurimple broker makes sure your coverage fits your needs — at no extra cost. 🤝" },
                ],
                placeholder: "Ask about how it works...",
              },
              {
                theme: "Trust & Privacy",
                icon: "🔒",
                items: [
                  { q: "What happens with my personal info?", a: "Your data is only shared with the carrier you choose. We never sell your info to third parties. No spam calls, no random brokers. Bank-level 256-bit encryption on everything. 🔒" },
                  { q: "What about docs I upload — pink slip, driver's license?", a: "split", parts: [
                    { text: "Great question. ", hl: false },
                    { text: "Your uploaded documents are permanently deleted from our servers the instant we extract the data.", hl: true },
                    { text: " We only keep structured fields needed for quotes — never the original file. No copies, no backups. Fully automated AI, then gone. 🗑️", hl: false },
                  ]},
                  { q: "Okay seriously, what's the catch?", a: "split", parts: [
                    { text: "There isn't one 😄 Insurers pay us to send them customers. That's the entire model. ", hl: false },
                    { text: "The rates on TopRates.ca are the exact same rates you'd get going directly to the insurer.", hl: true },
                  ]},
                ],
                placeholder: "Ask about privacy & security...",
              },
            ].map((chat, ci) => (
              <div key={ci} style={{
                flex: 1, background: "#0a0f16",
                borderRadius: 20, overflow: "hidden",
                border: "1px solid #1e2d3d",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                display: "flex", flexDirection: "column",
              }}>
                {/* Chat header */}
                <div style={{
                  background: "linear-gradient(135deg, #1B2A4A, #162844)",
                  padding: "14px 18px",
                  borderBottom: "1px solid #1e2d3d",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative", flexShrink: 0,
                    boxShadow: "0 2px 10px rgba(10,126,140,0.25)",
                  }}>
                    <span style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 12, color: "#fff" }}>TR</span>
                    <div style={{
                      position: "absolute", bottom: -1, right: -1,
                      width: 16, height: 16, borderRadius: "50%",
                      background: "#1d9bf0", border: "2px solid #1B2A4A",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 13, color: "#fff" }}>TopRates.ca</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", overflow: "hidden", height: 14 }}>
                      <div style={{ animation: `statusScroll${ci} 10s ease-in-out infinite` }}>
                        {[
                          "142 Canadians comparing rates today",
                          ci === 0 ? "30+ carriers · Under 2 minutes" : "256-bit encrypted · Zero data selling",
                          ci === 0 ? "AI-powered · No phone calls needed" : "Documents auto-deleted after extraction",
                        ].map((st, sti) => (
                          <div key={sti} style={{ height: 14, display: "flex", alignItems: "center", gap: 4 }}>
                            <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 4px #22c55e", animation: "pulse 2s ease-in-out infinite" }} />
                            <span>{st}</span>
                          </div>
                        ))}
                      </div>
                      <style>{`
                        @keyframes statusScroll${ci} { 0%,28%{transform:translateY(0)} 33%,61%{transform:translateY(-14px)} 66%,94%{transform:translateY(-28px)} 100%{transform:translateY(0)} }
                        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
                      `}</style>
                    </div>
                  </div>
                  <div style={{ fontSize: 16 }}>{chat.icon}</div>
                </div>

                {/* Chat body */}
                <div style={{
                  padding: "16px 14px", flex: 1,
                  background: "linear-gradient(180deg, #0d1318, #0a0f16)",
                  display: "flex", flexDirection: "column", gap: 14,
                }}>
                  {/* Opening message */}
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 8, color: "#fff" }}>TR</span>
                    </div>
                    <div style={{ background: "#1a2332", border: "1px solid #243044", borderRadius: "14px 14px 14px 4px", padding: "9px 13px", maxWidth: "85%" }}>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                        {ci === 0 ? "👋 Hey! Here's how TopRates.ca works:" : "🔐 Your privacy matters. Here's how we protect it:"}
                      </span>
                    </div>
                  </div>

                  {chat.items.map((item, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {/* User question */}
                      <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div style={{ background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)", borderRadius: "14px 14px 4px 14px", padding: "8px 13px", maxWidth: "80%" }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{item.q}</span>
                        </div>
                      </div>
                      {/* Bot answer */}
                      <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 8, color: "#fff" }}>TR</span>
                        </div>
                        <div style={{ background: "#1a2332", border: "1px solid #243044", borderRadius: "14px 14px 14px 4px", padding: "9px 13px", maxWidth: "85%" }}>
                          {item.a === "split" ? (
                            <span style={{ fontSize: 12, lineHeight: 1.6 }}>
                              {item.parts.map((pt, pi) => pt.hl ? (
                                <span key={pi} style={{
                                  color: "#fff", fontWeight: 700,
                                  background: "linear-gradient(135deg, rgba(10,126,140,0.35), rgba(10,126,140,0.2))",
                                  padding: "1px 6px", borderRadius: 5,
                                  border: "1px solid rgba(10,126,140,0.4)",
                                  boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone",
                                }}>{pt.text}</span>
                              ) : (
                                <span key={pi} style={{ color: "rgba(255,255,255,0.55)" }}>{pt.text}</span>
                              ))}
                            </span>
                          ) : (
                            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item.a}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 8, color: "#fff" }}>TR</span>
                    </div>
                    <div style={{ background: "#1a2332", border: "1px solid #243044", borderRadius: "14px 14px 14px 4px", padding: "9px 13px", display: "flex", gap: 3, alignItems: "center" }}>
                      {[0,1,2].map(d => (
                        <div key={d} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.2)", animation: `typingDot 1.4s ease-in-out ${d*0.2}s infinite` }} />
                      ))}
                      <style>{`@keyframes typingDot { 0%,60%,100%{opacity:0.3;transform:translateY(0)} 30%{opacity:1;transform:translateY(-3px)} }`}</style>
                    </div>
                  </div>
                </div>

                {/* Chat input */}
                <div style={{ padding: "10px 14px", background: "#0d1318", borderTop: "1px solid #1a2332", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ flex: 1, background: "#1a2332", border: "1px solid #243044", borderRadius: 20, padding: "8px 14px", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
                    {chat.placeholder}
                  </div>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(10,126,140,0.25)",
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section style={{ padding: "80px 32px", background: "#f8fafb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#0A7E8C", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Compare & Save</div>
            <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 30, color: "#1B2A4A", margin: 0 }}>
              One platform for all your insurance needs
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
            {[
              { icon: "🚗", title: "Auto Insurance", desc: "Compare quotes from 30+ Ontario carriers", status: "Coming May 2027", live: false },
              { icon: "🏠", title: "Home Insurance", desc: "Protect your home at the best rate", status: "Coming May 2027", live: false },
              { icon: "💳", title: "Credit Cards", desc: "Find the best rewards, cashback & travel cards", status: "Live Now", live: true },
              { icon: "📊", title: "Mortgage Rates", desc: "Compare rates from top Canadian lenders", status: "Coming 2028", live: false },
            ].map(prod => (
              <div key={prod.title} style={{
                background: "#fff", borderRadius: 16, padding: "28px 22px",
                border: prod.live ? "2px solid rgba(10,126,140,0.2)" : "2px solid #f0f2f5",
                cursor: "pointer", transition: "all 0.3s", textAlign: "center",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{prod.icon}</div>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 17, color: "#1B2A4A", margin: "0 0 8px" }}>{prod.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7b8d", lineHeight: 1.5, margin: "0 0 14px" }}>{prod.desc}</p>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                  color: prod.live ? "#0A7E8C" : "#98a2b3",
                  background: prod.live ? "rgba(10,126,140,0.08)" : "#f0f2f5",
                  padding: "4px 10px", borderRadius: 8,
                }}>{prod.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section style={{
        padding: "80px 32px",
        background: "linear-gradient(135deg, #1B2A4A 0%, #0f1e38 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(10,126,140,0.06)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 30, color: "#fff", margin: "0 0 12px" }}>
            Be the first to compare
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: "0 0 32px" }}>
            TopRates.ca launches May 2027. Join the waitlist to get early access and never overpay for insurance again.
          </p>
          {!submitted ? (
            <div style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto" }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"
                style={{ flex: 1, padding: "14px 18px", borderRadius: 12, border: "2px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.07)", color: "#fff", fontSize: 15, fontFamily: "'DM Sans'", outline: "none" }}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
              />
              <button onClick={handleSubmit} style={{ background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)", color: "#fff", border: "none", borderRadius: 12, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans'", boxShadow: "0 4px 20px rgba(10,126,140,0.35)", whiteSpace: "nowrap" }}>Join Waitlist</button>
            </div>
          ) : (
            <div style={{ background: "rgba(10,126,140,0.15)", border: "1px solid rgba(10,126,140,0.3)", borderRadius: 12, padding: "14px 20px", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>✅</span>
              <span style={{ color: "#12b8ca", fontWeight: 600, fontSize: 14 }}>You're on the list!</span>
            </div>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#0a0f16", padding: "48px 32px 32px", borderTop: "1px solid #1e2d3d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 40, marginBottom: 40 }}>
            <div style={{ flex: "1 1 24%" }}>
              <div style={{ fontFamily: "'Outfit'", fontWeight: 900, fontSize: 22, color: "#0A7E8C", marginBottom: 12 }}>
                TopRates<span style={{ color: "rgba(255,255,255,0.5)" }}>.ca</span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>
                AI-powered insurance comparison for Canadians. Powered by Insurimple, a RIBO-licensed brokerage.
              </p>
            </div>
            {[
              { title: "Insurance", links: ["Car Insurance Ontario", "Home Insurance Ontario", "Business Insurance", "Travel Insurance", "Compare All Rates"] },
              { title: "Financial", links: ["Mortgage Rates", "Credit Cards", "Cashback Cards", "Travel Rewards Cards", "No-Fee Cards"] },
              { title: "Resources", links: ["Guides & Articles", "2026 Reform Guide", "Coverage Calculator", "Self-Assessment Tool", "About TopRates.ca"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "RIBO Disclosure", "Accessibility", "Contact Us"] },
            ].map(col => (
              <div key={col.title} style={{ flex: "1 1 17%" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
                {col.links.map(l => (
                  <div key={l} style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#0A7E8C"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
                  >{l}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 TopRates.ca. All rights reserved. Powered by Insurimple (RIBO Licensed).</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.15)" }}>Made in Canada 🇨🇦</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
