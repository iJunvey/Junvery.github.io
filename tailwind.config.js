/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      rotate: {
        '180': '180deg',
      },
      // Extend perspective utilities
      perspective: {
        '1000': '1000px',
      },
      // Extend backface visibility utilities
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      colors:{
        'backgroundColor':'#daeffc',
        'secondBackground':'#b8d5e6'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        CandyBeans: ['Candy Beans', 'sans-serif'],
        
      },
      keyframes: {
        propel: {
         '0%': { transform: 'translateX(0)' },
         '20%': { transform: 'translateX(25%)' },
         '40%': { transform: 'translateX(-25%)' },
        //  '60%': { transform: 'translateX(25%)' },
        //  '100%': { transform: 'translateX(-25%)' },
       },
     },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    flowbite.plugin(),
    function({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }
  ],
}

