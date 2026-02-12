import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getProjects, getResearch } from '@/lib/data';

export default function WorkPage() {
    const projects = getProjects().filter(p => p.featured).slice(0, 3);
    const research = getResearch();

    return (
        <div className="min-h-screen bg-[#0B0C14] text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">My Work</h1>
                        <p className="text-xl text-[#939DB8] max-w-2xl mx-auto">
                            From research to production — projects I've built and academic contributions
                        </p>
                    </div>

                    {/* Featured Projects */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-2 h-2 rounded-full bg-[#6366F1]"></div>
                            <h2 className="text-2xl font-bold">Projects</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>

                    {/* PhD Research Section */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-2 h-2 rounded-full bg-[#818CF8]"></div>
                            <h2 className="text-2xl font-bold">Research</h2>
                        </div>

                        {/* PhD Overview Card */}
                        <div className="bg-gradient-to-br from-[#171926] to-[#0E0F1A] border border-[#727DA1]/15 rounded-2xl p-8 md:p-10 mb-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6366F1]/15 border border-[#6366F1]/25 rounded-full text-[#818CF8] text-sm font-medium mb-4">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                        {research.degree}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{research.university}</h3>
                                    <p className="text-[#939DB8] text-sm">{research.years} · {research.area}</p>
                                </div>
                            </div>

                            {/* Thesis */}
                            <div className="bg-[#0B0C14]/60 border border-[#727DA1]/10 rounded-xl p-6">
                                <div className="text-xs font-medium text-[#6366F1] uppercase tracking-wider mb-3">Doctoral Thesis</div>
                                <h4 className="text-lg font-semibold text-white mb-3 leading-snug">
                                    {research.thesis.title}
                                </h4>
                                <p className="text-[#939DB8] text-sm leading-relaxed mb-4">
                                    {research.thesis.abstract}
                                </p>
                                <a
                                    href={research.thesis.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#818CF8] font-medium text-sm transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Read Full Thesis
                                </a>
                            </div>
                        </div>

                        {/* Publications */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Publications
                            </h3>
                            <div className="space-y-4">
                                {research.publications.map((pub) => (
                                    <a
                                        key={pub.id}
                                        href={pub.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-[#171926] border border-[#727DA1]/15 rounded-xl p-6 hover:border-[#6366F1]/30 transition-all group"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="px-2 py-0.5 bg-[#6366F1]/15 text-[#818CF8] text-xs font-medium rounded border border-[#6366F1]/20">
                                                        {pub.venue}
                                                    </span>
                                                    <span className="text-[#939DB8] text-xs">{pub.year}</span>
                                                    <span className="text-[#939DB8] text-xs">· {pub.type}</span>
                                                </div>
                                                <h4 className="text-base font-semibold text-white mb-2 group-hover:text-[#C9D3EE] transition-colors leading-snug">
                                                    {pub.title}
                                                </h4>
                                                <p className="text-[#939DB8] text-sm">{pub.authors}</p>
                                            </div>
                                            <svg className="w-5 h-5 text-[#939DB8] group-hover:text-[#6366F1] transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </a>
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
