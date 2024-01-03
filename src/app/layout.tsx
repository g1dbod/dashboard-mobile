import type { Metadata } from 'next'
import './globals.scss'
import MainLayout from '@/components/layout/MainLayout'



export const metadata: Metadata = {
  title: 'It`s my Dashboard',
  description: 'It`s my Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
        {children}
        </MainLayout>
        
        </body>
    </html>
  )
}
