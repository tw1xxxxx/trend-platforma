'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'design',
    number: '01',
    title: 'Дизайн',
    details: [
      'Создание художественных эскизов',
      'Создание технических рисунков',
      'Формирование тех.документации для договоров и для цеха.',
    ],
    contactUrl: 'https://t.me/trendplatforma',
  },
  {
    id: 'engineering',
    number: '02',
    title: 'Проектирование',
    details: [
      'Создание лекал с нуля',
      'Проверка готовых лекал',
      'Диагностика и решение проблемы посадки вещи.',
      'Технология пошива для цеха.',
      'Отшив образца.',
    ],
    contactUrl: 'https://t.me/trendplatforma',
  },
  {
    id: 'sewing',
    number: '03',
    title: 'Пошив',
    details: [
      'Пошив для индивидуальных заказчиков',
      'Дизайнерская реконструкция готовых вещей. (Апсайклинг)',
      'Отшив образца для цеха, тестовых партий (от 5 шт).',
    ],
    contactUrl: 'https://t.me/trendplatforma',
  },
];

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-bg">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <span className="rule-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-ink-3 font-medium">
            Направления
          </span>
        </motion.div>

        {/* Accordion */}
        <div>
          {services.map((service, index) => {
            const isOpen = open === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-line"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : service.id)}
                  className="w-full py-7 md:py-8 flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 md:gap-8 min-w-0 flex-1 overflow-hidden">
                    <span className="text-[10px] font-mono text-ink-3/50 tabular-nums shrink-0 w-5">
                      {service.number}
                    </span>
                    <h3
                      className={`font-display font-bold uppercase leading-none transition-colors duration-200 min-w-0 ${
                        isOpen ? 'text-accent' : 'text-ink group-hover:text-accent'
                      }`}
                      style={{ fontSize: 'clamp(28px, 7.5vw, 72px)', wordBreak: 'keep-all', overflowWrap: 'normal' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div
                    className={`shrink-0 ml-4 transition-colors duration-200 ${
                      isOpen ? 'text-accent' : 'text-ink-3 group-hover:text-accent'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 md:pb-12 pl-9 md:pl-16">
                        <ul className="space-y-3.5 mb-9">
                          {service.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.06 }}
                              className="flex items-start gap-3 text-ink-2 text-base md:text-lg leading-relaxed"
                            >
                              <span className="mt-[11px] shrink-0 block w-4 h-[1px] bg-accent/50" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <motion.a
                          href={service.contactUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.18 }}
                          className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent-hover transition-colors duration-200 group"
                        >
                          <span>Связаться</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
