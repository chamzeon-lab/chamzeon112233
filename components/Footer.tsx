import React from 'react';
import { Phone, MapPin, Clock, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          
          {/* Brand Info */}
          <div>
            {/* 로고 이미지: 실제 로고 파일(logo.png)을 public 폴더에 넣거나 경로를 수정해주세요. */}
            <div className="mb-6 bg-white inline-block p-2 rounded-md">
                <img 
                    src="/logo.png" 
                    alt="참좋은동물병원" 
                    className="h-10 w-auto object-contain"
                    onError={(e) => {
                        // 이미지가 없을 경우를 대비한 텍스트 폴백 (개발 중 편의를 위함)
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerText = '참좋은동물병원';
                        e.currentTarget.parentElement!.className = 'mb-6 text-2xl font-bold font-serif text-brand-navy bg-white px-3 py-1 rounded inline-block';
                    }}
                />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              참좋은동물병원은 <br/>
              생명 존중의 가치를 최우선으로 생각합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">바로가기</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">병원 소개</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">의료진 소개</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">진료 안내</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">수술 사례</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">공지사항</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">진료 안내</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <div>
                  <span className="block text-white font-medium">대표전화</span>
                  055-351-3581
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-brand-gold shrink-0" size={18} />
                <div>
                  <span className="block text-white font-medium mb-1">진료시간</span>
                  <p className="leading-relaxed">
                    주간진료: 오전 10:00 ~ 오후 6:00 <br/>
                    토요일: 오전 10:00 ~ 오후 3:30 <br/>
                    <span className="text-brand-gold/90">일요일, 공휴일 휴무</span>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0" size={18} />
                <div>
                  <span className="block text-white font-medium">오시는 길</span>
                  경상남도 밀양시 밀양대로 1896
                </div>
              </li>
            </ul>
          </div>

          {/* Map View */}
          <div className="rounded-lg overflow-hidden h-48 bg-gray-800 relative group">
             <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=경상남도+밀양시+밀양대로+1896&t=m&z=15&output=embed&iwloc=near"
                title="병원 위치"
                className="filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
                allowFullScreen
             >
             </iframe>
          </div>
        </div>

        <div className="text-center md:text-left text-xs text-gray-600">
          <p className="mb-2">
            상호명: 참좋은동물병원 | 대표자: 문현철 | 사업자등록번호: 123-45-67890
          </p>
          <p>
            Copyright © 2024 CHAMJOEUN ANIMAL HOSPITAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;