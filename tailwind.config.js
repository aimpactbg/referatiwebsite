/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  // 1. CONTENT
  // Scans these files to generate CSS only for the classes you use.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  // 2. THEME
  // Extending Tailwind's default theme with our custom design system.
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F73859",
          50: "#fef1f3",
          100: "#fee2e6",
          200: "#fdc9d1",
          300: "#fba1b0",
          400: "#f76b84",
          500: "#F73859",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        secondary: {
          DEFAULT: "#E5D352",
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#E5D352",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
        accent: "#540D6E",
        success: "#00BFB2",
        dark: "#030301",
      },
      fontFamily: {
        primary: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        secondary: [
          "Playfair Display",
          "Georgia Pro",
          "Georgia",
          "Times",
          "Times New Roman",
          "serif",
        ],
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
      },
    },
  },

  // 3. PLUGINS
  // A single, correctly structured plugin for all custom styles.
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      // Base styles (resets, global fonts)
      addBase({
        html: {
          fontFamily: theme("fontFamily.primary"),
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
        body: {
          color: theme("colors.gray.800"),
        },
      });

      // Custom utility classes
      addUtilities({
        ".text-gradient-primary": {
          background: `linear-gradient(135deg, ${theme("colors.primary.DEFAULT")} 0%, ${theme("colors.secondary.DEFAULT")} 100%)`,
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".bg-gradient-brand": {
          "background-image": `linear-gradient(to right, ${theme("colors.primary.DEFAULT")}, ${theme("colors.secondary.DEFAULT")}, ${theme("colors.accent.DEFAULT")})`,
        },
      });

      // Custom component classes
      addComponents({
        ".container": {
          "@apply max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8": {},
        },
        ".btn-primary": {
          "@apply inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 text-white":
            {},
          background: `linear-gradient(135deg, ${theme("colors.primary.DEFAULT")} 0%, ${theme("colors.secondary.DEFAULT")} 100%)`,
          "&:hover": {
            "@apply shadow-lg scale-105": {},
          },
        },
        ".btn-secondary": {
          "@apply inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full border-2 transition-all duration-300":
            {},
          borderColor: theme("colors.primary.DEFAULT"),
          color: theme("colors.primary.DEFAULT"),
          "&:hover": {
            backgroundColor: theme("colors.primary.DEFAULT"),
            color: "white",
          },
        },
      });
    }),
  ],
};
