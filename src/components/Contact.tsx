'use client';

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative z-20 bg-transparent py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white text-center"
        >
          Get in <span className="text-zinc-500">Touch.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          id="contact"
          className="card-container mb-20 cursor-pointer"
        >
          <div className="card shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="card-front bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/front.png" alt="Front" className="w-full h-full object-cover" />
            </div>
            <div className="card-back bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/back.png" alt="Back" className="w-full h-full object-cover" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bengaluru, Karnataka")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 left-0 w-full h-1/2 z-10"
                style={{ display: 'block' }}
                aria-label="View Location"
              ></a>
              <a
                href="mailto:anshumaanvats17@gmail.com"
                className="absolute top-1/2 left-0 w-full h-1/2 z-10"
                style={{ display: 'block' }}
                aria-label="Email me"
              ></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
