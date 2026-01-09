import React from 'react';
import Counter from './Counter';
import { Activity, Heart, Star } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      label: '누적 중성화수술 건수',
      value: 10,
      suffix: '+',
      description: '풍부한 임상경험과 노하우',
      icon: <Activity className="w-8 h-8 text-brand-gold mb-4" />
    },
    {
      label: '수술 성공률',
      value: 100,
      suffix: '%',
      description: '안전하고 완벽한 수술',
      icon: <Heart className="w-8 h-8 text-brand-gold mb-4" />
    },
    {
      label: '고객 만족도',
      value: 100,
      suffix: '%',
      description: '보호자가 신뢰하는 병원',
      icon: <Star className="w-8 h-8 text-brand-gold mb-4" />
    }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-4">Our Achievement</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            숫자로 증명하는 <br className="md:hidden" /> 참좋은동물병원의 실력
          </h3>
          <p className="text-gray-400 font-light">
            작은 생명을 살리기 위한 끊임없는 노력과 연구, <br/>
            수많은 수술 경험이 최고의 결과를 만들어냅니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-brand-navy shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold font-serif my-4 text-white">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="text-lg font-bold text-gray-200 mb-2">{stat.label}</h4>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-gold/20 to-transparent">
                <p className="px-6 py-2 bg-brand-navy rounded-full text-sm text-gray-300 border border-brand-gold/30">
                    * 2026년1월1일 부터 누적 데이터 기준
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;