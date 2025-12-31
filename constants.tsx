
import React from 'react';
import { StatItem, TimelineStep, ProfileDemo, Dimension, DocItem, FAQItem } from './types';
import { Search, Target, Database, Activity, CheckSquare, RefreshCw } from 'lucide-react';

// Logo Component
export const FangYangLogo = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 232" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M173.467 149.345L186.502 108.724C189.256 100.143 199.722 96.9405 206.805 102.51L250.702 137.024C259.681 144.084 258.611 157.803 247.469 160.315C243.67 161.172 239.656 161.683 235.676 161.541C219.22 160.953 205.703 162.716 188.071 166.242C178.413 167.852 170.476 158.668 173.467 149.345Z" fill="#FF4B7D"/>
    <path d="M175.394 4.42421L37.6189 138.726C29.3062 146.829 36.6275 161.421 48.1662 160.149C63.3622 158.474 79.9813 157.366 91.6858 158.603C105.666 160.079 124.02 164.583 136.596 167.989C144.647 170.17 153.118 165.76 155.702 157.829L200.589 20.1011C205.535 4.92306 186.825 -6.71889 175.394 4.42421Z" fill="#F7005A"/>
    <path d="M283.281 71.6205C283.281 82.981 274.071 92.1905 262.711 92.1905C251.35 92.1905 242.141 82.981 242.141 71.6205C242.141 60.26 251.35 51.0505 262.711 51.0505C274.071 51.0505 283.281 60.26 283.281 71.6205Z" fill="#FFA534"/>
    <path d="M219.624 186.604C241.569 185.164 262.091 187.873 286.231 193.965L288.578 194.564L288.929 194.661C296.26 196.757 300.62 204.33 298.699 211.754C296.747 219.295 289.051 223.826 281.51 221.874C258.196 215.84 240.204 213.525 221.472 214.754C202.556 215.995 182.068 220.902 153.774 230.407L149.213 231.938L144.667 230.364C118.554 221.323 99.1233 216.531 80.2473 215.112C61.4329 213.698 42.3781 215.579 16.9762 220.855C9.34905 222.439 1.88183 217.54 0.297543 209.912C-1.28651 202.285 3.61201 194.818 11.2391 193.234C38.104 187.653 59.9827 185.301 82.3617 186.982C103.421 188.565 124.22 193.669 149.347 202.15C176.434 193.257 198.336 188 219.624 186.604Z" fill="#4A4E53"/>
  </svg>
);

export const BRAND_COLORS = {
  primary: '#F7005A',
  secondary: '#FFA534',
  dark: '#4A4E53',
  lightPink: '#FF4B7D'
};

export const PRICING_DATA = {
  US: [
    { id: 'basic', name: '基本', price: 81000, schools: 5, features: [true, true, true, true, true, false, true, true, false, 6000, false] },
    { id: 'standard', name: '標準', price: 103000, schools: 7, features: [true, true, true, true, true, false, true, true, false, 7000, false] },
    { id: 'value', name: '超值', price: 113000, schools: 7, features: [true, true, true, true, true, true, true, true, false, 7000, false] },
    { id: 'premium', name: '頂級', price: 134000, schools: 9, features: [true, true, true, true, true, true, true, true, true, 8500, true] }
  ],
  UK: [
    { id: 'basic', name: '基本', price: 37000, schools: 5, features: [true, true, true, true, true, false, true, true, false, 5000, false] },
    { id: 'standard', name: '標準', price: 51000, schools: 7, features: [true, true, true, true, true, false, true, true, false, 6000, false] },
    { id: 'value', name: '超值', price: 47000, schools: 5, features: [true, true, true, true, true, true, true, true, false, 6000, false] },
    { id: 'premium', name: '頂級', price: 61000, schools: 7, features: [true, true, true, true, true, true, true, true, true, 8500, true] }
  ],
  addons: {
    selectionTable: 7000,
    schoolAdd: { US: 13000, UK: 10000, US_Standard: 11000, UK_Standard: 7000 },
    topTier: { US_Add: 27000, US_Swap: 16000, UK_Add: 16000, UK_Swap: 8000 },
    words: { min: 5, max: 7 }
  },
  featureNames: [
    '申請學校間數',
    '精準落點分析',
    '航班住宿安排',
    '學生簽證辦理',
    '精選英譯潤稿',
    '名師架構監修',
    '放洋獎金回饋',
    '歷屆學生社群',
    '任選頂校三所*',
    '翻譯字數上限',
    '安心續投專案*'
  ]
};

export const STATS_DATA: StatItem[] = [
  { label: '斬獲 Offer', value: '186', suffix: '筆', description: '2025 入學年' },
  { label: '總獎學金', value: '1,100', suffix: '萬+', description: '新台幣' },
  { label: '夢幻校錄取', value: '40', suffix: '%', description: '學生佔比' },
  { label: '百大名校', value: '80', suffix: '%', description: '錄取率' },
];

export const THREE_DIMENSIONS: Dimension[] = [
  {
    id: 1,
    title: '在校成績',
    subtitle: 'GPA (Grade Point Average)',
    details: [
      'Overall GPA (整體平均)',
      'Last 60 GPA (最後60學分)',
      'Major GPA (專業科目)',
      '各國採計標準不同 (百分制 vs 4.0/4.3制)'
    ],
    color: '#F7005A'
  },
  {
    id: 2,
    title: '語言成績',
    subtitle: 'TOEFL / IELTS',
    details: [
      '英語系國家主流檢定',
      '美國常見：TOEFL (托福)',
      '英澳常見：IELTS (雅思)',
      '效期通常為 2 年，建議申請前最後衝刺'
    ],
    color: '#FF4B7D'
  },
  {
    id: 3,
    title: '邏輯測驗',
    subtitle: 'GRE / GMAT',
    details: [
      '理工科學生考取 GRE',
      '商科類別學生考取 GMAT',
      '包含語言詞彙、數理計量測驗',
      '成績有效期限為 5 年'
    ],
    color: '#FFA534'
  }
];

