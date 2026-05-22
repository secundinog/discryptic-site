import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'site-white': 'var(--color-white)',
        'site-black': 'var(--color-black)',
        'gray-200': 'var(--color-gray-200)',
        'gray-400': 'var(--color-gray-400)',
        'gray-600': 'var(--color-gray-600)',
        'gray-800': 'var(--color-gray-800)',
        'accent': 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['"42dot Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
      },
      fontSize: {
        '2xs': ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
        '5xl': ['48px', { lineHeight: '60px', letterSpacing: '-0.02em' }],
        '6xl': ['60px', { lineHeight: '72px', letterSpacing: '-0.02em' }],
        '7xl': ['72px', { lineHeight: '90px', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        btn: 'var(--button-radius)',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

export default config
