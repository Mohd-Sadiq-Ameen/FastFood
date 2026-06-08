/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'sans-serif'],
      },
      colors: {
        gbgreen: '#22c55e',    // Replace with your exact brand green
        gbred: '#ef4444',
        gbyellow: '#facc15',
        gbblack: '#1e293b',
        gbgray: '#f8fafc',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};