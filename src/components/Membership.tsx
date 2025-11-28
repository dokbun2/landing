import { Check, Sparkles } from "lucide-react";

export default function Membership() {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="neo-border bg-[var(--accent-orange)] px-4 py-2 rounded-full font-bold text-sm inline-flex items-center gap-2 mb-6">
                            <Sparkles size={16} /> PREMIUM ACCESS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary)] mb-6 leading-tight">
                            Superpower{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Membership</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--accent-yellow)] -z-0"></span>
                            </span>
                        </h2>
                        <p className="text-lg text-[var(--secondary)]/70 mb-8">
                            Get unlimited access to all courses, 1:1 mentoring, and exclusive career workshops with our annual membership.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                { text: "Unlimited Course Access", color: "bg-[var(--accent-green)]" },
                                { text: "Personal Career Mentor", color: "bg-[var(--accent-blue)]" },
                                { text: "Certificate of Completion", color: "bg-[var(--accent-purple)]" },
                                { text: "Offline Networking Events", color: "bg-[var(--accent-orange)]" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className={`neo-border ${item.color} w-8 h-8 rounded-lg flex items-center justify-center`}>
                                        <Check size={18} />
                                    </div>
                                    <span className="font-bold text-[var(--secondary)]">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="neo-card bg-[var(--accent-yellow)] p-6 rounded-2xl mb-8">
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-black text-[var(--secondary)]">$499</span>
                                <span className="font-bold text-[var(--secondary)]/70">/ year</span>
                            </div>
                            <p className="font-medium text-[var(--secondary)]/70">Save $200 compared to monthly</p>
                        </div>

                        <button className="neo-btn bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold text-lg w-full md:w-auto">
                            Get Started Now
                        </button>

                        <p className="mt-4 font-medium text-sm text-[var(--secondary)]/70">
                            * 30-day money-back guarantee. Cancel anytime.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        {/* Card Mockup */}
                        <div className="neo-card bg-[var(--primary)] w-full max-w-md aspect-[1.6/1] rounded-2xl p-8 flex flex-col justify-between text-white relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-20 h-20 neo-border bg-[var(--accent-yellow)] rounded-full opacity-80" />
                            <div className="absolute bottom-4 left-4 w-12 h-12 neo-border bg-[var(--accent-blue)] rounded-lg opacity-80" />

                            <div className="flex justify-between items-start z-10">
                                <span className="text-3xl font-black">YJ<span className="opacity-80">EDU</span></span>
                                <span className="neo-border bg-white text-[var(--secondary)] px-4 py-1 rounded-full font-bold text-sm">
                                    PREMIUM
                                </span>
                            </div>

                            <div className="z-10">
                                <div className="flex gap-4 mb-6">
                                    <div className="neo-border bg-[var(--accent-yellow)] w-14 h-10 rounded-lg" />
                                    <div className="neo-border bg-white/20 w-10 h-10 rounded-full flex items-center justify-center border-white/40">
                                        <span className="text-xs font-bold">NFC</span>
                                    </div>
                                </div>
                                <p className="font-mono text-xl tracking-widest mb-4">
                                    **** **** **** 8829
                                </p>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs font-bold opacity-70 uppercase">Member Name</p>
                                        <p className="font-black text-lg">SOHEE KIM</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold opacity-70 uppercase">Valid Thru</p>
                                        <p className="font-black text-lg">12/28</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
