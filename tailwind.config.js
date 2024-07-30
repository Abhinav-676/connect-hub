/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayblue: '#cfd8dc', 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

