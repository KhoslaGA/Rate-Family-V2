# Ontario Auto Insurance Reform 2026 — Research Worksheet (Audit Trail)

> **Purpose.** Primary-source verification record for the pillar at
> `/blog/ontario-auto-reform-2026-guide`. Filled out as part of audit Task 6
> remediation.
>
> **Pillar URL:** `/blog/ontario-auto-reform-2026-guide`
> **Pillar commit:** `b1169c0` (initial) + DCPD addition follow-up
> **Researcher:** Claude Code (Opus 4.7)
> **Research date:** 2026-05-14
> **Status:** Complete — pending compliance review

---

## 0. Methodology and limitations

The audit explicitly required primary-source verification. Two practical
limitations to be honest about:

1. **FSRA's own web pages returned HTTP 403 to my direct fetches.** I
   attempted to fetch the canonical FSRA reform hub and the Optionality Q&A
   page directly; both refused the request. My citations to FSRA below are
   based on:
   - Search-engine cached extracts of those FSRA pages (Google Search results
     consistently returned the same text from FSRA's pages, multiple times,
     across multiple search queries)
   - Cross-corroboration with at least four independent third-party sources
     (RIBO, IBAO, IBC member carriers, multiple law firm bulletins) all
     citing the same facts
2. **The RIBO industry FAQ PDF** was downloaded but the binary PDF could not
   be parsed by WebFetch. Its contents are referenced via secondary sources
   that cite it.

A reasonable next step before the pillar is merged to `main` is for a human
editor to open the FSRA pages directly in a browser and verify the specific
quotes used in the pillar. The facts below are multiply corroborated across
authoritative sources, but the primary-source-fetch trail has the gap noted
above.

Sources where I had successful primary or near-primary access:

- The Ratehub.ca explainer for DCPD optionality (directly fetched, verified
  the January 1, 2024 date and OPCF 49 endorsement)
- Search results citing FSRA's own text consistently across multiple queries
- Law firm and broker bulletins (Bergeron Clifford, Flaherty McCarthy, Beard
  Winter, Rogers Partners, UL Lawyers, Strigberger) all consistent on the
  same facts

---

## 1. Legislative citation

| Field | Answer | Source URL | Verification status |
|---|---|---|---|
| Legislative vehicle type | Ontario Regulation | https://www.ontario.ca/laws/regulation/r24383 | Citation appears in 10+ independent sources |
| Citation | **O. Reg. 383/24** | https://www.ontario.ca/laws/regulation/r24383 | Multiply corroborated (FSRA cached, RIBO, IBAO, law firms) |
| What it amends | Insurance Act and Statutory Accident Benefits Schedule (O. Reg. 34/10) | https://www.ontario.ca/laws/regulation/100034 | Confirmed by RIBO, FSRA cached, multiple law firms |
| Implementing regulator | Financial Services Regulatory Authority of Ontario (FSRA) | https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026 | FSRA cached + corroborated |

**Audit comparison:** The audit suggested "O. Reg. 383/24" — this is confirmed.
The original `/reform-2026` page invented "Bill 146" — confirmed false.

---

## 2. Effective dates

| Field | Answer | Source URL | Notes |
|---|---|---|---|
| Main effective date | **July 1, 2026** | FSRA hub (cached) | Universally cited |
| Applies to | Policies with effective dates on or after July 1, 2026 | FSRA hub (cached) | |
| Existing policies treatment | Renew with same coverage and limits as expiring policy UNLESS customer agrees in writing to changes | FSRA Optionality Q&A (cached) | Corroborated by multiple insurer reform pages |
| Coverage scope change date | July 1, 2026 — applies regardless of renewal date | FSRA hub (cached) | The exception to the "renews unchanged" rule |
| OPCF 47R requirement on pre-July-2026 policies | Not required immediately; added at renewal or mid-term change | FSRA Optionality Q&A (cached) | |

---

## 3. What changes

