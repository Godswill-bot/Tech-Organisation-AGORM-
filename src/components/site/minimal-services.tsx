'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Zap, Globe, Shield, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom-built web applications designed for performance and user experience.',
  },
  {
    icon: Rocket,
    title: 'Product Strategy',
    description: 'Strategic guidance to turn your vision into a market-ready product.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast applications optimized for speed and efficiency.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Scale your product globally with our international expertise.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security protecting your data and users.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Data-driven insights to measure and improve your success.',
  },
];

export default function MinimalServices() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="services" className="relative py-20 bg-white">
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
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What We Offer
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-gray-900 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-4 p-3 bg-gray-200 group-hover:bg-white rounded-lg w-fit transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-gray-900 group-hover:text-gray-900" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Accent Line */}
                <motion.div
                  className="mt-4 h-1 bg-gray-900 group-hover:bg-white rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
