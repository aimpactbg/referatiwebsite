// ===========================================
// 📐 DESIGN SYSTEM - SPACING TOKENS
// ===========================================
// File: /design-system/tokens/spacing.ts
// Purpose: Centralized spacing system for consistent layouts

// ===========================================
// 📏 BASE SPACING SCALE
// ===========================================
// Using 4px base unit (0.25rem) for consistent spacing

export const SPACING = {
  // No spacing
  0: '0',

  // Micro spacing
  px: '1px',
  0.5: '0.125rem',  // 2px

  // Small spacing
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px

  // Medium spacing
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px

  // Large spacing
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px

  // Extra large spacing
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// ===========================================
// 🏗️ LAYOUT SPACING PRESETS
// ===========================================
// Semantic spacing for common layout patterns

export const LAYOUT_SPACING = {
  // Component internal spacing
  component: {
    xs: SPACING[2],      // 8px - tight spacing within small components
    sm: SPACING[4],      // 16px - default component padding
    md: SPACING[6],      // 24px - comfortable component spacing
    lg: SPACING[8],      // 32px - generous component padding
    xl: SPACING[12],     // 48px - spacious component layouts
  },

  // Section spacing (vertical rhythm)
  section: {
    xs: SPACING[8],      // 32px - minimal section spacing
    sm: SPACING[12],     // 48px - compact sections
    md: SPACING[16],     // 64px - default section spacing
    lg: SPACING[20],     // 80px - generous section spacing
    xl: SPACING[24],     // 96px - maximum section spacing
    '2xl': SPACING[32],  // 128px - hero/special sections
  },

  // Container spacing
  container: {
    xs: SPACING[4],      // 16px - mobile container padding
    sm: SPACING[6],      // 24px - small screen padding
    md: SPACING[8],      // 32px - tablet padding
    lg: SPACING[12],     // 48px - desktop padding
    xl: SPACING[16],     // 64px - large screen padding
  },

  // Grid gaps
  grid: {
    xs: SPACING[2],      // 8px - tight grid
    sm: SPACING[4],      // 16px - compact grid
    md: SPACING[6],      // 24px - default grid gap
    lg: SPACING[8],      // 32px - spacious grid
    xl: SPACING[12],     // 48px - generous grid
  },

  // Form spacing
  form: {
    field: SPACING[4],   // 16px - spacing between form fields
    group: SPACING[6],   // 24px - spacing between form groups
    section: SPACING[8], // 32px - spacing between form sections
  },
} as const;

// ===========================================
// 📱 RESPONSIVE SPACING
// ===========================================
// Spacing that adapts to screen size

export const RESPONSIVE_SPACING = {
  // Page margins
  pageMargin: {
    mobile: SPACING[4],    // 16px on mobile
    tablet: SPACING[8],    // 32px on tablet
    desktop: SPACING[12],  // 48px on desktop
    wide: SPACING[16],     // 64px on wide screens
  },

  // Hero section spacing
  hero: {
    mobile: SPACING[12],   // 48px on mobile
    tablet: SPACING[16],   // 64px on tablet
    desktop: SPACING[20],  // 80px on desktop
    wide: SPACING[24],     // 96px on wide screens
  },

  // Content width containers
  maxWidth: {
    prose: '65ch',         // Optimal reading width
    sm: '24rem',           // 384px
    md: '28rem',           // 448px
    lg: '32rem',           // 512px
    xl: '36rem',           // 576px
    '2xl': '42rem',        // 672px
    '3xl': '48rem',        // 768px
    '4xl': '56rem',        // 896px
    '5xl': '64rem',        // 1024px
    '6xl': '72rem',        // 1152px
    '7xl': '80rem',        // 1280px
    full: '100%',
    screen: '100vw',
  },
} as const;

// ===========================================
// 🔄 BORDER RADIUS SCALE
// ===========================================
// Consistent border radius for rounded elements

export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',    // Fully rounded
} as const;

// ===========================================
// 🌊 Z-INDEX SCALE
// ===========================================
// Consistent layering system

export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1020,
  banner: 1030,
  overlay: 1040,
  modal: 1050,
  popover: 1060,
  skipLink: 1070,
  toast: 1080,
  tooltip: 1090,
} as const;

// ===========================================
// 📏 LAYOUT UTILITIES
// ===========================================
// Pre-defined layout patterns

