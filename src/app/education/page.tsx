'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useVersion } from '@/contexts/VersionContext';

const CONTACT_URL = 'https://t.me/trendplatforma';

const programs = [
  {
    id: 'seminars',
    number: '01',
    title: 'Семинары, конференции',
    description:
      'На регулярной основе. Для конструкторов, технологов, владельцев брендов и цехов.',
    image: '/images/education/seminars.jpg',
    actions: [
      { label: 'Расписание', variant: 'outline' as const },
      { label: 'Запись', variant: 'primary' as const },
    ],
  },
  {
    id: 'construction',
    number: '02',
    title: 'Конструирование — моделирование',
    subtitle: 'Технология.',
    details: ['Курс для профессионалов (повышение квалификации и ценника)'],
    image: '/images/education/construction.jpg',
    actions: [{ label: 'Запись', variant: 'primary' as const }],
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
    actions: [{ label: 'Запись', variant: 'primary' as const }],
  },
];

function ActionBtn({
  label,
  variant,
}: {
  label: string;
  variant: 'primary' | 'outline';
}) {
  return (
    <a
      href={CONTACT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 group ${
        variant === 'primary'
          ? 'bg-ink text-bg hover:bg-accent-hover'
          : 'bg-transparent text-ink border border-line hover:border-ink hover:text-ink'
      }`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function EducationPage() {
  const { basePath } = useVersion();

  return (
    <div className="min-h-screen bg-bg text-ink">

      {/* Top nav (replaces Header on this page since layout includes Header) */}
      <div className="pt-20 md:pt-24" />

      <main className="max-w-7xl mx-auto px-5 sm:px-6 pb-20">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 md:mb-14"
        >
          <Link
            href={basePath}
            className="inline-flex items-center gap-2 text-ink-3 hover:text-accent transition-colors group text-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium uppercase tracking-widest text-xs">На главную</span>
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="rule-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-ink-3 font-medium">
              Программы
            </span>
          </div>
          <h1
            className="font-display font-bold uppercase leading-[0.9] text-ink"
            style={{ fontSize: 'clamp(36px, 7vw, 80px)' }}
          >
            Обучение,{' '}
            <span className="text-accent-soft">семинары,</span>
            <br />
            переподготовка
          </h1>
        </motion.div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.15, duration: 0.6 }}
              className={`flex flex-col bg-bg-2 border border-line hover:border-accent/40 transition-colors duration-300 ${
                index === 1 ? 'md:mt-8' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-card">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Subtle bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-2/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[9px] font-medium text-ink-3/60 tracking-widest tabular-nums">
                  {program.number}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 md:p-7">
                <h2
                  className="font-display font-bold uppercase leading-tight text-ink mb-1"
                  style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
                >
                  {program.title}
                </h2>

                {'subtitle' in program && program.subtitle && (
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
                    {program.subtitle}
                  </p>
                )}

                {'description' in program && program.description && (
                  <p className="text-sm text-ink-2 leading-relaxed mb-5">{program.description}</p>
                )}

                {'details' in program && program.details && (
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {program.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-ink-2 text-sm leading-relaxed">
                        <span className="mt-2 shrink-0 block w-3 h-[1px] bg-accent/50" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-3 mt-auto pt-1">
                  {program.actions.map((a) => (
                    <ActionBtn key={a.label} label={a.label} variant={a.variant} />
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
