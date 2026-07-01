'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setName('');
      setPhone('');
    }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, '').length < 11) return;
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-bg-2 px-4 py-3.5 text-base font-medium text-ink placeholder:text-ink-3/50 transition-colors duration-150 focus:border-ink focus:outline-none';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />

          <motion.div
            initial={isMobile ? { y: '100%' } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={isMobile ? { y: 0 } : { opacity: 1, y: 0, scale: 1 }}
            exit={isMobile ? { y: '100%' } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={
              isMobile
                ? { type: 'spring', damping: 32, stiffness: 340 }
                : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }
            className="relative w-full max-h-[92dvh] overflow-y-auto bg-bg shadow-2xl sm:max-w-md sm:rounded-2xl rounded-t-[28px]"
          >
            <div
              className="sticky top-0 z-10 flex flex-col items-center bg-bg pt-3 pb-2 sm:hidden"
              aria-hidden
            >
              <div className="h-1 w-10 rounded-full bg-line" />
            </div>

            <div className="px-6 pb-8 pt-2 sm:px-8 sm:py-9 sm:pt-9">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 text-ink-3 transition-colors hover:text-ink sm:top-5 sm:right-5"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-bg-2 border border-line mb-5">
                    <Check className="w-5 h-5 text-ink" />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-ink mb-2">
                    Заявка принята
                  </h3>
                  <p className="text-sm text-ink-3 mb-6 leading-relaxed">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                  <a
                    href="https://t.me/trendplatforma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 hover:text-ink transition-colors"
                  >
                    Или напишите в Telegram
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-3xl uppercase text-ink mb-1">
                    Оставить заявку
                  </h3>
                  <p className="text-sm text-ink-3 mb-8 tracking-wide">
                    Мы свяжемся с вами в ближайшее время
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase text-ink-3 mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
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
                        required
                        className={`${inputClass} text-phone`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-ink py-4 text-xs font-bold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:bg-accent-hover"
                    >
                      <span>Отправить</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
