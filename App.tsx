
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ThreeDimensions from './components/ThreeDimensions';
import Documents from './components/Documents';
import Analysis from './components/Analysis';
import CoordinatePlot from './components/CoordinatePlot';
import SchoolSelection from './components/SchoolSelection';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import OfferBoard from './components/OfferBoard';
import QuotationSystem from './components/QuotationSystem';
import { Calculator } from 'lucide-react';

function App() {
  const [isOfferBoardOpen, setIsOfferBoardOpen] = useState(false);
  const [isQuotationOpen, setIsQuotationOpen] = useState(false);
  
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOfferBoardOpen || isQuotationOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOfferBoardOpen, isQuotationOpen]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-[#F7005A] selection:text-white">
      <main>
        <Hero />
        <ThreeDimensions />
        <Documents />
        <Analysis />
        <CoordinatePlot />
        <SchoolSelection onOpenBoard={() => setIsOfferBoardOpen(true)} />
        <Timeline />
        <FAQ />
      </main>
      <Footer />

      {/* Floating Action Button for Quotation */}
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={() => setIsQuotationOpen(true)}
          className="group relative w-16 h-16 bg-[#F7005A] text-white rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(247,0,90,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <Calculator size={28} />
          {/* Label Tooltip */}
          <div className="absolute right-full mr-4 bg-slate-900 text-white text-sm font-black px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0">
             顧問報價系統
          </div>
        </button>
      </div>

      <OfferBoard 
        isOpen={isOfferBoardOpen} 
        onClose={() => setIsOfferBoardOpen(false)} 
      />

      <QuotationSystem 
        isOpen={isQuotationOpen}
        onClose={() => setIsQuotationOpen(false)}
      />
    </div>
  );
}

export default App;
