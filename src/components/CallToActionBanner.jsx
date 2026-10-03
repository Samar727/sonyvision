import React from 'react';
import { ChevronRight, MessageSquare, Phone } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function CallToActionBanner({ onOpenQuote }) {
  return (
    <section className="bg-slate-900 text-white py-14 relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative z-10">
        
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Secure Your Property?
        </h2>
        
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Get a free on-site survey and the most reliable CCTV installation quotation in Jaipur today.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3.5 bg-accent-red hover:bg-accent-redHover text-white text-xs sm:text-sm font-bold rounded-full shadow-cta transition-all flex items-center gap-2"
          >
            <span>Book Free Site Visit</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919414081702?text=Hello%20Sony%20Vision,%20I%20would%20like%20to%20request%20a%20site%20inspection%20and%20quote%20for%20CCTV%20installation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-full shadow-md transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${companyInfo.contact.phones[0]}`}
            className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold rounded-full border border-slate-700 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-400" />
            <span>Call: {companyInfo.contact.phones[0]}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
