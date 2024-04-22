import React from 'react'
import Navbar from './Components/Navbar'
import "./index.css"
import IntroCard from './Components/IntroCard'
import Skills from './Components/Skills'
import Footer from './Components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <IntroCard/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home
