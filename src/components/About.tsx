'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
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
    <section id="about" className="py-20 md:py-28 bg-bg-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="rule-accent" />
              <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-ink-3">
                Аналитика
              </span>
            </div>
            <h2 className="text-[clamp(2rem,6.5vw,4.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-ink">
              Тренд<span className="text-accent-soft">вотчинг</span>
            </h2>
            <p className="mt-3 text-sm font-medium tracking-[0.2em] uppercase text-ink-3">
              в fashion
            </p>
          </motion.div>

          {/* Points — compact list on desktop right */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:max-w-md space-y-4"
          >
            {points.map((point, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-[11px] font-semibold tabular-nums text-accent-soft/80 pt-1 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-sm md:text-[15px] text-ink-2 leading-relaxed">{point}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Cards — horizontal scroll mobile, grid desktop */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible scrollbar-none">
          {cards.map((card, i) => (
            <motion.article
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="snap-start shrink-0 w-[78vw] sm:w-[52vw] md:w-auto group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-card">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 78vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-bg/90 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-accent-soft uppercase">
                    {card.number}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-[-0.01em] text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">{card.body}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
