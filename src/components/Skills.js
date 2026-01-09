import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendSkills = [
    {
      title: 'React',
      description: 'Building full-stack applications using React.js & Next.js.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg',
      level: 90,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Next.js',
      description: 'React framework for server-side rendering and static websites.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nextjs/nextjs-original.svg',
      level: 85,
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'TypeScript',
      description: 'Typed superset of JavaScript for scalable apps.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/typescript/typescript-original.svg',
      level: 80,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'JavaScript',
      description: 'Dynamic and interactive features.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg',
      level: 95,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'HTML',
      description: 'Semantic and accessible layouts.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg',
      level: 95,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'CSS/Tailwind',
      description: 'Responsive and modern designs using semantic and Tailwind CSS.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg',
      level: 90,
      color: 'from-blue-400 to-cyan-500'
    },
  ];

  const backendSkills = [
    {
      title: 'Node.js',
      description: 'RESTful APIs and server logic.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nodejs/nodejs-original.svg',
      level: 85,
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Python',
      description: 'Flask development.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg',
      level: 80,
      color: 'from-blue-400 to-yellow-400'
    },
    {
      title: 'PHP',
      description: 'Server-side scripting language for web development.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/php/php-original.svg',
      level: 75,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'MySQL',
      description: 'MySQL and PostgreSQL management.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg',
      level: 85,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Git & Tools',
      description: 'Git, Figma, Postman.',
      iconUrl: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/git/git-original.svg',
      level: 90,
      color: 'from-orange-500 to-red-600'
    },
  ];

  const otherSkills = [
    {
      title: 'Communication',
      description: 'Clear and effective collaboration with team members and stakeholders.',
      level: 95,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Entrepreneurship',
      description: 'Innovation and business-oriented mindset for projects.',
      level: 85,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Teamwork',
      description: 'Collaborative problem solving and pair programming.',
      level: 90,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Agile',
      description: 'Jira, Git Collaboration and Trello methodologies.',
      level: 80,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Time Management',
      description: 'Prioritization and efficient workflows.',
      level: 88,
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Adaptability',
      description: 'Quick learning and flexibility in changing environments.',
      level: 92,
      color: 'from-teal-400 to-green-500'
    },
  ];

  const tabs = [
    { id: 'frontend', label: 'Frontend', skills: frontendSkills },
    { id: 'backend', label: 'Backend', skills: backendSkills },
    { id: 'other', label: 'Soft Skills', skills: otherSkills },
  ];

  const activeSkills = tabs.find(tab => tab.id === activeTab)?.skills || [];

  return (
    <div className="w-full mx-auto px-4 py-20 md:px-8 min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-4"
          >
            <span className="text-purple-400 text-sm font-semibold">EXPERTISE</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text">
              Skills & Technologies
            </span>
          </h1>
          
          <p className=" text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 mb-12 justify-center"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5  hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 -z-10`}
                />

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  {skill.iconUrl ? (
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-3 shadow-lg`}>
                      <img
                        src={skill.iconUrl}
                        alt={`${skill.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">⚡</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className=" text-sm mb-4">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                {skill.level && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Proficiency</span>
                      <span className="text-white font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: '15+' },
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Built', value: '50+' },
            { label: 'Client Satisfaction', value: '100%' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-white/20 transition-all"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className=" text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;