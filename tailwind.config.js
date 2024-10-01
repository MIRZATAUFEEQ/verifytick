/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '112': '28rem', // 448px
        '55':'14rem',
        '128': '60rem', // 512px
        '120':'35rem',
        // Add more custom widths if needed
      },
      colors: {
        'custom-green': '#0B3424', // Add your custom color here
        'custom-light-green': '#F5FFDE',
        'customColor': '#F3F6F4',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
}