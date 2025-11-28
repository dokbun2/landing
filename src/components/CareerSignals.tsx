import { ArrowRight, Sparkles } from "lucide-react";

const signals = [
    { name: "Social Work Certification", emoji: "🤝", active: true },
    { name: "Childcare Education", emoji: "👶", active: false },
    { name: "Psychology Counseling", emoji: "🧠", active: false },
    { name: "Computer Engineering", emoji: "💻", active: false },
    { name: "Business Administration", emoji: "📊", active: false },
    { name: "Korean Language Teaching", emoji: "🇰🇷", active: false },
];

export default function CareerSignals() {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="neo-border bg-[var(--accent-purple)] px-4 py-2 rounded-full font-bold text-sm inline-flex items-center gap-2 mb-6">
                            <Sparkles size={16} /> CAREER PATHS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-8 leading-tight">
                            Your career goals are signals.{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">We decode them</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent-yellow)] -z-0"></span>
                            </span>{" "}
                            with you.
                        </h2>

                        <div className="space-y-3">
                            {signals.map((signal, index) => (
                                <button
                                    key={index}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold text-left transition-all ${
                                        signal.active
                                            ? "neo-card bg-[var(--accent-yellow)]"
                                            : "neo-border bg-white hover:bg-[var(--accent-yellow)]/30"
                                    }`}
                                >
                                    <span className="text-2xl">{signal.emoji}</span>
                                    <span className="flex-1 text-lg">{signal.name}</span>
                                    {signal.active && <ArrowRight size={20} />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="neo-card bg-[var(--accent-green)] p-8 rounded-2xl">
                        <div className="neo-card bg-white p-6 rounded-xl mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl">🤝</span>
                                <div>
                                    <h3 className="font-black text-xl">Social Work</h3>
                                    <p className="text-sm font-medium text-[var(--secondary)]/70">Certification Path</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {["Level 1 Basics", "Level 2 Advanced", "Practicum", "Certification"].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className={`neo-border w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${i < 2 ? "bg-[var(--accent-green)]" : "bg-white"}`}>
                                            {i + 1}
                                        </div>
                                        <span className={`font-bold ${i < 2 ? "text-[var(--secondary)]" : "text-[var(--secondary)]/50"}`}>
                                            {step}
                                        </span>
                                        {i < 2 && <span className="ml-auto text-sm font-bold text-[var(--accent-green)]">Done</span>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="font-black text-lg mb-2">Start your journey today.</p>
                            <p className="text-sm font-medium text-[var(--secondary)]/70 mb-4">Join thousands of successful graduates</p>
                            <button className="neo-btn bg-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold w-full">
                                Explore This Path
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
