/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      colors: {
        blue: '#63b3ed',
        teal: '#4fd1c5',
        amber: '#f6ad55',
        bg: '#07090f',
        bg2: '#0d1117',
        card: '#111827',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'mesh': 'mesh 8s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        mesh: {
          '0%': { transform: 'translate(0%,0%) scale(1)' },
          '100%': { transform: 'translate(3%,3%) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
