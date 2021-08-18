const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["IranSans"],
      },
      colors: {
        "charcoal-gray": "#373A3C",
        "warm-gray": "#55595C",
        "water-blue": "#1C7CD5",
        "dark-sky-blue": "#56C0E0",
        "blue-light": "#DCEDF6",
        brik: "#d9534f",
        silver: "#eceeef",
        "light-gray": "#dddddd",
        "arvan-green": "#4b713d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
