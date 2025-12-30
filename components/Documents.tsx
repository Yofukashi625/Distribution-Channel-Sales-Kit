import React from 'react';
import { motion } from 'framer-motion';
import { DOCUMENTS } from '../constants';
import { FileText, PenTool, Users } from 'lucide-react';

const icons = {
  '04': <FileText size={40} />,
  '05': <PenTool size={40} />,
  '06': <Users size={40} />
};

const Documents: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
            除了三圍，你需要準備哪些 <span className="text-[#F7005A]">軟實力文件</span>？
          </h2>
          <div className="w-24 h-2 bg-[#F7005A] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCUMENTS.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-[#F7005A] hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-default"
            >
              <div className="absolute top-6 right-8 text-4xl font-black text-slate-200 group-hover:text-white/20 transition-colors">
                {doc.id}
              </div>
              
              <div className="mb-6 text-[#F7005A] group-hover:text-white transition-colors">
                {icons[doc.id as keyof typeof icons]}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-white transition-colors">
                {doc.title}
              </h3>
              <p className="text-sm font-semibold text-slate-400 mb-6 group-hover:text-pink-100 transition-colors">
                {doc.enTitle}
              </p>
              
              <p className="text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors">
                {doc.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 bg-slate-100 rounded-xl p-6 text-center border-l-4 border-[#F7005A]"
        >
            <h4 className="text-xl font-bold text-slate-700">放洋留遊學能從旁輔佐你完成以上資料！</h4>
            <p className="text-slate-500 mt-2">我們擁有專業的外師潤稿團隊與顧問諮詢，挖掘你獨特的故事。</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Documents;