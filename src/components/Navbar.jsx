import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export default function Navbar({ onOpenBooking, onCopyPhone }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#hero' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Không gian', href: '#immersive' },
    { name: 'Phòng nghỉ', href: '#stay' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 sm:pt-6 md:pt-8 lg:pt-9 pb-3 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Main Pill Navbar - Transparent on mobile, White pill on desktop */}
          <nav
            className={`w-full mx-auto flex items-center justify-between px-2 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 lg:py-3 rounded-full transition-all duration-300 bg-transparent ${
              scrolled
                ? 'lg:bg-white/95 lg:backdrop-blur-md lg:shadow-card lg:border lg:border-stone-200/70 text-[#1E3D2C]'
                : 'lg:bg-white/90 lg:backdrop-blur-md lg:shadow-lg lg:border lg:border-white/60 text-[#1E3D2C]'
            }`}
          >
            {/* Left Nav Links - Evenly distributed */}
            <div className="hidden lg:flex items-center justify-evenly flex-1 pr-6 text-[13px] font-medium tracking-wide uppercase">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-stone-700 hover:text-[#285d3f] transition-colors py-1 relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#285d3f] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Center Logo with circular badge */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center justify-center group relative lg:-my-6 sm:lg:-my-7 md:lg:-my-8 shrink-0 z-20"
              aria-label="Vườn An Nhiên Mộc Châu"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full p-1 sm:p-1.5 bg-gradient-to-b from-white via-white to-[#E1F0E7] shadow-xl border-2 sm:border-3 border-[#285d3f]/50 overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shrink-0">
                <img
                  src={HOMESTAY_INFO.logo}
                  alt={HOMESTAY_INFO.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </a>

            {/* Right Nav Links & Action - Evenly distributed */}
            <div className="hidden lg:flex items-center justify-evenly flex-1 pl-6 text-[13px] font-medium tracking-wide uppercase">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-stone-700 hover:text-[#285d3f] transition-colors py-1 relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#285d3f] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              {/* Call CTA Button */}
              <button
                onClick={onCopyPhone}
                className="flex items-center space-x-2 bg-[#285d3f] hover:bg-[#1e3d2c] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow group whitespace-nowrap"
                title="Gọi hoặc Sao chép số điện thoại"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300 group-hover:rotate-12 transition-transform shrink-0" />
                <span>{HOMESTAY_INFO.phoneDisplay}</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={onCopyPhone}
                className="flex items-center space-x-1.5 bg-[#285d3f] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>Gọi</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-800 hover:text-[#285d3f] transition-colors focus:outline-none shadow-md border border-stone-200/60"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-stone-200/80 animate-in fade-in slide-in-from-top-3 duration-300">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-stone-800 hover:text-[#285d3f] font-medium text-base py-2 px-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-stone-400">→</span>
                  </a>
                ))}
                
                <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#285d3f] to-[#1e3d2c] text-white py-3 rounded-2xl font-semibold shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Đặt phòng / Tư vấn</span>
                  </button>
                  <a
                    href={`tel:${HOMESTAY_INFO.phone.replace(/\s/g, '')}`}
                    className="w-full flex items-center justify-center space-x-2 bg-stone-100 text-[#285d3f] py-2.5 rounded-2xl font-semibold hover:bg-stone-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hotline: {HOMESTAY_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
