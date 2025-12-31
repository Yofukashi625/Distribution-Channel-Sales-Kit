import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOCUMENTS } from '../constants';
import { FileText, PenTool, Users, Sparkles, Layout, Target, BookOpen } from 'lucide-react';

const icons = {
  '04': <FileText size={40} />,
  '05': <PenTool size={40} />,
  '06': <Users size={40} />
};

const DOMAIN_EXAMPLES = [
  {
    id: 'cs',
    title: '軟體工程/數據科學',
    sub: 'SOP 或 個人簡歷 (Resume)',
    draft: "I was a leader in a school project. We built an app for food delivery. I managed the team and solved many bugs. It was a good experience for my coding skills.",
    optimized: "Orchestrated a cross-functional team of five to develop a full-stack food delivery application. I architected the backend logic using Node.js, reducing API latency by 30%. This project not only sharpened my technical acumen but also demonstrated my ability to lead under agile environments.",
    insights: [
      { label: "從「陳述事實」轉向「展現影響力」", desc: "使用數據（30% latency reduction）量化結果，不再僅是提到做了什麼。" },
      { label: "精準技術關鍵字排版", desc: "主動帶入 Node.js, API latency, Agile 等審核委員重視的技術動詞。" },
      { label: "強勢動詞運用", desc: "使用 Orchestrated (策劃) 與 Architected (架構) 展現更高階職位視野。" }
    ]
  },
  {
    id: 'mba',
    title: '商學院/MBA',
    sub: 'Career Goals 或 Why School',
    draft: "I want to study an MBA because I want to be a better manager in a big company. I think your school has a great reputation and can help me find a good job in the future.",
    optimized: "My objective is to transition into a strategic consultancy role, specifically focusing on ESG integration within supply chains. Your program’s 'Social Innovation Lab' aligns perfectly with my ambition to bridge the gap between corporate profitability and sustainable development.",
    insights: [
      { label: "具體化的職業路徑", desc: "將模糊的「好經理」具象化為「ESG 戰略顧問」，提供清晰的職業藍圖。" },
      { label: "建立「強連結」", desc: "直接指名學校的特定資源（Social Innovation Lab），證明已做深度研究。" },
      { label: "提升思維層次感", desc: "使用 Bridge the gap 展現申請者具備解決複雜社會與商業問題的高階思維。" }
    ]
  }
];

const Documents: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState(DOMAIN_EXAMPLES[0]);
  const [isOptimized, setIsOptimized] = useState(false);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
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
              <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-white transition-colors">{doc.title}</h3>
              <p className="text-sm font-semibold text-slate-400 mb-6 group-hover:text-pink-100 transition-colors">{doc.enTitle}</p>
              <p className="text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors">{doc.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Interactive Integrated Solution */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-800 overflow-hidden relative shadow-2xl"
        >
          <div className="mb-12">
            <h4 className="text-[#F7005A] font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-12 h-1 bg-[#F7005A] rounded-full" />
              放洋留學代辦申請整合解決方案
            </h4>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
              透過書審文件建立與學校溝通的渠道
            </h3>
            <p className="text-slate-400 text-lg">依據各校所看重的特質，精準使用詞彙凸顯個人特色</p>
          </div>

          {/* Domain Tabs */}
          <div className="flex flex-wrap gap-4 mb-10">
            {DOMAIN_EXAMPLES.map((domain) => (
              <button
                key={domain.id}
                onClick={() => { setActiveDomain(domain); setIsOptimized(false); }}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeDomain.id === domain.id 
                    ? 'bg-[#F7005A] text-white shadow-lg' 
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {domain.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Comparison Blocks - Heights follow text content */}
            <div className="flex flex-col gap-6">
              {/* Top Area: Original Draft */}
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col">
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Original Draft</span>
                <p className="text-slate-400 font-mono text-sm leading-relaxed">{activeDomain.draft}</p>
              </div>

              {/* Bottom Area: Optimized or CTA */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {!isOptimized ? (
                    <motion.div 
                      key="cta"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#F7005A]/30 rounded-2xl bg-[#F7005A]/5 group cursor-pointer transition-colors hover:bg-[#F7005A]/10 min-h-[160px]"
                      onClick={() => setIsOptimized(true)}
                    >
                       <div className="w-16 h-16 bg-[#F7005A] rounded-full flex items-center justify-center text-white shadow-xl mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles size={24} />
                       </div>
                       <p className="text-white font-bold text-xl">啟動顧問一鍵優化</p>
                       <p className="mt-2 text-slate-500 text-sm">見證專業修辭帶來的錄取率提升</p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="optimized"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col relative"
                    >
                      <button onClick={() => setIsOptimized(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors">✕</button>
                      <span className="text-xs font-black text-[#F7005A] uppercase tracking-widest mb-4 flex items-center gap-1">
                        <Sparkles size={14} /> Optimized by Experts
                      </span>
                      <p className="text-slate-800 font-mono text-sm leading-relaxed">
                        {activeDomain.optimized.split(' ').map((word, i) => {
                          const highlights = ["Orchestrated", "architected", "transition", "strategic", "perfectly", "bridge", "Specifically"];
                          const cleanWord = word.replace(/[.,'']/g, '');
                          const isHighlighted = highlights.some(h => cleanWord.toLowerCase() === h.toLowerCase());
                          return (
                            <span key={i} className={isHighlighted ? 'bg-pink-100 font-bold text-[#F7005A] px-1 rounded inline-block mb-1' : ''}>
                              {word}{' '}
                            </span>
                          );
                        })}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Insights */}
            <div className="flex flex-col justify-center py-4">
              <div className="mb-8 px-4">
                <h4 className="text-xl font-bold text-white mb-2">{activeDomain.sub}</h4>
                <p className="text-slate-500">專業顧問會針對您的職涯背景，進行以下維度的優化：</p>
              </div>

              <div className="space-y-4">
                {activeDomain.insights.map((insight, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isOptimized ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 0 }}
                    className="flex gap-4 p-4 rounded-xl transition-all"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F7005A] text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-white font-bold mb-1">{insight.label}</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">{insight.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Major Points Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-xl">
                <Layout className="text-[#F7005A] mb-6" size={40} />
                <h4 className="text-2xl font-bold text-slate-800 mb-4">邏輯重塑</h4>
                <span className="text-xs font-bold text-slate-400 block mb-4 uppercase tracking-tighter">Structural Reorganization</span>
                <p className="text-slate-600 leading-relaxed">我們不只改英文，更重新梳理學生的經歷順序，確保最重要的亮點在第一眼被看見。</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-xl">
                <Target className="text-[#F7005A] mb-6" size={40} />
                <h4 className="text-2xl font-bold text-slate-800 mb-4">痛點打擊</h4>
                <span className="text-xs font-bold text-slate-400 block mb-4 uppercase tracking-tighter">Pain Point Alignment</span>
                <p className="text-slate-600 leading-relaxed">針對不同院校的偏好（如：頂校看重領導力、技術力），客製化調整敘事側重點。</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-xl">
                <BookOpen className="text-[#F7005A] mb-6" size={40} />
                <h4 className="text-2xl font-bold text-slate-800 mb-4">敘事去平庸化</h4>
                <span className="text-xs font-bold text-slate-400 block mb-4 uppercase tracking-tighter">De-cluttering & Impact</span>
                <p className="text-slate-600 leading-relaxed">刪除贅字，將平凡的日常工作轉化為具備「問題、行動、結果 (STAR)」架構的成功故事。</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Documents;