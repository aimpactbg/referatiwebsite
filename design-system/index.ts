// ===========================================
// 🎨 REFERATI DESIGN SYSTEM - MAIN EXPORT
// ===========================================
// File: /design-system/index.ts
// Purpose: Central export for all design system tokens and utilities

// ===========================================
// 📥 TOKEN IMPORTS
// ===========================================

// Import all tokens first
import {
  BASE_COLORS,
  COLORS,
  SEMANTIC_COLORS,
  UI_COLORS,
  GRADIENTS,
  COLOR_PALETTE_INFO,
  withOpacity,
  getColorFromScale,
  generateColorCSS,
} from './tokens/colors';

import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACING,
  TYPOGRAPHY_PRESETS,
  TYPOGRAPHY_USAGE_GUIDE,
  getTypographyPreset,
  generateTypographyClass,
  generateTypographyCSS,
} from './tokens/typography';

import {
  SPACING,
  LAYOUT_SPACING,
  RESPONSIVE_SPACING,
  BORDER_RADIUS,
  Z_INDEX,
  LAYOUT_PATTERNS,
  SPACING_USAGE_GUIDE,
  getSpacing,
  getResponsiveSpacing,
  generateSpacingUtilities,
  generateSpacingCSS,
} from './tokens/spacing';

// ===========================================
// 📤 RE-EXPORT ALL TOKENS
// ===========================================

// Color system exports
export {
  BASE_COLORS,
  COLORS,
  SEMANTIC_COLORS,
  UI_COLORS,
  GRADIENTS,
  COLOR_PALETTE_INFO,
  withOpacity,
  getColorFromScale,
  generateColorCSS,
};

// Typography system exports
export {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACING,
  TYPOGRAPHY_PRESETS,
  TYPOGRAPHY_USAGE_GUIDE,
  getTypographyPreset,
  generateTypographyClass,
  generateTypographyCSS,
};

// Spacing system exports
export {
  SPACING,
  LAYOUT_SPACING,
  RESPONSIVE_SPACING,
  BORDER_RADIUS,
  Z_INDEX,
  LAYOUT_PATTERNS,
  SPACING_USAGE_GUIDE,
  getSpacing,
  getResponsiveSpacing,
  generateSpacingUtilities,
  generateSpacingCSS,
};

// ===========================================
// 🏗️ DESIGN SYSTEM MANAGER
// ===========================================

export interface DesignSystemConfig {
  colors: typeof COLORS;
  typography: typeof TYPOGRAPHY_PRESETS;
  spacing: typeof SPACING;
  borderRadius: typeof BORDER_RADIUS;
}

export class ReferatiDesignSystem {
  private static instance: ReferatiDesignSystem;

  // Singleton pattern for consistent usage
  public static getInstance(): ReferatiDesignSystem {
    if (!ReferatiDesignSystem.instance) {
      ReferatiDesignSystem.instance = new ReferatiDesignSystem();
    }
    return ReferatiDesignSystem.instance;
  }

  // Get color by path
  getColor(path: string): string {
    const keys = path.split('.');
    let value: any = COLORS;

    for (const key of keys) {
      value = value[key];
      if (!value) {
        // Fallback to semantic colors
        if (SEMANTIC_COLORS[key as keyof typeof SEMANTIC_COLORS]) {
          return SEMANTIC_COLORS[key as keyof typeof SEMANTIC_COLORS];
        }
        console.warn(`Color not found: ${path}`);
        return BASE_COLORS.primary; // Fallback color
      }
    }

    return value;
  }

  // Get semantic color
  getSemanticColor(name: keyof typeof SEMANTIC_COLORS): string {
    return SEMANTIC_COLORS[name];
  }

  // Get spacing value
  getSpacing(key: keyof typeof SPACING): string {
    return SPACING[key];
  }

  // Get typography preset
  getTypography(preset: keyof typeof TYPOGRAPHY_PRESETS) {
    return TYPOGRAPHY_PRESETS[preset];
  }

  // Generate all CSS custom properties
  generateAllCSS(): Record<string, string> {
    return {
      ...generateColorCSS(),
      ...generateTypographyCSS(),
      ...generateSpacingCSS(),
    };
  }

  // Apply design system to DOM
  applyToDOM(): void {
    if (typeof document === 'undefined') return;

    const cssVars = this.generateAllCSS();
    const root = document.documentElement;

    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Add design system class to body
    document.body.classList.add('referati-design-system');
  }

  // Get current configuration
  getConfig(): DesignSystemConfig {
    return {
      colors: COLORS,
      typography: TYPOGRAPHY_PRESETS,
      spacing: SPACING,
      borderRadius: BORDER_RADIUS,
    };
  }
}

// ===========================================
// 🎨 THEME DEFINITIONS
// ===========================================

export const REFERATI_THEME = {
  name: 'Referati Academic',
  colors: {
    primary: BASE_COLORS.primary,
    secondary: BASE_COLORS.secondary,
    accent: BASE_COLORS.accent,
    success: BASE_COLORS.success,
    dark: BASE_COLORS.dark,
  },
  typography: {
    primary: FONT_FAMILIES.primary,
    secondary: FONT_FAMILIES.secondary,
    mono: FONT_FAMILIES.mono,
  },
  spacing: {
    base: SPACING[4],
    section: LAYOUT_SPACING.section.md,
    component: LAYOUT_SPACING.component.md,
  },
} as const;

// ===========================================
// 🔧 UTILITY FUNCTIONS
// ===========================================

// Initialize design system (call this in your app)
export const initializeDesignSystem = (): ReferatiDesignSystem => {
  const ds = ReferatiDesignSystem.getInstance();
  ds.applyToDOM();
  return ds;
};

// Quick access to design system instance
export const useDesignSystem = (): ReferatiDesignSystem => {
  return ReferatiDesignSystem.getInstance();
};

// Validate color value
export const isValidColor = (color: string): boolean => {
  if (typeof window === 'undefined') return true; // Skip validation on server
  const style = new Option().style;
  style.color = color;
  return style.color !== '';
};

// Convert hex to rgba
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// ===========================================
// 📋 QUICK REFERENCE
// ===========================================

export const DESIGN_SYSTEM_REFERENCE = {
  colors: {
    primary: BASE_COLORS.primary,
    secondary: BASE_COLORS.secondary,
    accent: BASE_COLORS.accent,
    success: BASE_COLORS.success,
    dark: BASE_COLORS.dark,
  },

  commonSizes: {
    text: {
      small: FONT_SIZES.sm,
      body: FONT_SIZES.base,
      heading: FONT_SIZES.xl,
      hero: FONT_SIZES['4xl'],
    },
    spacing: {
      tight: SPACING[2],
      normal: SPACING[4],
      relaxed: SPACING[6],
      loose: SPACING[8],
    },
    radius: {
      small: BORDER_RADIUS.sm,
      normal: BORDER_RADIUS.md,
      large: BORDER_RADIUS.lg,
      round: BORDER_RADIUS.full,
    },
  },

  usage: {
    buttons: {
      primary: 'Primary color with white text',
      secondary: 'Secondary color with dark text',
      outline: 'Transparent with primary border',
    },
    text: {
      heading: 'Typography preset: heading-lg',
      body: 'Typography preset: body-md',
      caption: 'Typography preset: body-sm',
    },
    layout: {
      section: 'Layout spacing: section.md (64px)',
      component: 'Layout spacing: component.md (24px)',
      grid: 'Layout spacing: grid.md (24px)',
    },
  },
} as const;

// ===========================================
// 📦 DEFAULT EXPORT
// ===========================================

// Export design system instance as default
export default ReferatiDesignSystem.getInstance();