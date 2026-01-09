import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    telephone: '',
    Message: ''
  });
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/alexnasir', color: 'from-gray-600 to-gray-800' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/alex-nasiali-219067333', color: 'from-blue-600 to-blue-800' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://x.com/AlexNasial2303', color: 'from-blue-400 to-blue-600' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/alex_nasi_life', color: 'from-pink-500 to-purple-600' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/alexnasilife', color: 'from-blue-600 to-indigo-700' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/+254713386680', color: 'from-green-500 to-green-700' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'alexnasiali45@gmail.com', href: 'mailto:alexnasiali45@gmail.com', color: 'from-red-500 to-pink-600' },
    { icon: FaPhone, label: 'Phone', value: '+254 713 386 680', href: 'tel:+254713386680', color: 'from-blue-500 to-cyan-600' },
  ];

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,12}$/;
    
    if (!phone) {
      setPhoneError('Phone number is required');
      return false;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError('Please enter a valid phone number (e.g., +254713386680 or 0713386680)');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'telephone') {
      validatePhoneNumber(value);
    }
  };

  const handleSubmit = () => {
    if (!validatePhoneNumber(formData.telephone)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const message = `Hello, I'm ${formData.Name}. ${formData.Message}`;
      const whatsappUrl = `https://wa.me/254713386680?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      setSubmitSuccess(true);
      setFormData({ Name: '', email: '', telephone: '', Message: '' });
      setPhoneError('');
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto p-1 md:p-1 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30 mb-4"
          >
            <span className="text-indigo-400 text-sm font-semibold">LET'S CONNECT</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h1>
          
          <p className="text text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="text text-sm">{item.label}</div>
                    <div className="text-white font-semibold">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`aspect-square bg-gradient-to-br ${social.color} rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all p-4`}
                  >
                    <social.icon className="text-3xl text-white mb-1" />
                    <span className="text-white text-xs font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-3xl p-1 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block  text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block  text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block  text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+254713386680"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                      phoneError ? 'border-red-500' : 'border-white/10 focus:border-indigo-500'
                    }`}
                  />
                  {phoneError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2"
                    >
                      {phoneError}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block  text-sm mb-2">Your Message</label>
                  <textarea
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-blue-800 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all resize-none"
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !!phoneError}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition-all ${
                    isSubmitting || phoneError
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-indigo-500/50'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : submitSuccess ? (
                    <span className="flex items-center justify-center gap-2">
                      ✓ Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 py-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text">
            @2026 Alex Nasiali 
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Contact;