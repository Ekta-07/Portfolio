import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAbout, getPersonalInfo, getSkills } from '@/lib/data';

export default function AboutPage() {
    const about = getAbout();
    const personal = getPersonalInfo();
    const skills = getSkills();

    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
                        <p className="text-xl text-gray-400">{about.intro}</p>
                    </div>

                    {/* Main Content */}
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 mb-12">
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            {about.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {personal.email}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {personal.location}
                            </div>
                        </div>
                    </div>

                    {/* Currently Working On */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Currently Working On</h2>
                        <div className="space-y-6">
                            {about.currentlyWorkingOn.map((work, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                                            <p className="text-gray-400">{work.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-red-500">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.languages.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-purple-500">Data Engineering</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.dataEngineering.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-blue-500">Databases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.databases.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-green-500">Cloud & DevOps</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.cloud.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-yellow-500">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-pink-500">Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
