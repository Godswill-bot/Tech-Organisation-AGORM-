'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Creative Director',
    specialty: 'Brand Strategy',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    specialty: 'UI/UX Design',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Marcus Davis',
    role: 'Full Stack Dev',
    specialty: 'Web Development',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Emma Wilson',
    role: 'Product Manager',
    specialty: 'Strategy & Growth',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'James Lee',
    role: 'DevOps Engineer',
    specialty: 'Infrastructure',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Lisa Anderson',
    role: 'QA Lead',
    specialty: 'Quality Assurance',
    gradient: 'from-rose-500 to-pink-500',
  },
];

export default function MinimalTeam() {
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
    <section id="team" className="relative py-20 bg-white">
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
            MEET OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The Talented People Behind AGOM
          </h2>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              {/* Avatar */}
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4 text-white text-2xl font-bold group-hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.1 }}
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </motion.div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-transparent bg-gradient-to-r bg-clip-text text-sm font-semibold mb-2">
                {member.role}
              </p>

              {/* Specialty */}
              <p className="text-gray-600 text-sm mb-6">
                {member.specialty}
              </p>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={16} />
                </motion.button>
                <motion.button
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users size={16} />
                </motion.button>
              </motion.div>

              {/* Accent Line */}
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ transformOrigin: 'center' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
