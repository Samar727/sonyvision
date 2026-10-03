import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Shield, Menu, X, ChevronRight, Award, MapPin } from 'lucide-react';
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

  // Only 5 clean, essential quick links
  const navLinks = [
    { name: 'Home', href: '#home' },
    // { name: 'CCTV Packages', href: '#packages' },
    { name: 'Camera Range', href: '#cameras' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
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
      {/* Top Clean Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Make in India Certified Brand (Est. 1993)
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-brand-400" />
              Shastri Nagar, Jaipur
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Mon - Sat: 9:00 AM - 8:00 PM</span>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${companyInfo.contact.phones[0]}`} 
              className="hover:text-amber-400 font-bold text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-brand-400" />
              Direct: {companyInfo.contact.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-white transition-all duration-300 ${
        isScrolled 
          ? 'py-2.5 shadow-md border-b border-slate-200' 
          : 'py-3.5 border-b border-slate-200/80 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 py-0.5">
            <img
              src="/images/sony_vision_logo.png"
              alt="Sony Vision - For Security & Surveillance"
              className="h-9 sm:h-11 w-auto object-contain rounded-md hover:opacity-95 transition-opacity"
            />
          </a>

          {/* Clean 5 Quick Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-brand-600 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-brand-600">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{companyInfo.contact.phones[0]}</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 text-xs font-bold text-white bg-accent-red hover:bg-accent-redHover rounded-lg shadow-cta transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Book Free Site Visit</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-sm font-bold text-slate-800 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors flex items-center justify-between"
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
