
import React from 'react';
import { FangYangLogo } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    {/* Logo 與 品牌文字組合 */}
                    <div className="flex items-center gap-4 mb-8 group cursor-default">
                        <FangYangLogo className="w-16 h-auto brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500" />
                        <span className="text-2xl font-black tracking-widest text-white">放洋留遊學</span>
                    </div>
                    
                    {/* 版權聲明置中 */}
                    <p className="text-slate-500 text-sm font-medium">
                        © 2025 FangYang Global Education. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
