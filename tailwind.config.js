/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#274a6d",
        secondary:"#4babe8"
      },
      container:{
        center:"true",
        padding:{
          default:"1rem",
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
}

