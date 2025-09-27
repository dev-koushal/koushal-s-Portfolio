import { Home, Laugh, NotebookText, Target } from 'lucide-react'
import React from 'react'
import {NavLink, Link} from 'react-router'
import { motion } from 'framer-motion';
import '../App.css'
function Navbar() {
    
  return (
    <motion.nav initial={{y:100, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,delay:1}}  className='fixed bottom-5 md:bottom-10 md:left-1/2 md:-translate-x-30 left-1/4 rounded-full px-8 py-2 md:px-10 md:py-2 w-[200px] hover:w-[250px] transition-all ease-in-out duration-150 border-2 border-cyan-900 z-50   '>
      <ul className='flex gap-4 justify-center'>
       <li className='tooltip tooltip-accent ' data-tip="Home"> <a href="#home"><Home color='white'/></a></li> 
       <li className='tooltip tooltip-accent ' data-tip="Blogs"> <NavLink to='/'> <NotebookText color='white'  /> </NavLink></li>
       <li className='tooltip tooltip-accent ' data-tip="About Me!!"> <a href="#about"><Laugh color='white'  /></a> </li>
      <li className='tooltip tooltip-accent ' data-tip="Work"> <a href="#work"><Target color='white'  /></a></li>
     </ul>
    </motion.nav>
  )
}

export default Navbar