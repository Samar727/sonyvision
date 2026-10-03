import React, { useState } from 'react';
import { 
  Building, Home, Store, Warehouse, GraduationCap, 
  ShieldCheck, HardDrive, Eye, Phone, ArrowRight, 
  Check, Sparkles, SlidersHorizontal, Sun, Network
} from 'lucide-react';

export default function SystemBuilder({ onOpenQuote }) {
  const [propertyType, setPropertyType] = useState('office');
  const [cameraCount, setCameraCount] = useState('8');
  const [selectedFeatures, setSelectedFeatures] = useState(['audio', 'night-vision', 'mobile-app']);

  const propertyTypes = [
    { id: 'residential', label: 'Home & Villa', icon: Home, desc: 'Perimeter, gate & porch coverage' },
    { id: 'retail', label: 'Retail & Shop', icon: Store, desc: 'Cash counter & shopping aisles' },
    { id: 'office', label: 'Office & IT Hub', icon: Building, desc: 'Cabins, entry access & corridors' },
    { id: 'warehouse', label: 'Warehouse & Yard', icon: Warehouse, desc: 'High ceilings & loading bays' },
    { id: 'institution', label: 'School & Hospital', icon: GraduationCap, desc: 'Multi-floor campus coverage' },
    { id: 'remote', label: 'Farmhouse / Remote', icon: Sun, desc: 'Wire-free 4G solar surveillance' }
  ];

  const cameraOptions = [
    { value: '4', label: '1 - 4 Cameras', tag: 'Standard Setup' },
    { value: '8', label: '5 - 8 Cameras', tag: 'Medium Property' },
    { value: '16', label: '9 - 16 Cameras', tag: 'Commercial Hub' },
    { value: '32', label: '17 - 32+ Cameras', tag: 'Enterprise Campus' }
  ];

  const featureOptions = [
    { id: 'night-vision', label: 'Full ColorVU / Starlight Night Vision', icon: Eye },
    { id: 'audio', label: 'Built-in Audio Recording', icon: ShieldCheck },
    { id: 'mobile-app', label: '24/7 Mobile Remote Access (ICSee/XMeye)', icon: Network },
    { id: 'ptz', label: '36x Optical Zoom PTZ Speed Dome', icon: SlidersHorizontal },
    { id: 'solar-4g', label: '4G SIM / Solar Wire-Free Operation', icon: Sun },
    { id: 'access-control', label: 'Biometric Face / Fingerprint Access', icon: ShieldCheck }
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Generate system recommendation based on selections
  const getRecommendation = () => {
    let cameras = [];
    let nvr = "";
    let storage = "";
    let teams = "1 Dedicated Lead Engineer + 2 Technicians";

    if (propertyType === 'remote' || selectedFeatures.includes('solar-4g')) {
      cameras.push("Sony Vision 3MP Solar 4G PTZ Camera (9.5W Panel + Battery Bank)");
      cameras.push("Sony Vision 4G SIM Outdoor Weatherproof Bullet");
      nvr = "Autonomous Cloud Sync & 128GB High-Endurance Edge MicroSD";
      storage = "15-30 Days Event-Based Loop Storage";
    } else if (cameraCount === '4') {
      cameras.push("Sony Vision 4MP IP Pro Series Dome Cameras (Indoor / Audio)");
      cameras.push("Sony Vision 4MP IP Pro Series Bullet Cameras (Outdoor IP67)");
      nvr = "Sony Vision 4-CH H.265+ 6-in-1 DVR / 4K NVR with HDMI Output";
      storage = "1TB Surveillance Hard Drive (Approx 15-20 Days Retention)";
    } else if (cameraCount === '8') {
      cameras.push("Sony Vision 4MP IP Pro Dome Cameras (Built-in Audio pick-up)");
      cameras.push("Sony Vision 3MP Starlight Dual LED Bullet Cameras (Full Color Night)");
      nvr = "Sony Vision 8-CH H.265+ NVR / Hybrid XVR (4K HDMI Output)";
      storage = "2TB - 4TB Surveillance SATA HDD (Approx 30 Days Retention)";
    } else if (cameraCount === '16') {
      cameras.push("Sony Vision 4MP IP Pro Series Dome & Weatherproof Bullets");
      cameras.push("Sony Vision 2MP 360° Panoramic Fisheye Ceiling Cameras");
      if (selectedFeatures.includes('ptz')) {
        cameras.push("Sony Vision 5MP Speed Dome PTZ (36x Optical Zoom, 100m IR)");
      }
      nvr = "Sony Vision 16-CH Enterprise 4K NVR + 16-CH Gigabit PoE Switch";
      storage = "4TB - 8TB Enterprise HDD (30-45 Days Retention)";
      teams = "2 Senior Project Engineers + 4 Certified Technicians";
    } else {
      cameras.push("Sony Vision 4MP IP Pro High-Density Dome & Bullet Network");
      cameras.push("Sony Vision 5MP Speed Dome PTZ (CSJ-NZ6RA-53718-NG, 36x Zoom)");
      cameras.push("Sony Vision 360° Panoramic Fisheye Cameras");
      nvr = "Sony Vision 32/64-CH 9-HDD Enterprise 4K NVR + SFP Fiber PoE Switches";
      storage = "16TB - 40TB RAID Enterprise Storage (60-90 Days Retention)";
      teams = "Full Project Team (Project Manager, 2 Engineers, 5+ Technicians)";
    }

    if (selectedFeatures.includes('access-control')) {
      cameras.push("Sony Vision BioFace-MSD1K / Smart Frameless Glass Door Lock");
    }

    return { cameras, nvr, storage, teams };
  };

  const recommendation = getRecommendation();

  const handlePlanSubmit = () => {
    const selectedProp = propertyTypes.find(p => p.id === propertyType)?.label;
    const notes = `Selected: ${selectedProp} | ${cameraCount} Cameras | Features: ${selectedFeatures.join(', ')}`;
    onOpenQuote({
      propertyType: selectedProp,
      cameraCount: cameraCount,
      notes: notes
    });
  };

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Ambient background styling */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/30 text-xs font-semibold text-brand-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            Interactive Security Planner
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Customize Your Ideal CCTV System Architecture
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Select your property type and coverage requirements to get an instant tailored 
            blueprint of Sony Vision cameras, storage capacity, and technician allocation.
          </p>
        </div>

        {/* Interactive Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Property Type */}
            <div className="bg-navy-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-md">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs font-black">1</span>
                <span>Select Your Premise / Environment</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {propertyTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = propertyType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setPropertyType(type.id)}
                      className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                        isSelected 
                          ? 'bg-brand-600/20 border-brand-400 shadow-glow-sm' 
                          : 'bg-navy-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-brand-400' : 'text-slate-400'}`} />
                        {isSelected && <Check className="w-4 h-4 text-brand-400" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white mb-0.5">{type.label}</div>
                        <div className="text-[10px] text-slate-400 line-clamp-1">{type.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Number of Cameras */}
            <div className="bg-navy-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-md">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs font-black">2</span>
                <span>Select Estimated Camera Requirement</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {cameraOptions.map((opt) => {
                  const isSelected = cameraCount === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setCameraCount(opt.value)}
                      className={`p-3.5 rounded-xl text-center transition-all border ${
                        isSelected 
                          ? 'bg-brand-600/20 border-brand-400 shadow-glow-sm' 
                          : 'bg-navy-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-sm font-bold text-white mb-1">{opt.label}</div>
                      <div className="text-[10px] text-brand-300 font-medium">{opt.tag}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Desired Security Features */}
            <div className="bg-navy-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-md">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 text-xs font-black">3</span>
                <span>Select Critical Capabilities</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feature) => {
                  const Icon = feature.icon;
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-xl text-left transition-all border flex items-center justify-between ${
                        isChecked 
                          ? 'bg-brand-500/15 border-brand-400/80 text-white' 
                          : 'bg-navy-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 ${isChecked ? 'text-brand-400' : 'text-slate-500'}`} />
                        <span className="text-xs font-medium truncate">{feature.label}</span>
                      </div>
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-brand-500 border-brand-400 text-navy-950' : 'border-slate-700'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time System Recommendation Blueprint (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-brand-500/40 via-sky-500/20 to-transparent blur-md" />
              
              <div className="relative bg-navy-900 border border-brand-500/30 rounded-2xl p-6 shadow-2xl space-y-6">
                
                {/* Blueprint Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block">
                      Sony Vision System Blueprint
                    </span>
                    <h4 className="text-lg font-bold text-white font-display">
                      Custom Security Recommendation
                    </h4>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-brand-400" />
                  </div>
                </div>

                {/* Recommended Camera Hardware */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-brand-400" />
                    <span>Recommended Camera Models:</span>
                  </div>
                  <ul className="space-y-2">
                    {recommendation.cameras.map((cam, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-navy-950/70 p-2.5 rounded-lg border border-slate-800">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{cam}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Storage & NVR Architecture */}
                <div className="space-y-2 text-xs">
                  <div className="text-slate-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-brand-400" />
                    <span>Storage &amp; Server Configuration:</span>
                  </div>
                  <div className="p-3 bg-navy-950/70 rounded-lg border border-slate-800 space-y-1.5">
                    <div className="text-slate-200 font-semibold">{recommendation.nvr}</div>
                    <div className="text-sky-300 text-[11px]">{recommendation.storage}</div>
                  </div>
                </div>

                {/* Project Execution Allocation */}
                <div className="p-3 bg-brand-950/40 rounded-lg border border-brand-500/20 text-xs">
                  <span className="text-[10px] text-brand-300 uppercase font-bold tracking-wider block mb-0.5">
                    Deployment Engineering Crew:
                  </span>
                  <span className="text-slate-200 font-medium">
                    {recommendation.teams}
                  </span>
                </div>

                {/* Submit Action */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={handlePlanSubmit}
                    className="w-full py-3.5 bg-gradient-to-r from-brand-600 via-sky-500 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white text-sm font-bold rounded-xl shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 group active:scale-95"
                  >
                    <span>Request Free Proposal &amp; Site Visit for this Setup</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/919414081702?text=Hello%20Sony%20Vision,%20I%20used%20your%20website%20system%20planner%20for%20a%20${propertyType}%20property%20requiring%20${cameraCount}%20cameras.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-700/40 text-emerald-300 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Instant WhatsApp Discussion</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
