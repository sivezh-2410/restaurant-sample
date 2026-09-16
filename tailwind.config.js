/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ember: {
          50: '#fdf6f0',
          100: '#fae8d9',
          200: '#f4cda9',
          300: '#edab78',
          400: '#e58a52',
          500: '#dc6b34',
          600: '#c9522a',
          700: '#a63e24',
          800: '#833322',
          900: '#6b2c1f',
          950: '#3a1610',
        },
        saffron: {
          50: '#fefce8',
          100: '#fdf3c7',
          200: '#fae58a',
          300: '#f7ce4a',
          400: '#f0b423',
          500: '#d99216',
          600: '#bc6f12',
          700: '#955112',
          800: '#7c4016',
          900: '#663417',
        },
        charcoal: {
          50: '#f6f6f5',
          100: '#e7e5e3',
          200: '#d0ccc8',
          300: '#b0a9a2',
          400: '#8f857c',
          500: '#766c63',
          600: '#5d544c',
          700: '#4a423b',
          800: '#3a332e',
          900: '#2b2521',
          950: '#1a1613',
        },
        cream: '#faf7f2',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-down': 'fadeDown 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
