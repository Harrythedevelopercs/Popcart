/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      invert: {
        25: ".25",
        50: ".5",
        75: ".75",
      },
      screens: {
        "2xl": { min: "1921px" },
        xl: { min: "1440px", max: "1920px" },
        lg: { min: "1024px", max: "1449px" },
        md: { min: "768px", max: "1023px" },
        sm: { min: "640px", max: "767px" },
        xs: { min: "300px", max: "639.5px" },
        "mr-xs": { max: "575px" },
        "mr-sm": "576px",
        "mr-md": "768px",
        "mr-lg": "992px",
        "mr-xl": "1200px",
        "mr-2xl": "1400px",
        "mr-3xl": "1699px",
      },
      colors: {
        primary: { 100: "#3EA99F" },
        secondary: { 100: "#2d2d2d", 200: "#000000" },
      },
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["var(--font-sfprodisplay)", "sans-serif"],
        secondary: ["var(--font-sfprodisplay)", "sans-serif"],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      backgroundPosition: {},

      backgroundImage: {},
      backdropBlur: {
        md: "8px",
      },
      transitionProperty: {
        scale: "scale",
        shadow: "box-shadow",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  plugins: [],
}
