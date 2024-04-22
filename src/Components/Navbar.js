import React from 'react'
import logo from "../Images/logo2-rb.png"
import "../index.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
      <main className='patrick-hand-regular m-3'>
        <nav className='px-4 p-2  bg-[#21272A] rounded-xl text-white flex gap-2 justify-between items-center'>
          <Link to="/">
            <p className='cursor-pointer'>Rohit R. Khawale</p>
          </Link>
           <div className='flex gap-8 '>
              <Link to="/" className='hover:opacity-80 hover:scale-90'>Home</Link>
              <Link to="/MySkills" className='hover:opacity-80 hover:scale-90'>Skills</Link>
              <Link to="/AboutUs" className='hover:opacity-80 hover:scale-90'>About</Link>
              <Link to="/ContactMe"><a href={"/ContactMe"} className='hover:opacity-80 hover:scale-90'>Contact Me</a></Link>
           </div>
           <Link to="/ContactMe">
             <div className='bg-[#FFCD29] hover:bg-[#3C93DE] rounded-full'><img src={logo} alt="Logo" className='w-9 h-9 rounded-full cursor-pointer'/></div>
           </Link>
        </nav>
      </main>
  )
} 

export default Navbar
