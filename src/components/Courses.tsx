import { ArrowRight } from "lucide-react";

const courses = [
    {
        id: 1,
        category: "사회복지",
        title: "사회복지사 2급",
        description: "체계적인 커리큘럼으로 사회복지사 자격증을 취득하세요.",
        color: "bg-[var(--accent-green)]",
        emoji: "🤝",
    },
    {
        id: 2,
        category: "보육",
        title: "보육교사",
        description: "전문 보육교사로 성장하기 위한 필수 교육과정입니다.",
        color: "bg-[var(--accent-blue)]",
        emoji: "👶",
    },
    {
        id: 3,
        category: "심리상담",
        title: "상담심리사",
        description: "인간 행동을 이해하고 상담 기법을 배워보세요.",
        color: "bg-[var(--accent-purple)]",
        emoji: "🧠",
    },
];

export default function Courses() {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <span className="neo-border bg-[var(--accent-orange)] px-4 py-2 rounded-full font-bold text-sm inline-block mb-4">
                            인기 과정
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[var(--secondary)] max-w-lg">
                            커리어 향상을 위한 교육 과정
                        </h2>
                    </div>
                    <button className="neo-btn bg-white px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                        전체 과정 보기 <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="neo-card bg-white rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className={`${course.color} p-8 flex items-center justify-center`}>
                                <span className="text-6xl">{course.emoji}</span>
                            </div>

                            <div className="p-6">
                                <span className="neo-border bg-[var(--background)] px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                                    {course.category}
                                </span>
                                <h3 className="text-xl font-black text-[var(--secondary)] mb-3">
                                    {course.title}
                                </h3>
                                <p className="text-[var(--secondary)]/70 font-medium mb-4">
                                    {course.description}
                                </p>

                                <button className="flex items-center gap-2 font-bold text-[var(--primary)] hover:gap-3 transition-all">
                                    자세히 보기 <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
