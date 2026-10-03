import React, { useEffect } from 'react';
import { X, Check, ShieldCheck, FileText, Phone, MessageSquare, ChevronRight, Award } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function CameraDetailModal({ camera, onClose, onOpenQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!camera) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Sony Vision Technical Datasheet
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Grid: Image + Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Image Box */}
            <div className="md:col-span-5 relative aspect-square bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center justify-center">
              <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-white text-brand-700 border border-slate-200 shadow-sm">
                {camera.badge}
              </span>
              <img
                src={camera.image}
                alt={camera.name}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>

            {/* Overview Box */}
            <div className="md:col-span-7 space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200 uppercase">
                {camera.series}
              </span>

              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {camera.name}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                {camera.description}
              </p>

              <div className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-700">
                {camera.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Specifications Table */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-brand-600" />
              <span>Technical Specifications</span>
            </h3>

            <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(camera.specs).map(([k, v], idx) => (
                    <tr key={k} className={`border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                      <td className="py-2.5 px-3.5 font-bold text-slate-700 w-2/5 border-r border-slate-200/80">
                        {k}
                      </td>
                      <td className="py-2.5 px-3.5 text-slate-900 font-mono text-[11px]">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Suitable Environments */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-slate-700 block mb-1.5">
              Suitable Environments:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {camera.suitableFor.map((app, idx) => (
                <span key={idx} className="text-xs bg-white text-slate-700 px-2.5 py-0.5 rounded border border-slate-200">
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Free on-site survey &amp; quote in Jaipur for this model.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/919414081702?text=Hello%20Sony%20Vision,%20I%20am%20interested%20in%20the%20${encodeURIComponent(camera.name)}%20model.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuote({
                  cameraModel: camera.name,
                  notes: `Enquiry specifically for ${camera.name} (${camera.series})`
                });
              }}
              className="px-5 py-2.5 bg-accent-red hover:bg-accent-redHover text-white text-xs font-bold rounded-lg shadow-cta flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
            >
              <span>Request Quote for this Model</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
