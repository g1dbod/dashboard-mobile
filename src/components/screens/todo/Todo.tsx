'use client'
import useTodo from '@/hooks/useTodo.hook'
import React from 'react'
import TodoItem from './TodoItem'
import { Plus } from 'lucide-react'
import useModal from '@/hooks/useModal.hook'
import Modal from '@/components/_ui/modal/Modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import Header from '@/components/_ui/header/Header'
import {AnimatePresence, motion} from 'framer-motion'
import { animateListTodo } from './animateTodo'
import MyLoader from '@/components/_ui/loader/MyLoader'

type Inputs = {
  title: string
}

const Todo = () => {
  const { todos, addTodo } = useTodo()
  const { isShowing, openModal, closeModal } = useModal()

  const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    {addTodo && addTodo(data.title)}
    reset()
    closeModal()
  }
  if (!todos) return <MyLoader />

  return (
    <AnimatePresence>
    <motion.div className="w-full h-full overflow-auto flex flex-col items-center relative px-2">
      <Header title='ToDo List'/>
      <motion.div className="w-full h-full flex flex-col items-center gap-1 mb-32 mt-16 lg:w-1/2">
        {todos && todos.length !== 0 ? (
          todos.map((todo, idx) => <TodoItem todo={todo} key={todo.id} idx={idx} />)
        ) : (
          <p className="text-lg w-full h-max p-2 text-center">Список пуст</p>
        )}
        <motion.button
        {...animateListTodo(todos?.length)}
          className="w-full h-max rounded-xl border border-todo-button-border bg-todo-button-background text-todo-button-text flex justify-center items-center p-2 text-lg"
          onClick={() => openModal()}
        >
          <Plus width={30} height={30} />
          Добавить
        </motion.button>
      </motion.div>
      {isShowing && (
        <Modal closeModal={closeModal}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-center items-center text-modal-text">
            <p className="text-2xl text-center text-modal-title">Добавить новый ToDo</p>
            <textarea
              {...register('title', { maxLength: 200, required: "Нужно хоть что-то ввести" })}
              rows={5}
              className="w-full text-xl outline-none px-4 py-2 resize-none mt-4 rounded-lg bg-modal-input-background border border-modal-input-border text-modal-input-text"
              placeholder="Введите текст ToDo"
            />
            {errors.title && <p className='text-modal-error w-full h-max text-lg mt-2'>{errors.title.message}</p>}
            <button
              className="w-full mt-4 bg-modal-button-background border border-modal-button-border text-modal-button-text  text-xl px-8 py-4 rounded-xl"
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

export default Todo
