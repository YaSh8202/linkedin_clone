/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3f4f6",
        LinkedinBlue: "#0a66c2",
        brown: "#8F5849",
      },
      backgroundImage: {
        "profile-bg": 'url("/profilebg.svg")',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
