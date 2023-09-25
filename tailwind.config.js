/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "attribution": "hsl(228, 45%, 44%)",
        "white": "hsl(0, 0%, 100%)",
        "light-gray": "hsl(212, 45%, 89%)",
        "grayish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        "sans": ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
