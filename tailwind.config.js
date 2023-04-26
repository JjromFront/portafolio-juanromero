/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
      cyan: '#D8E3FE',
      gray: {
        99: "#808080",
        100: '#4E4E4E',
        200: '#263238',
        300: '#2A2D2F'
      },
      white: '#F2F2F2',
      'background-white': '#F6F6F6',
      black: '#000',
    },
    fontFamily: {
      primary: ['Open Sans', 'sans-serif'],
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
