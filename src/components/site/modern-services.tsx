"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Cpu,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Cutting-edge web applications built with modern frameworks and best practices.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    description:
      "Strategic planning and execution for digital products that scale and perform.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized systems built for speed, reliability, and exceptional user experience.",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Infrastructure and solutions designed for worldwide deployment and accessibility.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security and data protection at every layer of development.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Data-driven insights and analytics to measure success and drive growth.",
    color: "from-green-500 to-emerald-500",
  },
];

export function ModernServices() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -left-64 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-64 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: 2,
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
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and drive innovation.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-6 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
