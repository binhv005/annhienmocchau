import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ImmersiveSection from './components/ImmersiveSection';
import StaySection from './components/StaySection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import LightboxModal from './components/LightboxModal';
import Toast from './components/Toast';
import { HOMESTAY_INFO } from './data/homestayData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Scroll to top on page load/reload as specified in prompt.md
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4000);
  };

  const handlePhoneAction = () => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    const cleanPhone = HOMESTAY_INFO.phone.replace(/\s/g, '');

    if (isMobile) {
      window.location.href = `tel:${cleanPhone}`;
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(HOMESTAY_INFO.phone).then(() => {
          triggerToast(`Đã sao chép số điện thoại: ${HOMESTAY_INFO.phoneDisplay}`);
        }).catch(() => {
          triggerToast(`Hotline: ${HOMESTAY_INFO.phoneDisplay}`);
        });
      } else {
        triggerToast(`Hotline: ${HOMESTAY_INFO.phoneDisplay}`);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C392D] selection:bg-[#285d3f] selection:text-white relative">
      {/* Botanical Watercolor Background Motifs (Họa tiết mờ nhẹ, tinh tế và sang trọng) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-right motif */}
        <div 
          className="absolute -top-8 -right-10 w-[240px] h-[320px] md:w-[520px] md:h-[680px] opacity-[0.10] md:opacity-[0.25] mix-blend-multiply bg-contain bg-no-repeat pointer-events-none transform rotate-6"
          style={{ backgroundImage: 'url("/images/111090476907d214664a421bb1b4df70.jpg")' }}
        />
        {/* Middle-left motif */}
        <div 
          className="hidden md:block absolute top-[28%] -left-16 w-[540px] h-[720px] opacity-[0.22] mix-blend-multiply bg-contain bg-no-repeat pointer-events-none transform -rotate-6"
          style={{ backgroundImage: 'url("/images/111090476907d214664a421bb1b4df70.jpg")' }}
        />
        {/* Middle-right motif */}
        <div 
          className="hidden lg:block absolute top-[55%] -right-16 w-[520px] h-[700px] opacity-[0.22] mix-blend-multiply bg-contain bg-no-repeat pointer-events-none transform rotate-12 scale-x-[-1]"
          style={{ backgroundImage: 'url("/images/111090476907d214664a421bb1b4df70.jpg")' }}
        />
        {/* Lower-left motif */}
        <div 
          className="hidden md:block absolute top-[78%] -left-20 w-[520px] h-[680px] opacity-[0.20] mix-blend-multiply bg-contain bg-no-repeat pointer-events-none transform -rotate-12"
          style={{ backgroundImage: 'url("/images/111090476907d214664a421bb1b4df70.jpg")' }}
        />
      </div>

      {/* Fixed/Sticky Floating Pill Navbar */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onCopyPhone={handlePhoneAction}
      />

      {/* Hero Section with Torn Paper Bottom Edge */}
      <main className="flex-1 relative z-10">
        <Hero
          onOpenBooking={() => setBookingOpen(true)}
          onCopyPhone={handlePhoneAction}
        />

        {/* Section 2: Giới thiệu (Circular Frame + Badge Overlay) */}
        <AboutSection
          onOpenBooking={() => setBookingOpen(true)}
          onCopyPhone={handlePhoneAction}
        />

        {/* Section 3: Dịch vụ lưu trú (3 Arch-topped Cards + Panoramic Lodge) */}
        <ExperienceSection
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* Section 4 & 5: Trải nghiệm & Không gian Mộc Châu (Asymmetric Gallery) */}
        <ImmersiveSection
          onOpenBooking={() => setBookingOpen(true)}
          onOpenLightbox={(img) => setLightboxImage(img)}
        />

        {/* Section 6: Không gian lưu trú (Stay 3D Carousel Preview) */}
        <StaySection
          onOpenBooking={() => setBookingOpen(true)}
          onOpenLightbox={(img) => setLightboxImage(img)}
        />

        {/* Section 7: Cảm nhận du khách (Testimonial Cards) */}
        <TestimonialsSection />

        {/* Section 8: CTA Banner (Come Walk The Land / Circular Badge) */}
        <CtaBanner
          onOpenBooking={() => setBookingOpen(true)}
          onCopyPhone={handlePhoneAction}
        />

        {/* Section 9: Thông tin liên hệ đầy đủ */}
        <ContactSection
          onCopyPhone={handlePhoneAction}
        />
      </main>

      {/* Footer with dark pine green styling */}
      <Footer
        onOpenBooking={() => setBookingOpen(true)}
        onCopyPhone={handlePhoneAction}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenBooking={() => setBookingOpen(true)}
        onCopyPhone={handlePhoneAction}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onCopyPhone={handlePhoneAction}
      />

      <LightboxModal
        imageSrc={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
