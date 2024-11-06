/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header" : "url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}

