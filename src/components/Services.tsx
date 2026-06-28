'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'design',
    number: '01',
    title: 'ДИЗАЙН',
    details: [
      'Создание художественных эскизов',
      'Создание технических рисунков',
      'Формирование тех.документации для договоров и для цеха.'
    ],
    contactUrl: 'https://t.me/username'
  },
  {
    id: 'engineering',
    number: '02',
    title: 'ПРОЕКТИРОВАНИЕ',
    details: [
      'Создание лекал с нуля',
      'Проверка готовых лекал',
      'Диагностика и решение проблемы посадки вещи.',
      'Технология пошива для цеха.',
      'Отшив образца.'
    ],
    contactUrl: 'https://t.me/username'
  },
  {
    id: 'sewing',
    number: '03',
    title: 'ПОШИВ',
    details: [
      'Пошив для индивидуальных заказчиков',
      'Дизайнерская реконструкция готовых вещей. (Апсайклинг)',
      'Отшив образца для цеха, тестовых партий (от 5 шт).'
    ]
  }
];

function HoleTitle({ title, isActive }: { title: string; isActive: boolean }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['center 0%', 'center 100%']
  );

  return (
    <h3
      ref={ref}
      className="relative text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none"
    >
      <span
        aria-hidden
        className={`absolute inset-0 select-none pointer-events-none transition-all duration-500 ${
          isActive ? 'text-hole-stroke--active' : 'text-hole-stroke'
        }`}
      >
        {title}
      </span>
      <motion.span
        className={`relative block transition-opacity duration-500 ${
          isActive ? 'text-hole text-hole--active opacity-100' : 'text-hole opacity-90'
        }`}
        style={{ backgroundPosition }}
      >
        {title}
      </motion.span>
    </h3>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const ambientY = useTransform(scrollYProgress, [0, 1], ['-8%', '18%']);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 px-4 bg-background relative z-10 overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ y: ambientY }}
      >
        <div
          className="absolute left-1/2 top-0 h-[140%] w-[120%] -translate-x-1/2 opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, #c9b59f 0%, transparent 55%), radial-gradient(ellipse at 70% 60%, #6f5f52 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, #4a3f38 0%, transparent 45%)',
          }}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        <div className="space-y-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative border-b border-hero-warm-deep/30 transition-all duration-500 group ${
                activeService === service.id
                  ? 'bg-hero-warm-deep/15 rounded-sm border-none py-12 px-6 md:px-12'
                  : 'py-8'
              }`}
            >
              <div className="relative z-10">
                <button
                  onClick={() =>
                    setActiveService(activeService === service.id ? null : service.id)
                  }
                  className="w-full text-left flex items-center justify-between group/btn"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span
                      className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                        activeService === service.id
                          ? 'text-hero-warm-mid/70'
                          : 'text-hero-warm-muted/50'
                      }`}
                    >
                      {service.number}
                    </span>
                    <HoleTitle
                      title={service.title}
                      isActive={activeService === service.id}
                    />
                  </div>
                  <div
                    className={`p-4 rounded-full border border-hero-warm-deep/40 transition-all duration-300 text-hero-warm-mid shrink-0 ${
                      activeService === service.id
                        ? 'rotate-180 bg-hero-warm-soft/90 text-hero-warm-deep border-hero-warm-mid/50'
                        : 'group-hover/btn:bg-hero-warm-deep/20 group-hover/btn:border-hero-warm-mid/40 group-hover/btn:text-hero-warm-light'
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 md:pt-12 md:w-2/3">
                        <ul className="grid grid-cols-1 gap-4">
                          {service.details.map((detail, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.1 }}
                              className="flex items-center gap-4 text-hero-warm-mid hover:text-hero-warm-light transition-colors group/item"
                            >
                              <div className="w-8 h-[1px] bg-hero-warm-mid/40 group-hover/item:w-12 group-hover/item:bg-hero-warm-light transition-all duration-300" />
                              <span className="text-base md:text-lg tracking-wide">
                                {detail}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {service.contactUrl && (
                          <motion.a
                            href={service.contactUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="group/contact inline-flex items-center gap-3 mt-10 px-8 py-3.5 bg-hero-warm-soft/90 text-hero-warm-deep border border-hero-warm-mid/40 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-hero-warm-light hover:border-hero-warm-mid/60 transition-all duration-300"
                          >
                            <span>Связаться</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
