import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerMarquee from './components/TickerMarquee';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import CameraSeries from './components/CameraSeries';
import Services from './components/Services';
import Solutions from './components/Solutions';
import ProjectShowcase from './components/ProjectShowcase';
import Testimonials from './components/Testimonials';
import JaipurLocations from './components/JaipurLocations';
import CallToActionBanner from './components/CallToActionBanner';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CameraDetailModal from './components/CameraDetailModal';
import QuoteModal from './components/QuoteModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedCamera, setSelectedCamera] = useState(null);
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

        {/* 3. Popular CCTV Packages in Jaipur */}
        <Packages onOpenQuote={handleOpenQuote} />

        {/* 4. Why Choose Sony Vision (Photo + 4 Feature Cards) */}
        <WhyChooseUs onOpenQuote={handleOpenQuote} />

        {/* 5. Own Brand Camera Series */}
        <CameraSeries 
          onSelectCamera={(cam) => setSelectedCamera(cam)} 
          onOpenQuote={handleOpenQuote} 
        />

        {/* 6. CCTV Installation Services (6 Visual Cards) */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* 7. Security Solutions by Sector */}
        <Solutions onOpenQuote={handleOpenQuote} />

        {/* 8. Project Deployments (ODI/IPL 2010, Bus Depot, Railway) */}
        <ProjectShowcase onOpenQuote={handleOpenQuote} />

        {/* 9. Client Reviews */}
        <Testimonials />

        {/* 10. Jaipur Service Locations */}
        <JaipurLocations onOpenQuote={handleOpenQuote} />

        {/* 11. High-Impact Call to Action Banner */}
        <CallToActionBanner onOpenQuote={handleOpenQuote} />

        {/* 12. Frequently Asked Questions */}
        <FaqSection onOpenQuote={handleOpenQuote} />

        {/* 13. Contact & Free Survey Request Form */}
        <ContactSection prefillData={quoteInitialData} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenQuote={handleOpenQuote} />

      {/* Camera Technical Datasheet Modal */}
      {selectedCamera && (
        <CameraDetailModal
          camera={selectedCamera}
          onClose={() => setSelectedCamera(null)}
          onOpenQuote={handleOpenQuote}
        />
      )}

      {/* Quotation / Free Site Survey Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        initialData={quoteInitialData}
      />

    </div>
  );
}
