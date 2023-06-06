import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import Info from './components/Info'
import { Outlet } from 'react-router-dom'

export default function App() {

  const mode = useSelector((state)=>state.toggle.mode);


  return (
    <div className={`${mode=="light"?"bglight":"bgdark"} pt-8`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
