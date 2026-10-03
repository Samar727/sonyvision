import React from 'react';
import { Calendar, MessageSquare, ShieldCheck, Users, Tag, Headphones, Clock, Settings, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Hero({ onOpenQuote }) {
  return (
    <div id="home" className="pt-20 sm:pt-24 bg-slate-950">
      
      {/* 1. Main Hero Panoramic Banner */}
      <section className="relative min-h-[520px] lg:min-h-[600px] flex items-center overflow-hidden">
        
        {/* Background Panoramic Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/jaipur_hero_clean.jpg"
            alt="CCTV Installation in Jaipur - Sony Vision"
            className="w-full h-full object-cover object-right lg:object-center"
          />
          {/* Smooth dark vignette on the left half to guarantee razor-sharp contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent w-full lg:w-3/5 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10" />
        </div>

        {/* Hero Content Container - Left Aligned with Natural Padding */}
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-16">
          <div className="max-w-2xl text-left space-y-4">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[10px] sm:text-xs font-bold tracking-wider text-slate-200 uppercase backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse shrink-0" />
              <span>Safe Homes</span>
              <span className="text-slate-600">•</span>
              <span>Secure Businesses</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 font-extrabold">Smarter Tomorrow</span>
            </div>

            {/* Main 2-Line Headline with Gradient & Highlighted Text */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase">
              <span>CCTV INSTALLATION</span> <br />
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                IN JAIPUR
              </span>
            </h1>

            {/* Subheadings with Highlighted Key Phrases */}
            <div className="space-y-2 pt-1">
              <h2 className="text-base sm:text-xl font-bold text-slate-100 leading-snug">
                Secure Your <span className="text-amber-400 font-extrabold">Home</span> or <span className="text-amber-400 font-extrabold">Business</span> with Trusted CCTV Installation
              </h2>

              {/* Highlighted Feature Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/85 text-cyan-300 border border-slate-700/80 text-xs font-semibold backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  Wireless &amp; HD CCTV Cameras
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/85 text-emerald-300 border border-slate-700/80 text-xs font-semibold backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Fast Installation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/85 text-amber-300 border border-slate-700/80 text-xs font-semibold backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  100% Free Site Visit
                </span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 bg-accent-red hover:bg-accent-redHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-cta transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Site Visit →</span>
              </button>

              <a
                href="https://wa.me/919414081702?text=Hello%20Sony%20Vision,%20I%20would%20like%20to%20book%20a%20free%20site%20inspection%20and%20quote%20for%20CCTV%20installation%20in%20Jaipur."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-slate-900/90 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-700 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* 4 Trust Icons Row (Below Buttons) */}
            <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-200 border-t border-slate-800/80">
              
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-red shrink-0" />
                <div className="text-xs leading-tight">
                  <span className="font-bold text-white block">Genuine Products</span>
                  <span className="text-[10px] text-slate-400">Make in India</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-red shrink-0" />
                <div className="text-xs leading-tight">
                  <span className="font-bold text-white block">Expert Technicians</span>
                  <span className="text-[10px] text-slate-400">25+ In-House</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-accent-red shrink-0" />
                <div className="text-xs leading-tight">
                  <span className="font-bold text-white block">Affordable Pricing</span>
                  <span className="text-[10px] text-slate-400">Direct Brand</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-accent-red shrink-0" />
                <div className="text-xs leading-tight">
                  <span className="font-bold text-white block">Complete Support</span>
                  <span className="text-[10px] text-slate-400">24/7 Mobile App</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 2. Bottom 4-Column Feature / Metric Strip (Directly below hero banner) */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 */}
            <div className="flex items-center gap-3.5 p-2 border-b sm:border-b-0 sm:border-r border-slate-100 last:border-0">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-accent-red flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-black text-slate-900 leading-none">2,500+</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Homes &amp; Businesses</div>
                <div className="text-[11px] text-slate-500">Secured in Jaipur</div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-center gap-3.5 p-2 border-b sm:border-b-0 sm:border-r border-slate-100 last:border-0">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-accent-red flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-black text-slate-900 leading-none">24 – 48 Hours</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Installation Time</div>
                <div className="text-[11px] text-slate-500">Quick &amp; Hassle-Free</div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-center gap-3.5 p-2 border-b sm:border-b-0 sm:border-r border-slate-100 last:border-0">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-accent-red flex items-center justify-center shrink-0">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">Professional Installation</div>
                <div className="text-[11px] text-slate-500">By Certified In-House Experts</div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-accent-red flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 leading-snug">After-Sales Support</div>
                <div className="text-[11px] text-slate-500">Always Here for You (Since 1993)</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
