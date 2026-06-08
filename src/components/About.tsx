'use client';

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/constants";
import StreaksBackground from "./StreaksBackground";

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#050505] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <StreaksBackground />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

        {/* Profile Image / Abstract Artwork */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-video w-full max-w-xl mx-auto overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)]">
            <img
              src="https://raw.githubusercontent.com/anshumaanvats/AnshumaanVatsPortfolio/main/src/assets/about.jpg"
              alt="Anshumaan Vats"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>

        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
            About <span className="text-zinc-500">Me</span>
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed font-light text-justify">
            {ABOUT_TEXT}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            {['IoT & Embedded', 'Robotics', 'RPA Automation', 'Full-stack Web'].map((tag, idx) => (
              <span key={idx} className="px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.3)] text-sm text-white/80 font-medium tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
