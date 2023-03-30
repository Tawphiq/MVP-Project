/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgGame':"url('./components/images/bgGame4.jpg')"
      }
    },
  },
  plugins: [],
}

