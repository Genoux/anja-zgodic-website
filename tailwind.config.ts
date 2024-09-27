/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#D5DFE2',
        primary: '#2742CB',
      },
      fontFamily: {
        sans: ['DINOT', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}