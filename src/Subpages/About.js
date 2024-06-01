import React from 'react'
import Navbar from '../Components/Navbar'
import IntroCard from '../Components/IntroCard'
import Footer from '../Components/Footer'

function About() {
  return (
    <main className='text-white m-3'>
      <Navbar/>
      <h1 className='text-white text-center text-5xl'>About Me</h1>
      <IntroCard/>
      <div className='bg-[#1E1E1E] rounded-2xl p-5 px-5 m-3 gap-2   '>
        <p className=' '>I am currently pursuing my Bachelor's Degree in Information Technology from Dr. Babasaheb Ambedkar Technological Universit.I'm currently learning Full Stack Development and I'm enthusiastic about  experience  and cahallanges from programming and I'm trying my best to solve the problems. I have also made some projects as included in the home page.</p>
        <p>Following is the List of My skills: </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript-JS</li>
          <li>React</li>
          <li>Next JS</li>
          <li>Git/Git Hub</li>
          <li>Tailwind</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
      <Footer/> 
    </main>
  )
}

export default About
