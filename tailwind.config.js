/** @type {import('tailwindcss').Config} */

const portrait = "url('/images/portrait-cropped.png')";
const bicyle = "url('/images/bicycle.png')";
const farm = "url('/images/Fence.JPG')";
const picnic = "url('/images/picnic.JPG')";

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
        Farm: farm,
        Picnic: picnic,
      },
      fontFamily: {
        neuton: ["Neuton", "serif"],
      },
      colors: {
        bone: "#F6F6F6",
        moss: "#E7F1BB",
        thistle: "#D5C3D5",
        melon: "#EDB7AB",
        sand: "#EED0B6",
      },
    },
  },
  plugins: [],
};
