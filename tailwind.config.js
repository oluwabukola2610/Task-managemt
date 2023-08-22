/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textGreen: "#5B8A52",
        lightGreen: "#85FA98",
        bgDark: "#050505",
      },
    },
    screens: {
      xs: "475px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
  },
  plugins: [require("daisyui")],
};
