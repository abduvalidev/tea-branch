/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
        mulish: ["Mulish"],
      },
      fontSize: {
        10: ["0.625rem", "0.625rem"],
        13: ["0.8125rem", "0.9375rem"],
        15: ["0.9375rem", "1.375rem"],
        22: ["1.375rem", "1.375rem"],
        "twenty-eight": ["1.75rem", "2rem"],
        32: ["2rem", "2.5rem"],
        40: ["2.5rem", "3rem"],
      },
      spacing: {
        15: "0.9375rem",
        19: "1.1875rem",
        "twenty-eight": "1.75rem",
        30: "1.875rem",
        38: "2.375rem",
        42: "2.625rem",
        50: "3.125rem",
        sixty: "3.75rem",
        350: "21.875rem",
        base: "72.875rem",
      },
      colors: {
        brand: {
          "custom-gray": "#333333",
          red: "#EB5757",
          dark: "#545454",
          black: {
            100: "#F7F7F7",
            200: "#E4E4E4",
            300: "#969696",
            400: "#585757",
            500: "#1C1C1C",
          },
          gray: {
            400: "#84858A",
            900: "#323136"
          },
          green: {
            100: "#E5F7E7",
            200: "#B2E8B9",
            300: "#66D374",
            400: "#33C445",
            500: "#00B517",
          },
        },
      },
      letterSpacing: {
        wides: "-0.0125rem"
      },
      boxShadow: {
        'inset-border-green': 'inset 0 0 0 2px #33C445',
      },
    },
  },
  plugins: [],
};
