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
        primary: '#00bcd4',
        secondary: '#ff6b35',
        accent: '#4caf50',
        'dark': '#1a1a1a',
        'dark-secondary': '#2a2a2a',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0b0',
      },
    },
  },
  plugins: [],
}