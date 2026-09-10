/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040d1c',
          900: '#081935',
          850: '#081935',
          800: '#0c2247',
          700: '#122f5c',
          600: '#1a3e75',
        },
        gold: {
          600: '#c2993f',
          500: '#D8AE55',
          450: '#D8AE55',
          400: '#D8AE55',
          300: '#e8c87f',
          200: '#f3e0b2',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F4F8',
          200: '#E5EAF1',
          300: '#D5DFEC',
        },
      },
      fontFamily: {
        serif: ['"Castoro"', '"Castoro Titling"', 'Georgia', 'serif'],
        castoro: ['"Castoro"', '"Castoro Titling"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(8, 25, 53, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(8, 25, 53, 0.16)',
      }
    },
  },
  plugins: [],
}
