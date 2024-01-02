'use client'
import { sidebar_urls } from '@/config/urls/sidebar_urls'
import React from 'react'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <div className="w-screen h-max absolute bottom-0 left-0 z-50 bg-sidebar-background flex justify-center items-center">
      <div className='w-full h-full  flex flex-row justify-between items-center gap-2 p-3 lg:w-1/2'>
      {sidebar_urls.map(item => <SidebarItem item={item} key={item.url}/>)}
    </div>
    </div>
    
  )
}

export default Sidebar