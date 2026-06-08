'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, MotionValue } from 'framer-motion';

const FRAME_COUNT = 144;
const CURRENT_FRAME = (index: number) => 
  `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.042s.png`;

export default function ScrollyCanvas({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = CURRENT_FRAME(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // Render first frame as soon as all load, preventing flash
          requestAnimationFrame(() => renderFrame(0, loadedImages));
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);

    const handleResize = () => {
      renderFrame(Math.floor(scrollProgress.get() * (FRAME_COUNT - 1)), loadedImages);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollProgress]);

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    if (images.length === 0) return;
    const mappedIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    requestAnimationFrame(() => renderFrame(mappedIndex, images));
  });

  const renderFrame = (index: number, imgArray: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas || !imgArray[index]) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgArray[index];
    
    // Support high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    // Mimic CSS Object-Fit: Cover
    const scale = Math.max(width / img.width, height / img.height);
    const x = (width / 2) - (img.width / 2) * scale;
    const y = (height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 h-screen w-full object-cover" 
    />
  );
}
