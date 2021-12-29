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
      cyan: colors.cyan,
      gray: colors.zinc,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      teal: colors.teal,
      dark: '#141f26',
      primary: '#2f7e84',
    },
    fontFamily: {
      sans: ['Neue Montreal', ...fontFamily.sans],
      mono: ['Stellar', ...fontFamily.mono],
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
