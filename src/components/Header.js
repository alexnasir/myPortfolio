import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';

function Header({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Alex Nasiali
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={item.action}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-gray-300 hover:text-white font-medium rounded-full hover:bg-white/10 transition-all relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-slate-900/50 backdrop-blur-lg rounded-2xl mt-2 border border-white/10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      item.action();
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-3 text-left text-gray-300 hover:text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full px-4 py-3 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg mx-auto"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Header;