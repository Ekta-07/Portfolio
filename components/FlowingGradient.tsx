'use client';

import { motion } from 'motion/react';

interface FlowingGradientProps {
  blobCount?: number; // Number of gradient blobs to render (default: 4)
  animated?: boolean; // Enable blob animations (default: true)
}

export default function FlowingGradient({ blobCount = 4, animated = true }: FlowingGradientProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large flowing gradient blob 1 */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={animated ? {
          x: [-400, 400, -400],
          y: [-200, 200, -200],
          scale: [1, 1.2, 1],
        } : { x: -400, y: -200, scale: 1 }}
        transition={animated ? {
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        } : { duration: 0 }}
        initial={{ x: -400, y: -200 }}
      />

      {/* Large flowing gradient blob 2 */}
      <motion.div
        className="absolute right-0 w-[900px] h-[900px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, #818CF8 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={animated ? {
          x: [200, -300, 200],
          y: [100, -100, 100],
          scale: [1, 1.3, 1],
        } : { x: 200, y: 100, scale: 1 }}
        transition={animated ? {
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        } : { duration: 0 }}
        initial={{ x: 200, y: 100 }}
      />

      {/* Medium flowing gradient blob 3 - conditionally rendered */}
      {blobCount >= 3 && (
        <motion.div
          className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
          animate={animated ? {
            x: [-100, 100, -100],
            y: [50, -150, 50],
            scale: [1, 1.4, 1],
          } : { x: -100, y: 50, scale: 1 }}
          transition={animated ? {
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          } : { duration: 0 }}
          initial={{ x: -100, y: 50 }}
        />
      )}

      {/* Accent gradient blob 4 - conditionally rendered */}
      {blobCount >= 4 && (
        <motion.div
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #A5B4FC 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={animated ? {
            x: [0, -200, 200, 0],
            y: [0, 150, -100, 0],
            scale: [1, 1.5, 0.8, 1],
          } : { x: 0, y: 0, scale: 1 }}
          transition={animated ? {
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          } : { duration: 0 }}
          initial={{ x: 0, y: 0 }}
        />
      )}
    </div>
  );
}
