'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Share2, Heart, Code2 } from 'lucide-react';

export default function MinimalFooter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer id="contact" className="relative bg-gray-900 text-white">
      {/* Top Glow Bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Animated Background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-5"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-3">AGOM</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building beautiful digital experiences that connect with people and drive real results.
            </p>
            <div className="flex gap-3">
              {[Share2, Heart, Code2].map((Icon, index) => (
                <motion.button
                  key={index}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Links - Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About', 'Careers', 'Blog', 'Press'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links - Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Web Development', 'Design', 'Strategy', 'Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={16} />
                <span>hello@agom.digital</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8" />

        {/* Newsletter & Bottom */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-3">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-gray-700 text-white placeholder-gray-500 rounded-l-lg focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
              <button className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-r-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-right"
          >
            <p className="text-sm text-gray-500">
              © 2026 AGOM Digital. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
