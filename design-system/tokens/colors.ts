// ===========================================
// 🎨 DESIGN SYSTEM - COLOR TOKENS
// ===========================================
// File: /design-system/tokens/colors.ts
// Purpose: Centralized color definitions for easy management

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;  // Base color
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

// ===========================================
// 🎯 BASE COLOR DEFINITIONS
// ===========================================
// Change these values to update entire color system

export const BASE_COLORS = {
  primary: '#F73859',      // Folly - Primary CTA buttons, links
  secondary: '#E5D352',    // Arylide yellow - Secondary buttons, highlights  
  accent: '#540D6E',       // Indigo - Headers, icons, special elements
  success: '#00BFB2',      // Light sea green - Success states, confirmations
  dark: '#030301',         // Black - Text, backgrounds, overlays
} as const;

// ===========================================
// 🔧 COLOR SCALE GENERATOR
// ===========================================
// Generates all color variations automatically

const generateColorScale = (baseColor: string): ColorScale => {
  // Convert hex to HSL for better color manipulation
  const hexToHsl = (hex: string): [number, number, number] => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  };

  const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const [h, s, l] = hexToHsl(baseColor);

  return {
    50: hslToHex(h, Math.max(s - 50, 0), Math.min(l + 45, 95)),
    100: hslToHex(h, Math.max(s - 40, 0), Math.min(l + 40, 90)),
    200: hslToHex(h, Math.max(s - 30, 0), Math.min(l + 30, 85)),
    300: hslToHex(h, Math.max(s - 20, 0), Math.min(l + 20, 80)),
    400: hslToHex(h, Math.max(s - 10, 0), Math.min(l + 10, 75)),
    500: baseColor, // Original color
    600: hslToHex(h, Math.min(s + 10, 100), Math.max(l - 10, 25)),
    700: hslToHex(h, Math.min(s + 20, 100), Math.max(l - 20, 20)),
    800: hslToHex(h, Math.min(s + 30, 100), Math.max(l - 30, 15)),
    900: hslToHex(h, Math.min(s + 40, 100), Math.max(l - 40, 10)),
    950: hslToHex(h, Math.min(s + 50, 100), Math.max(l - 50, 5)),
  };
};

// ===========================================
// 🌈 GENERATED COLOR SCALES
// ===========================================
// Auto-generated from base colors - DO NOT EDIT MANUALLY

export const COLORS = {
  primary: generateColorScale(BASE_COLORS.primary),
  secondary: generateColorScale(BASE_COLORS.secondary),
  accent: generateColorScale(BASE_COLORS.accent),
  success: generateColorScale(BASE_COLORS.success),
  dark: generateColorScale(BASE_COLORS.dark),
} as const;

// ===========================================
// 🎯 SEMANTIC COLOR MAPPINGS
// ===========================================
// Map colors to semantic meanings for consistent usage

export const SEMANTIC_COLORS = {
  // Primary brand colors
  primary: BASE_COLORS.primary,
  secondary: BASE_COLORS.secondary,
  accent: BASE_COLORS.accent,

  // State colors
  success: BASE_COLORS.success,
  warning: BASE_COLORS.secondary,  // Using secondary for warnings
  error: BASE_COLORS.primary,      // Using primary for errors
  info: BASE_COLORS.accent,        // Using accent for info

  // Neutral colors
  neutral: '#6B7280',              // Gray-500
  muted: '#9CA3AF',                // Gray-400
} as const;

// ===========================================
// 🖼️ UI SYSTEM COLORS
// ===========================================
// Colors for UI elements and text

export const UI_COLORS = {
  // Backgrounds
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    inverse: BASE_COLORS.dark,
  },

  // Text colors
  text: {
    primary: BASE_COLORS.dark,
    secondary: '#374151',
    muted: '#6B7280',
    inverse: '#FFFFFF',
    link: BASE_COLORS.primary,
    linkHover: COLORS.primary[600],
  },

  // Border colors
  border: {
    default: '#E5E7EB',
    light: '#F3F4F6',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
    focus: BASE_COLORS.primary,
  },

  // Surface colors
  surface: {
    default: '#FFFFFF',
    raised: '#F9FAFB',
    overlay: 'rgba(0, 0, 0, 0.5)',
    overlayLight: 'rgba(255, 255, 255, 0.9)',
  },
} as const;

