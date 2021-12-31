const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // TODO ==> for applying themes
      "primary-100": "var(--theme-primary-100)",
      "primary-200": "var(--theme-primary-200)",
      "primary-300": "var(--theme-primary-300)",
      "primary-400": "var(--theme-primary-400)",
      "primary-500": "var(--theme-primary-500)",
      "primary-600": "var(--theme-primary-600)",
      "primary-700": "var(--theme-primary-700)",
      "primary-800": "var(--theme-primary-800)",
      "primary-900": "var(--theme-primary-900)",
      "secondary-100": "var(--theme-secondary-100)",
      "secondary-200": "var(--theme-secondary-200)",
      "secondary-300": "var(--theme-secondary-300)",
      "secondary-400": "var(--theme-secondary-400)",
      "secondary-500": "var(--theme-secondary-500)",
      "secondary-600": "var(--theme-secondary-600)",
      "secondary-700": "var(--theme-secondary-700)",
      "secondary-800": "var(--theme-secondary-800)",
      "secondary-900": "var(--theme-secondary-900)",
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      warmGray: colors.warmGray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
