import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEMO_PROFILES } from '../constants';
import { CheckCircle, AlertCircle, Star } from 'lucide-react';

interface SchoolSelectionProps {
  onOpenBoard: () => void;
}

const SchoolSelection: React.FC<SchoolSelectionProps> = ({ onOpenBoard }) => {
  const [activeProfile, setActiveProfile] = useState(DEMO_PROFILES[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">選校初步推薦 DEMO</h2>
          <p className="text-xl text-slate-600">預約專人諮詢，獲得您的專屬落點分析</p>
        </div>

        {/* Controller */}
        <div className="flex justify-center gap-4 mb-12">
          {DEMO_PROFILES.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActiveProfile(profile)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeProfile.id === profile.id
                  ? 'bg-[#F7005A] text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              模擬：{profile.name}
            </button>
          ))}
        </div>

        {/* Profile Stats */}
        <div className="flex justify-center gap-4 md:gap-12 mb-12 text-slate-700 flex-wrap">
          <div className="bg-white px-6 py-2 rounded-lg shadow-sm border border-slate-100">
            <span className="font-bold block text-sm text-slate-400">GPA</span>
            <span className="text-xl font-black">{activeProfile.gpa}</span>
          </div>
          <div className="bg-white px-6 py-2 rounded-lg shadow-sm border border-slate-100">
            <span className="font-bold block text-sm text-slate-400">TOEFL</span>
            <span className="text-xl font-black">{activeProfile.toefl}</span>
          </div>
          <div className="bg-white px-6 py-2 rounded-lg shadow-sm border border-slate-100">
            <span className="font-bold block text-sm text-slate-400">GRE/GMAT</span>
            <span className="text-xl font-black">{activeProfile.gre}</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeProfile.recommendations.map((tier) => (
              <motion.div
                key={activeProfile.id + tier.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col"
              >
                <div className={`p-4 ${tier.color} font-bold text-center text-lg flex items-center justify-center gap-2`}>
                  {tier.type === 'Dream' && <Star size={20} />}
                  {tier.type === 'Match' && <CheckCircle size={20} />}
                  {tier.type === 'Safety' && <AlertCircle size={20} />}
                  {tier.label}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate-500 mb-6 text-sm text-center h-10">{tier.description}</p>
                  <div className="space-y-3">
                    {tier.schools.map((school, i) => (
                      <div key={i} className="bg-slate-50 p-3 rounded-lg text-center font-bold text-slate-700 border border-slate-100">
                        {school}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
            <button 
              onClick={onOpenBoard}
              className="bg-[#FFA534] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-orange-500 transition-all hover:scale-105 active:scale-95 animate-pulse"
            >
                點擊查看完整榜單
            </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolSelection;