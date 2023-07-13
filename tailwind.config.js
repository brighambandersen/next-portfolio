/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#215481',
        secondary: '#808080',
        primaryLight: '#557597',
        secondaryDark: '#6d6d6d',
        whiteGray: '#f7f7f7'
      }
    }
  },
  plugins: []
};
