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
    <section id="education" className="py-24 md:py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative grid grid-cols-1 md:grid-cols-12 md:items-end gap-10 md:gap-0">
          {/* Photo — без плашки, крупнее, нижние 30% уходят под текст */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-0 w-full md:col-span-7 md:col-start-1 md:row-start-1 mx-auto md:mx-0 md:-ml-6 lg:-ml-10"
          >
            <div className="relative w-full max-w-md md:max-w-none md:w-[115%] lg:w-[125%] aspect-[3/4] md:aspect-[4/5]">
              <Image
                src="/images/education/specialist.png"
                alt="Ведущий специалист"
                fill
                className="object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 90vw, 55vw"
                priority
              />
            </div>
          </motion.div>

          {/* Text — поверх нижней части фото */}
          <div className="relative z-10 w-full md:col-span-6 md:col-start-7 md:row-start-1 md:self-end md:-ml-[8%] lg:-ml-[6%] md:pb-2">
            <div className="space-y-8 md:pl-6 lg:pl-10 md:pt-[30%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight tracking-tight text-hero-warm-light">
                  Обучение, семинары, переподготовка
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="md:bg-background/90 md:backdrop-blur-[2px] md:rounded-sm md:py-2"
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
        </div>
      </div>
    </section>
  );
}
