/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBg: "#0B1484",
        headColor: "#2d7272",
        infoColor: "#3a7d7d"
      },
      fontFamily: {
        inika: ["Inika", "serif"],
      },
      fontSize: {
        xxl: "2.3rem",
      }
    },
  },
  plugins: [],
}