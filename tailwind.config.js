/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4A13',
          light: '#377E22',
          lighter: '#65B32E',
        },
        secondary: {
          DEFAULT: '#8B5E34',
          light: '#C4A484',
        },
        background: {
          light: '#F8FAF5',
          DEFAULT: '#F0F4EC',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        leafGrow: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        leafGrow: 'leafGrow 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.7s ease-out forwards',
        slideUp: 'slideUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};