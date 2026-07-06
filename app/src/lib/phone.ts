/**
 * Canadian phone number normalization.
 *
 * Used by /api/life-referral and the KLC Group email handoff to clean up
 * user-supplied phone input before storage and display.
 */

/**
 * Normalize a Canadian phone number input to 10 digits.
 *
 * Returns null for inputs that can't be normalized to a plausible Canadian
 * number. Strips +1 country code, spaces, parens, dashes, dots. Rejects:
 * - All-same-digit strings (1111111111, 0000000000, etc.)
 * - Sequential placeholders (0123456789, 9876543210)
 * - 555-prefixed area exchanges (Hollywood numbers)
 * - Area codes starting 0 or 1 (NANP rule: must start 2-9)
 */
export function normalizePhone(raw: string | null | undefined): string | null {
  if (!raw || typeof raw !== 'string') return null;
  const digits = raw.replace(/\D/g, '');

  // Strip leading 1 if present (Canadian/US country code)
  const tenDigits =
    digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;

  if (tenDigits.length !== 10) return null;

  // Reject all-same-digit junk
  if (/^(\d)\1{9}$/.test(tenDigits)) return null;

  // Reject obvious sequential junk
  if (tenDigits === '0123456789' || tenDigits === '9876543210') return null;

  // Reject Hollywood / movie 555 exchange
  if (tenDigits.slice(3, 6) === '555') return null;

  // NANP area codes start 2-9
  if (!/^[2-9]/.test(tenDigits)) return null;

  // NANP central office code (positions 4-6) also must start 2-9
  if (!/^[2-9]/.test(tenDigits.slice(3, 4))) return null;

  return tenDigits;
}

/**
 * Format a normalized 10-digit phone for display.
 *   `4168675309` → `(416) 867-5309`
 */
export function formatPhone(tenDigits: string): string {
  if (tenDigits.length !== 10) return tenDigits;
  return `(${tenDigits.slice(0, 3)}) ${tenDigits.slice(3, 6)}-${tenDigits.slice(6)}`;
}
