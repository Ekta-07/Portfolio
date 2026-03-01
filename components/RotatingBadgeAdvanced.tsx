'use client';

import { useState, useEffect } from 'react';

interface RotatingBadgeAdvancedProps {
  words: string[];
  duration?: number; // Duration each word is displayed (ms)
  animationType?: 'fade' | 'slide-up' | 'slide-down' | 'rotate';
}

export default function RotatingBadgeAdvanced({
  words,
  duration = 3000,
  animationType = 'slide-up',
}: RotatingBadgeAdvancedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1 % words.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, duration - 600); // Start transition 600ms before switching

    const switchTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setNextIndex((prev) => (prev + 1) % words.length);
      setIsTransitioning(false);
    }, duration);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(switchTimer);
    };
  }, [currentIndex, duration, words.length]);

  const getAnimationClasses = () => {
    if (!isTransitioning) {
      return 'opacity-100 translate-y-0 scale-100';
    }

    switch (animationType) {
      case 'fade':
        return 'opacity-0 translate-y-0 scale-100';
      case 'slide-up':
        return 'opacity-0 translate-y-2 scale-100';
      case 'slide-down':
        return 'opacity-0 -translate-y-2 scale-100';
      case 'rotate':
        return 'opacity-0 rotate-12 scale-95';
      default:
        return 'opacity-0 translate-y-0 scale-100';
    }
  };

  return (
    <div className="inline-block border border-white/40 px-4 py-2 rounded-lg mb-4 h-10 flex items-center overflow-hidden">
      <div className="relative w-full h-full flex items-center">
        {/* Current word */}
        <span
          className={`text-sm font-medium text-white/80 tracking-wide uppercase absolute transition-all duration-500 ${getAnimationClasses()}`}
        >
          {words[currentIndex]}
        </span>

        {/* Next word coming in */}
        <span
          className={`text-sm font-medium text-white/80 tracking-wide uppercase absolute transition-all duration-500 ${
            isTransitioning
              ? 'opacity-100 translate-y-0 scale-100'
              : animationType === 'slide-up'
              ? 'opacity-0 -translate-y-2 scale-100'
              : animationType === 'slide-down'
              ? 'opacity-0 translate-y-2 scale-100'
              : animationType === 'rotate'
              ? 'opacity-0 -rotate-12 scale-95'
              : 'opacity-0 translate-y-0 scale-100'
          }`}
        >
          {words[nextIndex]}
        </span>
      </div>
    </div>
  );
}
