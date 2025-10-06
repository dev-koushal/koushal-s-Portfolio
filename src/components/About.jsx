import { Github, Keyboard, MapPin, Linkedin, Mail, Code2, Rocket, Target, Zap, Trophy, BookOpen, RocketIcon } from 'lucide-react'
import React from 'react'
import mapImage from '../assets/Map.jpg'
import { motion } from 'framer-motion';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
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

  return (
    <div id='about' className='flex justify-center mx-auto min-h-screen md:w-[70vw] py-20'>
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

        {/* Main Grid */}
        <div className='grid grid-cols-12 gap-4 h-auto'>
          
          {/* Row 1 */}
          {/* Hero Card - Large */}
          <motion.div 
            variants={itemVariants}
            className='col-span-8 row-span-2 rounded-3xl p-8 relative overflow-hidden group
              bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl'
          >
            <div className='absolute top-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl group-hover:bg-emerald-400/10 transition-all duration-700'></div>
            <div className='absolute bottom-0 left-0 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-700'></div>
            
            {/* Floating particles effect */}
            <div className='absolute top-10 right-20 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse'></div>
            <div className='absolute top-32 right-40 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-pulse' style={{animationDelay: '0.5s'}}></div>
            <div className='absolute bottom-20 right-32 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse' style={{animationDelay: '1s'}}></div>
            
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-3 bg-emerald-400/10 rounded-2xl border border-emerald-400/20 group-hover:bg-emerald-400/20 group-hover:border-emerald-400/40 transition-all duration-500'>
                  <Rocket className='w-8 h-8 text-emerald-400' />
                </div>
                <h2 className='text-3xl font-bold text-white'>Full-Stack Developer</h2>
              </div>
              
              <p className='text-lg text-slate-300 leading-relaxed mb-6'>
                Passionate about crafting scalable web applications and solving complex algorithmic challenges. 
                Currently focused on <span className='text-emerald-400 font-semibold'>Systems</span> while 
                trying to build production-ready full-stack solutions.
              </p>
              
              <div className='grid grid-cols-3 gap-4 mt-8'>
                <div className='p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 hover:border-emerald-400/30 transition-all duration-300 group/stat'>
                  <Code2 className='w-6 h-6 text-emerald-400 mb-2 group-hover/stat:scale-110 transition-transform' />
                  <div className='text-2xl font-bold text-white'>500+</div>
                  <div className='text-sm text-slate-400'>Problems Solved</div>
                </div>
                <div className='p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 hover:border-emerald-400/30 transition-all duration-300 group/stat'>
                  <Trophy className='w-6 h-6 text-emerald-400 mb-2 group-hover/stat:scale-110 transition-transform' />
                  <div className='text-2xl font-bold text-white'>5+</div>
                  <div className='text-sm text-slate-400'>Projects Shipped</div>
                </div>
                <div className='p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 hover:border-emerald-400/30 transition-all duration-300 group/stat'>
                  <Target className='w-6 h-6 text-emerald-400 mb-2 group-hover/stat:scale-110 transition-transform' />
                  <div className='text-2xl font-bold text-white'>Top 20%</div>
                  <div className='text-sm text-slate-400'>GeeksforGeeks Rank</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            variants={itemVariants}
            className='col-span-4 row-span-1 rounded-3xl relative overflow-hidden group
              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl'
          >
            <img className='absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500' src={mapImage} alt="Map" />
            <div className='relative z-10 p-6 h-full flex flex-col justify-between'>
              <div className='flex items-center gap-2 text-emerald-400'>
                <MapPin className='w-5 h-5' />
                <span className='font-semibold'>Location</span>
              </div>
              <div>
                <div className='text-2xl font-bold text-white mb-1'>Bhopal, India</div>
                <div className='text-sm text-slate-400'>Working Globally</div>
              </div>
            </div>
            <div className='absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
          </motion.div>

          {/* Typing Speed Card */}
          <motion.div 
            variants={itemVariants}
            className='col-span-4 row-span-1 rounded-3xl p-6 relative overflow-hidden
              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl'
          >
            <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl'></div>
            <div className='relative z-10 h-full flex items-center justify-between'>
              <div>
                <div className='flex items-center gap-2 text-emerald-400 mb-2'>
                  <Keyboard className='w-5 h-5' />
                  <span className='font-semibold'>Typing Speed</span>
                </div>
                <div className='text-4xl font-bold text-white'>70 <span className='text-lg text-slate-400'>WPM</span></div>
              </div>
              <Zap className='w-12 h-12 text-emerald-400/20' />
            </div>
          </motion.div>

          {/* Row 2 */}
          {/* Tech Stack Card */}
          <motion.div 
            variants={itemVariants}
            className='col-span-5 row-span-2 rounded-3xl p-6 relative overflow-hidden group
              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl'
          >
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-700'></div>
            <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full blur-3xl group-hover:bg-emerald-400/10 transition-all duration-700'></div>
            
            <div className='relative z-10'>
              <div className='flex items-center gap-2 text-emerald-400 mb-6'>
                <Code2 className='w-6 h-6' />
                <h3 className='text-xl font-bold text-white'>Tech Stack</h3>
              </div>
              
              <div className='space-y-4'>
                <div>
                  <div className='text-sm text-slate-400 mb-2'>Languages</div>
                  <div className='flex flex-wrap gap-2'>
                    {['Java', 'C++', 'JavaScript',].map((tech) => (
                      <span key={tech} className='px-3 py-1.5 bg-slate-800/70 text-slate-300 rounded-full text-sm border border-slate-700/50 hover:border-emerald-400/50 hover:text-emerald-400 hover:bg-slate-800 hover:scale-105 transition-all duration-300 cursor-default'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className='text-sm text-slate-400 mb-2'>Frontend</div>
                  <div className='flex flex-wrap gap-2'>
                    {['React', 'Tailwind', 'Next.js', 'Framer Motion'].map((tech) => (
                      <span key={tech} className='px-3 py-1.5 bg-slate-800/70 text-slate-300 rounded-full text-sm border border-slate-700/50 hover:border-emerald-400/50 hover:text-emerald-400 hover:bg-slate-800 hover:scale-105 transition-all duration-300 cursor-default'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className='text-sm text-slate-400 mb-2'>Backend & Tools</div>
                  <div className='flex flex-wrap gap-2'>
                    {['Node.js', 'MongoDB', 'Express', 'Git'].map((tech) => (
                      <span key={tech} className='px-3 py-1.5 bg-slate-800/70 text-slate-300 rounded-full text-sm border border-slate-700/50 hover:border-emerald-400/50 hover:text-emerald-400 hover:bg-slate-800 hover:scale-105 transition-all duration-300 cursor-default'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div 
            variants={itemVariants}
            className='col-span-3 row-span-1 rounded-3xl p-6 relative overflow-hidden
              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl'
          >
            <div className='relative z-10'>
              <div className='flex items-center gap-2 text-emerald-400 mb-3'>
                <BookOpen className='w-5 h-5' />
                <span className='font-semibold text-sm'>Currently Learning</span>
              </div>
              <div className='space-y-2'>
                <div className='text-white font-semibold'>System Design</div>
                <div className='text-white font-semibold'>"Licking up Backend</div>
                <div className='text-white font-semibold'>Social Interactions</div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className='col-span-4 row-span-1 rounded-3xl p-6 relative overflow-hidden
              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl'
          >
            <div className='relative z-10'>
              <div className='text-slate-400 mb-4 font-semibold text-sm'>Connect With Me</div>
              <div className='flex gap-3'>
                <a href='#' className='p-3 bg-slate-800/70 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 hover:bg-slate-800 transition-all duration-300 group'>
                  <Github className='w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors' />
                </a>
                <a href='#' className='p-3 bg-slate-800/70 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 hover:bg-slate-800 transition-all duration-300 group'>
                  <Linkedin className='w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors' />
                </a>
                <a href='#' className='p-3 bg-slate-800/70 rounded-xl border border-slate-700/50 hover:border-emerald-400/50 hover:bg-slate-800 transition-all duration-300 group'>
                  <Mail className='w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors' />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            className='col-span-7 row-span-1 rounded-3xl p-6 relative overflow-hidden group
              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl'
          >
            <div className='absolute top-0 right-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl group-hover:bg-emerald-400/10 transition-all duration-700'></div>
            
            {/* Animated gradient line */}
            <div className='absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            <div className='relative z-10 flex items-center justify-between h-full'>
              <div className='flex-1'>
                <div className='flex items-center gap-2 text-emerald-400 mb-3'>
                  <div className='p-2 bg-emerald-400/10 rounded-xl border border-emerald-400/20 group-hover:bg-emerald-400/20 transition-all duration-500'>
                    <Target className='w-5 h-5' />
                  </div>
                  <h3 className='text-xl font-bold text-white'>Vision & Goals</h3>
                </div>
                <p className='text-slate-300 text-sm leading-relaxed'>
                  Create app that don't stuck and are scalable <br />
                  <span className='text-emerald-400 font-semibold'> Learn → Build → Ship → Repeat</span> <RocketIcon className='inline-block'/>
                </p>
              </div>
              <div className='ml-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500'>
                <Zap className='w-16 h-16 text-emerald-400' />
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats Card */}
          <motion.div 
            variants={itemVariants}
            className='col-span-12 row-span-1 rounded-3xl p-6 relative overflow-hidden
              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl
              border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 shadow-2xl group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative z-10 flex items-center justify-between h-full'>
              <div className='flex items-center gap-4'>
                <div className='p-3 bg-emerald-400/10 rounded-2xl border border-emerald-400/20'>
                  <Github className='w-8 h-8 text-emerald-400' />
                </div>
                <div>
                  <div className='text-white font-bold text-xl mb-1'>GitHub Active</div>
                  <div className='text-slate-400 text-sm'>Contributing daily to open source</div>
                </div>
              </div>
              <div className='text-right'>
                <div className='text-3xl font-bold text-emerald-400'>200+</div>
                <div className='text-xs text-slate-500'>Commits this year</div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Mobile View */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='md:hidden w-full flex flex-col gap-4 p-4'
      >
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>
            About <span className='text-emerald-400'>Me</span>
          </h1>
          <div className='h-1 w-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full'></div>
        </div>

        <div className='rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 border border-slate-700/50 shadow-xl'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='p-2 bg-emerald-400/10 rounded-xl border border-emerald-400/20'>
              <Rocket className='w-6 h-6 text-emerald-400' />
            </div>
            <h2 className='text-xl font-bold text-white'>Full-Stack Developer</h2>
          </div>
          <p className='text-slate-300 text-sm leading-relaxed'>
            Building scalable applications and mastering DSA.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-4 border border-slate-700/50 shadow-xl'>
            <MapPin className='w-5 h-5 text-emerald-400 mb-2' />
            <div className='text-white font-bold'>Bhopal, India</div>
            <div className='text-xs text-slate-400'>Working Globally</div>
          </div>
          <div className='rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-4 border border-slate-700/50 shadow-xl'>
            <Keyboard className='w-5 h-5 text-emerald-400 mb-2' />
            <div className='text-white font-bold'>65+ WPM</div>
            <div className='text-xs text-slate-400'>Typing Speed</div>
          </div>
        </div>

        <div className='rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 border border-slate-700/50 shadow-xl'>
          <div className='flex items-center gap-2 text-emerald-400 mb-4'>
            <Code2 className='w-5 h-5' />
            <h3 className='font-bold text-white'>Tech Stack</h3>
          </div>
          <div className='flex flex-wrap gap-2'>
            {[ 'Java', 'C++', 'JavaScript','React', 'Tailwind', 'Next.js', 'Framer Motion','Node.js', 'MongoDB', 'Express', 'Git'].map((tech) => (
              <span key={tech} className='px-3 py-1.5 bg-slate-800/70 text-slate-300 rounded-full text-xs border border-slate-700/50'>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className='rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 border border-slate-700/50 shadow-xl'>
          <div className='flex items-center gap-2 text-emerald-400 mb-3'>
            <Target className='w-5 h-5' />
            <h3 className='font-bold text-white'>Vision</h3>
          </div>
          <p className='text-slate-300 text-sm'>
            Create app that don't stuck and are scalable <br /> <span className='text-emerald-400 font-semibold'>Learn → Build → Ship</span> 🚀
          </p>
        </div>

        <div className='rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 border border-slate-700/50 shadow-xl'>
          <div className='text-slate-400 mb-3 font-semibold text-sm'>Connect With Me</div>
          <div className='flex gap-3'>
            <a href='#' className='p-3 bg-slate-800/70 rounded-xl border border-slate-700/50'>
              <Github className='w-5 h-5 text-slate-300' />
            </a>
            <a href='#' className='p-3 bg-slate-800/70 rounded-xl border border-slate-700/50'>
              <Linkedin className='w-5 h-5 text-slate-300' />
            </a>
            <a href='#' className='p-3 bg-slate-800/70 rounded-xl border border-slate-700/50'>
              <Mail className='w-5 h-5 text-slate-300' />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About