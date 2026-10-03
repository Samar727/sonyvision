import React from 'react';
import { ShieldCheck, Users, Tag, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Brand",
      subtitle: "100% Genuine Products"
    },
    {
      icon: Users,
      title: "Experienced Team",
      subtitle: "Skilled & Certified Technicians"
    },
    {
      icon: Tag,
      title: "Affordable Pricing",
      subtitle: "Best Solutions Within Your Budget"
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      subtitle: "From Site Visit to After-Sales"
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Technician Photo with Badge (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-900">
              <img
                src="/images/technician_mounting_real.jpg"
                alt="Sony Vision CCTV Installation Technician"
                className="w-full h-[320px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Bottom-left "YOUR SECURITY / OUR PRIORITY" Pill Badge */}
              <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-lg border-l-4 border-accent-red shadow-xl">
                <div className="text-[10px] font-extrabold text-white tracking-wider uppercase leading-tight">
                  YOUR SECURITY
                </div>
                <div className="text-[10px] font-extrabold text-accent-red tracking-wider uppercase leading-tight">
                  OUR PRIORITY
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title & 4 Horizontal Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-accent-red uppercase tracking-wider block mb-1">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                <span className="text-accent-red">Why Choose</span> Sony Vision?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                We provide reliable, professional and affordable CCTV installation services in Jaipur for homes, offices and all types of businesses.
              </p>
            </div>

            {/* 4 Clean Feature Cards in a Single Horizontal Row - Perfectly Aligned */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col items-start h-full"
                  >
                    {/* Icon Container with Fixed Height & Margin */}
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-accent-red flex items-center justify-center mb-3.5 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content Block with Consistent Vertical Baselines */}
                    <div className="w-full flex flex-col">
                      <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug min-h-[16px] flex items-start">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug min-h-[32px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
