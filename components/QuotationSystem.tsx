import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, Download, Check, Minus, Plus, Tag, User, FileText, Globe, RefreshCw } from 'lucide-react';
import { PRICING_DATA, FangYangLogo } from '../constants';
import { toPng } from 'html-to-image';

interface QuotationSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotationSystem: React.FC<QuotationSystemProps> = ({ isOpen, onClose }) => {
  const [region, setRegion] = useState<'US' | 'UK'>('US');
  const [selectedPackageId, setSelectedPackageId] = useState('basic');
  const [discountCode, setDiscountCode] = useState('');
  const [consultantName, setConsultantName] = useState('');
  const [clientName, setClientName] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  
  const [extraSchools, setExtraSchools] = useState(0);
  const [topTierAdd, setTopTierAdd] = useState(0);
  const [topTierSwap, setTopTierSwap] = useState(0);
  const [extraWords, setExtraWords] = useState(0);
  const [extraMajorCount, setExtraMajorCount] = useState(0);

  const quotationRef = useRef<HTMLDivElement>(null);

  const activePackage = useMemo(() => {
    return PRICING_DATA[region].find(p => p.id === selectedPackageId) || PRICING_DATA[region][0];
  }, [region, selectedPackageId]);

  const totalCalculation = useMemo(() => {
    let base = activePackage.price;
    let addonsTotal = 0;
    
    addonsTotal += extraMajorCount * PRICING_DATA.addons.selectionTable;
    
    const isStandardOrBasic = activePackage.id === 'standard' || activePackage.id === 'basic';
    const schoolPriceKey = isStandardOrBasic ? `${region}_Standard` : region;
    addonsTotal += extraSchools * (PRICING_DATA.addons.schoolAdd as any)[schoolPriceKey];
    
    addonsTotal += topTierAdd * (PRICING_DATA.addons.topTier as any)[`${region}_Add`];
    addonsTotal += topTierSwap * (PRICING_DATA.addons.topTier as any)[`${region}_Swap`];
    
    addonsTotal += extraWords * 6;

    let discount = discountCode.trim().toLowerCase() === 'verigood' ? 4000 : 0;
    
    return {
      base,
      addonsTotal,
      discount,
      grandTotal: Math.max(0, base + addonsTotal - discount)
    };
  }, [activePackage, extraMajorCount, extraSchools, topTierAdd, topTierSwap, extraWords, discountCode, region]);

