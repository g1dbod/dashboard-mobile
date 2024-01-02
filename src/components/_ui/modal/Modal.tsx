import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { animateModalBack, animateModalWind } from './animateModal'

const Modal = ({
  children,
  closeModal,
}: {
  children: React.ReactElement
  closeModal: () => void
}) => {
  return (
    <AnimatePresence>
      <motion.div
        {...animateModalBack}
        className="fixed top-0 left-0 z-50 w-screen h-screen bg-modal-background-main bg-opacity-80 flex justify-center items-center p-2"
        onClick={() => closeModal()}
      >
        <motion.div
          {...animateModalWind}
          className="w-full min-h-max max-h-max rounded-2xl bg-modal-background-card shadow-2xl overflow-hidden flex justify-center items-center px-2 py-4 lg:w-1/2"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal
