import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FlowingGradient from '@/components/FlowingGradient';
import SpotlightCard from '@/components/SpotlightCard';
import { getAbout, getPersonalInfo } from '@/lib/data';
import type { Education } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';
import SkillRadar from '@/components/SkillRadar';

function InstitutionLogo({ edu }: { edu: Education }) {
    if (edu.logo) {
        const isSvg = edu.logo.endsWith('.svg');
        return (
            <div className={`w-16 h-16 rounded-full flex items-center justify-center p-2.5 ${isSvg ? 'bg-transparent' : 'bg-white/90'}`}>
                <Image
                    src={edu.logo}
                    alt={edu.institution}
                    width={64}
                    height={64}
                    className={`object-contain ${isSvg ? 'brightness-0 invert' : ''}`}
                />
            </div>
        );
    }
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

export default function AboutPage() {
    const about = getAbout();
    const personal = getPersonalInfo();

    return (
        <div className="min-h-screen bg-[#0B0C14] text-white relative overflow-hidden">
            <FlowingGradient blobCount={2} animated={false} />
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Profile Card */}
                    <div className="bg-[#171926] border border-[#727DA1]/15 rounded-2xl p-6 md:p-8 mb-16">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="w-24 h-32 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex-shrink-0 overflow-hidden">
                                <Image
                                    src="/profile.jpg"
                                    alt={personal.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-white">{personal.name}</h1>
                                        <p className="text-[#939DB8] text-base">{personal.title}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                        <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2 text-[#939DB8]">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{personal.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#939DB8]">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>{personal.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Me */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-5">
                            <span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">About Me</span>
                        </h2>
                        <div className="space-y-4 text-[#939DB8] leading-relaxed">
                            <p>Hey There! I&apos;m Shalmoly, a Data Engineer, former researcher, and mandala artist based in Melbourne.</p>
                            <p>I work with data and build systems that make complex information easy to digest. I&apos;m naturally curious and enjoy experimenting with new tools and technologies.</p>
                            <p>Beyond tech, I find balance in creativity and movement. I&apos;m a moderately skilled keyboard player, an art enthusiast, and an avid reader. I enjoy designing intricate mandalas, and unwinding with coffee and a good book. These slower rituals ground me and bring a bit of calm to everyday chaos. I also love Zumba to keep me energised.</p>
                            <p>So, a warm welcome to my calm corner of the web, a space where I bring together the different things I enjoy: my work, art, and writing. If something here resonates with you, I&apos;m glad you stopped by.</p>
                        </div>
                        <a
                            href="/resume.pdf"
                            download
                            className="group inline-flex items-center gap-3 mt-8 px-5 py-3 rounded-xl border border-[#727DA1]/15 bg-[#171926]/50 hover:border-[#6366F1]/30 hover:bg-[#171926] transition-all"
                        >
                            <svg className="w-4 h-4 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span className="text-sm font-medium text-[#C9D3EE] group-hover:text-white transition-colors">Download Resume</span>
                        </a>
                    </section>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#727DA1]/20 to-transparent mb-16" />

                    {/* Education Section */}
                    <section className="mb-16">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-1">
                                <span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">Education</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {about.education.map((edu, i) => (
                                <SpotlightCard key={i} className="bg-[#171926] rounded-xl border border-[#727DA1]/15 hover:border-[#6366F1]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/10 text-center p-5">
                                    <div className="flex justify-center items-center h-20 mb-3">
                                        <InstitutionLogo edu={edu} />
                                    </div>
                                    <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">{edu.degree}</h4>
                                    <p className="text-xs text-[#C9D3EE] leading-snug">{edu.institution}</p>
                                    <p className="text-[11px] text-[#939DB8] mt-1">{edu.field}</p>
                                    <p className="text-xs text-[#818CF8] font-medium mt-2">{edu.period}</p>
                                </SpotlightCard>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section className="mb-16">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-1">
                                <span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">Experience</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {about.experience.map((exp, i) => {
                                const isCurrent = exp.period.includes('Present');
                                return (
                                    <div
                                        key={i}
                                        className={`p-5 rounded-xl border transition-all ${isCurrent ? 'bg-[#171926] border-[#6366F1]/20' : 'bg-[#171926]/50 border-[#727DA1]/10 hover:border-[#727DA1]/20'}`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                                                    {isCurrent && (
                                                        <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#6366F1]/20 text-[#818CF8] rounded border border-[#6366F1]/30">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-[#C9D3EE] mt-0.5">{exp.company}{exp.type && <span className="text-[#939DB8]"> · {exp.type}</span>}</p>
                                            </div>
                                            <p className="text-xs text-[#818CF8] font-medium flex-shrink-0 mt-0.5">{exp.period}</p>
                                        </div>
                                        {exp.location && <p className="text-[11px] text-[#727DA1] mt-1">{exp.location}</p>}
                                        <p className="text-sm text-[#939DB8] leading-relaxed mt-3 pt-3 border-t border-[#727DA1]/10">{exp.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Skill Architecture Section */}
                    <section className="mb-16">
                        <SkillRadar />
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
