import React from 'react'
import Home from "./Home"
import About from "./Subpages/About"
import MySkills from "./Subpages/MySkills"
import Work from "./Subpages/Work"
import { Routes, Route } from 'react-router-dom'
import Contact from './Subpages/Contact'
function App() {
  return (
    <main className='patrick-hand-regular mx-24 p-2 bg-black m-2 rounded-xl'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<About/>}/>
        <Route path='/MySkills' element={<MySkills/>}/>
        <Route path='/ContactMe' element={<Contact/>}/>
        <Route path='' element={<></>}/>
        <Route path='' element={<></>}/>
        <Route path='' element={<></>}/>
      </Routes>
     
    </main>
  )
}

export default App