  /**
   * Optimized Download Logic
   * Fixes 'cssRules' error by ensuring index.html has crossorigin on fonts.
   * Forces explicit styles during capture to ensure 900 weight and alignment.
   */
  const handleDownload = async () => {
    const el = quotationRef.current;
    if (!el || isDownloading) return;
    
    setIsDownloading(true);
    try {
      await document.fonts.ready;
      // 增加緩衝時間確保字體加載完成
      await new Promise(resolve => setTimeout(resolve, 1000));

      const captureWidth = el.offsetWidth;
      const captureHeight = el.scrollHeight;

      // html-to-image 不需要 onclone，我們直接在匯出時指定 style
      const dataUrl = await toPng(el, {
        width: captureWidth,
        height: captureHeight,
        pixelRatio: 3, 
        backgroundColor: '#ffffff',
        cacheBust: true,
        style: {
          width: `${captureWidth}px`,
          height: `${captureHeight}px`,
          margin: '0',
          padding: '40px', 
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          transform: 'none',
        }
      });
      
      const link = document.createElement('a');
      link.download = `放洋留遊學_報價單_${clientName || '客戶'}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (err) {
      console.error('PNG generation failed:', err);
      alert('產生報價單圖檔失敗。請檢查您的網路連線，或嘗試使用最新版 Chrome 瀏覽器。');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[80]"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="fixed inset-4 md:inset-10 bg-white rounded-[2.5rem] shadow-2xl z-[90] flex flex-col overflow-hidden"
          >
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F7005A] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <Calculator size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800" style={{ fontWeight: 900 }}>顧問報價系統</h2>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">FangYang Quotation Tool</p>
                </div>
              </div>
              <button onClick={onClose} className="p-3 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-slate-50">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                <div className="lg:col-span-7 space-y-10">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <Globe size={14} /> 1. 選擇申請地區
                    </h3>
                    <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
                      <button 
                        onClick={() => setRegion('US')}
                        className={`px-10 py-3 rounded-xl font-black transition-all ${region === 'US' ? 'bg-[#F7005A] text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
                      >
                        美加地區
                      </button>
                      <button 
                        onClick={() => setRegion('UK')}
                        className={`px-10 py-3 rounded-xl font-black transition-all ${region === 'UK' ? 'bg-[#F7005A] text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
                      >
                        英國地區
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <FileText size={14} /> 2. 選擇服務方案
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {PRICING_DATA[region].map((p) => (
                        <button 
                          key={p.id}
                          onClick={() => setSelectedPackageId(p.id)}
                          className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-2 ${
                            selectedPackageId === p.id ? 'border-[#F7005A] bg-pink-50' : 'border-slate-100 bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <span className={`text-lg font-black ${selectedPackageId === p.id ? 'text-[#F7005A]' : 'text-slate-700'}`}>{p.name}</span>
                          <span className="text-slate-400 text-xs font-bold">{p.schools} 所學校</span>
                          <span className="text-slate-900 font-black">NT$ {p.price.toLocaleString()}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <Plus size={14} /> 3. 單項加購內容
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-black text-slate-800">選校表 (跨科系/領域)</p>
                          <p className="text-xs text-slate-400 font-bold">NT$ 7,000 / 組</p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-100 rounded-full px-4 py-2">
                          <button onClick={() => setExtraMajorCount(Math.max(0, extraMajorCount - 1))} className="text-slate-500 hover:text-[#F7005A]"><Minus size={18} /></button>
                          <span className="w-8 text-center font-black text-slate-800">{extraMajorCount}</span>
                          <button onClick={() => setExtraMajorCount(extraMajorCount + 1)} className="text-slate-500 hover:text-[#F7005A]"><Plus size={18} /></button>
                        </div>
                      </div>
                      <hr className="border-slate-100" />
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-black text-slate-800">額外申請間數</p>
                          <p className="text-xs text-slate-400 font-bold">每間 NT$ {activePackage.id === 'standard' || activePackage.id === 'basic' ? (region === 'US' ? '11,000' : '7,000') : (region === 'US' ? '13,000' : '10,000')}</p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-100 rounded-full px-4 py-2">
                          <button onClick={() => setExtraSchools(Math.max(0, extraSchools - 1))} className="text-slate-500 hover:text-[#F7005A]"><Minus size={18} /></button>
                          <span className="w-8 text-center font-black text-slate-800">{extraSchools}</span>
                          <button onClick={() => setExtraSchools(extraSchools + 1)} className="text-slate-500 hover:text-[#F7005A]"><Plus size={18} /></button>
                        </div>
                      </div>
                      <hr className="border-slate-100" />
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-black text-slate-800">{region === 'US' ? 'Top 20' : 'G5'} 頂尖大學 (單項加購)</p>
                          <p className="text-xs text-slate-400 font-bold">NT$ {region === 'US' ? '27,000' : '16,000'} / 間</p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-100 rounded-full px-4 py-2">
                          <button onClick={() => setTopTierAdd(Math.max(0, topTierAdd - 1))} className="text-slate-500 hover:text-[#F7005A]"><Minus size={18} /></button>
                          <span className="w-8 text-center font-black text-slate-800">{topTierAdd}</span>
                          <button onClick={() => setTopTierAdd(topTierAdd + 1)} className="text-slate-500 hover:text-[#F7005A]"><Plus size={18} /></button>
                        </div>
                      </div>
                      <hr className="border-slate-100" />
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-black text-slate-800">{region === 'US' ? 'Top 20' : 'G5'} 頂尖大學 (換購價)</p>
                          <p className="text-xs text-slate-400 font-bold">NT$ {region === 'US' ? '16,000' : '8,000'} / 間</p>
                        </div>
                        <div className="flex items-center gap-4 bg-slate-100 rounded-full px-4 py-2">
                          <button onClick={() => setTopTierSwap(Math.max(0, topTierSwap - 1))} className="text-slate-500 hover:text-[#F7005A]"><Minus size={18} /></button>
                          <span className="w-8 text-center font-black text-slate-800">{topTierSwap}</span>
                          <button onClick={() => setTopTierSwap(topTierSwap + 1)} className="text-slate-500 hover:text-[#F7005A]"><Plus size={18} /></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Tag size={14} /> 折扣碼
                      </h3>
                      <input 
                        type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)}
                        placeholder="輸入折扣代碼"
                        className="w-full bg-slate-100 px-4 py-3 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#F7005A]/20 transition-all"
                      />
                      {discountCode.toLowerCase() === 'verigood' && <p className="text-[10px] text-green-600 font-black mt-2">✓ 已套用「顧問折扣」</p>}
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <User size={14} /> 顧問姓名
                      </h3>
                      <input 
                        type="text" value={consultantName} onChange={(e) => setConsultantName(e.target.value)}
                        className="w-full bg-slate-100 px-4 py-3 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#F7005A]/20 transition-all"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                      <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <User size={14} /> 客戶姓名
                      </h3>
                      <input 
                        type="text" value={clientName} onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-slate-100 px-4 py-3 rounded-xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-[#F7005A]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side: Quotation Preview (The captured target) */}
                <div className="lg:col-span-5 relative">
                  <div className="sticky top-0">
                    <div 
                      ref={quotationRef}
                      className="quotation-preview-container bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100 flex flex-col gap-6"
                      style={{ minHeight: '800px', fontFamily: "'Noto Sans TC', sans-serif" }}
                    >
                      <div className="flex justify-between items-start">
                        <FangYangLogo className="w-24 h-auto" />
                        <div className="text-right">
                          <p className="text-xs font-black text-[#F7005A] uppercase tracking-widest">Official Quotation</p>
                          <p className="text-slate-400 text-[10px] font-bold">Date: {new Date().toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h1 className="text-3xl font-black text-slate-900 mb-2" style={{ fontWeight: 900 }}>放洋留遊學專屬規劃報價單</h1>
                        <div className="flex gap-10 border-b border-slate-100 pb-4">
                           <div><span className="text-[10px] text-slate-400 font-bold block">CLIENT</span><span className="font-black text-slate-700">{clientName || '---'}</span></div>
                           <div><span className="text-[10px] text-slate-400 font-bold block">CONSULTANT</span><span className="font-black text-slate-700">{consultantName || '---'}</span></div>
                           <div><span className="text-[10px] text-slate-400 font-bold block">REGION</span><span className="font-black text-slate-700">{region === 'US' ? '美加地區' : '英國地區'}</span></div>
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <span className="w-2 h-8 bg-[#F7005A] rounded-full flex-shrink-0" />
                            <span className="text-xl font-black text-slate-800 whitespace-nowrap" style={{ fontWeight: 900 }}>{activePackage.name}方案 ( {activePackage.schools} 所 )</span>
                          </div>
                          <span className="font-black text-slate-700 whitespace-nowrap ml-2 flex-shrink-0">NT$ {activePackage.price.toLocaleString()}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 px-2">
                          {PRICING_DATA.featureNames.map((name, i) => {
                             const featureValue = activePackage.features[i];
                             const isBoolean = typeof featureValue === 'boolean';
                             
                             return (
                               <div key={i} className="flex items-center gap-3">
                                 <div className="flex-shrink-0 flex items-center justify-center min-w-[1rem] h-4">
                                   {isBoolean ? (
                                     featureValue ? <Check size={16} className="text-[#F7005A]" /> : <X size={16} className="text-slate-200" />
                                   ) : (
                                     <span className="text-[#F7005A] text-[10px] font-black whitespace-nowrap pr-1">{featureValue} 字</span>
                                   )}
                                 </div>
                                 <span className="text-xs text-slate-700 font-bold whitespace-nowrap">{name}</span>
                               </div>
                             );
                          })}
                        </div>

                        {(extraMajorCount > 0 || extraSchools > 0 || topTierAdd > 0 || topTierSwap > 0 || extraWords > 0) && (
                          <div className="mt-8 space-y-3">
                            <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50 pb-1">加購項目 Add-ons</h4>
                            {extraMajorCount > 0 && (
                              <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                                <div className="flex-grow">選校表加購 ({extraMajorCount} 組)</div>
                                <div className="min-w-[120px] text-right font-black" style={{ fontWeight: 900 }}>NT$ {(extraMajorCount * 7000).toLocaleString()}</div>
                              </div>
                            )}
                            {extraSchools > 0 && (
                              <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                                <div className="flex-grow">額外申請 ({extraSchools} 間)</div>
                                <div className="min-w-[120px] text-right font-black" style={{ fontWeight: 900 }}>NT$ {(extraSchools * (activePackage.id === 'standard' || activePackage.id === 'basic' ? (region === 'US' ? 11000 : 7000) : (region === 'US' ? 13000 : 10000))).toLocaleString()}</div>
                              </div>
                            )}
                            {topTierAdd > 0 && (
                              <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                                <div className="flex-grow">頂尖大學加購 ({topTierAdd} 間)</div>
                                <div className="min-w-[120px] text-right font-black" style={{ fontWeight: 900 }}>NT$ {(topTierAdd * (PRICING_DATA.addons.topTier as any)[`${region}_Add`]).toLocaleString()}</div>
                              </div>
                            )}
                            {topTierSwap > 0 && (
                              <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                                <div className="flex-grow">頂尖大學換購 ({topTierSwap} 間)</div>
                                <div className="min-w-[120px] text-right font-black" style={{ fontWeight: 900 }}>NT$ {(topTierSwap * (PRICING_DATA.addons.topTier as any)[`${region}_Swap`]).toLocaleString()}</div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* 結算區域：精準右側邊界對齊 */}
                      <div className="bg-slate-900 rounded-3xl p-8 text-white mt-auto overflow-hidden">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-slate-400 font-bold text-sm flex-grow">小計 Subtotal</div>
                          <div className="min-w-[180px] text-right font-black text-sm whitespace-nowrap" style={{ fontWeight: 900, textAlign: 'right' }}>NT$ {(totalCalculation.base + totalCalculation.addonsTotal).toLocaleString()}</div>
                        </div>
                        {totalCalculation.discount > 0 && (
                          <div className="flex justify-between items-center mb-6 text-green-400">
                            <div className="font-bold text-sm flex-grow">顧問折扣 Discount</div>
                            <div className="min-w-[180px] text-right font-black text-sm whitespace-nowrap" style={{ fontWeight: 900, textAlign: 'right' }}>- NT$ {totalCalculation.discount.toLocaleString()}</div>
                          </div>
                        )}
                        <div className="flex justify-between items-center border-t border-white/10 pt-6">
                           <div className="text-xl font-black flex-grow" style={{ fontWeight: 900 }}>應付金額 TOTAL</div>
                           <div className="min-w-[180px] text-right text-3xl font-black text-[#FF4B7D] whitespace-nowrap" style={{ fontWeight: 900, textAlign: 'right' }}>NT$ {totalCalculation.grandTotal.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="text-[9px] text-slate-400 leading-relaxed font-bold">
                        {region === 'US' ? (
                          <>
                            購買頂級方案，提供任選三間 Top20 申請額度，無須加價。<br />
                            若全數落榜，可額外免費投遞 2 間。<br />
                          </>
                        ) : (
                          <>
                            購買頂級方案，提供任選三間 G5 頂大申請額度，無須加價。<br />
                            若全數落榜，可額外免費投遞 2 間。<br />
                          </>
                        )}
                        報價不包含學校申請費、快遞郵資、簽證、WES、ETS 規費、機票、接機與其他交通規費。<br />
                        本報價自開立日起 14 天內有效。<br />
                        確認方案後需簽署正式委託合約，合約簽署完成後方啟動服務。<br />
                        翻譯服務依原稿字數或標點符號計算，超過上限需額外支付費用。
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <button 
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className={`bg-[#F7005A] text-white px-10 py-4 rounded-full font-black flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed min-w-[240px] justify-center`}
                      >
                        {isDownloading ? (
                          <RefreshCw size={22} className="animate-spin" />
                        ) : (
                          <Download size={22} />
                        )}
                        {isDownloading ? '下載中⋯⋯' : '下載報價單 (PNG)'}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuotationSystem;