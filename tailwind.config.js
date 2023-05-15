/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'main': '#EC7300',
      // #ECA459
      'red': '#DF6B5A',
      'blue': '#364BB3',
      'grey': '#EAEAEA',
      'tab': '#FAFAFA',
      'sell': '#F3F8FE',
      'buy': '#FDF3F4',
      'black': '#000000',
      'dark-grey': '#606060',
      'main-light': '#E1EEE8',
      'white': '#ffffff',
      'light-grey': '#DADADA'
    },
    textColor: {
      'main': '#EC7300',
      'white': '#FFFFFF',
      'black': '#000000',
      'red': '#DF6B5A',
      'blue': '#364BB3',
      'dark-grey': '#606060',
      'grey': '#434344'
    },
    extend: {}
  },
  plugins: []
};
