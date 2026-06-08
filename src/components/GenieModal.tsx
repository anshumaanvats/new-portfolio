'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function GenieModal() {
  const { selectedItem, setSelectedItem } = useModal();
  const [windowCenter, setWindowCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
  }, [selectedItem]);

  // Calculate the starting position (delta from center)
  let deltaX = 0;
  let deltaY = 0;

  if (selectedItem?.rect && windowCenter.x > 0) {
    const originX = selectedItem.rect.left + selectedItem.rect.width / 2;
    const originY = selectedItem.rect.top + selectedItem.rect.height / 2;
    deltaX = originX - windowCenter.x;
    deltaY = originY - windowCenter.y;
  }

  const genieVariants: Variants = {
    hidden: {
      x: deltaX,
      y: deltaY,
      scaleX: 0.05,
      scaleY: 0.05,
      opacity: 0,
      filter: "blur(10px)",
      borderRadius: "100%",
    },
    visible: {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      filter: "blur(0px)",
      borderRadius: "1rem",
      transition: {
        // Splitting X and Y creates a curved, sweeping "Genie" arc
        y: { type: "spring", stiffness: 400, damping: 30, mass: 0.5 }, // Faster Y
        scaleY: { type: "spring", stiffness: 400, damping: 30, mass: 0.5 },
        x: { type: "spring", stiffness: 200, damping: 25, mass: 0.8 }, // Slower X (drags behind)
        scaleX: { type: "spring", stiffness: 200, damping: 25, mass: 0.8 },
        opacity: { duration: 0.2 },
        filter: { duration: 0.3 }
      }
    },
    exit: {
      x: deltaX,
      y: deltaY,
      scaleX: 0.05,
      scaleY: 0.05,
      opacity: 0,
      filter: "blur(10px)",
      borderRadius: "100%",
      transition: {
        y: { type: "spring", stiffness: 400, damping: 35, mass: 0.5 },
        scaleY: { type: "spring", stiffness: 400, damping: 35, mass: 0.5 },
        x: { type: "spring", stiffness: 250, damping: 25, mass: 0.8 },
        scaleX: { type: "spring", stiffness: 250, damping: 25, mass: 0.8 },
        opacity: { duration: 0.3, delay: 0.1 },
        filter: { duration: 0.2 }
      }
    }
  };

  return (
    <AnimatePresence>
      {selectedItem && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content - using custom Genie arc variants */}
          <motion.div
            variants={genieVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-5xl h-[80vh] bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/50">
              <h3 className="text-xl font-semibold text-white tracking-tight truncate pr-8">
                {selectedItem.title}
              </h3>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Viewer Body */}
            <div className="flex-1 w-full bg-black/50 relative overflow-hidden">
              {selectedItem.type === 'pdf' && (
                <iframe
                  src={`${selectedItem.url}#toolbar=0`}
                  className="absolute inset-0 w-full h-full border-none rounded-b-2xl bg-zinc-800"
                  title={selectedItem.title}
                />
              )}
              {selectedItem.type === 'video' && (
                <video
                  src={selectedItem.url}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              )}
              {selectedItem.type === 'image' && (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
