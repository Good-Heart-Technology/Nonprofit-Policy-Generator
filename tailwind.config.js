/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cornflower': '#7189ff',
        'charcoal': '#394053',
        'gray': '#808080',
        'uranian': '#a0ddff',
        'rich-black': '#091D20',
      },
    },
  },
  plugins: [],
} 