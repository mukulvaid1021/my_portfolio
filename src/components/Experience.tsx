"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="relative w-full bg-[#0a0a0a] pb-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Experience
          </h2>
          <div className="h-[1px] w-full bg-neutral-800" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative border-l border-neutral-800 pl-8 md:pl-12 py-4"
        >
          <div className="absolute w-4 h-4 rounded-full bg-white -left-[8px] top-6" />
          
          <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between">
            <h3 className="text-2xl font-bold text-white">Flutter Developer Intern</h3>
            <span className="text-neutral-400 font-mono mt-1 md:mt-0">Feb 2026 – Apr 2026</span>
          </div>
          <h4 className="text-xl text-neutral-300 mb-6">Yellow Van — Remote</h4>
          
          <ul className="space-y-4 text-neutral-400 leading-relaxed list-disc list-outside ml-4 max-w-4xl">
            <li>Built 3+ responsive Flutter modules with REST API integration, enabling real-time data sync across Android and iOS platforms.</li>
            <li>Integrated Firebase Authentication and MongoDB backend, reducing unauthorized access incidents by enforcing secure session management.</li>
            <li>Optimized UI components and resolved critical bugs via Git-based workflows, improving feature delivery speed through structured code reviews.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
