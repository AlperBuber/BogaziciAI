// ============================================
// THEME CONFIGURATION
// ============================================

export const themeConfig = {
  colors: {
    primary: {
      hue: 217,
      saturation: 91,
      lightness: 60,
    },
    accent: {
      hue: 265,
      saturation: 83,
      lightness: 57,
    },
    accentSecondary: {
      hue: 160,
      saturation: 84,
      lightness: 39,
    },
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    sizes: {
      h1: {
        size: '4rem',
        weight: 700,
        lineHeight: 1.1,
      },
      h2: {
        size: '2.5rem',
        weight: 600,
        lineHeight: 1.2,
      },
      h3: {
        size: '1.5rem',
        weight: 600,
        lineHeight: 1.3,
      },
      body: {
        size: '1rem',
        weight: 400,
        lineHeight: 1.6,
      },
      small: {
        size: '0.875rem',
        weight: 400,
        lineHeight: 1.5,
      },
    },
  },
  
  spacing: {
    section: {
      desktop: '6rem',
      tablet: '5rem',
      mobile: '4rem',
    },
    container: {
      maxWidth: '1280px',
      padding: {
        desktop: '2rem',
        mobile: '1rem',
      },
    },
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    glow: '0 0 40px rgb(59 130 246 / 0.3)',
  },
  
  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '350ms ease',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export type ThemeConfig = typeof themeConfig;
