'use client'

import { useStore } from "./useStore.hook"
import useNotesStore from "@/store/notes/notes.store"

const useNote = () => {
  // const todo = useTodoStore(state => state)
  const note = useStore(useNotesStore, (state) => state)

  return {...note}
}

export default useNote