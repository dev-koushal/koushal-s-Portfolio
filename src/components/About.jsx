import { FireExtinguisherIcon, Locate, Projector, Twitter } from 'lucide-react'
import React from 'react'
import mapImage from '../assets/Map.jpg'

function About() {
  return (
    <div id='about' className='min-h-screen flex justify-center mx-auto'>
       <div className='m-20 p-10 hidden md:block'>
        {/* Grid section */}
        <div className='grid grid-cols-11 grid-rows-7 gap-4 w-[60vw] h-[90vh]'>
          <div className='col-span-3 row-span-3 bg-green-500 rounded-4xl relative'>
            <img className=' contain-content h-full rounded-4xl' src={mapImage} alt="Map" />
            <div className='absolute top-0 left-0 p-2 bg-black hover:px-4 transition-all ease-in-out duration-150  rounded-full m-2'><Locate className='inline mr-2'/> Location</div>
            <div className='absolute top-30 right-16 bg-accent/40 w-4 h-4 rounded-full '></div>
            <div className='absolute top-28 right-12 bg-accent w-10 h-10 rounded-full animate-ping'></div>
          </div>
          <div className='col-span-4 row-span-3 bg-green-500 rounded-4xl'></div>
          <div className='col-span-4 row-span-2 bg-green-500 rounded-4xl'></div>
          <div className='col-span-4 row-span-2 bg-blue-400 rounded-4xl'>Github</div>
          <div className='col-span-1 row-span-1 bg-cyan-950 rounded-3xl flex justify-center items-center'><Twitter /></div>
          <div className='col-span-1 row-span-1 bg-cyan-950 rounded-3xl flex justify-center items-center'><Projector /></div>
          <div className='col-span-1 row-span-1 bg-cyan-950 rounded-3xl flex justify-center items-center'><FireExtinguisherIcon/></div>
          <div className='col-span-4 row-span-1 bg-gray-700 rounded-4xl'>Discover more Projects</div>
          <div className='col-span-6 row-span-3 bg-blue-400 rounded-4xl'>Githubbbb</div>
          <div className='col-span-5 row-span-3 bg-blue-400 rounded-4xl'>Githubbbb</div>
        </div>
       </div>

       {/* mobile view */}
       <div className='grid grid-rows-7 gap-4 md:hidden w-[98vw]'>
        <div className='row-span-1 bg-emerald-400 rounded-4xl'></div>
        <div className='row-span-1 rounded-4xl grid grid-cols-3 gap-2'>
          <div className='bg-slate-700 rounded-4xl'></div>
          <div className='bg-slate-700 rounded-4xl'></div>
          <div className='bg-slate-700 rounded-4xl'></div>
        </div>
        <div className='row-span-2 bg-emerald-400 rounded-4xl'></div>
        <div className='row-span-2 bg-emerald-400 rounded-4xl relative content'>
          <img className=' rounded-4xl' src={mapImage} alt="Map" />
            <div className='absolute top-0 left-0 p-2 bg-black  rounded-full m-2'><Locate className='inline mr-2'/> Location</div>
            <div className='absolute top-50 right-28 bg-accent/40 w-4 h-4 rounded-full '></div>
            <div className='absolute top-46 right-24 bg-accent w-10 h-10 rounded-full animate-ping'></div>
        </div>

       </div>
    </div>
  )
}

export default About