// import whiteTheme from './theme/white.theme'
// import darkTheme from './theme/dark.theme'
import type { Config } from 'tailwindcss'

const palitra = {
  c100: '#E7FFFE',
  c200: '#00FFF5',
  c300: '#00ADB5',
  c400: '#F6C90E',
  c500: '#F30A49',
  c600: '#393E46',
  c700: '#222831',
}


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: { 
      colors: {
        palitra: {
          c100: '#E7FFFE',
          c200: '#00FFF5',
          c300: '#00ADB5',
          c400: '#F6C90E',
          c500: '#F30A49',
          c600: '#393E46',
          c700: '#222831',
        },
        header: {
          text: palitra.c100,
          logo: palitra.c100,
          background: palitra.c600,
        },
        sidebar: {
          icons: {
            active: palitra.c200,
            passive: palitra.c100,
          },
          background: palitra.c600,
        },
        main: {
          figure: palitra.c100 + '22',
          background: palitra.c700,
        },
        home: {
          clock: {
            background: palitra.c600 + '22',
            shadow: palitra.c700,
            text: palitra.c200,
            seconds: {
              passive: palitra.c300 + '99',
              active: palitra.c200,
            },
            hand: {
              hour: palitra.c200,
              minute: palitra.c200,
              second: palitra.c200,
              dot: {
                background: palitra.c200,
                center: palitra.c100,
              },
            },
          },
        },
        todo: {
          border: {
            active: palitra.c500,
            passive: palitra.c300 + '00',
          },
          background: {
            active: 'transparent',
            passive: palitra.c600,
          },
          title: palitra.c100,
          date: palitra.c100 + '66',
          menu: {
            icons: palitra.c100,
            background: {
              main: palitra.c600 + '55',
              start: palitra.c600 + '55',
              center: palitra.c700 + '55',
              end: palitra.c700 + '55',
            },
          },
          button: {
            text: palitra.c200,
            background: palitra.c600,
            border: palitra.c200 + '22',
          },
        },
        note: {
          border: palitra.c300 + '00',
          title: palitra.c200 + '88',
          text: palitra.c100,
          date: palitra.c200 + '66',
          background: palitra.c600,
          menu: {
            icons: palitra.c100,
            background: {
              main: palitra.c600 + '55',
              start: palitra.c600 + '55',
              center: palitra.c700 + '55',
              end: palitra.c700 + '55',
            },
          },
          button: {
            text: palitra.c200,
            background: palitra.c600,
            border: palitra.c200 + '22',
          },
        },
        calendar: {
          border: palitra.c600,
          background: palitra.c600,
          header: {
            text: palitra.c100,
            background: 'transparent',
          },
          week: {
            text: palitra.c100,
            border: palitra.c100,
          },
          day: {
            passive: palitra.c100 + '55',
            active: palitra.c100,
            now: {
              text: palitra.c700,
              border: palitra.c400,
              background: palitra.c200,
            },
            background: {
              weekends: palitra.c700 + '99',
              working: 'transparent',
            },
          },
          button: {
            text: palitra.c200,
            background: palitra.c600,
            border: palitra.c200 + '22',
          },
          event: {
            border: palitra.c300 + '00',
            title: palitra.c100,
            background: palitra.c600,
            menu: {
              icons: palitra.c100,
              background: {
                main: palitra.c600 + '55',
                start: palitra.c600 + '55',
                center: palitra.c700 + '55',
                end: palitra.c700 + '55',
              },
            },
          },
        },
        settings: {
          title: palitra.c300,
          text: palitra.c100,
          border: palitra.c700,
        },
        modal: {
          background: {
            main: palitra.c700,
            card: palitra.c600,
          },
          title: palitra.c200,
          text: palitra.c100,
          input: {
            text: palitra.c100,
            background: 'transparent',
            border: palitra.c100,
          },
          error: palitra.c500,
          button: {
            text: palitra.c200,
            background: palitra.c700 + '55',
            border: palitra.c100,
          },
        },
        loader: palitra.c100,
      },
     },
  },
  plugins: [],
}
export default config
