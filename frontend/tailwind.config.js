/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#12396d',
          800: '#0b2a5b',
          950: '#04142e',
        },
        ocean: {
          DEFAULT: '#1ea7e1',
          dark: '#147fb1',
        },
        sky: {
          DEFAULT: '#1ea7e1',
          light: '#7fd3f5',
          soft: '#e8f7fd',
        },
        growth: {
          DEFAULT: '#3fd39a',
          dark: '#0a7f53',
          light: '#9be8c9',
          soft: '#e9f9f2',
        },
        mist: '#f4f8fb',
        muted: '#64748b',
        line: '#e2e8f0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
