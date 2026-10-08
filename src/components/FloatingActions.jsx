import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

/**
 * Floating Action Widget styled exactly like the reference image:
 * 1. Red Circle: Phone / Hotline Call
 * 2. Blue Circle: Message / Chat (Facebook)
 * 3. Orange Circle: Calendar / Booking
 * 4. Dark Green Circle: Arrow Up / Scroll to Top
 */
export default function FloatingActions({ onOpenBooking, onCopyPhone }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center space-y-2.5 sm:space-y-3 select-none">
      
      {/* 1. RED BUTTON: Hotline Call */}
      <button
        onClick={onCopyPhone}
        className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#E51E2B] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        title={`Hotline: ${HOMESTAY_INFO.phoneDisplay}`}
        aria-label="Gọi điện thoại"
      >
        <Phone className="w-5 h-5 text-white stroke-[2.2] group-hover:rotate-12 transition-transform" />
        
        {/* Tooltip on Desktop */}
        <span className="hidden lg:group-hover:block absolute right-15 bg-[#14281D] text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-emerald-800/60 animate-in fade-in slide-in-from-right-2">
          Hotline: {HOMESTAY_INFO.phoneDisplay}
        </span>
      </button>

      {/* 2. BLUE BUTTON: Message / Chat (Facebook) */}
      <a
        href={HOMESTAY_INFO.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1877F2] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        title="Nhắn tin qua Facebook"
        aria-label="Nhắn tin Facebook"
      >
        <MessageCircle className="w-5 h-5 text-white stroke-[2.2] group-hover:scale-110 transition-transform" />
        
        {/* Tooltip on Desktop */}
        <span className="hidden lg:group-hover:block absolute right-15 bg-[#14281D] text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-emerald-800/60 animate-in fade-in slide-in-from-right-2">
          Nhắn tin Facebook
        </span>
      </a>

      {/* 3. ORANGE BUTTON: Calendar / Booking */}
      <button
        onClick={onOpenBooking}
        className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FA9D1B] text-black shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        title="Đặt phòng trực tuyến"
        aria-label="Đặt phòng trực tuyến"
      >
        <Calendar className="w-5 h-5 text-stone-950 stroke-[2.4] group-hover:scale-110 transition-transform" />
        
        {/* Tooltip on Desktop */}
        <span className="hidden lg:group-hover:block absolute right-15 bg-[#14281D] text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-emerald-800/60 animate-in fade-in slide-in-from-right-2">
          Đặt phòng / Tư vấn
        </span>
      </button>

      {/* 4. DARK FOREST GREEN BUTTON: Scroll To Top */}
      <button
        onClick={scrollToTop}
        className={`group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#375A45] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          showScrollTop ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-80 scale-95 hover:opacity-100'
        }`}
        title="Cuộn lên đầu trang"
        aria-label="Cuộn lên đầu trang"
      >
        <ArrowUp className="w-5 h-5 text-white stroke-[2.4] group-hover:-translate-y-0.5 transition-transform" />
        
        {/* Tooltip on Desktop */}
        <span className="hidden lg:group-hover:block absolute right-15 bg-[#14281D] text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-emerald-800/60 animate-in fade-in slide-in-from-right-2">
          Lên đầu trang
        </span>
      </button>

    </div>
  );
}
