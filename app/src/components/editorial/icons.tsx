/* Inline SVG icons matching the editorial design system. Stroke-based,
   1.8-2.2 weight, currentColor-driven. Plain JSX so they work in both
   server and client components. */

import React from 'react';

type P = { size?: number; color?: string; sw?: number; style?: React.CSSProperties };

const svgProps = (size: number, color: string, sw: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24' as const,
  fill: 'none',
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const ArrowRight = ({ size = 18, color = 'currentColor', sw = 2.5, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ChevronDown = ({ size = 14, color = 'currentColor', sw = 2.5, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Shield = ({ size = 18, color = 'currentColor', sw = 2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const CheckCircle = ({ size = 18, color = 'currentColor', sw = 2.2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Globe = ({ size = 18, color = 'currentColor', sw = 2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
  </svg>
);

export const Users = ({ size = 18, color = 'currentColor', sw = 2.2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const Book = ({ size = 18, color = 'currentColor', sw = 2.2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const Bars = ({ size = 18, color = 'currentColor', sw = 2.2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export const Lock = ({ size = 18, color = 'currentColor', sw = 2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const HelpCircle = ({ size = 18, color = 'currentColor', sw = 2.2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const DollarSign = ({ size = 18, color = 'currentColor', sw = 2.2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const Star = ({ size = 18, color = 'currentColor', sw = 2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  </svg>
);

export const Sparkle = ({ size = 18, color = 'currentColor', sw = 2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export const HomeIcon = ({ size = 18, color = 'currentColor', sw = 1.6, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M3 11l9-8 9 8M5 9v11h14V9" />
  </svg>
);

export const Apartment = ({ size = 18, color = 'currentColor', sw = 1.6, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 21v-6h6v6M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01" />
  </svg>
);

export const Briefcase = ({ size = 18, color = 'currentColor', sw = 1.6, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const Car = ({ size = 18, color = 'currentColor', sw = 1.6, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M5 17h14M5 17a2 2 0 1 1-4 0M19 17a2 2 0 1 0 4 0M3 17l1.5-6h15L21 17M6 11l1-4h10l1 4" />
  </svg>
);

export const Menu = ({ size = 26, color = 'currentColor', sw = 2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const Award = ({ size = 18, color = 'currentColor', sw = 2, style }: P) => (
  <svg {...svgProps(size, color, sw)} style={style}>
    <path d="M12 2l3 7h7l-5.5 4.5 2 7.5L12 16.5 5.5 21l2-7.5L2 9h7z" />
  </svg>
);
