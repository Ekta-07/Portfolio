'use client';

import { Database, Palette } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export function CurrentFocusSection() {
  const focusItems = [
    'Working as a Data Engineer',
    'Creating thoughtful digital products',
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium tracking-widest text-[#6366F1] uppercase">Current Focus</p>
            {/* Pulsing dot indicator */}
            <div className="relative w-2 h-2">
              <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
              <div className="absolute inset-0 rounded-full bg-[#6366F1] animate-pulse" />
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            What I'm working on right now
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-[#C9D3EE] text-base leading-relaxed mb-8 max-w-2xl">
            Passionately invested in leveraging data to solve complex problems while building beautiful, functional digital experiences.
          </p>
        </FadeIn>

        {/* Focus Items - Cards with Left Border Accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {focusItems.map((item, index) => {
            const isDataEngineer = index === 0;
            const bgGradient = isDataEngineer ? 'bg-gradient-to-br from-blue-500/12 to-[#6366F1]/5' : 'bg-gradient-to-br from-amber-500/12 to-orange-500/5';
            const borderColor = isDataEngineer ? 'border-l-blue-500' : 'border-l-amber-500';
            const iconBg = isDataEngineer ? 'bg-blue-500/15' : 'bg-amber-500/15';
            const iconColor = isDataEngineer ? 'text-blue-300' : 'text-amber-300';

            return (
              <FadeIn key={index} direction="left" delay={0.4 + index * 0.1}>
                <div className={`flex items-center gap-4 p-5 rounded-xl border border-[#727DA1]/25 border-l-4 ${borderColor} ${bgGradient} backdrop-blur-sm transition-all hover:border-[#727DA1]/50 hover:bg-white/5`}>
                  <div className={`flex-shrink-0 w-11 h-11 rounded-lg ${iconBg} flex items-center justify-center border border-white/10`}>
                    {isDataEngineer ? (
                      <Database className={`w-5 h-5 ${iconColor}`} />
                    ) : (
                      <Palette className={`w-5 h-5 ${iconColor}`} />
                    )}
                  </div>
                  <p className="text-[#E0E7FF] text-base font-medium flex-1">{item}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
