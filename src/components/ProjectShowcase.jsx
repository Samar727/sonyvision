import React from 'react';
import { Trophy, Bus, Train, Warehouse, ArrowRight } from 'lucide-react';

export default function ProjectShowcase({ onOpenQuote }) {
  const projects = [
    {
      title: "Stadium Security Commissioning (ODI-2010 & IPL-2010)",
      category: "Sports Stadium",
      desc: "Hardware integration, high-density crowd surveillance, and PTZ speed dome deployment for international cricket matches.",
      image: "/images/control_room.jpg",
      icon: Trophy,
      tag: "ODI & IPL 2010"
    },
    {
      title: "Bus Depot & Public Transit Fleet Monitoring",
      category: "Public Transportation",
      desc: "Depot boundary surveillance, vehicle inspection scanning, workshop maintenance bay monitoring and mobile CCTV setup.",
      image: "/images/technician_install.jpg",
      icon: Bus,
      tag: "Depot CCTV"
    },
    {
      title: "Railway Station Surveillance Systems",
      category: "Transport Hub",
      desc: "Platform concourse monitoring, passenger entry/exit tracking, and centralized control room integration.",
      image: "/images/hero_surveillance.jpg",
      icon: Train,
      tag: "Railway Platforms"
    },
    {
      title: "Industrial Warehouses & Logistics Yards",
      category: "Supply Chain",
      desc: "High-ceiling speed domes, inventory aisle monitoring, loading bay perimeter beams, and long-range night vision.",
      image: "/images/ptz_speed_dome.jpg",
      icon: Warehouse,
      tag: "Logistics Hubs"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-accent-red uppercase tracking-wider block mb-1">
            PROJECT DEPLOYMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Proven Execution in Critical Infrastructure
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            From world-class sports arenas to transit bus depots and high-volume industrial facilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded backdrop-blur-sm uppercase">
                      {proj.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-600 mb-1">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{proj.category}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-1.5 line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenQuote({ notes: `Enquiry for ${proj.title}` })}
                    className="w-full py-2 bg-slate-50 hover:bg-brand-600 text-slate-700 hover:text-white text-xs font-bold rounded-lg border border-slate-200 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Request Similar Setup</span>
                    <ArrowRight className="w-3 h-3" />
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
