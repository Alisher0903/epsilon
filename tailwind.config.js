/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: "#0B1484DE"
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