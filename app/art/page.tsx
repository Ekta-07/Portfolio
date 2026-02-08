import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getArt } from '@/lib/data';

export default function ArtPage() {
    const artPieces = getArt();

    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Art Gallery</h1>
                        <p className="text-xl text-gray-400">
                            Creative expressions and digital art
                        </p>
                    </div>

                    {/* Art Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {artPieces.map((art) => (
                            <div
                                key={art.id}
                                className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20"
                            >
                                {/* Art Image Placeholder */}
                                <div className="aspect-square bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 flex items-center justify-center">
                                    <span className="text-6xl">🎨</span>
                                </div>

                                {/* Art Info */}
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">{art.category}</div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                                        {art.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3">{art.description}</p>
                                    <div className="text-xs text-gray-500">{art.date}</div>
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
