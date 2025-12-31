import React from 'react';
import StickySection from './StickySection';
import { TIMELINE_STEPS } from '../constants';
import { Book, FileText, Send, Award, Stamp, Plane, Info } from 'lucide-react';

const icons = {
  'book': <Book size={32} />,
  'file': <FileText size={32} />,
  'send': <Send size={32} />,
  'award': <Award size={32} />,
  'passport': <Stamp size={32} />,
  'plane': <Plane size={32} />
};

const Timeline: React.FC = () => {
  // Logic to ensure the last item slides fully to the left side:
  // We calculate target sticky width to be enough for the last card to reach the left half.
  const lastStepStartIndex = TIMELINE_STEPS.length - 1;
  const lastStepStartVw = 50 + (lastStepStartIndex * 40);
  const targetStickyWidth = lastStepStartVw + 100;
  
  return (
    <StickySection width={`${targetStickyWidth}vw`} background="bg-[#F7005A]">
      <div className="min-w-[50vw] px-12 md:px-24 flex flex-col justify-center">
        <h2 className="text-6xl font-black text-white">
          申請時間軸<br />
          <span className="text-2xl font-normal block mt-4 opacity-80">全程掌控，引導學生掌握留學進度</span>
        </h2>
        
        {/* Disclaimer for Timeline */}
        <div className="mt-12 flex items-center gap-2 text-white/70 bg-white/10 px-6 py-3 rounded-full w-fit backdrop-blur-md">
          <span className="flex-shrink-0"><Info size={18} /></span>
          <span className="text-sm font-bold">此為常態規劃，實際排程將依學生個別評估後調整</span>
        </div>
      </div>

      {TIMELINE_STEPS.map((step, index) => (
        <div key={index} className="min-w-[40vw] h-[60vh] flex flex-col justify-center relative pt-12">
            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] mr-12 relative hover:-translate-y-4 transition-all duration-500 group">
                <div className="absolute -top-6 left-10 bg-[#FFA534] text-white px-6 py-2 rounded-xl font-black shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform">
                    {step.period}
                </div>
                
                <div className="text-[#F7005A] mb-6 transform group-hover:scale-110 transition-transform origin-left">
                    {icons[step.icon as keyof typeof icons]}
                </div>
                
                <h3 className="text-3xl font-black text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
            </div>
        </div>
      ))}
    </StickySection>
  );
};

export default Timeline;