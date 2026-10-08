import React, { useState } from 'react';
import { X, Calendar, Users, Phone, CheckCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { HOMESTAY_INFO } from '../data/homestayData';

export default function BookingModal({ isOpen, onClose, onCopyPhone }) {
  const [submitted, setSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'Phòng Nghỉ Sân Vườn',
    note: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header with Emerald Gradient */}
        <div className="bg-gradient-to-r from-[#1E3D2C] to-[#285d3f] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1 whitespace-nowrap">
            <span>ĐẶT PHÒNG / TƯ VẤN NHANH</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold whitespace-nowrap sm:whitespace-normal">
            {HOMESTAY_INFO.name}
          </h3>
          <p className="text-xs text-stone-200 mt-1 text-pretty">
            37 Bản Áng 3, Mộc Sơn, Sơn La • Hotline: {HOMESTAY_INFO.phoneDisplay}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-[#285d3f] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#1E3D2C] mb-2 text-balance">
                Gửi thông tin thành công!
              </h4>
              <p className="text-sm text-stone-600 mb-6 text-pretty">
                Cô Hoa phụ trách tại Vườn An Nhiên sẽ gọi điện lại cho quý khách trong ít phút để xác nhận phòng.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#285d3f] text-white font-semibold text-xs uppercase whitespace-nowrap"
              >
                Đóng cửa sổ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1 whitespace-nowrap">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285d3f] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1 whitespace-nowrap">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0904 xxx xxx"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285d3f] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1 whitespace-nowrap">
                    Ngày nhận phòng
                  </label>
                  <input
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285d3f] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1 whitespace-nowrap">
                    Ngày trả phòng
                  </label>
                  <input
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285d3f] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1 whitespace-nowrap">
                    Số lượng khách
                  </label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285d3f] text-sm"
                  >
                    <option value="1">1 Khách</option>
                    <option value="2">2 Khách (Cặp đôi)</option>
                    <option value="3-4">3 - 4 Khách (Gia đình)</option>
                    <option value="5+">Trên 5 Khách (Nhóm bạn)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1 whitespace-nowrap">
                    Nhu cầu dịch vụ
                  </label>
                  <select
                    value={bookingData.roomType}
                    onChange={(e) => setBookingData({ ...bookingData, roomType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285d3f] text-sm"
                  >
                    <option value="Cho thuê phòng">Cho thuê phòng</option>
                    <option value="Lưu trú dịch vụ">Lưu trú dịch vụ</option>
                    <option value="Đoàn khách du lịch">Đoàn khách du lịch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1 whitespace-nowrap">
                  Ghi chú thêm
                </label>
                <textarea
                  rows="2"
                  placeholder="Yêu cầu thêm về phòng, giờ check-in sớm..."
                  value={bookingData.note}
                  onChange={(e) => setBookingData({ ...bookingData, note: e.target.value })}
                  className="w-full px-4 py-2 rounded-2xl bg-stone-50 border border-stone-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#285d3f] text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#285d3f] hover:bg-[#1e3d2c] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  Xác Nhận Gửi Yêu Cầu Đặt Phòng
                </button>
              </div>

              {/* Direct call option */}
              <div className="text-center pt-3 border-t border-stone-100 text-xs text-stone-500 whitespace-nowrap">
                Hoặc gọi hotline trực tiếp:{' '}
                <button
                  type="button"
                  onClick={onCopyPhone}
                  className="text-[#285d3f] font-bold hover:underline whitespace-nowrap"
                >
                  {HOMESTAY_INFO.phoneDisplay}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
