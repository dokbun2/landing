import { Heart, MessageCircle, Share2 } from "lucide-react";

const testimonials = [
    {
        id: 1,
        user: "김지영",
        handle: "@jiyoung_study",
        content: "드디어 사회복지사 2급 자격증 취득했어요! YJ평생교육원 덕분에 체계적으로 공부할 수 있었습니다. #사회복지사 #자격증취득",
        color: "bg-[var(--accent-blue)]",
        likes: 124,
        emoji: "👩‍💼",
    },
    {
        id: 2,
        user: "박민수",
        handle: "@minsu_dev",
        content: "코딩 부트캠프 힘들었지만 정말 가치있었어요. 오늘 첫 개발자 취업 성공! #커리어전환 #개발자",
        color: "bg-[var(--accent-purple)]",
        likes: 89,
        emoji: "👨‍💻",
    },
    {
        id: 3,
        user: "이수진",
        handle: "@sujin_edu",
        content: "보육교사 과정 정말 좋아요. 강사님들이 너무 친절하시고 실습도 알차게 진행됩니다. 실습 기대돼요!",
        color: "bg-[var(--accent-orange)]",
        likes: 256,
        emoji: "👩‍🏫",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-[var(--accent-green)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <span className="neo-border bg-white px-4 py-2 rounded-full font-bold text-sm inline-block mb-4">
                            수강생 후기
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[var(--secondary)]">
                            수강생들의{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">생생한 후기</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent-yellow)] -z-0"></span>
                            </span>
                        </h2>
                    </div>
                    <button className="neo-btn bg-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold">
                        팔로우하기
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((post) => (
                        <div key={post.id} className="neo-card bg-white rounded-2xl overflow-hidden">
                            <div className={`${post.color} p-8 flex items-center justify-center`}>
                                <span className="text-6xl">{post.emoji}</span>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="neo-border bg-[var(--accent-yellow)] w-12 h-12 rounded-full flex items-center justify-center text-xl">
                                        {post.emoji}
                                    </div>
                                    <div>
                                        <p className="font-black text-[var(--secondary)]">{post.user}</p>
                                        <p className="text-sm font-medium text-[var(--secondary)]/70">{post.handle}</p>
                                    </div>
                                </div>

                                <p className="font-medium text-[var(--secondary)]/80 mb-6 leading-relaxed">
                                    {post.content}
                                </p>

                                <div className="flex items-center gap-4">
                                    <button className="neo-border bg-[var(--accent-pink)] px-3 py-2 rounded-lg flex items-center gap-2 font-bold text-sm hover:bg-red-200 transition-colors">
                                        <Heart size={16} fill="currentColor" /> {post.likes}
                                    </button>
                                    <button className="neo-border bg-white px-3 py-2 rounded-lg hover:bg-[var(--accent-blue)] transition-colors">
                                        <MessageCircle size={16} />
                                    </button>
                                    <button className="neo-border bg-white px-3 py-2 rounded-lg hover:bg-[var(--accent-green)] transition-colors">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
