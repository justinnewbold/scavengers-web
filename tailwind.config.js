/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        'primary-light': '#8B85FF',
        secondary: '#00D9FF',
        accent: '#FF6B6B',
        background: '#0F0F1A',
        'background-secondary': '#1A1A2E',
        surface: '#1E1E32',
        border: '#3A3A5A',
      },
    },
  },
  plugins: [],
}
