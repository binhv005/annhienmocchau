import React from 'react';
import { Phone, Calendar, Sparkles, MapPin } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import { TornEdgeBottom } from './TornDividers';
import Reveal from './Reveal';

export default function Hero({ onOpenBooking, onCopyPhone }) {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden pt-36 sm:pt-40">
      {/* Background Image with Dark Vignette & Emerald Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/748678517_1733693747771428_6406476589776824539_n.jpeg"
          alt="Vườn An nhiên Mộc Châu"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-slow"
        />
        {/* Subtle gradient overlay to enhance typography readability while keeping sunset/nature atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/50" />
        <div className="absolute inset-0 bg-[#14281D]/30 mix-blend-multiply" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto py-12">


        {/* Brand Name Headline - Clean modern typography matching sample */}
        <Reveal direction="up" delay={0.25} duration={0.9} distance={40}>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-5 drop-shadow-lg text-balance">
            {HOMESTAY_INFO.name}
          </h1>
        </Reveal>

        {/* Subtitle & Description */}
        <Reveal direction="up" delay={0.4} duration={0.8} distance={30}>
          <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 font-medium mb-4 drop-shadow text-balance">
            {HOMESTAY_INFO.tagline}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.55} duration={0.8} distance={25}>
          <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base font-normal leading-relaxed mb-8 sm:mb-10 drop-shadow text-pretty text-balance">
            Chốn dừng chân mộc mạc, yên ả giữa núi rừng Mộc Châu. Nơi bạn tìm về sự tĩnh lặng, hít thở không khí trong lành và tái tạo nguồn năng lượng an nhiên.
          </p>
        </Reveal>

        {/* CTA Buttons - Matching reference pill button style */}
        <Reveal direction="up" delay={0.7} duration={0.8} distance={25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            {/* Booking Pill */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#1E3D2C] font-semibold text-sm sm:text-base tracking-wide hover:bg-stone-100 transition-all duration-300 shadow-lift hover:scale-105 flex items-center justify-center space-x-2 group whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-[#285d3f] group-hover:scale-110 transition-transform shrink-0" />
              <span>ĐẶT PHÒNG NGAY</span>
            </button>

            {/* Hotline Pill */}
            <button
              onClick={onCopyPhone}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#285d3f]/85 hover:bg-[#285d3f] text-white border border-white/30 backdrop-blur-md font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lift hover:scale-105 flex items-center justify-center space-x-2 group whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-emerald-300 group-hover:rotate-12 transition-transform shrink-0" />
              <span>GỌI {HOMESTAY_INFO.phoneDisplay}</span>
            </button>
          </div>
        </Reveal>
      </div>

      {/* Signature Torn Paper Bottom Edge */}
      <div className="relative z-10 w-full mt-auto">
        <TornEdgeBottom color="#FAF8F5" />
      </div>
    </section>
  );
}
