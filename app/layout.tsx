import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['500', '700', '800'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GREEDMIND',
  description: 'Dev @LinhHongNhung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
