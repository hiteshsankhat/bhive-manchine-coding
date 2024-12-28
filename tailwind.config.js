/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#000000",
          2: "#FFBB00",
        },
        button: {
          yellow: {
            light: "#FFCF4B",
            dark: "#27AE60",
          },
          grey: {
            light: "#F9F9F9",
            dark: "#CEC6C6",
          },
        },
        text: {
          main: "#262328",
          secondary: "#65624C",
        },
        grey: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#B7B6B8",
          5: "#E0E0E0",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: "58px", 
        h2: "36px",
        h3: "24px",
        h4: "20px",
        h5: "18px",
        h6: "16px",
      },
      lineHeight: {
        heading: "1.1",
      },
    },
  },
  plugins: [],
};
