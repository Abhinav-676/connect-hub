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
        paleyellow: '#FFFACD',
        pastelblue: "#AEEEEE",
        logoprimary: '#e7ae4c',
        logosecondary: '#453580'
      },
      spacing: {
        '128':'32rem',
        '200': '50rem',
        '300': '75rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

