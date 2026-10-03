import React from 'react';
import { Network, Compass, Eye, Sun, Maximize, Fingerprint, ChevronRight, ArrowRight } from 'lucide-react';
import { cameraCategories } from '../data/cameraProducts';

export default function CameraCategories({ onOpenQuote }) {
  const iconMap = {
    Network: Network,
    Compass: Compass,
    Eye: Eye,
    Sun: Sun,
    Maximize: Maximize,
    Fingerprint: Fingerprint
  };

  return (
    <section id="categories" className="py-20 bg-navy-950/70 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">
            Surveillance Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Understanding CCTV Camera Technologies
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Not sure which camera technology fits your premise? Explore the fundamental categories 
            manufactured and deployed by Sony Vision.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameraCategories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Network;
            return (
              <div
                key={cat.id}
                className="bg-navy-900/60 border border-slate-800/90 rounded-2xl p-6 hover:border-brand-500/30 hover:bg-navy-900/90 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-800/60 px-2 py-1 rounded">
                      Sony Vision Tech
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-brand-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 mb-3">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cat.desc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-800">
                    {cat.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60">
                  <div className="text-[11px] text-slate-400 mb-3">
                    <strong className="text-slate-300">Recommended for:</strong> {cat.idealFor}
                  </div>
                  <button
                    onClick={() => onOpenQuote({ notes: `Interested in consultation for ${cat.title}` })}
                    className="w-full py-2 text-xs font-semibold text-brand-300 hover:text-white bg-brand-500/10 hover:bg-brand-600 rounded-lg border border-brand-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Talk to a Security Expert</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
