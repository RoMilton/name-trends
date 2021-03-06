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
    backgroundPosition: {
      'left-icon': '1rem center',
    },
    extend: {
      colors: {
        blue: '#73BBC9',
        red: '#C96D6F',
        yellow: '#FFF6EA',
        black: '#1D1313',
        brown: '#A69B94',
        'error-red': '#FE6362',
      },
      fontSize: {
        '4xl': '2.63rem',
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        icon: '3.5rem',
      },
      inset: {
        'table-heading': '280px',
      },
    },
  },
  variants: {
    borderRadius: ['first', 'last'],
    borderWidth: ['first', 'last'],
  },
  plugins: [],
};
