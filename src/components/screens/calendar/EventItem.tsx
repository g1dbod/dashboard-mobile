'use client'
import { IEvent } from '@/store/calendar/event.store'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  animateItemBtnEvent,
  animateItemEvent,
  animateListEvent,
} from './animateCalendar'
import { Trash2 } from 'lucide-react'
import useEvent from '@/hooks/useEvent.hook'

const EventItem = ({ event, idx }: { event: IEvent; idx: number }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const { deleteEvent } = useEvent()

  return (
    <motion.div
      {...animateListEvent(idx)}
      className="relative px-2 py-2 flex w-full h-max justify-center bg-calendar-event-background text-calendar-event-title border border-calendar-event-border rounded-md"
      onClick={() => {
        setIsButtonVisible(!isButtonVisible)
      }}
      onMouseLeave={() => {
        setIsButtonVisible(false)
      }}
    >
      <p className={`w-full h-max text-lg font-bold text-note-title`}>
        {event.title}
      </p>

      {isButtonVisible && (
        <motion.div
          {...animateItemEvent}
          className="absolute top-0 right-0 w-max h-full bg-note-menu-background-main bg-gradient-to-r from-note-menu-background-start via-note-menu-background-center to-note-menu-background-end text-note-menu-icons backdrop-blur-sm flex justify-end items-center gap-6 px-4"
        >
          <motion.button
            {...animateItemBtnEvent}
            onClick={() => {
              deleteEvent && deleteEvent(event.id)
            }}
          >
            <Trash2 />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default EventItem
