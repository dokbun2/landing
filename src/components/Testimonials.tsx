import { Heart, MessageCircle, Share2 } from "lucide-react";

const testimonials = [
    {
        id: 1,
        user: "Sarah J.",
        handle: "@sarah_study",
        content: "Finally got my Social Worker Level 2 certification! Thanks to YJ Edu for the amazing guidance. #SocialWork #Certified",
        color: "bg-[var(--accent-blue)]",
        likes: 124,
        emoji: "👩‍💼",
    },
    {
        id: 2,
        user: "Mike T.",
        handle: "@mike_tech",
        content: "The coding bootcamp was intense but worth it. Landed my first dev job today! #CareerChange #Developer",
        color: "bg-[var(--accent-purple)]",
        likes: 89,
        emoji: "👨‍💻",
    },
    {
        id: 3,
        user: "Emily R.",
        handle: "@emily_kids",
        content: "Loving the Childcare course. The instructors are so supportive. Can't wait to start my practicum.",
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
                            SUCCESS STORIES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-[var(--secondary)]">
                            See what our students{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">are achieving</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent-yellow)] -z-0"></span>
                            </span>
                        </h2>
                    </div>
                    <button className="neo-btn bg-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold">
                        Follow Us
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
