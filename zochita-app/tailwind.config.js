/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-100vh-fix'),
  ],
}

