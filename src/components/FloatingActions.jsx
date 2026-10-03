import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function FloatingActions({ onOpenQuote }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      
      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-900 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick Quote Pill */}
      <button
        onClick={() => onOpenQuote()}
        className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-accent-red hover:bg-accent-redHover text-white text-xs font-bold rounded-full shadow-cta transition-all hover:scale-105 active:scale-95"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Book Free Visit</span>
      </button>

      {/* Direct Call Button */}
      <a
        href={`tel:${companyInfo.contact.phones[0]}`}
        className="flex items-center gap-2 px-3.5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
        aria-label="Call Direct"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919414081702?text=Hello%20Sony%20Vision,%20I%20am%20interested%20in%20CCTV%20Camera%20Installation%20services%20in%20Jaipur."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
        aria-label="WhatsApp Us"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

    </div>
  );
}
