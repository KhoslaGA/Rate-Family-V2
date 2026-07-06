# PostalCodeHero — Implementation Decisions Needed

> Spec received: `POSTAL_CODE_HERO_SPEC.md` v1.1
> Repo: `web` (toprates.ca)
> Date: 2026-05-07

Three significant mismatches between the spec and the actual repo. Need decisions before writing code.

---

## Mismatch 1 — URL structure

**Spec assumes:** `/insurance/auto/ontario/[city]`, `/insurance/home/ontario/[city]`, etc.

**Repo actually has:** `/auto-insurance/[city-slug]`, `/home-insurance/_client/...`. The 17+ city pages are already at `/auto-insurance/alberta`, `/auto-insurance/quebec`, `/auto-insurance/atlantic`, etc.

**Question:** Build to spec (and add redirects from old URLs)? Or build PostalCodeHero against the existing `/auto-insurance/[city]` routes?

---

## Mismatch 2 — City data source

**Spec assumes:** A NestJS API at `/content/cities?fsa=L6P` with `fsas: string[]` array on each city document.

**Repo actually has:** Sanity CMS only. No separate API repo. City schema in `sanity/schemas/` likely does not have an `fsas` field yet.

**Question:** Add `fsas` array to the Sanity city schema and query Sanity directly from the component? Or wait for the NestJS API repo to come online?

---

## Mismatch 3 — OCR cleanup is bigger than spec implies

**Spec §11.5 mentions:** generic hero JSX cleanup.

**Reality — pink-slip / "snap your" / "deleted within 15 min" copy is in 6 files:**

| File | What's there |
|---|---|
| `src/app/auto-insurance/page.tsx` | "pink slip" in metadata keywords |
| `src/app/auto-insurance/_client/AutoInsuranceClient.tsx` | "Snap your pink slip" step in onboarding flow |
| `src/components/home/ProductSelector.tsx` | 3 instances: "Snap your pink slip to skip the typing", "Snap pink slip" pill, "deleted within 15 min" |
| `src/components/home/ProductSelector.tsx` (home variant) | "Snap your declaration page", "Snap dec page" pill |
| `src/components/home/MeetBo.tsx` | "Pink slip, dec page, policy PDF — snap a photo and Bo extracts the numbers" |
| `src/components/layout/navData.ts` | Two whole nav items: **"Snap Your Pink Slip"** and **"Snap Your Dec Page"** with `Auto-reads your policy` descriptions |
| `src/app/whats-coming/page.tsx` | "Pink-slip OCR research underway" — acceptable per spec (roadmap context) |

This is a meaningful copy + IA change on its own. The two nav items in particular (`navData.ts`) appear in the MegaNav across the entire site.

---

## Question 1 — How do you want to split this?

**A) OCR cleanup first (today), PostalCodeHero next**
- PR A now: strip all pink-slip / OCR / dec-page / "deleted within 15 min" copy from the 6 files + remove the two nav items. CLAUDE.md §5 compliance. ~30 min.
- PR B for PostalCodeHero with full spec once you've decided on routes/CMS.

**B) Both in one PR, use existing routes + Sanity**
- Build PostalCodeHero against the actual `/auto-insurance/[city]` URLs.
- Query Sanity directly, add `fsas` field to city schema.
- Skip the tenant/commercial new pages.
- Bundle the OCR cleanup.
- Larger PR, more decisions invented along the way.

**C) Cleanup + minimal PostalCodeHero (no FSA lookup)**
- Strip OCR copy AND drop in PostalCodeHero standard variant routing only to product pillars (no FSA → city resolution yet — that needs Sanity schema work).
- Component lives, ready to wire up city lookup in a follow-up.
- ~2hr.

---

## Question 2 — Where should PostalCodeHero render today?

(Multi-select)

- [ ] **Homepage** (replace `ProductSelector`) — biggest copy-cleanup win since ProductSelector has the most pink-slip messaging
- [ ] **`/auto-insurance` landing** — replace auto landing hero with `product=auto`
- [ ] **`/home-insurance` landing** — replace home landing hero with `product=home`
- [ ] **Compact variant on city pages (later)** — defer to follow-up

---

## Question 3 — Tenant + commercial pages

Spec says these are NEW pages (`/insurance/tenant/ontario`, `/insurance/commercial/ontario`). Neither exists in the repo.

- [ ] Scaffold them now (placeholder content + hero)
- [ ] Defer until content is ready
- [ ] Skip commercial entirely until June 2026 marketplace launch

---

## Question 4 — Sanity schema change for FSA lookup

To support FSA → city resolution per spec §5.2, the city schema needs a `fsas: string[]` field, and every city document needs to be tagged with its FSAs (e.g. Mississauga = `['L4T', 'L4V', 'L4W', 'L4X', 'L4Y', 'L4Z', 'L5A', 'L5B', ...]`).

- [ ] You'll add the field + tag the cities in Sanity Studio yourself
- [ ] I should add the schema field; you'll backfill the FSAs
- [ ] Defer FSA lookup entirely; route everyone to province pillar for now

---

## Recommendation (mine)

**Option A** — ship OCR cleanup today as a separate PR. It's:
- Clear-cut compliance (CLAUDE.md §5 ban)
- ~30 min, low-risk
- Independent of any PostalCodeHero decisions
- Removes the most embarrassing claims on the live site
- Won't be undone by PostalCodeHero work

Then a follow-up PR for PostalCodeHero once Q2/Q3/Q4 are answered.

The risk of bundling everything: PostalCodeHero needs Sanity schema changes + FSA backfill (manual data work for ~25 cities) + URL/IA decisions. Those can stall the cleanup.
