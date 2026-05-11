'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/BUSINESS ON LAPTOP.jpg',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'Product Design',
    image: '/CODE IN THE DARK.jpg',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile App Redesign',
    category: 'UI/UX',
    image: '/Cool set up UI UX.jpg',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'SaaS Platform',
    category: 'Full Stack',
    image: '/LANGUAGES.jpg',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: '/DIGITAL COMOFRT.jpg',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Client Portal',
    category: 'Web App',
    image: '/UIUX.jpg',
    gradient: 'from-rose-500 to-pink-500',
  },
];

export default function MinimalProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-semibold text-gray-500 tracking-widest mb-4">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-200 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
                />

                {/* Placeholder or Image */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <p className="font-semibold">{project.title}</p>
                  </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-30 blur-2xl rounded-2xl -z-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgb(99, 102, 241), rgb(168, 85, 247))`,
                  }}
                />
              </div>

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-white/70 tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {project.title}
                  </h3>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} /> View
                  </motion.button>
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/20 text-white rounded-lg font-medium text-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code2 size={16} /> Code
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
