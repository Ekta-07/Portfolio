import Link from 'next/link';
import Image from 'next/image';
import type { Art } from '@/lib/data';
import SpotlightCard from '@/components/SpotlightCard';

interface ArtGallerySectionProps {
  artPieces: Art[];
}

export function ArtGallerySection({ artPieces }: ArtGallerySectionProps) {

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#6366F1] uppercase mb-3">Creative Expression</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Digital Art & Visual Design
          </h2>
          <p className="text-[#939DB8] text-sm leading-relaxed">
            Exploring the intersection of creativity, technology, and visual storytelling through digital art.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Art Preview (Full Width) */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {artPieces.map((art) => (
                <SpotlightCard key={art.id} className="group overflow-hidden rounded-xl bg-[#171926]/80 backdrop-blur-sm border border-[#727DA1]/10 hover:border-[#6366F1]/25 transition-all h-full hover:scale-102 cursor-pointer">
                  <div className="aspect-[16/9] bg-[#1E2133] relative overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                      loading="eager"
                      quality={85}
                      priority={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-white text-sm mb-1">{art.title}</h4>
                    <p className="text-xs text-[#939DB8]">{art.description}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
            <div className="mt-6 ml-1">
              <Link href="/art" className="inline-flex items-center gap-2 text-sm text-[#6366F1] hover:text-[#818CF8] font-medium transition-colors">
                View All Art
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
