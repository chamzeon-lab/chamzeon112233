import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-sm block mb-3">Transparent Pricing</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
            진료 항목 및 가격 안내
          </h2>
          <p className="text-gray-600 font-light leading-relaxed">
            참좋은동물병원은 보호자님과의 신뢰를 최우선으로 생각합니다.<br />
            투명하고 합리적인 진료비를 통해 반려동물의 건강을 지켜드리겠습니다.
          </p>
          <div className="w-12 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: General Treatment List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-navy p-6">
                <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="text-brand-gold" size={20}/>
                    일반 진료 및 예방 접종
                </h3>
            </div>
            <div className="p-8">
                <ul className="space-y-6">
                    <li className="flex justify-between items-center border-b border-gray-100 pb-3 hover:bg-gray-50 px-2 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">종합접종 (강아지)</span>
                            <span className="text-xs text-gray-500">DHPPL 5종 혼합 백신</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">20,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-3 hover:bg-gray-50 px-2 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">종합접종 (고양이)</span>
                            <span className="text-xs text-gray-500">4종 혼합 백신</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">35,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-3 hover:bg-gray-50 px-2 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">선택 접종</span>
                            <span className="text-xs text-gray-500">코로나 / 독감 / 광견병 (택 1)</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">15,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-3 hover:bg-gray-50 px-2 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">심장사상충 주사</span>
                            <span className="text-xs text-gray-500">5kg 이하 / 1년 지속 효과</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">70,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-3 hover:bg-gray-50 px-2 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">알러지 주사</span>
                            <span className="text-xs text-gray-500">5kg 이하 / 4주 지속 효과</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">70,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-3 hover:bg-gray-50 px-2 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">혈액 정밀 검사</span>
                            <span className="text-xs text-gray-500">CBC + 생화학 검사 포함</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">180,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-3 hover:bg-gray-50 px-2 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">디지털 X-ray</span>
                            <span className="text-xs text-gray-500">고해상도 영상 / 1컷 기준</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">30,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                    <li className="flex justify-between items-center px-2 hover:bg-gray-50 transition-colors">
                        <div>
                            <span className="font-bold text-gray-800 block">내복약 처방</span>
                            <span className="text-xs text-gray-500">6일 기준 조제비</span>
                        </div>
                        <span className="font-bold text-brand-navy text-lg">15,000 <span className="text-sm font-normal text-gray-500">원</span></span>
                    </li>
                </ul>
            </div>
          </div>

          {/* Right Column: Surgery Price Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="bg-brand-gold p-6">
                <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                    <Info className="text-brand-navy" size={20}/>
                    <span className="text-brand-navy">중성화 수술 비용</span>
                </h3>
            </div>
            
            <div className="p-0 md:p-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-brand-navy">
                            <th className="p-4 text-sm font-bold text-brand-navy bg-gray-50">구분 (체중)</th>
                            <th className="p-4 text-sm font-bold text-blue-900 bg-blue-50 text-center">수컷</th>
                            <th className="p-4 text-sm font-bold text-pink-900 bg-pink-50 text-center">암컷</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">강아지 (~5kg)</td>
                            <td className="p-4 text-center font-bold">130,000</td>
                            <td className="p-4 text-center font-bold">200,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">강아지 (5~10kg)</td>
                            <td className="p-4 text-center font-bold">150,000</td>
                            <td className="p-4 text-center font-bold">230,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">강아지 (10~15kg)</td>
                            <td className="p-4 text-center font-bold">170,000</td>
                            <td className="p-4 text-center font-bold">250,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">강아지 (15~20kg)</td>
                            <td className="p-4 text-center font-bold">200,000</td>
                            <td className="p-4 text-center font-bold">270,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">강아지 (20~30kg)</td>
                            <td className="p-4 text-center font-bold">230,000</td>
                            <td className="p-4 text-center font-bold">300,000</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">강아지 (30kg~)</td>
                            <td className="p-4 text-center font-bold">300,000</td>
                            <td className="p-4 text-center font-bold">400,000</td>
                        </tr>
                        <tr className="bg-brand-gold/10">
                            <td className="p-4 font-bold text-brand-navy">고양이 (전체)</td>
                            <td className="p-4 text-center font-bold text-brand-navy">150,000</td>
                            <td className="p-4 text-center font-bold text-brand-navy">220,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;