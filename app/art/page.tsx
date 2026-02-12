import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getArt } from '@/lib/data';

export default function ArtPage() {
    const artPieces = getArt();

    return (
        <div className="min-h-screen bg-[#0B0C14] text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Art Gallery</h1>
                        <p className="text-xl text-[#939DB8]">
                            Creative expressions and digital art
                        </p>
                    </div>

                    {/* Art Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {artPieces.map((art) => (
                            <div
                                key={art.id}
                                className="group relative overflow-hidden rounded-xl bg-[#171926] border border-[#727DA1]/15 hover:border-[#6366F1]/40 transition-all hover:shadow-2xl hover:shadow-[#6366F1]/10"
                            >
                                {/* Art Image Placeholder */}
                                <div className="aspect-square bg-gradient-to-br from-[#6366F1]/20 via-[#818CF8]/15 to-[#4F46E5]/20 flex items-center justify-center">
                                    <span className="text-6xl">🎨</span>
                                </div>

                                {/* Art Info */}
                                <div className="p-6">
                                    <div className="text-sm text-[#939DB8] mb-2">{art.category}</div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors">
                                        {art.title}
                                    </h3>
                                    <p className="text-[#939DB8] text-sm mb-3">{art.description}</p>
                                    <div className="text-xs text-[#939DB8]">{art.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
