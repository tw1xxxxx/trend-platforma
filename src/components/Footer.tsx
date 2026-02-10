'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20">
          {/* Left Side: Main Heading */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight">
              Готовы создать <br/>
              <span className="text-gray-500">свой бренд?</span>
            </h2>
          </div>

          {/* Right Side: Button & Icons */}
          <div className="w-full lg:w-1/2 flex flex-row flex-wrap items-center justify-center lg:justify-end gap-6 lg:gap-8">
            <div className="flex gap-4">
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-white/10 transition-all group" aria-label="Telegram">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#229ED9] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0 0 24V0z" fill="white" className="opacity-0 group-hover:opacity-10 transition-opacity"/>
                  <path d="M21.643 3.03c.534-.535 1.36-.086 1.15.645l-3.328 14.544c-.164.717-.98.98-1.57.505l-5.188-4.172-2.65 2.65c-.38.38-1.03.11-1.03-.43V13.5l8.6-8.2c.4-.38-.1-.95-.6-.56L7.3 11.2 3.1 9.9c-.7-.2-.7-1.2 0-1.4l17-6.5c.6-.2 1.3.2 1.54 1.03z"/>
                </svg>
              </a>
              <a href="https://wa.me/79990000000" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full hover:bg-white/10 transition-all group" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#25D366] fill-current" xmlns="http://www.w3.org/2000/svg">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              <span>Отправить заявку</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright / Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Trend Planforma. Все права защищены.</p>
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
