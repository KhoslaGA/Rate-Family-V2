import { useState } from "react";

const TEAL = "#0A7E8C";
const NAVY = "#1B2A4A";

export default function SelfAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => { if (email.includes("@")) setSubmitted(true); };

  const questions = [
    { id: "employment", q: "What's your employment status?", options: [
      { label: "Employed full-time", value: "employed", icon: "💼" },
      { label: "Self-employed / Gig worker", value: "self", icon: "🧑‍💻" },
      { label: "Student", value: "student", icon: "🎓" },
      { label: "Retired", value: "retired", icon: "🏖️" },
      { label: "Unemployed / Between jobs", value: "unemployed", icon: "🔄" },
    ]},
    { id: "disability", q: "Do you have disability coverage through an employer?", options: [
      { label: "Yes — short-term and long-term", value: "both", icon: "✅" },
      { label: "Yes — short-term only", value: "short", icon: "⚠️" },
      { label: "No employer disability coverage", value: "none", icon: "❌" },
      { label: "I'm not sure", value: "unsure", icon: "❓" },
    ]},
    { id: "dependants", q: "Do you have dependants (children, aging parents, spouse)?", options: [
      { label: "Yes — children under 18", value: "children", icon: "👶" },
      { label: "Yes — I provide care for others", value: "caregiver", icon: "🤝" },
      { label: "Yes — both children and care duties", value: "both", icon: "👨‍👩‍👧" },
      { label: "No dependants", value: "none", icon: "👤" },
    ]},
    { id: "health", q: "Do you have private health insurance (workplace or personal)?", options: [
      { label: "Yes — comprehensive workplace plan", value: "full", icon: "🏥" },
      { label: "Yes — basic plan with gaps", value: "basic", icon: "⚠️" },
      { label: "No private health coverage", value: "none", icon: "❌" },
    ]},
    { id: "savings", q: "Could you cover 3–6 months of expenses without income?", options: [
      { label: "Yes — I have an emergency fund", value: "yes", icon: "💰" },
      { label: "Maybe — it would be tight", value: "maybe", icon: "⚠️" },
      { label: "No — I live paycheque to paycheque", value: "no", icon: "❌" },
    ]},
  ];

  const current = questions[step];
  const isComplete = step >= questions.length;

  // Calculate recommendations
  const getRecommendations = () => {
    const recs = [];
    const a = answers;

    // Income replacement
    if (a.employment === "self" || a.employment === "unemployed" || a.disability === "none" || a.disability === "unsure" || a.savings === "no") {
      recs.push({ benefit: "Income Replacement", rec: "KEEP", reason: "Without employer disability or savings, this benefit is critical if an accident prevents you from working.", priority: "high" });
    } else if (a.disability === "short" || a.savings === "maybe") {
      recs.push({ benefit: "Income Replacement", rec: "CONSIDER", reason: "Your short-term disability may not last long enough. Income replacement fills the gap.", priority: "medium" });
    } else {
      recs.push({ benefit: "Income Replacement", rec: "OPTIONAL", reason: "Your employer plan likely covers income loss. But review the details — auto insurance IRB may fill gaps.", priority: "low" });
    }

    // Non-earner
    if (a.employment === "student" || a.employment === "retired" || a.employment === "unemployed") {
      recs.push({ benefit: "Non-Earner Benefit", rec: "KEEP", reason: "You don't have employment income to replace, but this benefit covers you if an accident disrupts your daily life.", priority: "high" });
    } else {
      recs.push({ benefit: "Non-Earner Benefit", rec: "OPTIONAL", reason: "Income replacement is more relevant for you. Non-earner is designed for those without employment income.", priority: "low" });
    }

    // Caregiver
    if (a.dependants === "caregiver" || a.dependants === "both" || a.dependants === "children") {
      recs.push({ benefit: "Caregiver Benefit", rec: "KEEP", reason: "If an accident prevents you from caring for dependants, this covers the cost of replacement care.", priority: "high" });
    } else {
      recs.push({ benefit: "Caregiver Benefit", rec: "OPTIONAL", reason: "Without dependants relying on your care, this benefit is less critical.", priority: "low" });
    }

    // Housekeeping
    if (a.dependants !== "none") {
      recs.push({ benefit: "Housekeeping Benefit", rec: "CONSIDER", reason: "With dependants, an inability to maintain your household after an accident could require hired help.", priority: "medium" });
    } else {
      recs.push({ benefit: "Housekeeping Benefit", rec: "OPTIONAL", reason: "Lower priority if you live alone or with another capable adult.", priority: "low" });
    }

    // Death & funeral
    recs.push({ benefit: "Death & Funeral Benefit", rec: a.dependants !== "none" ? "CONSIDER" : "OPTIONAL", reason: a.dependants !== "none" ? "If dependants rely on you financially, this provides some coverage. But consider life insurance as a better alternative." : "May be redundant if you have life insurance or no financial dependants.", priority: a.dependants !== "none" ? "medium" : "low" });

    return recs;
  };

  const recColors = { KEEP: { color: "#CC3333", bg: "#FFF0F0" }, CONSIDER: { color: "#B8960C", bg: "#FDF6E3" }, OPTIONAL: { color: "#0D8050", bg: "#E6F5ED" } };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#2D2D2D", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

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
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "14px 32px 0", fontSize: 12, color: "#b0b8c4" }}>
        <span style={{ color: TEAL, cursor: "pointer" }}>Home</span> / <span style={{ color: TEAL, cursor: "pointer" }}>Guides</span> / <span style={{ color: "#6b7b8d" }}>Self-Assessment Checklist</span>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "28px 32px 80px" }}>

        <header style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#6B46C1", letterSpacing: 0.8, marginBottom: 10 }}>INTERACTIVE TOOL</div>
          <h1 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 32, color: NAVY, margin: "0 0 12px", lineHeight: 1.2 }}>
            Which Optional Benefits Do You Need?
          </h1>
          <p style={{ fontSize: 16, color: "#6b7b8d", lineHeight: 1.6, margin: 0 }}>
            Answer 5 quick questions and get a personalized recommendation for your Ontario auto insurance coverage after July 1, 2026.
          </p>
        </header>

        {/* PROGRESS BAR */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: isComplete ? "#0D8050" : TEAL }}>
              {isComplete ? "✓ Assessment complete" : `Question ${step + 1} of ${questions.length}`}
            </span>
            <span style={{ fontSize: 12, color: "#b0b8c4" }}>{Math.round((isComplete ? 1 : step / questions.length) * 100)}%</span>
          </div>
          <div style={{ height: 4, background: "#f0f2f5", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", background: isComplete ? "#0D8050" : TEAL, borderRadius: 4, width: `${(isComplete ? 1 : step / questions.length) * 100}%`, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* QUESTION */}
        {!isComplete && current && (
          <div>
            <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 22, color: NAVY, margin: "0 0 20px" }}>{current.q}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {current.options.map(opt => {
                const selected = answers[current.id] === opt.value;
                return (
                  <button key={opt.value} onClick={() => {
                    setAnswers({ ...answers, [current.id]: opt.value });
                    setTimeout(() => setStep(step + 1), 300);
                  }} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "16px 20px", borderRadius: 10,
                    border: selected ? `2px solid ${TEAL}` : "2px solid #e8ecf0",
                    background: selected ? "#f0fafb" : "#fff",
                    cursor: "pointer", transition: "all 0.15s",
                    textAlign: "left", fontFamily: "'DM Sans'",
                  }}
                  onMouseEnter={e => { if (!selected) e.currentTarget.style.borderColor = "#d0d5db"; }}
                  onMouseLeave={e => { if (!selected) e.currentTarget.style.borderColor = "#e8ecf0"; }}
                  >
                    <span style={{ fontSize: 22 }}>{opt.icon}</span>
                    <span style={{ fontSize: 15, fontWeight: 500, color: NAVY }}>{opt.label}</span>
                    {selected && <span style={{ marginLeft: "auto", color: TEAL, fontSize: 18 }}>✓</span>}
                  </button>
                );
              })}
            </div>

            {step > 0 && (
              <button onClick={() => setStep(step - 1)} style={{
                marginTop: 16, padding: "8px 16px", borderRadius: 8,
                border: "1px solid #e0e4e8", background: "#fff",
                fontSize: 13, color: "#6b7b8d", cursor: "pointer", fontFamily: "'DM Sans'",
              }}>← Back</button>
            )}
          </div>
        )}

        {/* RESULTS */}
        {isComplete && (
          <div>
            <div style={{ background: "linear-gradient(135deg, #f0fafb, #e8f6f7)", borderRadius: 12, border: "1px solid rgba(10,126,140,0.1)", padding: "24px 28px", marginBottom: 28 }}>
              <h2 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 20, color: NAVY, margin: "0 0 8px" }}>Your Personalized Recommendations</h2>
              <p style={{ fontSize: 14, color: "#6b7b8d", margin: 0 }}>Based on your answers, here's what we recommend for your optional accident benefits:</p>
            </div>

            {getRecommendations().map((r, i) => {
              const rc = recColors[r.rec];
              return (
                <div key={i} style={{ padding: "18px 22px", borderRadius: 10, border: "1px solid #e8ecf0", marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                    color: rc.color, background: rc.bg, letterSpacing: 0.5,
                    flexShrink: 0, marginTop: 2,
                  }}>{r.rec}</span>
                  <div>
                    <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 4 }}>{r.benefit}</div>
                    <p style={{ fontSize: 14, color: "#6b7b8d", lineHeight: 1.5, margin: 0 }}>{r.reason}</p>
                  </div>
                </div>
              );
            })}

            {/* Disclaimer */}
            <div style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 16, margin: "28px 0", fontSize: 13, color: "#6b7b8d", lineHeight: 1.6 }}>
              <strong style={{ color: NAVY }}>Disclaimer:</strong> This is a general guide, not personalized insurance advice. Everyone's situation is unique. We strongly recommend speaking with a licensed insurance broker before making changes to your coverage.
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
              <button onClick={() => { setStep(0); setAnswers({}); }} style={{
                padding: "11px 22px", borderRadius: 8, border: "1px solid #d0d5db",
                background: "#fff", fontSize: 14, fontWeight: 600, color: "#6b7b8d",
                cursor: "pointer", fontFamily: "'DM Sans'",
              }}>Retake Assessment</button>
              <button style={{
                padding: "11px 22px", borderRadius: 8, border: "none",
                background: TEAL, fontSize: 14, fontWeight: 700, color: "#fff",
                cursor: "pointer", fontFamily: "'DM Sans'",
              }}>Read the Full Reform Guide →</button>
            </div>

            {/* CTA */}
            <div style={{ background: "#f8fafb", border: "1px solid #e8ecf0", borderRadius: 10, padding: "22px 24px" }}>
              <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 4 }}>Compare rates with your optimal coverage</div>
              <p style={{ fontSize: 13, color: "#6b7b8d", margin: "0 0 12px" }}>TopRates.ca launches May 2027. We'll match you with carriers that offer the right optional benefits at the best price.</p>
              {!submitted ? (
                <div style={{ display: "flex", gap: 8, maxWidth: 340 }}>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
                    style={{ flex: 1, padding: "9px 14px", borderRadius: 8, border: "1px solid #d0d5db", fontSize: 13, fontFamily: "'DM Sans'", outline: "none" }}
                    onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  />
                  <button onClick={handleSubmit} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer" }}>Join Waitlist</button>
                </div>
              ) : (
                <span style={{ fontSize: 13, color: TEAL, fontWeight: 600 }}>✓ You're on the list!</span>
              )}
            </div>
          </div>
        )}
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
