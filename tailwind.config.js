/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body:    ['var(--font-inter)',   'sans-serif'],
      },
      colors: {
        fire: {
          DEFAULT: '#ff4500',
          2: '#ff8c00',
          3: '#ffb347',
          dark: '#cc3700',
        },
        dark: {
          900: '#06060a',
          800: '#0d0d14',
          700: '#12121c',
          600: '#1a1a2e',
        },
      },
      backgroundImage: {
        'grad-fire':  'linear-gradient(135deg, #ff4500 0%, #ff8c00 60%, #ffb347 100%)',
        'grad-dark':  'linear-gradient(160deg, #06060a 0%, #0d0d14 50%, #06060a 100%)',
        'mesh-1': `
          radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,69,0,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 80% 30%, rgba(120,40,200,0.05) 0%, transparent 60%)
        `,
        'mesh-2': `
          radial-gradient(ellipse 60% 60% at 80% 60%, rgba(255,69,0,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 10% 20%, rgba(30,80,200,0.05) 0%, transparent 60%)
        `,
      },
      animation: {
        'orb-float':  'orbFloat 12s ease-in-out infinite',
        'card-float': 'cardFloat 6s ease-in-out infinite',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'wa-bounce':  'waBounce 4s ease-in-out infinite',
        'ticker':     'ticker 28s linear infinite',
        'scroll-dot': 'scrollDot 1.6s ease-in-out infinite',
      },
      keyframes: {
        orbFloat: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%':     { transform: 'translate(-20px,30px) scale(0.97)' },
        },
        cardFloat: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(255,69,0,0.5)' },
          '50%':     { boxShadow: '0 0 0 8px rgba(255,69,0,0)' },
        },
        waBounce: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollDot: {
          '0%,100%': { transform: 'translateY(0)', opacity: 1 },
          '50%':     { transform: 'translateY(8px)', opacity: 0 },
        },
      },
      boxShadow: {
        'fire-sm': '0 4px 24px rgba(255,69,0,0.35)',
        'fire-lg': '0 12px 48px rgba(255,69,0,0.45)',
        'card':    '0 32px 72px rgba(0,0,0,0.5)',
        'float':   '0 20px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