export const LAYOUT_PATTERNS = {
  // Flexbox utilities
  flex: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centerX: {
      display: 'flex',
      justifyContent: 'center',
    },
    centerY: {
      display: 'flex',
      alignItems: 'center',
    },
    between: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    start: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    end: {
      display: 'flex',
      alignItems: 'flex-end',
    },
  },

  // Grid utilities
  grid: {
    responsive: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: LAYOUT_SPACING.grid.md,
    },
    twoColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: LAYOUT_SPACING.grid.md,
    },
    threeColumn: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: LAYOUT_SPACING.grid.md,
    },
    sidebar: {
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      gap: LAYOUT_SPACING.grid.lg,
    },
  },

  // Card layouts
  card: {
    base: {
      padding: LAYOUT_SPACING.component.md,
      borderRadius: BORDER_RADIUS.lg,
    },
    compact: {
      padding: LAYOUT_SPACING.component.sm,
      borderRadius: BORDER_RADIUS.md,
    },
    spacious: {
      padding: LAYOUT_SPACING.component.lg,
      borderRadius: BORDER_RADIUS.xl,
    },
  },
} as const;

// ===========================================
// 🎨 SPACING CSS GENERATOR
// ===========================================

export const generateSpacingCSS = (): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Base spacing
  Object.entries(SPACING).forEach(([name, value]) => {
    cssVars[`--spacing-${name}`] = value;
  });

  // Layout spacing (flattened)
  const flattenObject = (obj: any, prefix = ''): void => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        flattenObject(value, `${prefix}${key}-`);
      } else {
        cssVars[`--spacing-${prefix}${key}`] = value as string;
      }
    });
  };

  flattenObject(LAYOUT_SPACING, 'layout-');
  flattenObject(RESPONSIVE_SPACING, 'responsive-');

  // Border radius
  Object.entries(BORDER_RADIUS).forEach(([name, value]) => {
    cssVars[`--radius-${name}`] = value;
  });

  // Z-index
  Object.entries(Z_INDEX).forEach(([name, value]) => {
    cssVars[`--z-${name}`] = value.toString();
  });

  return cssVars;
};

// ===========================================
// 🔧 UTILITY FUNCTIONS
// ===========================================

// Get spacing value by key
export const getSpacing = (key: keyof typeof SPACING): string => {
  return SPACING[key];
};

// Get responsive spacing
export const getResponsiveSpacing = (
  mobile: keyof typeof SPACING,
  tablet?: keyof typeof SPACING,
  desktop?: keyof typeof SPACING
): string => {
  const mobileValue = SPACING[mobile];
  const tabletValue = tablet ? SPACING[tablet] : mobileValue;
  const desktopValue = desktop ? SPACING[desktop] : tabletValue;

  return `${mobileValue} /* mobile */ ${tabletValue} /* tablet */ ${desktopValue} /* desktop */`;
};

// Generate margin/padding classes
export const generateSpacingUtilities = (property: 'margin' | 'padding'): Record<string, string> => {
  const utilities: Record<string, string> = {};
  const prefix = property === 'margin' ? 'm' : 'p';

  Object.entries(SPACING).forEach(([key, value]) => {
    // All sides
    utilities[`${prefix}-${key}`] = `${property}: ${value}`;

    // Individual sides
    utilities[`${prefix}t-${key}`] = `${property}-top: ${value}`;
    utilities[`${prefix}r-${key}`] = `${property}-right: ${value}`;
    utilities[`${prefix}b-${key}`] = `${property}-bottom: ${value}`;
    utilities[`${prefix}l-${key}`] = `${property}-left: ${value}`;

    // Axis
    utilities[`${prefix}x-${key}`] = `${property}-left: ${value}; ${property}-right: ${value}`;
    utilities[`${prefix}y-${key}`] = `${property}-top: ${value}; ${property}-bottom: ${value}`;
  });

  return utilities;
};

// ===========================================
// 📚 SPACING DOCUMENTATION
// ===========================================

export const SPACING_USAGE_GUIDE = {
  component: {
    purpose: 'Internal spacing within components',
    usage: 'Use for padding, gaps between child elements',
    recommendations: [
      'Use 4px (spacing-1) for tight layouts',
      'Use 16px (spacing-4) as default component padding',
      'Use 24px (spacing-6) for comfortable breathing room',
      'Use 32px (spacing-8) for generous spacing'
    ]
  },
  section: {
    purpose: 'Vertical rhythm between sections',
    usage: 'Space between major page sections',
    recommendations: [
      'Use 48px (spacing-12) as minimum section spacing',
      'Use 64px (spacing-16) as default section spacing',
      'Use 80px (spacing-20) for important section breaks',
      'Use 96px+ for hero sections and special areas'
    ]
  },
  grid: {
    purpose: 'Gaps between grid items',
    usage: 'CSS Grid and Flexbox gaps',
    recommendations: [
      'Use 16px for compact layouts',
      'Use 24px as default grid gap',
      'Use 32px for spacious layouts',
      'Adjust based on content density'
    ]
  },
  responsive: {
    purpose: 'Spacing that adapts to screen size',
    usage: 'Container margins, section spacing',
    recommendations: [
      'Start with mobile-first approach',
      'Increase spacing on larger screens',
      'Maintain proportional relationships',
      'Test on actual devices'
    ]
  }
} as const;

export default SPACING;