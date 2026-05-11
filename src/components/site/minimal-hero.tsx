'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCharacter1, AnimatedCharacter2, AnimatedCharacter3 } from './animated-characters';

export default function MinimalHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Content */}
          <motion.div variants={containerVariants}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-sm font-semibold text-gray-500 tracking-widest">
                DIGITAL EXPERIENCES
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              We Build Digital Experiences That Matter
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              At AGOM, we create beautiful, meaningful digital products that connect with your
              audience and drive real results. From strategy to execution, we're your partners in
              building something extraordinary.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              <motion.button
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Project
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Animated Characters */}
          <motion.div
            className="relative h-96 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Character 1 */}
              <motion.div
                className="absolute"
                initial={{ x: -80, y: 0 }}
                animate={{ x: -80, y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <AnimatedCharacter1 delay={0} />
              </motion.div>

              {/* Character 2 */}
              <motion.div
                className="absolute"
                initial={{ x: 0, y: 0 }}
                animate={{ x: 0, y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <AnimatedCharacter2 delay={0.2} />
              </motion.div>

              {/* Character 3 */}
              <motion.div
                className="absolute"
                initial={{ x: 80, y: 0 }}
                animate={{ x: 80, y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
              >
                <AnimatedCharacter3 delay={0.4} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '50+', label: 'Team Members' },
            { number: '10+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
