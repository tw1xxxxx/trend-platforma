'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const insights = [
  {
    number: '01',
    title: 'Индустрия',
    body: 'Швейная и модная — разборы как должно быть и что реально происходит.',
    image: '/images/about/industry.jpg',
  },
  {
    number: '02',
    title: 'Производство',
    body: 'Как устроено и как работает в реальности.',
    image: '/images/about/production.jpg',
  },
  {
    number: '03',
    title: 'Стиль',
    body: 'Тренды через мышление.',
    image: '/images/about/style.jpg',
  },
];

const points = [
  'Следим за изменениями в технологиях, новостях индустрии и поведении людей.',
  'Выявляем закономерности — куда движется рынок.',
  'На основе анализа строим прогнозы, ищем новые возможности для продуктов, услуг и маркетинговых стратегий.',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* ── Header ── */}
        <div className="mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="rule-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-ink-3 font-medium">
              Аналитика
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(36px, 11vw, 140px)' }}
          >
            <span className="block text-ink">Тренд</span>
            <span className="block text-accent">вотчинг</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="font-display font-light uppercase text-ink-3 tracking-widest mt-1"
            style={{ fontSize: 'clamp(16px, 3.5vw, 32px)' }}
          >
            в fashion
          </motion.p>
        </div>

        {/* ── 3 analysis points ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-line mb-16 md:mb-24">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`py-8 px-0 md:px-8 ${i < 2 ? 'md:border-r border-b md:border-b-0 border-line' : ''}`}
            >
              <span
                className="font-display font-bold block mb-4 leading-none select-none text-line"
                style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
              >
                0{i + 1}
              </span>
              <p className="text-ink-2 text-sm md:text-base leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Asymmetric image grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

          {/* Large image — left, spans 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 group relative overflow-hidden"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-card">
              <Image
                src={insights[0].image}
                alt={insights[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="text-[9px] font-mono text-white/40 tracking-widest block mb-2">
                  {insights[0].number}
                </span>
                <h3
                  className="font-display font-bold uppercase text-white leading-none mb-2"
                  style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}
                >
                  {insights[0].title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  {insights[0].body}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column — two stacked */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-6">
            {insights.slice(1).map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.12, duration: 0.7 }}
                className="group relative overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-card">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 md:p-5">
                    <span className="text-[9px] font-mono text-white/40 tracking-widest block mb-1">
                      {item.number}
                    </span>
                    <h3
                      className="font-display font-bold uppercase text-white leading-none mb-1"
                      style={{ fontSize: 'clamp(16px, 3vw, 26px)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-xs leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
