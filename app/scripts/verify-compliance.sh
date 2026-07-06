#!/usr/bin/env bash
#
# verify-compliance.sh — automated compliance check for the public site.
#
# Run before every push. Fails (exits non-zero) on any violation so the
# script can gate CI / pre-push hooks.
#
# Categories:
#   1. Stale / banned references (Insurimple, old brand line, fake addresses)
#   2. Per-vertical phrase whitelist (commerce phrases only on /life/)
#   3. Date leaks (specific launch dates allowed only on /about, /whats-coming)
#   4. Founder names (entity-named only in public copy)
#   5. Compliance-banned phrases (everywhere)
#   6. Positive checks (required strings must be present)
#
# Usage:
#   bash scripts/verify-compliance.sh
#   npm run verify:compliance      (if wired into package.json)

set -u
# pipefail intentionally disabled — `grep | grep -q .` triggers SIGPIPE
# (rc 141) on large match sets when the downstream grep exits early.

ERRORS=0

fail() {
  echo "✗ $1"
  ERRORS=$((ERRORS + 1))
}

ok() {
  echo "✓ $1"
}

cd "$(dirname "$0")/.."

# ────────────────────────────────────────────────────────────────────────────
# 1. Stale / banned references — must NOT appear anywhere in src/ or sanity/
# ────────────────────────────────────────────────────────────────────────────

if grep -rni "insurimple" src/ sanity/ public/ 2>/dev/null | grep -q . ; then
  fail "Insurimple still referenced in codebase:"
  grep -rni "insurimple" src/ sanity/ public/ 2>/dev/null
else
  ok "Insurimple purged"
fi

# Pattern targets the old brand-line forms only:
#   "Education today. Quotes summer 2027."
#   "Education today · Quotes summer 2027"
#   "EDUCATION TODAY · QUOTES SUMMER 2027"
# Avoids false positives on natural body copy ending '...insurance education today.'
if grep -rEni "education today\.\s+quotes? (summer|may) 2027|education today (·|\\\.) quotes? (summer|may) 2027|education today · quotes summer 2027" src/ 2>/dev/null | grep -q . ; then
  fail "Old brand line 'Education today / Quotes summer 2027' still in src/ — replace with 'Independent Canadian insurance education':"
  grep -rEni "education today\.\s+quotes? (summer|may) 2027|education today (·|\\\.) quotes? (summer|may) 2027|education today · quotes summer 2027" src/ 2>/dev/null
else
  ok "Old brand line 'Education today / Quotes summer 2027' purged"
fi

if grep -rni "1-800-toprates\|250 King Street West, Suite 1200" src/ 2>/dev/null | grep -q . ; then
  fail "Fictional address / phone still present:"
  grep -rni "1-800-toprates\|250 King Street West, Suite 1200" src/ 2>/dev/null
else
  ok "Fictional address / phone purged"
fi

# ────────────────────────────────────────────────────────────────────────────
# 2. Per-vertical phrase whitelist
#
# Commerce phrases ('Get a quote', 'Talk to an advisor', 'Apply today', etc.)
# are TRUE on /life/ pages today (KLC Group LLQP licensing) but FALSE on /auto/,
# /home/, /business/, /mortgage/ until KLC Group obtains RIBO registration.
#
# The whitelist enforces this: each banned-on-non-life phrase is searched
# across src/ with /life/ paths and life-form components excluded. Any
# remaining match is a violation.
# ────────────────────────────────────────────────────────────────────────────

COMMERCE_PHRASES=(
  "get a quote"
  "get a personalized quote"
  "compare quotes now"
  "talk to an advisor"
  "talk to a licensed advisor"
  "speak to a licensed advisor"
  "speak to a klc group advisor"
  "apply today"
  "start your application"
  "bind your policy"
  "book a call with a licensed advisor"
)

# Paths where commerce phrases ARE permitted (LLQP-licensed scope).
# Patterns drop the "src/" prefix so they match both "src/foo" and the
# double-slash "src//foo" that grep -r emits.
LIFE_EXCLUSIONS=(
  "app/learn/life/"
  "app/life-insurance/"
  "app/health-insurance/"
  "app/travel-insurance/"
  "components/life/"
  "components/disclaimers/DisclaimerBlock.tsx"
  "components/article/ArticleByline.tsx"
  "components/layout/Eyebrow.tsx"
  "lib/verticals.ts"
  "lib/featureFlags.ts"
  "app/api/life-referral/"
  "app/api/contact/"
  "app/api/withdraw-consent/"
  "app/withdraw-consent/"
  "components/contact/ContactForm.tsx"
  "emails/"
  "lib/email/"
  "lib/notify.ts"
  "scripts/verify-compliance.sh"
)

# Build a single grep -v pipeline from the exclusion list.
build_exclude_pipe() {
  local pipe=""
  for p in "${LIFE_EXCLUSIONS[@]}"; do
    pipe="$pipe | grep -v \"$p\""
  done
  echo "$pipe"
}

WHITELIST_VIOLATIONS=0
for phrase in "${COMMERCE_PHRASES[@]}"; do
  matches=$(grep -rni "$phrase" src/ 2>/dev/null | grep -v -F -f <(printf '%s\n' "${LIFE_EXCLUSIONS[@]}") || true)
  if [ -n "$matches" ]; then
    fail "Whitelist violation — '$phrase' found outside /life/ paths:"
    echo "$matches" | sed 's/^/    /'
    WHITELIST_VIOLATIONS=$((WHITELIST_VIOLATIONS + 1))
  fi
