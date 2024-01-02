'use client'
import React, { CSSProperties, useEffect } from 'react'
import './clock.scss'

interface MyCustomCSS extends CSSProperties {
  '--hour'?: number
  '--second'? : number
}


const Clock: React.FC = () => {
  const currentSec = getSecondsToday()

  const seconds = (currentSec / 60) % 1
  const minutes = (currentSec / 3600) % 1
  const hours = (currentSec / 43200) % 1

  useEffect(() => {
    setTime(60 * seconds, 'seconds')
    setTime(3600 * minutes, 'minutes')
    setTime(43200 * hours, 'hours')
  }, [seconds, minutes, hours])

  function setTime(left: number, hand: string) {
    const element = document.querySelector(`.clock__hands .${hand}`) as HTMLElement
    if (element) {
      element.style.animationDelay = `${left * -1}s`
    }
  }

  function getSecondsToday() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const diff = now.getTime() - today.getTime()
    return Math.round(diff / 1000)
  }
  //
  return (
    <div className="clock w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] xl:w-[700px] xl:h-[700px] bg-home-clock-background shadow-home-clock-shadow">
      <div className="clock__seconds">
      {[...Array(60)].map((_, index) => (
          <span
            key={index}
            style={
              {
                '--second': index + 1,
              } as MyCustomCSS
            }
          >
            <p className='bg-home-clock-seconds-passive'></p>
          </span>
        ))}
      </div>
      <div className="clock__hours">
        {[...Array(12)].map((_, index) => (
          <span
            key={index}
            style={
              {
                '--hour': index + 1,
              } as MyCustomCSS
            }
          >
            <p className='text-home-clock-text'>{index + 1}</p>
          </span>
        ))}
      </div>
      <div className="clock__hands">
        <div className="hand hours">
          <i></i>
        </div>
        <div className="hand minutes">
          <i></i>
        </div>
        <div className="hand seconds">
          <i></i>
        </div>
        <div className="dot">
          <i></i>
        </div>
      </div>
    </div>
  )
}

export default Clock
