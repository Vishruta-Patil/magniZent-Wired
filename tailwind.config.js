/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'pc': '1450px',
      '2xl': '1536px',
    },
    extend: {
    colors: {
      'primary-color': "#0072FF",
      'secondary-color': "#606467",
      'primary-pale': '#38bdf8',
      'white-neutral': "#fafafa",
      'dark-grey': '#141319',
      'border-color': '#dfe1e5',
      'box-shadow': '0 1px 6px 0 rgb(32 33 36 / 28%)',
    },
    fontFamily: {
      'roboto': ['Roboto Slab', 'serif']
    },
  }
   
  },
  plugins: [],
}
