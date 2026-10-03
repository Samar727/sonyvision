import React, { useState } from 'react';
import { Home, Store, Building2, Warehouse, GraduationCap, Check, ArrowRight } from 'lucide-react';
import { solutionsData } from '../data/services';

export default function Solutions({ onOpenQuote }) {
  const [activeId, setActiveId] = useState(solutionsData[0].id);

  const iconMap = {
    Home: Home,
    Store: Store,
    Building2: Building2,
    Warehouse: Warehouse,
    GraduationCap: GraduationCap
  };

  const activeSol = solutionsData.find(s => s.id === activeId) || solutionsData[0];
  const ActiveIcon = iconMap[activeSol.icon] || Building2;

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            SECTOR SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Security Solutions for Every Environment
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Tailored camera placements, cable topologies, and access controls designed for your facility.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {solutionsData.slice(0, 5).map((sol) => {
            const Icon = iconMap[sol.icon] || Building2;
            const isActive = sol.id === activeId;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveId(sol.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent-red uppercase tracking-wider block">
                    {activeSol.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeSol.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-brand-700">
                {activeSol.headline}
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">Problem &amp; Risk:</strong>
                  <span>{activeSol.challenge}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                  <strong className="text-brand-900 block mb-0.5">Sony Vision Blueprint:</strong>
                  <span>{activeSol.solution}</span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-bold text-slate-900 block">
                  Recommended System Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeSol.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenQuote({
                    propertyType: activeSol.title,
                    notes: `Plan CCTV System for ${activeSol.title}`
                  })}
                  className="px-5 py-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-cta-blue transition-all flex items-center gap-1.5"
                >
                  <span>Plan My {activeSol.title} Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-md">
                <img
                  src={
                    activeSol.id === 'warehouses-industrial'
                      ? '/images/ptz_speed_dome.jpg'
                      : activeSol.id === 'corporate-offices'
                      ? '/images/technician_install.jpg'
                      : '/images/hero_surveillance.jpg'
                  }
                  alt={activeSol.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
