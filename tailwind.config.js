/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)', filter: 'brightness(1)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-6px)', filter: 'brightness(1.2)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(6px)', filter: 'brightness(0.9)' },
        },
        'pulse-error': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.8)', filter: 'brightness(1)' },
          '25%': { transform: 'scale(1.03)', filter: 'brightness(1.3)' },
          '50%': { transform: 'scale(1)', boxShadow: '0 0 20px 10px rgba(239, 68, 68, 0)', filter: 'brightness(0.95)' },
          '75%': { transform: 'scale(1.03)', filter: 'brightness(1.3)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(239, 68, 68, 0)', filter: 'brightness(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
        shake: 'shake 0.7s cubic-bezier(.36,.07,.19,.97) both',
        'pulse-error': 'pulse-error 0.7s cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [],
}
