import Modal from '@/components/_ui/modal/Modal'
import useModal from '@/hooks/useModal.hook'
import useTodo from '@/hooks/useTodo.hook'
import { ITodo } from '@/store/todo/todo.store'
import { Check, Eye, Pencil, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import {
  animateItemBtnTodo,
  animateItemTodo,
  animateListTodo,
} from './animateTodo'

const TodoItem = ({ todo, idx }: { todo: ITodo; idx: number }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodo()
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const { isShowing, openModal, closeModal } = useModal()

  type Inputs = {
    title: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    {
      editTodo && editTodo(todo.id, data.title)
    }
    reset()
    closeModal()
    setIsButtonVisible(false)
  }

  const date = new Date(todo.id)
  return (
    <AnimatePresence>
      <motion.div
        {...animateListTodo(idx)}
        className={`overflow-hidden relative w-full h-max rounded-xl border flex flex-col justify-between p-2 ${
          todo.isCompleted
            ? 'border-todo-border-active line-through bg-todo-background-active'
            : 'border-todo-border-passive bg-todo-background-passive'
        }`}
        onClick={() => {
          setIsButtonVisible(!isButtonVisible)
        }}
        onMouseLeave={() => {
          setIsButtonVisible(false)
        }}
      >
        <p className={`w-full h-max text-lg text-todo-title`}>{todo.title}</p>
        <p className="w-max h-max text-sm text-todo-date">{`${date.getDate()}-${
          date.getMonth() + 1
        }-${date.getFullYear()}`}</p>
        {isButtonVisible && (
          <motion.div
            {...animateItemTodo}
            className="absolute top-0 right-0 w-max h-full bg-todo-menu-background-main bg-gradient-to-r from-todo-menu-background-start via-todo-menu-background-center to-todo-menu-background-end text-todo-menu-icons backdrop-blur-sm flex justify-end items-center gap-6 px-4"
          >
            <motion.button
              {...animateItemBtnTodo(0)}
              onClick={() => {
                toggleTodo && toggleTodo(todo.id)
              }}
            >
              {todo.isCompleted ? <Check /> : <Eye />}
            </motion.button>
            <motion.button
              {...animateItemBtnTodo(1)}
              onClick={() => openModal()}
            >
              <Pencil />
            </motion.button>
            <motion.button
              {...animateItemBtnTodo(2)}
              onClick={() => {
                deleteTodo && deleteTodo(todo.id)
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
              <p className="text-2xl text-center text-modal-title">Изменить ToDo</p>
              <textarea
                {...register('title', {
                  maxLength: 200,
                  required: 'Нужно хоть что-то ввести',
                })}
                rows={5}
                defaultValue={todo.title}
                className="w-full text-xl outline-none px-4 py-2 resize-none mt-4 rounded-lg bg-modal-input-background border border-modal-input-border text-modal-input-text"
                placeholder="Введите текст ToDo"
              />
              {errors.title && (
                <p className="text-modal-error w-full h-max text-lg mt-2">
                  {errors.title.message}
                </p>
              )}
              <button
                className="w-full mt-4 bg-modal-button-background border border-modal-button-border text-modal-button-text  text-xl px-8 py-4 rounded-xl"
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

export default TodoItem
