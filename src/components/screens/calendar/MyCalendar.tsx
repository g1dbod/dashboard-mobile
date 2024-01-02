'use client'
import Header from '@/components/_ui/header/Header'
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useCalendar from '@/hooks/useCalendar.hook'
import useEvent from '@/hooks/useEvent.hook'
import MyLoader from '@/components/_ui/loader/MyLoader'
import EventItem from './EventItem'
import Modal from '@/components/_ui/modal/Modal'
import useModal from '@/hooks/useModal.hook'
import { SubmitHandler, useForm } from 'react-hook-form'
import {motion} from 'framer-motion'
import { animateListEvent } from './animateCalendar'

const MyCalendar = () => {
  const { calendar, moment, setToday, today } = useCalendar()
  const { getEvents, addEvent } = useEvent()
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
      addEvent && addEvent(today, data.title)
    }
    reset()
    closeModal()
  }

  if (!getEvents) return <MyLoader />

  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center relative px-2">
      <Header title="Calendar" />
      <div className="w-full h-max gap-2 mb-32 mt-16 lg:w-1/2">
        <div className="flex flex-col items-center justify-between bg-calendar-background border border-calendar-border rounded-md overflow-hidden">
          <div className="w-full h-max flex justify-between items-center text-calendar-header-text bg-calendar-header-background py-2 px-4">
            <p className="text-2xl">{today.format('MMMM, YYYY')}</p>

            <div className="w-max h-max flex items-center justify-center gap-2">
              <button
                className="px-2"
                onClick={() =>
                  setToday((prev) => prev.clone().subtract(1, 'month'))
                }
              >
                <ChevronLeft />
              </button>
              <button
                className="px-2"
                onClick={() => setToday((prev) => moment())}
              >
                TODAY
              </button>
              <button
                className="px-2"
                onClick={() => setToday((prev) => prev.clone().add(1, 'month'))}
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead className="border-b border-calendar-week-border">
              <tr>
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, idx) => (
                  <th
                    key={day}
                    className={`${
                      idx === 6 || idx === 5
                        ? 'bg-calendar-day-background-weekends'
                        : 'bg-calendar-day-background-working'
                    }`}
                  >
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-calendar-week-text">
                        {day}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendar.map((week, idx) => (
                <tr key={idx}>
                  {week.map((day, idx) => (
                    <td
                      key={idx}
                      className={`${
                        day.day() === 6 || day.day() === 0
                          ? 'bg-calendar-day-background-weekends'
                          : 'bg-calendar-day-background-working'
                      } ${
                        moment().isSame(day, 'day')
                          ? 'bg-calendar-day-now-background text-calendar-day-now-text font-bold'
                          : today.isSame(day, 'month')
                          ? 'text-calendar-day-active'
                          : 'text-calendar-day-passive'
                      }`}
                    >
                      <button
                      
                        className={`px-2 py-2 flex w-full justify-center `}
                        onClick={() => setToday(day)}
                      >
                        <p
                          className={`${
                            moment(day).isSame(today, 'day') ? 'relative w-full xl:1/3 lg:w-1/2 sm:w-1/2 after:w-full after:h-[2px] after:bg-calendar-day-now-border after:absolute after:-bottom-1 after:left-0' : ''
                          }
                          ${
                            getEvents(day).length>0 ? 'w-full xl:1/3 lg:w-1/2 sm:w-1/2 h-full bg-opacity-5 rounded-full bg-calendar-day-now-background' : ''
                          }
                          `}
                        >
                          {day.date()}
                        </p>
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center justify-between    overflow-hidden mt-2 p-2 gap-2">
          <motion.button
          {...animateListEvent(0)}
            className={`px-2 py-2 flex w-full h-max justify-center bg-calendar-button-background border border-calendar-button-border text-calendar-button-text rounded-md `}
            onClick={() => openModal()}
          >
            <p>Добавить событие</p>
          </motion.button>

          {getEvents(today).length > 0 ? (
            getEvents(today).map((item, idx) => (
              <EventItem event={item} key={item.id} idx={idx+1} />
            ))
          ) : (
            <motion.p {...animateListEvent(1)} className='px-2 py-2 flex w-full h-max justify-center bg-calendar-event-background text-calendar-event-title border border-calendar-event-border rounded-md'>Нет событий</motion.p>
          )}
        </div>

        {isShowing && (
          <Modal closeModal={closeModal}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-full flex flex-col justify-center items-center text-modal-text"
            >
              <p className="text-2xl text-center text-modal-title">
                Добавить новый ToDo
              </p>
              <textarea
                {...register('title', {
                  maxLength: 200,
                  required: 'Нужно хоть что-то ввести',
                })}
                rows={5}
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
                Создать
              </button>
            </form>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default MyCalendar
