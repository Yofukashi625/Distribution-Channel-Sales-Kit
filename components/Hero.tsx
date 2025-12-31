import React from 'react';
import { motion } from 'framer-motion';
import { FangYangLogo, STATS_DATA } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-pink-500 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-orange-400 rounded-full blur-[100px]" />
      </div>

      <div className="z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <FangYangLogo className="w-32 md:w-48 h-auto drop-shadow-xl" />
        </motion.div>

        {/* Status Capsule - Moved here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-bold text-slate-600">2026 申請季開跑</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4 mb-8"
        >
          {/* Title shrunk slightly as requested */}
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
            擁抱未知，探索本質
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 font-medium">
            不只是代辦，更是你的留學戰略夥伴。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-slate-400 mb-16 max-w-2xl mx-auto"
        >
          2025 年入學榜單再創高峰，量身打造你的名校入場券
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-[#F7005A] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#F7005A] mb-2">
                {stat.value}<span className="text-lg text-slate-500 ml-1">{stat.suffix}</span>
              </div>
              <div className="text-slate-800 font-bold text-base">{stat.label}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;