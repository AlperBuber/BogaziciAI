import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          hover: 'hsl(var(--color-primary-hover))',
          light: 'hsl(var(--color-primary-light))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          secondary: 'hsl(var(--color-accent-2))',
        },
        background: 'hsl(var(--color-background))',
        surface: 'hsl(var(--color-surface))',
        border: 'hsl(var(--color-border))',
        foreground: {
          DEFAULT: 'hsl(var(--color-text-primary))',
          secondary: 'hsl(var(--color-text-secondary))',
          muted: 'hsl(var(--color-text-muted))',
        },
        'on-primary': 'hsl(var(--color-text-on-primary))',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-cta': 'var(--gradient-cta)',
      },
      spacing: {
        section: 'var(--space-section)',
        container: 'var(--space-container)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '350ms',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
