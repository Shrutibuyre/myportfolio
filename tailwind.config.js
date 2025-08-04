/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f9fa',
          100: '#b3f0f2',
          200: '#80e7ea',
          300: '#4ddde2',
          400: '#1ad4da',
          500: '#00ADB5',
          600: '#009ca4',
          700: '#008b93',
          800: '#007a82',
          900: '#006971',
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};