import React from 'react';
import { motion } from 'framer-motion';
import { ANALYSIS_STAGES } from '../constants';

const Analysis: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F7005A] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFA534] opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
        >
          {/* Section Accent Label */}
          <span className="inline-block text-[#F7005A] text-sm font-black tracking-[0.2em] uppercase mb-4 opacity-80">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            落點分析流程化<br />
            更有效地梳理學生需求
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            透過六大關鍵進程，確保選校表符合升學方向。<br />
            從背景分析到最終確認，每一步都精準到位。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ANALYSIS_STAGES.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-[#F7005A] transition-all duration-300 group shadow-lg flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[#F7005A] tracking-wider uppercase">Stage {stage.id}</span>
                {/* Changed from Number to Icon */}
                <div className="text-slate-300 group-hover:text-[#F7005A] transition-all duration-300 transform group-hover:scale-110">
                  {stage.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-[#F7005A] transition-colors">{stage.title}</h3>
              <p className="text-slate-600 leading-relaxed">{stage.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analysis;