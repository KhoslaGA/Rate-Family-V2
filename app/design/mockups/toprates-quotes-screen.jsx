import { useState } from "react";

const quotes = [
  { carrier: "Wawanesa", premium: 1838, monthly: 153, savings: 612, badge: "Best Value", rating: 4.6, features: ["Accident Forgiveness", "Multi-vehicle Discount", "24/7 Claims Support", "Winter Tire Discount"], highlight: true },
  { carrier: "Intact Insurance", premium: 1956, monthly: 163, savings: 494, badge: "Most Popular", rating: 4.5, features: ["My Driving Discount", "Bundle Home+Auto", "Roadside Assistance", "Rental Car Coverage"], highlight: false },
  { carrier: "Aviva Canada", premium: 2104, monthly: 175, savings: 346, badge: "Best Coverage", rating: 4.4, features: ["EV Discount (10%)", "Diminishing Deductible", "Claims Guarantee", "Flexible Payments"], highlight: false },
  { carrier: "Economical", premium: 2198, monthly: 183, savings: 252, badge: null, rating: 4.3, features: ["Sonnet Digital Tools", "Usage-Based Pricing", "Bundle Savings", "Student Discount"], highlight: false },
];

const currentPremium = 2450;

const steps = ["Smart Start", "Vehicle", "Driver", "Coverage", "Quotes"];

