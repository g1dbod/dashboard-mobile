import whiteTheme from './theme/white.theme'
import darkTheme from './theme/dark.theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { ...darkTheme },
  },
  plugins: [],
}
export default config
