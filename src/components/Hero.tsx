import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-16 md:py-24 bg-[var(--background)] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 neo-border bg-[var(--accent-yellow)] px-4 py-2 rounded-full mb-6 font-bold text-sm">
                            <span className="text-lg">⭐</span>
                            <span>전국에 10만이 선택한 이곳 YJ에듀케이션</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--secondary)] leading-[1.1] mb-6">
                            YJ 효진쌤과 함께{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">자격증 취득을 쉽고</span><br />
                                <span className="absolute bottom-2 left-0 w-full h-4 bg-[var(--accent-yellow)] -z-0 -rotate-1"></span>
                            </span>{" "}
                            빠르게!
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

                    {/* Right - Hero Image */}
                    <div className="relative">
                        <div className="neo-border rounded-3xl overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 shadow-[8px_8px_0_var(--border)]">
                            <Image
                                src="/images/hero-banner.png"
                                alt="사회복지사 자격증 - YJ평생교육원"
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -left-4 neo-btn bg-[var(--accent-yellow)] px-4 py-3 rounded-xl">
                            <p className="font-black text-lg">유망직종 1위</p>
                            <p className="text-sm font-bold">사회복지사</p>
                        </div>

                        {/* Floating Badge 2 */}
                        <div className="absolute -top-4 -right-4 neo-btn bg-[var(--accent-green)] px-4 py-3 rounded-xl">
                            <p className="font-black text-lg">온라인 + 실습</p>
                            <p className="text-sm font-bold">전과목 보유</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
