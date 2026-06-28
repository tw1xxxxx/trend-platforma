'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const contactUrl = 'https://t.me/username';

const programs = [
  {
    id: 'seminars',
    number: '01',
    title: 'Семинары, конференции',
    description:
      'На регулярной основе. Для конструкторов, технологов, владельцев брендов и цехов.',
    image: '/images/education/seminars.jpg',
  },
  {
    id: 'construction',
    number: '02',
    title: 'Конструирование — моделирование',
    subtitle: 'Технология.',
    details: ['Курс для профессионалов (повышение квалификации и ценника)'],
    image: '/images/education/construction.jpg',
  },
  {
    id: 'business',
    number: '03',
    title: 'Бизнес в модной индустрии',
    details: [
      'Лекции, семинары, курсы.',
      'Стратегии, ошибки, болевые точки.',
      'Находим выход. Решаем проблему.',
    ],
    image: '/images/education/business.jpg',
  },
];

function ActionButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string;
  variant: 'primary' | 'outline';
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-sm transition-all duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-hero-warm-soft/90 text-hero-warm-deep border border-hero-warm-mid/40 hover:bg-hero-warm-light hover:border-hero-warm-mid/60'
      : 'bg-hero-warm-deep/30 text-hero-warm-light border border-hero-warm-mid/40 hover:bg-hero-warm-deep/50 hover:border-hero-warm-mid/60';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${base}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-hero-warm-soft selection:text-hero-warm-deep">
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-hero-warm-deep/20">
        <Link
          href="/"
          className="flex items-center gap-2 text-hero-warm-mid hover:text-hero-warm-light transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-wider text-sm">На главную</span>
        </Link>
      </nav>

      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-hero-warm-light">
            Обучение, семинары, переподготовка
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.15 }}
              className="flex flex-col bg-hero-warm-deep/10 border border-hero-warm-deep/30 rounded-sm overflow-hidden hover:border-hero-warm-mid/40 transition-colors duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-bold tracking-[0.2em] text-hero-warm-light/80 uppercase">
                  {program.number}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-hero-warm-light mb-1">
                  {program.title}
                </h2>
                {'subtitle' in program && program.subtitle && (
                  <p className="text-lg font-bold uppercase tracking-tight text-hero-warm-mid mb-4">
                    {program.subtitle}
                  </p>
                )}

                {program.description && (
                  <p className="text-base leading-relaxed text-hero-warm-mid font-light mb-6">
                    {program.description}
                  </p>
                )}

                {program.details && (
                  <ul className="space-y-3 mb-6 flex-1">
                    {program.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-3 text-hero-warm-mid"
                      >
                        <div className="w-6 h-[1px] bg-hero-warm-mid/50 mt-2.5 shrink-0" />
                        <span className="text-sm md:text-base leading-relaxed font-light">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  {program.id === 'seminars' ? (
                    <>
                      <ActionButton label="Расписание" href={contactUrl} variant="outline" />
                      <ActionButton label="Запись" href={contactUrl} variant="primary" />
                    </>
                  ) : (
                    <ActionButton label="Запись" href={contactUrl} variant="primary" />
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
