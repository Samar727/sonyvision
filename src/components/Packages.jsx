import React from 'react';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import { cctvPackages } from '../data/packages';

export default function Packages({ onOpenQuote }) {
  return (
    <section id="packages" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches Sirshu Reference) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-bold text-accent-red uppercase tracking-wider block mb-1">
              POPULAR PACKAGES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              CCTV Installation Packages in Jaipur
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Choose the best CCTV package for your home or business. Includes cameras, installation, storage &amp; mobile configuration.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote({ notes: "Request custom CCTV package configuration" })}
            className="self-start md:self-auto px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-lg border border-slate-300 shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>Request Custom Quote →</span>
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cctvPackages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-lg ${
                  pkg.isPopular 
                    ? 'border-accent-red ring-1 ring-accent-red' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Popular Ribbon */}
                {pkg.isPopular && (
                  <div className="bg-accent-red text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="p-6">
                  {!pkg.isPopular && (
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 mb-2 uppercase">
                      {pkg.badge}
                    </span>
                  )}
                  
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                    {pkg.name}
                  </h3>
                  <div className="text-xs text-slate-500 mb-2 font-medium">
                    {pkg.subtitle}
                  </div>
                  <div className="text-sm font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                    {pkg.cameraCount} Complete Setup
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2 text-xs">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <Check className="w-3.5 h-3.5 text-accent-red shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA (Red Button on All Cards) */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenQuote({
                      propertyType: pkg.idealFor,
                      cameraCount: pkg.cameraCount,
                      notes: `Selected Package: ${pkg.name} (${pkg.cameraCount})`
                    })}
                    className="w-full py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-cta bg-accent-red hover:bg-accent-redHover text-white active:scale-95"
                  >
                    <span>Get this Package →</span>
                  </button>

                  <div className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                    Free on-site property survey included
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
