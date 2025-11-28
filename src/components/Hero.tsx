import { ArrowRight, Star, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="py-16 md:py-24 bg-[var(--background)] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 neo-border bg-[var(--accent-yellow)] px-4 py-2 rounded-full mb-6 font-bold text-sm">
                            <Star size={16} fill="currentColor" />
                            <span>전국에 10만이 선택한 이곳 YJ에듀케이션</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--secondary)] leading-[1.1] mb-6">
                            YJ효진쌤과 함께{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">자격증 취득을</span>
                                <span className="absolute bottom-2 left-0 w-full h-4 bg-[var(--accent-yellow)] -z-0 -rotate-1"></span>
                            </span>{" "}
                            보다 쉽게!
                        </h1>

                        <p className="text-lg md:text-xl text-[var(--secondary)]/70 mb-8 max-w-lg">
                            The most comprehensive lifelong education platform designed to help you achieve your professional goals.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="neo-btn bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2">
                                Start Learning <ArrowRight size={20} />
                            </button>
                            <button className="neo-btn bg-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2">
                                <Play size={20} fill="currentColor" /> Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right - Bento Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Main Card */}
                        <div className="col-span-2 neo-card bg-[var(--accent-blue)] p-6 rounded-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="neo-border bg-white w-14 h-14 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl font-black">📚</span>
                                </div>
                                <div>
                                    <h3 className="font-black text-xl">100+ Courses</h3>
                                    <p className="text-sm font-medium text-[var(--secondary)]/70">Expert-led curriculum</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="neo-border bg-white px-3 py-1 rounded-full text-sm font-bold">Social Work</span>
                                <span className="neo-border bg-white px-3 py-1 rounded-full text-sm font-bold">Psychology</span>
                                <span className="neo-border bg-white px-3 py-1 rounded-full text-sm font-bold">+15</span>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="neo-card bg-[var(--accent-green)] p-5 rounded-2xl">
                            <span className="text-4xl font-black">95%</span>
                            <p className="font-bold text-sm mt-1">Job Placement Rate</p>
                        </div>

                        {/* Rating Card */}
                        <div className="neo-card bg-[var(--accent-yellow)] p-5 rounded-2xl">
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <span className="text-2xl font-black">4.9/5</span>
                            <p className="font-bold text-sm">Student Rating</p>
                        </div>

                        {/* Profile Avatars */}
                        <div className="col-span-2 neo-card bg-[var(--accent-purple)] p-5 rounded-2xl flex items-center justify-between">
                            <div className="flex -space-x-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="neo-border w-12 h-12 rounded-full bg-white flex items-center justify-center text-lg">
                                        {["👩‍💼", "👨‍💻", "👩‍🔬", "👨‍🏫"][i]}
                                    </div>
                                ))}
                            </div>
                            <div className="text-right">
                                <p className="font-black text-lg">Join 10,000+</p>
                                <p className="font-bold text-sm text-[var(--secondary)]/70">Active learners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
