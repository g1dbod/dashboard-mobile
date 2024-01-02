import Clock from '@/components/_ui/clock/Clock'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-center px-2">
      <div className="w-full h-full mb-20 mt-8 lg:w-1/2 relative flex flex-col gap-16 items-center">
        <div className="w-full h-max text-center text-palitra-c100 text-2xl">It`s my Dashboard</div>
        <Clock />
      </div>
    </div>
  )
}

export default Home