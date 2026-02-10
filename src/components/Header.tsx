'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: 'Услуги', href: '#services' },
    { title: 'Обучение', href: '#education' },
    { title: 'О нас', href: '#about' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Phone Number - Clickable */}
          <a 
            href="tel:+79990000000" 
            className="flex items-center gap-2 font-bold text-lg text-white hover:text-gray-300 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+7 (999) 000-00-00</span>
          </a>

          {/* Burger Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors relative z-50"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  className="w-full text-center py-4 border-b border-white/10 text-3xl md:text-5xl font-bold uppercase text-white hover:text-gray-400 transition-colors"
                >
                  {item.title}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * menuItems.length + 0.3 }}
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full mt-4 flex items-center justify-center gap-3 bg-white text-black px-8 py-6 rounded-full font-bold hover:bg-gray-200 transition-colors text-xl md:text-2xl"
              >
                <span>Оставить заявку</span>
                <ArrowUpRight className="w-6 h-6" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
