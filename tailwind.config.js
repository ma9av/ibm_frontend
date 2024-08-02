/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
        'dark-blue': '#1e3a8a',
        'sky-blue': '#60a5fa',
        },
    },
  },
  plugins: [],
}