# Rate Family — Design ↔ Code Coordination Backlog

**Two Claudes, separate environments.** The Design workspace (claude.ai/design) can't run unattended and can't read this repo; Claude Code (this repo) can't message the Design agent. They converge only through **(a) contract files here** — `DESIGN-TOKEN-CONTRACT.md`, `QUOTER-CONTRACT.md` — and **(b) the user relaying**. This file is the shared backlog + handoff protocol.

## Handoff protocol (how a design becomes a live page)
1. **Design agent** finishes a template → the **user exports it into this repo** as `bespoke/<site>/<template>.html` (or pastes it). This is the unblock — the design agent can't push here itself.
2. **Claude Code** ports it to a **shared host-themed component** in the Next app (one component serves all 3 spokes; per-spoke differences ride the `[data-site]` skins). Reconciles tokens/events against the contracts. Verifies (tsc + build) → PR.
3. Real-world facts the design can't encode stay as placeholders: **`[BYLINE TBD]`** and the **entity-disclosure string** — Code fills them only when the user gives exact values.

## Architecture note: 69 designs → ~23 shared code templates
The design agent builds 69 (23 × 3 spokes) to nail each spoke's feel. Code builds **~23 shared, host-themed templates** — the `[data-site]` skins absorb the per-spoke differences. So a design landing for one spoke often lets Code build the template for **all three** at once.

## Code-side status — DONE (on branches, awaiting review/merge)
- Multi-tenant foundation: host→`x-site`, per-site tokens, canonicals — **PR #17**
- Shared quoter engine + LifeRate skin + `rates:setcoverage` prefill — **PR #18**
- Per-site skins: LifeRate sage (final), TermRates steel + HealthRate green (provisional) — **PR #23**

## Backlog — the 23 templates (code-side view)
Legend: ✅ code done · 🟡 partial/exists in app · ⬜ needs design file · 🔒 real-world blocker

