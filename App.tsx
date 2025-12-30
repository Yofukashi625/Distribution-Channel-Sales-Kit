import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ThreeDimensions from './components/ThreeDimensions';
import Documents from './components/Documents';
import Analysis from './components/Analysis';
import SchoolSelection from './components/SchoolSelection';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import OfferBoard from './components/OfferBoard';

function App() {
  const [isOfferBoardOpen, setIsOfferBoardOpen] = useState(false);
  
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOfferBoardOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOfferBoardOpen]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-[#F7005A] selection:text-white">
      <main>
        <Hero />
        <ThreeDimensions />
        <Documents />
        <Analysis />
        <SchoolSelection onOpenBoard={() => setIsOfferBoardOpen(true)} />
        <Timeline />
      </main>
      <Footer />

      <OfferBoard 
        isOpen={isOfferBoardOpen} 
        onClose={() => setIsOfferBoardOpen(false)} 
      />
    </div>
  );
}

export default App;