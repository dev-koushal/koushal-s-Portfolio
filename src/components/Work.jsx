import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FolderOpen } from 'lucide-react';
import AlumniSoftware from '../assets/AlumniSofttware.png'
import ClassConnect from '../assets/ClassConnect.png'
const Work = () => {
  const containerVariants = {
    hidden: { opacity: 0,y:100 },
    visible: {
        y:0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    },
     viewport: {once:true}
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
     viewport: {once:true}
  };

  return (
    <div id='work' className="min-h-screen w-[90%] md:w-[70%] md:flex mx-auto justify-center text-gray-300 ">
      {/* Header */}
      

      {/* Main Content */}
      <motion.div  className="px-4 sm:px-8 py-12" viewport={{once:true}} >
        <div>
        <motion.div variants={itemVariants} viewport={{once: true}}  initial="hidden"
        whileInView="visible" className="flex md:flex-row items-start md:items-center justify-between  py-6 gap-8 mb-10">
        <div className="flex items-center gap-2 text-emerald-400 border-2 border-emerald-400 px-4 py-2 rounded-full">
          <FolderOpen size={20} />
          <span className="font-medium">Projects</span>
        </div>

        <motion.button
          className="btn btn-outline btn-sm text-white hover:bg-white hover:text-black border-2 border-emerald-400 px-4 py-5 rounded-full flex items-center gap-2"
         
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         <a href="https://github.com/dev-koushal"> View all projects</a>
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>
      </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{once: true}}
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-wider  mb-8 max-w-full md:max-w-2xl">
            Milestones in the<br />
            learning journey
          </h1>

          <div className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-full md:max-w-3xl mb-16">
            <p>Each project marks a step forward, showcasing my growth and journey as a developer.</p>
            <p>Explore how I've tackled challenges and built solutions along the way.</p>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-full md:max-w-6xl mb-12">
          {/* Project 1 - Mobile App */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{once:true}}
          >
            <div className="rounded-3xl p-4 sm:p-8 mb-6 h-40 sm:h-60 w-[80] flex items-center justify-center overflow-hidden relative">
             <img src={AlumniSoftware} className='rounded-2xl' alt="" />
            </div>

            <div className="text-gray-400 text-sm mb-2">2025</div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">
              Alumni Mangament : Mangage alumni Network and build connections effectively.
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Built for connecting student to alumni directly without third party socials and distractions.
            </p>

            <motion.button
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              Read more
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Project 2 - Desktop App */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{once:true}}
          >
            <div  className="rounded-3xl p-4 sm:p-8 mb-6 h-40 sm:h-60  flex items-center justify-center overflow-hidden relative">
              <img className='rounded-2xl' src={ClassConnect} alt="" />
              <div className="transform scale-75 sm:scale-100">

              </div>
            </div>

            <div className="text-gray-400 text-sm mb-2">2025</div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight ">
              ClassConnect : Connect to classes even with low network and laggy phone
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              A full-stack application that enables students to join in online Classrooms from rural areas. 
            </p>

            <motion.button
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              Read more
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
     <hr />
      </motion.div>
    </div>
  );
};

export default Work;
