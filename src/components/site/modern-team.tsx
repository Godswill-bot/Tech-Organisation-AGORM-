"use client";

import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    specialty: "Full-stack Architecture",
    gradient: "from-purple-500 to-pink-500",
    initial: "SC",
  },
  {
    name: "David Martinez",
    role: "Lead Product Designer",
    specialty: "UI/UX Design",
    gradient: "from-blue-500 to-cyan-500",
    initial: "DM",
  },
  {
    name: "Emma Johnson",
    role: "Senior Backend Engineer",
    specialty: "Cloud Infrastructure",
    gradient: "from-pink-500 to-orange-500",
    initial: "EJ",
  },
  {
    name: "Alex Kim",
    role: "AI/ML Specialist",
    specialty: "Machine Learning",
    gradient: "from-cyan-500 to-blue-500",
    initial: "AK",
  },
  {
    name: "Lisa Patel",
    role: "Product Manager",
    specialty: "Strategy & Growth",
    gradient: "from-orange-500 to-red-500",
    initial: "LP",
  },
  {
    name: "James Wilson",
    role: "DevOps Lead",
    specialty: "Infrastructure",
    gradient: "from-green-500 to-emerald-500",
    initial: "JW",
  },
];

export function ModernTeam() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: 1,
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
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Exceptional talent brought together to deliver extraordinary results.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Background gradient */}
                <div
                  className={`absolute -inset-20 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300`}
                  >
                    {member.initial}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-semibold text-sm mb-2">
                    {member.role}
                  </p>

                  {/* Specialty */}
                  <p className="text-white/60 text-sm mb-6">
                    {member.specialty}
                  </p>

                  {/* Social links */}
                  <div className="flex gap-3">
                    <button className="flex-1 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <Mail size={18} />
                    </button>
                    <button className="flex-1 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <Users size={18} />
                    </button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
