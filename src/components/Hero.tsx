'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Video Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay attached to the video so it moves with it */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border border-white/20 p-8 md:p-12 backdrop-blur-sm bg-white/5 rounded-sm"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase mb-2 text-white"
          >
            Тренд
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-3xl tracking-[0.2em] text-gray-400 uppercase mb-8"
          >
            — Платформа
          </motion.h2>
          
          <motion.div
             initial={{ width: 0 }}
             animate={{ width: "100%" }}
             transition={{ duration: 1, delay: 0.8 }}
             className="h-[1px] bg-white/30 mb-8 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm md:text-base text-gray-300 font-light tracking-wide"
          >
            Смотрим в будущее — создаём настоящее.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
      >
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
