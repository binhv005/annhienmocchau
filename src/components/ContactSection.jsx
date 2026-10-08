import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Star } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';
import Reveal from './Reveal';

export default function ContactSection({ onCopyPhone }) {
  const [formSent, setFormSent] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    stayDuration: '1 - 2 ngày',
    serviceType: 'Phòng gia đình',
    message: ''
  });

  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Nguyễn Thu Hà",
      role: "Du khách từ Hà Nội",
      avatar: "/images/748466212_1671831357236762_8231704597551017216_n.jpeg",
      comment: "Vườn An Nhiên thực sự mang lại cảm giác bình yên đúng như tên gọi. Không khí trong lành mát mẻ, cô chủ Hoa rất nhiệt tình chu đáo. Chắc chắn gia đình mình sẽ quay lại nhiều lần nữa!",
      rating: 5
    },
    {
      name: "David & Sarah Miller",
      role: "Du khách quốc tế (Australia)",
      avatar: "/images/747307243_873059358794038_1117834963698860130_n.jpeg",
      comment: "A truly serene and peaceful retreat in Moc Chau! The organic garden, mountain breeze, and warm hospitality made our holiday unforgettable. 10/10 highly recommended!",
      rating: 5
    },
    {
      name: "Trần Minh Quang",
      role: "Du khách TP. Hồ Chí Minh",
      avatar: "/images/748678517_1733693747771428_6406476589776824539_n.jpeg",
      comment: "Không gian mộc mạc, gần gũi với thiên nhiên bản Áng. Buổi sáng thức dậy ngắm sương mù giăng lối, nhâm nhi tách trà shan tuyết ấm nóng thật sự không gì sánh bằng.",
      rating: 5
    }
  ];

  // Auto-switch feedback reviews smoothly every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({
        name: '',
        phone: '',
        checkIn: '',
        stayDuration: '1 - 2 ngày',
        serviceType: 'Phòng gia đình',
        message: ''
      });
      setGuestCount(2);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white bg-[#0F3522]"
    >
      {/* Two-tone split background (Light mint left on desktop, deep forest green right) */}
      <div className="absolute inset-0 pointer-events-none flex">
        {/* Left Side Light Mint Background with Botanical Line Art */}
        <div className="w-full lg:w-[38%] bg-[#EBF3EC] relative hidden lg:block overflow-hidden">
          {/* Subtle Botanical SVG Line Art */}
          <svg className="absolute -top-10 -left-10 w-96 h-96 text-[#2D6E43]/10 transform rotate-12" viewBox="0 0 200 200" fill="currentColor">
            <path d="M42.7,-72.2C54.6,-66.1,63,-53.4,70.2,-40.4C77.4,-27.3,83.4,-13.7,82.4,-0.6C81.3,12.5,73.3,25,64.8,36.2C56.3,47.4,47.3,57.3,36.2,64.3C25,71.4,12.5,75.6,-1.2,77.7C-15,79.8,-30,79.7,-42.6,73.4C-55.2,67.1,-65.4,54.6,-72.6,40.6C-79.7,26.6,-83.8,11.3,-82.1,-3.3C-80.4,-17.9,-72.8,-31.8,-63.1,-43.3C-53.4,-54.9,-41.5,-64.1,-28.9,-69.8C-16.3,-75.4,-3,-77.5,10.2,-75.8C23.4,-74.1,30.8,-78.3,42.7,-72.2Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute -bottom-20 -right-10 w-80 h-80 text-[#2D6E43]/10 transform -rotate-45" viewBox="0 0 200 200" fill="currentColor">
            <path d="M37.9,-62.4C50.2,-56.3,62,-47.1,69.5,-34.9C77,-22.7,80.1,-7.5,78.2,7.1C76.3,21.7,69.4,35.7,59.8,47.3C50.1,58.9,37.7,68.1,23.8,73.2C9.8,78.2,-5.7,79.1,-20.4,75.3C-35.1,71.5,-49,63,-59.6,51C-70.1,39.1,-77.3,23.7,-79.1,7.6C-80.8,-8.5,-77.1,-25.3,-68.4,-38.7C-59.7,-52.1,-46.1,-62.1,-32.2,-67.2C-18.3,-72.3,-4.2,-72.5,8.8,-70.7C21.7,-68.8,25.6,-68.6,37.9,-62.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        {/* Right Side Deep Forest Green Background with Ambient Glow */}
        <div className="w-full lg:w-[62%] bg-[#0F3522] relative overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#1F5C3B]/25 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#18482E]/30 blur-3xl" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Rich Green Request Quote Form Card (Square / Không bo góc) */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delay={0.15} duration={0.8} distance={30}>
              <div className="bg-[#246F40] rounded-none p-6 sm:p-8 shadow-2xl border border-emerald-400/20 relative overflow-hidden">

                {/* Form Header */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1.5 text-balance">
                  Yêu Cầu Báo Giá & Đặt Phòng
                </h3>
                <p className="text-xs text-emerald-100/90 mb-5 font-medium uppercase tracking-wider">
                  Thông tin cá nhân & đặt phòng
                </p>

                {formSent ? (
                  <div className="py-12 px-6 rounded-none bg-white/10 backdrop-blur-md border border-white/20 text-center animate-in fade-in">
                    <CheckCircle className="w-14 h-14 text-emerald-300 mx-auto mb-3" />
                    <div className="font-bold text-white text-lg">Gửi yêu cầu thành công!</div>
                    <div className="text-xs sm:text-sm text-emerald-100 mt-2 text-pretty">
                      Vườn An Nhiên đã nhận được thông tin. Chúng tôi sẽ liên hệ sớm nhất qua số điện thoại của bạn.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-left">

                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên quý khách *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-none bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-inner"
                      />
                    </div>

                    {/* Phone & Check-in Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Số điện thoại *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-none bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-inner"
                        />
                      </div>
                      <div>
                        <input
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-none bg-white text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Guest Range Slider (Sample Element) */}
                    <div className="pt-1 pb-1">
                      <div className="flex justify-between items-center text-xs text-emerald-100 font-medium mb-1.5">
                        <span>Số lượng khách:</span>
                        <span className="font-bold text-white bg-black/20 px-2.5 py-0.5 rounded-none border border-emerald-300/30">
                          {guestCount} người
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full h-2 bg-emerald-900/60 rounded-none appearance-none cursor-pointer accent-emerald-300"
                      />
                      <div className="flex justify-between text-[10px] text-emerald-200/70 mt-1">
                        <span>1 Khách</span>
                        <span>10 Khách</span>
                        <span>20+ Khách</span>
                      </div>
                    </div>

                    {/* Service Type & Stay Duration 2 Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-emerald-200 uppercase tracking-wider mb-1">
                          Loại phòng & Dịch vụ
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-none bg-white text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-inner"
                        >
                          <option value="Phòng gia đình">Phòng gia đình</option>
                          <option value="Phòng đôi tiện nghi">Phòng đôi tiện nghi</option>
                          <option value="Homestay trọn gói">Homestay trọn gói</option>
                          <option value="Lưu trú trải nghiệm">Lưu trú trải nghiệm</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-emerald-200 uppercase tracking-wider mb-1">
                          Thời gian lưu trú
                        </label>
                        <select
                          value={formData.stayDuration}
                          onChange={(e) => setFormData({ ...formData, stayDuration: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-none bg-white text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 shadow-inner"
                        >
                          <option value="1 - 2 ngày">1 - 2 ngày</option>
                          <option value="3 - 4 ngày">3 - 4 ngày</option>
                          <option value="5 ngày trở lên">5 ngày trở lên</option>
                          <option value="Thuê dài hạn">Thuê dài hạn</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button (Straight square button) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 sm:py-3.5 rounded-none bg-[#10291D] hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4 text-emerald-300" />
                        <span>NHẬN BÁO GIÁ & ĐẶT CHỖ</span>
                      </button>
                    </div>

                    {/* Direct Hotline row inside the card */}
                    <div className="pt-3.5 border-t border-emerald-400/25 text-center">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs">
                        <span className="text-emerald-100/90 whitespace-nowrap">
                          Hoặc liên hệ hotline trực tiếp:
                        </span>
                        <button
                          type="button"
                          onClick={onCopyPhone}
                          className="text-white font-bold text-sm tracking-wide bg-black/30 hover:bg-black/50 px-3.5 py-1 rounded-none border border-emerald-300/30 transition-colors whitespace-nowrap"
                        >
                          {HOMESTAY_INFO.phoneDisplay}
                        </button>
                      </div>
                      <div className="text-[11px] text-emerald-200/70 mt-1.5">
                        Tổng đài tư vấn & hỗ trợ du khách 24/7
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </Reveal>
          </div>

          {/* Right Column: Title & Frosted Testimonial Card (Square / Không bo góc) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <Reveal direction="right" delay={0.2} duration={0.8} distance={30}>

              {/* Header Title */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3 text-balance">
                Ghé Thăm Vườn An Nhiên Mộc Châu
              </h2>



              {/* Frosted Testimonial Card (Square / Không bo góc) */}
              <div className="bg-[#18482F]/75 backdrop-blur-md rounded-none p-6 sm:p-7 border border-emerald-300/20 relative shadow-2xl">

                {/* Author Avatar & Info */}
                <div className="flex items-center space-x-3.5 mb-4">
                  <img
                    src={reviews[activeReview].avatar}
                    alt={reviews[activeReview].name}
                    className="w-12 h-12 rounded-full border-2 border-emerald-300 object-cover bg-emerald-950 shadow"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {reviews[activeReview].name}
                    </h4>
                    <p className="text-xs text-emerald-300">
                      {reviews[activeReview].role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote Content */}
                <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed italic mb-5 text-pretty">
                  "{reviews[activeReview].comment}"
                </p>

                {/* Rating & Author details */}
                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-emerald-200 mr-1.5 font-medium">Đánh giá:</span>
                    {[...Array(reviews[activeReview].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-semibold text-white">
                      {reviews[activeReview].name}
                    </div>
                    <div className="text-[10px] text-emerald-300/80">
                      {reviews[activeReview].role}
                    </div>
                  </div>
                </div>

                {/* Auto-slide Progress Indicator Dots */}
                <div className="flex items-center justify-center space-x-1.5 pt-3">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveReview(i)}
                      className={`h-1 transition-all duration-500 ${
                        activeReview === i ? 'w-6 bg-emerald-400' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Đánh giá ${i + 1}`}
                    />
                  ))}
                </div>

              </div>

            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

