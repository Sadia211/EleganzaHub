/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   fontFamily:{
    vollkorn: "'Vollkorn', serif"
   }



    },
  },
  plugins: [require("daisyui")],
}

