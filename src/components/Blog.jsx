import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Edit3 } from 'lucide-react';
import FirstBlogImg from '../assets/reactBlog.png';
import SecondBlogImg from '../assets/backendImge.png';
import { useNavigate } from 'react-router';

const Blog = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate('koushal/blogs');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      y: 0,
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
      transition: { duration: 0.6 }
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
        className="w-full max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* Badge */}
        <motion.div variants={itemVariants} className='inline-block mb-16 rounded-full p-2 border-2 border-emerald-400 px-4 hover:px-6 transition-all'>
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Blog</span>
          </div>
        </motion.div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-8 tracking-wider">
          <div className="flex-1">
            <motion.h1 className="text-3xl md:text-5xl font-semibold mb-6" variants={itemVariants}>
              Learning, Building, and
              <br />
              Documenting
            </motion.h1>

            <motion.p className="text-gray-400 text-lg max-w-2xl" variants={itemVariants}>
              Insights from building real-world systems—focusing on scalability,
              architecture, and practical engineering decisions.
            </motion.p>
          </div>

          <motion.button
            onClick={handlenavigate}
            className="border border-white rounded-full px-6 py-3 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-white">View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* BLOGS */}
        <div className="space-y-10 mt-20">
          <hr />
          {/* BLOG 3 - LEDGER */}
          <motion.article className="flex flex-col md:flex-row gap-6 group cursor-pointer"
            whileHover="hover" onClick={handlenavigate}>
            
             <motion.div className="w-full md:w-80 h-40 overflow-hidden rounded-lg" variants={hoverVariants}>
              <img src="/ledger.png" alt="" />
            </motion.div>
            <div className="flex-1 space-y-4">
              <div className="text-sm text-gray-400">Feb 20, 2026 </div>

              <h2 className="text-xl font-semibold group-hover:text-emerald-400">
                Designing a Ledger System for Payments
              </h2>

              <p className="text-gray-400">
                Exploring how ledger-based systems ensure consistency in financial transactions—covering double-entry design, idempotency, and distributed reliability.
              </p>
            </div>
          </motion.article>
 {/* BLOG 2 */}
          <motion.article className="flex flex-col md:flex-row gap-6 group cursor-pointer"
            whileHover="hover" onClick={handlenavigate}>
            
            <motion.div className="w-full md:w-80 h-40 overflow-hidden rounded-lg" variants={hoverVariants}>
              <img src="/Bun.webp" alt="" />
            </motion.div>

            <div className="flex-1 space-y-4">
              <div className="text-sm text-gray-400">Aug 12, 2024 </div>

              <h2 className="text-xl font-semibold group-hover:text-emerald-400">
                Designing Backend Systems Beyond CRUD
              </h2>

              <p className="text-gray-400">
                Moving beyond CRUD APIs to designing scalable systems—handling concurrency, latency, and reliable data flow.
              </p>
            </div>
          </motion.article>
          <hr />

        </div>

      </motion.div>
    </div>
  );
};

export default Blog;