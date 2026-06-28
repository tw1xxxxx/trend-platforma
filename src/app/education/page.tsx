'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const contactUrl = 'https://t.me/username';

const programs = [
  {
    id: 'seminars',
    title: 'Семинары, конференции',
    description:
      'На регулярной основе. Для конструкторов, технологов, владельцев брендов и цехов.',
    actions: [
      { label: 'Расписание', href: contactUrl, variant: 'outline' as const },
      { label: 'Запись', href: contactUrl, variant: 'primary' as const },
    ],
  },
  {
    id: 'construction',
    title: 'Конструирование — моделирование',
    subtitle: 'Технология.',
    details: ['Курс для профессионалов (повышение квалификации и ценника)'],
    actions: [{ label: 'Запись', href: contactUrl, variant: 'primary' as const }],
  },
  {
    id: 'business',
    title: 'Бизнес в модной индустрии',
    details: [
      'Лекции, семинары, курсы.',
      'Стратегии, ошибки, болевые точки.',
      'Находим выход. Решаем проблему.',
    ],
    actions: [{ label: 'Запись', href: contactUrl, variant: 'primary' as const }],
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
    'inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-sm transition-all duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-hero-warm-soft/90 text-hero-warm-deep border border-hero-warm-mid/40 hover:bg-hero-warm-light hover:border-hero-warm-mid/60'
      : 'bg-transparent text-hero-warm-light border border-hero-warm-mid/40 hover:bg-hero-warm-deep/20 hover:border-hero-warm-mid/60';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${base} ${styles}`}
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

      <main className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight text-hero-warm-light">
            Обучение, семинары, переподготовка
          </h1>
        </motion.div>

        <div className="space-y-6">
          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="border-b border-hero-warm-deep/30 py-10 md:py-14"
            >
              <div className="flex items-baseline gap-4 md:gap-6 mb-6">
                <span className="text-sm md:text-base font-bold text-hero-warm-muted/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-hero-warm-light">
                    {program.title}
                  </h2>
                  {'subtitle' in program && program.subtitle && (
                    <p className="text-2xl md:text-4xl font-black uppercase tracking-tight text-hero-warm-mid mt-1">
                      {program.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="md:pl-12 md:w-2/3 space-y-6">
                {program.description && (
                  <p className="text-base md:text-lg font-light leading-relaxed text-hero-warm-mid tracking-wide">
                    {program.description}
                  </p>
                )}

                {program.details && (
                  <ul className="grid grid-cols-1 gap-4">
                    {program.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-4 text-hero-warm-mid group/item"
                      >
                        <div className="w-8 h-[1px] bg-hero-warm-mid/40 mt-3 shrink-0 group-hover/item:w-12 group-hover/item:bg-hero-warm-light transition-all duration-300" />
                        <span className="text-base md:text-lg font-light leading-relaxed tracking-wide">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-4 pt-4">
                  {program.actions.map((action) => (
                    <ActionButton
                      key={action.label}
                      label={action.label}
                      href={action.href}
                      variant={action.variant}
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
