module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),

          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}