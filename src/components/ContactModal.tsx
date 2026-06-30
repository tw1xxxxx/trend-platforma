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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (!digits) return '';
    if (digits[0] !== '7') digits = '7' + digits;

    let out = '+7';
    if (digits.length > 1) out += ' (' + digits.slice(1, 4);
    if (digits.length > 4) out += ') ' + digits.slice(4, 7);
    if (digits.length > 7) out += '-' + digits.slice(7, 9);
    if (digits.length > 9) out += '-' + digits.slice(9, 11);
    return out;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && phone.length <= 4) setPhone('');
  };

  const inputClass =
    'w-full bg-bg border border-line rounded-none px-4 py-3.5 text-ink placeholder:text-ink-3/50 text-base font-medium focus:outline-none focus:border-accent transition-colors duration-150';

  const phoneClass =
    `${inputClass} tabular-nums tracking-normal font-sans`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-bg w-full sm:max-w-md sm:rounded-none overflow-hidden shadow-2xl"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-accent" />

            <div className="px-7 py-8 sm:px-8 sm:py-9">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 text-ink-3 hover:text-accent transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-display font-bold text-3xl uppercase text-ink mb-1">
                Оставить заявку
              </h3>
              <p className="text-sm text-ink-3 mb-8 tracking-wide">
                Мы свяжемся с вами в ближайшее время
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-ink-3 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-ink-3 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    maxLength={18}
                    className={phoneClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-accent text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent-hover transition-colors duration-200 mt-2 group"
                >
                  <span>Отправить</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