export default function QuotesScreen() {
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("cards");
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#f6f8fa",
      minHeight: "100vh",
      padding: 0,
      position: "relative",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Subtle background pattern */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(10,126,140,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(27,42,74,0.03) 0%, transparent 50%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #0f1e38 100%)",
        padding: "16px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "relative", zIndex: 2,
        boxShadow: "0 2px 20px rgba(0,0,0,0.15)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22,
            background: "linear-gradient(135deg, #0A7E8C, #12a3b3)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: -0.5,
          }}>TopRates.ca</div>
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)", margin: "0 6px" }} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>Powered by Insurimple</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
          <span style={{ background: "rgba(10,126,140,0.2)", padding: "4px 10px", borderRadius: 20, fontSize: 11, color: "#0A7E8C", fontWeight: 600 }}>RIBO Licensed</span>
          <span>1-888-TOP-RATE</span>
        </div>
      </div>

      {/* Progress Steps */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 0,
        padding: "0", background: "#fff",
        borderBottom: "1px solid #e8ecf0",
        position: "relative", zIndex: 2,
      }}>
        {steps.map((s, i) => (
          <div key={s} style={{
            flex: 1, maxWidth: 180, padding: "14px 12px",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: i === 4 ? "linear-gradient(135deg, #0A7E8C, #0d8f9e)" : i < 4 ? "#f0fafb" : "#fff",
            borderBottom: i === 4 ? "3px solid #B8960C" : "3px solid transparent",
            transition: "all 0.3s",
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: i === 4 ? "#fff" : i < 4 ? "#0A7E8C" : "#d0d5dd",
              color: i === 4 ? "#0A7E8C" : i < 4 ? "#fff" : "#98a2b3",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700,
            }}>
              {i < 4 ? "✓" : i + 1}
            </div>
            <span style={{
              fontSize: 12, fontWeight: i === 4 ? 700 : 500,
              color: i === 4 ? "#fff" : i < 4 ? "#0A7E8C" : "#98a2b3",
              letterSpacing: 0.3,
            }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "28px 20px", position: "relative", zIndex: 1 }}>

        {/* Savings Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1B2A4A 0%, #243656 50%, #1B2A4A 100%)",
          borderRadius: 16, padding: "28px 32px",
          marginBottom: 28,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
          boxShadow: "0 8px 32px rgba(27,42,74,0.25)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -30, right: -30,
            width: 120, height: 120, borderRadius: "50%",
            background: "rgba(10,126,140,0.1)",
          }} />
          <div style={{
            position: "absolute", bottom: -40, left: "40%",
            width: 160, height: 160, borderRadius: "50%",
            background: "rgba(184,150,12,0.06)",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Your current premium</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 32, fontWeight: 700, color: "rgba(255,255,255,0.4)", fontFamily: "'Outfit', sans-serif", textDecoration: "line-through", textDecorationColor: "rgba(255,100,100,0.5)" }}>${currentPremium}</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>/year</span>
            </div>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            position: "relative", zIndex: 1,
          }}>
            <div style={{ fontSize: 28, color: "rgba(255,255,255,0.2)" }}>→</div>
            <div style={{
              background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
              borderRadius: 12, padding: "12px 24px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>Best rate found</div>
              <div style={{ fontSize: 34, fontWeight: 800, color: "#fff", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>$1,838</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>/year ($153/mo)</div>
            </div>
          </div>
          <div style={{
            background: "rgba(184,150,12,0.15)", border: "1px solid rgba(184,150,12,0.3)",
            borderRadius: 12, padding: "14px 20px", textAlign: "center",
            position: "relative", zIndex: 1,
          }}>
            <div style={{ fontSize: 11, color: "#B8960C", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>You save</div>
            <div style={{ fontSize: 30, fontWeight: 800, color: "#d4ad0e", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>$612</div>
            <div style={{ fontSize: 12, color: "rgba(184,150,12,0.7)", marginTop: 2 }}>per year</div>
          </div>
        </div>

        {/* View Toggle */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit', sans-serif" }}>4 quotes found</span>
            <span style={{ fontSize: 13, color: "#98a2b3", marginLeft: 8 }}>sorted by lowest price</span>
          </div>
          <div style={{ display: "flex", gap: 4, background: "#e8ecf0", borderRadius: 8, padding: 3 }}>
            {["cards", "table"].map(m => (
              <button key={m} onClick={() => setViewMode(m)} style={{
                padding: "6px 14px", border: "none", borderRadius: 6, cursor: "pointer",
                fontSize: 12, fontWeight: 600, textTransform: "capitalize",
                background: viewMode === m ? "#fff" : "transparent",
                color: viewMode === m ? "#1B2A4A" : "#98a2b3",
                boxShadow: viewMode === m ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.2s",
              }}>{m === "cards" ? "Cards" : "Compare"}</button>
            ))}
          </div>
        </div>

        {/* Quote Cards */}
        {viewMode === "cards" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {quotes.map((q, i) => (
              <div
                key={q.carrier}
                onClick={() => setSelected(i)}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: selected === i ? "2px solid #0A7E8C" : i === 0 ? "2px solid rgba(184,150,12,0.4)" : "2px solid transparent",
                  boxShadow: hoveredCard === i
                    ? "0 12px 40px rgba(10,126,140,0.12)"
                    : selected === i
                      ? "0 8px 32px rgba(10,126,140,0.1)"
                      : "0 2px 12px rgba(0,0,0,0.04)",
                  padding: 0, overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  transform: hoveredCard === i ? "translateY(-2px)" : "none",
                  position: "relative",
                }}
              >
                {/* Badge ribbon */}
                {q.badge && (
                  <div style={{
                    position: "absolute", top: 0, right: 24,
                    background: i === 0 ? "linear-gradient(135deg, #B8960C, #d4ad0e)" : i === 1 ? "linear-gradient(135deg, #0A7E8C, #12a3b3)" : "linear-gradient(135deg, #1B2A4A, #2d4470)",
                    color: "#fff", fontSize: 10, fontWeight: 700,
                    padding: "6px 14px 8px", borderRadius: "0 0 8px 8px",
                    letterSpacing: 0.8, textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}>{i === 0 ? "⭐ " : ""}{q.badge}</div>
                )}

                <div style={{ display: "flex", alignItems: "stretch" }}>
                  {/* Left: Carrier info */}
                  <div style={{
                    flex: "0 0 200px", padding: "24px",
                    display: "flex", flexDirection: "column", justifyContent: "center",
                    borderRight: "1px solid #f0f2f5",
                  }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit', sans-serif", marginBottom: 6 }}>{q.carrier}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
                      <span style={{ color: "#B8960C", fontSize: 13 }}>{"★".repeat(Math.floor(q.rating))}</span>
                      <span style={{ fontSize: 12, color: "#98a2b3", fontWeight: 500 }}>{q.rating}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#98a2b3" }}>A.M. Best: A+</div>
                  </div>

                  {/* Center: Price */}
                  <div style={{
                    flex: "0 0 200px", padding: "24px",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    background: i === 0 ? "linear-gradient(135deg, rgba(10,126,140,0.04), rgba(10,126,140,0.08))" : "transparent",
                  }}>
                    <div style={{
                      fontSize: 36, fontWeight: 800, color: i === 0 ? "#0A7E8C" : "#1B2A4A",
                      fontFamily: "'Outfit', sans-serif", lineHeight: 1,
                    }}>${q.premium.toLocaleString()}</div>
                    <div style={{ fontSize: 13, color: "#98a2b3", marginTop: 4 }}>/year (${q.monthly}/mo)</div>
                    <div style={{
                      marginTop: 8, fontSize: 12, fontWeight: 700,
                      color: "#0A7E8C",
                      background: "rgba(10,126,140,0.08)",
                      padding: "3px 10px", borderRadius: 20,
                    }}>Save ${q.savings}/yr</div>
                  </div>

                  {/* Right: Features */}
                  <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px" }}>
                      {q.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#4a5568" }}>
                          <span style={{ color: "#0A7E8C", fontSize: 11, fontWeight: 700 }}>✓</span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{
                    flex: "0 0 140px", padding: "20px 16px",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    gap: 8,
                  }}>
                    <button style={{
                      background: selected === i
                        ? "linear-gradient(135deg, #0A7E8C, #0d9aa8)"
                        : hoveredCard === i
                          ? "linear-gradient(135deg, #0A7E8C, #0d9aa8)"
                          : "#1B2A4A",
                      color: "#fff", border: "none", borderRadius: 10,
                      padding: "12px 20px", fontSize: 13, fontWeight: 700,
                      cursor: "pointer", width: "100%",
                      transition: "all 0.3s",
                      boxShadow: selected === i ? "0 4px 16px rgba(10,126,140,0.3)" : "0 2px 8px rgba(0,0,0,0.1)",
                    }}>
                      {selected === i ? "✓ Selected" : "Select"}
                    </button>
                    <span style={{ fontSize: 11, color: "#0A7E8C", cursor: "pointer", fontWeight: 500 }}>View details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#1B2A4A" }}>
                  {["Carrier", "Annual", "Monthly", "Savings", "Rating", ""].map(h => (
                    <th key={h} style={{ padding: "14px 16px", color: "#fff", fontWeight: 600, textAlign: "left", fontSize: 12, letterSpacing: 0.5 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quotes.map((q, i) => (
                  <tr key={q.carrier} onClick={() => setSelected(i)} style={{
                    background: selected === i ? "rgba(10,126,140,0.05)" : i % 2 === 0 ? "#fafbfc" : "#fff",
                    cursor: "pointer", transition: "background 0.2s",
                    borderLeft: selected === i ? "3px solid #0A7E8C" : "3px solid transparent",
                  }}>
                    <td style={{ padding: "14px 16px", fontWeight: 600, color: "#1B2A4A" }}>
                      {q.badge && <span style={{ fontSize: 9, background: i === 0 ? "#FDF6E3" : "#f0fafb", color: i === 0 ? "#B8960C" : "#0A7E8C", padding: "2px 6px", borderRadius: 4, marginRight: 6, fontWeight: 700 }}>{q.badge}</span>}
                      {q.carrier}
                    </td>
                    <td style={{ padding: "14px 16px", fontWeight: 800, color: "#0A7E8C", fontFamily: "'Outfit', sans-serif", fontSize: 16 }}>${q.premium.toLocaleString()}</td>
                    <td style={{ padding: "14px 16px", color: "#4a5568" }}>${q.monthly}/mo</td>
                    <td style={{ padding: "14px 16px", color: "#0A7E8C", fontWeight: 600 }}>${q.savings}/yr</td>
                    <td style={{ padding: "14px 16px", color: "#B8960C" }}>{"★".repeat(Math.floor(q.rating))} {q.rating}</td>
                    <td style={{ padding: "14px 16px" }}>
                      <button style={{
                        background: selected === i ? "#0A7E8C" : "#e8ecf0",
                        color: selected === i ? "#fff" : "#1B2A4A",
                        border: "none", borderRadius: 6, padding: "6px 16px",
                        fontSize: 12, fontWeight: 600, cursor: "pointer",
                      }}>{selected === i ? "✓ Selected" : "Select"}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* What Happens Next */}
        <div style={{
          marginTop: 28, background: "#fff", borderRadius: 16,
          padding: "28px 32px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit', sans-serif", marginBottom: 20 }}>What happens next?</div>
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { step: "1", title: "Select Quote", desc: "Choose the carrier and coverage that works for you", icon: "🎯" },
              { step: "2", title: "Broker Review", desc: "Licensed Insurimple broker confirms your details", icon: "✅" },
              { step: "3", title: "E-Sign & Pay", desc: "Sign digitally, set up payment. Instant pink slip", icon: "📝" },
              { step: "4", title: "You're Covered", desc: "Digital proof of insurance sent to your phone", icon: "🛡️" },
            ].map((s, i) => (
              <div key={s.step} style={{
                flex: 1, textAlign: "center", padding: "0 12px",
                position: "relative",
              }}>
                {i < 3 && <div style={{
                  position: "absolute", top: 18, right: -8, width: 16,
                  height: 2, background: "#e8ecf0",
                }} />}
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(10,126,140,0.1), rgba(10,126,140,0.05))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 10px", fontSize: 18,
                }}>{s.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1B2A4A", marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 11, color: "#98a2b3", lineHeight: 1.4 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclosure */}
        <div style={{
          marginTop: 20, padding: "16px 20px",
          background: "rgba(184,150,12,0.06)",
          border: "1px solid rgba(184,150,12,0.15)",
          borderRadius: 10,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#B8960C", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Disclosure</div>
          <div style={{ fontSize: 11, color: "#7a7055", lineHeight: 1.5 }}>
            Quotes are provided by Insurimple, a RIBO-licensed brokerage (Reg. #XXXXX). TopRates.ca earns a referral commission from insurance providers. This does not affect the rates shown to you. All quotes are subject to underwriting approval by the selected carrier.
          </div>
        </div>

        {/* Continue Button */}
        {selected !== null && (
          <div style={{
            marginTop: 24, display: "flex", justifyContent: "center",
          }}>
            <button style={{
              background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
              color: "#fff", border: "none", borderRadius: 12,
              padding: "16px 48px", fontSize: 16, fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(10,126,140,0.3)",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: 0.5,
              transition: "all 0.3s",
            }}>
              Continue with {quotes[selected].carrier} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
