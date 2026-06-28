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
    <section id="education" className="py-16 md:py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-12">
          {/* Фото — крупное, без плашки, z-0 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-full md:col-span-8 lg:col-span-7 row-start-1 z-0 pointer-events-none"
          >
            <div className="relative w-[155%] -ml-[12%] md:w-[130%] md:-ml-8 lg:w-[140%] lg:-ml-12 aspect-[3/4] md:aspect-[4/5]">
              <Image
                src="/images/education/specialist.png"
                alt="Ведущий специалист"
                fill
                className="object-contain object-top md:object-bottom"
                sizes="(max-width: 768px) 155vw, 65vw"
                priority
              />
            </div>
          </motion.div>

          {/* Текст — наезжает на нижние ~30% фото */}
          <div className="col-span-full md:col-span-6 md:col-start-7 lg:col-start-7 row-start-1 z-10 pt-[92%] sm:pt-[88%] md:pt-[36%] lg:pt-[32%] md:self-end">
            <div className="space-y-6 md:space-y-8 bg-gradient-to-b from-transparent from-0% via-background/95 via-[12%] to-background to-[28%] md:via-[18%] md:to-[35%] pt-2 pb-1">
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
