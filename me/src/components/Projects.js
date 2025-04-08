import { motion } from "framer-motion";
import React from "react";

// Sample project data
const projects = [
  {
    id: 1,
    name: "LopDrinks",
    description: "A responsive web application built with React and Node.js",
    liveLink: "https://project-one-example.com",
  },
  {
    id: 2,
    name: "Swift Shop",
    description: "E-commerce platform with real-time inventory management",
    liveLink: "https://project-two-example.com",
  },
  {
    id: 3,
    name: "AIM",
    description: "Interactive dashboard with data visualization",
    liveLink: "https://project-three-example.com",
  },
  {
    id: 4,
    name: "Students Grading System",
    description: "Mobile-first portfolio website with animations",
    liveLink: "https://project-four-example.com",
  },
];

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3
    }
  }
};

const Projects = () => {
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
            className="bg-white rounded-lg p-6 flex flex-col gap-4 border border-gray-200"
          >
            <h3 className="text-2xl m-0 text-gray-800">{project.name}</h3>
            <p className="text-base text-gray-600 m-0 flex-grow">{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-4 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              View Live Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;