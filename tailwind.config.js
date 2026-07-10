/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#14201C', soft: '#5C6863' },
        paper: '#F3EFE4',
        maroon: { DEFAULT: '#7A2530', dark: '#5C1B24', light: '#93313D' },
        brass: { DEFAULT: '#B0904F', light: '#D4B876' },
        sage: { DEFAULT: '#4B6358', light: '#6B8377' },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 8px 30px -12px rgba(20, 32, 28, 0.25)',
        ticket: '0 12px 40px -14px rgba(20, 32, 28, 0.35)',
      },
      borderRadius: { card: '1.25rem' },
    },
  },
  plugins: [],
};
