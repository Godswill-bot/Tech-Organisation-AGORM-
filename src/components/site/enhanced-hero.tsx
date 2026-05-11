"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Globe, Shield } from "lucide-react";

export function EnhancedHomepageHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F5F1ED] via-[#FBF7F3] to-[#EFE8E3]">
      {/* Decorative blur elements - warm muted colors */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-[10%] w-96 h-96 bg-[#D4A574] rounded-full blur-[120px] opacity-20"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 right-[15%] w-80 h-80 bg-[#8B5A8C] rounded-full blur-[100px] opacity-15"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute top-[60%] left-[50%] w-72 h-72 bg-[#A0826D] rounded-full blur-[110px] opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-[#D4A574]/20"
            >
              <div className="w-2 h-2 rounded-full bg-[#8B5A8C]" />
              <span className="text-sm font-medium text-[#5D4037]">Reimagining Digital Excellence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
              style={{
                background: "linear-gradient(135deg, #5D4037 0%, #8B5A8C 50%, #6B5344 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Build Digital Experiences That Matter
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#5D4037]/70 mb-8 leading-relaxed max-w-xl"
            >
              We blend creativity, strategy, and cutting-edge technology to craft digital solutions that elevate your brand and drive meaningful engagement with your audience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#8B5A8C] to-[#A68B7E] hover:shadow-lg transition-all duration-300"
              >
                Start a Project <ArrowRight className="inline ml-2" size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-[#5D4037] bg-white/60 backdrop-blur-md border border-[#D4A574]/30 hover:bg-white/80 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-[#D4A574]/20"
            >
              <div>
                <div className="text-3xl font-bold text-[#8B5A8C]">150+</div>
                <div className="text-sm text-[#5D4037]/60">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8B5A8C]">50+</div>
                <div className="text-sm text-[#5D4037]/60">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8B5A8C]">10+</div>
                <div className="text-sm text-[#5D4037]/60">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {[
              { icon: Globe, title: "Global Reach", desc: "Serving clients across continents" },
              { icon: Zap, title: "Lightning Fast", desc: "Performance optimized solutions" },
              { icon: Users, title: "Expert Team", desc: "Talented designers and developers" },
              { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade infrastructure" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 hover:bg-white/60 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A574]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-start gap-4">
                  <div className="mt-1 p-3 rounded-lg bg-gradient-to-br from-[#D4A574] to-[#A68B7E] text-white">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#5D4037] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#5D4037]/60">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#8B5A8C]/30 flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-[#8B5A8C] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
