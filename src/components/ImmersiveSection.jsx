import React from 'react';
import { Bed, Trees, Users, ArrowRight, Sparkles, Sun, Coffee, Flower2 } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function ImmersiveSection({ onOpenBooking, onOpenLightbox }) {
  const experiences = [
    {
      icon: Bed,
      title: "Cho thuê phòng nghỉ",
      desc: "Phòng nghỉ ấm cúng, thoáng mát với nội thất gỗ tự nhiên và ban công nhìn ra vườn xanh mát."
    },
    {
      icon: Trees,
      title: "Lưu trú dịch vụ chuẩn mực",
      desc: "Trải nghiệm không gian sống mộc mạc, yên bình giữa không khí trong lành của bản Áng."
    },
    {
      icon: Users,
      title: "Phục vụ khách hàng tận tâm",
      desc: "Đón tiếp chu đáo khách du lịch trong và ngoài nước, hỗ trợ thông tin trải nghiệm Mộc Châu trọn vẹn."
    }
  ];

  return (
    <section
      id="immersive"
      className="py-20 sm:py-28 bg-[#FAF8F5]/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Info & Feature List */}
          <div className="lg:col-span-5 text-left">
            <Reveal direction="left" delay={0.1} duration={0.8} distance={35}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3D2C] font-normal tracking-tight leading-tight mb-4 text-balance">
                Chạm Vào Thiên Nhiên Mộc Châu
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 italic font-serif text-pretty">
                "Tại Vườn An nhiên, mỗi ngày mới bắt đầu với tiếng chim ríu rít, sương giăng đầu ngọn cỏ và hương thơm dịu nhẹ của núi rừng Tây Bắc."
              </p>
            </Reveal>

            {/* List with Circular Line Icons (Matching Reference Design) */}
            <div className="space-y-6 mb-8">
              {experiences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={index} direction="left" delay={0.2 + index * 0.12} duration={0.7} distance={25}>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 rounded-full border-2 border-[#285d3f]/40 bg-white flex items-center justify-center text-[#285d3f] shrink-0 shadow-sm group-hover:bg-[#285d3f] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#1E3D2C] group-hover:text-[#285d3f] transition-colors text-balance">
                          {item.title}
                        </h4>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-0.5 text-pretty">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* CTA Button */}
            <Reveal direction="up" delay={0.6} duration={0.7} distance={20}>
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#285d3f] hover:bg-[#1e3d2c] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 group whitespace-nowrap"
              >
                <span>ĐẶT PHÒNG / TƯ VẤN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </Reveal>
          </div>

          {/* Right Column: Asymmetric / Masonry Photo Gallery (Exact Reference Layout) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 sm:gap-5">
              
              {/* Tall Image (Left top) */}
              <div className="col-span-7">
                <Reveal direction="right" delay={0.15} duration={0.8} distance={30}>
                  <div
                    className="rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500 cursor-pointer relative group h-72 sm:h-80"
                    onClick={() => onOpenLightbox('/images/748678517_1733693747771428_6406476589776824539_n.jpeg')}
                  >
                    <img
                      src="/images/748678517_1733693747771428_6406476589776824539_n.jpeg"
                      alt="Vườn An Nhiên Mộc Châu"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#1E3D2C] whitespace-nowrap">
                      Khuôn viên xanh
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Top Right Image */}
              <div className="col-span-5">
                <Reveal direction="right" delay={0.25} duration={0.8} distance={30}>
                  <div
                    className="rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500 cursor-pointer relative group h-44 sm:h-52"
                    onClick={() => onOpenLightbox('/images/748466212_1671831357236762_8231704597551017216_n.jpeg')}
                  >
                    <img
                      src="/images/748466212_1671831357236762_8231704597551017216_n.jpeg"
                      alt="Phòng nghỉ mộc mạc"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#1E3D2C] whitespace-nowrap">
                      Phòng nghỉ
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Left Square Image */}
              <div className="col-span-5 -mt-10 sm:-mt-12">
                <Reveal direction="right" delay={0.35} duration={0.8} distance={30}>
                  <div
                    className="rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500 cursor-pointer relative group h-44 sm:h-52"
                    onClick={() => onOpenLightbox('/images/747307243_873059358794038_1117834963698860130_n.jpeg')}
                  >
                    <img
                      src="/images/747307243_873059358794038_1117834963698860130_n.jpeg"
                      alt="Góc chill bản Áng"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#1E3D2C] whitespace-nowrap">
                      Bản Áng 3
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Right Wide Image */}
              <div className="col-span-7">
                <Reveal direction="right" delay={0.45} duration={0.8} distance={30}>
                  <div
                    className="rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-500 cursor-pointer relative group h-52 sm:h-60"
                    onClick={() => onOpenLightbox('/images/763065152_2567281323726361_2693675028979552336_n.jpeg')}
                  >
                    <img
                      src="/images/763065152_2567281323726361_2693675028979552336_n.jpeg"
                      alt="Không gian thư giãn"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#1E3D2C] whitespace-nowrap">
                      Nghỉ dưỡng mộc
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
