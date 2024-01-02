import Modal from '@/components/_ui/modal/Modal'
import useModal from '@/hooks/useModal.hook'
import useNote from '@/hooks/useNote.hook'
import { INote } from '@/store/notes/notes.store'
import { AnimatePresence, motion } from 'framer-motion'
import { Pencil, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { animateItemBtnNote, animateItemNote, animateListNote } from './animateNote'

type Inputs = {
  title: string
  text: string
}

const NoteItem = ({ note, idx }: { note: INote; idx: number }) => {
  const { editNote, deleteNote } = useNote()
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const { isShowing, openModal, closeModal } = useModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    {
      editNote && editNote(note.id, data.title, data.text)
    }
    reset()
    closeModal()
  }

  const date = new Date(note.id)
  return (
    <AnimatePresence>
    <motion.div
    {...animateListNote(idx)}
      className="relative w-full h-max lg:h-full rounded-xl border flex flex-col justify-between p-2 border-note-border bg-note-background"
      onClick={() => {
        setIsButtonVisible(!isButtonVisible)
      }}
      onMouseLeave={() => {
        setIsButtonVisible(false)
      }}
    >
      <p className={`w-full h-max text-lg font-bold text-note-title`}>{note.title}</p>
      <p className={`w-full h-max text-lg lg:h-full text-note-text`}>{note.text}</p>
      <p className="w-max h-max text-sm text-note-date">{`${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`}</p>
      {isButtonVisible && (
        <motion.div
          {...animateItemNote}
          className="absolute top-0 right-0 w-max h-full bg-note-menu-background-main bg-gradient-to-r from-note-menu-background-start via-note-menu-background-center to-note-menu-background-end text-note-menu-icons backdrop-blur-sm flex justify-end items-center gap-6 px-4"
        >
          <motion.button
            {...animateItemBtnNote(0)}
            onClick={() => openModal()}
          >
            <Pencil />
          </motion.button>
          <motion.button
            {...animateItemBtnNote(1)}
            onClick={() => {
              deleteNote && deleteNote(note.id)
            }}
          >
            <Trash2 />
          </motion.button>
        </motion.div>
      )}
      {isShowing && (
        <Modal closeModal={closeModal}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-center items-center text-modal-text"
          >
            <p className="text-2xl text-center text-modal-title">Изменить Заметку</p>
            <input
              type="text"
              defaultValue={note.title}
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
              defaultValue={note.text}
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
              Изменить
            </button>
          </form>
        </Modal>
      )}
    </motion.div>
    </AnimatePresence>
  )
}

export default NoteItem
