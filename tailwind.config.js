/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barLow:['"Barlow Condensed"','tahoma'],
      },
      colors:{
        primary:'#14605B',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl'), fontWeight:theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.3xl') },
        'h4': { fontSize: theme('fontSize.2xl') },
      })
    })
  ],
  // corePlugins:{
  //   preflight:false,
  // }
}