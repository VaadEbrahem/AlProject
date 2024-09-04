/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': 'rgb(50, 70, 69)', 
        'gradient-start': '#7BD706',
        'gradient-middle': '#02CE80',
      },


      screens: {
        'sm': '700px', // Add a custom screen size
      },

    },

  },
  plugins: [],
}
