import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerMarquee from './components/TickerMarquee';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Packages from './components/Packages';
import CameraSeries from './components/CameraSeries';
import Solutions from './components/Solutions';
import ProjectShowcase from './components/ProjectShowcase';
import Testimonials from './components/Testimonials';
import JaipurLocations from './components/JaipurLocations';
import CallToActionBanner from './components/CallToActionBanner';
import FaqSection from './components/FaqSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setQuoteInitialData(data);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setQuoteInitialData(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-brand-600 selection:text-white">
      
      {/* Sticky Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Ticker Marquee */}
        <TickerMarquee />

        {/* 3. Why Choose Sony Vision (Real Technician Photo + 4 Horizontal Cards) */}
        <WhyChooseUs onOpenQuote={handleOpenQuote} />

        {/* 4. CCTV Installation Services (6 Visual Cards) */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* 5. Popular CCTV Packages in Jaipur */}
        {/* <Packages onOpenQuote={handleOpenQuote} /> */}

        {/* 6. Clean Own-Brand Camera Gallery */}
        <CameraSeries onOpenQuote={handleOpenQuote} />

        {/* 7. Security Solutions by Sector */}
        {/* <Solutions onOpenQuote={handleOpenQuote} /> */}

        {/* 8. Project Deployments (ODI/IPL 2010, Bus Depot, Railway) */}
        {/* <ProjectShowcase onOpenQuote={handleOpenQuote} /> */}

        {/* 9. Client Reviews */}
        <Testimonials />

        {/* 10. Jaipur Service Locations */}
        <JaipurLocations onOpenQuote={handleOpenQuote} />

        {/* 11. High-Impact Call to Action Banner */}
        {/* <CallToActionBanner onOpenQuote={handleOpenQuote} /> */}

        {/* 12. Frequently Asked Questions */}
        <FaqSection onOpenQuote={handleOpenQuote} />

        {/* 13. Google Maps & Head Office Contact Section */}
        <MapSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenQuote={handleOpenQuote} />

      {/* Quotation / Free Site Survey Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        initialData={quoteInitialData}
      />

    </div>
  );
}
