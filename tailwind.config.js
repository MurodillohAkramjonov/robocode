/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f4ff',
          100: '#bae0ff',
          200: '#7cc4ff',
          300: '#36a3ff',
          400: '#0084ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        neon: {
          blue: '#00d4ff',
          cyan: '#22d3ee',
          purple: '#a855f7',
          pink: '#ec4899',
        },
        dark: {
          50: '#0f172a',
          100: '#0a0f1f',
          200: '#070b18',
          300: '#040712',
          400: '#02040a',
          500: '#000000',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2)' },
        },
        'shimmer': {
          '0%': { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at center, rgba(0,212,255,0.15), transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
