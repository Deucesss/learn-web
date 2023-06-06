/** @type {import('tailwindcss').Config} */
/**
 * --color-slate-gray: 234 29% 20%;
   --color-charcoal-gray: 235 18% 26%;
   --color-grey: 231 7% 60%;
 * 
 */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      tomato: 'hsl(var(--color-tomato) / <alpha-value>)',
      slateGray: 'hsl(var(--color-slate-gray) / <alpha-value>)',
      charcoalGray: 'hsl(var(--color-charcoal-gray) / <alpha-value>)',
      grey: 'hsl(var(--color-grey) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)'
    },
    fontFamily: {
      'sans': ['Roboto']
    },
    extend: {

    },
  },
  plugins: [],
}

