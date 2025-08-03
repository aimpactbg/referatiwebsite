// ===========================================
// 📐 DESIGN SYSTEM - SPACING TOKENS
// ===========================================
// File: /design-system/tokens/spacing.ts
// Purpose: Centralized spacing system for consistent layouts

// ===========================================
// 📏 BASE SPACING SCALE
// ===========================================
// Based on 4px grid system for perfect pixel alignment

export const SPACING = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',    // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px - Base unit
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
} as const;

// ===========================================
// 🏗️ LAYOUT SPACING PATTERNS
// ===========================================
// Semantic spacing for different layout contexts

export const LAYOUT_SPACING = {
  // Component internal spacing (padding, gaps)
  component: {
    xs: SPACING[2],     // 8px - Tight components
    sm: SPACING[4],     // 16px - Default component padding
    md: SPACING[6],     // 24px - Comfortable components
    lg: SPACING[8],     // 32px - Spacious components
    xl: SPACING[12],    // 48px - Extra spacious
  },

  // Section spacing (between major page sections)
  section: {
    xs: SPACING[8],     // 32px - Minimal sections
    sm: SPACING[12],    // 48px - Compact sections
    md: SPACING[16],    // 64px - Standard sections
    lg: SPACING[20],    // 80px - Generous sections
    xl: SPACING[24],    // 96px - Maximum sections
    '2xl': SPACING[32], // 128px - Hero sections
  },

  // Grid spacing (between grid items)
  grid: {
    xs: SPACING[2],     // 8px - Tight grids
    sm: SPACING[4],     // 16px - Compact grids
    md: SPACING[6],     // 24px - Standard grids
    lg: SPACING[8],     // 32px - Spacious grids
    xl: SPACING[12],    // 48px - Loose grids
  },

  // Stack spacing (vertical rhythm)
  stack: {
    xs: SPACING[1],     // 4px - Tight stacking
    sm: SPACING[2],     // 8px - Close elements
    md: SPACING[4],     // 16px - Normal stacking
    lg: SPACING[6],     // 24px - Comfortable stacking
    xl: SPACING[8],     // 32px - Loose stacking
  },
} as const;

// ===========================================
// 📱 RESPONSIVE SPACING
// ===========================================
// Spacing that adapts to screen size

export const RESPONSIVE_SPACING = {
  // Container padding
  container: {
    mobile: SPACING[4],   // 16px on mobile
    tablet: SPACING[6],   // 24px on tablet
    desktop: SPACING[8],  // 32px on desktop
  },

  // Section padding
  sectionY: {
    mobile: SPACING[12],  // 48px on mobile
    tablet: SPACING[16],  // 64px on tablet
    desktop: SPACING[20], // 80px on desktop
  },

  // Component spacing
  componentGap: {
    mobile: SPACING[4],   // 16px on mobile
    tablet: SPACING[6],   // 24px on tablet
    desktop: SPACING[8],  // 32px on desktop
  },
} as const;

// ===========================================
// 🔘 BORDER RADIUS SCALE
// ===========================================
// Consistent border radius system

export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',       // 2px
  base: '0.25rem',      // 4px - Default
  md: '0.375rem',       // 6px
  lg: '0.5rem',         // 8px
  xl: '0.75rem',        // 12px
  '2xl': '1rem',        // 16px
  '3xl': '1.5rem',      // 24px
  full: '9999px',       // Perfect circle
} as const;

// ===========================================
// 📚 Z-INDEX SCALE
// ===========================================
// Layering system for consistent stacking

export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,           // Docked elements
  dropdown: 1000,       // Dropdown menus
  sticky: 1020,         // Sticky elements
  banner: 1030,         // Notification banners
  overlay: 1040,        // Background overlays
  modal: 1050,          // Modal dialogs
  popover: 1060,        // Popovers and tooltips
  skipLink: 1070,       // Skip navigation links
  toast: 1080,          // Toast notifications
  tooltip: 1090,        // Tooltips (highest)
} as const;

// ===========================================
// 📐 COMMON LAYOUT PATTERNS
// ===========================================
// Pre-defined spacing combinations for common layouts

export const LAYOUT_PATTERNS = {
  // Card layouts
  card: {
    padding: LAYOUT_SPACING.component.md,    // 24px internal padding
    gap: LAYOUT_SPACING.stack.md,            // 16px between elements
    margin: LAYOUT_SPACING.grid.md,          // 24px between cards
  },

  // Form layouts
  form: {
    fieldGap: LAYOUT_SPACING.stack.lg,       // 24px between form fields
    labelGap: SPACING[2],                    // 8px between label and input
    buttonGap: LAYOUT_SPACING.stack.md,     // 16px between buttons
    sectionGap: LAYOUT_SPACING.component.lg, // 32px between form sections
  },

  // Navigation layouts
  navigation: {
    itemGap: SPACING[6],                     // 24px between nav items
    dropdownGap: SPACING[1],                 // 4px between dropdown items
    padding: LAYOUT_SPACING.component.sm,    // 16px nav padding
  },

  // Content layouts
  content: {
    paragraphGap: SPACING[4],                // 16px between paragraphs
    headingGap: SPACING[6],                  // 24px after headings
    listItemGap: SPACING[2],                 // 8px between list items
    blockGap: LAYOUT_SPACING.stack.xl,      // 32px between content blocks
  },

  // Hero section
  hero: {
    padding: LAYOUT_SPACING.section['2xl'],  // 128px vertical padding
    contentGap: LAYOUT_SPACING.stack.xl,    // 32px between hero elements
    buttonGap: SPACING[4],                   // 16px between buttons
  },
} as const;

