import { Check, TrendingUp, Target, BookOpen } from "lucide-react";

export default function PersonalizedPlan() {
    return (
        <section className="py-24 bg-[var(--accent-blue)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Cards Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="neo-card bg-[var(--accent-yellow)] p-6 rounded-2xl col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="neo-border bg-white w-12 h-12 rounded-xl flex items-center justify-center">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg">목표 달성!</h4>
                                    <p className="text-sm font-medium text-[var(--secondary)]/70">사회복지사 2급</p>
                                </div>
                            </div>
                            <div className="neo-border bg-white h-4 rounded-full overflow-hidden">
                                <div className="bg-[var(--accent-green)] h-full w-full" />
                            </div>
                        </div>

                        <div className="neo-card bg-white p-5 rounded-2xl">
                            <div className="neo-border bg-[var(--accent-green)] w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <Check size={20} />
                            </div>
                            <span className="text-3xl font-black">12</span>
                            <p className="font-bold text-sm text-[var(--secondary)]/70">수강 완료</p>
                        </div>

                        <div className="neo-card bg-white p-5 rounded-2xl">
                            <div className="neo-border bg-[var(--accent-purple)] w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                                <BookOpen size={20} />
                            </div>
                            <span className="text-3xl font-black">48시간</span>
                            <p className="font-bold text-sm text-[var(--secondary)]/70">학습 시간</p>
                        </div>

                        <div className="neo-card bg-[var(--accent-orange)] p-5 rounded-2xl col-span-2">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="neo-border bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-black">주간 진행률</h4>
                                        <p className="text-xs font-medium text-[var(--secondary)]/70">최근 7일</p>
                                    </div>
                                </div>
                                <span className="neo-border bg-white px-3 py-1 rounded-full font-bold text-sm">+23%</span>
                            </div>
                            <div className="flex items-end gap-2 h-20">
                                {[40, 60, 80, 50, 70, 90, 75].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 neo-border bg-white rounded-t-lg transition-all"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <span className="neo-border bg-white px-4 py-2 rounded-full font-bold text-sm inline-block mb-6">
                            맞춤형 학습
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6 leading-tight">
                            나만을 위한{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">맞춤 학습 계획</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent-yellow)] -z-0"></span>
                            </span>
                        </h2>
                        <p className="text-lg text-[var(--secondary)]/70 mb-8">
                            목표, 일정, 학습 스타일에 맞춘 맞춤형 학습 경로를 제공합니다. 진행 상황을 추적하고 더 빠르게 목표를 달성하세요.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {["AI 기반 과정 추천", "진행률 대시보드", "맞춤형 학습 일정"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="neo-border bg-[var(--accent-green)] w-8 h-8 rounded-lg flex items-center justify-center">
                                        <Check size={18} />
                                    </div>
                                    <span className="font-bold text-[var(--secondary)]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="neo-btn bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold text-lg">
                            지금 시작하기
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
