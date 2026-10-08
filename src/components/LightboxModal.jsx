import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ imageSrc, onClose }) {
  if (!imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
          aria-label="Đóng ảnh"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={imageSrc}
          alt="Hình ảnh Vườn An Nhiên phóng to"
          className="w-full h-full object-contain max-h-[85vh] rounded-3xl"
        />
      </div>
    </div>
  );
}
