const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      cyan: colors.cyan,
      gray: colors.trueGray,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      teal: colors.teal,
      dark: '#141f26',
      primary: '#2f7e84',
    },
    extend: {
      fontFamily: {
        heading: ['Integral CF', 'ui-sans-serif', 'system-ui'],
        subheading: ['Neue Montreal', 'ui-sans-serif', 'system-ui'],
        body: ['Proxima Nova', 'ui-sans-serif', 'system-ui'],
      },
      width: {
        'fit-content': 'fit-content',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
