import React from 'react';
import { CheckCircle2, Phone, X } from 'lucide-react';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
      <div className="bg-[#14281D] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-600/40 flex items-center space-x-3 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="text-xs sm:text-sm leading-snug">
          {message}
        </div>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-white p-1 ml-2 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
