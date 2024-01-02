import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'


export interface ITodo {
  id: number,
  title: string,
  isCompleted: boolean
}

export interface TodoState {
  todos: ITodo[]
  addTodo: (title: string) => void,
  deleteTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
  editTodo: (id: number, title: string) => void
}

const useTodoStore = create<TodoState>()(
  immer(
    devtools(
      persist(
        (set) => ({
          todos: [],
          addTodo(title) {
              set(state => {
                state.todos.push({
                  id: Number(new Date()),
                  title,
                  isCompleted: false
                })
              })
          },
          deleteTodo(id) {
            set((state) => ({
              todos: state.todos.filter((todo) => todo.id !== id),
            }));
          },
          toggleTodo(id) {
            set(state => {
              const index = state.todos.findIndex((todo: ITodo) => todo.id === id);
              if (index !== -1) {
                state.todos[index].isCompleted = !state.todos[index].isCompleted;
              }
            })
          },
          editTodo(id, title) {
            set(state => {
              const index = state.todos.findIndex((todo: ITodo) => todo.id === id);
              if (index !== -1) {
                state.todos[index].title = title;
              }
            })
          },
        }),
        {
          name: 'todo',
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
)

export default useTodoStore
