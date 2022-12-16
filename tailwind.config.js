/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '820px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'navlg': '940px',
      },
      
      colors: {
        primarycolor: '#2f4454',
        secondarycolor: '#213443',
        accentcolor: '#c96567',
        buttonhover: '#9E5254',
        formbg: '#d5d5d5',
    
        fontprimary: '#d5d5d5',
        fontsecondary: '#9099a2',
        fontbody: '#8D9AB5',
        navhover: '#c96567',
      },

      animation: {
        shine:"shine 1s",
      },

      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
}