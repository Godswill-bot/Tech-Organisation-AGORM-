"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Digital Commerce Platform",
    description: "Next-generation e-commerce solution with AI-powered recommendations.",
    category: "E-Commerce",
    gradient: "from-purple-500 via-pink-500 to-red-500",
  },
  {
    title: "Enterprise Analytics Dashboard",
    description: "Real-time analytics and reporting system for data-driven decisions.",
    category: "Analytics",
    gradient: "from-blue-500 via-cyan-500 to-emerald-500",
  },
  {
    title: "Mobile-First SaaS App",
    description: "Cloud-based software solution optimized for mobile and desktop.",
    category: "SaaS",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    title: "Real-Time Communication Hub",
    description: "Unified platform for seamless team collaboration and communication.",
    category: "Communication",
    gradient: "from-orange-500 via-yellow-500 to-pink-500",
  },
  {
    title: "AI Content Generator",
    description: "Intelligent system for automated high-quality content creation.",
    category: "AI/ML",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
  },
  {
    title: "Logistics Optimization Engine",
    description: "Smart routing and supply chain optimization with machine learning.",
    category: "Logistics",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
];

export function ModernProjects() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Showcase of innovative solutions that transformed businesses and drove results.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300">
                {/* Image placeholder with gradient */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />

                  {/* Floating shapes */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 bg-gradient-to-b from-slate-900/50 to-slate-950">
                  {/* Category */}
                  <div className="inline-block mb-3">
                    <span className="text-xs font-semibold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      View
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <Code2 size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      Code
                    </button>
                  </div>
                </div>

                {/* Hover glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
