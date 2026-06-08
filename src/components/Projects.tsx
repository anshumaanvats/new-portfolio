'use client';

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SOFTWARE_PROJECTS, HARDWARE_PROJECTS } from "@/constants";
import { useModal } from "@/context/ModalContext";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  video?: string;
}

function TiltCard({ proj }: { proj: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { setSelectedItem } = useModal();

  // Motion values for capturing mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for buttery transitions during tilt
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Transform coordinates into degrees of rotation
  const rotateX = useTransform(smoothY, [0, 1], [12, -12]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to [0...1]
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Return to dead center instantly on leave
    x.set(0.5);
    y.set(0.5);
  };

  const itemId = `project-${proj.title.replace(/\s+/g, '-')}`;

  return (
    <motion.div
      ref={ref}
      layoutId={proj.video ? itemId : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        if (proj.video) {
          const rect = e.currentTarget.getBoundingClientRect();
          setSelectedItem({
            id: itemId,
            type: 'video',
            url: proj.video,
            title: proj.title,
            rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
          });
        }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group flex flex-col relative overflow-hidden rounded-3xl bg-[#1a1a1a]/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 hover:border-orange-500/50 hover:shadow-[0_0_50px_rgba(249,115,22,0.3)] hover:brightness-110 ${proj.video ? "cursor-pointer" : "cursor-crosshair"}`}
    >
      {/* 3D Parallax Image Wrapper */}
      <motion.div
        style={{ transform: "translateZ(50px)" }}
        className="aspect-[4/3] w-full overflow-hidden flex-shrink-0 bg-black/40 p-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={proj.image}
          alt={proj.title}
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out"
        />
      </motion.div>

      {/* Text Content lifted in 3D */}
      <motion.div
        style={{ transform: "translateZ(80px)" }}
        className="p-8 md:p-10 flex flex-col flex-grow"
      >
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-md">{proj.title}</h3>
        <p className="text-zinc-300 leading-relaxed font-light mb-8 flex-grow">{proj.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {proj.technologies?.map((tech, j) => (
            <span
              key={j}
              className="px-3 py-1 rounded-full bg-white/10 border border-white/5 text-white shadow-sm text-xs font-semibold tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Gloss Lighting Reflection overlay synced with mouse position */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-50 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            () => `radial-gradient(circle at ${x.get() * 100}% ${y.get() * 100}%, rgba(255,255,255,0.4) 0%, transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"software" | "hardware">("software");

  const currentData = activeTab === "software" ? SOFTWARE_PROJECTS : HARDWARE_PROJECTS;

  return (
    <section id="projects" className="relative z-20 min-h-screen bg-transparent py-32 px-6 md:px-12 lg:px-24 perspective-1000">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-2xl">
            Selected <span className="text-zinc-500">Work</span>
          </h2>

          {/* Perspective 3D Tabs */}
          <div className="flex bg-white/5 p-2 rounded-full backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <button
              onClick={() => setActiveTab("software")}
              className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors z-10 ${activeTab === 'software' ? 'text-[#121212]' : 'text-zinc-400 hover:text-white'}`}
            >
              {activeTab === 'software' && (
                <motion.div layoutId="activeTabIndicator" className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
              )}
              Software
            </button>
            <button
              onClick={() => setActiveTab("hardware")}
              className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors z-10 ${activeTab === 'hardware' ? 'text-[#121212]' : 'text-zinc-400 hover:text-white'}`}
            >
              {activeTab === 'hardware' && (
                <motion.div layoutId="activeTabIndicator" className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
              )}
              Hardware
            </button>
          </div>
        </div>

        <div style={{ perspective: 1200 }}>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {currentData.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateX: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                >
                  <TiltCard proj={proj} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
