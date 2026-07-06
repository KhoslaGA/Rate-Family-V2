#!/usr/bin/env bash
# TopRates.ca compliance verification.
# Run from repo root: bash scripts/check-compliance.sh
# Exits non-zero if any check fails so this is CI-friendly.

set -e

echo "Running TopRates.ca compliance verification..."
echo ""

FAIL=0

check() {
  local label="$1"
  local pattern="$2"
  local path="${3:-app/src}"
  local results
  results=$(grep -rni --include="*.tsx" --include="*.ts" --include="*.md" -E "$pattern" "$path" 2>/dev/null || true)
  if [ -n "$results" ]; then
    echo "FAIL: $label"
    echo "$results" | head -8
    echo ""
    FAIL=1
  else
    echo "PASS: $label"
  fi
}

# Entity / licensure claims
check "No 'Insurimple' references"                          "Insurimple"
check "No false 'RIBO[ -]licensed' claims for Webhub4u"     "RIBO[ -]licensed[^\"]{0,80}(Webhub4u|TopRates)"
check "No 'licensed in all' claims"                         "licensed in all"
check "No 'we are licensed' claims for the operator"        "(TopRates|Webhub4u) (is|are) licensed"

# Marketing superlatives banned by Competition Act / Bill C-59
check "No 'best rate' superlatives"                         "best rate"
check "No 'lowest rate' superlatives"                       "lowest rate"
check "No 'save \$X' promotional claims"                    "save \\\$[0-9]"
check "No 'save up to' claims"                              "save up to"
check "No 'guaranteed approval' claims"                     "guaranteed approval"
check "No 'compare and save' claims"                        "compare and save"

# Personal names (entity-level disclosure only)
check "No personal name 'Tanvi'"                            "Tanvi"
check "No personal name 'Gautam'"                           "Gautam"

# Fictional contact info from old privacy/about templates
check "No fictional '1-800-TOPRATES' phone"                 "1-800-TOPRATES"
check "No fictional '250 King Street West' address"         "250 King Street West"

echo ""
if [ "$FAIL" -eq 0 ]; then
  echo "All compliance checks PASSED"
  exit 0
else
  echo "Some compliance checks FAILED — review and fix before commit"
  exit 1
fi