export const DOCUMENTS: DocItem[] = [
  {
    id: '04',
    title: '履歷',
    enTitle: 'Curriculum Vitae (CV)',
    description: '包含了學術背景、工作實習經歷、社團志工活動、校內外比賽證照，用以呈現人格特質與綜合表現。'
  },
  {
    id: '05',
    title: '讀書計畫',
    enTitle: 'Statement of Purposes (SOP)',
    description: '說服學校為何選你？包含申請動機、過往經歷、預計目標、學術背景、學校適性、課外活動、未來發展。'
  },
  {
    id: '06',
    title: '推薦信',
    enTitle: 'Letters of Recommendation (LoR)',
    description: '來自教授或在職實習單位主管的推薦信，通常為 2-3 封，用以陳述學生在學術與工作上的表現以及發展潛力。'
  }
];

export const ANALYSIS_STAGES = [
  { id: 1, title: "背景分析", desc: "透過諮詢進行背景分析，了解學生的基本條件和需求，作為選校基礎", icon: <Search size={20} /> },
  { id: 2, title: "目標設定", desc: "深入職涯目標，確認留學國家、學校排名等不同偏好，初步設定範圍", icon: <Target size={20} /> },
  { id: 3, title: "資源調查", desc: "進行專業資料蒐集，包括過往申請學生、入學要求、課程、學費...等", icon: <Database size={20} /> },
  { id: 4, title: "競爭力評估", desc: "依照申請經驗評估錄取機會，區分出夢幻、合適、保底的學校選項", icon: <Activity size={20} /> },
  { id: 5, title: "推薦篩選", desc: "進一步深入學校選項，提供每個選項的優缺點分析，讓學生做出決策", icon: <CheckSquare size={20} /> },
  { id: 6, title: "討論調整", desc: "與學生反覆討論並調整清單，根據學生的意見與需求進行最終確認", icon: <RefreshCw size={20} /> }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  { period: '07-03月', title: '托福雅思準備', description: '針對學生的弱點進行補強，藉以提升學生成績達到申請要求', icon: 'book' },
  { period: '04-08月', title: '書審文件撰寫', description: '提供文件範例和專業的修訂建議，充分展現學生的個人優勢', icon: 'file' },
  { period: '09-12月', title: '學校申請追蹤', description: '密切追蹤申請進度，確保任何補充資料需求都能即時滿足', icon: 'send' },
  { period: '11-隔年05月', title: '學校陸續放榜', description: '協助學生評估錄取結果，幫助學生們做出最佳選擇', icon: 'award' },
  { period: '05-06月', title: '學生簽證申辦', description: '協助學生提交簽證申請，確保順利通過簽證面試', icon: 'passport' },
  { period: '隔年 09月', title: '正式入學！', description: '幫助學生安排行前準備，包括機票、住宿...等各項細節', icon: 'plane' },
];

export const DEMO_PROFILES: ProfileDemo[] = [
  {
    id: 'cs_high',
    name: 'CS 學霸 (理工)',
    gpa: '3.8/4.0',
    toefl: '105',
    gre: '325',
    recommendations: [
      { type: 'Dream', label: '夢幻區', color: 'bg-pink-100 text-pink-700', schools: ['UC Berkeley', 'Columbia University', 'Georgia Tech'], description: '頂尖名校，競爭極為激烈' },
      { type: 'Match', label: '落點區', color: 'bg-blue-100 text-blue-700', schools: ['Purdue', 'USC', 'UW–Madison'], description: '條件相符，錄取機率高' },
      { type: 'Safety', label: '低風險區', color: 'bg-green-100 text-green-700', schools: ['ASU', 'SUNY Buffalo', 'UC Riverside'], description: '安全性高，確保有學念' }
    ]
  },
  {
    id: 'biz_mid',
    name: '行銷轉職 (商科)',
    gpa: '3.4/4.0',
    toefl: '95',
    gre: 'GMAT 650',
    recommendations: [
      { type: 'Dream', label: '夢幻區', color: 'bg-pink-100 text-pink-700', schools: ['Northwestern', 'UT Austin', 'USC'], description: '衝刺目標' },
      { type: 'Match', label: '落點區', color: 'bg-blue-100 text-blue-700', schools: ['Boston U', 'Rochester', 'UMD'], description: '核心目標學校' },
      { type: 'Safety', label: '低風險區', color: 'bg-green-100 text-green-700', schools: ['ASU', 'UT Dallas', 'Northeastern'], description: '穩健選擇' }
    ]
  }
];

