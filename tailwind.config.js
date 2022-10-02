/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#004AAC",

          secondary: "#E9498C",

          accent: "#FFF133",

          neutral: "#1A1A1A",

          "base-100": "#FFFFFF",

          info: "#4AA8BF",

          success: "#81328F",

          warning: "#EF8234",

          error: "#EA4034",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
}
