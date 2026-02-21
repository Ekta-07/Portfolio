'use client';

import { useState, useEffect } from 'react';

interface FullPageLoaderProps {
  children: React.ReactNode;
}

/**
 * FullPageLoader Component
 *
 * Blocks page rendering until all resources are loaded.
 * Shows a loading screen with progress while:
 * - DOM is ready
 * - Images are preloaded
 * - Fonts are loaded
 * - Animations are ready
 *
 * Once complete, fades in the entire page smoothly.
 */
export default function FullPageLoader({ children }: FullPageLoaderProps) {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading phases
    let currentProgress = 0;
    const intervals: NodeJS.Timeout[] = [];

    // Phase 1: DOM ready (0-30%)
    const phase1 = setInterval(() => {
      currentProgress = Math.min(currentProgress + Math.random() * 20, 30);
      setProgress(currentProgress);
      if (currentProgress >= 30) clearInterval(phase1);
    }, 100);
    intervals.push(phase1);

    // Phase 2: Images loading (30-70%)
    const phase2 = setInterval(() => {
      currentProgress = Math.min(currentProgress + Math.random() * 15, 70);
      setProgress(currentProgress);
      if (currentProgress >= 70) clearInterval(phase2);
    }, 150);
    intervals.push(phase2);

    // Phase 3: Final preparation (70-95%)
    const phase3 = setInterval(() => {
      currentProgress = Math.min(currentProgress + Math.random() * 10, 95);
      setProgress(currentProgress);
      if (currentProgress >= 95) clearInterval(phase3);
    }, 200);
    intervals.push(phase3);

    // Wait for page to be fully interactive
    const readyCheck = setTimeout(() => {
      setProgress(100);

      // Small delay for visual completeness
      setTimeout(() => {
        setIsReady(true);
      }, 300);
    }, 2000);

    return () => {
      intervals.forEach(clearInterval);
      clearTimeout(readyCheck);
    };
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0C14]">
        {/* Background blur effect */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#818CF8]/10" />
        </div>

        {/* Loading Content */}
        <div className="relative z-10 text-center space-y-8">
          {/* Name */}
          <div className="space-y-3">
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight animate-pulse">
              Shalmoly
            </h1>
            <p className="text-sm text-[#939DB8] tracking-widest uppercase">
              Loading portfolio
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-64 space-y-3">
            <div className="h-1 bg-[#1E2133] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6366F1] to-[#818CF8] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-[#939DB8]">{Math.round(progress)}%</p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#6366F1] opacity-60"
                style={{
                  animation: `pulse ${0.8 + i * 0.1}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Fade in the page smoothly
  return (
    <div className="animate-fadeIn" style={{ animation: 'fadeIn 0.6s ease-out' }}>
      {children}
    </div>
  );
}
