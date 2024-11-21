/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      red: {
        DEFAULT: '#f3342d',
        dark: '#93061E'
      },
      yellow: '#FFD241',
      'off-white': '#FFF3E1'
    },
    extend: {
      fontFamily: {
        'ExtraRound-Regular': ['ExtraRound-Regular', 'sans-serif'],
        'ExtraRound-Bold': ['ExtraRound-Bold', 'sans-serif'],
        'ExtraRound-Light': ['ExtraRound-Light', 'sans-serif'],
        'ExtraRound-Medium': ['ExtraRound-Medium', 'sans-serif'],
        'Romy': ['Romy', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'), 
    require('autoprefixer')
  ],
}