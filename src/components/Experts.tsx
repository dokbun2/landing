export default function Experts() {
    const experts = [
        { name: "Dr. Kim", role: "Social Work", color: "bg-[var(--accent-blue)]", emoji: "👩‍⚕️" },
        { name: "Prof. Lee", role: "Psychology", color: "bg-[var(--accent-green)]", emoji: "👨‍🏫" },
        { name: "Dr. Park", role: "Childcare", color: "bg-[var(--accent-orange)]", emoji: "👩‍🔬" },
        { name: "Prof. Choi", role: "IT & Engineering", color: "bg-[var(--accent-purple)]", emoji: "👨‍💻" },
        { name: "Dr. Jung", role: "Business", color: "bg-[var(--accent-yellow)]", emoji: "👩‍💼" },
    ];

    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="neo-border bg-[var(--accent-blue)] px-4 py-2 rounded-full font-bold text-sm inline-block mb-6">
                        OUR EXPERTS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6">
                        Developed by world-class{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">professors & experts</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent-yellow)] -z-0"></span>
                        </span>
                    </h2>
                    <p className="text-lg text-[var(--secondary)]/70 max-w-xl mx-auto">
                        Learn from the best in their fields. Our instructors bring years of real-world experience.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {experts.map((expert, index) => (
                        <div key={index} className="neo-card bg-white p-6 rounded-2xl text-center w-[200px]">
                            <div className={`neo-border ${expert.color} w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                                <span className="text-4xl">{expert.emoji}</span>
                            </div>
                            <h3 className="font-black text-lg text-[var(--secondary)]">{expert.name}</h3>
                            <p className="font-medium text-sm text-[var(--secondary)]/70">{expert.role}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="neo-btn bg-white px-8 py-4 rounded-xl font-bold text-lg">
                        Meet All Instructors
                    </button>
                </div>
            </div>
        </section>
    );
}
