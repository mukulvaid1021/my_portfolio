"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FitForge",
    category: "Gym Management System",
    description: "Full-stack platform with Admin/Member portals, JWT auth, RBAC, and AI chatbot. Deployed on Vercel & Render.",
    year: "2026",
    tech: ["Flutter", "React.js", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Airbnb Clone",
    category: "Full-Stack Marketplace",
    description: "Production-grade rental marketplace handling 1,000+ bookings with secure sessions and dynamic EJS UI.",
    year: "2025",
    tech: ["Node.js", "Express.js", "MongoDB", "Passport.js"]
  },
  {
    id: 3,
    title: "Mood Tracker App",
    category: "Mobile Application",
    description: "Cross-platform app featuring daily logging, streak tracking, happiness analytics, and secure Firebase auth.",
    year: "2025",
    tech: ["Flutter", "Firebase", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Works
          </h2>
          <div className="h-[1px] w-full bg-neutral-800" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative flex flex-col p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-8">
                <span className="text-sm font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">{project.year}</span>
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="mt-auto z-10">
                <span className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider block">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors duration-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
