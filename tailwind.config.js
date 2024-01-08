/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#eef8ff'",
        "gray-100": "#e0f2fe",
        "gray-200": "#bae5fd",
        "gray-600": "#0282c7",
        "primary-100": "#e2e8eb",
        "primary-300": "#a1b4bf",
        "primary-500": "#587382",
        "primary-700": "#42505c",
        "primary-900": "#353d44",
        "secondary-400": "#32b9fe",
        "secondary-500": "#07a1f0",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
