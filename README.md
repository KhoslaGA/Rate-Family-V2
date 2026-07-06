# Rate Family V2

Multi-tenant insurance & finance comparison platform — **frontend + backend in one repo**. Everything runs on **mock data** (the V2 rule): deterministic, in-memory, no database required. Same shapes the real integrations will use, so going live is a base-URL / adapter swap, never a refactor.

Four sites, one codebase, host-themed via `[data-site]`: **TopRates.ca** (hub), **LifeRate.ca**, **TermRates.ca**, **HealthRate.ca**.

## Layout

```
rate-family-v2/
├── app/                      Next.js 15 frontend (the four themed sites)
│   └── src/lib/api/client.ts the ONE seam: every component calls this,
│                             never fetch() directly; enforces mock:true
├── backend/                  NestJS mock API (:3001)
│   ├── packages/contracts/   shared types — the single source of truth,
│   │                         imported by BOTH app and backend
│   └── apps/api/             /v1/cards, /v1/quotes/*, /v1/leads, /go/:id,
│                             /v1/match, /v1/compare  (all mock)
├── bespoke/                  design-agent HTML exports (pre-port reference)
├── COORDINATION.md           design↔code backlog + integration status
├── QUOTER-CONTRACT.md        the quoter interface both sides honor
└── DESIGN-TOKEN-CONTRACT.md  token/theming contract
```

## Run it (both halves, one command)

```bash
npm run install:all              # root + backend workspaces + app
cp .env.example app/.env.local   # add your Sanity project id/dataset
npm run dev                      # backend :3001 + frontend :3000, together
```

Or separately:

```bash
npm run dev:backend      # NestJS mock API → http://localhost:3001
npm run dev:app          # Next app → http://localhost:3000 (points at :3001)
```

Switch which site renders locally:

```bash
cd app && SITE_OVERRIDE=liferate NEXT_PUBLIC_API_BASE=http://localhost:3001 npm run dev
```

## Verify

```bash
npm run typecheck        # backend build + app tsc --noEmit
npm run test             # backend integration suite (15 tests)
```

## How the two halves connect

The frontend never calls the backend directly. It goes through `app/src/lib/api/client.ts`, which:

- resolves the **tenant** from `<html data-site>` → `X-Tenant`
- enforces the **`mock:true` guard** — in production a payload missing the flag throws instead of rendering
- exposes `goHref(cardId)` so CTAs hit the attribution redirector, never a raw affiliate URL

Backend serves the same deterministic mock data the frontend engine produces (seeded FNV-1a, never `Math.random`). Swap-to-live is one env var: `NEXT_PUBLIC_API_BASE`.

## Live vs. mock

- **All quote/card data is mock** — `MockCarrierAdapter` + a 12-card DEV-FIXTURE catalog. Every offer's `sourceUrl` is a `DEV-FIXTURE://` URI so it can't pass as a verified real offer.
- **No bind endpoint exists** — binding is a regulated act; pre-RIBO the platform stops at the lead. Test-asserted.
- **LifeRate quoter fully wired** end-to-end through the seam. Auto/health quoters + credit-card domain components are next (see `COORDINATION.md`).

## Sandbox note

A bare `next build` in a network-restricted environment stops on three **external** things that are fine on your machine / Vercel: Google Fonts fetching, Sanity env vars, and Sanity page-data collection. Not code errors — the app compiles (`✓ Compiled successfully`) once those are reachable.

## Corporate

- **Webhub4u Inc.** — technology publisher; operates the platform.
- **KLC Group Canada Inc.** — FSRA-licensed brokerage; life referrals today, RIBO P&C in progress.

Proprietary. All rights reserved.