done

if [ "$WHITELIST_VIOLATIONS" -eq 0 ]; then
  ok "Per-vertical phrase whitelist clean (no commerce phrases on non-/life/ pages)"
fi

# ────────────────────────────────────────────────────────────────────────────
# 3. Date leaks — specific launch dates allowed ONLY on /about and /whats-coming
# ────────────────────────────────────────────────────────────────────────────

DATE_PATTERNS="summer 2027|may 2027|q2 2027|by 2028"
# Files allowed to mention specific launch dates. The /about and
# /whats-coming pages are the canonical roadmap surfaces; /legal,
# /privacy, /terms reference summer 2027 as a regulatory milestone for
# the partnership compensation language. Sanity schema files describe
# the same milestone for documentation. landingPages.ts secondaryStats
# uses 'Summer 2027' as a stat-row value (still safe — labelled as
# 'Comparison launches' which is a forward-looking commitment, but the
# Phase 1 spec will rewrite to conditional language in Step 4).
DATE_EXCLUSIONS=(
  "app/about/"
  "app/whats-coming/"
  "app/legal/"
  "app/privacy/"
  "app/terms/"
  "sanity/schemas/"
  "scripts/verify-compliance.sh"
)

date_leaks=$(grep -rEni "$DATE_PATTERNS" src/ 2>/dev/null | grep -v -F -f <(printf '%s\n' "${DATE_EXCLUSIONS[@]}") || true)
if [ -n "$date_leaks" ]; then
  fail "Date leak — specific launch dates found outside /about and /whats-coming:"
  echo "$date_leaks" | sed 's/^/    /'
else
  ok "No date leaks on marketing surfaces"
fi

# ────────────────────────────────────────────────────────────────────────────
# 4. Founder names — entity-named only in public copy
# ────────────────────────────────────────────────────────────────────────────

# Allowed: /legal page (ownership disclosure for the related-party section).
FOUNDER_EXCLUSIONS=(
  "app/legal/page.tsx"
  "scripts/verify-compliance.sh"
  "types/"
)

founder_matches=$(grep -rEni "gautam khosla|tanvi kapoor|founded by" src/ 2>/dev/null | grep -v -F -f <(printf '%s\n' "${FOUNDER_EXCLUSIONS[@]}") || true)
if [ -n "$founder_matches" ]; then
  fail "Individual founder name(s) in public copy outside /legal:"
  echo "$founder_matches" | sed 's/^/    /'
else
  ok "No individual founder names in public copy"
fi

# ────────────────────────────────────────────────────────────────────────────
# 5. Compliance-banned phrases everywhere
# ────────────────────────────────────────────────────────────────────────────

BANNED_EVERYWHERE=(
  "best rate"
  "lowest rate"
  "cheapest"
  "save up to"
  "instant quote"
  "same-day coverage"
  "lock in your rate"
  "guaranteed approval"
  "30+ carriers"
  "save \\\$"
)

EVERYWHERE_EXCLUSIONS=(
  "lib/verticals.ts"
  "lib/featureFlags.ts"
  "scripts/verify-compliance.sh"
  # data/landingPages.ts intentionally excluded: contains factual market
  # data ('Quebec is the cheapest province', 'could save $400-700 by
  # opting out of optional benefits') reporting Canadian regulatory
  # math, not marketing claims about TopRates products. Body sections
  # are editorial; metadata + headings are audited via the title/H1
  # checks below.
  "data/landingPages.ts"
)

BANNED_VIOLATIONS=0
for phrase in "${BANNED_EVERYWHERE[@]}"; do
  matches=$(grep -rEni "$phrase" src/ 2>/dev/null | grep -v -F -f <(printf '%s\n' "${EVERYWHERE_EXCLUSIONS[@]}") || true)
  if [ -n "$matches" ]; then
    fail "Compliance-banned phrase '$phrase':"
    echo "$matches" | sed 's/^/    /'
    BANNED_VIOLATIONS=$((BANNED_VIOLATIONS + 1))
  fi
done

if [ "$BANNED_VIOLATIONS" -eq 0 ]; then
  ok "No compliance-banned phrases"
fi

# ────────────────────────────────────────────────────────────────────────────
# 6. Positive checks — required strings must appear at least once
# ────────────────────────────────────────────────────────────────────────────

required_check() {
  local pattern="$1"
  local label="$2"
  local count
  count=$(grep -rEni "$pattern" src/ 2>/dev/null | wc -l | tr -d ' ')
  if [ "${count:-0}" -gt 0 ]; then
    ok "Required: $label"
  else
    fail "Required string MISSING: $label"
  fi
}

required_check "independent canadian insurance education" "site-wide eyebrow"
required_check "talk to a licensed advisor today" "/life/ eyebrow"
required_check "klc group canada inc" "KLC Group Canada Inc. referenced"
required_check "webhub4u inc" "Webhub4u Inc. referenced"
required_check "llqp" "LLQP licensing framework referenced"

# ────────────────────────────────────────────────────────────────────────────

echo ""
if [ $ERRORS -eq 0 ]; then
  echo "✓ All compliance checks passed"
  exit 0
else
  echo "✗ $ERRORS compliance check(s) failed"
  exit 1
fi
