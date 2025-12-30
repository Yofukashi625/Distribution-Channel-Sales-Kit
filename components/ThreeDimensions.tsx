import React from 'react';
import StickySection from './StickySection';
import { THREE_DIMENSIONS } from '../constants';
import { motion } from 'framer-motion';

const ThreeDimensions: React.FC = () => {
  return (
    <StickySection width="250vw" background="bg-slate-900">
      <div className="flex items-center min-w-[50vw] px-12 md:px-24">
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            首先，<br />讓我們認識<br /><span className="text-[#F7005A]">留學三圍</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-md">
            申請國外名校的硬實力指標，決定了你第一階段的落點分析。
          </p>
        </div>
      </div>

      {THREE_DIMENSIONS.map((dim, index) => (
        <motion.div 
          key={dim.id}
          className="min-w-[80vw] md:min-w-[50vw] h-[70vh] flex items-center justify-center p-8"
        >
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl h-full w-full flex flex-col justify-center relative overflow-hidden group">
            {/* Number Background */}
            <div className="absolute -right-5 -bottom-10 text-[15rem] font-black text-slate-100 opacity-50 select-none group-hover:scale-110 transition-transform duration-500">
              0{dim.id}
            </div>
            
            <div className="relative z-10">
              <div 
                className="w-20 h-20 rounded-2xl mb-8 flex items-center justify-center text-white text-3xl font-bold shadow-lg"
                style={{ backgroundColor: dim.color }}
              >
                0{dim.id}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                {dim.title}
              </h3>
              <p className="text-2xl text-[#F7005A] font-medium mb-8">
                {dim.subtitle}
              </p>
              <ul className="space-y-4">
                {dim.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-lg text-slate-600">
                    <span className="mr-3 mt-1.5 w-2 h-2 rounded-full bg-slate-400" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </StickySection>
  );
};

export default ThreeDimensions;