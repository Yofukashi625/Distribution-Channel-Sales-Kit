import React from 'react';
import StickySection from './StickySection';
import { TIMELINE_STEPS } from '../constants';
import { Book, FileText, Send, Award, Stamp, Plane } from 'lucide-react';

const icons = {
  'book': <Book size={32} />,
  'file': <FileText size={32} />,
  'send': <Send size={32} />,
  'award': <Award size={32} />,
  'passport': <Stamp size={32} />,
  'plane': <Plane size={32} />
};

const Timeline: React.FC = () => {
  return (
    <StickySection width="300vw" background="bg-[#F7005A]">
      <div className="min-w-[50vw] px-12 md:px-24 flex items-center">
        <h2 className="text-6xl font-black text-white">
          美加英<br />申請時間軸<br />
          <span className="text-2xl font-normal block mt-4 opacity-80">全程掌控，引導學生掌握留學進度</span>
        </h2>
      </div>

      {TIMELINE_STEPS.map((step, index) => (
        <div key={index} className="min-w-[80vw] md:min-w-[40vw] h-[60vh] flex flex-col justify-center relative pt-12">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/30 -z-10" />
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-white rounded-full -translate-x-2 -translate-y-1.5" />

            <div className="bg-white p-8 rounded-2xl shadow-2xl mr-8 relative hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-8 left-8 bg-[#FFA534] text-white px-4 py-2 rounded-lg font-bold shadow-md">
                    {step.period}
                </div>
                <div className="text-[#F7005A] mb-4">
                    {icons[step.icon as keyof typeof icons]}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
            </div>
        </div>
      ))}
    </StickySection>
  );
};

export default Timeline;