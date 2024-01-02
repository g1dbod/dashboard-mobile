import { Loader2 } from 'lucide-react'
import React from 'react'

const MyLoader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-loader'>
      <Loader2 className='animate-spin' width={100} height={100}/>
    </div>
  )
}

export default MyLoader