'use client';

import { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Patents from "@/components/Patents";
import Navbar from "@/components/Navbar";
import PlexusBackground from "@/components/PlexusBackground";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { ModalProvider } from "@/context/ModalContext";
import GenieModal from "@/components/GenieModal";
import GoUpButton from "@/components/GoUpButton";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically for the 500vh section, not the whole page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [wallpaperIndex, setWallpaperIndex] = useState(-1);
  const wallpapers = [
    "/wallpapers/default.webm",
    "/wallpapers/wp2.webm",
    "/wallpapers/wp3.webm",
    "/wallpapers/wp4.webm",
    "/wallpapers/wp5.webm",
    "/wallpapers/wp7.webm",
    "/wallpapers/wp8.webm",
    "/wallpapers/wp9.webm",
    "/wallpapers/wp10.webm",
    "/wallpapers/wp11.webm",
    "/wallpapers/wp12.webm",
    "/wallpapers/wp13.webm",
  ];

  const changeWallpaper = () => {
    setWallpaperIndex((prev) => (prev + 1) % wallpapers.length);
  };

  return (
    <ModalProvider>
      <main className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-[#050505]">
        
        <Navbar onChangeWallpaper={changeWallpaper} />
      
      {/* Cinematic Scroll Section */}
      <section ref={containerRef} className="relative h-[500vh] z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent">
          <ScrollyCanvas scrollProgress={scrollYProgress} />
          <Overlay scrollProgress={scrollYProgress} />
          
          {/* subtle scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse opacity-50 z-20 pointer-events-none">
            <span className="text-xs tracking-[0.3em] uppercase mb-2">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Primary Narrative Sequence with Background Wrapper */}
      <div className="relative z-10">
        
        {/* Background Video Layer - Only starts from About section */}
        <div className="absolute inset-0 z-[-50] pointer-events-none overflow-hidden">
          {wallpaperIndex !== -1 && (
            <div className="sticky top-0 h-screen w-full">
              <video
                key={wallpapers[wallpaperIndex]}
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 h-full w-full object-cover opacity-60"
              >
                <source src={wallpapers[wallpaperIndex]} type="video/webm" />
              </video>
            </div>
          )}
        </div>

        {/* Content */}
        <About />
        <Skills />

        <div className="relative z-10">
          <PlexusBackground />
          <div className="relative z-10">
            <Experience />
            <Projects />
            <Achievements />
            <Patents />
            <Contact />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-[#0a0a0a]/50 backdrop-blur-md border-t border-white/5 py-12 text-center text-zinc-500 relative z-10">
          <p>© {new Date().getFullYear()} Anshumaan Vats. All rights reserved.</p>
        </footer>
      </div>
      
      <GoUpButton />
      <GenieModal />
      </main>
    </ModalProvider>
  );
}
