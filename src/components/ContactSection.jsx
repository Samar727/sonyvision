import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function ContactSection({ prefillData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: 'Jaipur',
    propertyType: prefillData?.propertyType || 'Home / Villa',
    cameraCount: prefillData?.cameraCount || '4 Cameras',
    message: prefillData?.notes || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = `Hello Sony Vision,%0A%0AName: ${formData.fullName || 'Customer'}%0APhone: ${formData.phone || 'N/A'}%0ACity: ${formData.location}%0AProperty: ${formData.propertyType}%0ACameras: ${formData.cameraCount}%0AQuery: ${formData.message || 'I would like a free site inspection and quote for CCTV installation.'}`;
    window.open(`https://wa.me/919414081702?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Request Free Site Survey &amp; Quotation
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Fill out the simple form below. Our project engineer in Jaipur will get in touch within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Sony Vision Head Office
                </h3>
                <span className="text-xs text-slate-500 font-medium">Sant Ska Enterprises • Est. 1993</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900 block text-xs">Office Address:</strong>
                  <span className="text-slate-600 leading-relaxed text-xs">
                    {companyInfo.contact.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900 block text-xs">Mobile &amp; Hotline:</strong>
                  <a href={`tel:${companyInfo.contact.phones[0]}`} className="text-brand-600 font-bold block">
                    {companyInfo.contact.phones[0]}
                  </a>
                  <a href={`tel:${companyInfo.contact.phones[1]}`} className="text-slate-700 block text-xs">
                    {companyInfo.contact.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900 block text-xs">Landline:</strong>
                  <span className="text-slate-700">{companyInfo.contact.landline}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900 block text-xs">Email:</strong>
                  <a href={`mailto:${companyInfo.contact.emails[0]}`} className="text-slate-700 hover:text-brand-600 block text-xs">
                    {companyInfo.contact.emails[0]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900 block text-xs">Working Hours:</strong>
                  <span className="text-slate-600 text-xs">{companyInfo.contact.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Right Lead Generation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-3 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Thank You! Consultation Request Received.
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Our project engineer in Jaipur will call you within 2 hours to confirm your free on-site survey.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
                    >
                      <option value="Residential Home / Villa">Residential Home / Villa</option>
                      <option value="Office / Corporate Workspace">Office / Corporate Workspace</option>
                      <option value="Shop / Retail Showroom">Shop / Retail Showroom</option>
                      <option value="Warehouse / Logistics Facility">Warehouse / Logistics Facility</option>
                      <option value="School / College Campus">School / College Campus</option>
                      <option value="Hospital / Healthcare Clinic">Hospital / Healthcare Clinic</option>
                      <option value="Farmhouse / Remote Land (Solar 4G)">Farmhouse / Remote Land (Solar 4G)</option>
                      <option value="Other Commercial Premise">Other Commercial Premise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Camera Quantity
                    </label>
                    <select
                      value={formData.cameraCount}
                      onChange={(e) => setFormData({...formData, cameraCount: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
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
                    Your Location in Jaipur / Rajasthan
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vaishali Nagar, Jaipur"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Additional Requirements / Questions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us any specific requirements (e.g. night vision, 36x zoom, mobile app viewing, wire-free)..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-brand-600 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-accent-red hover:bg-accent-redHover text-white font-bold text-xs sm:text-sm rounded-xl shadow-cta transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Free Consultation &amp; Site Visit</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
