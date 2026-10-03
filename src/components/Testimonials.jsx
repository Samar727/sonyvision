import React from 'react';
import { Star, ShieldCheck, User } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Commercial Office Client",
      location: "C-Scheme, Jaipur",
      system: "16-CH IP Surveillance & Biometric Access",
      review: "Sony Vision installed a full 16-camera IP system with biometric attendance for our office. Very neat and concealed cabling work, zero mess, and mobile viewing was configured on all our phones within minutes."
    },
    {
      name: "Industrial Warehouse Manager",
      location: "VKIA Industrial Area, Jaipur",
      system: "36x Optical Zoom Speed Dome PTZ",
      review: "The 36x optical zoom PTZ cameras give crisp detail across our open loading yard even in pitch dark. Having an in-house manufacturer with direct technician support made a huge difference."
    },
    {
      name: "Residential Villa Owner",
      location: "Vaishali Nagar, Jaipur",
      system: "4MP Full ColorVU & Video Door Phone",
      review: "Very professional installation team. The ColorVU night vision cameras deliver full color recording at night without disturbing blinding spotlights. Highly recommended for home security."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hear From Our Clients in Jaipur
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Trusted by homeowners, corporate enterprises, and industrial facilities across Rajasthan since 1993.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified Customer
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{rev.name}</div>
                  <div className="text-[11px] text-slate-500">{rev.location}</div>
                  <div className="text-[10px] text-brand-600 font-semibold">{rev.system}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