// ===========================================
// 🌅 GRADIENT DEFINITIONS
// ===========================================
// Pre-defined gradient combinations

export const GRADIENTS = {
  // Primary gradients
  primary: `linear-gradient(135deg, ${BASE_COLORS.primary} 0%, ${BASE_COLORS.secondary} 100%)`,
  primarySubtle: `linear-gradient(135deg, ${COLORS.primary[50]} 0%, ${COLORS.secondary[50]} 100%)`,

  // Secondary gradients
  secondary: `linear-gradient(135deg, ${BASE_COLORS.secondary} 0%, ${BASE_COLORS.success} 100%)`,
  secondarySubtle: `linear-gradient(135deg, ${COLORS.secondary[50]} 0%, ${COLORS.success[50]} 100%)`,

  // Accent gradients
  accent: `linear-gradient(135deg, ${BASE_COLORS.accent} 0%, ${BASE_COLORS.primary} 100%)`,
  accentSubtle: `linear-gradient(135deg, ${COLORS.accent[50]} 0%, ${COLORS.primary[50]} 100%)`,

  // Special gradients
  hero: `linear-gradient(135deg, ${BASE_COLORS.dark} 0%, ${BASE_COLORS.accent} 50%, ${BASE_COLORS.primary} 100%)`,
  heroOverlay: `linear-gradient(135deg, rgba(3, 3, 1, 0.8) 0%, rgba(84, 13, 110, 0.6) 50%, rgba(247, 56, 89, 0.4) 100%)`,

  // Subtle backgrounds
  subtle: `linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)`,
  subtleWarm: `linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)`,
} as const;

// ===========================================
// 🔧 UTILITY FUNCTIONS
// ===========================================

// Get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Get color from scale
export const getColorFromScale = (scale: ColorScale, shade: keyof ColorScale): string => {
  return scale[shade];
};

// Generate CSS custom properties for colors
export const generateColorCSS = (): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Base colors
  Object.entries(BASE_COLORS).forEach(([name, value]) => {
    cssVars[`--color-${name}`] = value;
  });

  // Color scales
  Object.entries(COLORS).forEach(([colorName, scale]) => {
    Object.entries(scale).forEach(([shade, value]) => {
      cssVars[`--color-${colorName}-${shade}`] = value;
    });
  });

  // Semantic colors
  Object.entries(SEMANTIC_COLORS).forEach(([name, value]) => {
    cssVars[`--color-semantic-${name}`] = value;
  });

  // UI colors (flattened)
  const flattenUIColors = (obj: any, prefix = ''): void => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        flattenUIColors(value, `${prefix}${key}-`);
      } else {
        cssVars[`--color-ui-${prefix}${key}`] = value as string;
      }
    });
  };

  flattenUIColors(UI_COLORS);

  return cssVars;
};

// ===========================================
// 📋 COLOR PALETTE DOCUMENTATION
// ===========================================
// For reference and documentation

export const COLOR_PALETTE_INFO = {
  primary: {
    name: 'Folly',
    hex: BASE_COLORS.primary,
    usage: 'Primary CTA buttons, links, active states, brand elements',
    accessibility: 'WCAG AA compliant on white backgrounds for 400+ shades'
  },
  secondary: {
    name: 'Arylide Yellow',
    hex: BASE_COLORS.secondary,
    usage: 'Secondary buttons, highlights, accents, warning states',
    accessibility: 'Use 600+ shades for text on light backgrounds'
  },
  accent: {
    name: 'Indigo',
    hex: BASE_COLORS.accent,
    usage: 'Headers, navigation, icons, special elements',
    accessibility: 'Excellent contrast for text and background usage'
  },
  success: {
    name: 'Light Sea Green',
    hex: BASE_COLORS.success,
    usage: 'Success states, confirmations, positive feedback',
    accessibility: 'Good contrast for success messaging'
  },
  dark: {
    name: 'Black',
    hex: BASE_COLORS.dark,
    usage: 'Primary text, backgrounds, overlays, high contrast elements',
    accessibility: 'Perfect for text and high contrast needs'
  }
} as const;

export default COLORS;