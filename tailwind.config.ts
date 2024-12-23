import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#303030',
        lighter: '#606060',
        light: '#2F2F2F',
        dark: '#242424',
        darker: '#1B1B1B',
        darkest: '#101010',
      },
      transitionProperty: {
        dimensions: 'width, height',
      },
      screens: {
        'desktop-1080': '1281px',
        'desktop-1440': '1921px',
      },
    },
  },
  plugins: [],
} satisfies Config
