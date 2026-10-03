import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function QuoteModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Jaipur',
    propertyType: 'Home / Villa',
    cameraCount: '4 Cameras',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        propertyType: initialData.propertyType || prev.propertyType,
        cameraCount: initialData.cameraCount || prev.cameraCount,
        message: initialData.notes || initialData.cameraModel || prev.message
      }));
    }
  }, [initialData, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = `Hello Sony Vision,%0A%0AName: ${formData.fullName || 'Customer'}%0APhone: ${formData.phone || 'N/A'}%0ACity: ${formData.city}%0AProperty: ${formData.propertyType}%0ACameras: ${formData.cameraCount}%0AQuery: ${formData.message || 'I would like to book a free site survey and quote for CCTV installation.'}`;
    window.open(`https://wa.me/919414081702?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold">
                Book Free Site Visit &amp; Get Quote
              </h3>
              <span className="text-[10px] text-slate-300">Sony Vision [Sant Ska Enterprises]</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Consultation Request Received!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Our project engineer will call you shortly to confirm your preferred time for the free on-site survey in Jaipur.
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg hover:bg-slate-200"
                >
                  Close
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {initialData?.cameraModel && (
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-brand-900">
                  <span className="font-bold">Model Selected:</span> {initialData.cameraModel}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mukesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
                  >
                    <option value="Home / Villa">Home / Villa</option>
                    <option value="Office / Workspace">Office / Workspace</option>
                    <option value="Retail Store / Shop">Retail Store / Shop</option>
                    <option value="Warehouse / Factory">Warehouse / Factory</option>
                    <option value="School / College">School / College</option>
                    <option value="Farmhouse (Solar 4G)">Farmhouse (Solar 4G)</option>
                    <option value="Other">Other Premise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Camera Quantity
                  </label>
                  <select
                    value={formData.cameraCount}
                    onChange={(e) => setFormData({...formData, cameraCount: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
                  >
                    <option value="4 Cameras (Home Setup)">4 Cameras (Home Setup)</option>
                    <option value="8 Cameras (Business Setup)">8 Cameras (Business Setup)</option>
                    <option value="16 Cameras (Commercial Setup)">16 Cameras (Commercial Setup)</option>
                    <option value="32+ Cameras (Enterprise Setup)">32+ Cameras (Enterprise Setup)</option>
                    <option value="Need Site Survey to Determine">Need Site Survey to Determine</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Location in Jaipur / Rajasthan
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mansarovar, Jaipur"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific requirement or preferred inspection date..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 py-3 bg-accent-red hover:bg-accent-redHover text-white text-xs font-bold rounded-xl shadow-cta transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Free Site Visit</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Head Office: Shastri Nagar, Jaipur</span>
          <a href={`tel:${companyInfo.contact.phones[0]}`} className="font-bold text-brand-600">
            {companyInfo.contact.phones[0]}
          </a>
        </div>

      </div>
    </div>
  );
}
