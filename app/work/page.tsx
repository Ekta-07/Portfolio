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
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4"><span className="bg-gradient-to-r from-white via-[#C9D3EE] to-[#6366F1] bg-clip-text text-transparent">My Work</span></h1>
                            <p className="text-lg text-[#939DB8] max-w-2xl mx-auto">
                                From research to production — projects I've built and academic contributions
                            </p>
                        </div>
                    </FadeIn>

                    {/* Featured Projects */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6"><span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">Projects</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <FadeIn key={project.id} direction="up" delay={index * 0.15}>
                                    <ProjectCard project={project} />
                                </FadeIn>
                            ))}
                        </div>
                    </section>

                    {/* Thesis + Publications Section */}
                    <section className="mb-16">
                        {/* Thesis */}
                        <h2 className="text-2xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">Thesis</span>
                        </h2>
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
                            <h2 className="text-2xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-[#C9D3EE] to-[#818CF8] bg-clip-text text-transparent">Publications</span>
                            </h2>
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
