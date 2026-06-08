'use client';

import { motion } from "framer-motion";
import { User, Layers, Briefcase, FileText, Code, Trophy, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onChangeWallpaper?: () => void;
}

export default function Navbar({ onChangeWallpaper }: NavbarProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const navItems = [
    { name: "About", icon: <User size={20} />, href: "#about" },
    { name: "Skills", icon: <Code size={20} />, href: "#skills" },
    { name: "Experience", icon: <Briefcase size={20} />, href: "#experience" },
    { name: "Projects", icon: <Layers size={20} />, href: "#projects" },
    { name: "Achievements", icon: <Trophy size={20} />, href: "#achievements" },
    { name: "Patents", icon: <FileText size={20} />, href: "#patents" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]"
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
    >
      <div className="flex items-center justify-between px-6 py-4 rounded-full bg-[#050505]/60 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] cursor-pointer">

        {/* Floating Logo/Name */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="font-bold text-xl tracking-tighter text-white shadow-orange-500/50 drop-shadow-lg flex-shrink-0"
        >
          AV
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ width: 0, opacity: 0, marginLeft: 0 }}
          animate={{
            width: isNavHovered ? 'auto' : 0,
            opacity: isNavHovered ? 1 : 0,
            marginLeft: isNavHovered ? 16 : 0
          }}
          style={{ overflow: 'hidden' }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex items-center gap-1 whitespace-nowrap"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative px-3 py-2 group flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10 flex-shrink-0 rounded-full"
            >
              {hoveredTab === item.name && (
                <motion.div
                  layoutId="hoverTab"
                  className="absolute inset-0 bg-orange-500/20 rounded-full z-[-1] blur-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
              {hoveredTab === item.name && (
                <motion.div
                  layoutId="hoverTabSolid"
                  className="absolute inset-0 border border-orange-500/50 rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}

              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex-shrink-0"
                >
                  {item.icon}
                </motion.div>

                {/* Inline Expanding Text */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 max-w-0 opacity-0 overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-in-out">
                  {item.name}
                </span>
              </div>
            </motion.a>
          ))}

          {/* Change Background Button */}
          {onChangeWallpaper && (
            <motion.button
              onClick={onChangeWallpaper}
              onMouseEnter={() => setHoveredTab('BgChange')}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative px-3 py-2 group flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors z-10 ml-2 border-l border-white/10 pl-4 flex-shrink-0 rounded-r-full"
            >
              {hoveredTab === 'BgChange' && (
                <motion.div
                  layoutId="hoverTabSolid"
                  className="absolute inset-0 border border-cyan-500/50 rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}

              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex-shrink-0"
                >
                  <ImageIcon size={20} />
                </motion.div>

                {/* Inline Expanding Text */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 max-w-0 opacity-0 overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-in-out">
                  Change BG
                </span>
              </div>
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
}
