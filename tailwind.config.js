/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        'heroBg' : "url(/images/hero/heroBg.png)"
      },
      fontFamily: {
        matter: "matter",
      },
      colors: {
        blackShade:"#2a2c2d",
        skin:"#dcb688"
        
      },
    },
  },
  plugins: [],
}
