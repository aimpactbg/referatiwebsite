// ===========================================
// 🎨 DESIGN SYSTEM CONFIGURATION
// ===========================================
// File: /config/design-system.ts

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  neutral: string;
}

export interface DesignSystemTheme {
  name: string;
  colors: ThemeColors;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Academic Theme Definition
export const academicTheme: DesignSystemTheme = {
  name: "academic",
  colors: {
    primary: "#f59e0b",      // yellow-400
    secondary: "#f97316",    // orange-500
    accent: "#8b5cf6",       // purple-600
    success: "#10b981",      // emerald-500
    warning: "#f59e0b",      // amber-500
    error: "#ef4444",        // red-500
    neutral: "#6b7280",      // gray-500
  },
  spacing: {
    xs: "0.5rem",    // 8px
    sm: "1rem",      // 16px
    md: "1.5rem",    // 24px
    lg: "2rem",      // 32px
    xl: "3rem",      // 48px
  },
  borderRadius: {
    sm: "0.25rem",   // 4px
    md: "0.5rem",    // 8px
    lg: "0.75rem",   // 12px
    xl: "1rem",      // 16px
  }
};

// Corporate Theme
export const corporateTheme: DesignSystemTheme = {
  name: "corporate",
  colors: {
    primary: "#2563eb",      // blue-600
    secondary: "#475569",    // slate-600
    accent: "#7c3aed",       // violet-600
    success: "#059669",      // emerald-600
    warning: "#d97706",      // amber-600
    error: "#dc2626",        // red-600
    neutral: "#64748b",      // slate-500
  },
  spacing: academicTheme.spacing,
  borderRadius: academicTheme.borderRadius,
};

// Design System Manager Class
export class DesignSystemManager {
  private currentTheme: DesignSystemTheme;

  constructor(theme: DesignSystemTheme = academicTheme) {
    this.currentTheme = theme;
  }

  // Apply theme to CSS variables
  applyTheme(theme: DesignSystemTheme): void {
    this.currentTheme = theme;

    if (typeof document !== 'undefined') {
      const root = document.documentElement;

      // Set color variables
      Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });

      // Set spacing variables
      Object.entries(theme.spacing).forEach(([key, value]) => {
        root.style.setProperty(`--spacing-${key}`, value);
      });

      // Set border radius variables
      Object.entries(theme.borderRadius).forEach(([key, value]) => {
        root.style.setProperty(`--radius-${key}`, value);
      });

      // Set theme name for conditional styling
      root.setAttribute('data-theme', theme.name);
    }
  }

  // Get current theme
  getCurrentTheme(): DesignSystemTheme {
    return this.currentTheme;
  }

  // Generate CSS variables object for SSR
  generateCSSVariables(): Record<string, string> {
    const variables: Record<string, string> = {};

    // Colors
    Object.entries(this.currentTheme.colors).forEach(([key, value]) => {
      variables[`--color-${key}`] = value;
    });

    // Spacing
    Object.entries(this.currentTheme.spacing).forEach(([key, value]) => {
      variables[`--spacing-${key}`] = value;
    });

    // Border Radius
    Object.entries(this.currentTheme.borderRadius).forEach(([key, value]) => {
      variables[`--radius-${key}`] = value;
    });

    return variables;
  }

  // Admin panel helper - get all available themes
  static getAvailableThemes(): DesignSystemTheme[] {
    return [academicTheme, corporateTheme];
  }
}

export default DesignSystemManager;