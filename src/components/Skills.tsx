"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "C", "Java", "Dart", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Tech",
    skills: ["Flutter", "Node.js", "Express.js", "React.js", "Riverpod", "Firebase", "MongoDB", "REST APIs", "Cloudinary"]
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Android Studio", "Git", "GitHub", "Postman", "Figma"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"]
  }
];

export default function Skills() {
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
            Technical Skills
          </h2>
          <div className="h-[1px] w-full bg-neutral-800" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-neutral-800 pb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-lg text-sm text-neutral-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
