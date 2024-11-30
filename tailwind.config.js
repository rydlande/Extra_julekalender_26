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
      },
      keyframes: {
        fly: {
          '0%': { transform: 'translateX(-100%)', top: '30%' },
          '100%': { transform: 'translateX(100vw)', top: '20%' },
        },
        flyReverse: {
          '0%': { transform: 'translateX(100vw)', top: '50%', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateX(-100%)', top: '60%', opacity: '1' },
        },
      },
      animation: {
        fly: 'fly 10s linear forwards',
        'fly-reverse': 'flyReverse 10s linear forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss'), 
    require('autoprefixer')
  ],
}