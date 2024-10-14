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
      borderColor: {
        DEFAULT: '#D5DFE2',
      },
      fontFamily: {
        sans: ['DINOT', 'Arial', 'Helvetica', 'sans-serif'],
      },
      textColor: {
        DEFAULT: '#2742CB',
      },
    },
  },
  plugins: [],
}