| # | Template | Code status | What Code needs next |
|---|---|---|---|
| 1 | Header/nav | 🟡 exists (EditorialMegaNav) | bespoke per-spoke design to reconcile |
| 2 | Footer | 🟡🔒 exists | **entity-disclosure wording** + design |
| 3 | Homepage | 🟡 per-host shell done | bespoke homepage design (have static ref) |
| 4 | Primary landing | 🟡 Life landing exists + quoter mount | bespoke design to reconcile |
| 5 | Secondary landing | ⬜ | design file |
| 6 | Quoter | ✅ engine + LifeRate skin + prefill | (Design #6 reconciles to `QUOTER-CONTRACT.md`) |
| 7 | Calculator (needs-analysis) | ⬜ | design; dispatches `rates:setcoverage {amount}` |
| 8 | Chatbot | ⬜ | design + backend decision |
| 9 | Pillar guide | 🟡 blog/article routes exist | bespoke design (have static Article ref) |
| 10 | News/article | 🟡 exists | 🔒 **byline** + design |
| 11 | Glossary | 🟡 exists | bespoke design (have static Glossary ref) |
| 12 | Author | ⬜🔒 | **byline/author facts** + design |
| 13 | Category hub | ⬜ | design |
| 14 | Data/report | ⬜ | design + data source |
| 15 | About | 🟡 exists | design + entity facts |
| 16 | Trust hub | ⬜ | design |
| 17 | Legal | 🟡🔒 exists | **exact legal/disclosure copy** |
| 18 | Contact | 🟡 exists | design |
| 19 | Signup/account | ⬜ | design + auth decision |
| 20 | Comparison/rate-table | 🟡 credit-cards exists | design + data |
| 21 | Renewal tool | ⬜ | design |
| 22 | Needs/gap picker | ⬜ | design (feeds quoter via `rates:setcoverage`) |
| 23 | City-geo | ⬜ | design + programmatic-geo content plan |

## What unblocks the most, right now (user actions)
1. **Export the design agent's finished LifeRate files** (Header/Footer/Homepage/Life-landing/Quoter) into `bespoke/liferate/` so Code reconciles the bespoke details (Code currently has only the older static Rate-family refs).
2. Send the **entity-disclosure wording** and the **author byline** → unblocks Footer, Legal, Article, Author.
3. Review/merge the stack **#17 → #18 → #23**.

## Code will, autonomously (no per-step approval)
For any template with a design file (or a solid static ref), build the shared host-themed component, provisional where the design is still coming, reconciled to contracts, verified, on a PR — and update this backlog. Un-referenced ⬜ items wait for their design file (the design agent's output, relayed by the user).

---

## Backend integration — DONE (this session, July 6 2026)

The V2 backend is now **in this repo** at `backend/` (monorepo sibling to `app/`), everything on mock data per the V2 rule. Frontend and backend talk through one seam. Nothing is deployed — local Postgres was NOT required; the mock API is pure in-memory deterministic data.

### `backend/` layout
- `packages/contracts` — the single source of truth for shapes. Both `backend/` and `app/` import `@ratefamily/contracts` (frontend via tsconfig path alias `../backend/packages/contracts/src`). Cards, quotes, leads, match/compare, plus the shared `seededHash`/`leadReference`.
- `apps/api` — NestJS mock API (`:3001`):
  - `GET /v1/cards` (+ `?category/issuer/network/limit`), `GET /v1/cards/:id` — 12 DEV-FIXTURE cards
  - `POST /v1/quotes/{life,auto,health}` — through the `CarrierAdapter` seam (MockCarrierAdapter today)
  - `POST /v1/leads` — CASL consent stored verbatim, deterministic `LR-######` reference
  - `GET /go/:cardId` — attribution redirector, subid = click id, unmonetized fallback
  - `POST /v1/match`, `GET /v1/compare?ids=`
  - `X-Tenant` middleware on every route
  - **NO bind endpoint** — test-asserted on three paths (regulated act, pre-RIBO)
  - `mock:true` + `rates_indicative_only:true` on every quote payload

### Frontend seam
- `app/src/lib/api/client.ts` — every domain component calls this, never `fetch` directly. Resolves tenant from `<html data-site>`, enforces the **`mock:true` production guard** (a payload missing the flag throws rather than renders), exposes `goHref(cardId)` for attribution-safe CTAs. Swap-to-live = `NEXT_PUBLIC_API_BASE`.
- `LifeRateQuoter` now fetches through the seam → `POST /v1/quotes/life`, and submits the advisor handoff → `POST /v1/leads`. Same deterministic numbers as the in-app engine (Humania $24.65 best for the reference profile). The in-Next `/api/mock/quote/*` routes remain as a standalone fallback.

### Verified this session
- backend: **15/15 integration tests pass** (catalog, filters, DEV-FIXTURE scheme, quotes determinism, life declines = [Co-operators, Primerica, RBC Insurance], auto partial panel, super-visa 3 ineligible, lead reference + CASL rejection, redirect attribution + unmonetized fallback, match newcomer-first, compare alignment, **no-bind assertion**)
- `tsc --noEmit` clean across the whole `app/`
- end-to-end: backend on :3001 + Next on :3400 (liferate host) — quote page renders 200, backend serves the matching quote

### Open items (unchanged priorities)
1. Card domain components (CardTile, SummaryTable, CompareGrid, MatchQuiz) against `/v1/cards` — the revenue surface is still unbuilt UI.
2. Auto/home/health quoters repointed to `/v1/quotes/{auto,health}` (life is done).
3. `[mailing address on file]` / `[BYLINE TBD]` still placeholders — CASL needs the real mailing address before any lead email ships.
4. Nothing deployed: no Vercel project, no RDS. Mock API is in-memory only.

---

## Credit-card domain components — DONE (this session, July 6 2026)

The revenue surface (Group A of the Component Build Register) is now built and bound to the backend `/v1/cards`. All compose from the existing token system (`@/styles/tokens`) — no new colours or fonts.

### New components (`app/src/components/credit-cards/`)
- **CardTile** — the atom. Binds to the backend `Card` shape. Every figure carries its `verifiedAt` date; the "Our pick for …" superlative label **always links to /credit-cards/methodology** (Bill C-59); CTA is `goHref(cardId)` (attribution redirector, never a raw affiliate URL); DEV-FIXTURE offers render a visible "Sample data · not a live offer" flag so mock data can't masquerade as verified.
- **SummaryTable** — dense sortable table view of a card list (sort by name/fee/APR/rating), provenance footer, per-row `goHref` CTA.
- **CompareGrid** — side-by-side comparison via `/v1/compare`, aligned rows, loading/error/empty states.
- **CardExplorer** — the client surface: fetches `/v1/cards` through the seam, category filter chips, tiles/table view toggle, and owns the loading (skeleton tiles) / error (retry) / empty states.

### New route
- `/credit-cards/explore` (TopRates hub host, self-canonical, `notFound()` off-host) mounts CardExplorer with the `cards` DisclaimerBlock above the fold. **Kept separate from `/credit-cards`** so the existing compliance-scrubbed SEO page is byte-untouched.

### Verified this session
- `tsc --noEmit` clean across the whole app
- end-to-end: backend on :3001 + Next on :3401 (toprates host) — `/credit-cards/explore` renders 200; `/v1/cards` serves 12 DEV-FIXTURE cards through the seam; `/v1/compare` returns 2 cards / 6 aligned rows
- production `next build` fails ONLY on `next/font` Google-Fonts fetch (container has no network to fonts.googleapis.com) — zero type/code errors; builds clean anywhere with normal network (Vercel/local)

### Still open
1. MatchQuiz UI against `/v1/match` (backend endpoint live; the quiz component isn't built).
2. WinnerBlock + MethodologyBlock (awards surface) — needs the awards endpoint wired (contract exists).
3. Auto/home/health quoters repointed to `/v1/quotes/{auto,health}` (life is done).
4. `[mailing address on file]` / `[BYLINE TBD]` still placeholders.
