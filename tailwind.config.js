const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      width: {
        "200": "50rem",
      },
      colors: {
        accent: {
          "50": "var(--accent-50)",
          "100": "var(--accent-100)",
          "300": "var(--accent-300)",
          "400": "var(--accent-400)",
          "500": "var(--accent-500)",
          "600": "var(--accent-600)",
          "700": "var(--accent-700)",
          "900": "var(--accent-900)",
        },
      },
      zIndex: {
        header: "900",
      },
      fontFamily: {
        sans: ["itc-avant-garde-gothic-pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
};
