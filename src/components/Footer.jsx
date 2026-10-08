import React from 'react';
import { Phone, MapPin, User, Facebook, ExternalLink, ArrowUp } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function Footer({ onOpenBooking, onCopyPhone }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-stone-300 relative pt-12 pb-8 overflow-hidden">
      
      {/* Background Image Rotated 90 Degrees */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/tải xuống.png"
          alt="Footer Botanical Background"
          className="absolute inset-0 w-full h-full object-cover rotate-90 scale-[2.4] transform origin-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800 text-xs sm:text-sm">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-4">
            <Reveal direction="up" delay={0.15} duration={0.8}>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={HOMESTAY_INFO.logo}
                  alt={HOMESTAY_INFO.name}
                  className="w-12 h-12 rounded-full border-2 border-emerald-500/40 object-cover bg-white shrink-0"
                />
                <div>
                  <span className="font-serif text-lg font-bold text-white block whitespace-nowrap">
                    {HOMESTAY_INFO.name}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase whitespace-nowrap">
                    Mộc Châu • Sơn La
                  </span>
                </div>
              </div>
              <p className="text-stone-400 leading-relaxed pr-4 text-xs text-pretty">
                {HOMESTAY_INFO.tagline}. Chốn dừng chân mộc mạc, chan hòa nắng gió và sắc xanh tươi mát của vùng cao nguyên.
              </p>
            </Reveal>
          </div>

          {/* Col 2: Navigation Links (Hidden on mobile) */}
          <div className="hidden md:block md:col-span-2">
            <Reveal direction="up" delay={0.25} duration={0.8}>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4 whitespace-nowrap">
                Khám Phá
              </h5>
              <ul className="space-y-2.5">
                <li><a href="#hero" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Trang chủ</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Về chúng tôi</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Dịch vụ lưu trú</a></li>
                <li><a href="#immersive" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Không gian vườn</a></li>
                <li><a href="#stay" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Phòng nghỉ</a></li>
              </ul>
            </Reveal>
          </div>

          {/* Col 3: Services */}
          <div className="md:col-span-3">
            <Reveal direction="up" delay={0.35} duration={0.8}>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4 whitespace-nowrap">
                Dịch Vụ
              </h5>
              <ul className="space-y-2.5">
                <li><span className="text-stone-300 whitespace-nowrap">Cho thuê phòng</span></li>
                <li><span className="text-stone-300 whitespace-nowrap">Lưu trú dịch vụ</span></li>
                <li><span className="text-stone-300 text-pretty">Phục vụ khách trong nước & quốc tế</span></li>
                <li><span className="text-stone-300 text-pretty">Tư vấn trải nghiệm Mộc Châu</span></li>
              </ul>
            </Reveal>
          </div>

          {/* Col 4: Mandatory Contact Info */}
          <div className="md:col-span-3">
            <Reveal direction="up" delay={0.45} duration={0.8}>
              <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4 whitespace-nowrap">
                Liên Hệ Trực Tiếp
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-pretty">{HOMESTAY_INFO.address}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Người phụ trách: <strong className="text-white">{HOMESTAY_INFO.contactPerson}</strong></span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <button
                    onClick={onCopyPhone}
                    className="text-emerald-300 hover:text-white font-bold transition-colors underline decoration-dotted whitespace-nowrap"
                  >
                    {HOMESTAY_INFO.phoneDisplay}
                  </button>
                </li>
                <li className="flex items-center space-x-3 pt-2">
                  <a
                    href={HOMESTAY_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-stone-900 border border-stone-700 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
                    title="Facebook Vườn An Nhiên"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={HOMESTAY_INFO.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-stone-900 border border-stone-700 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
                    title="Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="whitespace-nowrap sm:whitespace-normal text-center sm:text-left">
            © {new Date().getFullYear()} {HOMESTAY_INFO.name}. Tất cả quyền được bảo lưu.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-stone-400 hover:text-white transition-colors whitespace-nowrap"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>

      </div>
    </footer>
  );
}
