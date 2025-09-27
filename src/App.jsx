import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Footer />
    </>
  )
}

export default App
