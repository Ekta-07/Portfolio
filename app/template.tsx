'use client';

import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if View Transitions API is supported (at runtime)
  const supportsViewTransitions =
    typeof document !== 'undefined' &&
    'startViewTransition' in document &&
    typeof (document as any).startViewTransition === 'function';

  // Use View Transitions API for smooth route changes if available
  // Fallback to Framer Motion for older browsers
  if (supportsViewTransitions) {
    // View Transitions API will handle the transitions natively
    return <>{children}</>;
  }

  // Fallback: Framer Motion transitions for older browsers
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