export const PLOT_DATA = {
  US: [
    { gpa: 3.8, score: 99, school: "Johns Hopkins University", rank: "US #6", student: "GPA 3.8｜TOEFL 99" },
    { gpa: 3.5, score: 107, school: "Johns Hopkins University", rank: "US #6", student: "GPA 3.5｜TOEFL 107" },
    { gpa: 3.8, score: 110, school: "UCLA", rank: "US #15", student: "GPA 3.8｜IELTS 8.0" },
    { gpa: 3.9, score: 115, school: "UC Berkeley", rank: "US #17", student: "GPA 3.9｜TOEFL 115" },
    { gpa: 3.7, score: 108, school: "University of Michigan", rank: "US #21", student: "GPA 3.7｜TOEFL 108" },
    { gpa: 3.4, score: 95, school: "UC San Diego", rank: "US #29", student: "GPA 3.4｜TOEFL 95" },
    { gpa: 3.6, score: 98, school: "New York University", rank: "US #30", student: "GPA 3.6｜IELTS 7.5" },
    { gpa: 3.5, score: 104, school: "Purdue University", rank: "US #46", student: "GPA 3.5｜TOEFL 104" },
    { gpa: 3.6, score: 92, school: "Boston University", rank: "US #41", student: "GPA 3.6｜IELTS 7.5" },
    { gpa: 3.3, score: 100, school: "University of Rochester", rank: "US #44", student: "GPA 3.3｜TOEFL 100" },
    { gpa: 3.1, score: 85, school: "NC State University", rank: "US #58", student: "GPA 3.1｜TOEFL 85" },
    { gpa: 2.8, score: 90, school: "Arizona State University", rank: "US #121", student: "GPA 2.8｜TOEFL 90" },
    { gpa: 2.9, score: 95, school: "Oregon State University", rank: "US #144", student: "GPA 2.9｜TOEFL 95" },
    { gpa: 3.0, score: 88, school: "University at Buffalo", rank: "US #76", student: "GPA 3.0｜TOEFL 88" },
    { gpa: 3.2, score: 88, school: "Pitt", rank: "US #70", student: "GPA 3.2｜TOEFL 88" },
    { gpa: 3.8, score: 92, school: "UC Riverside", rank: "US #76", student: "GPA 3.8｜TOEFL 92" }
  ],
  Global: [
    { gpa: 3.9, score: 8.5, school: "University of Cambridge", rank: "QS #5", student: "GPA 3.9/4.3｜IELTS 8.5" },
    { gpa: 3.9, score: 8.0, school: "Imperial College London", rank: "QS #2", student: "GPA 3.9/4.3｜IELTS 8.0" },
    { gpa: 3.8, score: 7.5, school: "UCL", rank: "QS #9", student: "GPA 3.8｜IELTS 7.5" },
    { gpa: 3.7, score: 7.5, school: "University of Melbourne", rank: "QS #13", student: "GPA 3.7｜IELTS 7.5" },
    { gpa: 3.5, score: 7.0, school: "University of Sydney", rank: "QS #18", student: "GPA 3.5｜IELTS 7.0" },
    { gpa: 3.4, score: 7.0, school: "UNSW Sydney", rank: "QS #19", student: "GPA 3.4｜IELTS 7.0" },
    { gpa: 3.6, score: 6.5, school: "Australian National University", rank: "QS #30", student: "GPA 3.6｜IELTS 6.5" },
    { gpa: 3.5, score: 7.5, school: "University of Manchester", rank: "QS #34", student: "GPA 3.5｜IELTS 7.5" },
    { gpa: 3.9, score: 7.0, school: "King's College London", rank: "QS #40", student: "GPA 3.9｜IELTS 7.0" },
    { gpa: 3.2, score: 6.5, school: "Monash University", rank: "QS #37", student: "GPA 3.2｜IELTS 6.5" },
    { gpa: 2.8, score: 5.5, school: "Cranfield University", rank: "QS #33", student: "GPA 2.8｜IELTS 5.5" },
    { gpa: 2.6, score: 5.5, school: "The University of Queensland", rank: "QS #40", student: "Foundation Entry｜IELTS 5.5" },
    { gpa: 3.1, score: 6.5, school: "University of Bristol", rank: "QS #54", student: "GPA 3.1｜IELTS 6.5" },
    { gpa: 3.3, score: 7.0, school: "University of Warwick", rank: "QS #69", student: "GPA 3.3｜IELTS 7.0" },
    { gpa: 3.0, score: 6.5, school: "University of Birmingham", rank: "QS #80", student: "GPA 3.0｜IELTS 6.5" },
    { gpa: 2.9, score: 6.0, school: "University of Leeds", rank: "QS #82", student: "GPA 2.9｜IELTS 6.0" },
    { gpa: 3.4, score: 6.0, school: "University of Adelaide", rank: "QS #82", student: "GPA 3.4｜IELTS 6.0" },
    { gpa: 2.7, score: 6.0, school: "UTS Sydney", rank: "QS #88", student: "GPA 2.7｜IELTS 6.0" },
    { gpa: 3.8, score: 7.5, school: "University of Waterloo", rank: "QS #115", student: "GPA 3.8｜IELTS 7.5" },
    { gpa: 2.8, score: 5.5, school: "RMIT University", rank: "QS #123", student: "GPA 2.8｜IELTS 5.5" }
  ]
};

