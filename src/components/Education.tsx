'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const details = [
  'Эксперт-практик, более 40-летний опыт в швейной и модной отрасли.',
  'Технолог-конструктор. Преподаватель.',
  'Опыт работы в домах моды.',
  '15 лет помощи создателям брендов и селлерам (массмаркет).',
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10 md:mb-14"
        >
          <span className="rule-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-ink-3 font-medium">
            Обучение
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display font-bold uppercase leading-[0.9] text-ink mb-10 md:mb-12"
              style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
            >
              Обучение,{' '}
              <span className="text-accent-soft">семинары,</span>
              <br />
              переподготовка
            </h2>

            {/* Specialist card */}
            <div className="flex gap-6 sm:gap-8 items-start">
              {/* Photo — contained frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="shrink-0 relative w-[90px] sm:w-[110px]"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-bg-card">
                  <Image
                    src="/images/education/specialist.png"
                    alt="Ведущий специалист"
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>
                {/* Accent corner */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent-soft" />
              </motion.div>

              {/* Credentials */}
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-ink-3 font-medium mb-4">
                  Наш ведущий специалист
                </p>
                <ul className="space-y-3">
                  {details.map((d, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
                      className="flex items-start gap-2.5 text-ink-2 text-sm leading-relaxed"
                    >
                      <span className="mt-2 shrink-0 block w-3 h-[1px] bg-accent/50" />
                      <span>{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/education"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-ink text-bg text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent-hover transition-colors duration-200 group"
              >
                <span>Подробнее о курсах</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — large image, editorial crop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-bg-card">
              <Image
                src="/images/education/specialist.png"
                alt="Ведущий специалист Тренд-Платформы"
                fill
                className="object-cover object-top"
                sizes="50vw"
                priority
              />
              {/* Subtle warm fade at edges */}
              <div className="absolute inset-0 ring-1 ring-inset ring-line/30" />
            </div>
            {/* Decorative accent lines */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent-soft/60" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent-soft/60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
