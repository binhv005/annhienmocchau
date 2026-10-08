import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Users, Bed, Check, Sparkles, Calendar } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function StaySection({ onOpenBooking, onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rooms = HOMESTAY_INFO.rooms;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  return (
    <section
      id="stay"
      className="py-20 sm:py-28 bg-[#F6F3EC]/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with top-right CTA button matching the reference design */}
        <Reveal direction="up" delay={0.1} duration={0.8}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3D2C] font-normal tracking-tight text-balance">
                Không Gian Lưu Trú Tại Vườn An Nhiên
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 text-pretty">
                Sáng mai thức giấc giữa mây mù cao nguyên, đón nắng sớm và ngắm trọn sắc xanh mộc mạc.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="self-start md:self-auto px-6 py-3 rounded-full bg-[#285d3f] hover:bg-[#1e3d2c] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>KIỂM TRA PHÒNG TRỐNG</span>
            </button>
          </div>
        </Reveal>

        {/* 3D Elevated Room Showcase Slider (Matching Reference Layout) */}
        <Reveal direction="zoom" delay={0.25} duration={0.85}>
          <div className="relative my-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Preview Card (Desktop) */}
            <div className="hidden md:block md:col-span-3 opacity-60 hover:opacity-100 transition-opacity">
              <div 
                className="rounded-3xl overflow-hidden shadow-md h-72 cursor-pointer relative group"
                onClick={() => setCurrentIndex((currentIndex - 1 + rooms.length) % rooms.length)}
              >
                <img
                  src={rooms[(currentIndex - 1 + rooms.length) % rooms.length].image}
                  alt="Phòng nghỉ trước"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold drop-shadow text-balance">
                  {rooms[(currentIndex - 1 + rooms.length) % rooms.length].name}
                </div>
              </div>
            </div>

            {/* Central Elevated Active Card with 3D Depth */}
            <div className="col-span-1 md:col-span-6">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lift border border-stone-200/80 transform hover:-translate-y-1 transition-all duration-300 relative group">
                
                {/* Main Large Image */}
                <div className="relative h-72 sm:h-96 overflow-hidden">
                  <img
                    src={rooms[currentIndex].image}
                    alt={rooms[currentIndex].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1E3D2C] shadow-sm whitespace-nowrap">
                    {rooms[currentIndex].tag}
                  </div>

                  {/* Expand / Lightbox Button */}
                  <button
                    onClick={() => onOpenLightbox(rooms[currentIndex].image)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                    title="Xem ảnh phóng to"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Bottom Room Info Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold drop-shadow-md text-balance">
                      {rooms[currentIndex].name}
                    </h3>
                    <p className="text-stone-200 text-xs sm:text-sm mt-1 drop-shadow text-pretty">
                      {rooms[currentIndex].description}
                    </p>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-4 sm:p-5 flex items-center justify-between bg-white text-stone-700 text-xs sm:text-sm border-t border-stone-100 gap-2">
                  <div className="flex items-center space-x-2 text-[#285d3f] font-semibold whitespace-nowrap">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{rooms[currentIndex].highlight}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-stone-500 font-medium whitespace-nowrap">
                    <Users className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{rooms[currentIndex].capacity}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Preview Card (Desktop) */}
            <div className="hidden md:block md:col-span-3 opacity-60 hover:opacity-100 transition-opacity">
              <div 
                className="rounded-3xl overflow-hidden shadow-md h-72 cursor-pointer relative group"
                onClick={() => setCurrentIndex((currentIndex + 1) % rooms.length)}
              >
                <img
                  src={rooms[(currentIndex + 1) % rooms.length].image}
                  alt="Phòng nghỉ kế tiếp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold drop-shadow text-balance">
                  {rooms[(currentIndex + 1) % rooms.length].name}
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Controls (< > & indicator dots) matching the reference design */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-[#285d3f] hover:text-white hover:border-[#285d3f] flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Phòng trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {rooms.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#285d3f]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Đi tới phòng ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-[#285d3f] hover:text-white hover:border-[#285d3f] flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Phòng tiếp theo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </Reveal>

      </div>
    </section>
  );
}
