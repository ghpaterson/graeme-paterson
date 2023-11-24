/** @type {import('tailwindcss').Config} */

const portrait = "url('/images/portrait-cropped.png')";
const bicyle = "url('/images/bicycle.png')";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    rotate: {
      "-20": "-20deg",
    },
    extend: {
      backgroundImage: {
        Portrait: portrait,
        Bicycle: bicyle,
      },
    },
  },
  plugins: [],
};
