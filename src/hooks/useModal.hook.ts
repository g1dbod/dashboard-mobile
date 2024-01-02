'use client'
import { useState } from "react"


const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  const toggleModal = () => {
    setIsShowing(!isShowing)
  }

  const openModal = () => {
    setIsShowing(true)
  }

  const closeModal = () => {
    setIsShowing(false)
  }

  const setModal = (state: boolean) => {
    setIsShowing(state)
  }

  return {
    isShowing,
    toggleModal,
    openModal,
    closeModal,
    setModal
  }
}

export default useModal;