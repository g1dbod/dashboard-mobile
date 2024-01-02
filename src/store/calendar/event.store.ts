import moment, * as moments from 'moment';
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'


export interface IEvent {
  id: number,
  title: string,
  date: moment.Moment
}

export interface EventsState {
  events: IEvent[]
  addEvent: (date: moment.Moment, title: string) => void,
  deleteEvent: (id: number) => void,
  editEvent: (id: number, title: string) => void,
  getEvents: (date: moment.Moment) => IEvent[]
}

const useEventsStore = create<EventsState>()(
  immer(
    devtools(
      persist(
        (set, get) => ({
         events: [],
         addEvent(date, title) {
          set(state => {
            state.events.push({
              id: Number(new Date()),
              title,
              date
            })
          })
       
         },
         deleteEvent(id) {
          set((state) => ({
            events: state.events.filter((event) => event.id !== id),
          }));
         },
         editEvent(id, title) {
          set(state => {
            const index = state.events.findIndex((event) => event.id === id);
            if (index !== -1) {
              state.events[index].title = title;
            }
          })

         },

        getEvents(date) {
            return get().events.filter(event => moment(event.date).isSame(date, 'day'))
        },
        }),
        {
          name: 'events',
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
)

export default useEventsStore