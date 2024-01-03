/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', '.src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-50': '#eef8ff',
        'gray-100': '#e0f2fe',
        'gray-200': '#bae5fd',
        'gray-600': '#0282c7',
        'primary-100': '#eceff2',
        'primary-300': '#b0bcc9',
        'primary-500': '#667c91',
        'secondary-400': '#32b9fe',
        'secondary-500': '#07a1f0',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
