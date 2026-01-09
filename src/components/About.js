import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: 'Certificate in Software Engineering',
      period: '2024-2025',
      institution: 'Moringa School',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Kenya Certificate of Secondary Education',
      period: '2020-2023',
      institution: 'Lumakanda High School',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'Kenya Certificate of Primary Education',
      period: '2011-2019',
      institution: 'Lugala Primary School',
      icon: '✏️',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const highlights = [
    { icon: '💻', label: 'Full-Stack Developer', value: 'Expert' },
    { icon: '🚀', label: 'Projects Delivered', value: '50+' },
    { icon: '⚡', label: 'Technologies', value: '15+' },
    { icon: '🎯', label: 'Code Quality', value: 'A+' },
  ];

  const strengths = [
    { icon: '🎨', label: 'UI/UX Design' },
    { icon: '⚙️', label: 'System Architecture' },
    { icon: '🔒', label: 'Security First' },
    { icon: '📈', label: 'Performance' },
  ];

  return (
    <div className="w-full mx-auto p-4 md:p-1 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-4"
          >
            <span className="text-blue-400 text-sm font-semibold">GET TO KNOW ME</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 text-transparent bg-clip-text">
              About Me
            </span>
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-white/10">
                <img
                  src="lex.jpg"
                  alt="Alex Nasiali"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className=" text-sm mb-1">{item.label}</div>
                  <div className="text-white text-xl font-bold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Passionate Developer 
              <span className="text-blue-400"> Building the Future</span>
            </h3>
            
            <p className=" leading-relaxed">
              I am an aspiring Fullstack Developer with expertise and hands-on experience in building 
              full-stack applications using HTML, CSS-Tailwind, React, JavaScript, Flask, Python, and SQL. 
              Passionate about building scalable web applications, optimizing performance, and implementing 
              secure authentication systems.
            </p>
            
            <p className=" leading-relaxed">
              Strong problem-solving skills, a collaborative mindset, and experience in Agile methodologies. 
              Open to internship and freelance opportunities where I can contribute technical expertise while 
              continuing to grow in the field.
            </p>

            {/* Key Strengths */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all"
                >
                  <span className="text-2xl">{strength.icon}</span>
                  <span className="text-white font-medium">{strength.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Educational Journey
          </h2>

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                          {item.degree}
                        </h4>
                        <span className={`px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold`}>
                          {item.period}
                        </span>
                      </div>
                      <p className="text-blue-400 font-semibold">{item.institution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-1 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h3>
          <p className=" text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="alexnasialiCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" py-4 border-2 border-white/30 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/10 transition-all"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;