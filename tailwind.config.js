/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
           "./pages/**/*.tsx",
           "./components/**/*.{tsx,js}"
          ],
  theme: {
    extend: {
      colors: {
        "bgcolor": {
          500: "#BF5060"
        }
      }
    },
  },
  plugins: [],
}