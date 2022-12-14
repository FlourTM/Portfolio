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
        primarycolor: '#B7CCC6',
        secondarycolor: '#AC0839',
    
        fontprimary: '#333E3C',
        fontsecondary: '#157A6E',
        fontbody: '#494C6F',
        fontaccent: '#AC0839',
        navhover: '#E05256',
    
        buttoncolor: '#AC0839',
        buttonhover: '#E05256',

        formbg: '#E9E9ED',
      }
    },
  },
  plugins: [],
}