| # | Reform | What's changing | Source | Notes |
|---|---|---|---|---|
| 1 | Mandatory benefits shrink | Only medical, rehabilitation, and attendant care remain mandatory | FSRA hub (cached); IBAO; RIBO; Strigberger | Universally cited |
| 2 | Optional benefit menu introduced | IRB, non-earner, caregiver, housekeeping/home maintenance, dependent care, death, funeral, visitor expenses, lost educational expenses, damage to personal items become optional | FSRA hub (cached); Federated Insurance; multiple law firms | |
| 3 | First-payer change | Auto insurance becomes first payer for medical/rehab (except medication), replacing private health plans as first payer | FSRA hub (cached) | Corroborated by multiple insurer reform pages |
| 4 | New OPCF 47R endorsement | Replaces OPCF 47. Documents which optional benefits the customer elects or declines | FSRA Optionality Q&A (cached); Strigberger | |
| 5 | Coverage scope narrows for optional benefits | Newly optional benefits cover named insured + spouse + dependants + named drivers (narrower than current "any insured person") | FSRA hub (cached) | Applies July 1, 2026 regardless of renewal date |

---

## 4. Dollar figures

Per the discipline rule "cite less rather than more," the pillar includes only
dollar figures with strong primary sourcing. Most pre/post-reform dollar
comparisons were excluded because the verified primary source path was not
sufficient.

| Figure | Pre-reform | Post-reform | Source | Status |
|---|---|---|---|---|
| Attendant care monthly cap (non-catastrophic) | $3,000/month for up to 5 years | $3,000/month (UNCHANGED — cap not modified by reform) | SABS s.19 (O. Reg. 34/10); FSRA Attendant Care Hourly Rate Guideline | Verified in Task 2 research |
| Attendant care monthly cap (catastrophic) | $6,000/month for life | $6,000/month (UNCHANGED) | SABS s.19 (O. Reg. 34/10); multiple sources | Verified in Task 2 research |
| Income replacement weekly max | Not in pillar — excluded for sourcing discipline | n/a | — | Excluded |
| Med/Rehab pool max non-CAT | Not in pillar — excluded for sourcing discipline | n/a | — | Excluded |
| Med/Rehab pool max CAT | Not in pillar — excluded for sourcing discipline | n/a | — | Excluded |
| Per-driver premium savings | Not in pillar — projection, not regulated outcome | n/a | — | Excluded by editorial policy |

**Rule applied:** Any dollar figure in the pillar must be cited inline to a
primary source. The pillar explicitly declines to forecast premium savings
because those are projections, not regulated outcomes.

---

## 5. Who's affected — included in pillar?

The audit asked about specific driver-category analysis. The pillar takes a
conservative approach: it does not make category-specific impact claims
because those depend on individual choices (which optional benefits each
person keeps or declines) and on carrier rate filings that vary by carrier.

The pillar instead frames the impact in terms of:

- Existing policy holders: nothing changes automatically; you receive an
  OPCF 47R at renewal
- All Ontario drivers: the newly optional benefits cover a narrower set of
  people (named insured + spouse + dependants + named drivers) regardless of
  whether you take any action

This is verifiable from FSRA's hub. Category-specific impact claims would
require carrier rate filings that are not yet published in usable form.

---

## 6. Optional vs. mandatory coverage — included in pillar?

Yes — this is the spine of the pillar. The list of what's mandatory and
what's optional is sourced inline to FSRA's hub and RIBO's resource page.

The pillar does not list every OPCF endorsement potentially affected. It
names only the OPCF 47R (the new endorsement directly created by the
reform). This is a conservative scope choice consistent with the discipline.

---

## 7. Implementation details for consumers — included in pillar?

Yes. The pillar's "What you can expect to see at your next renewal" section
covers:

- Existing coverage carries forward automatically
- OPCF 47R appears on renewal documents
- Coverage scope change applies regardless of renewal date

Sourced to FSRA Optionality Q&A and the FSRA hub.

---

## 8. What's NOT in the reform — section in pillar

This is the high-value misconception-correction section. Includes:

1. **Not a no-fault repeal** — Ontario's no-fault framework continues
2. **Not a DCPD change** — DCPD optionality was a separate, earlier reform
   (effective January 1, 2024, via OPCF 49). This is the most important
   correction because the original `/reform-2026` page fabricated DCPD claims.
   Source: Ratehub.ca explainer (directly fetched and verified)
3. **Not a minimum liability change** — minimum third-party liability is not
   modified by O. Reg. 383/24
4. **Attendant care cap unchanged** — SABS s.19 cap not touched by the reform
5. **Ontario-specific** — does not apply to other provinces

