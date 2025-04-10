import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full mx-auto p-4 md:p-8 mt-16 bg-slate-100">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Get in Touch with me:</h1>
          <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
            <motion.a
              href="https://github.com/alexnasir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaGithub size={24} className="text-gray-700" />
              <span className="mt-2 text-xs md:text-sm text-gray-700">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/alexnasilife"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaFacebook size={24} className="text-blue-700" />
              <span className="mt-2 text-xs md:text-sm text-gray-700">Facebook</span>
            </motion.a>
            <motion.a
              href="https://x.com/AlexNasial2303"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaTwitter size={24} className="text-blue-400" />
              <span className="mt-2 text-xs md:text-sm text-gray-700">X</span>
            </motion.a>
            <motion.a
              href="https://wa.me/+254713386680"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaWhatsapp size={24} className="text-green-700" />
              <span className="mt-2 text-xs md:text-sm text-gray-700">WhatsApp</span>
            </motion.a>
            <motion.a
              href="tel:+254713386680"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaPhone size={24} className="text-green-700" />
              <span className="mt-2 text-xs md:text-sm text-gray-700">+254713386680</span>
            </motion.a>
            <motion.a
              href="mailto:alexnasiali45@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaEnvelope size={24} className="text-red-700" />
              <span className="mt-2 text-xs md:text-sm text-gray-700">Email</span>
            </motion.a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="w-full p-2 border rounded bg-slate-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border rounded bg-slate-500"
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
              className="w-full p-2 border rounded bg-slate-500"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer className="w-full text-center py-4 bg-gray-800 text-white mt-8">
            <p>@Alex Nasiali 2025©</p>
          </footer>
    </div>
  );
};

export default Contact;