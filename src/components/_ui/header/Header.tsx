import Image from 'next/image'
import React, { PropsWithChildren } from 'react'

const Header = ({ title }: { title: string }) => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-max bg-header-background p-2 px-4 flex justify-center items-center">
      <div className="flex justify-between items-center w-full h-full xl:w-1/2">
        <p className="text-2xl font-bold text-header-text">{title}</p>
        <Image src={'logo.svg'} className='text-header-logo' alt="logo" width={50} height={50} />
      </div>
    </div>
  )
}

export default Header
