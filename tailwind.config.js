module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lghtblue: '#00A7E1',
        drkblue: '#111C4E',
        lghtyellow: '#F6F6F6'
      },
      fontFamily: {
        heebo: ['Heebo']
      },
      scale: {
        flip: '-1',
      },
      ringWidth: ['focus', 'active']

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
