'use client';

import { motion } from "framer-motion";
import { ACHIEVEMENTS, EDUCATION } from "@/constants";
import { useModal } from "@/context/ModalContext";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Achievements() {
  const { setSelectedItem } = useModal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="achievements" className="relative z-20 bg-transparent py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-20 text-center"
        >
          Education & <span className="text-zinc-500">Achievements</span>
        </motion.h2>

        {/* Education Section (Top) */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white tracking-tight mb-8 drop-shadow-md text-center">Education</h3>
          <div className="flex flex-col items-center gap-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-3xl bg-[#1a1a1a]/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <h4 className="text-2xl font-bold text-white mb-2 text-center md:text-left">{edu.degree}</h4>
                <p className="text-zinc-400 mb-4 text-center md:text-left text-lg">{edu.institution}</p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold mt-6">
                  <span className="text-orange-400/90 text-lg">{edu.year}</span>
                  <span className="bg-white/10 px-5 py-2 rounded-full text-white/90 text-lg tracking-widest">{edu.cgpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Carousel Section (Bottom) */}
        <div>
          <div className="flex items-center justify-between mb-8 px-4">
            <h3 className="text-2xl font-semibold text-white tracking-tight drop-shadow-md">Certifications & Awards</h3>
            <div className="flex gap-2">
              <button 
                onClick={scrollLeft}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={scrollRight}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="relative w-full">
            {/* Scrollable Container */}
            <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 hide-scrollbar">
              {ACHIEVEMENTS.map((ach: any, idx) => {
                const hasDocument = !!ach.document;
                const itemId = `ach-${idx}`;

                return (
                  <motion.div
                    key={idx}
                    layoutId={hasDocument ? itemId : undefined}
                    onClick={(e) => {
                      if (hasDocument && ach.documentType) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setSelectedItem({
                          id: itemId,
                          type: ach.documentType,
                          url: ach.document,
                          title: ach.title,
                          rect: {
                            top: rect.top,
                            left: rect.left,
                            width: rect.width,
                            height: rect.height,
                          }
                        });
                      }
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className={`snap-center shrink-0 w-[85vw] md:w-[400px] flex flex-col justify-between bg-[#1a1a1a]/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:-translate-y-2 ${hasDocument ? 'cursor-pointer' : ''}`}
                  >
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 leading-snug">{ach.title}</h4>
                      <p className="text-zinc-400">{ach.organization}</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-8">
                      <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        {ach.type}
                      </span>
                      <span className="bg-white/10 px-4 py-1.5 rounded-full text-white text-sm font-medium">
                        {ach.year}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Fade edges to indicate scrolling */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
