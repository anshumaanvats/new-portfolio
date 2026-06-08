'use client';

import { useTransform, motion, MotionValue } from 'framer-motion';

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Explicitly map all states from 0.0 to 1.0 to prevent any extrapolation bugs

  // Section 1: Intro (0% to 15%) 
  const opacity1 = useTransform(scrollProgress, [0, 0.05, 0.15, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.15, 1], [0, -200, -200]);

  // Section 2: Architecting Software (10% to 35%)
  const opacity3 = useTransform(scrollProgress, [0, 0.10, 0.15, 0.25, 0.35, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollProgress, [0, 0.10, 0.35, 1], [100, 100, -100, -100]);

  // Section 3: Robotic Systems (35% to 60%)
  const opacity4 = useTransform(scrollProgress, [0, 0.35, 0.40, 0.50, 0.60, 1], [0, 0, 1, 1, 0, 0]);
  const y4 = useTransform(scrollProgress, [0, 0.35, 0.60, 1], [100, 100, -100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
          Anshumaan Vats
        </h1>
        <p className="mt-4 text-2xl md:text-4xl text-zinc-300 font-medium tracking-tight">
          Software Engineer
        </p>
      </motion.div>

      {/* Section 2 - Pushed to the Left */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 left-0 w-full md:w-1/2 flex items-center justify-start text-left px-8 md:pl-16 lg:pl-24"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl leading-tight max-w-lg">
          Architecting<br />
          <span className="text-zinc-400">scalable softwares.</span>
        </h2>
      </motion.div>

      {/* Section 3 - Pushed to the Right */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-y-0 right-0 w-full md:w-1/2 flex items-center justify-end text-right px-8 md:pr-16 lg:pr-24"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl leading-tight max-w-lg">
          Building intelligent<br />
          <span className="text-zinc-400">robotic systems.</span>
        </h2>
      </motion.div>
    </div>
  );
}
