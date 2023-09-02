import React from 'react'
import { Header, Search, BestSelling, AboutUs, Feedback, Footer } from '@/src/components'

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <main className="">
        <Search/>
        <BestSelling/>
        <AboutUs/>
        <Feedback/>
      </main>
      <Footer/>
    </React.Fragment>
  )
}
