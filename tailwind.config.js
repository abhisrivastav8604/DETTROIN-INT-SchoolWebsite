/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0B0E14',
        surface: '#0F1420',
        'surface-2': '#161C2D',
        'surface-3': '#1E2540',
        text: '#F0EDE6',
        'text-muted': '#9DA3AE',
        'text-dim': '#6B7280',
        amber: '#F5A623',
        rose: '#E8375A',
        emerald: {
          DEFAULT: '#4F9E7E',
          light: '#6BBD9A',
        },
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #F5A623, #E8375A)',
        'gradient-alt': 'linear-gradient(135deg, #4F9E7E, #2563EB)',
        'mesh-1': 'radial-gradient(at 40% 20%, hsla(28,100%,55%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(353,84%,55%,0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,94%,50%,0.08) 0px, transparent 50%)',
        'mesh-2': 'radial-gradient(at 80% 50%, hsla(160,75%,40%,0.12) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(240,70%,60%,0.10) 0px, transparent 50%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,166,35,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245,166,35,0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      lineHeight: {
        'tight-2': '1.15',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
