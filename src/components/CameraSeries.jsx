import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, X, ZoomIn, 
  Pause, Play 
} from 'lucide-react';
import { realProductGallery } from '../data/cameraProducts';

export default function CameraSeries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  // Touch / swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Responsive items per view (1 on mobile, 2 on md+)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = realProductGallery.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Ensure currentIndex does not exceed maxIndex when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  // Auto-advance slider
  useEffect(() => {
    if (isPaused || lightboxImage) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, lightboxImage, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="cameras" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Clean Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-bold text-accent-red uppercase tracking-wider block mb-1">
              PRODUCT CATALOG &amp; HARDWARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sony Vision Camera Series
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-95 border border-slate-200"
              title={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
              aria-label={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
            >
              {isPaused ? <Play className="w-4 h-4 fill-current text-slate-800" /> : <Pause className="w-4 h-4 text-slate-800" />}
            </button>

            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-95 border border-slate-200"
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 text-slate-800" />
            </button>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-95 border border-slate-200"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 text-slate-800" />
            </button>
          </div>
        </div>

        {/* 2-Image Continuous Slider Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Main Slider Viewport */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-3 shadow-inner">
            <div 
              className="flex transition-transform duration-700 ease-in-out -mx-2 sm:-mx-3"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {realProductGallery.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="flex-shrink-0 w-full md:w-1/2 px-2 sm:px-3"
                >
                  <div 
                    onClick={() => setLightboxImage(item)}
                    className="relative group/slide bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 hover:border-slate-400 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl flex items-center justify-center p-2 sm:p-4 min-h-[440px] sm:min-h-[560px] lg:min-h-[640px] max-h-[720px]"
                  >
                    {/* Product Slide Image (Maximizing container size) */}
                    <img
                      src={item.image}
                      alt="Sony Vision Product"
                      className="w-full h-full max-h-[600px] lg:max-h-[680px] object-contain transform group-hover/slide:scale-[1.01] transition-transform duration-300 select-none"
                      loading={idx < 4 ? "eager" : "lazy"}
                      draggable="false"
                    />

                    {/* Minimal Hover Zoom Button Overlay */}
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-slate-900/90 text-white flex items-center justify-center shadow-xl transform scale-90 group-hover/slide:scale-100 transition-transform">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-slate-800 border border-slate-200 shadow-xl flex items-center justify-center transition-all hover:bg-slate-50 hover:scale-110 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-slate-800 border border-slate-200 shadow-xl flex items-center justify-center transition-all hover:bg-slate-50 hover:scale-110 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-800" />
          </button>

        </div>

        {/* Minimal Bottom Indicators */}
        <div className="mt-5 flex items-center justify-between">
          {/* Progress Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-7 bg-slate-900 shadow-sm'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Clean Counter */}
          <div className="text-xs font-medium text-slate-500">
            Slide <strong className="text-slate-900">{currentIndex + 1}</strong> of <strong className="text-slate-900">{maxIndex + 1}</strong>
          </div>
        </div>

      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-3 sm:p-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all shadow-md active:scale-95"
              aria-label="Close Fullscreen View"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High Resolution Image */}
            <div className="w-full flex items-center justify-center max-h-[82vh] overflow-hidden rounded-xl bg-slate-50 p-2">
              <img
                src={lightboxImage.image}
                alt="Sony Vision Product High Resolution"
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
