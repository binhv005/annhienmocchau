/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f8f4',
          100: '#e1f0e7',
          200: '#c4e2d0',
          300: '#99ccad',
          400: '#68ae84',
          500: '#439263',
          600: '#32754e',
          700: '#285d3f',
          800: '#234a34',
          900: '#1e3d2c',
          950: '#0e2218',
        },
        sage: {
          50: '#f5f7f5',
          100: '#e7ece7',
          200: '#cfdbcf',
          300: '#abc1ac',
          400: '#81a183',
          500: '#638465',
          600: '#4d694f',
          700: '#3f5440',
          800: '#344535',
          900: '#2c392d',
        },
        cream: {
          50: '#fcfbf8',
          100: '#f8f5ee',
          200: '#f2ecde',
          300: '#e9dec8',
          400: '#ddcbad',
          500: '#cdb28e',
        },
        wood: {
          50: '#faf6f2',
          100: '#f3ece3',
          200: '#e6d8c6',
          300: '#d5bda1',
          400: '#c19f7b',
          500: '#a8815b',
          600: '#8c6748',
          700: '#72513a',
          800: '#5e4331',
          900: '#4d372a',
        }
      },
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', '"Inter"', 'Roboto', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', '"Inter"', 'Roboto', 'sans-serif'],
        title: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', '"Inter"', 'Roboto', 'sans-serif'],
        accent: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', '"Inter"', 'Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(27, 43, 33, 0.08)',
        'card': '0 15px 35px -5px rgba(27, 43, 33, 0.1), 0 5px 15px rgba(0, 0, 0, 0.04)',
        'lift': '0 20px 40px -15px rgba(30, 61, 44, 0.18)',
        'glow': '0 0 25px rgba(67, 146, 99, 0.25)',
      }
    },
  },
  plugins: [],
}
