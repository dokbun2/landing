import { Smartphone, Bell, Calendar, BookOpen } from "lucide-react";

export default function MobileApp() {
    return (
        <section className="py-24 bg-[var(--accent-purple)] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="neo-border bg-white px-4 py-2 rounded-full font-bold text-sm inline-block mb-6">
                            MOBILE APP
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6 leading-tight">
                            A personal career advisor{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">in your pocket</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent-yellow)] -z-0"></span>
                            </span>
                        </h2>
                        <p className="text-lg text-[var(--secondary)]/70 mb-8">
                            Access your courses, track your progress, and get expert advice anytime, anywhere with our mobile app.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: Bell, title: "Smart Reminders", desc: "Never miss a class" },
                                { icon: Calendar, title: "Schedule", desc: "Plan your study" },
                                { icon: BookOpen, title: "Offline Mode", desc: "Learn anywhere" },
                                { icon: Smartphone, title: "Cross-device", desc: "Sync seamlessly" },
                            ].map((item, i) => (
                                <div key={i} className="neo-card bg-white p-4 rounded-xl">
                                    <div className="neo-border bg-[var(--accent-yellow)] w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="font-black text-sm">{item.title}</h4>
                                    <p className="text-xs font-medium text-[var(--secondary)]/70">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <button className="neo-btn bg-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                                <span className="text-xl">🍎</span> App Store
                            </button>
                            <button className="neo-btn bg-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                                <span className="text-xl">▶️</span> Play Store
                            </button>
                        </div>
                    </div>

                    {/* Right - Phone Mockup */}
                    <div className="flex justify-center">
                        <div className="neo-card bg-[var(--secondary)] w-[280px] rounded-[2.5rem] p-3">
                            <div className="bg-white rounded-[2rem] overflow-hidden">
                                {/* Status Bar */}
                                <div className="bg-[var(--secondary)] text-white px-6 py-2 flex justify-between items-center text-xs font-bold">
                                    <span>9:41</span>
                                    <div className="w-20 h-6 bg-[var(--secondary)] rounded-full absolute left-1/2 -translate-x-1/2" />
                                    <span>100%</span>
                                </div>

                                {/* App Content */}
                                <div className="p-4 bg-[var(--background)]">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <p className="text-xs font-bold text-[var(--secondary)]/70">Welcome back</p>
                                            <h3 className="font-black">Sohee Kim</h3>
                                        </div>
                                        <div className="neo-border bg-[var(--accent-yellow)] w-10 h-10 rounded-full flex items-center justify-center">
                                            👩‍💼
                                        </div>
                                    </div>

                                    <div className="neo-card bg-[var(--primary)] text-white p-4 rounded-xl mb-4">
                                        <p className="text-xs font-bold opacity-80 mb-1">Daily Goal</p>
                                        <div className="flex justify-between items-end">
                                            <span className="text-2xl font-black">85%</span>
                                            <span className="neo-border bg-white/20 px-2 py-1 rounded-full text-xs font-bold border-white/30">Keep going!</span>
                                        </div>
                                    </div>

                                    <p className="font-black text-sm mb-3">Upcoming Classes</p>
                                    <div className="space-y-2">
                                        {[
                                            { title: "Social Work Basics", time: "10:00 AM", color: "bg-[var(--accent-green)]" },
                                            { title: "Psychology 101", time: "2:00 PM", color: "bg-[var(--accent-blue)]" },
                                            { title: "Counseling Lab", time: "4:00 PM", color: "bg-[var(--accent-purple)]" },
                                        ].map((cls, i) => (
                                            <div key={i} className="neo-border bg-white p-3 rounded-xl flex items-center gap-3">
                                                <div className={`neo-border ${cls.color} w-8 h-8 rounded-lg`} />
                                                <div className="flex-1">
                                                    <p className="font-bold text-xs">{cls.title}</p>
                                                    <p className="text-[10px] text-[var(--secondary)]/70">{cls.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="bg-white neo-border border-x-0 border-b-0 p-3 flex justify-around">
                                    {["🏠", "📚", "📊", "👤"].map((emoji, i) => (
                                        <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 0 ? "neo-border bg-[var(--accent-yellow)]" : ""}`}>
                                            <span className="text-lg">{emoji}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
