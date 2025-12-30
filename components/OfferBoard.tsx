import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 h-[85vh] bg-white rounded-t-[3rem] z-[70] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-center border-b border-slate-100 sticky top-0 bg-white z-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900">2024-2025 完整榜單</h2>
                <p className="text-slate-500 font-medium">見證放洋學員邁向世界舞台的足跡</p>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12 no-scrollbar">
              {OFFER_BOARD_DATA.map((group, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#F7005A] sticky top-0 bg-white py-2 z-10">
                    {group.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.items.map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -4 }}
                        className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">{item.rank}</span>
                          <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded text-[10px] font-bold">Offer!</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-800 mb-1 leading-tight">{item.school}</h4>
                        <p className="text-sm font-bold text-slate-500 mb-4">{item.major}</p>
                        <div className="pt-4 border-t border-slate-200 text-xs font-medium text-slate-400">
                          錄取生背景：{item.student}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
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