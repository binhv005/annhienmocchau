import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function CtaBanner({ onOpenBooking, onCopyPhone }) {
  return (
    <section className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center overflow-hidden">
      {/* Scenic Nature Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/748678517_1733693747771428_6406476589776824539_n.jpeg"
          alt="Thiên nhiên Mộc Châu"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Overlaid Circular / Organic Badge in the Center-Left (Exact Match to Reference Design) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex justify-center md:justify-start my-12">
        <Reveal direction="zoom" delay={0.15} duration={0.85}>
          <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-white/95 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-[#285d3f]/20">
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3D2C] leading-tight mb-2 text-balance">
              Vườn An Nhiên Mộc Châu
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-5 max-w-[260px] text-pretty text-balance">
              Sẵn sàng cho một chuyến nghỉ ngơi tại Mộc Châu? Hãy liên hệ để chọn phòng phù hợp nhất.
            </p>

            <div className="flex flex-col gap-2 w-full max-w-[220px]">
              <button
                onClick={onCopyPhone}
                className="w-full py-2.5 px-4 rounded-full bg-[#285d3f] hover:bg-[#1e3d2c] text-white text-xs font-bold tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>GỌI {HOMESTAY_INFO.phoneDisplay}</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full py-2 px-4 rounded-full bg-stone-100 hover:bg-stone-200 text-[#1E3D2C] text-xs font-semibold tracking-wider transition-colors whitespace-nowrap"
              >
                ĐẶT PHÒNG TRỰC TUYẾN
              </button>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
