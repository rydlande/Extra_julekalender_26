/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#FFFFFF',
      red: {
        DEFAULT: '#f3342d',
        dark: '#93061E'
      },
      yellow: '#FFD241',
      'off-white': '#FFF3E1'
    },
    extend: {},
  },
  plugins: [],
}

