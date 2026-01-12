import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import StatsSection from './components/StatsSection.tsx';
import Services from './components/Services.tsx';
import Features from './components/Features.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Services />
        <Features />
        
        {/* Doctor Section - Specific Director Profile */}
        <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Medical Staff</span>
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mt-2">의료진 소개</h2>
                    <div className="w-12 h-1 bg-brand-gold mx-auto mt-6"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-center gap-16 max-w-6xl mx-auto">
                    {/* Doctor Image */}
                    <div className="w-full lg:w-5/12 relative group">
                        <div className="absolute inset-0 bg-brand-gold/10 transform translate-x-4 translate-y-4 rounded-lg -z-10"></div>
                        <div className="rounded-lg overflow-hidden shadow-2xl bg-white border border-gray-100">
                            <img 
                                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="문현철 원장" 
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    {/* Doctor Profile Text */}
                    <div className="w-full lg:w-7/12 pt-4">
                        <div className="mb-10">
                            <h3 className="text-4xl font-serif font-bold text-brand-navy mb-2">
                                문 현 철 <span className="text-2xl font-light text-gray-500 ml-2">원장</span>
                            </h3>
                            <p className="text-lg text-brand-gold font-medium mb-6">밀양 참좋은동물병원 대표원장</p>
                            <p className="text-gray-600 leading-relaxed font-light">
                                "말 못 하는 아이들의 마음까지 헤아리는 따뜻한 진료를 약속합니다.<br />
                                대학병원급 장비와 풍부한 임상 경험을 바탕으로, 반려동물의 평생 주치의가 되겠습니다."
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {/* 학력 */}
                            <div>
                                <h4 className="font-serif font-bold text-xl text-brand-navy mb-4 border-b border-gray-200 pb-2">
                                    학력
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="font-bold text-brand-gold/80 min-w-[50px]">2002</span>
                                        <span>경상대학교 수의과 졸업</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 경력 */}
                            <div>
                                <h4 className="font-serif font-bold text-xl text-brand-navy mb-4 border-b border-gray-200 pb-2">
                                    경력
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="font-bold text-brand-gold/80 min-w-[50px]">2003</span>
                                        <span>공군 제3훈련 비행단 수의장교 (2003~2005)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="font-bold text-brand-gold/80 min-w-[50px]">2005</span>
                                        <span>바이엘코리아 VC (Veterinarian Consultant) (~2011)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="font-bold text-brand-gold/80 min-w-[50px]">2011</span>
                                        <span>現 밀양 참좋은동물병원 원장<br/>現 밀양시 공수의사</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 수상 경력 */}
                            <div className="md:col-span-2">
                                <h4 className="font-serif font-bold text-xl text-brand-navy mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                                    수상 및 기타 활동
                                    <span className="text-xs font-normal text-gray-400 border border-gray-200 rounded-full px-2 py-0.5">Art & Culture</span>
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="font-bold text-brand-gold/80 min-w-[50px]">2024</span>
                                        <span>밀양 아리랑대축제 전국회화대회 입선</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-sm">
                                        <span className="font-bold text-brand-gold/80 min-w-[50px]">2024</span>
                                        <span>종합문화예술경연대회 특선</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-gray-400 mt-4 bg-gray-50 p-3 rounded-md">
                                    * 섬세한 손기술과 예술적 감각은 정교한 외과 수술에도 큰 도움이 됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call To Action */}
        <section className="bg-brand-gray py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">반려동물의 건강을 위한 최고의 선택</h3>
                    <p className="text-gray-600">참좋은동물병원 의료진이 항상 함께합니다.</p>
                </div>
                <div className="flex gap-4">
                    <a href="tel:055-351-3581" className="bg-brand-navy text-white px-8 py-4 rounded-sm font-bold shadow-lg hover:bg-brand-gold transition-colors">
                        055-351-3581 전화걸기
                    </a>
                    <button className="bg-white text-brand-navy border border-gray-300 px-8 py-4 rounded-sm font-bold hover:bg-gray-50 transition-colors">
                        카카오톡 상담
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;