/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f5f5f7',
          100: '#e8e8ed',
          200: '#d1d1d6',
          300: '#a1a1a6',
          400: '#86868b',
          500: '#515154',
          600: '#333336',
          700: '#1d1d1f',
          800: '#161617',
          900: '#0b0b0b',
          950: '#050505',
        },
        accent: {
          DEFAULT: '#ffffff',
          light: '#f5f5f7',
          dark: '#e8e8ed',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
