import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import Blog from './components/Blog'
import BlogPage from './Pages/BlogPage'

function App() {

  return (
    <>
      <Routes>
        {/* Home route */}
        <Route 
          path="/" 
          element={
            <>
            <Navbar />
              <Hero />
              <About />
              <Work />
              <Blog />
              <Footer />
            </>
          } 
        />

        {/* Blog route */}
        <Route path="/koushal/blogs" element={<BlogPage />} />
      </Routes>
    </>
  )
}

export default App
