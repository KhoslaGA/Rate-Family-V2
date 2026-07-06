export * from './catalog';
export * from './quotes';
export * from './leads';

/**
 * The one randomness source across the whole platform. FNV-1a, seeded,
 * deterministic. Never Math.random — mock data must be identical across
 * processes, requests, and CI runs (V2 rule).
 */
export function seededHash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}
export function seededUnit(input: string): number {
  return seededHash(input) / 0xffffffff;
}
export function seededInt(input: string, min: number, max: number): number {
  return min + (seededHash(input) % (max - min + 1));
}
export function leadReference(parts: string[]): string {
  return 'LR-' + String(seededHash(parts.join('|')) % 1_000_000).padStart(6, '0');
}
