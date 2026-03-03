import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42389e',
        'primary-dark': '#0f1026',
        accent: '#f9a71e',
        navy: '#1a1c3d',
        'navy-light': '#edecf6',
        'body-gray': '#5f5f60',
        'text-muted': '#8d8d8d',
        'text-light': '#dedede',
        heading: '#0E121B',
        dark: '#141B34',
        'footer-text': '#323338',
        'footer-heading': '#263238',
        'hero-muted': '#b0aad8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'merriweather-sans': ['Merriweather Sans', 'sans-serif'],
        satoshi: ['Satoshi', 'DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #42389e 0%, #0f1026 100%)',
        'text-gradient': 'linear-gradient(135deg, #42389e, #0f1026)',
      },
    },
  },
  plugins: [],
} satisfies Config
