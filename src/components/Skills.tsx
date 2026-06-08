'use client';

import { motion } from "framer-motion";
import { SKILLS } from "@/constants";

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 bg-transparent py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-20 text-center"
        >
          Technical <span className="text-zinc-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#1a1a1a]/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <h3 className="text-xl font-semibold text-white tracking-tight mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
                  >
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
