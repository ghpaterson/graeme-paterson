/** @type {import('tailwindcss').Config} */

const portrait = "url('/images/portrait-cropped.png')";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Portrait: portrait,
      },
    },
  },
  plugins: [],
};
