import React, { useState } from 'react';
import { Eye, ShieldCheck, Check, ArrowRight, FileText, ChevronRight, Layers } from 'lucide-react';
import { cameraSeriesData } from '../data/cameraProducts';

export default function CameraSeries({ onSelectCamera, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Models' },
    { id: 'IP Pro Series', label: 'IP Pro Series' },
    { id: 'Speed Dome PTZ', label: 'Speed Dome PTZ' },
    { id: '4G & Wireless Series', label: '4G & Solar Wireless' },
    { id: 'Starlight & ColorVU', label: 'Starlight Color Night' },
    { id: 'Enterprise Storage & Network', label: 'Enterprise NVR / XVR' },
    { id: 'Access & Biometric Systems', label: 'Access & Biometrics' }
  ];

  const filteredCameras = activeTab === 'all' 
    ? cameraSeriesData 
    : cameraSeriesData.filter(cam => cam.series === activeTab);

  return (
    <section id="cameras" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            Own Brand Camera Series
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Our CCTV Camera Series
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Engineered by Sony Vision [Sant Ska Enterprises] under the Government of India Make in India initiative. 
            All models include professional installation and direct warranty support.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                activeTab === tab.id
                  ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Camera Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCameras.map((camera) => (
            <div
              key={camera.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Photo Box */}
                <div className="relative aspect-square bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded bg-white text-brand-700 border border-slate-200 shadow-sm">
                    {camera.badge}
                  </span>

                  <img
                    src={camera.image}
                    alt={camera.name}
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content Area */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider block">
                      {camera.series}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mt-0.5">
                      {camera.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {camera.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    {camera.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectCamera(camera)}
                    className="py-2 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-brand-600" />
                    <span>Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote({
                      cameraModel: camera.name,
                      notes: `Enquiry for ${camera.name} (${camera.series})`
                    })}
                    className="py-2 px-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
