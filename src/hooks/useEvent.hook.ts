'use client'
import useEventsStore from "@/store/calendar/event.store"
import { useStore } from "./useStore.hook"

const useEvent = () => {
  const event = useStore(useEventsStore, (state) => state)

  return {...event}
}

export default useEvent