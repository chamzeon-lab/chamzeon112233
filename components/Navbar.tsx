import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '병원소개', href: '#about' },
    { name: '의료진', href: '#team' },
    { name: '진료안내', href: '#services' },
    { name: '전문센터', href: '#centers' },
    { name: '중성화 & 수술 후기', href: '#reviews' },
    { name: '오시는길', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50">
          {!logoError ? (
            <img 
              src="/logo.png" 
              alt="참좋은동물병원" 
              className="h-10 md:h-12 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className={`font-serif text-2xl font-bold tracking-tight ${
              isScrolled || isMobileMenuOpen ? 'text-brand-navy' : 'text-white'
            }`}>
              참좋은동물병원
            </span>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-brand-gold' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:055-351-3581"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
              isScrolled
                ? 'bg-brand-navy text-white hover:bg-brand-gold'
                : 'bg-white text-brand-navy hover:bg-brand-gray'
            }`}
          >
            <Phone size={14} />
            <span>상담문의</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-brand-navy" size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-navy' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif font-bold text-brand-navy hover:text-brand-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="mt-8">
          <a
            href="tel:055-351-3581"
            className="bg-brand-navy text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg"
          >
             전화 상담 연결
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;