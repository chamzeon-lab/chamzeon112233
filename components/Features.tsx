import React from 'react';
import { Calendar, Eye, ArrowRight } from 'lucide-react';

// 데이터베이스에서 가져온 데이터라고 가정 (관리자가 작성한 글)
const boardData = [
    {
        id: 1,
        category: "중성화/산부인과",
        title: "5살 말티즈 '코코' 최소절개 암컷 중성화 수술 케이스",
        date: "2024.05.20",
        views: 1240,
        image: "https://picsum.photos/id/1025/600/400",
        summary: "노블케어만의 최소절개 기법을 적용하여 1cm 미만의 절개로 수술을 진행했습니다. 당일 퇴원 후 식욕과 활력이 즉시 회복된 케이스입니다.",
        tags: ["#최소절개", "#당일퇴원", "#흉터최소화"]
    },
    {
        id: 2,
        category: "정형외과",
        title: "양측 슬개골 탈구 3기, 관절 보존 수술 및 재활 후기",
        date: "2024.05.18",
        views: 985,
        image: "https://picsum.photos/id/169/600/400",
        summary: "타 병원에서 수술 불가 판정을 받았으나 본원의 정밀 진단 후 관절 보존 수술을 시행하였습니다. 수술 2주차 보행 영상과 전후 사진을 공개합니다.",
        tags: ["#슬개골탈구", "#관절수술", "#재활치료"]
    },
    {
        id: 3,
        category: "치과/구강",
        title: "13세 노령견 '몽이' 전악 발치 및 스케일링 (호흡마취)",
        date: "2024.05.15",
        views: 850,
        image: "https://picsum.photos/id/1062/600/400",
        summary: "심장 잡음이 있는 노령견으로, 대학병원급 모니터링 시스템 하에 안전하게 호흡 마취를 진행했습니다. 치석 제거 및 치주염 치료 과정입니다.",
        tags: ["#노령견전문", "#호흡마취", "#안전한수술"]
    },
    {
        id: 4,
        category: "응급/일반외과",
        title: "고양이 하부 요로계 질환(FLUTD) 응급 수술 케이스",
        date: "2024.05.10",
        views: 1102,
        image: "https://picsum.photos/id/40/600/400",
        summary: "배뇨 곤란으로 내원한 고양이 환자입니다. 요도 폐쇄를 확인하고 즉시 응급 수술을 진행하여 신장 손상을 막을 수 있었습니다.",
        tags: ["#고양이친화", "#24시응급", "#비뇨기수술"]
    }
];

const Features: React.FC = () => {
    return (
        <section id="reviews" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <span className="text-brand-gold font-bold tracking-widest uppercase text-sm block mb-3">
                        Medical Case Report
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy leading-tight">
                        중성화 & 수술 후기
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl">
                        참좋은동물병원 의료진이 직접 집도하고 기록한 생생한 치료 일지입니다.
                        <br className="hidden md:block"/> 
                        정직한 진료와 투명한 수술 과정을 약속드립니다.
                    </p>
                </div>

                {/* Board Grid - 게시판 미리보기 형태 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {boardData.map((post) => (
                        <article 
                            key={post.id} 
                            className="group flex flex-col h-full bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            {/* Image Thumbnail */}
                            <div className="relative h-52 overflow-hidden bg-gray-200">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                />
                                {/* Overlay icon on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white border border-white px-4 py-2 rounded-sm text-sm hover:bg-white hover:text-black transition-colors">
                                        자세히 보기
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="font-serif font-bold text-lg text-brand-navy mb-3 line-clamp-2 leading-snug group-hover:text-brand-gold transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                    {post.summary}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {post.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Meta Info (Footer) */}
                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye size={12} />
                                            {post.views}
                                        </span>
                                    </div>
                                    <div className="font-medium text-brand-navy">
                                        관리자
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center">
                    <button className="group flex items-center gap-2 px-10 py-4 border border-brand-navy text-brand-navy font-bold rounded-sm hover:bg-brand-navy hover:text-white transition-all duration-300">
                        수술 후기 게시판 더보기
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;