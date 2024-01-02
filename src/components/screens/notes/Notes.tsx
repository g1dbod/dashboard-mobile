'use client'
import Header from '@/components/_ui/header/Header'
import useModal from '@/hooks/useModal.hook'
import useNote from '@/hooks/useNote.hook'
import React from 'react'
import NoteItem from './NoteItem'
import { Plus } from 'lucide-react'
import Modal from '@/components/_ui/modal/Modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import MyLoader from '@/components/_ui/loader/MyLoader'
import { AnimatePresence, motion } from 'framer-motion'
import { animateListNote } from './animateNote'

type Inputs = {
  title: string
  text: string
}

const Notes = () => {
  const { notes, addNote } = useNote()
  const { isShowing, openModal, closeModal } = useModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    {
      addNote && addNote(data.title, data.text)
    }
    reset()
    closeModal()
  }
  if (!notes) return <MyLoader />

  return (
    <AnimatePresence>
      <motion.div className="w-full h-full overflow-auto flex flex-col items-center relative px-2">
        <Header title="Notes" />
        <motion.div className="w-full h-max flex flex-col gap-2 mb-32 mt-16 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:auto-rows-auto lg:px-8">
          {notes && notes.length !== 0 ? (
            notes.map((note, idx) => (
              <NoteItem note={note} key={note.id} idx={idx} />
            ))
          ) : (
            <p className="text-lg w-full h-max p-2 text-center text-palitra-c100">Список пуст</p>
          )}
          <motion.button
            {...animateListNote(notes?.length)}
            className="w-full h-max rounded-xl border border-note-button-border bg-note-button-background text-note-button-text flex justify-center items-center p-2 text-lg lg:h-full"
            onClick={() => openModal()}
          >
            <Plus width={30} height={30} />
            Добавить
          </motion.button>
        </motion.div>
        {isShowing && (
          <Modal closeModal={closeModal}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-full flex flex-col justify-center items-center text-modal-text"
            >
              <p className="text-2xl text-center text-modal-title">Добавить новую Заметку</p>
              <input
                type="text"
                {...register('title', {
                  maxLength: 100,
                  required: 'Нужно хоть что-то ввести',
                })}
                className="w-full text-xl outline-none px-4 py-2 resize-none mt-4 rounded-lg bg-modal-input-background border border-modal-input-border text-modal-input-text"
                placeholder="Введите загаловок"
              />
              {errors.title && (
                <p className="text-modal-error w-full h-max text-lg mt-2">
                  {errors.title.message}
                </p>
              )}
              <textarea
                {...register('text', {
                  maxLength: 300,
                  required: 'Нужно хоть что-то ввести',
                })}
                rows={5}
                className="w-full text-xl outline-none px-4 py-2 resize-none mt-4 rounded-lg bg-modal-input-background border border-modal-input-border text-modal-input-text"
                placeholder="Введите текст для заметки"
              />
              {errors.text && (
                <p className="text-modal-error w-full h-max text-lg mt-2">
                  {errors.text.message}
                </p>
              )}

              <button
                className="w-full mt-4 bg-modal-button-background border border-modal-button-border text-modal-button-text text-xl px-8 py-4 rounded-xl"
                type="submit"
              >
                Создать
              </button>
            </form>
          </Modal>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default Notes
