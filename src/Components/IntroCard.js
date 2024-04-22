import React from 'react' 
import { Link } from 'react-router-dom'
function IntroCard() {
  return (
    <main className='IntroCardBG p-5 m-3 rounded-xl text-white patrick-hand-regular'>
     
      <div  className=' py-5 flex flex-col gap-3'>
        <h1 className='text-7xl text-[#FFF] text-center'>Rohit R. Khawale</h1>
        <h3 className='text-2xl text-center'>I am a Frontend Developer</h3>
      </div>
      <div className='p-3 w-full flex justify-end'>
        <Link to="/ContactMe">
          <p className=' bg-[#47BC91] w-fit px-3 py-1 rounded-full cursor-pointer hover:bg-[#9B6BC8]'>Contact Me</p>
        </Link>
      </div>
    </main>
  )
}

export default IntroCard