export const OFFER_BOARD_DATA = [
  {
    category: "美國地區 (US List / US News Ranking)",
    items: [
      { student: "GPA 3.8｜TOEFL 99", rank: "US #6", school: "Johns Hopkins University", major: "MS in Global Innovation and Leadership" },
      { student: "GPA 3.5｜TOEFL 107", rank: "US #6", school: "Johns Hopkins University", major: "MS in Business Analytics and AI" },
      { student: "GPA 3.8｜IELTS 8.0", rank: "US #15", school: "University of California, Los Angeles", major: "MBA" },
      { student: "GPA 3.9｜TOEFL 90", rank: "US #17", school: "UC San Francisco & Berkeley", major: "Master of Translational Medicine" },
      { student: "GPA 3.5｜TOEFL 94", rank: "US #17", school: "UC San Francisco & Berkeley", major: "Master of Translational Medicine" },
      { student: "GPA 3.5｜TOEFL 107", rank: "US #21", school: "University of Michigan, Ann Arbor", major: "Master of Supply Chain Management" },
      { student: "GPA 3.8｜TOEFL 95", rank: "US #21", school: "University of Michigan, Ann Arbor", major: "MEng in Automotive Engineering" },
      { student: "GPA 3.2｜TOEFL 104", rank: "US #21", school: "Washington University in St. Louis", major: "MS in Business Analytics" },
      { student: "GPA 4.1/4.3｜TOEFL 89", rank: "US #24", school: "Georgetown University", major: "MS in Pharmacology" },
      { student: "95.30%｜IELTS 7.5", rank: "US #27", school: "University of Southern California", major: "MS in Materials Science and Engineering" },
      { student: "GPA 3.8｜TOEFL 99", rank: "US #27", school: "University of Southern California", major: "MS in Business Analytics" },
      { student: "GPA 3.9｜TOEFL 90", rank: "US #29", school: "University of California, San Diego", major: "Master's in Clinical Research" },
      { student: "GPA 3.8｜TOEFL 83", rank: "US #29", school: "University of California, San Diego", major: "MS in Materials Science and Engineering" },
      { student: "GPA 3.4｜TOEFL 93", rank: "US #29", school: "University of California, San Diego", major: "Master of Professional Accountancy" },
      { student: "GPA 3.6｜IELTS 7.5", rank: "US #30", school: "New York University", major: "MS in Integrated Marketing" },
      { student: "GPA 3.5｜TOEFL 109", rank: "US #33", school: "University of Illinois Urbana-Champaign", major: "MS in Bioengineering" },
      { student: "GPA 3.6｜TOEFL 87", rank: "US #33", school: "University of Illinois Urbana-Champaign", major: "MS in Actuarial Science" },
      { student: "GPA 4.1/4.3｜IELTS 6.5", rank: "US #33", school: "University of Illinois Urbana-Champaign", major: "MS in Actuarial Science" },
      { student: "95.30%｜IELTS 7.5", rank: "US #33", school: "University of Illinois Urbana-Champaign", major: "MEng in Energy Systems" },
      { student: "GPA 3.8｜TOEFL 83", rank: "US #33", school: "University of California, Irvine", major: "MS in Materials Science and Engineering" },
      { student: "GPA 3.9/4.3｜TOEFL 95", rank: "US #33", school: "University of California, Irvine", major: "Computer Science, MS" },
      { student: "GPA 3.8｜TOEFL 94", rank: "US #33", school: "University of California, Irvine", major: "MS in Business Analytics" },
      { student: "GPA 2.9｜TOEFL 105", rank: "US #33", school: "University of California, Davis", major: "MS in Electrical and Computer Engineering" },
      { student: "GPA 3.5｜Duolingo 125", rank: "US #41", school: "Boston University", major: "MS in Global Marketing Management" },
      { student: "GPA 3.6｜IELTS 7.5", rank: "US #41", school: "Boston University", major: "MS in Advertising" },
      { student: "GPA 3.5｜Duolingo 125", rank: "US #44", school: "University of Rochester", major: "MS in Marketing Analytics" },
      { student: "GPA 3.8｜TOEFL 99", rank: "US #44", school: "University of Maryland, College Park", major: "MS in Business Analytics" },
      { student: "GPA 3.8｜TOEFL 94", rank: "US #44", school: "University of Maryland, College Park", major: "MS in Business Analytics" },
      { student: "GPA 3.5｜TOEFL 107", rank: "US #46", school: "University of Washington", major: "MS in Business Analytics" },
      { student: "GPA 3.4｜IELTS 7.5", rank: "US #46", school: "University of Washington", major: "MS in Computer Science and Software Engineering" },
      { student: "GPA 3.9/4.3｜TOEFL 95", rank: "US #46", school: "University of Washington", major: "PMP in Electrical and Computer Engineering" },
      { student: "GPA 3.5｜Duolingo 125", rank: "US #46", school: "University of Washington", major: "Master of Communication in Digital Media" },
      { student: "GPA 3.5｜TOEFL 109", rank: "US #46", school: "Purdue University", major: "MS in Engineering (Biomedical)" },
      { student: "GPA 3.8｜TOEFL 83", rank: "US #47", school: "Texas A&M University", major: "MS in Materials Science and Engineering" },
      { student: "GPA 3.5｜Duolingo 125", rank: "US #54", school: "Northeastern University", major: "MS in Management" },
      { student: "GPA 3.9｜TOEFL 90", rank: "US #54", school: "Northeastern University", major: "MS in Biotechnology" },
      { student: "GPA 3.0｜TOEFL 90", rank: "US #54", school: "Northeastern University", major: "MS in Robotics" },
      { student: "GPA 3.8｜TOEFL 95", rank: "US #54", school: "Northeastern University", major: "MS in Mechanical Engineering" },
      { student: "GPA 3.2｜TOEFL 88", rank: "US #54", school: "Northeastern University", major: "MS in Mechanical Engineering" },
      { student: "GPA 3.8｜TOEFL 96", rank: "US #54", school: "Virginia Tech", major: "MEng in Computer Science and Applications" },
      { student: "GPA 3.1｜TOEFL 82", rank: "US #58", school: "North Carolina State University", major: "MS in Electrical Engineering" },
      { student: "GPA 3.2｜TOEFL 88", rank: "US #58", school: "North Carolina State University", major: "Mechanical Engineering (MS)" },
      { student: "GPA 3.5｜IELTS 7.5", rank: "US #63", school: "Michigan State University", major: "MS in Accounting" },
      { student: "GPA 3.5｜Duolingo 125", rank: "US #63", school: "Syracuse University", major: "Marketing (MS)" },
      { student: "GPA 3.5｜TOEFL 109", rank: "US #63", school: "Pennsylvania State University", major: "MS in Biomedical Engineering" },
      { student: "GPA 3.8｜TOEFL 99", rank: "US #63", school: "Pennsylvania State University", major: "Master's in Business Analytics" },
      { student: "GPA 3.8｜TOEFL 94", rank: "US #63", school: "Pennsylvania State University", major: "Master's in Business Analytics" },
      { student: "GPA 3.6｜TOEFL 87", rank: "US #70", school: "University of Connecticut", major: "MS in Mathematics (Actuarial Science)" },
      { student: "GPA 4.1/4.3｜IELTS 6.5", rank: "US #70", school: "University of Connecticut", major: "MS in Mathematics (Actuarial Science)" },
      { student: "GPA 3.2｜TOEFL 88", rank: "US #70", school: "University of Pittsburgh", major: "MS in Mechanical Engineering" },
      { student: "GPA 3.0｜TOEFL 87", rank: "US #76", school: "Stevens Institute of Technology", major: "MS in Management" },
      { student: "GPA 3.8｜TOEFL 96", rank: "US #76", school: "University of California, Riverside", major: "MS in Robotics" },
      { student: "GPA 3.6｜TOELF 93", rank: "US #76", school: "University of California, Riverside", major: "MS in Electrical Engineering" },
      { student: "GPA 3.1｜TOEFL 82", rank: "US #76", school: "University of California, Riverside", major: "MS in Electrical Engineering" },
      { student: "GPA 2.8｜TOEFL 100", rank: "US #76", school: "University at Buffalo", major: "MS in Computer Science and Engineering" },
      { student: "GPA 2.9｜TOEFL 105", rank: "US #80", school: "University of Illinois Chicago", major: "Electrical and Computer Engineering MS" },
      { student: "GPA 3.8｜TOEFL 96", rank: "US #84", school: "University of California, Santa Cruz", major: "Computer Science & Engineering" },
      { student: "GPA 3.5｜IELTS 7.5", rank: "US #86", school: "Marquette University", major: "Master's in Accounting" },
      { student: "GPA 3.5｜IELTS 7.5", rank: "US #98", school: "Gonzaga University", major: "Master of Accountancy" },
      { student: "GPA 3.4｜TOEFL 93", rank: "US #98", school: "Gonzaga University", major: "Master of Accountancy" },
      { student: "GPA 3.6｜TOEFL 87", rank: "US #98", school: "University of Iowa", major: "MS in Actuarial Science" },
      { student: "GPA 3.7｜TOEFL 70", rank: "US #105", school: "Auburn University", major: "Full-Time MBA" },
      { student: "GPA 3.6｜TOEFL 87", rank: "US #109", school: "University of Texas, Dallas", major: "Actuarial Science, MS" },
      { student: "74%｜TOEFL 81", rank: "US #109", school: "University of Texas, Dallas", major: "MS Mechanical Engineering" },
      { student: "GPA 3.0｜TOEFL 87", rank: "US #109", school: "CSU Long Beach", major: "MBA Executive program" },
      { student: "GPA 3.1｜TOEFL 82", rank: "US #109", school: "CSU Long Beach", major: "Electrical Engineering, MS" },
      { student: "GPA 2.8｜TOEFL 78", rank: "US #109", school: "CSU Long Beach", major: "Mechanical Engineering, MS" },
      { student: "GPA 3.7｜TOEFL 70", rank: "US #109", school: "University of Arizona", major: "Full-time MBA" },
      { student: "GPA 3.6｜TOEFL 83", rank: "US #109", school: "University of Arizona", major: "MS in Computer Science" },
      { student: "GPA 3.9｜TOEFL 90", rank: "US #109", school: "University of Arizona", major: "MS in Clinical Translational Sciences" },
      { student: "GPA 3.1｜TOEFL 82", rank: "US #109", school: "University of Tennessee, Knoxville", major: "Electrical Engineering MS" },
      { student: "GPA 4.1/4.3｜IELTS 6.5", rank: "US #121", school: "Arizona State University", major: "Actuarial Science, MS" },
      { student: "GPA 3.8｜TOEFL 96", rank: "US #121", school: "Arizona State University", major: "Computer Science, MS" },
      { student: "GPA 3.8｜TOEFL 94", rank: "US #121", school: "Arizona State University", major: "MS in Business Analytics" },
      { student: "GPA 3.6｜TOELF 93", rank: "US #121", school: "Arizona State University", major: "Electrical Engineering, MSE" },
      { student: "GPA 2.8｜TOEFL 100", rank: "US #121", school: "Arizona State University", major: "Computer Engineering, MS" },
      { student: "GPA 2.8｜TOEFL 100", rank: "US #121", school: "Arizona State University", major: "Computer Science, MS" },
      { student: "GPA 3.8｜IELTS 6.5", rank: "US #121", school: "Arizona State University", major: "Chemistry, MS" },
      { student: "GPA 3.7｜IELTS 7.0", rank: "US #121", school: "Arizona State University", major: "Supply Chain Management (MS)" },
      { student: "GPA 3.0｜TOEFL 87", rank: "US #121", school: "University at Albany, SUNY", major: "MBA" },
      { student: "74%｜TOEFL 81", rank: "US #136", school: "University of Utah", major: "MS Mechanical Engineering" },
      { student: "GPA 2.9｜TOEFL 105", rank: "US #144", school: "Oregon State University", major: "General Study" },
      { student: "GPA 3.6｜TOEFL 83", rank: "US #144", school: "Oregon State University", major: "Computer Science, MS" },
      { student: "GPA 2.8｜TOEFL 78", rank: "US #144", school: "Oregon State University", major: "(MEng) Mechanical Engineering" },
      { student: "GPA 2.8｜TOEFL 100", rank: "US #144", school: "Oregon State University", major: "Computer Science (MEng)" },
      { student: "GPA 4.0/4.3｜TOFEL 51", rank: "US #144", school: "Oregon State University", major: "Electrical & Computer Engineering" },
      { student: "GPA 3.8｜TOEFL 96", rank: "US #144", school: "Oregon State University", major: "MS in Computer Science" },
      { student: "GPA 4.1/4.3｜TOEFL 89", rank: "US #144", school: "University of Maryland, Baltimore", major: "Pharmaceutical Sciences, MS" },
      { student: "GPA 3.6｜TOEFL 87", rank: "US #152", school: "University of Nebraska-Lincoln", major: "MA in Strategic Marketing Communication" }
    ]
  },
  {
    category: "全球金榜 (Global List / QS Rankings)",
    items: [
      { student: "GPA 3.9/4.3｜IELTS 6.5", rank: "QS #2", school: "Imperial College London", major: "MSc Sustainable Energy Futures" },
      { student: "GPA 3.9/4.3｜IELTS 6.5", rank: "QS #5", school: "University of Cambridge", major: "MPhil in Energy Technologies" },
      { student: "GPA 4.1/4.3｜TOEFL 89", rank: "QS #9", school: "University College London", major: "MSc Experimental Pharmacology and Therapeutics" },
      { student: "GPA 3.7/82.7%｜IELTS 7.0", rank: "QS #9", school: "University College London", major: "MSc International City Planning" },
      { student: "GPA 3.5/82%｜TOEFL 106", rank: "QS #13", school: "The University of Melbourne", major: "Master of Mechanical Engineering" },
      { student: "GPA 3.9/88%", rank: "QS #13", school: "The University of Melbourne", major: "Master of Management (Marketing)" },
      { student: "GPA 3.9｜IELTS 7.0", rank: "QS #13", school: "The University of Melbourne", major: "Master of Actuarial Science" },
      { student: "GPA 3.6/81.6%", rank: "QS #13", school: "The University of Melbourne", major: "Master of Information Technology" },
      { student: "GPA 3.4｜TOEFL 93", rank: "QS #13", school: "The University of Melbourne", major: "Master of Management (Accounting and Finance)" },
      { student: "GPA 3.9/88%", rank: "QS #18", school: "University of Sydney", major: "Master of Commerce (Extension)" },
      { student: "GPA 3.9｜IELTS 7.0", rank: "QS #18", school: "University of Sydney", major: "Master of Commerce (Extension)" },
      { student: "GPA 3.5/80.7%｜IELTS 6.5", rank: "QS #18", school: "University of Sydney", major: "Master of Professional Engineering (Accelerated) (Electrical)" },
      { student: "GPA 3.6/81.6%", rank: "QS #18", school: "University of Sydney", major: "Master of Computer Science (advanced entry)" },
      { student: "GPA 3.9/86.7%｜IELTS 7.0", rank: "QS #18", school: "University of Sydney", major: "Master of Commerce (Extension)" },
      { student: "GPA 3.4｜TOEFL 93", rank: "QS #18", school: "University of Sydney", major: "Master of Professional Accounting and Business Performance" },
      { student: "GPA 3.5/82%｜TOEFL 106", rank: "QS #18", school: "University of Sydney", major: "Master of Professional Engineering(Mechanical)" },
      { student: "68.80%｜IELTS 4.5", rank: "QS #18", school: "University of Sydney", major: "Foundation Program - Standard Course" },
      { student: "GPA 3.4｜TOEFL 93", rank: "QS #19", school: "University of New South Wales", major: "Master of Professional Accounting" },
      { student: "GPA 3.9｜IELTS 7.0", rank: "QS #19", school: "University of New South Wales", major: "Master of Actuarial Studies (Extension)" },
      { student: "68.80%｜IELTS 4.5", rank: "QS #19", school: "UNSW College", major: "Bachelor of Engineering (Honours) (Civil with Architecture)" },
      { student: "GPA 3.5/82%｜TOEFL 106", rank: "QS #30", school: "Australian National University", major: "Master of Science in Materials Science" },
      { student: "GPA 3.9/88%", rank: "QS #30", school: "Australian National University", major: "Master of Marketing Management" },
      { student: "GPA 3.9｜IELTS 7.0", rank: "QS #30", school: "Australian National University", major: "Master of Actuarial Studies" },
      { student: "84.10%｜IELTS 5.5", rank: "QS #33", school: "Cranfield University", major: "MBA" },
      { student: "87.00%｜IELTS 6.5", rank: "QS #33", school: "Cranfield University", major: "Logistics and Supply Chain Management MSc" },
      { student: "79.00%｜IELTS 6.0", rank: "QS #34", school: "University of Manchester", major: "International Foundation in Business and Humanities" },
      { student: "76.80%｜IELTS 7.0", rank: "QS #34", school: "University of Manchester", major: "MSc in Management" },
      { student: "GPA 3.7/82.7%｜IELTS 7.0", rank: "QS #34", school: "University of Manchester", major: "MSc Urban Design and International Planning" },
      { student: "GPA 3.8｜IELTS 7.0", rank: "QS #34", school: "University of Manchester", major: "MSc Marketing" },
      { student: "68.80%｜IELTS 4.5", rank: "QS #37", school: "Monash University", major: "Bachelor of Architectural Design" },
      { student: "GPA 3.5/82%｜TOEFL 106", rank: "QS #37", school: "Monash University", major: "Master of Professional Engineering (Materials Engineering)" },
      { student: "GPA 3.5/80.7%｜IELTS 6.5", rank: "QS #37", school: "Monash University", major: "Master of Professional Engineering (Electrical Engineering)" },
      { student: "GPA 2.4/69.8%｜IELTS 5.5", rank: "QS #37", school: "Monash University", major: "Bachelor of Psychology" },
      { student: "GPA 3.9/86.7%｜IELTS 7.0", rank: "QS #37", school: "Monash University", major: "Master of Business" },
      { student: "GPA 2.4/69.8%｜IELTS 5.5", rank: "QS #37", school: "Monash University", description: "Foundation Year - Standard" },
      { student: "95.30%｜IELTS 7.5", rank: "QS #38", school: "University of British Columbia", major: "Master of Engineering in Electrical and Computer Engineering (MEng)" },
      { student: "GPA 3.9/85.8%｜IELTS 7.0", rank: "QS #40", school: "King's College London", major: "Environmental, Social, Governance (ESG) Management MSc" },
      { student: "79.00%｜IELTS 6.0", rank: "QS #40", school: "King's College London", major: "BSc Economics and Management" },
      { student: "76.80%｜IELTS 7.0", rank: "QS #40", school: "King's College London", major: "Human Resource Management & Organisational Analysis MSc" },
      { student: "GPA 3.8｜IELTS 7.0", rank: "QS #40", school: "King's College London", major: "International Marketing MSc" },
      { student: "GPA 2.4/69.8%｜IELTS 5.5", rank: "QS #40", school: "The University of Queensland", major: "Bachelor of Science" },
      { student: "GPA 3.9/86.7%｜IELTS 7.0", rank: "QS #40", school: "The University of Queensland", major: "Master of Business" },
      { student: "GPA 3.5/80.7%｜IELTS 6.5", rank: "QS #40", school: "The University of Queensland", major: "Master of Engineering Science (Electrical Engineering/Management)" },
      { student: "GPA 3.9/88%｜IELTS 7.5", rank: "QS #40", school: "The University of Queensland", major: "Master of Business (Marketing)" },
      { student: "GPA 2.4/69.8%｜IELTS 5.5", rank: "QS #40", school: "University of Queensland College", major: "Standard Foundation Program" },
      { student: "GPA 3.9/85.8%｜IELTS 7.0", rank: "QS #54", school: "University of Bristol", major: "MSc International Business and Strategy: Global Challenges" },
      { student: "76.80%｜IELTS 7.0", rank: "QS #69", school: "The University of Warwick", major: "Management MSc" },
      { student: "GPA 3.8｜IELTS 7.0", rank: "QS #69", school: "The University of Warwick", major: "Master of Science" },
      { student: "GPA 2.4/69.8%｜IELTS 5.5", rank: "QS #77", school: "University of Western Australia", major: "Bachelor of Psychology and Arts" },
      { student: "76.80%｜IELTS 7.0", rank: "QS #78", school: "The University of Glasgow", major: "Management MSc" },
      { student: "GPA 3.9/85.8%｜IELTS 7.0", rank: "QS #78", school: "University of Glasgow", major: "Environment & Sustainable Development MSc" },
      { student: "GPA 3.7/82.7%｜IELTS 7.0", rank: "QS #80", school: "University of Birmingham", major: "MSc Urban and Regional Planning" },
      { student: "79.00%｜IELTS 6.0", rank: "QS #82", school: "University of Leeds", major: "International Foundation Year" },
      { student: "87.00%｜IELTS 6.5", rank: "QS #82", school: "University of Leeds", major: "Global Supply Chain Management MSc" },
      { student: "76.80%｜IELTS 7.0", rank: "QS #82", school: "University of Leeds", major: "MA Human Resource Management" },
      { student: "GPA 3.5/82%｜TOEFL106", rank: "QS #82", school: "The University of Adelaide", major: "Master of Materials Engineering" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #82", school: "The University of Adelaide", major: "Master of Marketing" },
      { student: "72.20%", rank: "QS #82", school: "The University of Adelaide", major: "Master of Engineering (Mechanical)" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #88", school: "University of Technology Sydney", major: "Master of Marketing" },
      { student: "72.20%", rank: "QS #88", school: "University of Technology Sydney", major: "Master of Professional Engineering (Mechanical Engineering)" },
      { student: "68.80%｜IELTS 4.5", rank: "QS #88", school: "University of Technology Sydney", major: "Diploma of Design and Architecture" },
      { student: "GPA 2.8/70.8%", rank: "QS #88", school: "University of Technology Sydney", major: "Master of Engineering (Extension) - Robotics" },
      { student: "GPA 3.7｜IELTS 6.0", rank: "QS #89", school: "Durham University", major: "MSC Finance (Accounting and Finance)" },
      { student: "GPA 3.8｜IELTS 7.0", rank: "QS #104", school: "University of St. Andrew", major: "MLitt Marketing" },
      { student: "76.80%｜IELTS 7.0", rank: "QS #105", school: "University of Sheffield", major: "MSc Human Resource Management" },
      { student: "GPA 3.7/82.7%｜IELTS 7.0", rank: "QS #105", school: "University of Sheffield", major: "MSc Urban and Regional Planning" },
      { student: "76.80%｜IELTS 7.0", rank: "QS #108", school: "University of Nottingham", major: "Business and Management MSc" },
      { student: "95.30%｜IELTS 7.5", rank: "QS #115", school: "University of Waterloo", major: "Master of Engineering (MEng)" },
      { student: "GPA 3.5/79.8%", rank: "QS #120", school: "Queen Mary University of London", major: "Digital Marketing MSc" },
      { student: "GPA 3.8｜IELTS 7.0", rank: "QS #120", school: "Queen Mary University of London", major: "MSc Marketing" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #123", school: "RMIT University", major: "Master of Marketing" },
      { student: "GPA 3.9/86.7%｜IELTS 7.0", rank: "QS #123", school: "RMIT University", major: "Master of Project Management" },
      { student: "GPA 3.5/80.7%｜IELTS 6.5", rank: "QS #123", school: "RMIT University", major: "Master of Engineering (Electrical and Electronic)" },
      { student: "GPA 2.8/70.8%", rank: "QS #123", school: "RMIT University", major: "Master of Engineering (Electrical Engineering)" },
      { student: "GPA 3.9/86.7%｜IELTS 7.0", rank: "QS #133", school: "Macquarie University", major: "Master of Management" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #133", school: "Macquarie University", major: "Master of Marketing" },
      { student: "87.00%｜IELTS 6.5", rank: "QS #141", school: "Lancaster University", major: "Logistics and Supply Chain Management" },
      { student: "84.10%｜IELTS 5.5", rank: "QS #150", school: "University of Bath", major: "MSc Management" },
      { student: "GPA 3.5/80%", rank: "QS #150", school: "University of Bath", major: "Marketing MSc" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #167", school: "University of Wollongong", major: "Master of Marketing" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #179", school: "University of Newcastle Australia", major: "Master of Business Administration/Marketing" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #197", school: "Deakin University", major: "Master of Business (Marketing)" },
      { student: "95.30%｜IELTS 7.5", rank: "QS #198", school: "University of Calgary", major: "Master of Engineering (MEng)" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #213", school: "Queensland University of Technology", major: "Master of Business" },
      { student: "72.20%", rank: "QS #213", school: "Queensland University of Technology", major: "Master of Professional Engineering" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #251", school: "University of Roehampton London", major: "MSc Digital Marketing" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #255", school: "Griffith University", major: "Master of Business" },
      { student: "84.10%｜IELTS 5.5", rank: "QS #281", school: "University of Strathclyde", major: "MSc International Management" },
      { student: "GPA 3.8｜IELTS 5.0", rank: "QS #285", school: "University of Leicester", major: "Data Analysis for Business Intelligence MSc" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #380", school: "University of Kent", major: "MSc Marketing" },
      { student: "73.00%｜IELTS 6.0", rank: "QS #531", school: "University of Bradford", major: "MSc Digital and Strategic Marketing" }
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "我的 GPA 怎麼算？學校有不同算法嗎？",
    answer: "這是最常見的問題！通常我們會先看你原始成績單是 4.0 還是 4.3 制。申請美加學校時，建議使用 WES 等工具進行認證轉換，這往往能讓部分課程權重重新計算，有機會「美化」你的 GPA。我們會協助你試算最有利的呈現方式。"
  },
  {
    question: "托福 (TOEFL) 跟雅思 (IELTS) 該怎麼選？",
    answer: (
      <>
        簡單來說：去美國首選托福，去英澳首選雅思。但現在界線模糊了，美國 Top 30 也開始收雅思，英國也收托福。建議先找 <span className="text-[#47B27E] font-bold">洋碩美語</span> 顧問做一套免費英語檢測，看哪種考試題型比較順手。若聽力較弱，雅思可能較友善；若打字快、習慣美式口音，托福更有優勢。
      </>
    )
  },
  {
    question: "代辦費用怎麼算？會不會有隱藏收費？",
    answer: "我們採「全透明方案制」。諮詢時會根據你想申請的學校數量（如 5 所、7 所、9 所）報價。費用包含一條龍完整服務，從落點選校、書審輔佐、申請填表、簽證輔導⋯⋯等。絕無「錄取後再抽成」或「硬推合作學校」的隱藏條款。"
  },
  {
    question: "一定要有 GRE/GMAT 成績嗎？",
    answer: "後疫情時代，許多美國理工學院 (Engineering) 已將 GRE 改為 Optional（可選）。但如果你 GPA 較低，或是申請頂尖商學院，一個高分的 GRE/GMAT 仍是強大的加分項。我們會根據你的背景建議是否需要備考。"
  },
  {
    question: "如果我在申請過程中想要調整申請領域或科系？",
    answer: "若學生想要轉換申請領域或科系，放洋顧問將會優先與學生重新聚焦未來的職涯發展，確保最終申請間數的校所符合學生需求。新版選校表將酌收相關費用。"
  },
  {
    question: "如果我申請失敗了，還可以再申請其他學校嗎？",
    answer: "放洋留遊學品牌成立至今，截至目前為止尚未遇過全數落榜的學生喔！正如同我們今年的統計數據，學生如果按照顧問的落點規劃，基本上都能夠取得適合學生留學規劃的校所。"
  }
];
