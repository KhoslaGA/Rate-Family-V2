# SEO Diff — Baseline vs. After (v2 UI Uplift)

Compares `SEO_BASELINE.json` (main @ 83c9b86, 41 routes) against `SEO_AFTER.json` (feat/v2-ui-uplift HEAD, 41 routes).

## Route topology

- **Before:** 41 routes
- **After:** 41 routes
- **Removed:** none
- **Added:** none


## Per-route changes

1 route changed:

### `/`

| Field | Before | After | Note |
|---|---|---|---|
| canonical | _unset_ | / | ✅ filled missing canonical (improvement) |

## Invariant checklist

- ✅ Invariant 1 — URLs sacred. No removed routes.
- ✅ Invariant 2 — All titles preserved.
- ✅ Invariant 2 — All descriptions preserved.
- ✅ Invariant 3 — All H1s present.
- ✅ Invariant 4 — All structured-data types preserved.
- ✅ Invariant 7 — All canonicals preserved.
- ✅ Invariant 8 — Sitemap source unchanged (sitemap.ts not edited).

**Word-count and internal-link-graph invariants (5 + 6) were deferred per V1_INVENTORY.md §0. Recapture with a render pass if you want them gated before merge.**
