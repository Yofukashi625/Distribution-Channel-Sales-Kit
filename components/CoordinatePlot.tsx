import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { PLOT_DATA } from '../constants';
import { MapPin, Trophy } from 'lucide-react';

type Tab = 'US' | 'Global';

const Counter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const CoordinatePlot: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('US');
  const [hoveredDot, setHoveredDot] = useState<any | null>(null);

  const getPosition = (gpa: number, score: number) => {
    // Y-axis: GPA 2.5 - 4.0
    const y = ((4.0 - gpa) / (4.0 - 2.5)) * 100;
    
    // X-axis based on Tab
    let x = 0;
    if (activeTab === 'US') {
      // Score: 80 - 120
      x = ((score - 80) / (120 - 80)) * 100;
    } else {
      // Score: 4.5 - 9.0
      x = ((score - 4.5) / (9.0 - 4.5)) * 100;
    }
    return { x, y };
  };

  const getDotColor = (rankStr: string) => {
    // Extract numerical rank (e.g., "US #6" -> 6, "QS #33" -> 33)
    const rankNum = parseInt(rankStr.replace(/[^0-9]/g, ''), 10);
    
    if (rankNum < 20) return '#FF4B7D'; // Pink
    if (rankNum <= 50) return '#FFA534'; // Yellow
    return '#6366f1'; // Purple-Blue
  };

  const currentData = PLOT_DATA[activeTab];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Stats & Headline */}
          <div className="lg:w-1/3 text-white">
            <span className="inline-block text-[#F7005A] text-sm font-black tracking-[0.2em] uppercase mb-4 opacity-80">Numbers Talk.</span>
            <h2 className="text-5xl font-black mb-8 leading-tight">數字會說話。</h2>
            <p className="text-xl text-slate-400 mb-12">不畫大餅，只講數據。<br />看看放洋的學長姐們都上了哪些學校。</p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              <div>
                <div className="text-4xl font-black text-[#F7005A] mb-1">
                  <Counter value={40} suffix="%" />
                </div>
                <div className="text-sm font-bold text-slate-400">進入落點夢幻校</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#F7005A] mb-1">
                  <Counter value={80} suffix="%" />
                </div>
                <div className="text-sm font-bold text-slate-400">錄取 QS TOP 100 名校</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#F7005A] mb-1">
                  <Counter value={40} suffix="年" />
                </div>
                <div className="text-sm font-bold text-slate-400">集團在台教育服務經驗</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#F7005A] mb-1 whitespace-nowrap">
                  <Counter value={2000} suffix="萬+" />
                </div>
                <div className="text-sm font-bold text-slate-400">累積獎學金新台幣</div>
              </div>
            </div>
            
            <p className="mt-16 text-xs text-slate-500 max-w-xs leading-relaxed">
              此圖表基於過往 2 年放洋學員錄取數據統計，僅供參考。<br />
              實際錄取仍受 SOP、推薦信、實習經驗等軟實力影響。
            </p>
          </div>

          {/* Right Side: Interactive Coordinate Plot */}
          <div className="lg:w-2/3 w-full bg-slate-800/50 rounded-[3rem] p-8 md:p-12 border border-slate-700/50 relative shadow-2xl">
            
            {/* Toggle Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">落點座標圖</h3>
                <p className="text-slate-400 text-sm">了解不同的 GPA、英檢成績之於落點學校的評測。</p>
              </div>
              
              {/* Pill-shaped Toggle Switcher */}
              <div className="flex bg-slate-900 p-1 rounded-full border border-slate-700">
                <button 
                  onClick={() => setActiveTab('US')}
                  className={`px-8 py-2.5 rounded-full font-bold transition-all text-sm ${activeTab === 'US' ? 'bg-[#76C8A7] text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-400'}`}
                >
                  美加 (TOEFL)
                </button>
                <button 
                  onClick={() => setActiveTab('Global')}
                  className={`px-8 py-2.5 rounded-full font-bold transition-all text-sm ${activeTab === 'Global' ? 'bg-[#FFA330] text-slate-900 shadow-lg' : 'text-slate-500 hover:text-slate-400'}`}
                >
                  英澳 (IELTS)
                </button>
              </div>
            </div>

            {/* Plot Area - Height shortened to aspect 5:3 */}
            <div className="relative w-full aspect-[5/3] border-l-2 border-b-2 border-slate-700 mb-20 ml-4 mr-4">
              
              {/* Axis Labels - GPA removed from text, alignment optimized */}
              <div className="absolute -left-10 top-0 h-full flex flex-col justify-between py-1 text-[11px] font-black text-slate-500 text-right w-8">
                <span>4.0</span>
                <span>3.5</span>
                <span>3.0</span>
                <span>2.5</span>
              </div>
              <div className="absolute -bottom-10 left-0 w-full flex justify-between px-1 text-[11px] font-black text-slate-500">
                <span>{activeTab === 'US' ? '80' : '4.5'}</span>
                <span>{activeTab === 'US' ? '100' : '7.0'}</span>
                <span>{activeTab === 'US' ? '120' : '9.0'}</span>
              </div>
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-xs font-black text-slate-400 uppercase tracking-[0.3em]">
                {activeTab === 'US' ? 'TOEFL IBT' : 'IELTS SCORE'}
              </div>

              {/* Dots Container */}
              <div className="absolute inset-0 z-20">
                {currentData.map((dot, idx) => {
                  const { x, y } = getPosition(dot.gpa, dot.score);
                  const color = getDotColor(dot.rank);
                  const isHovered = hoveredDot === dot;
                  
                  return (
                    <div 
                      key={idx}
                      className={`absolute transform -translate-x-1/2 translate-y-1/2 group ${isHovered ? 'z-50' : 'z-20'}`}
                      style={{ left: `${x}%`, bottom: `${100 - y}%` }}
                      onMouseEnter={() => setHoveredDot(dot)}
                      onMouseLeave={() => setHoveredDot(null)}
                    >
                      {/* Interaction Area (Invisible enlarged target) */}
                      <div className="w-10 h-10 -mt-5 -ml-5 rounded-full flex items-center justify-center cursor-pointer relative">
                        <motion.div 
                          animate={{ 
                            scale: isHovered ? 1.5 : 1,
                            boxShadow: isHovered ? `0 0 25px ${color}` : 'none'
                          }}
                          className="w-4 h-4 rounded-full border-2 border-slate-900 transition-colors"
                          style={{ backgroundColor: color }}
                        />
                      </div>

                      {/* Tooltip Box - Clean Rounded Rectangle, no arrow */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: -15, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-[60] pointer-events-none border border-slate-100 mb-4"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Trophy size={18} className="text-[#F7005A]" />
                              <span className="text-[11px] font-black text-[#F7005A] uppercase tracking-wider">{dot.rank}</span>
                            </div>
                            <h4 className="text-slate-900 font-black text-xl leading-snug mb-3">{dot.school}</h4>
                            <div className="flex flex-col gap-1.5 border-t border-slate-50 pt-3">
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                                    <MapPin size={14} className="text-slate-400" />
                                    <span>{dot.student}</span>
                                </div>
                                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Admission Background</div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Grid Lines - Removed horizontal lines as requested */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute h-full w-[1px] bg-slate-400 left-1/4" />
                <div className="absolute h-full w-[1px] bg-slate-400 left-2/4" />
                <div className="absolute h-full w-[1px] bg-slate-400 left-3/4" />
              </div>

            </div>

            {/* Legend - Separator border removed as requested, keeping space */}
            <div className="flex flex-wrap justify-center gap-10 mt-12 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF4B7D]" />
                <span className="text-xs font-black text-slate-400 tracking-wide">TOP 20 夢幻區</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFA534]" />
                <span className="text-xs font-black text-slate-400 tracking-wide">TOP 50 衝刺區</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#6366f1]" />
                <span className="text-xs font-black text-slate-400 tracking-wide">TOP 100 核心區</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatePlot;