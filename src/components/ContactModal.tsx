'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let numbers = value.replace(/\D/g, '');

    // Handle empty input
    if (numbers.length === 0) {
      setPhone('');
      return;
    }

    // Logic: If first digit is NOT 7, treat it as the second digit (after 7)
    // If first digit IS 7, treat it as the country code
    if (numbers[0] === '7') {
      // Keep it as is (starts with 7)
    } else {
      // Prepend 7
      numbers = '7' + numbers;
    }

    // Formatting
    let formatted = '+7';
    
    if (numbers.length > 1) {
      formatted += ' (' + numbers.substring(1, 4);
    }
    if (numbers.length > 4) {
      formatted += ') ' + numbers.substring(4, 7);
    }
    if (numbers.length > 7) {
      formatted += '-' + numbers.substring(7, 9);
    }
    if (numbers.length > 9) {
      formatted += '-' + numbers.substring(9, 11);
    }

    setPhone(formatted);
  };

  // Handle backspace specifically to allow clearing the input easily
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // If the user presses Backspace and the value is just the prefix or close to it, clear it
    if (e.key === 'Backspace' && phone.length <= 4) {
       setPhone('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#111] border border-white/10 rounded-2xl p-8 w-full max-w-md overflow-hidden"
          >
             {/* Close button */}
             <button 
               onClick={onClose}
               className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors"
             >
               <X className="w-6 h-6" />
             </button>

             <h3 className="text-2xl font-bold text-white mb-2">Оставить заявку</h3>
             <p className="text-gray-400 mb-8">Мы свяжемся с вами в ближайшее время</p>

             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <input
                   type="text"
                   placeholder="Ваше имя"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                 />
               </div>
               
               <div>
                 <input
                   type="tel"
                   inputMode="numeric"
                   placeholder="+7 (___) ___-__-__"
                   value={phone}
                   onChange={handlePhoneChange}
                   onKeyDown={handleKeyDown}
                   maxLength={18}
                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                 />
               </div>

               <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                 <span>Отправить</span>
                 <ArrowUpRight className="w-5 h-5" />
               </button>
             </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
