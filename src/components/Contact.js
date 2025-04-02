import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-16 bg-slate-100">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Get in Touch Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Get in Touch with me:</h1>
          <div className="flex flex-wrap gap-6 mb-6">
            {/* GitHub */}
            <motion.a
              href="https://github.com/alexnasir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaGithub size={32} className="text-gray-700" />
              <span className="mt-2 text-sm text-gray-700">GitHub</span>
            </motion.a>
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/alexnasir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaFacebook size={32} className="text-blue-700" />
              <span className="mt-2 text-sm text-gray-700">Facebook</span>
            </motion.a>
            {/* X */}
            <motion.a
              href="https://x.com/gee_bwoy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaTwitter size={32} className="text-blue-400" />
              <span className="mt-2 text-sm text-gray-700">X</span>
            </motion.a>
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/0713386680"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaWhatsapp size={32} className="text-green-700" />
              <span className="mt-2 text-sm text-gray-700">WhatsApp</span>
            </motion.a>
            {/* Phone */}
            <motion.a
              href="tel:0713386680"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaPhone size={32} className="text-green-700" />
              <span className="mt-2 text-sm text-gray-700">Call</span>
            </motion.a>
            {/* Email */}
            <motion.a
              href="mailto:alexnasiali45@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <FaEnvelope size={32} className="text-red-700" />
              <span className="mt-2 text-sm text-gray-700">Email</span>
            </motion.a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-1/2 ">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="p-2 border rounded bg-slate-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-2 border rounded bg-slate-500"
            />
            <textarea
              name="Message"
              rows="9"
              placeholder="Your Message"
              className="p-2 border rounded bg-slate-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;