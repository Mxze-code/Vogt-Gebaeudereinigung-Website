/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black:      '#06080e',
          deep:       '#090c14',
          navy:       '#0b1828',
          navy2:      '#0f2035',
          blue:       '#1358a0',
          blueMid:    '#1a6abf',
          blueLight:  '#2579d4',
          silverDark: '#9aaabb',
          silver:     '#c2c8d4',
          silverL:    '#dce2ec',
          silverLL:   '#edf0f5',
          gray:       '#6a7c90',
        },
      },
      fontFamily: {
        inter:      ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(160deg, #edf0f5 0%, #c2c8d4 60%, #9aaabb 100%)',
        'blue-gradient':   'linear-gradient(135deg, #1358a0 0%, #1a6abf 100%)',
      },
    },
  },
  plugins: [],
}
