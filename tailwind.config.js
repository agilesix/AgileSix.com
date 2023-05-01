// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      red: "#8A2A2B",
      grey: {
        light: "#D9D9D6",
        default: "#cbd5e0",
        medium: "#707372",
      },
      blue: {
        light: "#41B6E6",
        dark: "#003A70",
      },
      transparent: "transparent",
    },
    fontFamily: {
      agile6: ["Source Sans Pro", "-apple-system", "BlinkMacSystemFont"],
    },
  },
  variants: {},
  plugins: [],
}
