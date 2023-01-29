/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "dark-green": "#1E5128",
      "green": "#4E9F3D",
      "soft-green": "#B0F890",
      "light-green": "#D8E9A8",
    }
  },
  plugins: [],
}