// ===========================================
// 📋 SPACING USAGE GUIDE
// ===========================================
// Guidelines for consistent spacing usage

export const SPACING_USAGE_GUIDE = {
  micro: {
    range: '1px - 8px',
    usage: 'Borders, focus rings, small gaps',
    tokens: [SPACING.px, SPACING[0.5], SPACING[1], SPACING[2]],
  },

  small: {
    range: '12px - 20px',
    usage: 'Icon spacing, button padding, tight layouts',
    tokens: [SPACING[3], SPACING[4], SPACING[5]],
  },

  medium: {
    range: '24px - 48px',
    usage: 'Component padding, card spacing, standard layouts',
    tokens: [SPACING[6], SPACING[8], SPACING[10], SPACING[12]],
  },

  large: {
    range: '56px - 96px',
    usage: 'Section spacing, page margins, hero elements',
    tokens: [SPACING[14], SPACING[16], SPACING[20], SPACING[24]],
  },

  extra: {
    range: '128px+',
    usage: 'Page sections, major layout blocks',
    tokens: [SPACING[32], SPACING[40], SPACING[48], SPACING[64]],
  },
} as const;

// ===========================================
// 🔧 UTILITY FUNCTIONS
// ===========================================

// Get spacing value by key
export const getSpacing = (key: keyof typeof SPACING): string => {
  return SPACING[key];
};

// Get responsive spacing
export const getResponsiveSpacing = (
  pattern: keyof typeof RESPONSIVE_SPACING,
  size: 'mobile' | 'tablet' | 'desktop'
): string => {
  return RESPONSIVE_SPACING[pattern][size];
};

// Generate spacing utilities for CSS
export const generateSpacingUtilities = (): Record<string, Record<string, string>> => {
  const utilities: Record<string, Record<string, string>> = {};

  // Margin utilities
  utilities.margin = {};
  Object.entries(SPACING).forEach(([key, value]) => {
    utilities.margin[`m-${key}`] = { margin: value };
    utilities.margin[`mt-${key}`] = { marginTop: value };
    utilities.margin[`mr-${key}`] = { marginRight: value };
    utilities.margin[`mb-${key}`] = { marginBottom: value };
    utilities.margin[`ml-${key}`] = { marginLeft: value };
    utilities.margin[`mx-${key}`] = { marginLeft: value, marginRight: value };
    utilities.margin[`my-${key}`] = { marginTop: value, marginBottom: value };
  });

  // Padding utilities
  utilities.padding = {};
  Object.entries(SPACING).forEach(([key, value]) => {
    utilities.padding[`p-${key}`] = { padding: value };
    utilities.padding[`pt-${key}`] = { paddingTop: value };
    utilities.padding[`pr-${key}`] = { paddingRight: value };
    utilities.padding[`pb-${key}`] = { paddingBottom: value };
    utilities.padding[`pl-${key}`] = { paddingLeft: value };
    utilities.padding[`px-${key}`] = { paddingLeft: value, paddingRight: value };
    utilities.padding[`py-${key}`] = { paddingTop: value, paddingBottom: value };
  });

  // Gap utilities
  utilities.gap = {};
  Object.entries(SPACING).forEach(([key, value]) => {
    utilities.gap[`gap-${key}`] = { gap: value };
    utilities.gap[`gap-x-${key}`] = { columnGap: value };
    utilities.gap[`gap-y-${key}`] = { rowGap: value };
  });

  return utilities;
};

// Generate CSS custom properties for spacing
export const generateSpacingCSS = (): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Base spacing
  Object.entries(SPACING).forEach(([name, value]) => {
    // Handle decimal keys (replace . with _)
    const cssName = name.includes('.') ? name.replace('.', '_') : name;
    cssVars[`--spacing-${cssName}`] = value;
  });

  // Layout spacing (flattened)
  const flattenLayoutSpacing = (obj: any, prefix = ''): void => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        flattenLayoutSpacing(value, `${prefix}${key}-`);
      } else {
        cssVars[`--spacing-layout-${prefix}${key}`] = value as string;
      }
    });
  };

  flattenLayoutSpacing(LAYOUT_SPACING);

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

// Create spacing scale documentation
export const createSpacingScale = (): Array<{name: string, value: string, pixels: string}> => {
  return Object.entries(SPACING).map(([name, value]) => ({
    name,
    value,
    pixels: `${parseFloat(value) * 16}px` // Convert rem to px (assuming 16px base)
  }));
};

// Validate spacing value
export const isValidSpacing = (value: string): boolean => {
  return Object.values(SPACING).includes(value as any);
};

// Convert spacing to pixels (for calculations)
export const spacingToPx = (spacingKey: keyof typeof SPACING): number => {
  const remValue = parseFloat(SPACING[spacingKey]);
  return remValue * 16; // Assuming 16px base font size
};

// ===========================================
// 📦 EXPORT ALL
// ===========================================

export default SPACING;