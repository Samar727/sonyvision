import React from 'react';
import { Shield, Phone, Mail, MapPin, Award, ChevronRight, Clock } from 'lucide-react';
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
    <footer className="bg-slate-950 text-slate-400 text-xs">
      
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Government of India "Be Vocal About Local" Certified
              </div>
              <div className="text-[11px] text-slate-400">
                Ministry of Electronics &amp; IT • Certificate #{companyInfo.certificate.certificateNo}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>{companyInfo.contact.phones[0]}</span>
            </a>
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2 bg-accent-red hover:bg-accent-redHover text-white font-bold rounded-lg shadow-cta"
            >
              Book Free Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-white">
                SONY <span className="text-brand-400">VISION</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Sony Vision [Sant Ska Enterprises] is a leading CCTV camera manufacturer 
              and turnkey installation firm based in Jaipur, Rajasthan since 1993.
            </p>

            <div className="space-y-1 text-[11px] text-slate-400 pt-2">
              <div>• Founder &amp; Proprietor: <strong className="text-slate-200">D. K. Soni</strong></div>
              <div>• 25+ Certified Technicians &amp; 5 Independent Project Teams</div>
              <div>• 100% Statutory Compliances (No dues till date)</div>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                { name: 'Home', href: '#home' },
                { name: 'CCTV Packages', href: '#packages' },
                { name: 'Camera Series', href: '#cameras' },
                { name: 'Our Services', href: '#services' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Industry Solutions', href: '#solutions' },
                { name: 'Projects', href: '#projects' },
                { name: 'Service Areas', href: '#locations' },
                { name: 'FAQs', href: '#faq' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CCTV Hardware Range (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Own Brand Products
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>4MP IP Pro Dome &amp; Bullet Cameras</li>
              <li>5MP Speed Dome PTZ (36x Optical Zoom)</li>
              <li>Solar 4G Wireless Outdoor Cameras</li>
              <li>3MP Starlight ColorVU Night Vision</li>
              <li>32/64-Channel Enterprise 4K NVRs</li>
              <li>Biometric Attendance &amp; Smart Glass Locks</li>
              <li>Automated Vehicle Boom Barriers</li>
            </ul>
          </div>

          {/* Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Jaipur Head Office
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{companyInfo.contact.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{companyInfo.contact.landline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="truncate">{companyInfo.contact.emails[0]}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {currentYear} Sony Vision [Sant Ska Enterprises]. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Make in India Certified Brand</span>
            <span>•</span>
            <span>Est. 1993</span>
            <span>•</span>
            <span>Non-Ecommerce Lead Website</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
