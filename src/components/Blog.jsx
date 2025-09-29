import React from 'react';
import { delay, motion } from 'framer-motion';
import { ArrowRight, Edit3 } from 'lucide-react';
import FirstBlogImg from '../assets/reactBlog.png';
import SecondBlogImg from '../assets/backendBlog.jpg';
import { useNavigate } from 'react-router';
import BlogPage from '../Pages/BlogPage';

const Blog = () => {
   
  const navigate = useNavigate();
  
 const handlenavigate = ()=>{
  navigate('koushal/blogs');
 }

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
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6"
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
            <span className="text-sm text-white" onClick={handlenavigate}>View all articles</span>
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
            onClick={handlenavigate }
          >
            <motion.div 
              className="w-full md:w-80 h-48 md:h-40 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex-shrink-0 relative overflow-hidden"
              variants={hoverVariants}
            >
             <img src={FirstBlogImg} alt="React overcome" />
            </motion.div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>August 15, 2025</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              
              <motion.h2 
                className="text-xl md:text-2xl font-semibold group-hover:text-emerald-400 transition-colors duration-200"
                variants={itemVariants}
              >
                My Rollercoaster with ReactJS <br />(a.k.a. How I Stopped Fighting JSX)
              </motion.h2>
              
              <p className="text-gray-400 leading-relaxed">
                When I first opened a React tutorial, my brain said:“Bro… HTML ke beech mein curly braces? Is this even legal?”
              </p>
              
              <div className="flex items-center justify-between">
                <motion.button
                  className="text-emerald-400 flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span >Read more</span>
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
            onClick={handlenavigate }
          >
            <motion.div 
              className="w-full md:w-80 h-48 md:h-40 rounded-lg flex-shrink-0 relative overflow-hidden"
              variants={hoverVariants}
            >
              <img 
                src={SecondBlogImg} 
                alt="Backend Nightmare"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>August 12, 2025</span>
                <span>•</span>
                <span>3 min read</span>
              </div>
              
              <motion.h2 
                className="text-xl md:text-2xl font-semibold group-hover:text-emerald-400 transition-colors duration-200"
                variants={itemVariants}
              >
                Why I Stopped Thinking of Backend as “Just APIs”
              </motion.h2>
              
              <p className="text-gray-400 leading-relaxed">
                How my thinking approach changed from creating and thinking only CRUD to sliding into Systems...
              </p>
              
              <div className="flex items-center justify-between">
                <motion.button
                  className="text-emerald-400 flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span onClick={handlenavigate }>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                
                <div className="flex gap-2">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">nodeJS</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Database</span>
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