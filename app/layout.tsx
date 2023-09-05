import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const poppins = Poppins({ 
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GREENMIND',
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
