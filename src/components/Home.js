import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cvUrl = 'alexnasialiCV.pdf';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    window.open(cvUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0 w-full lg:w-1/2 text-white"
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit mb-6"
          >
            <span className="text-2xl">👋</span>
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold mb-4"
          >
            I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Alex Nasiali
            </span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-2xl lg:text-4xl font-semibold mb-2 text-gray-200">
              Fullstack Developer
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Based in Nairobi, Kenya
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg max-w-xl mb-8 leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web technologies. 
            Specialized in building scalable, performant applications that make an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-1 mt-12"
          >
            <div>
              <div className="text-3xl font-bold text-white">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 flex items-center justify-center p-1"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30" />
            
            {/* Image container with glassmorphism */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
              <img
                src="./IMG_20240601_124522_2 (2).jpg"
                alt="Alex Nasiali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-blue-500 rounded-full text-white text-sm font-semibold shadow-lg"
            >
              React Expert
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 bg-purple-500 rounded-full text-white text-sm font-semibold shadow-lg"
            >
              Full Stack
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;