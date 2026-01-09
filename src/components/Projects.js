import { motion } from 'framer-motion';
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Nasiali Portfolio',
    description: 'A responsive web application built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://my-portfolio-gamma-nine-94.vercel.app',
    image: 'Screenshot from 2025-04-10 10-13-32.png',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Event Scoring System',
    description: 'Real-time event scoring system with PHP, JavaScript, MySQL and XAMPP Apache',
    tech: ['PHP', 'JavaScript', 'MySQL'],
    liveLink: 'https://eventscoringsystem.wuaze.com',
    image: 'Screenshot from 2025-05-24 20-14-15.png',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Landers',
    description: 'Interactive landing page with React and Tailwind CSS',
    tech: ['React', 'Tailwind CSS'],
    liveLink: 'https://landn.netlify.app',
    image: 'Screenshot from 2025-04-10 10-17-27.png',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    name: 'LopCafe',
    description: 'Coffee specialized fullstack recipe application',
    tech: ['React', 'Node.js', 'Database'],
    liveLink: 'https://lopdrinks-blwa-5ky8hytoj-alexs-projects-7f85cd3e.vercel.app/',
    image: 'a1.png',
    gradient: 'from-orange-500 to-red-500'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 w-full mx-auto px-4  bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-4"
          >
            <span className="text-blue-400 text-sm font-semibold">PORTFOLIO</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl">
            A showcase of my recent work demonstrating modern web development and innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Gradient overlay */}
                <motion.div
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 z-0`}
                />

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4 z-10">
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                  >
                    <span>View Live Project</span>
                    <motion.svg
                      animate={{ x: hoveredId === project.id ? 5 : 0 }}
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.a>
                </div>

                {/* Animated glow */}
                <motion.div
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0
                  }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 blur-xl -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Let's collaborate and create something amazing together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg"
            >
              Let's Talk
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;