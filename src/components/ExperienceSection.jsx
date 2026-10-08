import React from 'react';
import { Bed, Trees, Users, ArrowRight, Sparkles } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function ExperienceSection({ onOpenBooking }) {
  const serviceCards = [
    {
      id: "room",
      icon: Bed,
      title: "Cho thuê phòng",
      sub: "Không gian ấm cúng",
      desc: "Không gian nghỉ ngơi phù hợp cho chuyến đi Mộc Châu. Thiết kế mộc mạc, yên tĩnh và ngập tràn ánh sáng.",
      img: "/images/748466212_1671831357236762_8231704597551017216_n.jpeg"
    },
    {
      id: "stay",
      icon: Trees,
      title: "Lưu trú dịch vụ",
      sub: "Hòa cùng thiên nhiên",
      desc: "Mang đến trải nghiệm lưu trú thoải mái và gần gũi thiên nhiên, tận hưởng không khí trong lành mát rượi.",
      img: "/images/748678517_1733693747771428_6406476589776824539_n.jpeg"
    },
    {
      id: "welcome",
      icon: Users,
      title: "Đón tiếp khách hàng",
      sub: "Trong & ngoài nước",
      desc: "Phục vụ khách hàng trong và ngoài nước với sự tận tâm, chu đáo và hiếu khách đậm chất vùng cao.",
      img: "/images/747307243_873059358794038_1117834963698860130_n.jpeg"
    }
  ];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Heading with Reveal */}
        <Reveal direction="up" delay={0.1} duration={0.8}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E3D2C] font-normal tracking-tight mb-4 text-balance">
            Dịch Vụ Lưu Trú
          </h2>
          
          <p className="max-w-xl mx-auto text-stone-600 text-sm sm:text-base mb-12 text-pretty text-balance">
            Lựa chọn lý tưởng để tận hưởng những ngày nghỉ dưỡng bình yên, tái tạo tâm hồn giữa không gian xanh của Mộc Châu.
          </p>
        </Reveal>

        {/* 3 Arch-Topped Cards with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.id} direction="up" delay={0.15 + idx * 0.15} duration={0.8} distance={35}>
                <div
                  className="group flex flex-col items-center bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 border border-stone-100 hover:-translate-y-1.5 cursor-pointer h-full"
                  onClick={onOpenBooking}
                >
                  {/* Full-width Image Frame at Top */}
                  <div className="w-full h-64 sm:h-72 overflow-hidden relative bg-stone-100">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>

                  {/* Floating Icon Badge in Center of Border */}
                  <div className="-mt-6 relative z-10 w-12 h-12 rounded-full bg-[#285d3f] text-white flex items-center justify-center shadow-md border-2 border-white group-hover:bg-[#1e3d2c] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-emerald-200" />
                  </div>

                  {/* Card Content */}
                  <div className="pt-3 pb-6 px-6 text-center flex-1 flex flex-col justify-between w-full">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3D2C] mb-1 text-balance">
                        {card.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#439263] uppercase tracking-wider mb-2 whitespace-nowrap">
                        {card.sub}
                      </div>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 text-pretty">
                        {card.desc}
                      </p>
                    </div>
                    
                    <span className="inline-flex items-center justify-center space-x-1.5 text-xs font-bold text-[#285d3f] group-hover:text-[#1e3d2c] uppercase tracking-wider mt-auto whitespace-nowrap">
                      <span>Tìm hiểu thêm</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
