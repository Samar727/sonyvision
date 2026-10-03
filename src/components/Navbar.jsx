import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Shield, Menu, X, ChevronRight, Award, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Installation Packages', href: '#packages' },
    { name: 'Camera Series', href: '#cameras' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Projects', href: '#projects' },
    { name: 'Service Areas', href: '#locations' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Make in India Certified Brand (Est. 1993)
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              Shastri Nagar, Jaipur (Rajasthan)
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Mon - Sat: 9:00 AM - 8:00 PM
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${companyInfo.contact.phones[0]}`} 
              className="hover:text-amber-400 font-bold text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              Hotline: {companyInfo.contact.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-white transition-all duration-300 ${
        isScrolled 
          ? 'py-2.5 shadow-md border-b border-slate-200' 
          : 'py-3.5 border-b border-slate-100 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center shadow-md">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  SONY <span className="text-brand-600">VISION</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200 uppercase">
                  CCTV
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold tracking-tight">
                Sant Ska Enterprises • Est. 1993
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.contact.landline}`}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-brand-600 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{companyInfo.contact.landline}</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="px-4 py-2.5 text-xs font-bold text-white bg-accent-red hover:bg-accent-redHover rounded-lg shadow-cta transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Book Free Site Visit</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="p-2 bg-brand-50 text-brand-600 rounded-lg border border-brand-200"
              aria-label="Call Direct"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-800 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-center text-xs font-bold text-white bg-accent-red hover:bg-accent-redHover rounded-lg shadow-cta"
            >
              Book Free Site Visit &amp; Get Quote
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${companyInfo.contact.phones[0]}`}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 rounded-lg border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919414081702?text=Hello%20Sony%20Vision,%20I%20am%20interested%20in%20CCTV%20Camera%20Installation%20services%20in%20Jaipur."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
