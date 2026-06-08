'use client';

import { motion } from 'framer-motion';

export default function StreaksBackground() {
  const streakData = [
    { top: 4, duration: 10, delay: 2 },
    { top: 23, duration: 12, delay: 5 },
    { top: 32, duration: 9, delay: 8 },
    { top: 54, duration: 13, delay: 1 },
    { top: 61, duration: 11, delay: 7 },
    { top: 81, duration: 8, delay: 4 },
    { top: 93, duration: 12, delay: 9 },
    { top: 112, duration: 10, delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />

      {/* Diagonal Streaks */}
      {streakData.map((streak, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
          style={{
            width: '150%',
            left: '-25%',
            top: `${streak.top}%`,
            transformOrigin: 'left',
            rotate: '-35deg'
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: streak.duration,
            delay: streak.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
