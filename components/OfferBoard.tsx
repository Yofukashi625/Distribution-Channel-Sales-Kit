
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, MapPin } from 'lucide-react';
import { OFFER_BOARD_DATA } from '../constants';

interface OfferBoardProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferBoard: React.FC<OfferBoardProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="fixed bottom-0 left-0 right-0 h-[90vh] bg-white rounded-t-[3rem] z-[70] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header - Compacted height and shrunk typography */}
            <div className="px-6 py-4 flex justify-between items-center border-b border-slate-100 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#F7005A] rounded-xl flex items-center justify-center text-white shadow-md shrink-0">
                  <Award size={20} />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight leading-none mb-1">2025 入學完整錄取榜單</h2>
                  <p className="text-slate-500 font-bold text-[10px] md:text-xs leading-none">放洋學員全球頂尖名校錄取紀錄匯整</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-slate-50">
              <div className="max-w-7xl mx-auto space-y-16 pb-12">
                {OFFER_BOARD_DATA.map((group, idx) => (
                  <motion.div 
                    key={idx} 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-1.5 h-8 bg-[#F7005A] rounded-full" />
                      <h3 className="text-2xl font-black text-slate-800">
                        {group.category}
                      </h3>
                    </div>
                    
                    {/* List/Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-200/50 rounded-t-xl text-slate-500 text-sm font-bold uppercase tracking-wider">
                      <div className="col-span-2">錄取生背景</div>
                      <div className="col-span-1">排名指標</div>
                      <div className="col-span-4">錄取學校</div>
                      <div className="col-span-5">申請系所 / 專業</div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
                      {group.items.map((item, i) => (
                        <div 
                          key={i}
                          className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-slate-50 transition-colors group"
                        >
                          {/* Student Background */}
                          <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2">
                              <span className="md:hidden text-xs font-bold text-slate-400">背景：</span>
                              <span className="font-bold text-slate-700 text-sm">{item.student}</span>
                            </div>
                          </div>

                          {/* Ranking */}
                          <div className="col-span-1 md:col-span-1">
                            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black whitespace-nowrap ${
                              item.rank.startsWith('US') ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                            }`}>
                              {item.rank}
                            </span>
                          </div>

                          {/* School */}
                          <div className="col-span-1 md:col-span-4">
                            <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-[#F7005A] shrink-0" />
                              <span className="text-base font-black text-slate-800 leading-tight group-hover:text-[#F7005A] transition-colors">
                                {item.school}
                              </span>
                            </div>
                          </div>

                          {/* Major */}
                          <div className="col-span-1 md:col-span-5">
                            <div className="flex flex-col">
                              <span className="md:hidden text-xs font-bold text-slate-400">系所：</span>
                              <span className="text-sm font-bold text-slate-600 leading-snug" title={item.major}>
                                {item.major}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer gradient fade */}
            <div className="h-10 bg-gradient-to-t from-white to-transparent pointer-events-none absolute bottom-0 left-0 right-0" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OfferBoard;
