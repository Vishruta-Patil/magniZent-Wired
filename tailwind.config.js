/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'pc': '1450px',
      '2xl': '1536px',
    },
    colors: {
      'primary-color': "#0072FF",
      'secondary-color': "#E6E6E6",
      'primary-pale': '#38bdf8',
      'white-neutral': "#fafafa",
      'dark-grey': '#141319',
      'border-color': '#dfe1e5',
      'box-shadow': '0 1px 6px 0 rgb(32 33 36 / 28%)',
    }
   
  },
  plugins: [],
}
