'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-4 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10 relative z-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none">
              Готовы создать <br/>
              <span className="text-gray-600">свой бренд?</span>
            </h2>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-8">
            <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
              <span>Отправить заявку</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a href="tel:+79990000000" className="text-3xl md:text-5xl font-light hover:text-gray-300 transition-colors tracking-tight text-right">
              +7 (999) 000-00-00
            </a>
            
            <div className="flex flex-wrap justify-end gap-4">
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl backdrop-blur-sm transition-all border border-white/10 hover:border-white/30 group">
                <span className="text-lg font-medium">Telegram</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </a>
              <a href="https://wa.me/79990000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl backdrop-blur-sm transition-all border border-white/10 hover:border-white/30 group">
                <span className="text-lg font-medium">WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom Big Text */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
           <p className="text-xs text-gray-600 uppercase tracking-widest">
             © {new Date().getFullYear()} Trend Platforma. All rights reserved.
           </p>
           <div className="flex gap-6">
             <a href="#" className="text-xs text-gray-600 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
           </div>
        </div>
        
        <div className="mt-4 md:-mt-10 select-none pointer-events-none relative z-0 opacity-20 md:opacity-10 mix-blend-overlay">
          <h1 className="text-[15vw] leading-none font-black text-white text-center tracking-tighter">
            PLATFORMA
          </h1>
        </div>
      </div>
    </footer>
  );
}
