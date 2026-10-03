import React from 'react';
import { 
  MessageSquareText, MapPin, FileText, Wrench, 
  CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { installationSteps } from '../data/services';

export default function InstallationProcess({ onOpenQuote }) {
  const iconMap = {
    MessageSquareText: MessageSquareText,
    MapPin: MapPin,
    FileText: FileText,
    Wrench: Wrench,
    CheckCircle2: CheckCircle2
  };

  return (
    <section id="process" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">
            Top-Down Project Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            How Our Installation Works
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            We follow a structured 5-step engineering process with daily job cards, precision 
            conduit cabling, and comprehensive client training for zero downtime.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {installationSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || ShieldCheck;
            return (
              <div
                key={step.step}
                className="relative bg-navy-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-500/40 hover:bg-navy-900 transition-all duration-300 group"
              >
                {/* Connecting arrow for desktop */}
                {index < installationSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 text-brand-500/40">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-sky-300 font-display">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-brand-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <p className="text-[11px] text-sky-300/80 font-medium">
                    {step.details}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenQuote()}
            className="px-8 py-4 bg-gradient-to-r from-brand-600 via-sky-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base rounded-xl shadow-glow hover:shadow-glow-lg transition-all"
          >
            Schedule Your Free On-Site Survey (Step 01 &amp; 02)
          </button>
        </div>

      </div>
    </section>
  );
}
