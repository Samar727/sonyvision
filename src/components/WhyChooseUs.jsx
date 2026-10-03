import React from 'react';
import { Award, Users, Server, ShieldCheck, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function WhyChooseUs({ onOpenQuote }) {
  const cards = [
    {
      icon: Award,
      title: "Trusted Own Brand",
      subtitle: "Make in India Certified",
      desc: "Consciously manufactured under Government of India MeitY Certificate #3738447389. True optical quality without reseller markup."
    },
    {
      icon: Users,
      title: "25+ Expert Technicians",
      subtitle: "5 Independent Project Teams",
      desc: "5 Project Managers, 5 Project Engineers, and certified technicians ready to execute fast, clean, concealed installations."
    },
    {
      icon: Server,
      title: "Advanced Testing Lab",
      subtitle: "5+ Simultaneous Sites",
      desc: "Our Shastri Nagar technical lab performs rigorous quality checks, routing tests, and client-server video processing."
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Support",
      subtitle: "Direct Warranty & AMC",
      desc: "100% statutory compliances (no dues till date), genuine warranty, and same-day troubleshooting across Jaipur."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Real Technician Photo Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/images/technician_install.jpg"
                alt="Sony Vision Certified CCTV Technician Installation"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-accent-red text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md">
                YOUR SECURITY, OUR PRIORITY
              </div>

              {/* Bottom Info Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">Sony Vision Technicians</span>
                    <span className="text-slate-500 text-[11px]">Turnkey Installation &amp; Service in Jaipur</span>
                  </div>
                  <span className="font-extrabold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">
                    Est. 1993
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & 4-Card Grid (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-accent-red uppercase tracking-wider block mb-1">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose Sony Vision?
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We provide reliable, professional and affordable CCTV installation services in Jaipur 
                for homes, offices, showrooms, warehouses and all types of commercial businesses.
              </p>
            </div>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-300 hover:bg-brand-50/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {card.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-brand-600">
                          {card.subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-cta-blue transition-all flex items-center gap-2"
              >
                <span>Talk to a Security Expert</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${companyInfo.contact.phones[0]}`}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>Call: {companyInfo.contact.phones[0]}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
