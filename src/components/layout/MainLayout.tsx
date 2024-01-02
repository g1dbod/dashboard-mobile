import React, { PropsWithChildren } from 'react'
import Sidebar from '../_ui/sidebar/Sidebar'
import BackgroundAnimate from '../_ui/background/BackgroundAnimate'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen h-screen overflow-hidden relative ">
      
      <main className="w-full h-full bg-main-background absolute top-0 left-0">
      <BackgroundAnimate/>
        <div className="absolute top-0 left-0 z-10 w-full h-full">
        {children}
        </div>
      </main>
      <Sidebar />
      
    </div>
  )
}

export default MainLayout
