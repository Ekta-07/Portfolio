import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import SpotlightCard from '@/components/SpotlightCard';
import FlowingGradient from '@/components/FlowingGradient';
import { getProjects, getResearch } from '@/lib/data';

export default function WorkPage() {
    const projects = getProjects().filter(p => p.featured).slice(0, 3);
    const research = getResearch();

    return (
        <div className="min-h-screen bg-[#0B0C14] text-white relative overflow-hidden">
            <FlowingGradient blobCount={2} animated={false} />
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">My Work</h1>
                            <p className="text-xl text-[#939DB8] max-w-2xl mx-auto">
                                From research to production — projects I've built and academic contributions
                            </p>
                        </div>
                    </FadeIn>

                    {/* Featured Projects */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-2 h-2 rounded-full bg-[#6366F1]"></div>
                            <h2 className="text-lg font-semibold">Projects</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <FadeIn key={project.id} direction="up" delay={index * 0.15}>
                                    <ProjectCard project={project} />
                                </FadeIn>
                            ))}
                        </div>
                    </section>

                    {/* Thesis + Publications Section */}
                    <section className="mb-24">
                        {/* Thesis */}
                        <h3 className="text-lg font-semibold text-[#C9D3EE] mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            Thesis
                        </h3>
                        <SpotlightCard className="bg-[#171926] border border-[#727DA1]/15 rounded-xl p-6 mb-8">
                            <p className="text-[#C9D3EE] text-sm leading-relaxed">
                                {research.description}
                            </p>
                            {research.thesis.url && (
                                <a
                                    href={research.thesis.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#818CF8] text-sm font-medium mt-4 transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Read Thesis
                                </a>
                            )}
                        </SpotlightCard>

                        {/* Publications */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#C9D3EE] mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Publications
                            </h3>
                            <div className="space-y-8">
                                {research.publications.map((pub) => (
                                    <SpotlightCard key={pub.id}>
                                        <div className="bg-[#171926] border border-[#727DA1]/15 rounded-xl p-6 hover:border-[#6366F1]/30 transition-all group">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-2 py-0.5 bg-[#6366F1]/15 text-[#818CF8] text-xs font-medium rounded border border-[#6366F1]/20">
                                                    {pub.venue}
                                                </span>
                                                <span className="text-[#939DB8] text-xs">{pub.year}</span>
                                                <span className="text-[#939DB8] text-xs">· {pub.type}</span>
                                            </div>
                                            <h4 className="text-base font-medium text-white mb-3 group-hover:text-[#C9D3EE] transition-colors leading-snug">
                                                {pub.title}
                                            </h4>
                                            <p className="text-[#939DB8] text-sm mb-4">{pub.authors}</p>

                                            {/* DOI and View Publication Links */}
                                            <div className="flex items-center gap-3 pt-2">
                                                {pub.doi && (
                                                    <a
                                                        href={pub.doi}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#6366F1]/15 text-[#818CF8] text-xs font-medium rounded border border-[#6366F1]/30 hover:border-[#6366F1]/60 hover:text-[#C9D3EE] transition-colors"
                                                    >
                                                        DOI
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                )}
                                                <a
                                                    href={pub.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#818CF8] text-xs font-medium transition-colors"
                                                >
                                                    View Publication
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
