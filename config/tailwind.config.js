// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './app/components/**/*.{html,erb,js}',
    './app/components/**/*.rb',
    './app/packages/**/*.{erb,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
//         sans: ['Inter var', 'Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'fade-in': {
          '0%': { visibility: 'hidden', opacity: 0, transform: 'scale(.99)' },
          '100%': { visibility: 'visible', opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'fade-in': 'fade-in 0.2s ease-out 1'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
