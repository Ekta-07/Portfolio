'use client';

import { motion } from 'motion/react';

export default function FlowingGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large flowing gradient blob 1 */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [-400, 400, -400],
          y: [-200, 200, -200],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: -400, y: -200 }}
      />

      {/* Large flowing gradient blob 2 */}
      <motion.div
        className="absolute right-0 w-[900px] h-[900px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, #818CF8 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{
          x: [200, -300, 200],
          y: [100, -100, 100],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        initial={{ x: 200, y: 100 }}
      />

      {/* Medium flowing gradient blob 3 */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [-100, 100, -100],
          y: [50, -150, 50],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
        initial={{ x: -100, y: 50 }}
      />

      {/* Accent gradient blob 4 - faster movement */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #A5B4FC 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -200, 200, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.5, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        initial={{ x: 0, y: 0 }}
      />
    </div>
  );
}
