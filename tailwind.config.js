/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['KingRimba', 'sans-serif'],
        'kingrimba': ['KingRimba', 'sans-serif'],
        'bulgatti': ['Bulgatti', 'sans-serif'],
        'tuesday': ['Tuesday Lovely', 'cursive'],
        'martha': ['Martha Hayden', 'sans-serif'],
        'pixel': ['"Pixelify Sans"', 'sans-serif'],
      },
      colors: {
        'lokanta': {
          'cream': '#F4EADA',
          'paper': '#FDF8EC',
          'red': '#A32125',
          'darkred': '#7E191C',
          'ink': '#2B2420',
          'gold': '#C98B2D',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'kofte-flip': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(180deg)' },
          '100%': { transform: 'translateY(0) rotate(360deg)' },
        },
        'bubble-pop': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '70%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-up-1': 'fade-up 0.7s ease-out 0.1s both',
        'fade-up-2': 'fade-up 0.7s ease-out 0.25s both',
        'fade-up-3': 'fade-up 0.7s ease-out 0.4s both',
        'fade-up-4': 'fade-up 0.7s ease-out 0.55s both',
        'marquee': 'marquee 35s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'kofte-flip': 'kofte-flip 0.7s ease-in-out',
        'bubble-pop': 'bubble-pop 0.4s steps(5, end) both',
      },
    },
  },
  plugins: [],
};
