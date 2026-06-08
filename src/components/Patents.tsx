'use client';

import { motion } from "framer-motion";
import { PATENTS } from "@/constants";
import { FileText, ExternalLink } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Patents() {
  const { setSelectedItem } = useModal();

  return (
    <section id="patents" className="relative z-20 bg-transparent py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-20"
        >
          <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <FileText className="text-zinc-300 w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white text-center">
            Published <span className="text-zinc-500">Patents</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PATENTS.map((patent, idx) => {
            const itemId = `patent-${idx}`;
            return (
            <motion.div
              key={idx}
              layoutId={itemId}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSelectedItem({
                  id: itemId,
                  type: 'pdf',
                  url: patent.pdf as string,
                  title: patent.name,
                  rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
                });
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col justify-between p-8 md:p-10 bg-[#1a1a1a]/40 backdrop-blur-md rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_50px_rgba(249,115,22,0.3)] hover:scale-110 hover:brightness-110 cursor-pointer"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <a
                    href={patent.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault(); // Let the card click handle it via modal
                    }}
                    className="inline-flex items-center gap-2 group/link cursor-pointer hover:bg-white/10 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all"
                  >
                    <span className="text-zinc-300 group-hover/link:text-white font-mono text-sm tracking-widest">{patent.applicationno}</span>
                    <ExternalLink className="w-4 h-4 text-zinc-500 group-hover/link:text-white transition-colors" />
                  </a>
                  <span className="text-zinc-500 font-bold tracking-widest bg-zinc-900 px-4 py-2 rounded-full text-xs box-border border-b border-white/10">
                    {patent.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                  {patent.name}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-8 text-sm md:text-base text-justify">
                  {patent.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {patent.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/5 shadow-[0_5px_10px_rgba(0,0,0,0.3)] border border-white/10 text-zinc-300 text-xs font-semibold tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
