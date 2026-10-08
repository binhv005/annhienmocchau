import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function AboutSection({ onOpenBooking, onCopyPhone }) {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 3 Arched Collage Frames + Circular Rotating Badge (Exact Sample Match) */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal direction="left" duration={0.9} distance={40} className="w-full flex justify-center">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] pb-6">
                
                {/* Top Row: Left Main Tall Arch & Right Top Arch */}
                <div className="flex items-start gap-3 sm:gap-4 justify-center">
                  
                  {/* Arch 1: Left Main Tall Frame */}
                  <div className="w-[180px] sm:w-[210px] h-[260px] sm:h-[310px] rounded-t-[100px] rounded-b-[24px] overflow-hidden border-4 border-white shadow-lift relative group bg-stone-100 shrink-0">
                    <img
                      src="/images/748678517_1733693747771428_6406476589776824539_n.jpeg"
                      alt="Khuôn viên Vườn An Nhiên"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Arch 2: Right Top Frame */}
                  <div className="w-[140px] sm:w-[170px] h-[200px] sm:h-[240px] rounded-t-[80px] rounded-b-[20px] overflow-hidden border-4 border-white shadow-lift relative group bg-stone-100 shrink-0 mt-2">
                    <img
                      src="/images/763065152_2567281323726361_2693675028979552336_n.jpeg"
                      alt="Bungalow gỗ Mộc Châu"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40" />
                  </div>

                </div>

                {/* Bottom Row / Overlapping: Middle Arch & Rotating Circular Badge */}
                <div className="relative -mt-20 sm:-mt-24 ml-auto mr-4 sm:mr-8 w-[160px] sm:w-[190px]">
                  
                  {/* Arch 3: Middle Bottom Overlapping Frame */}
                  <div className="w-[160px] sm:w-[190px] h-[190px] sm:h-[230px] rounded-t-[80px] rounded-b-[20px] overflow-hidden border-4 border-white shadow-2xl relative group bg-stone-100">
                    <img
                      src="/images/748466212_1671831357236762_8231704597551017216_n.jpeg"
                      alt="Phòng nghỉ Vườn An Nhiên"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Circular Badge with Rotating Typography (As in Sample) */}
                  <div className="absolute -bottom-3 -right-6 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#285d3f] text-white shadow-2xl border-3 border-white flex items-center justify-center p-1 transform hover:scale-110 transition-transform duration-300">
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                      <path
                        id="aboutBadgeCircle"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        fill="none"
                      />
                      <text className="text-[10px] font-bold tracking-[2.2px] uppercase fill-white">
                        <textPath href="#aboutBadgeCircle" startOffset="0%">
                          • VƯỜN AN NHIÊN • MỘC CHÂU
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Sparkles className="w-5 h-5 text-emerald-300" />
                    </div>
                  </div>

                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 text-left">
            <Reveal direction="right" delay={0.1} duration={0.8} distance={30}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3D2C] font-bold tracking-tight leading-[1.2] mb-5 text-balance">
                Chốn Dừng Chân Bình Yên Giữa Thiên Nhiên Mộc Châu
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 text-pretty">
                Tọa lạc tại <strong className="text-[#1E3D2C] font-semibold">{HOMESTAY_INFO.address}</strong>, {HOMESTAY_INFO.name} mang đến trải nghiệm nghỉ ngơi ấm cúng, thư thái, hòa mình cùng hoa cỏ xanh mát và không khí trong lành đặc trưng của vùng cao nguyên.
              </p>
            </Reveal>

            {/* Feature Grid Card (Clean borderless card) */}
            <Reveal direction="right" delay={0.25} duration={0.7} distance={20}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-card mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs sm:text-sm text-stone-800 font-medium">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[#439263] font-bold text-sm">❯</span>
                    <span>Cho thuê phòng nghỉ ấm cúng</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[#439263] font-bold text-sm">❯</span>
                    <span>Sân vườn thoáng đãng mát mẻ</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[#439263] font-bold text-sm">❯</span>
                    <span>Lưu trú dịch vụ chuẩn mực</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[#439263] font-bold text-sm">❯</span>
                    <span>Không gian ngắm sương Bản Áng</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[#439263] font-bold text-sm">❯</span>
                    <span>Đón tiếp khách trong & quốc tế</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="text-[#439263] font-bold text-sm">❯</span>
                    <span>Tư vấn trải nghiệm Mộc Châu</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Action CTA Button & Contact Person */}
            <Reveal direction="up" delay={0.45} duration={0.7} distance={20}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded-full bg-[#285d3f] hover:bg-[#1e3d2c] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 group whitespace-nowrap"
                >
                  <span>LIÊN HỆ ĐẶT PHÒNG</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <div className="text-xs sm:text-sm text-stone-500 whitespace-nowrap">
                  Người phụ trách: <span className="text-stone-800 font-bold">{HOMESTAY_INFO.contactPerson}</span>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
