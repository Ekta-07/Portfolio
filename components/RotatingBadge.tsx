'use client';

import { useState, useEffect } from 'react';

interface RotatingBadgeProps {
  words: string[];
  duration?: number; // Duration each word is displayed (ms)
}

export default function RotatingBadge({
  words,
  duration = 3000,
}: RotatingBadgeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration - 500); // Start fade out 500ms before switching

    const switchTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsVisible(true);
    }, duration);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(switchTimer);
    };
  }, [currentIndex, duration, words.length]);

  return (
    <div className="inline-block border border-white/40 px-4 py-2 rounded-lg mb-4">
      <span
        className={`text-sm font-medium text-white/80 tracking-wide uppercase transition-opacity duration-500 block h-6 flex items-center ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {words[currentIndex]}
      </span>
    </div>
  );
}
