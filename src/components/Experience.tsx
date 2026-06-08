'use client';

import { motion } from "framer-motion";
import { INTERNSHIP } from "@/constants";
import { useModal } from "@/context/ModalContext";

export default function Experience() {
  const { setSelectedItem } = useModal();

  return (
    <section id="experience" className="relative z-20 bg-transparent py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-20 text-center"
        >
          Professional <span className="text-zinc-500">Experience</span>
        </motion.h2>

        <div className="space-y-16">
          {INTERNSHIP.map((exp, idx) => {
            const hasDocument = !!exp.document;
            const itemId = `exp-${idx}`;
            
            return (
            <motion.div
              key={idx}
              layoutId={hasDocument ? itemId : undefined}
              onClick={(e) => {
                if (hasDocument && exp.documentType) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setSelectedItem({
                    id: itemId,
                    type: exp.documentType as any,
                    url: exp.document as string,
                    title: exp.role,
                    rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
                  });
                }
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col md:flex-row gap-8 bg-[#1a1a1a]/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_50px_rgba(249,115,22,0.3)] hover:scale-110 hover:brightness-110 ${hasDocument ? 'cursor-pointer' : ''}`}
            >
              {/* Image Logo Side */}
              <div className="w-full md:w-[25%] flex-shrink-0 flex items-start justify-center md:justify-end">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex items-center justify-center p-2">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="max-w-full max-h-full object-contain rounded-xl opacity-90"
                  />
                </div>
              </div>

              {/* Data side */}
              <div className="w-full md:w-[75%]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-white tracking-tight">{exp.role}</h3>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.5)] text-white/90 text-sm font-semibold tracking-wider whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>

                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // Prevent card click from triggering when clicking the company link
                    e.stopPropagation();
                  }}
                  className="text-xl text-zinc-400 font-medium hover:text-white transition-colors mb-6 flex items-center gap-2 w-max"
                >
                  {exp.company}
                  <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <p className="text-zinc-400 font-light leading-relaxed mb-8">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 shadow-[0_5px_10px_rgba(0,0,0,0.3)] text-white text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
