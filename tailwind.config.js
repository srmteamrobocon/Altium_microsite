/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom_dark': 'rgb(7, 7, 9)', // Replace with your custom color code
      },
    },
  },
  plugins: [],
}

