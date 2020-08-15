module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['PT Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#73BBC9',
        red: '#C96D6F',
        yellow: '#FFF6EA',
        black: '#1D1313',
        brown: '#A69B94',
      },
      fontSize: {
        '4xl': '2.63rem',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  variants: {
    borderRadius: ['first', 'last'],
    borderWidth: ['first', 'last'],
  },
  plugins: [],
};
