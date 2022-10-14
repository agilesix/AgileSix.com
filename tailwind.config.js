// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      red: '#cc091c',
      grey: {
        light: '#ecf0f1',
        default: '#cbd5e0',
        medium: '#666464'
      },
      blue: {
        light: '#00b7ef',
        dark: '#002360'
      },
      transparent: 'transparent'
    },
    fontFamily: {
      'agile6': ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont'],
    }
  },
  variants: {},
  plugins: []
}
