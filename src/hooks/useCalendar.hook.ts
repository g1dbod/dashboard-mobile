import moment from 'moment'
import { useEffect, useState } from 'react'

const useCalendar = () => {
  moment.updateLocale('en', { week: { dow: 1 } })

  const [today, setToday] = useState(moment())
  const [calendar, setCalendar] = useState<moment.Moment[][]>(
    getWeeksArray(today)
  )

  function getWeeksArray(currentDate: moment.Moment): moment.Moment[][] {
    const weeksArray: moment.Moment[][] = []

    // Находим первый день текущей недели
    const startOfWeek = currentDate.clone().startOf('month').startOf('week')
    const endOfWeek = currentDate.clone().endOf('month').startOf('week')

    // Добавляем предыдущие дни предыдущей недели
    const previousWeekDays = []
    for (let i = 0; i < 7; i++) {
      previousWeekDays.push(startOfWeek.clone().add(i, 'days'))
    }
    weeksArray.push(previousWeekDays)

    let ActiveOfWeek = currentDate
      .clone()
      .startOf('month')
      .startOf('week')
      .add(1, 'week')
    // Добавляем дни текущей недели

    while (!ActiveOfWeek.isSameOrAfter(endOfWeek, 'week')) {
      const activeWeekDays = []
      for (let i = 0; i < 7; i++) {
        activeWeekDays.push(ActiveOfWeek.clone().add(i, 'days'))
      }
      ActiveOfWeek.add(1, 'week')
      weeksArray.push(activeWeekDays)
    }

    // Добавляем следующие дни следующей недели
    const nextWeekDays = []
    for (let i = 0; i < 7; i++) {
      nextWeekDays.push(endOfWeek.clone().add(i, 'days'))
    }
    weeksArray.push(nextWeekDays)

    return weeksArray
  }

  useEffect(() => {
    setCalendar(getWeeksArray(today))
  }, [today])

  return { calendar, moment, setToday, today }
}

export default useCalendar
