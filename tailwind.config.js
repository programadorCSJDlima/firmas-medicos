/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
     screens:{
      'xxs':'280px',
      'xs':'350px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '2000px',
      '5xl': '2560px',
      '6xl': '3440px',
    },
    extend: {
      spacing: {
        'maxdesk': '1400px',
      },
        fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
        gridTemplateColumns: {
        '3-cols-custom': '1fr 2fr 1fr',
      }
    },
  },
  plugins: [],
}

