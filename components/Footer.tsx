import React from 'react';
import { FangYangLogo } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <FangYangLogo className="w-32 h-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                    <p className="text-slate-500 mt-4 text-sm">© 2025 FangYang Global Education. All rights reserved.</p>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">關於我們</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">聯絡資訊</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">隱私權政策</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;