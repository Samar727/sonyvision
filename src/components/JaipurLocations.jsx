import React from 'react';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { jaipurLocations } from '../data/packages';
import { companyInfo } from '../data/companyInfo';

export default function JaipurLocations({ onOpenQuote }) {
  return (
    <section id="locations" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-xs font-bold text-accent-red uppercase tracking-wider block mb-1">
          LOCAL SERVICE AREAS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          We Provide CCTV Installation Across Jaipur
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8">
          Our 5 mobile project teams are stationed across Jaipur for immediate on-site surveys, clean installations, and same-day support.
        </p>

        {/* Location Pills Grid */}
        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {jaipurLocations.map((loc, idx) => (
            <button
              key={idx}
              onClick={() => onOpenQuote({ notes: `CCTV installation site survey for ${loc}, Jaipur` })}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 text-xs font-semibold text-slate-700 hover:text-brand-600 shadow-sm transition-all flex items-center gap-1.5"
            >
              <MapPin className="w-3 h-3 text-accent-red" />
              <span>{loc}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
          <span>Head Office: <strong className="text-slate-900">Shastri Nagar, Jaipur</strong></span>
          <span>•</span>
          <span>Contact: <strong className="text-slate-900">{companyInfo.contact.phones[0]}</strong></span>
          <span>•</span>
          <span>All Rajasthan Districts Covered</span>
        </div>

      </div>
    </section>
  );
}
