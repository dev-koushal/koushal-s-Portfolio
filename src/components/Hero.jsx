import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statusVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.8 }
    }
  };

  return (
    <div id='home' className="h-screen bg-black relative overflow-hidden flex items-center justify-center p-8 tracking-wider">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-bl from-cyan-400/25 via-teal-500/15 to-transparent blur-3xl"></div>
        <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-bl from-emerald-400/20 via-cyan-500/12 to-transparent blur-2xl"></div>
        <div className="absolute top-0 left-1/4 w-3/4 h-1/2 bg-gradient-to-b from-teal-300/10 via-cyan-600/8 to-transparent blur-3xl"></div>
      </div>
      <motion.div 
        className="max-w-4xl w-full -mt-30 md:-mt-10 md:-ml-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div 
          className="flex justify-start mb-2 md:mb-6"
          variants={statusVariants}
        >
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 tracking-wider">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse "></div>
            <span className="text-slate-300 text-sm font-medium ">Available projects</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-7xl font-bold text-white  md:mb-4 leading-tight">
            Hi, I'm Koushal.
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h2 className="text-6xl md:text-7xl font-bold text-white/80 mb-12 leading-tight">
            A software engineer.
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-slate-400 text-md md:text-lg  max-w-2xl mb-10 leading-relaxed">
            Mainly working in the JavaScript ecosystem, I'm a dedicated problem-solver who thrives on learning and building.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex items-center gap-4"
          variants={socialVariants}
        >
          <motion.a
            href="https://github.com/dev-koushal"
            className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          
          <motion.a
            href="www.linkedin.com/in/koushal-yadav"
            className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
          
          <motion.a
            href="https://x.com/Koushal1199"
            className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={20} />
          </motion.a>
          
          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=dev.koushalyadav@gmail.com"
            className="w-14 h-14 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
          </motion.a>
          
          <motion.button
            className="hidden md:block bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl px-6 py-4 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300 font-medium text-sm tracking-wider uppercase ml-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;