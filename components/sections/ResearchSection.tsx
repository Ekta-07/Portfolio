import type { Research } from '@/lib/data';
import SpotlightCard from '@/components/SpotlightCard';

interface ResearchSectionProps {
  research: Research;
}

export function ResearchSection({ research }: ResearchSectionProps) {

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#6366F1] uppercase mb-3">Research & Innovation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Academic Research & Publications
          </h2>
          <p className="text-[#939DB8] text-sm leading-relaxed">
            Exploring data science, machine learning, and computer vision through academic research and published findings.
          </p>
        </div>

        {/* Thesis */}
        <div>
          <h3 className="text-base font-medium text-[#C9D3EE] mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Thesis
          </h3>
          <SpotlightCard className="bg-[#171926]/80 backdrop-blur-sm border border-[#727DA1]/15 rounded-xl p-6 mb-8">
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
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-base font-medium text-[#C9D3EE] mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Publications
          </h3>
          <div className="space-y-8">
            {research.publications.map((pub) => (
              <SpotlightCard key={pub.id}>
                <div className="bg-[#171926]/80 backdrop-blur-sm border border-[#727DA1]/15 rounded-xl p-6 hover:border-[#6366F1]/30 transition-all group">
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
      </div>
    </section>
  );
}
