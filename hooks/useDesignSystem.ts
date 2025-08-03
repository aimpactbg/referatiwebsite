// ===========================================
// 🪝 DESIGN SYSTEM REACT HOOK
// ===========================================
// File: /hooks/useDesignSystem.ts

import { useEffect, useState } from 'react';
import { DesignSystemManager, DesignSystemTheme, academicTheme } from '@/config/design-system';

export const useDesignSystem = (initialTheme?: DesignSystemTheme) => {
  const [designSystem] = useState(() => new DesignSystemManager(initialTheme || academicTheme));
  const [currentTheme, setCurrentTheme] = useState(designSystem.getCurrentTheme());

  const switchTheme = (newTheme: DesignSystemTheme) => {
    designSystem.applyTheme(newTheme);
    setCurrentTheme(newTheme);

    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('design-theme', JSON.stringify(newTheme));
    }
  };

  // Apply theme on mount and load from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('design-theme');
      if (savedTheme) {
        try {
          const theme = JSON.parse(savedTheme);
          switchTheme(theme);
        } catch (error) {
          console.warn('Invalid saved theme, using default');
          designSystem.applyTheme(currentTheme);
        }
      } else {
        designSystem.applyTheme(currentTheme);
      }
    }
  }, []);

  return {
    currentTheme,
    switchTheme,
    designSystem,
    colors: currentTheme.colors,
  };
};