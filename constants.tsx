import React from 'react';
import { StatItem, TimelineStep, ProfileDemo, Dimension, DocItem } from './types';

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
  { id: 1, title: "背景分析", desc: "透過諮詢進行背景分析，了解學生的基本條件和需求，作為選校基礎" },
  { id: 2, title: "目標設定", desc: "深入職涯目標，確認留學國家、學校排名等不同偏好，初步設定範圍" },
  { id: 3, title: "資源調查", desc: "進行專業資料蒐集，包括過往申請學生、入學要求、課程、學費...等" },
  { id: 4, title: "競爭力評估", desc: "依照申請經驗評估錄取機會，區分出夢幻、合適、保底的學校選項" },
  { id: 5, title: "推薦篩選", desc: "進一步深入學校選項，提供每個選項的優缺點分析，讓學生做出決策" },
  { id: 6, title: "討論調整", desc: "與學生反覆討論並調整清單，根據學生的意見與需求進行最終確認" }
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
      { type: 'Dream', label: '夢幻區', color: 'bg-pink-100 text-pink-700', schools: ['CMU', 'Stanford', 'UC Berkeley'], description: '頂尖名校，競爭極為激烈' },
      { type: 'Match', label: '落點區', color: 'bg-blue-100 text-blue-700', schools: ['UCSD', 'Columbia', 'Georgia Tech'], description: '條件相符，錄取機率高' },
      { type: 'Safety', label: '低風險區', color: 'bg-green-100 text-green-700', schools: ['USC', 'NYU', 'Purdue'], description: '安全性高，確保有學念' }
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

export const OFFER_BOARD_DATA = [
  {
    category: "理工與環境類",
    items: [
      { student: "台大資工 A 同學", rank: "US News #5", school: "Carnegie Mellon University", major: "Computer Science" },
      { student: "交大電機 B 同學", rank: "US News #12", school: "Georgia Institute of Technology", major: "Electrical Engineering" },
      { student: "成大土木 C 同學", rank: "QS #20", school: "University of Sydney", major: "Civil Engineering" }
    ]
  },
  {
    category: "醫藥與健康類",
    items: [
      { student: "北醫藥學 D 同學", rank: "US News #1", school: "Johns Hopkins University", major: "Public Health" },
      { student: "長庚生科 E 同學", rank: "World #5", school: "University of Oxford", major: "Bio-Medical Science" }
    ]
  },
  {
    category: "社區大學",
    items: [
      { student: "高中應屆 F 同學", rank: "Transfer To UC", school: "De Anza College", major: "Business" },
      { student: "五專畢業 G 同學", rank: "Top California", school: "Santa Monica College", major: "Communication" }
    ]
  },
  {
    category: "設計與媒體類",
    items: [
      { student: "台藝視覺 H 同學", rank: "Arts #2", school: "Parsons School of Design", major: "Fashion Design" },
      { student: "實踐工設 I 同學", rank: "UK #1", school: "Royal College of Art", major: "Industrial Design" }
    ]
  },
  {
    category: "商業與管理類",
    items: [
      { student: "政大企管 J 同學", rank: "MBA Top 10", school: "University of Chicago Booth", major: "Business Administration" },
      { student: "台大財金 K 同學", rank: "Ivy League", school: "Columbia University", major: "Financial Engineering" }
    ]
  }
];
