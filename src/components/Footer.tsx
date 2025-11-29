import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[var(--secondary)] text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link href="/" className="text-3xl font-black tracking-tighter mb-6 block">
                            YJ<span className="text-[var(--primary)]">EDU</span>
                        </Link>
                        <p className="font-medium text-white/70 leading-relaxed">
                            YJ평생교육원은 모든 분들께 양질의 교육을 제공하기 위해 최선을 다하고 있습니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black text-lg mb-6">교육과정</h4>
                        <ul className="space-y-3">
                            {["사회복지사", "보육교사", "상담심리사", "IT·공학"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="font-medium text-white/70 hover:text-[var(--accent-yellow)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-lg mb-6">회사소개</h4>
                        <ul className="space-y-3">
                            {["소개", "채용", "블로그", "문의하기"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="font-medium text-white/70 hover:text-[var(--accent-yellow)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-lg mb-6">소통하기</h4>
                        <div className="flex gap-3 mb-6">
                            {[
                                { icon: Instagram, color: "bg-[var(--accent-pink)]" },
                                { icon: Youtube, color: "bg-[var(--accent-orange)]" },
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className={`neo-border ${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-[var(--secondary)] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform`}
                                >
                                    <social.icon size={20} />
                                </Link>
                            ))}
                        </div>
                        <p className="font-medium text-white/70">
                            뉴스레터를 구독하고 최신 소식을 받아보세요.
                        </p>
                        <div className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="이메일 주소"
                                className="neo-border bg-white text-[var(--secondary)] px-4 py-2 rounded-xl font-medium flex-1 placeholder:text-[var(--secondary)]/50"
                            />
                            <button className="neo-btn bg-[var(--primary)] text-white px-4 py-2 rounded-xl font-bold">
                                구독
                            </button>
                        </div>
                    </div>
                </div>

                <div className="neo-border border-white/20 border-x-0 border-b-0 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-medium text-white/70">
                        &copy; 2024 YJ평생교육원. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="font-medium text-white/70 hover:text-white transition-colors">
                            개인정보처리방침
                        </Link>
                        <Link href="#" className="font-medium text-white/70 hover:text-white transition-colors">
                            이용약관
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
