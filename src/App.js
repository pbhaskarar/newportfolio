import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './navsection/Home'
import About from './navsection/About'
import Education from './navsection/Education'
import Contact from './navsection/Contact'
import Projects from './navsection/Projects'
import Navbar from './Navbar'
import Skills from './navsection/Skills'


const App = () => {
  return (
   <>
   <div style={{ background: 'teal'}}>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/Home' element={<Home/> } />
        <Route path='/About' element={<About /> } />
        <Route path='/Education' element={<Education /> } />
        <Route path='/Projects' element={<Projects /> } />
        <Route path='/Contact' element={<Contact /> } />
        <Route path='/Skills' element={<Skills />} />
    </Routes>
   </div>
   
   </>
  )
}

export default App