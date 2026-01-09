import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1025/1920/1080" // Dog image placeholder
          alt="Premium Veterinary Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full pt-20">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
            Premium Veterinary Medical Center
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            생명, 그 이상의 가치를 <br />
            <span className="text-brand-gold">지켜드립니다.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-lg">
            언제나, 참좋은동물병원이 당신의 가족과 함께합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-brand-gold hover:bg-white text-white hover:text-brand-navy px-8 py-4 rounded-sm font-bold text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
              진료 예약하기
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/40 text-white hover:bg-white/10 rounded-sm font-bold text-sm tracking-wider transition-all duration-300 backdrop-blur-sm">
              병원 시설 둘러보기
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        <span className="text-xs tracking-widest mt-2 block">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;