---

## 9. Article structure — final

- Length: ~1,400 words (within 1,200-1,800 target)
- Primary keyword: "Ontario auto insurance reform 2026"
- Secondary keywords: "O. Reg. 383/24", "SABS reform 2026", "OPCF 47R"
- Tone: explanatory, neutral, regulator-aware
- Persona: any Ontario driver approaching a renewal in mid-to-late 2026

Structure (matches the worksheet's suggested structure):

1. Eyebrow + H1 + lead paragraph
2. "At a glance" bullet card (TL;DR equivalent)
3. "What the reform actually does"
4. "When does it take effect"
5. "OPCF 47R endorsement"
6. "First payer change"
7. "What you can expect at renewal"
8. "What we won't tell you" (premium-forecast refusal)
9. "What is NOT in the reform" (misconception correction)
10. "Sources" + "How we wrote this" methodology footer
11. CTA to ContactForm (defaultProduct=auto-insurance)

---

## 10. Source list (canonical)

These are the URLs cited inline in the pillar:

| Source | URL | Verification path |
|---|---|---|
| O. Reg. 383/24 | https://www.ontario.ca/laws/regulation/r24383 | ontario.ca/laws — citation confirmed across many sources |
| SABS (O. Reg. 34/10) | https://www.ontario.ca/laws/regulation/100034 | ontario.ca/laws — used in Task 2 for s.19 attendant care |
| FSRA reform hub | https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026 | Search-cached; corroborated across 10+ sources |
| FSRA Optionality Q&A | https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026/fsra-auto-reform-accident-benefits-optionality-qa-insurers | Search-cached; corroborated |
| RIBO reform resource | https://www.ribo.com/licensee-resources/sabs-changes/ | Listed in RIBO search results |
| IBAO Ontario auto | https://ibao.org/ontario-auto | Directly fetched and verified |

---

## 11. Open items for compliance review

Before merging the pillar branch to `main`:

1. **Human verification of FSRA quotes.** Open the two FSRA URLs above in a
   browser and confirm that the specific factual claims attributed to FSRA in
   the pillar appear on those pages. The 403 fetch limitation means I could
   not do this directly.
2. **RIBO industry FAQ PDF.** The December 2025 RIBO FAQ PDF could not be
   parsed by my tooling. If a compliance reviewer has access to the PDF,
   verify that nothing in the pillar contradicts RIBO's guidance.
3. **Carrier rate filing context.** The pillar makes no premium-savings
   claims. If compliance wants directional commentary (e.g., "industry
   estimates range from $X to $Y"), the secondary-source range from
   Canadian Underwriter ($75-$100/yr typical savings if opting out of
   optional benefits) is available but was explicitly excluded from the
   pillar per the "cite less rather than more" discipline.

---

## 12. Final pre-publish checklist

- [x] Every regulatory fact in the pillar has an inline source link
- [x] Dollar figures: only those with verified primary sources appear
- [x] Legislative citation verified (O. Reg. 383/24)
- [x] "What's NOT in the reform" section present, includes DCPD distinction
- [x] Methodology footer present, listing all sources consulted
- [x] CTA to ContactForm (defaultProduct=auto-insurance) at end
- [x] noindex from prior /reform-2026 stub no longer needed (301 redirect handles it)
- [x] Sitemap updated (new URL added; /reform-2026 already absent)
- [x] next.config.mjs has 301 redirect /reform-2026 → /blog/ontario-auto-reform-2026-guide
- [x] Compliance grep passes (`bash scripts/check-compliance.sh`)
- [x] TypeScript typecheck passes (`npx tsc --noEmit`)
- [ ] Human verification of FSRA-attributed quotes (Open item 1 above)
- [ ] Sign-off from compliance reviewer before merge to `main`

---

## 13. If a future error is found

If anyone (regulator, competitor, journalist, internal reviewer) finds a
factual error in the pillar:

1. The error is fixable as a follow-up commit on the same branch path
2. This worksheet documents what was verified at publish time
3. The pillar's "How we wrote this" footer invites correction emails to
   editorial@toprates.ca

The goal of this worksheet is not to prove the pillar is error-free. The
goal is to make the verification process auditable — to show what was
checked, what wasn't, and why.
