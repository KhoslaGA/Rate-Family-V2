const CANADIAN_POSTAL_REGEX = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const ONTARIO_PREFIXES = ['K', 'L', 'M', 'N', 'P'];

export type PostalValidation =
  | { valid: false; error: 'empty' | 'format'; ontario: false; fsa: null; normalized: null }
  | { valid: true; ontario: boolean; fsa: string; normalized: string };

export function validatePostalCode(input: string): PostalValidation {
  const trimmed = input.trim().toUpperCase();
  if (!trimmed) return { valid: false, error: 'empty', ontario: false, fsa: null, normalized: null };
  if (!CANADIAN_POSTAL_REGEX.test(trimmed)) {
    return { valid: false, error: 'format', ontario: false, fsa: null, normalized: null };
  }
  const compact = trimmed.replace(/[\s-]/g, '');
  const fsa = compact.slice(0, 3);
  return {
    valid: true,
    ontario: ONTARIO_PREFIXES.includes(fsa[0]),
    fsa,
    normalized: `${fsa} ${compact.slice(3)}`,
  };
}
