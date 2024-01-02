'use client'
import useTodoStore from "@/store/todo/todo.store"
import { useStore } from "./useStore.hook"

const useTodo = () => {
  // const todo = useTodoStore(state => state)
  const todo = useStore(useTodoStore, (state) => state)

  return {...todo}
}

export default useTodo