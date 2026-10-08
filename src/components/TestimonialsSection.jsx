import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <Reveal direction="up" delay={0.1} duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3D2C] font-normal tracking-tight text-balance">
              Cảm Nhận Từ Du Khách
            </h2>
            <p className="max-w-lg mx-auto text-stone-600 text-sm sm:text-base mt-2 text-pretty text-balance">
              Những chia sẻ chân thực từ những vị khách đã dừng chân và gửi gắm kỳ nghỉ tại Vườn An Nhiên.
            </p>
          </div>
        </Reveal>

        {/* 3 Review Cards matching reference design with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {HOMESTAY_INFO.testimonials.map((review, idx) => (
            <Reveal key={review.id} direction="up" delay={0.15 + idx * 0.15} duration={0.8} distance={30}>
              <div
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-stone-100 flex flex-col justify-between relative group h-full"
              >
                <div>
                  {/* 5 Golden Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-stone-700 text-sm leading-relaxed mb-6 italic text-pretty">
                    "{review.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-serif text-base font-bold text-[#1E3D2C] whitespace-nowrap">
                      {review.name}
                    </div>
                    <div className="text-xs text-[#439263] font-medium whitespace-nowrap">
                      {review.origin}
                    </div>
                  </div>
                  <div className="text-[11px] text-stone-400 whitespace-nowrap shrink-0">
                    {review.date}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
