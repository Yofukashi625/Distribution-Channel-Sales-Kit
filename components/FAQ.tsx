import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  // Set default open item to index 1 ("托福 (TOEFL) 跟雅思 (IELTS) 該怎麼選？")
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">常見問答</h2>
          <p className="text-xl text-slate-500">留學路上充滿疑問？這裡有你需要知道的一切。</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
                  isOpen ? 'border-slate-200 shadow-xl' : 'border-slate-100 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl font-black transition-colors ${
                    isOpen ? 'text-[#F7005A]' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                  }`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-10 border-t border-slate-50 pt-6">
                        <div className="text-slate-600 leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;