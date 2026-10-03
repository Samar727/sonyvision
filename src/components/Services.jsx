import React from 'react';
import { Home, Building2, Store, GraduationCap, Warehouse, Smartphone, ArrowRight } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const serviceCards = [
    {
      id: "home",
      title: "Home & Villa CCTV",
      desc: "Protect your family and property 24/7 with crystal clear night vision cameras and mobile intercom.",
      image: "/images/ip_dome_pro.jpg",
      icon: Home,
      tag: "Residential"
    },
    {
      id: "office",
      title: "Office CCTV Installation",
      desc: "Monitor workspaces, reception, entry gates, and server rooms with integrated biometric attendance.",
      image: "/images/technician_install.jpg",
      icon: Building2,
      tag: "Corporate"
    },
    {
      id: "retail",
      title: "Shop & Retail CCTV",
      desc: "Prevent inventory shrinkage, monitor cash counters with audio recording, and oversee store footfall.",
      image: "/images/ip_bullet_pro.jpg",
      icon: Store,
      tag: "Commercial"
    },
    {
      id: "school",
      title: "School & College CCTV",
      desc: "Ensure student safety across campus perimeters, hallways, playgrounds, and school transport buses.",
      image: "/images/hero_surveillance.jpg",
      icon: GraduationCap,
      tag: "Institutional"
    },
    {
      id: "warehouse",
      title: "Factory & Warehouse CCTV",
      desc: "Long-range 36x optical zoom PTZ speed domes and perimeter beam sensors for high-ceiling storage yards.",
      image: "/images/ptz_speed_dome.jpg",
      icon: Warehouse,
      tag: "Industrial"
    },
    {
      id: "remote",
      title: "Remote Mobile App Setup",
      desc: "Watch live feeds, hear audio, and review recordings on iPhone, Android, and tablets from anywhere in the world.",
      image: "/images/control_room.jpg",
      icon: Smartphone,
      tag: "Smart Access"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-accent-red uppercase tracking-wider block mb-1">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our CCTV Installation Services
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Complete surveillance solutions for every premise, professionally installed in Jaipur with clean concealed cabling.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote({ notes: "Consultation across all CCTV installation services" })}
            className="self-start md:self-auto px-4 py-2 bg-white hover:bg-slate-100 text-brand-600 font-bold text-xs rounded-lg border border-slate-300 shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>Book Free Site Survey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded backdrop-blur-sm uppercase">
                      {srv.tag}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenQuote({
                      propertyType: srv.title,
                      notes: `Enquiry for ${srv.title} service`
                    })}
                    className="w-full py-2.5 bg-slate-50 hover:bg-brand-600 text-slate-700 hover:text-white text-xs font-bold rounded-xl border border-slate-200 hover:border-brand-600 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Installation Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
