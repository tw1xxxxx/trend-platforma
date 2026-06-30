'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, Mail } from 'lucide-react';
import Link from 'next/link';
import ContactModal from './ContactModal';

const navItems = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Команда', href: '/#team' },
  { label: 'Обучение', href: '/#education' },
  { label: 'Трендвотчинг', href: '/#about' },
  { label: 'Курсы', href: '/education' },
];

const socials = [
  {
    label: 'Telegram',
    href: 'https://t.me/trendplatforma',
    handle: '@trendplatforma',
    icon: 'telegram',
  },
  {
    label: 'ВКонтакте',
    href: 'https://vk.com/trendplatforma',
    handle: 'Группа',
    icon: 'vk',
  },
  {
    label: 'Почта',
    href: 'mailto:trend_platforma@mail.ru',
    handle: 'trend_platforma@mail.ru',
    icon: 'mail',
  },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M21.643 3.03c.534-.535 1.36-.086 1.15.645l-3.328 14.544c-.164.717-.98.98-1.57.505l-5.188-4.172-2.65 2.65c-.38.38-1.03.11-1.03-.43V13.5l8.6-8.2c.4-.38-.1-.95-.6-.56L7.3 11.2 3.1 9.9c-.7-.2-.7-1.2 0-1.4l17-6.5c.6-.2 1.3.2 1.54 1.03z"
      />
    </svg>
  );
}

function VkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.609 2.18-3.609.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.744-.576.744z"
      />
    </svg>
  );
}

function SocialIcon({ type, className }: { type: string; className?: string }) {
  if (type === 'telegram') return <TelegramIcon className={className} />;
  if (type === 'vk') return <VkIcon className={className} />;
  return <Mail className={className} />;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-[2px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled && !menuOpen
            ? 'bg-bg/94 backdrop-blur-md border-b border-line/50 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            <a
              href="tel:+79629388933"
              className="flex items-center gap-2 text-ink-3 hover:text-accent transition-colors text-sm font-medium tracking-wide shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+7 (962) 938-89-33</span>
            </a>

            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 font-display font-bold uppercase tracking-[0.06em] text-ink hover:text-accent transition-colors"
              style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}
            >
              ТРЕНД <span className="font-light text-ink-3">— ПЛАТФОРМА</span>
            </Link>

            <div className="flex items-center gap-5">
              <nav className="flex items-center gap-5">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs font-medium tracking-[0.12em] uppercase text-ink-2 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent-hover transition-colors"
              >
                <span>Заявка</span>
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center justify-between">
            <a
              href="tel:+79629388933"
              className="flex items-center gap-1.5 text-ink-3 hover:text-accent transition-colors"
              aria-label="Позвонить"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-medium tracking-wide hidden sm:inline">
                +7 (962) 938-89-33
              </span>
            </a>

            <Link
              href="/"
              onClick={() => menuOpen && closeMenu()}
              className="absolute left-1/2 -translate-x-1/2 font-display font-bold uppercase tracking-[0.05em] text-ink"
              style={{ fontSize: 'clamp(13px, 3.5vw, 17px)' }}
            >
              ТРЕНД<span className="font-light text-ink-3"> — ПЛАТФОРМА</span>
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className={`relative z-[60] p-2 -mr-2 text-ink hover:text-accent transition-all duration-300 ${
                menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-label="Открыть меню"
              aria-expanded={menuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px] lg:hidden"
              aria-hidden
            />

            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[45] lg:hidden flex flex-col bg-bg overflow-hidden"
            >
              {/* Decorative background */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(-12deg, transparent, transparent 40px, var(--ink) 40px, var(--ink) 41px)',
                }}
              />
              <div className="pointer-events-none absolute -right-16 top-32 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-40 w-48 h-48 rounded-full bg-warm/60 blur-2xl" />

              {/* Menu header: brand + close */}
              <div className="relative z-10 flex items-center justify-between px-5 sm:px-6 pt-5 pb-4 border-b border-line/60">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                >
                  <p className="text-[9px] font-semibold tracking-[0.35em] uppercase text-ink-3/60 mb-0.5">
                    Меню
                  </p>
                  <p className="font-display font-bold uppercase text-ink tracking-[0.04em] text-lg">
                    Тренд<span className="font-light text-ink-3"> — Платформа</span>
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ delay: 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onClick={closeMenu}
                  className="group flex items-center justify-center w-11 h-11 border border-line bg-bg-2 hover:border-accent hover:bg-accent/5 transition-all duration-300"
                  aria-label="Закрыть меню"
                >
                  <X className="w-5 h-5 text-ink group-hover:text-accent transition-colors duration-300" />
                </motion.button>
              </div>

              {/* Scrollable body */}
              <div className="relative z-10 flex-1 overflow-y-auto px-5 sm:px-6">
                <nav className="py-4">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{
                        delay: 0.12 + i * 0.06,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-4 py-4 border-b border-line/70"
                      >
                        <span className="text-[10px] font-semibold tabular-nums text-accent/70 w-6 shrink-0">
                          0{i + 1}
                        </span>
                        <span
                          className="font-display font-bold uppercase text-ink group-hover:text-accent transition-colors duration-200 leading-tight flex-1"
                          style={{ fontSize: 'clamp(28px, 8.5vw, 48px)' }}
                        >
                          {item.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-ink-3/40 group-hover:text-accent opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="py-6"
                >
                  <button
                    onClick={() => { closeMenu(); setModalOpen(true); }}
                    className="group w-full flex items-center justify-center gap-2.5 py-4 bg-accent text-white text-xs font-bold uppercase tracking-[0.22em] hover:bg-accent-hover transition-colors duration-200"
                  >
                    <span>Оставить заявку</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.div>
              </div>

              {/* Bottom contact panel */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 shrink-0 bg-ink text-bg px-5 sm:px-6 pt-6 pb-8 safe-area-pb"
              >
                {/* Phone — prominent */}
                <a
                  href="tel:+79629388933"
                  className="group flex items-center gap-3 mb-5"
                >
                  <div className="flex items-center justify-center w-10 h-10 border border-warm/20 bg-warm/5 group-hover:border-accent/50 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-warm/40 mb-0.5">
                      Позвонить
                    </p>
                    <p className="text-lg font-semibold tracking-wide text-bg group-hover:text-accent transition-colors duration-200">
                      +7 (962) 938-89-33
                    </p>
                  </div>
                </a>

                {/* Socials */}
                <div className="border-t border-warm/10 pt-5">
                  <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-warm/40 mb-4">
                    Мы в сети
                  </p>
                  <div className="flex flex-col gap-3">
                    {socials.map((s, i) => (
                      <motion.a
                        key={s.href}
                        href={s.href}
                        target={s.icon === 'mail' ? undefined : '_blank'}
                        rel={s.icon === 'mail' ? undefined : 'noopener noreferrer'}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.07, duration: 0.35 }}
                        className="group flex items-center gap-3"
                      >
                        <div className="flex items-center justify-center w-9 h-9 border border-warm/15 bg-warm/5 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-200">
                          <SocialIcon
                            type={s.icon}
                            className="w-4 h-4 text-warm/60 group-hover:text-accent transition-colors"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-warm/40">
                            {s.label}
                          </p>
                          <p className="text-sm font-medium text-bg/80 group-hover:text-accent transition-colors truncate">
                            {s.handle}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
