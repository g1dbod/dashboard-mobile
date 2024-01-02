'use client'
import { useStore } from "./useStore.hook"
import useThemeStore from "@/store/theme/theme.store"

const useTheme = () => {
  // const todo = useTodoStore(state => state)
  const theme = useStore(useThemeStore, (state) => state)

  return {...theme}
}

export default useTheme