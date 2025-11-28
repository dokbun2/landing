import { CheckCircle, Clock, Globe, Award, Zap, Users } from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "Flexible Schedule",
        description: "Learn at your own pace, anytime",
        color: "bg-[var(--accent-yellow)]",
    },
    {
        icon: Globe,
        title: "100% Online",
        description: "Access from anywhere in the world",
        color: "bg-[var(--accent-blue)]",
    },
    {
        icon: Award,
        title: "Certified",
        description: "Get official certifications",
        color: "bg-[var(--accent-green)]",
    },
    {
        icon: Users,
        title: "Expert Support",
        description: "1:1 mentoring sessions",
        color: "bg-[var(--accent-purple)]",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-[var(--accent-yellow)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="neo-border bg-white px-4 py-2 rounded-full font-bold text-sm inline-block mb-6">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6">
                        A learning experience<br />
                        <span className="relative inline-block">
                            <span className="relative z-10">like never before</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-white -z-0"></span>
                        </span>
                    </h2>
                    <p className="text-lg text-[var(--secondary)]/70 max-w-xl mx-auto">
                        We provide a flexible, expert-guided path to help you master new skills and advance your career.
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
                        Explore All Features
                    </button>
                </div>
            </div>
        </section>
    );
}
