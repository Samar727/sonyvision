import React from 'react';
import { Shield, Phone, Mail, MapPin, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Footer({ onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      
      {/* Top Trust & Call-To-Action Banner */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 justify-center md:justify-start">
                <span>Government of India "Be Vocal About Local" Certified</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-[11px] text-slate-500">
                Ministry of Electronics &amp; IT • Certificate #{companyInfo.certificate.certificateNo} • Make in India
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl border border-slate-200 flex items-center gap-2 transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{companyInfo.contact.phones[0]}</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 bg-accent-red hover:bg-accent-redHover text-white font-bold rounded-xl shadow-cta transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>Book Free Site Inspection</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center">
              <img
                src="/images/sony_vision_logo.png"
                alt="Sony Vision - For Security & Surveillance"
                className="h-10 sm:h-11 w-auto object-contain rounded-md"
              />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Sony Vision [Sant Ska Enterprises] is a trusted CCTV camera brand and turnkey surveillance engineering company in Jaipur, Rajasthan since 1993.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-500 pt-2 border-t border-slate-200/80">
              <div>• Founder &amp; Proprietor: <strong className="text-slate-800">D. K. Soni</strong></div>
              <div>• 25+ Certified Technicians &amp; 5 Independent Project Teams</div>
              <div>• 100% Statutory Compliances (Zero dues till date)</div>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Camera Catalog', href: '#cameras' },
                { name: 'Our Services', href: '#services' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Customer Reviews', href: '#testimonials' },
                { name: 'Jaipur Locations', href: '#locations' },
                { name: 'Office Map', href: '#map-location' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-600 hover:text-brand-600 hover:underline transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CCTV Hardware Range (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Hardware &amp; Products
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>• 4MP IP Pro Dome &amp; Bullet Cameras</li>
              <li>• 5MP Speed Dome PTZ (36x Optical Zoom)</li>
              <li>• Solar 4G Wireless Outdoor Cameras</li>
              <li>• 3MP Full Color Night Vision Series</li>
              <li>• 360° Indoor Fisheye &amp; Smart Robo Cams</li>
              <li>• 6-in-1 H.265+ 4K XVR / DVR Systems</li>
              <li>• Enterprise Video Management Software</li>
            </ul>
          </div>

          {/* Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Jaipur Head Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <a href={`tel:${companyInfo.contact.phones[0]}`} className="font-semibold text-slate-800 hover:text-brand-600">
                  {companyInfo.contact.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{companyInfo.contact.landline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <a href={`mailto:${companyInfo.contact.emails[0]}`} className="text-slate-700 hover:text-brand-600 truncate">
                  {companyInfo.contact.emails[0]}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {currentYear} Sony Vision [Sant Ska Enterprises]. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>Make in India Certified</span>
            <span>•</span>
            <span>Established 1993</span>
            <span>•</span>
            <span>Jaipur, Rajasthan</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
