import React from 'react';
import { delay, motion } from 'framer-motion';
import { ArrowRight, Edit3 } from 'lucide-react';

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0,y:100 },
    visible: {
        y:0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 flex items-center justify-center px-4 py-8 mb-30">
      
      
      <motion.div 
        className="w-full max-w-4xl mx-auto  "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {/* Blog Badge */}
       <motion.div variants={itemVariants} className='inline-block mb-16 rounded-full p-2 border-2 border-emerald-400 px-4 hover:px-6 cursor-pointer transition-all ease-in-out duration-150  '>
         <div 
          className="flex items-center gap-2  ">
          <Edit3 className="w-4 h-4 text-emerald-400 " />
          <span className="text-emerald-400 text-sm font-medium">Blog</span>
        </div>
       </motion.div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8 tracking-wider">
          <div className="flex-1">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Learning, Building, and
              <br />
              Documenting
            </motion.h1>
            
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Insights and experiences from my journey as a developer—exploring ideas,
              <br />
              overcoming challenges, and sharing lessons learned along the way.
            </motion.p>
          </div>

          <motion.button
            className="border border-white rounded-full px-6 py-3 flex items-center gap-2 hover:border-white/40 transition-colors duration-150 cursor-pointer self-start lg:self-end "
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm text-white">View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Blog Posts */}
        <div className="space-y-10 mt-30">


          {/* First Blog Post */}
          <motion.article
            className="flex flex-col md:flex-row gap-6 group cursor-pointer"
           initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            whileHover="hover"
          >
            <motion.div 
              className="w-full md:w-80 h-48 md:h-40 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex-shrink-0 relative overflow-hidden"
              variants={hoverVariants}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-white rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-white transform rotate-45" />
                </div>
              </div>
            </motion.div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>December 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              
              <motion.h2 
                className="text-xl md:text-2xl font-semibold group-hover:text-emerald-400 transition-colors duration-200"
                variants={itemVariants}
              >
                Hacky Way to Customize Shadcn's Tooltip Arrows
              </motion.h2>
              
              <p className="text-gray-400 leading-relaxed">
                A workaround for displaying a custom SVG arrow in shadcn's tooltip.
              </p>
              
              <div className="flex items-center justify-between">
                <motion.button
                  className="text-emerald-400 flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                
                <div className="flex gap-2">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">react</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">css</span>
                </div>
              </div>
            </div>
          </motion.article>

          <hr />

          {/* Second Blog Post */}
          <motion.article
            className="flex flex-col md:flex-row gap-6 group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            whileHover="hover"
          >
            <motion.div 
              className="w-full md:w-80 h-48 md:h-40 rounded-lg flex-shrink-0 relative overflow-hidden"
              variants={hoverVariants}
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='160' viewBox='0 0 320 160'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2387CEEB'/%3E%3Cstop offset='100%25' style='stop-color:%23E0F6FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23sky)'/%3E%3Cpolygon points='50,80 80,60 110,70 140,50 170,60 200,40 230,50 260,30 290,40 320,20 320,160 0,160' fill='%23B0E0E6' opacity='0.7'/%3E%3Cpolygon points='0,100 40,90 80,100 120,85 160,95 200,80 240,90 280,75 320,85 320,160 0,160' fill='%2398D8E8' opacity='0.8'/%3E%3Cpath d='M100,70 L130,65 L160,70 L190,60 L220,65' stroke='%23228B22' stroke-width='3' fill='none'/%3E%3Cellipse cx='160' cy='90' rx='15' ry='8' fill='%23006400'/%3E%3C/svg%3E" 
                alt="Seaplane illustration"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>December 12, 2024</span>
                <span>•</span>
                <span>3 min read</span>
              </div>
              
              <motion.h2 
                className="text-xl md:text-2xl font-semibold group-hover:text-emerald-400 transition-colors duration-200"
                variants={itemVariants}
              >
                Setting Dynamic Default Values with Zod Schema
              </motion.h2>
              
              <p className="text-gray-400 leading-relaxed">
                Leverage Zod's powerful features to set dynamic default values and enhance data validation with flexibility and ease.
              </p>
              
              <div className="flex items-center justify-between">
                <motion.button
                  className="text-emerald-400 flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                
                <div className="flex gap-2">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">zod</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">typescript</span>
                </div>
              </div>
            </div>
          </motion.article>
          <hr />
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;