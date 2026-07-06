export type IconName =
  | 'home' | 'card' | 'car' | 'shield' | 'leaf' | 'plane'
  | 'piggy' | 'chart' | 'check'
  | 'arrow' | 'arrowDown' | 'arrowUp' | 'arrowLeft' | 'arrowRight'
  | 'lock' | 'clock' | 'bell' | 'star' | 'sparkle'
  | 'menu' | 'search' | 'globe';

export const ARROW_GOLD = '#F2B441';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function Icon({
  name,
  size = 16,
  color = 'currentColor',
  strokeWidth = 1.8,
}: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'home':
      return <svg {...common}><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2z" /></svg>;
    case 'card':
      return <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h3" /></svg>;
    case 'car':
      return (
        <svg {...common}>
          <path d="M5 17h14M6 17v-3l2-5h8l2 5v3M8 17v2M16 17v2" />
          <circle cx="8" cy="14" r="0.5" fill={color} />
          <circle cx="16" cy="14" r="0.5" fill={color} />
        </svg>
      );
    case 'shield':
      return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /></svg>;
    case 'leaf':
      return <svg {...common}><path d="M5 19c0-8 6-14 16-14 0 10-6 16-14 16-1.5 0-2-1-2-2zM5 19l8-8" /></svg>;
    case 'plane':
      return <svg {...common}><path d="M3 13l7-2 4-7 2 1-2 7 6-2 1 2-6 3-2 7-2-1 1-6-7 2z" /></svg>;
    case 'piggy':
      return (
        <svg {...common}>
          <path d="M4 14c0-4 3.5-6 8-6 1 0 2 .1 3 .3L17 6l2 2-1 2c1 1 2 2.5 2 4v3h-2l-1 2h-2l-1-2H9l-1 2H6l-1-2H4z" />
          <circle cx="8" cy="13" r="0.5" fill={color} />
        </svg>
      );
    case 'chart':
      return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>;
    case 'check':
      return <svg {...common}><path d="M5 12l4 4 10-10" /></svg>;
    case 'arrow':
    case 'arrowRight':
    case 'arrowDown':
    case 'arrowUp':
    case 'arrowLeft': {
      const rotation =
        name === 'arrowDown' ? 0
        : name === 'arrowLeft' ? 90
        : name === 'arrowUp' ? 180
        : 270; // arrow + arrowRight
      return (
        <svg {...common} fill={color} stroke="none">
          <path
            d="M9.7 2 L14.4 2 L14.4 14.2 L19 14.2 L12 22.2 L5 14.2 L9.7 14.2 Z"
            transform={`rotate(${rotation} 12 12)`}
          />
        </svg>
      );
    }
    case 'lock':
      return <svg {...common}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case 'bell':
      return <svg {...common}><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0" /></svg>;
    case 'star':
      return <svg {...common} fill={color} stroke="none"><path d="M12 2l3 7h7l-5.5 4.5 2 7.5L12 16.5 5.5 21l2-7.5L2 9h7z" /></svg>;
    case 'sparkle':
      return <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" /></svg>;
    case 'menu':
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case 'search':
      return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>;
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
        </svg>
      );
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>;
  }
}
