"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: "My Name. Creative Developer." (Center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2: "I build digital experiences." (Left aligned)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.4], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.4], [100, -100]);

  // Section 3: "Bridging design and engineering." (Right aligned)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.75], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full flex justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-xl">
          Mukul Vaid.<br/>
          <span className="text-neutral-400">Full Stack Developer.</span>
        </h1>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full flex justify-start px-8 md:px-24 lg:px-48"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-lg drop-shadow-xl">
          Expert in <span className="text-neutral-400">Flutter & MERN.</span>
        </h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full flex justify-end px-8 md:px-24 lg:px-48"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-lg text-right drop-shadow-xl">
          Building scalable <span className="text-neutral-400">applications.</span>
        </h2>
      </motion.div>
    </div>
  );
}
