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
        'extra-bold': ['ExtraRound-Bold', 'sans-serif'],
        'extra-light': ['ExtraRound-Light', 'sans-serif'],
        'extra-medium': ['ExtraRound-Medium', 'sans-serif'],
        'extra-regular': ['ExtraRound-Regular', 'sans-serif'],
        'romy': ['Romy', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss'), 
    require('autoprefixer')
  ],
}