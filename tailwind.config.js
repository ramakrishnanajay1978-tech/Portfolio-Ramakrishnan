/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#050714',
          900: '#080B1A',
          800: '#0D1128',
          700: '#131836',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#22D3EE',
        },
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #22D3EE 100%)',
        'grad-radial': 'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.25), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(139,92,246,0.35)',
        'glow-cyan': '0 0 40px rgba(34,211,238,0.35)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'gradient-shift': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 0.6 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-up': 'fade-up 0.8s ease forwards',
        ripple: 'ripple 0.6s linear',
      },
    },
  },
  plugins: [],
}
