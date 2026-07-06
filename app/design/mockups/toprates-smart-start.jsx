import { useState, useRef } from "react";

const steps = ["Smart Start", "Vehicle", "Driver", "Coverage", "Quotes"];

export default function SmartStartScreen() {
  const [path, setPath] = useState(null); // 'upload' | 'manual'
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [extracting, setExtracting] = useState(false);
  const [extracted, setExtracted] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [showExtracted, setShowExtracted] = useState(false);
  const fileRef = useRef(null);

  const simulateUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      setExtracting(true);
      setTimeout(() => {
        setExtracting(false);
        setExtracted(true);
        setTimeout(() => setShowExtracted(true), 300);
      }, 2200);
    }, 1200);
  };

  const extractedFields = [
    { label: "Insurer", value: "Intact Insurance", icon: "🏢" },
    { label: "Policy #", value: "AUT-9827461", icon: "📋" },
    { label: "Vehicle", value: "2022 Honda Civic EX", icon: "🚗" },
    { label: "VIN", value: "2HGFE2F59NH5•••••", icon: "🔢" },
    { label: "Liability", value: "$1,000,000", icon: "🛡️" },
    { label: "Collision", value: "$500 deductible", icon: "💥" },
    { label: "Comprehensive", value: "$500 deductible", icon: "🌧️" },
    { label: "Premium", value: "$2,450/year", icon: "💰" },
    { label: "Expiry", value: "Aug 15, 2026", icon: "📅" },
    { label: "Named Insured", value: "Gautam •••••", icon: "👤" },
  ];

  const reset = () => {
    setPath(null); setUploading(false); setUploaded(false);
    setExtracting(false); setExtracted(false); setShowExtracted(false);
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#f6f8fa",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "radial-gradient(circle at 15% 85%, rgba(10,126,140,0.05) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(27,42,74,0.04) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(184,150,12,0.02) 0%, transparent 40%)",
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
        display: "flex", justifyContent: "center",
        background: "#fff", borderBottom: "1px solid #e8ecf0",
        position: "relative", zIndex: 2,
      }}>
        {steps.map((s, i) => (
          <div key={s} style={{
            flex: 1, maxWidth: 180, padding: "14px 12px",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: i === 0 ? "linear-gradient(135deg, #0A7E8C, #0d8f9e)" : "#fff",
            borderBottom: i === 0 ? "3px solid #B8960C" : "3px solid transparent",
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: i === 0 ? "#fff" : "#e8ecf0",
              color: i === 0 ? "#0A7E8C" : "#c0c5cc",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700,
            }}>{i + 1}</div>
            <span style={{
              fontSize: 12, fontWeight: i === 0 ? 700 : 500,
              color: i === 0 ? "#fff" : "#c0c5cc",
              letterSpacing: 0.3,
            }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "32px 20px", position: "relative", zIndex: 1 }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 30,
            color: "#1B2A4A", margin: "0 0 8px", lineHeight: 1.2,
          }}>
            Let's find you a better rate
          </h1>
          <p style={{ fontSize: 15, color: "#6b7b8d", margin: 0, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Compare quotes from 30+ carriers in minutes. Choose how you'd like to start.
          </p>
        </div>

        {/* Two Path Cards */}
        {!uploaded && (
          <div style={{ display: "flex", gap: 20, marginBottom: 28 }}>
            {/* FAST TRACK */}
            <div
              onClick={() => { setPath("upload"); fileRef.current?.click(); }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); setPath("upload"); simulateUpload(); }}
              style={{
                flex: 1,
                background: dragOver
                  ? "linear-gradient(135deg, rgba(10,126,140,0.08), rgba(10,126,140,0.12))"
                  : path === "upload"
                    ? "linear-gradient(135deg, rgba(10,126,140,0.04), rgba(10,126,140,0.08))"
                    : "#fff",
                borderRadius: 20,
                border: dragOver ? "2px dashed #0A7E8C" : path === "upload" ? "2px solid #0A7E8C" : "2px solid #e8ecf0",
                padding: "36px 28px",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                position: "relative", overflow: "hidden",
                boxShadow: path === "upload" ? "0 12px 40px rgba(10,126,140,0.12)" : "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* Decorative corner */}
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 80, height: 80, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(10,126,140,0.08), rgba(10,126,140,0.03))",
              }} />
              <div style={{
                position: "absolute", bottom: -30, left: -10,
                width: 60, height: 60, borderRadius: "50%",
                background: "rgba(184,150,12,0.05)",
              }} />

              {/* Recommended badge */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                background: "linear-gradient(135deg, #B8960C, #d4ad0e)",
                color: "#fff", fontSize: 9, fontWeight: 700,
                padding: "4px 10px", borderRadius: 20,
                letterSpacing: 1, textTransform: "uppercase",
              }}>⚡ Recommended</div>

              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 20, margin: "0 auto 18px",
                  background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(10,126,140,0.25)",
                }}>
                  <span style={{ fontSize: 32 }}>📸</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#0A7E8C", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Fast Track</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#1B2A4A", fontFamily: "'Outfit', sans-serif", marginBottom: 10 }}>Snap Your Pink Slip</div>
                <p style={{ fontSize: 13, color: "#6b7b8d", lineHeight: 1.6, margin: "0 0 20px" }}>
                  Upload a photo of your current insurance card. Our AI extracts your details and finds you a better rate in under 2 minutes.
                </p>

                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
                  color: "#fff", padding: "12px 28px", borderRadius: 12,
                  fontSize: 14, fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(10,126,140,0.3)",
                }}>
                  📷 Upload Photo
                </div>
                <div style={{ fontSize: 11, color: "#98a2b3", marginTop: 10 }}>or drag & drop your file here</div>
                <div style={{
                  marginTop: 16, display: "flex", justifyContent: "center", gap: 16,
                }}>
                  {["~2 min", "70% auto-filled", "AI-powered"].map(t => (
                    <span key={t} style={{
                      fontSize: 10, color: "#0A7E8C", fontWeight: 600,
                      background: "rgba(10,126,140,0.08)", padding: "3px 8px", borderRadius: 6,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <input ref={fileRef} type="file" accept="image/*,.pdf" style={{ display: "none" }} onChange={() => simulateUpload()} />
            </div>

            {/* OR divider */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 40 }}>
              <div style={{ flex: 1, width: 1, background: "linear-gradient(to bottom, transparent, #d0d5dd, transparent)" }} />
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "#e8ecf0", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700, color: "#98a2b3", margin: "8px 0",
              }}>OR</div>
              <div style={{ flex: 1, width: 1, background: "linear-gradient(to bottom, transparent, #d0d5dd, transparent)" }} />
            </div>

            {/* MANUAL */}
            <div
              onClick={() => setPath("manual")}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
              style={{
                flex: 1,
                background: path === "manual" ? "rgba(27,42,74,0.03)" : "#fff",
                borderRadius: 20,
                border: path === "manual" ? "2px solid #1B2A4A" : "2px solid #e8ecf0",
                padding: "36px 28px",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                position: "relative", overflow: "hidden",
                boxShadow: path === "manual" ? "0 12px 40px rgba(27,42,74,0.1)" : "0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{
                position: "absolute", top: -20, left: -20,
                width: 70, height: 70, borderRadius: "50%",
                background: "rgba(27,42,74,0.03)",
              }} />

              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 20, margin: "0 auto 18px",
                  background: "#e8ecf0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 32 }}>✍️</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#98a2b3", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Manual Entry</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#1B2A4A", fontFamily: "'Outfit', sans-serif", marginBottom: 10 }}>Start From Scratch</div>
                <p style={{ fontSize: 13, color: "#6b7b8d", lineHeight: 1.6, margin: "0 0 20px" }}>
                  Don't have your pink slip handy? No problem. Enter your vehicle and driver details manually step by step.
                </p>

                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#1B2A4A",
                  color: "#fff", padding: "12px 28px", borderRadius: 12,
                  fontSize: 14, fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(27,42,74,0.2)",
                }}>
                  Start Quote
                </div>
                <div style={{ fontSize: 11, color: "#98a2b3", marginTop: 10 }}>Takes approximately 5 minutes</div>
                <div style={{
                  marginTop: 16, display: "flex", justifyContent: "center", gap: 16,
                }}>
                  {["~5 min", "Step-by-step", "No docs needed"].map(t => (
                    <span key={t} style={{
                      fontSize: 10, color: "#6b7b8d", fontWeight: 600,
                      background: "#f0f2f5", padding: "3px 8px", borderRadius: 6,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Processing State */}
        {(uploading || extracting) && (
          <div style={{
            background: "#fff", borderRadius: 20, padding: "48px 40px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            textAlign: "center", marginBottom: 28,
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px",
              background: "linear-gradient(135deg, rgba(10,126,140,0.1), rgba(10,126,140,0.05))",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", inset: -4,
                border: "3px solid transparent",
                borderTopColor: "#0A7E8C",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }} />
              <span style={{ fontSize: 36 }}>{uploading ? "📄" : "🤖"}</span>
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Outfit', sans-serif", marginBottom: 8 }}>
              {uploading ? "Uploading your document..." : "AI is extracting your details..."}
            </div>
            <p style={{ fontSize: 13, color: "#98a2b3", margin: 0 }}>
              {uploading ? "Securely processing your file" : "Scanning policy details, vehicle info, and coverage levels"}
            </p>
            {extracting && (
              <div style={{ marginTop: 24, maxWidth: 320, marginLeft: "auto", marginRight: "auto" }}>
                <div style={{ height: 4, background: "#e8ecf0", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", background: "linear-gradient(90deg, #0A7E8C, #12a3b3)",
                    borderRadius: 4, width: "65%",
                    animation: "progress 2s ease-in-out forwards",
                  }} />
                </div>
                <style>{`@keyframes progress { from { width: 5%; } to { width: 100%; } }`}</style>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: 10, color: "#0A7E8C", fontWeight: 600 }}>Reading document...</span>
                  <span style={{ fontSize: 10, color: "#98a2b3" }}>Almost done</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Extracted Data Success */}
        {extracted && showExtracted && (
          <div style={{
            background: "#fff", borderRadius: 20,
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            overflow: "hidden", marginBottom: 28,
          }}>
            {/* Success header */}
            <div style={{
              background: "linear-gradient(135deg, #0A7E8C, #0d9aa8)",
              padding: "20px 32px",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>✅</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
                  We extracted 10 fields from your pink slip
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                  Review below and confirm. These will pre-fill your quote form.
                </div>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <button onClick={reset} style={{
                  background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff", borderRadius: 8, padding: "6px 14px",
                  fontSize: 11, fontWeight: 600, cursor: "pointer",
                }}>↻ Re-upload</button>
              </div>
            </div>

            {/* Extracted fields grid */}
            <div style={{ padding: "24px 32px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {extractedFields.map((f, i) => (
                  <div key={f.label} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "12px 16px",
                    background: "#f8fafb",
                    borderRadius: 10,
                    border: "1px solid #eef1f4",
                    animation: `fadeSlideIn 0.4s ease-out ${i * 0.06}s both`,
                  }}>
                    <span style={{ fontSize: 18, width: 28, textAlign: "center" }}>{f.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, color: "#98a2b3", fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 2 }}>{f.label}</div>
                      <div style={{ fontSize: 14, color: "#1B2A4A", fontWeight: 600 }}>{f.value}</div>
                    </div>
                    <span style={{ fontSize: 10, color: "#0A7E8C", fontWeight: 600, background: "rgba(10,126,140,0.08)", padding: "2px 6px", borderRadius: 4 }}>✓ Found</span>
                  </div>
                ))}
              </div>
              <style>{`@keyframes fadeSlideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            </div>
          </div>
        )}

        {/* Postal Code */}
        <div style={{
          background: "#fff", borderRadius: 16, padding: "24px 32px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          marginBottom: 24,
          display: "flex", alignItems: "center", gap: 20,
        }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: "#1B2A4A", letterSpacing: 0.5, textTransform: "uppercase", display: "block", marginBottom: 6 }}>
              Your Postal Code <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
              placeholder="e.g. L6T 3Y5"
              maxLength={7}
              style={{
                width: "100%", padding: "12px 16px",
                border: "2px solid #e8ecf0", borderRadius: 10,
                fontSize: 16, fontWeight: 600, color: "#1B2A4A",
                fontFamily: "'Outfit', sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => e.target.style.borderColor = "#0A7E8C"}
              onBlur={(e) => e.target.style.borderColor = "#e8ecf0"}
            />
            <div style={{ fontSize: 11, color: "#98a2b3", marginTop: 4 }}>Rates vary by location — required for accurate quotes</div>
          </div>
          <div>
            <button
              disabled={!postalCode || postalCode.length < 6}
              style={{
                background: postalCode.length >= 6
                  ? "linear-gradient(135deg, #0A7E8C, #0d9aa8)"
                  : "#e8ecf0",
                color: postalCode.length >= 6 ? "#fff" : "#c0c5cc",
                border: "none", borderRadius: 12,
                padding: "14px 36px", fontSize: 15, fontWeight: 700,
                cursor: postalCode.length >= 6 ? "pointer" : "not-allowed",
                fontFamily: "'Outfit', sans-serif",
                boxShadow: postalCode.length >= 6 ? "0 6px 24px rgba(10,126,140,0.3)" : "none",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
              }}
            >
              Continue →
            </button>
          </div>
        </div>

        {/* Trust Signals */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 32,
          padding: "16px 0", marginBottom: 20,
        }}>
          {[
            { icon: "🔒", text: "256-bit encrypted" },
            { icon: "🚫", text: "No spam, ever" },
            { icon: "⚡", text: "Instant deletion after processing" },
            { icon: "🏛️", text: "RIBO regulated" },
          ].map(t => (
            <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#98a2b3", fontWeight: 500 }}>
              <span>{t.icon}</span> {t.text}
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div style={{
          padding: "14px 20px",
          background: "rgba(184,150,12,0.05)",
          border: "1px solid rgba(184,150,12,0.12)",
          borderRadius: 10, textAlign: "center",
        }}>
          <div style={{ fontSize: 11, color: "#8a7d5a", lineHeight: 1.5 }}>
            Your document is processed securely. We extract only the information needed to generate quotes.
            Your file is deleted immediately after processing. TopRates.ca is powered by Insurimple, a RIBO-licensed brokerage.
          </div>
        </div>
      </div>
    </div>
  );
}
