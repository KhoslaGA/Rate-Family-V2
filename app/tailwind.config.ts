import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens — kept for backward compat with existing Tailwind
        // utility usages. Authoritative source is now src/styles/globals.css
        // @theme block (Tailwind v4 CSS-first). Gold token DROPPED here
        // and in @theme; the Phase 1 muddy gold #B8960C is replaced by
        // amber #B45309 (disclosure callouts) or navy/teal (decorative).
        teal: '#0A7E8C',
        'teal-hover': '#0d9aa8',
        'teal-dark': '#086874',
        navy: '#1B2A4A',
        'navy-dark': '#0f1e38',
        cream: '#FBF7EE',
        paper: '#FBF7EE',
        ink: '#1F2024',
        'ink-strong': '#121214',
        'ink-muted': '#5C5C66',
        mute: '#5C5C66',
        amber: '#B45309',
        border: 'rgba(31, 32, 36, 0.10)',
        'border-soft': 'rgba(31, 32, 36, 0.06)',

        primary: {
          50: '#f0f4f8',
          100: '#d9e2f0',
          200: '#b3c5e1',
          300: '#8ca8d2',
          400: '#5a7fbd',
          500: '#3d5a9f',
          600: '#1a365d',
          700: '#152d4a',
          800: '#0f2340',
          900: '#0a1829',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        // Editorial register: Source Serif 4 body + headings, Inter UI,
        // Newsreader display. Loaded via next/font/google in layout.tsx.
        // No more Inter Tight, no more JetBrains Mono.
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'var(--font-serif)', 'Georgia', 'serif'],
        heading: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.10)',
        'lg': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
