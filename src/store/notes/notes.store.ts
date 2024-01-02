import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'


export interface INote {
  id: number,
  title: string,
  text: string,
}

export interface NotesState {
  notes: INote[]
  addNote: (title: string, text: string) => void,
  deleteNote: (id: number) => void,
  editNote: (id: number, title: string, text: string) => void
}

const useNotesStore = create<NotesState>()(
  immer(
    devtools(
      persist(
        (set) => ({
         notes: [],
         addNote(title, text) {
          set(state => {
            state.notes.push({
              id: Number(new Date()),
              title,
              text
            })
          })
         },
         deleteNote(id) {
          set((state) => ({
            notes: state.notes.filter((note) => note.id !== id),
          }));
         },
         editNote(id, title, text) {
          set(state => {
            const index = state.notes.findIndex((note) => note.id === id);
            if (index !== -1) {
              state.notes[index].title = title;
              state.notes[index].text = text;
            }
          })
         },
        }),
        {
          name: 'notes',
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
)

export default useNotesStore
