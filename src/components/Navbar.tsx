"use client";

import Link from "next/link";
import { Menu, User, ChevronDown, ChevronRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// 드롭다운 메뉴 데이터
const menuData = {
    수강안내: {
        title: "수강안내",
        items: [
            {
                title: "교육과정",
                description: "다양한 자격증 취득 과정을 확인하세요.",
                image: "/images/courses.jpg",
            },
            {
                title: "수강신청",
                description: "원하는 과정에 바로 등록하세요.",
                image: "/images/register.jpg",
            },
            {
                title: "학습지원",
                description: "학습에 필요한 모든 지원을 받으세요.",
                image: "/images/support.jpg",
            },
            {
                title: "FAQ",
                description: "자주 묻는 질문에 대한 답변을 확인하세요.",
                image: "/images/faq.jpg",
            },
        ],
    },
    개강안내: {
        title: "개강안내",
        items: [
            {
                title: "개강일정",
                description: "새로운 과정의 개강 일정을 확인하세요.",
                image: "/images/schedule.jpg",
            },
            {
                title: "교육장 안내",
                description: "YJ평생교육원의 시설을 둘러보세요.",
                image: "/images/facility.jpg",
            },
            {
                title: "강사소개",
                description: "전문 강사진을 만나보세요.",
                image: "/images/instructors.jpg",
            },
            {
                title: "공지사항",
                description: "최신 소식과 공지를 확인하세요.",
                image: "/images/notice.jpg",
            },
        ],
    },
};

// 드롭다운 아이템 컴포넌트
function DropdownItem({ item, colorClass }: { item: { title: string; description: string; image: string }; colorClass: string }) {
    return (
        <Link
            href="#"
            className={`group flex flex-col gap-3 p-4 rounded-xl neo-border bg-white transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--border)]`}
        >
            <div className={`w-full h-28 rounded-lg overflow-hidden neo-border ${colorClass}`}>
                <div className="w-full h-full flex items-center justify-center">
                    <span className="text-lg font-black text-[var(--secondary)]">{item.title}</span>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-1 font-black text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                    {item.title}
                    <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="text-sm font-medium text-gray-600 mt-1">{item.description}</p>
            </div>
        </Link>
    );
}

// 카드 색상 배열
const cardColors = [
    "bg-[var(--accent-yellow)]",
    "bg-[var(--accent-blue)]",
    "bg-[var(--accent-green)]",
    "bg-[var(--accent-purple)]",
];

// 데스크톱 드롭다운 컴포넌트
function DesktopDropdown({ menuKey, isOpen }: { menuKey: string; isOpen: boolean }) {
    const menu = menuData[menuKey as keyof typeof menuData];
    if (!menu) return null;

    return (
        <div
            className={`absolute top-full left-0 w-screen bg-[var(--background)] border-b-3 border-[var(--border)] transition-all duration-300 ${
                isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl font-black text-[var(--secondary)]">{menu.title}</h3>
                    <div className="flex-1 h-[3px] bg-[var(--border)]"></div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {menu.items.map((item, index) => (
                        <DropdownItem key={index} item={item} colorClass={cardColors[index % cardColors.length]} />
                    ))}
                </div>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t-3 border-[var(--border)]">
                    <Link href="#" className="neo-btn bg-[var(--accent-pink)] px-4 py-2 rounded-lg text-sm font-bold text-[var(--secondary)] flex items-center gap-1">
                        전체 보기 <ChevronRight size={14} />
                    </Link>
                    <Link href="#" className="neo-btn bg-[var(--accent-orange)] px-4 py-2 rounded-lg text-sm font-bold text-[var(--secondary)] flex items-center gap-1">
                        문의하기 <ChevronRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

// 모바일 메뉴 컴포넌트
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const menuColors: { [key: string]: string } = {
        "수강안내": "bg-[var(--accent-yellow)]",
        "개강안내": "bg-[var(--accent-blue)]",
    };

    return (
        <>
            {/* 오버레이 */}
            <div
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={onClose}
            />

            {/* 사이드 메뉴 */}
            <div
                className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[var(--background)] z-50 transform transition-transform duration-300 md:hidden neo-border border-r-0 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b-3 border-[var(--border)]">
                    <Link href="/" className="text-xl font-black tracking-tighter text-[var(--secondary)]">
                        YJ<span className="text-[var(--primary)]">EDU</span>
                    </Link>
                    <button onClick={onClose} className="neo-btn p-2 bg-white rounded-lg">
                        <X size={24} />
                    </button>
                </div>

                <div className="overflow-y-auto h-[calc(100%-160px)]">
                    {Object.entries(menuData).map(([key, menu]) => (
                        <div key={key} className="border-b-3 border-[var(--border)]">
                            <button
                                onClick={() => setExpandedMenu(expandedMenu === key ? null : key)}
                                className={`flex items-center justify-between w-full p-4 font-black text-[var(--secondary)] ${
                                    expandedMenu === key ? menuColors[key] : ""
                                }`}
                            >
                                {key}
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${
                                        expandedMenu === key ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    expandedMenu === key ? "max-h-[600px]" : "max-h-0"
                                }`}
                            >
                                <div className="px-4 pb-4 space-y-3">
                                    {menu.items.map((item, index) => (
                                        <Link
                                            key={index}
                                            href="#"
                                            className={`block p-3 rounded-lg neo-border ${cardColors[index % cardColors.length]} transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--border)]`}
                                        >
                                            <div className="font-bold text-[var(--secondary)]">{item.title}</div>
                                            <div className="text-sm text-gray-700 mt-1">{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <Link href="#" className="flex items-center gap-2 p-4 font-black text-[var(--secondary)] hover:bg-[var(--accent-green)] transition-colors">
                        Community
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t-3 border-[var(--border)] bg-[var(--background)]">
                    <div className="flex gap-3">
                        <button className="flex-1 py-3 font-bold text-[var(--secondary)] neo-btn bg-white rounded-lg">
                            Login
                        </button>
                        <button className="flex-1 py-3 font-bold text-white bg-[var(--primary)] rounded-lg neo-btn">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // 마우스가 nav 영역을 벗어나면 드롭다운 닫기
    useEffect(() => {
        const handleMouseLeave = () => {
            timeoutRef.current = setTimeout(() => {
                setActiveDropdown(null);
            }, 150);
        };

        const handleMouseEnter = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };

        const nav = navRef.current;
        if (nav) {
            nav.addEventListener("mouseleave", handleMouseLeave);
            nav.addEventListener("mouseenter", handleMouseEnter);
        }

        return () => {
            if (nav) {
                nav.removeEventListener("mouseleave", handleMouseLeave);
                nav.removeEventListener("mouseenter", handleMouseEnter);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMenuHover = (menuKey: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(menuKey);
    };

    return (
        <>
            <nav
                ref={navRef}
                className="sticky top-0 left-0 w-full z-50 px-6 py-4 bg-[var(--background)] border-b-3 border-[var(--border)]"
            >
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-[var(--secondary)]">
                            YJ<span className="text-[var(--primary)]">EDU</span>
                        </Link>
                        <div className="hidden md:flex gap-1">
                            <button
                                onMouseEnter={() => handleMenuHover("수강안내")}
                                className={`flex items-center gap-1 px-4 py-2 font-bold text-[var(--secondary)] rounded-lg transition-colors ${
                                    activeDropdown === "수강안내" ? "bg-[var(--accent-yellow)]" : "hover:bg-[var(--accent-yellow)]"
                                }`}
                            >
                                수강안내 <ChevronDown size={16} className={`transition-transform ${activeDropdown === "수강안내" ? "rotate-180" : ""}`} />
                            </button>
                            <button
                                onMouseEnter={() => handleMenuHover("개강안내")}
                                className={`flex items-center gap-1 px-4 py-2 font-bold text-[var(--secondary)] rounded-lg transition-colors ${
                                    activeDropdown === "개강안내" ? "bg-[var(--accent-blue)]" : "hover:bg-[var(--accent-blue)]"
                                }`}
                            >
                                개강안내 <ChevronDown size={16} className={`transition-transform ${activeDropdown === "개강안내" ? "rotate-180" : ""}`} />
                            </button>
                            <button
                                onMouseEnter={() => setActiveDropdown(null)}
                                className="px-4 py-2 font-bold text-[var(--secondary)] hover:bg-[var(--accent-green)] rounded-lg transition-colors"
                            >
                                Community
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 font-bold text-[var(--secondary)] hover:bg-[var(--accent-purple)] rounded-lg transition-colors">
                            <User size={18} />
                            <span>Login</span>
                        </button>
                        <button className="neo-btn bg-[var(--primary)] text-white px-5 py-2 rounded-lg font-bold">
                            Join Now
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden neo-border p-2 rounded-lg bg-white"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* 데스크톱 드롭다운 */}
                <DesktopDropdown menuKey="수강안내" isOpen={activeDropdown === "수강안내"} />
                <DesktopDropdown menuKey="개강안내" isOpen={activeDropdown === "개강안내"} />
            </nav>

            {/* 모바일 메뉴 */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
}
