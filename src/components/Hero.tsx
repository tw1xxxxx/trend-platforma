'use client';

import { motion } from 'framer-motion';

const TITLE_CHARS_1 = 'ТРЕНД'.split('');
const TITLE_CHARS_2 = '— ПЛАТФОРМА'.split('');

const TICKER_ITEMS = [
  'Тренд — Платформа',
  'Создание брендов одежды',
  'Дизайн',
  'Проектирование',
  'Пошив',
  'Обучение',
  'Трендвотчинг',
  'Fashion',
];

const TICKER_TEXT = TICKER_ITEMS.join('  ·  ') + '  ·  ';
// Duplicate for seamless loop
const TICKER_FULL = TICKER_TEXT + TICKER_TEXT;

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">

      {/* ── VIDEO + WARM OVERLAY ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/back.mp4" type="video/mp4" />
        </video>
        {/* Gradient: strong warm at bottom (text area), lighter at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(var(--bg-rgb),0.55) 0%, rgba(var(--bg-rgb),0.72) 40%, rgba(var(--bg-rgb),0.90) 75%, rgba(var(--bg-rgb),0.97) 100%)',
          }}
        />
      </div>

      {/* ── DECORATIVE RIGHT-SIDE LABEL ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-1/2 right-5 md:right-8 -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-4"
        aria-hidden="true"
      >
        <div className="w-[1px] h-12 bg-line/60" />
        <span
          className="text-[8px] tracking-[0.4em] uppercase text-ink-3/40 font-medium"
          style={{ writingMode: 'vertical-rl' }}
        >
          fashion · brand · studio
        </span>
        <div className="w-[1px] h-12 bg-line/60" />
      </motion.div>

      {/* ── MAIN TITLE — bottom-anchored ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 sm:px-8 md:px-12 pb-16 md:pb-20">

        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-5 h-[1px] bg-accent-soft" />
          <span className="text-[10px] font-medium tracking-[0.35em] uppercase text-ink-3/70">
            Москва, с 2020
          </span>
        </motion.div>

        {/* ТРЕНД — character stagger */}
        <div
          className="font-display font-bold uppercase leading-[0.85] text-ink overflow-hidden"
          style={{ fontSize: 'clamp(72px, 21vw, 220px)' }}
          aria-label="ТРЕНД"
        >
          <div className="flex">
            {TITLE_CHARS_1.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 0.35 + i * 0.07,
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* — ПЛАТФОРМА */}
        <div
          className="font-display font-light uppercase leading-tight text-ink-2 overflow-hidden ml-0.5"
          style={{ fontSize: 'clamp(24px, 7vw, 76px)', letterSpacing: '-0.01em' }}
          aria-label="— ПЛАТФОРМА"
        >
          <div className="flex flex-wrap">
            {TITLE_CHARS_2.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 0.7 + i * 0.04,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="text-ink-2 mt-4 ml-1 font-light"
          style={{ fontSize: 'clamp(14px, 2.2vw, 20px)' }}
        >
          Смотрим в будущее —{' '}
          <span className="text-ink font-medium uppercase tracking-[0.18em]" style={{ fontSize: '0.85em' }}>
            создаём настоящее
          </span>
        </motion.p>
      </div>

      {/* ── MARQUEE TICKER ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="relative z-10 border-t border-line/50 bg-bg/70 backdrop-blur-sm overflow-hidden"
      >
        <div className="marquee-track py-2.5 select-none" aria-hidden="true">
          {TICKER_FULL.split('').map((char, i) => (
            <span
              key={i}
              className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${
                char === '·' ? 'text-accent-soft' : 'text-ink-3/60'
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
