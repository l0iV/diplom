/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        mini: "12px",
        medium: "18px",
        large: "20px",
        mega: "32px",
      },
      colors: {
        orange: "#EA5349",
        yellow: "#F4E656",
        orangeLogo: "rgb(201 70 62)",
        cyan: "#7DC7BA",
        pink: "#D01F7C",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        CG: "CenturyGothic",
        FG: "FranklinGH",
      },
    },
  },
  plugins: [],
};
