import { useState } from "react";

const TEAL = "#0A7E8C";
const NAVY = "#1B2A4A";

export default function GuidesHub() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "Reform", "Coverage Guides", "Persona Guides", "Compare", "Tools"];

  const articles = [
    { title: "Ontario Auto Insurance Changes 2026: Everything You Need to Know", desc: "Starting July 1, 2026, most accident benefits become optional. Here's what that means for every Ontario driver.", tag: "Reform", date: "May 4, 2026", read: "12 min", featured: true, slug: "/guides/ontario-auto-insurance-changes-2026" },
    { title: "What Are Statutory Accident Benefits (SABS)? A Plain-Language Guide", desc: "A clear, jargon-free explanation of what SABS are, what they cover, and why they matter to you.", tag: "Coverage Guides", date: "May 6, 2026", read: "8 min", slug: "/guides/what-are-statutory-accident-benefits-sabs" },
    { title: "Which Ontario Auto Insurance Benefits Become Optional in July 2026?", desc: "The complete breakdown of every benefit shifting from mandatory to optional — and what each one actually covers.", tag: "Reform", date: "May 8, 2026", read: "10 min", slug: "/guides/optional-auto-insurance-benefits-ontario-2026" },
    { title: "Income Replacement Benefits Ontario: Do You Need Them?", desc: "If you can't work after an accident, this benefit replaces part of your income. Here's who needs it most.", tag: "Coverage Guides", date: "May 11, 2026", read: "7 min", slug: "/guides/income-replacement-benefits-ontario" },
    { title: "Non-Earner Benefits Explained: Students, Retirees & Stay-at-Home Parents", desc: "You don't need a job to need this benefit. Here's how non-earner coverage works and who should keep it.", tag: "Coverage Guides", date: "May 13, 2026", read: "6 min", slug: "/guides/non-earner-benefits-ontario-auto-insurance" },
    { title: "Ontario Auto Insurance Reform: What It Means If You're a New Driver", desc: "First time buying auto insurance in Ontario after July 2026? Here's what you need to know.", tag: "Persona Guides", date: "May 15, 2026", read: "5 min", slug: "/guides/ontario-auto-reform-new-drivers" },
    { title: "Death & Funeral Benefits in Ontario Auto Insurance: Should You Keep Them?", desc: "This benefit is becoming optional. Here's what it costs, what it covers, and whether you should keep it.", tag: "Coverage Guides", date: "May 18, 2026", read: "5 min", slug: "/guides/death-funeral-benefits-ontario-auto" },
    { title: "Self-Assessment Checklist: Which Optional Benefits Do You Need?", desc: "An interactive checklist to help you decide which optional accident benefits to keep after July 2026.", tag: "Tools", date: "May 22, 2026", read: "Interactive", slug: "/tools/optional-benefits-self-assessment-checklist" },
    { title: "Ontario Auto Insurance for Families: How the 2026 Changes Affect You", desc: "Parents, caregivers, and families with dependants face unique risks under the new rules.", tag: "Persona Guides", date: "May 25, 2026", read: "7 min", slug: "/guides/auto-insurance-families-ontario-2026" },
    { title: "Self-Employed & Gig Workers: Why Income Replacement Coverage Matters More Than Ever", desc: "No employer benefits? No safety net. Here's why gig workers need to pay close attention.", tag: "Persona Guides", date: "May 27, 2026", read: "6 min", slug: "/guides/self-employed-gig-worker-auto-insurance-ontario" },
    { title: "Auto Insurance First Payer Rule 2026: How It Changes Your Health Benefits", desc: "Your auto insurer now pays first for accident injuries. Here's how that affects your workplace health plan.", tag: "Reform", date: "Jun 1, 2026", read: "9 min", slug: "/guides/auto-insurance-first-payer-rule-ontario-2026" },
    { title: "Cheapest Car Insurance in Ontario 2026: Complete Guide", desc: "Which carriers have the lowest rates? How to actually get the cheapest quote. No clickbait, just data.", tag: "Compare", date: "Jun 5, 2026", read: "10 min", slug: "/guides/cheapest-car-insurance-ontario-2026" },
    { title: "Best Car Insurance Companies in Ontario 2026: Ranked", desc: "We ranked Ontario's top auto insurance companies on price, claims experience, digital tools, and coverage options.", tag: "Compare", date: "Jun 8, 2026", read: "11 min", slug: "/guides/best-car-insurance-companies-ontario-2026" },
    { title: "Pedestrians, Cyclists & Passengers: How the 2026 Reform Affects You", desc: "If you don't own a car, you may lose access to important accident benefits. Here's what to know.", tag: "Reform", date: "Jun 15, 2026", read: "7 min", slug: "/guides/pedestrians-cyclists-auto-insurance-ontario-2026" },
    { title: "Bundle Home & Auto Insurance Ontario: Is It Still Worth It in 2026?", desc: "Bundling saves you 15–20%. But is the bundle actually cheaper than best-in-class individual policies?", tag: "Compare", date: "Jun 17, 2026", read: "6 min", slug: "/guides/bundle-home-auto-insurance-ontario-2026" },
    { title: "What Happens If You're in an Accident After July 1, 2026?", desc: "A step-by-step walkthrough of the new claims process under Ontario's reformed auto insurance system.", tag: "Reform", date: "Jun 22, 2026", read: "8 min", slug: "/guides/accident-after-july-2026-ontario-auto-insurance" },
  ];

  const filtered = articles.filter(a => {
    const matchesFilter = activeFilter === "All" || a.tag === activeFilter;
    const matchesSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featured = articles.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured || activeFilter !== "All");

  const tagColors = {
    "Reform": { color: "#CC3333", bg: "#FFF0F0" },
    "Coverage Guides": { color: TEAL, bg: "#E6F4F6" },
    "Persona Guides": { color: "#B8960C", bg: "#FDF6E3" },
    "Compare": { color: "#0D8050", bg: "#E6F5ED" },
    "Tools": { color: "#6B46C1", bg: "#F3EEFF" },
  };

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

      {/* HERO */}
      <section style={{ padding: "48px 32px 40px", borderBottom: "1px solid #f0f2f5" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Guides & Resources</div>
          <h1 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 32, color: NAVY, margin: "0 0 10px" }}>
            Ontario insurance, explained simply
          </h1>
          <p style={{ fontSize: 16, color: "#6b7b8d", margin: "0 0 28px", maxWidth: 520 }}>
            Clear, honest guides to help you make better insurance decisions. No jargon, no sales pitch.
          </p>

          {/* Search + Filters */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ position: "relative" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", opacity: 0.35 }}>
                <circle cx="11" cy="11" r="8" stroke="#6b7b8d" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="#6b7b8d" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search guides..."
                style={{ padding: "9px 14px 9px 36px", borderRadius: 8, border: "1px solid #d0d5db", fontSize: 13, fontFamily: "'DM Sans'", outline: "none", width: 220, background: "#fafbfc" }}
                onFocus={e => e.target.style.borderColor = TEAL}
                onBlur={e => e.target.style.borderColor = "#d0d5db"}
              />
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {filters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} style={{
                  padding: "7px 14px", borderRadius: 20, cursor: "pointer",
                  fontSize: 12, fontWeight: activeFilter === f ? 700 : 500,
                  fontFamily: "'DM Sans'",
                  background: activeFilter === f ? NAVY : "transparent",
                  color: activeFilter === f ? "#fff" : "#6b7b8d",
                  border: activeFilter === f ? `1px solid ${NAVY}` : "1px solid #e0e4e8",
                  transition: "all 0.15s",
                }}>{f}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "32px 32px 80px" }}>

        {/* FEATURED ARTICLE */}
        {activeFilter === "All" && !searchQuery && featured && (
          <div style={{
            display: "flex", gap: 32, marginBottom: 48, paddingBottom: 40,
            borderBottom: "1px solid #f0f2f5", cursor: "pointer",
          }}>
            {/* Placeholder image area */}
            <div style={{
              flex: "0 0 380px", height: 220, borderRadius: 12,
              background: `linear-gradient(135deg, ${NAVY}, #1f3460)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(10,126,140,0.1)" }} />
              <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(184,150,12,0.06)" }} />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>⚡</div>
                <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Featured Guide</div>
              </div>
              <div style={{ position: "absolute", top: 12, left: 12, background: "#CC3333", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 6, letterSpacing: 0.6 }}>REFORM</div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#CC3333", letterSpacing: 0.6, marginBottom: 10 }}>FEATURED</div>
              <h2 style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 26, color: NAVY, margin: "0 0 10px", lineHeight: 1.2 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: "#6b7b8d", lineHeight: 1.6, margin: "0 0 14px" }}>{featured.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${NAVY}, #2a3f66)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Outfit'", fontWeight: 800, fontSize: 11, color: "#fff" }}>G</span>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: NAVY }}>Gautam</span>
                </div>
                <span style={{ fontSize: 12, color: "#b0b8c4" }}>{featured.date}</span>
                <span style={{ fontSize: 12, color: "#b0b8c4" }}>·</span>
                <span style={{ fontSize: 12, color: "#b0b8c4" }}>{featured.read}</span>
              </div>
            </div>
          </div>
        )}

        {/* RESULTS COUNT */}
        <div style={{ fontSize: 12, color: "#b0b8c4", marginBottom: 20 }}>
          {filtered.length} {filtered.length === 1 ? "guide" : "guides"}{activeFilter !== "All" ? ` in ${activeFilter}` : ""}{searchQuery ? ` matching "${searchQuery}"` : ""}
        </div>

        {/* ARTICLE GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {(activeFilter === "All" && !searchQuery ? rest.filter(a => !a.featured) : filtered).map((a, i) => {
            const tc = tagColors[a.tag] || { color: "#6b7b8d", bg: "#f0f2f5" };
            return (
              <div key={i} style={{
                padding: "22px 24px", borderRadius: 10,
                border: "1px solid #e8ecf0", cursor: "pointer",
                transition: "all 0.2s", background: "#fff",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = TEAL; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8ecf0"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: tc.color, background: tc.bg, padding: "3px 8px", borderRadius: 5, letterSpacing: 0.5 }}>{a.tag.toUpperCase()}</span>
                  <span style={{ fontSize: 11, color: "#b0b8c4" }}>{a.read}</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 17, color: NAVY, margin: "0 0 8px", lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7b8d", lineHeight: 1.5, margin: "0 0 12px" }}>{a.desc}</p>
                <div style={{ fontSize: 11, color: "#b0b8c4" }}>
                  {a.date}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
            <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 18, color: NAVY, marginBottom: 6 }}>No guides found</div>
            <p style={{ fontSize: 14, color: "#98a2b3" }}>Try a different search term or filter.</p>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div style={{ marginTop: 56, background: "#f8fafb", border: "1px solid #e8ecf0", borderRadius: 12, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 18, color: NAVY, marginBottom: 4 }}>Stay up to date</div>
            <p style={{ fontSize: 13, color: "#6b7b8d", margin: 0 }}>Get new guides and reform updates delivered to your inbox. No spam, unsubscribe anytime.</p>
          </div>
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            <input placeholder="Your email" style={{ padding: "9px 14px", borderRadius: 8, border: "1px solid #d0d5db", fontSize: 13, fontFamily: "'DM Sans'", outline: "none", width: 200 }} />
            <button style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans'", cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe</button>
          </div>
        </div>
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
