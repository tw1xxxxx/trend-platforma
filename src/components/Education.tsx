'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const specialistDetails = [
  'Эксперт-практик, более 30-летний опыт в швейной и модной отрасли.',
  'Технолог-конструктор. Преподаватель.',
  'Опыт работы в домах моды.',
  '15 лет помощи создателям брендов и селлерам (массмаркет).',
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-2/3 md:w-1/2 relative mx-auto md:mx-0"
        >
          <div className="aspect-[3/4] md:aspect-[4/5] bg-background rounded-sm overflow-hidden relative group border border-hero-warm-deep/30">
            <Image
              src="/images/education/specialist.png"
              alt="Ведущий специалист"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 66vw, 50vw"
              priority
            />
            <div className="absolute -inset-4 border border-hero-warm-deep/30 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight text-hero-warm-light"
            >
              Обучение, семинары, переподготовка
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-hero-warm-mid mb-6">
              Наш ведущий специалист
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {specialistDetails.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-4 text-hero-warm-mid group/item"
                >
                  <div className="w-8 h-[1px] bg-hero-warm-mid/40 mt-3 shrink-0 group-hover/item:w-12 group-hover/item:bg-hero-warm-light transition-all duration-300" />
                  <span className="text-base md:text-lg font-light leading-relaxed tracking-wide">
                    {detail}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/education"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-hero-warm-soft/90 text-hero-warm-deep border border-hero-warm-mid/40 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-hero-warm-light hover:border-hero-warm-mid/60 transition-all duration-300"
            >
              <span>Подробнее о курсах</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
