import React from 'react';
import { ShieldCheck, Award, Users, Server, CheckCircle, Zap } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Award,
      title: "Make in India Certified",
      subtitle: `MeitY Cert #${companyInfo.certificate.certificateNo}`,
      highlight: "Govt. Approved"
    },
    {
      icon: ShieldCheck,
      title: "Own CCTV Camera Brand",
      subtitle: "Optical Precision & Direct Warranty",
      highlight: "Since 1993"
    },
    {
      icon: Users,
      title: "25+ Certified Technicians",
      subtitle: "5 Independent Project Teams",
      highlight: "In-House Team"
    },
    {
      icon: Server,
      title: "Testing & Assembly Lab",
      subtitle: "5+ Simultaneous Sites Execution",
      highlight: "Jaipur Facility"
    },
    {
      icon: CheckCircle,
      title: "100% Compliances",
      subtitle: "Zero Dues & Proven Quality",
      highlight: "Verified Record"
    }
  ];

  return (
    <div className="relative z-20 bg-navy-900 border-y border-brand-500/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-slate-800/80 hover:border-brand-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-brand-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="min-w-0">
                  <span className="inline-block text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-0.5">
                    {item.highlight}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
