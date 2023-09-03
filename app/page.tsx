import React from 'react'
import { Header, Search, BestSelling, AboutUs, Categories, Feedback, Footer } from '@/src/components'

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <main className="">
        <Search/>
        <BestSelling/>
        <AboutUs/>
        <Categories/>
        <Feedback/>
      </main>
      <Footer/>
    </React.Fragment>
  )
}
