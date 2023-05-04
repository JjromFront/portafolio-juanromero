/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      margin: {
        '15': '15px',
        '35': '35px',
        '40': '40px',
        '45': '45px'
      },
    },
    screens: {
      'xls':  '390px',
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px', 
    },
    colors: {
      pink: '#FB868E',
      orange: '#FCA840',
      cyan: {
        100: "#d8eaeb",
        200: "#D8E3FE",
      },
      gray: {
        99: "#808080",
        100: '#4E4E4E',
        200: '#263238',
        300: '#2A2D2F'
      },
      white: '#F2F2F2',
      'background-white': '#fff',
      black: '#000',
    },
    fontFamily: {
      primary: ['Voces', 'sans-serif'],
      secondary: ['Inter', 'sans-serif']  
      },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
