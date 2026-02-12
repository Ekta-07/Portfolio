import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAbout, getPersonalInfo, getSkills } from '@/lib/data';

export default function AboutPage() {
    const about = getAbout();
    const personal = getPersonalInfo();
    const skills = getSkills();

    return (
        <div className="min-h-screen bg-[#0B0C14] text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Profile Card */}
                    <div className="bg-[#171926] border border-[#727DA1]/15 rounded-2xl p-6 md:p-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center text-3xl font-bold text-white flex-shrink-0 overflow-hidden">
                                {personal.name.charAt(0)}
                            </div>

                            {/* Info */}
                            <div className="flex-1 w-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-white">{personal.name}</h1>
                                        <p className="text-[#939DB8] text-base">{personal.title}</p>
                                    </div>
                                    {/* Social Icons */}
                                    <div className="flex items-center gap-3">
                                        <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                        <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
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
                                    <div className="flex items-center gap-2 text-[#939DB8]">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <span>{personal.social.linkedin.replace('https://linkedin.com/in/', '')}</span>
                                    </div>
                                </div>

                                <p className="text-[#C9D3EE] text-sm mt-4 pt-4 border-t border-[#727DA1]/15">
                                    {about.intro}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* About Me */}
                    <section className="mb-12">
                        <h2 className="text-lg font-bold text-white mb-4">About Me</h2>
                        <div className="space-y-4 text-[#939DB8] leading-relaxed">
                            <p>{about.intro}</p>
                            <p>{about.description}</p>
                        </div>
                    </section>

                    {/* Reach Out */}
                    <section className="mb-12">
                        <h2 className="text-lg font-bold text-white mb-4">Reach out to me</h2>
                        <p className="text-[#939DB8] leading-relaxed">
                            You can find me most active on{' '}
                            <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:text-[#818CF8] transition-colors">Twitter</a>
                            {' '}and I&apos;m best reached via{' '}
                            <a href={`mailto:${personal.email}`} className="text-[#6366F1] hover:text-[#818CF8] transition-colors">Email</a>.
                        </p>
                    </section>

                    {/* Currently Working On / Experience */}
                    <section className="mb-12">
                        <h2 className="text-lg font-bold text-white mb-2">Experience</h2>
                        <p className="text-[#939DB8] text-sm mb-6">A brief about my work experiences where I have worked at and where I am currently working at.</p>
                        <div className="space-y-0">
                            {about.currentlyWorkingOn.map((work, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 py-5 border-b border-[#727DA1]/10 last:border-b-0"
                                >
                                    {/* Company icon placeholder */}
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1]/20 to-[#4F46E5]/20 border border-[#6366F1]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-base font-semibold text-white">{work.title}</h3>
                                            <span className="text-xs text-[#939DB8] whitespace-nowrap ml-4">Present</span>
                                        </div>
                                        <p className="text-sm text-[#939DB8] mt-1">{work.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="text-lg font-bold text-white mb-2">Skills & Technologies</h2>
                        <p className="text-[#939DB8] text-sm mb-6">Technologies and tools I work with regularly.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {[
                                { title: 'Languages', items: skills.languages },
                                { title: 'Data Engineering', items: skills.dataEngineering },
                                { title: 'Databases', items: skills.databases },
                                { title: 'Cloud & DevOps', items: skills.cloud },
                                { title: 'Frontend', items: skills.frontend },
                                { title: 'Tools', items: skills.tools },
                            ].map((group) => (
                                <div key={group.title} className="bg-[#171926] border border-[#727DA1]/10 rounded-xl p-5">
                                    <h3 className="text-sm font-semibold text-[#6366F1] mb-3">{group.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-[#0B0C14] text-[#C9D3EE] text-xs rounded-full border border-[#727DA1]/10"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Social Bar */}
                    <div className="mt-14 flex items-center justify-center gap-5">
                        <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                        <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href={personal.social.medium} target="_blank" rel="noopener noreferrer" className="text-[#939DB8] hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                        </a>
                        <a href={`mailto:${personal.email}`} className="text-[#939DB8] hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
