import React from 'react'
import logo from "../Images/logo2-rb.png"
import "../index.css"
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AboutUs from "../Subpages/About.js"
import Contact from "../Subpages/Contact.js"
import App from "../App"
function Navbar() {
  return (
      <main className='patrick-hand-regular m-3'>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={App}/>
            <Route path="../Subpages/About.js" element={AboutUs}/>
            <Route path="../Subpages/Contact.js" element={Contact}/>
            <Route path="/" element={App}/>
            <Route path="/" element={App}/>
        </Routes>
        </BrowserRouter>
        <nav className='px-4 p-2  bg-[#21272A] rounded-xl text-white flex gap-2 justify-between items-center'>
          <p className='cursor-pointer'>Rohit R. Khawale</p>
           <div className='flex gap-8 '>
              <Link to={"/"} className='hover:opacity-80 hover:scale-90'>Home</Link>
              <Link to={"./Skills.js"} className='hover:opacity-80 hover:scale-90'>Skills</Link >
              <Link to={"../Subpages/About.js"} className='hover:opacity-80 hover:scale-90'>About</Link >
              <Link to={"../Subpages/Contact.js"} className='hover:opacity-80 hover:scale-90'>Contact Me</Link>
           </div>
           <div className='bg-[#FFCD29] hover:bg-[#3C93DE] rounded-full'><img src={logo} alt="Logo" className='w-9 h-9 rounded-full cursor-pointer'/></div>
        </nav>
      </main>
  )
}

export default Navbar
