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
      tomato: "hsl(var(--color-tomato) / <alpha-value>)",
      slateGray: "hsl(var(--color-slate-gray) / <alpha-value>)",
      charcoalGray: "hsl(var(--color-charcoal-gray) / <alpha-value>)",
      grey: "hsl(var(--color-grey) / <alpha-value>)",
      white: "hsl(var(--color-white) / <alpha-value>)",
    },
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {},
  },
  plugins: [],
};
