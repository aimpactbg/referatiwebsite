// ===========================================
// 🔤 DESIGN SYSTEM - TYPOGRAPHY TOKENS
// ===========================================
// File: /design-system/tokens/typography.ts
// Purpose: Centralized typography system for consistent text styling

// ===========================================
// 📝 FONT FAMILY DEFINITIONS
// ===========================================

export const FONT_FAMILIES = {
  // Primary font - for UI and body text
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",

  // Secondary font - for headings and display text
  secondary: "'Playfair Display', 'Georgia Pro', Georgia, Times, 'Times New Roman', serif",

  // Monospace font - for code and technical content
  mono: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
} as const;

// ===========================================
// 📏 FONT SIZE SCALE
// ===========================================
// Modular scale based on 16px base with 1.125 ratio

export const FONT_SIZES = {
  // Small sizes
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px

  // Base size
  base: '1rem',       // 16px

  // Medium sizes
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px

  // Large sizes
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
  '7xl': '4.5rem',    // 72px
  '8xl': '6rem',      // 96px
  '9xl': '8rem',      // 128px
} as const;

// ===========================================
// ⚖️ FONT WEIGHT SCALE
// ===========================================

export const FONT_WEIGHTS = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// ===========================================
// 📐 LINE HEIGHT SCALE
// ===========================================

export const LINE_HEIGHTS = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

// ===========================================
// 🔤 LETTER SPACING SCALE
// ===========================================

export const LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ===========================================
// 📝 TYPOGRAPHY PRESETS
// ===========================================
// Pre-defined text styles for consistent usage

export interface TypographyPreset {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
}

export const TYPOGRAPHY_PRESETS = {
  // Display text - for hero sections and major headings
  'display-2xl': {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES['8xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.none,
    letterSpacing: LETTER_SPACING.tight,
  },
  'display-xl': {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES['7xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.none,
    letterSpacing: LETTER_SPACING.tight,
  },
  'display-lg': {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES['6xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
  },
  'display-md': {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES['5xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
  },
  'display-sm': {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES['4xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
  },
  'display-xs': {
    fontFamily: FONT_FAMILIES.secondary,
    fontSize: FONT_SIZES['3xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Headings - for section titles and content hierarchy
  'heading-xl': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES['3xl'],
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.normal,
  },
  'heading-lg': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES['2xl'],
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.snug,
    letterSpacing: LETTER_SPACING.normal,
  },
  'heading-md': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'heading-sm': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'heading-xs': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Body text - for content and descriptions
  'body-xl': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.relaxed,
    letterSpacing: LETTER_SPACING.normal,
  },
  'body-lg': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.relaxed,
    letterSpacing: LETTER_SPACING.normal,
  },
  'body-md': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'body-sm': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'body-xs': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },

  // Labels and UI text
  'label-lg': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'label-md': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'label-sm': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
  },

  // Button text
  'button-lg': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'button-md': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'button-sm': {
    fontFamily: FONT_FAMILIES.primary,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
  },

  // Code and monospace text
  'code-lg': {
    fontFamily: FONT_FAMILIES.mono,
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'code-md': {
    fontFamily: FONT_FAMILIES.mono,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
  'code-sm': {
    fontFamily: FONT_FAMILIES.mono,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
  },
} as const;

// ===========================================
// 🎨 TYPOGRAPHY CSS GENERATOR
// ===========================================

export const generateTypographyCSS = (): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Font families
  Object.entries(FONT_FAMILIES).forEach(([name, value]) => {
    cssVars[`--font-family-${name}`] = value;
  });

  // Font sizes
  Object.entries(FONT_SIZES).forEach(([name, value]) => {
    cssVars[`--font-size-${name}`] = value;
  });

  // Font weights
  Object.entries(FONT_WEIGHTS).forEach(([name, value]) => {
    cssVars[`--font-weight-${name}`] = value.toString();
  });

  // Line heights
  Object.entries(LINE_HEIGHTS).forEach(([name, value]) => {
    cssVars[`--line-height-${name}`] = value.toString();
  });

  // Letter spacing
  Object.entries(LETTER_SPACING).forEach(([name, value]) => {
    cssVars[`--letter-spacing-${name}`] = value;
  });

  return cssVars;
};

// ===========================================
// 🔧 UTILITY FUNCTIONS
// ===========================================

// Get typography preset as CSS object
export const getTypographyPreset = (preset: keyof typeof TYPOGRAPHY_PRESETS): TypographyPreset => {
  return TYPOGRAPHY_PRESETS[preset];
};

// Generate CSS class for typography preset
export const generateTypographyClass = (preset: keyof typeof TYPOGRAPHY_PRESETS): string => {
  const style = TYPOGRAPHY_PRESETS[preset];
  return `
    font-family: ${style.fontFamily};
    font-size: ${style.fontSize};
    font-weight: ${style.fontWeight};
    line-height: ${style.lineHeight};
    letter-spacing: ${style.letterSpacing};
  `;
};

// ===========================================
// 📚 TYPOGRAPHY DOCUMENTATION
// ===========================================

export const TYPOGRAPHY_USAGE_GUIDE = {
  display: {
    purpose: 'Hero sections, major page titles, marketing headlines',
    sizes: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'],
    bestPractices: [
      'Use sparingly for maximum impact',
      'Ensure adequate white space around display text',
      'Consider responsive scaling on mobile devices',
      'Pair with body text for balance'
    ]
  },
  heading: {
    purpose: 'Section titles, content hierarchy, page structure',
    sizes: ['xl', 'lg', 'md', 'sm', 'xs'],
    bestPractices: [
      'Maintain consistent hierarchy throughout pages',
      'Use appropriate heading levels for SEO',
      'Ensure sufficient contrast with background',
      'Keep headings concise and descriptive'
    ]
  },
  body: {
    purpose: 'Content text, descriptions, paragraphs',
    sizes: ['xl', 'lg', 'md', 'sm', 'xs'],
    bestPractices: [
      'Use body-md as the default for most content',
      'Ensure line length is comfortable for reading (45-75 characters)',
      'Maintain adequate line spacing for readability',
      'Use larger sizes for important content'
    ]
  },
  label: {
    purpose: 'Form labels, UI text, metadata',
    sizes: ['lg', 'md', 'sm'],
    bestPractices: [
      'Use medium weight for better visibility',
      'Ensure labels are clearly associated with their inputs',
      'Use consistent capitalization style',
      'Consider accessibility requirements'
    ]
  },
  button: {
    purpose: 'Button text, calls-to-action',
    sizes: ['lg', 'md', 'sm'],
    bestPractices: [
      'Use semibold weight for primary actions',
      'Keep button text concise and action-oriented',
      'Ensure sufficient contrast for accessibility',
      'Match button size with text size appropriately'
    ]
  },
  code: {
    purpose: 'Code snippets, technical content, monospace text',
    sizes: ['lg', 'md', 'sm'],
    bestPractices: [
      'Use for technical documentation and code examples',
      'Ensure adequate contrast and spacing',
      'Consider syntax highlighting for code blocks',
      'Use appropriate background colors for code sections'
    ]
  }
} as const;

export default TYPOGRAPHY_PRESETS;