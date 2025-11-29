import { Clock, Globe, Award, Users } from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "유연한 학습 시간",
        description: "언제 어디서나 원하는 시간에 학습",
        color: "bg-[var(--accent-yellow)]",
    },
    {
        icon: Globe,
        title: "100% 온라인",
        description: "집에서 편하게 수강 가능",
        color: "bg-[var(--accent-blue)]",
    },
    {
        icon: Award,
        title: "공인 자격증",
        description: "국가공인 자격증 취득 지원",
        color: "bg-[var(--accent-green)]",
    },
    {
        icon: Users,
        title: "전문가 상담",
        description: "1:1 맞춤 학습 상담 제공",
        color: "bg-[var(--accent-purple)]",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-[var(--accent-yellow)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="neo-border bg-white px-4 py-2 rounded-full font-bold text-sm inline-block mb-6">
                        왜 YJ평생교육원인가요?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6">
                        이전과는 다른<br />
                        <span className="relative inline-block">
                            <span className="relative z-10">학습 경험을 제공합니다</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-white -z-0"></span>
                        </span>
                    </h2>
                    <p className="text-lg text-[var(--secondary)]/70 max-w-xl mx-auto">
                        전문가의 안내와 함께 유연하게 새로운 기술을 습득하고 커리어를 발전시키세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`neo-card ${feature.color} p-6 rounded-2xl`}
                        >
                            <div className="neo-border bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                <feature.icon size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="font-black text-xl mb-2 text-[var(--secondary)]">
                                {feature.title}
                            </h3>
                            <p className="font-medium text-[var(--secondary)]/70">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="neo-btn bg-[var(--secondary)] text-white px-8 py-4 rounded-xl font-bold text-lg">
                        모든 특징 보기
                    </button>
                </div>
            </div>
        </section>
    );
}
