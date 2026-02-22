'use client';

import FadeIn from '@/components/FadeIn';

export function CurrentFocusSection() {
  const focusItems = [
    'Working as a Data Engineer',
    'Creating thoughtful digital products',
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <FadeIn direction="up" delay={0.1}>
          <p className="text-xs font-medium tracking-widest text-[#6366F1] uppercase mb-3">Current Focus</p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            What I'm working on right now
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-[#939DB8] text-sm leading-relaxed mb-6">
            Passionately invested in leveraging data to solve complex problems while building beautiful, functional digital experiences.
          </p>
        </FadeIn>

        {/* Focus Items - Simple List */}
        <div className="space-y-2">
          {focusItems.map((item, index) => (
            <FadeIn key={index} direction="left" delay={0.4 + index * 0.1}>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></div>
                <p className="text-[#C9D3EE] text-base">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
