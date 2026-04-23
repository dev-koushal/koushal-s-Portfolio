import { Github, Keyboard, MapPin, Linkedin, Mail, Code2, Rocket, Target, Zap, Trophy, BookOpen, ArrowUpRightFromCircle, Twitter } from 'lucide-react'
import React from 'react'
import mapImage from '../assets/Map.jpg'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const navigate = useNavigate();

  return (
    <div id='about' className='flex justify-center mx-auto min-h-screen md:w-[70vw] py-20'>

      {/* DESKTOP */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className='w-full max-w-7xl px-6 hidden md:block'
      >

        {/* Header */}
        <motion.div variants={itemVariants} className='mb-12'>
          <h1 className='text-5xl font-bold text-white mb-4'>
            About <span className='text-emerald-400'>Me</span>
          </h1>
          <div className='h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full'></div>
        </motion.div>

        {/* Grid */}
        <div className='grid grid-cols-12 gap-4'>

          {/* HERO */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className='col-span-8 row-span-2 rounded-3xl p-8 relative overflow-hidden
              bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-xl
              border border-slate-700/50 shadow-2xl transition-all duration-500 hover:border-emerald-400/40'
          >
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-3 bg-emerald-400/10 rounded-2xl border border-emerald-400/20'>
                  <Rocket className='w-8 h-8 text-emerald-400' />
                </div>
                <h2 className='text-3xl font-bold text-white'>Full-Stack Developer</h2>
              </div>

              <p className='text-lg text-slate-300 mb-6'>
                Building scalable web applications with strong focus on backend and problem solving.
              </p>

              <div className='grid grid-cols-3 gap-4'>
                <div className='p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:scale-105 hover:border-emerald-400/40 transition-all'>
                  <Code2 className='w-6 h-6 text-emerald-400 mb-2' />
                  <div className='text-2xl font-bold text-white'>500+</div>
                  <div className='text-sm text-slate-400'>DSA Problems</div>
                </div>

                <div className='p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:scale-105 hover:border-emerald-400/40 transition-all'>
                  <Trophy className='w-6 h-6 text-emerald-400 mb-2' />
                  <div className='text-2xl font-bold text-white'>5+</div>
                  <div className='text-sm text-slate-400'>Projects</div>
                </div>

                <div className='p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:scale-105 hover:border-emerald-400/40 transition-all'>
                  <Target className='w-6 h-6 text-emerald-400 mb-2' />
                  <div className='text-2xl font-bold text-white'>Top 20%</div>
                  <div className='text-sm text-slate-400'>GFG Rank</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className='col-span-4 row-span-1 rounded-3xl relative overflow-hidden
              bg-gradient-to-br from-slate-800/90 to-slate-900/90
              border border-slate-700/50 shadow-2xl hover:border-emerald-400/40'
          >
            <img className='absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 hover:scale-110' src={mapImage} />
            <div className='relative z-10 p-6 flex flex-col justify-between h-full'>
              <div className='flex items-center gap-2 text-emerald-400'>
                <MapPin className='w-5 h-5' />
                Location
              </div>
              <div className='text-xl font-bold text-white'>Bhopal, India</div>
            </div>
          </motion.div>

          {/* PROJECT */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className='col-span-4 row-span-1 rounded-3xl p-6
              bg-gradient-to-br from-slate-800/90 to-slate-900/90
              border border-slate-700/50 shadow-2xl hover:border-emerald-400/40'
          >
            <h3 className=' text-emerald-400 font-bold mb-3'>Recent Project</h3>
            <div className='text-sm text-slate-300 space-y-2'>
              <span className='text-white font-semibold italic flex items-center gap-1 hover:text-emerald-400 transition'>
                <a target="_blank" href="https://vettorai-1.onrender.com/">
                  Vettor AI <ArrowUpRightFromCircle size={18} className='inline'/>
                </a>
              </span>
              <div>• AI interview + feedback system</div>
              <div>• Video/audio + Razorpay integration</div>
            </div>
          </motion.div>

          {/* TECH STACK */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className='col-span-5 row-span-2 rounded-3xl p-6
              bg-gradient-to-br from-slate-800/90 to-slate-900/90
              border border-slate-700/50 shadow-2xl hover:border-emerald-400/40'
          >
            <h3 className='text-xl font-bold mb-6 text-emerald-400'>Tech Stack</h3>

            <div className='space-y-3 text-sm text-slate-300'>
              <div><span className='text-slate-400'>Languages:</span> Java, C++, JavaScript</div>
              <div><span className='text-slate-400'>Frontend:</span> React, Next.js, Tailwind, Framer Motion</div>
              <div><span className='text-slate-400'>Backend:</span> Node.js, Express, REST APIs, JWT Auth</div>
              <div><span className='text-slate-400'>Database:</span> MongoDB, PostgreSQL, Mongoose, Prisma</div>
              <div><span className='text-slate-400'>Real-Time:</span> WebRTC, MediaRecorder API</div>
              <div><span className='text-slate-400'>Payments:</span> Razorpay, Stripe</div>
              <div><span className='text-slate-400'>Tools:</span> Git, Postman, VS Code</div>
            </div>
          </motion.div>

          {/* FOCUS */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className='col-span-3 row-span-1 rounded-3xl p-6
              bg-gradient-to-br from-slate-800/90 to-slate-900/90
              border border-slate-700/50 shadow-2xl hover:border-emerald-400/40'
          >
            <div className='flex items-center gap-2 text-emerald-400 mb-3'>
              <BookOpen className='w-5 h-5' />
              Focus
            </div>
            <div className='text-white text-sm space-y-1'>
              <div>Backend Engineering</div>
              <div>System Design</div>
              <div>DSA</div>
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className='col-span-4 row-span-1 rounded-3xl p-6
              bg-gradient-to-br from-slate-800/90 to-slate-900/90
              border border-slate-700/50 shadow-2xl hover:border-emerald-400/40'
          >
            <div className='flex gap-3'>
              <a href="https://github.com/dev-koushal" target='_blank'><Github className='w-10 h-10 text-white hover:text-emerald-500 hover:scale-110 transition'/></a>
              <a href="https:www.linkedin.com/in/koushal-yadav" target='_blank'><Linkedin className='w-10 h-10 text-white hover:text-emerald-500 hover:scale-110 transition'/></a>
              <a href="https://x.com/Koushal1199" target='_blank'><Twitter className='w-10 h-10 text-white hover:text-emerald-500 hover:scale-110 transition'/></a>
            </div>
          </motion.div>

          {/* GITHUB */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className='col-span-7 row-span-1 rounded-3xl p-6
              bg-gradient-to-br from-slate-800/90 to-slate-900/90
              border border-slate-700/50 shadow-2xl hover:border-emerald-400/40'
          >
            <div className='flex items-center justify-between'>
              <div>
                <div className='text-emerald-400 font-bold text-lg'>GitHub</div>
                <div className='text-sm text-slate-400'>Consistent contributions</div>
              </div>
              <div className='text-2xl font-bold text-emerald-400'>200+</div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* MOBILE */}
      {/* MOBILE */}
<div className='md:hidden flex flex-col gap-4 p-4 w-full'>

  {/* HEADER */}
  <div>
    <h1 className='text-3xl font-bold text-white'>
      About <span className='text-emerald-400'>Me</span>
    </h1>
    <div className='h-1 w-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-2'></div>
  </div>

  {/* HERO */}
  <div className='rounded-2xl p-5 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700'>
    <div className='flex items-center gap-3 mb-3'>
      <Rocket className='text-emerald-400'/>
      <h2 className='text-white font-bold text-lg'>Full-Stack Developer</h2>
    </div>
    <p className='text-sm text-slate-300 mb-4'>
      Building scalable web applications with strong focus on backend and problem solving.
    </p>

    <div className='grid grid-cols-3 gap-2 text-center'>
      <div className='bg-slate-800 p-3 rounded-xl'>
        <div className='text-white font-bold'>500+</div>
        <div className='text-xs text-slate-400'>DSA</div>
      </div>
      <div className='bg-slate-800 p-3 rounded-xl'>
        <div className='text-white font-bold'>5+</div>
        <div className='text-xs text-slate-400'>Projects</div>
      </div>
      <div className='bg-slate-800 p-3 rounded-xl'>
        <div className='text-white font-bold'>Top 20%</div>
        <div className='text-xs text-slate-400'>GFG</div>
      </div>
    </div>
  </div>

  {/* LOCATION */}
  <div className='rounded-2xl p-4 bg-slate-800 border border-slate-700 flex items-center gap-3'>
    <MapPin className='text-emerald-400'/>
    <div>
      <div className='text-white font-semibold'>Bhopal, India</div>
      <div className='text-xs text-slate-400'>Location</div>
    </div>
  </div>

  {/* PROJECT */}
  <div className='rounded-2xl p-4 bg-slate-800 border border-slate-700'>
    <h3 className='text-emerald-400 font-semibold mb-2'>Recent Project</h3>

    <a 
      href="https://vettorai-1.onrender.com/" 
      target='_blank'
      className='text-white font-semibold flex items-center gap-1 hover:text-emerald-400 transition'
    >
      Vettor AI <ArrowUpRightFromCircle size={16}/>
    </a>

    <div className='text-sm text-slate-300 mt-2'>
      <div>• AI interview + feedback system</div>
      <div>• Video/audio + Razorpay integration</div>
    </div>
  </div>

  {/* TECH STACK */}
  <div className='rounded-2xl p-4 bg-slate-800 border border-slate-700'>
    <h3 className='text-emerald-400 font-semibold mb-3'>Tech Stack</h3>

    <div className='text-xs text-slate-300 space-y-2'>
      <div><span className='text-slate-400'>Languages:</span> Java, C++, JavaScript</div>
      <div><span className='text-slate-400'>Frontend:</span> React, Next.js, Tailwind, Framer Motion</div>
      <div><span className='text-slate-400'>Backend:</span> Node.js, Express, REST APIs, JWT Auth</div>
      <div><span className='text-slate-400'>Database:</span> MongoDB, PostgreSQL, Mongoose, Prisma</div>
      <div><span className='text-slate-400'>Real-Time:</span> WebRTC, MediaRecorder API</div>
      <div><span className='text-slate-400'>Payments:</span> Razorpay, Stripe</div>
      <div><span className='text-slate-400'>Tools:</span> Git, Postman, VS Code</div>
    </div>
  </div>

  {/* FOCUS */}
  <div className='rounded-2xl p-4 bg-slate-800 border border-slate-700'>
    <div className='flex items-center gap-2 text-emerald-400 mb-2'>
      <BookOpen size={16}/>
      Focus
    </div>

    <div className='text-sm text-white space-y-1'>
      <div>Backend Engineering</div>
      <div>System Design</div>
      <div>DSA</div>
    </div>
  </div>

  {/* SOCIAL */}
  <div className='rounded-2xl p-4 bg-slate-800 border border-slate-700'>
    <div className='flex gap-4'>
      <a href="https://github.com/dev-koushal" target='_blank'>
        <Github className='text-white hover:text-emerald-400'/>
      </a>
      <a href="https://www.linkedin.com/in/koushal-yadav" target='_blank'>
        <Linkedin className='text-white hover:text-emerald-400'/>
      </a>
      <a href="https://x.com/Koushal1199" target='_blank'>
        <Twitter className='text-white hover:text-emerald-400'/>
      </a>
    </div>
  </div>

  {/* GITHUB */}
  <div className='rounded-2xl p-4 bg-slate-800 border border-slate-700 flex justify-between items-center'>
    <div>
      <div className='text-emerald-400 font-semibold'>GitHub</div>
      <div className='text-xs text-slate-400'>Consistent contributions</div>
    </div>
    <div className='text-white font-bold'>200+</div>
  </div>

</div>

    </div>
  )
}

export default About