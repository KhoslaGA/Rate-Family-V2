# LifeRate — bespoke design set (design-agent source of truth)

Warm rosewood · advice-forward · human · standalone design system (`liferate.css`,
`lr-*` classes, own nav/footer/quoter) — **not** the shared `[data-site]` skin.
Accent `#8E4A56` (DESIGN-TOKEN-CONTRACT.md). All `[NAMED]` bylines render
`[BYLINE TBD]`; footer entity string pending owner sign-off (Webhub4u/KLC split).

## The 23 templates
Chrome (1,2) live in `liferate.css` (`.lr-nav` / `.lr-foot`) + repeated inline per page.

| # | Template | Design file | Port target (Next) |
|---|----------|-------------|--------------------|
| 1 | Header | `liferate.css .lr-nav` | `LrNav` (layout, host-conditional) |
| 2 | Footer | `liferate.css .lr-foot` | `LrFooter` (layout, host-conditional) |
| 3 | Homepage | `index.html` | `/` when x-site=liferate |
| 4 | Primary landing — Life | `life.html` | `/life-insurance` |
| 5 | Secondary landing — Critical illness | `critical-illness.html` | `/life-insurance/critical-illness` |
| 6 | Quoter (live) | `quoter.html` | reconcile to code-side quoter (QUOTER-CONTRACT.md) |
| 7 | Calculator — needs analysis | `calculator.html` | dispatches `rates:setcoverage {coverage}` |
| 8 | Chatbot | `chatbot.html` | (backend TBD) |
| 9 | Pillar guide | `guide-term-vs-permanent.html` | editorial route |
| 10 | News / article | `news-rate-trends-2026.html` | reviewed-by desk (lighter byline) |
| 11 | Glossary | `glossary.html` | `/glossary` (liferate skin) |
| 12 | Author / E-E-A-T | `author.html` | 🔒 TBD until real reviewer |
| 13 | Category hub | `category.html` | |
| 14 | Data / report | `report-cost-2026.html` | |
| 15 | About | `about.html` | |
| 16 | Trust hub | `trust.html` | |
| 17 | Legal | `legal.html` | 🔒 exact disclosure copy |
| 18 | Contact | `contact.html` | |
| 19 | Signup / account | `signup.html` | auth decision TBD |
| 20 | Comparison / rate-table | `compare-table.html` | |
| 21 | Renewal / conversion | `convert-tool.html` | |
| 22 | Needs / gap picker | `gap-picker.html` | feeds quoter via `rates:setcoverage` |
| 23 | City-geo | `city-gta.html` | R7: publishes only where real per-city data exists |

Shared deps the design HTML references: `assets/bo.js` (mascot), `../../Trust.html`.
Quoter/flows/family JS from the older static system are **superseded** by the
code-side engine (PR #18) + host-conditional chrome — not ported.

## Port status
- `liferate.css` — committed here (raw). Production copy: `app/src/styles/liferate.css`
  (`:root` re-scoped to `html[data-site="liferate"]`; display/body fonts → next/font vars).
- The 21 page HTML files are the design-agent reference (in the handoff thread); ported
  directly into Next components. Drop any specific one here on request for archival.
