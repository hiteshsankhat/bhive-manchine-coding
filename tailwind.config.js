/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFBB00",
        lightYellow: "#FFCF4B",
        darkYellow: "#27AE60",
        lightGrey: "#F9F9F9",
        darkGrey: "#CEC6C6",
        textMain: "#262328",
        textSecondary: "#65624C",
        grey1: "#333333",
        grey2: "#4F4F4F",
        grey3: "#828282",
        grey4: "#B7B6B8",
        grey5: "#E0E0E0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
