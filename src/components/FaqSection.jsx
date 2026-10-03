import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { faqsData } from '../data/services';
import { companyInfo } from '../data/companyInfo';

export default function FaqSection({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Got Questions About CCTV Installation?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Find quick answers regarding our camera brand, site inspection, remote viewing, and warranty support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-500 bg-brand-50/20 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call Box */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-slate-900">
            Have a custom requirement for your property?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Speak directly with our technical project manager in Jaipur.
          </p>
          <div className="pt-1">
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-cta-blue transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us: {companyInfo.contact.phones[0]}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
