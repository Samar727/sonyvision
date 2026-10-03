import React from 'react';
import { Building, MapPin, Phone, Mail, Clock, MessageSquare, Navigation, ExternalLink } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function MapSection() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Sumangal%20Tower%2C%20Near%20Kanwatiya%20Hospital%2C%20Shastri%20Nagar%2C%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Sumangal+Tower+Near+Kanwatiya+Hospital+Shastri+Nagar+Jaipur";

  const handleWhatsApp = () => {
    const text = `Hello Sony Vision,%0AI would like to connect regarding CCTV camera products and installation services in Jaipur.`;
    window.open(`https://wa.me/919414081702?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
              EXPERIENCE CENTER &amp; HEAD OFFICE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Visit Sony Vision in Jaipur
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl">
              Visit our Shastri Nagar head office for live hardware testing, camera demonstrations, and expert security consultation.
            </p>
          </div>

          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all self-start md:self-auto hover:shadow-md active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* 2-Column Grid: Map on Left (7 cols), Contact Card on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Google Maps Interactive View (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm min-h-[420px] sm:min-h-[480px] flex flex-col">
            <iframe
              title="Sony Vision Office Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-grow rounded-2xl"
            />
          </div>

          {/* Right: Sony Vision Head Office Details Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            
            {/* Office Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Sony Vision Head Office
                </h3>
                <span className="text-xs text-slate-500 font-medium">Sant Ska Enterprises • Est. 1993</span>
              </div>
            </div>

            {/* Office Details List */}
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

            {/* Instant WhatsApp Chat CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
