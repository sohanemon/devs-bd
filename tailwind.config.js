/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#289BDE",
          secondary: "#1D1D1D",
          info: "#242424",
          accent: "#777777",
          footer: "#161616",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
