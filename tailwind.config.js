const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Neue Montreal', ...fontFamily.sans],
      mono: ['Fuji Sans', ...fontFamily.mono],
    },
    extend: {
      colors: {
        'jeep-green': {
          DEFAULT: '#2A3D2B',
        },
        'jeep-blue': {
          DEFAULT: '#5B787A',
        },
        'jeep-sand': {
          DEFAULT: '##A9876C',
        },
        brand: {
          DEFAULT: '#2f7e84',
          50: '#E8F6F7',
          100: '#CEEBEE',
          200: '#9DD8DC',
          300: '#6CC4CB',
          400: '#40ADB5',
          500: '#2F7E84',
          600: '#256569',
          700: '#1C4C4F',
          800: '#133235',
          900: '#09191A',
        },
        dark: {
          DEFAULT: '#141F26',
          50: '#E1EAEF',
          100: '#C3D4DF',
          200: '#8AACC1',
          300: '#53819D',
          400: '#334F61',
          500: '#141F26',
          600: '#10191E',
          700: '#0C1317',
          800: '#090E11',
          900: '#040507',
        },
      },
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
      backgroundImage: {
        texture: "url('/static/images/texture.png')",
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
