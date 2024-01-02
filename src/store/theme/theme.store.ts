// import customTheme from '../../../theme/custom.theme'
// import darkTheme from '../../../theme/dark.theme'
// import whiteTheme from '../../../theme/white.theme'
// import { create } from 'zustand'
// import { createJSONStorage, devtools, persist } from 'zustand/middleware'

// export interface ITheme {
//   colors: any
// }

// export interface ThemeState {
//   activeTheme: ITheme
//   darkTheme: ITheme
//   whiteTheme: ITheme
//   customTheme: ITheme
//   editCustomTheme: (theme: any) => void
//   setActiveTheme: (theme: ITheme) => void
// }

// const useThemeStore = create<ThemeState>()(
//   devtools(
//     persist(
//       (set) => ({
//         activeTheme: darkTheme,
//         darkTheme: darkTheme,
//         whiteTheme: whiteTheme,
//         customTheme: customTheme,
//         editCustomTheme(theme) {},
//         setActiveTheme(theme) {
//           set({
//             activeTheme: theme,
//           })
//         },
//       }),
//       {
//         name: 'theme',
//         storage: createJSONStorage(() => localStorage),
//       }
//     )
//   )
// )

// export default useThemeStore
