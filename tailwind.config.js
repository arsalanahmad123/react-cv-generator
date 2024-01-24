/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 10px 20px -15px rgb(79,70,229)',
      }
    },
  },
  plugins: [],
}

