const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const flattenColorPalette = require('tailwindcss/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{ts,tsx,jsx}'],
  theme: {
    extend: {
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      colors: {
        primary: '#ff49db',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--color-${key}`, val]) // ✅ Prefixed color variables
  );

  addBase({
    ':root': newVars,
  });
}
