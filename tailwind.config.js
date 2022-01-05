const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      teal: colors.teal,
      gray: colors.slate,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      teal: colors.teal,
      dark: '#141f26',
      paradiso: {
        DEFAULT: '#2f7e84',
        50: '#f5f9f9',
        100: '#eaf2f3',
        200: '#cbdfe0',
        300: '#accbce',
        400: '#6da5a9',
        500: '#2f7e84',
        600: '#2a7177',
        700: '#235f63',
        800: '#1c4c4f',
        900: '#173e41',
        1000: '#15383b',
        1100: '#112f31',
        1200: '#0e2527',
        1300: '#0b1e20',
      },
      shark: {
        DEFAULT: '#141F26',
        50: '#f3f4f4',
        100: '#e8e9e9',
        200: '#c4c7c9',
        300: '#a1a5a8',
        400: '#5b6267',
        500: '#141f26',
        600: '#121c22',
        700: '#0f171d',
        800: '#0c1317',
        900: '#0a0f13',
      },
    },
    fontFamily: {
      sans: ['Neue Montreal', ...fontFamily.sans],
      mono: ['Fuji Sans', ...fontFamily.mono],
    },
    extend: {
      width: {
        'fit-content': 'fit-content',
      },
      zIndex: {
        '-10': '-10',
      },
      width: {
        'fit-content': 'fit-content',
      },
      aspectRatio: {
        '9/16': '9 / 16',
        '4/5': '4 / 5',
        '5/4': '5 / 4',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
