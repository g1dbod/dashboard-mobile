import Header from '@/components/_ui/header/Header'
import React from 'react'

const Settings = () => {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-center px-2">
      <Header title='Settings'/>
      <div className="w-full h-full flex flex-col items-center gap-1 mb-32 mt-16 lg:w-1/2">
        <p className='text-2xl text-palitra-c100'>Настройки</p>
      </div>
    </div>
  )
}

export default Settings