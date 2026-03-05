'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Wrench, Trophy } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import SpotlightCard from '@/components/SpotlightCard';
import type { Skills, Experience, Education } from '@/lib/data';

interface MyJourneySectionProps {
  skills: Skills;
  experience: Experience[];
  education: Education[];
}

const tabs = [
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Wrench },
] as const;

type TabId = (typeof tabs)[number]['id'];

function InstitutionLogo({ edu }: { edu: Education }) {
  if (edu.logo) {
    const isSvg = edu.logo.endsWith('.svg');
    return (
      <div className={`w-20 h-20 rounded-full flex items-center justify-center p-3 ${isSvg ? 'bg-transparent' : 'bg-white/90'}`}>
        <Image
          src={edu.logo}
          alt={edu.institution}
          width={80}
          height={80}
          className={`object-contain ${isSvg ? 'brightness-0 invert' : ''}`}
        />
      </div>
    );
  }
  // Fallback: styled initials
  const initials = edu.institution
    .split(/[\s()]+/)
    .filter(w => w.length > 2 && w[0] === w[0].toUpperCase())
    .map(w => w[0])
    .slice(0, 3)
    .join('');
  return (
    <div className="w-14 h-14 rounded-full bg-[#6366F1]/15 border border-[#6366F1]/25 flex items-center justify-center">
      <span className="text-sm font-bold text-[#818CF8] tracking-wide">{initials}</span>
    </div>
  );
}

function SkillsTab({ skills }: { skills: Skills }) {
  const groups = [
    { title: 'Languages', items: skills.languages },
    { title: 'Research & ML', items: skills.researchAndML },
    { title: 'Data & IoT', items: skills.dataAndIoT },
    { title: 'Web', items: skills.web },
    { title: 'Tools', items: skills.tools },
  ];

  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col sm:flex-row sm:items-start gap-3">
          <h4 className="text-xs font-medium text-[#818CF8] uppercase tracking-wider sm:w-32 shrink-0 pt-1.5">{group.title}</h4>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm text-[#C9D3EE] bg-[#171926] border border-[#727DA1]/20 rounded-lg hover:border-[#6366F1]/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceTab({ experience }: { experience: Experience[] }) {
  const [selected, setSelected] = useState(0);
  const active = experience[selected];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5 items-start">
      {/* Left sidebar — scrollable if many entries */}
      <div className="space-y-2 md:max-h-[400px] md:overflow-y-auto md:pr-2 scrollbar-thin">
        {experience.map((exp, i) => {
          const isCurrent = exp.period.includes('Present');
          const isSelected = i === selected;
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-3 py-3 rounded-lg border transition-all ${
                isSelected
                  ? 'bg-[#171926] border-[#6366F1]/40'
                  : 'bg-transparent border-transparent hover:bg-[#171926]/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-0.5">
                {isCurrent ? (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#6366F1]/20 text-[#818CF8] rounded border border-[#6366F1]/30">
                    Current
                  </span>
                ) : exp.type ? (
                  <span className="px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#939DB8] bg-[#1A1826] rounded border border-[#727DA1]/20">
                    {exp.type}
                  </span>
                ) : null}
                <span className="text-[11px] text-[#939DB8]">{exp.period.split(' - ')[0]}</span>
              </div>
              <h4 className="text-sm font-medium text-white leading-snug">{exp.role}</h4>
              <p className="text-xs text-[#939DB8]">{exp.company}</p>
            </button>
          );
        })}
      </div>

      {/* Right detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-xl bg-[#171926] border border-[#727DA1]/15"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#6366F1]/15 flex items-center justify-center shrink-0 mt-0.5">
              <Briefcase className="w-5 h-5 text-[#818CF8]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white leading-snug">{active.role}</h4>
              <p className="text-sm text-[#C9D3EE]">{active.company}{active.type && ` · ${active.type}`}</p>
              <p className="text-xs text-[#818CF8] mt-0.5">{active.period}</p>
              {active.location && <p className="text-xs text-[#939DB8] mt-0.5">{active.location}</p>}
            </div>
          </div>
          <p className="text-sm text-[#939DB8] leading-relaxed">{active.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function EducationTab({ education }: { education: Education[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {education.map((edu, i) => (
        <SpotlightCard key={i} className="bg-[#171926] rounded-xl border border-[#727DA1]/15 hover:border-[#6366F1]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/10 hover:scale-102 text-center p-6">
          {/* Logo / Initials */}
          <div className="flex justify-center items-center h-24 mb-4">
            <InstitutionLogo edu={edu} />
          </div>

          {/* Details */}
          <h4 className="text-base font-semibold text-white mb-1">{edu.degree}</h4>
          <p className="text-sm text-[#C9D3EE] mb-0.5">{edu.institution}</p>
          <p className="text-sm text-[#939DB8] mb-2">{edu.field}</p>
          <p className="text-xs text-[#818CF8] font-medium">{edu.period}</p>
        </SpotlightCard>
      ))}
    </div>
  );
}

export function MyJourneySection({ skills, experience, education }: MyJourneySectionProps) {
  const [activeTab, setActiveTab] = useState<TabId>('education');

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[#727DA1]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Centered header */}
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#171926] border border-[#727DA1]/20 mb-5">
              <Trophy className="w-7 h-7 text-[#818CF8]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">My Journey</span>
            </h2>
            <p className="text-[#939DB8] text-base max-w-xl mx-auto">
              From curious student to data engineer — the milestones that shaped my career
            </p>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn direction="up" delay={0.2}>
          <div className="flex justify-center gap-2 mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#6366F1] text-white shadow-lg shadow-[#6366F1]/20'
                      : 'bg-[#171926] text-[#939DB8] border border-[#727DA1]/20 hover:border-[#6366F1]/40 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'skills' && <SkillsTab skills={skills} />}
            {activeTab === 'experience' && <ExperienceTab experience={experience} />}
            {activeTab === 'education' && <EducationTab education={education} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
