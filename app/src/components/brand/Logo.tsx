interface BrandLogoProps {
  height?: number;
  /** dark = white text + gold dot (for navy backgrounds). default light = ink text + teal dot. */
  variant?: 'light' | 'dark';
}

// Editorial-palette mark — matches editorialTokens.ts and the new
// homepage redesign (navy + gold, no teal). Updated 2026-05.
const NAVY = '#0B2545';
const NAVY_MID = '#13315C';
const GOLD = '#E0A227';
const INK = '#1F2937';

export function BrandLogo({ height = 48, variant = 'light' }: BrandLogoProps) {
  const width = height * 6;
  const textColor = variant === 'dark' ? '#FFFFFF' : INK;
  const dotColor = GOLD;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 100"
      role="img"
      aria-label="TopRates.ca"
      style={{ display: 'block' }}
    >
      <rect x="14" y="18" width="13" height="70" rx="2" fill={NAVY} />
      <rect x="30" y="32" width="13" height="56" rx="2" fill={NAVY} />
      <rect x="46" y="48" width="13" height="40" rx="2" fill={NAVY_MID} />
      <rect x="62" y="62" width="13" height="26" rx="2" fill={GOLD} />
      <path d="M62 8 L75 8 L75 42 L88 42 L68.5 64 L49 42 L62 42 Z" fill={GOLD} />
      <text
        x="118"
        y="74"
        fontFamily="var(--font-fraunces), 'Fraunces', Georgia, serif"
        fontSize="72"
        fontWeight="600"
        letterSpacing="-2"
        fill={textColor}
      >
        toprates
        <tspan fill={dotColor} fontWeight="700">.ca</tspan>
      </text>
    </svg>
  );
}
