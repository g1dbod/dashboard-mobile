'use client'
import { ISidebarUrl } from '@/config/urls/sidebar_urls.types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SidebarItem = ({item}: {item: ISidebarUrl}) => {
  const pathname = usePathname()
  return (
    <Link href={item.url} className={`w-max h-max transition-all duration-300 ${pathname===item.url ? 'text-sidebar-icons-active' : 'text-sidebar-icons-passive'}`}>
      <item.icon width={35} height={35} />
    </Link>
  )
}

export default SidebarItem