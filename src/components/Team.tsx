'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const members = [
  {
    id: 'alex',
    name: 'Александр',
    role: 'Продажи & Маркетплейсы',
    photo: '/images/team/alex.png',
    tag: 'Sales',
    bio: 'Окончил РАНХиГС по направлению «Экономика».',
    skills: [
      'Организация продаж в fashion-брендах',
      'Фулфилмент для маркетплейсов',
      'Стратегии продаж',
      'Консультации по выходу на маркетплейсы',
    ],
  },
  {
    id: 'stylist',
    name: null,
    role: 'Fashion & Marketing',
    photo: '/images/team/stylist.png',
    tag: 'Style',
    bio: null,
    skills: [
      'Разработка маркетинговой стратегии бренда',
      'Вывод бренда на новый уровень',
      'Концепции фото- и видеосъёмок',
      'Создание стиля и образов в трендах для ЦА бренда',
    ],
  },
  {
    id: 'designer',
    name: null,
    role: 'Дизайн коллекций',
    photo: '/images/team/designer.png',
    tag: 'Design',
    bio: null,
    skills: [
      'Разработка коллекций',
      'Создание концепции, мудбордов, эскизов',
      'Формирование капсульных и сезонных коллекций',
      'Техническая документация для производства',
    ],
  },
  {
    id: 'expert',
    name: null,
    role: 'Эксперт-практик',
    photo: '/images/team/expert.png',
    tag: 'Expert',
    bio: 'Trouble-shooter в модной индустрии. 40 лет опыта в швейном бизнесе.',
    skills: [
      'Кризис-менеджмент в проектах производства одежды',
      'Авторский надзор для брендов',
      'Консультации и обучение персонала швейного бизнеса',
      'Проверка и изготовление лекал',
      'Отработка технологии пошива любого сегмента',
      'Подбор профессионального коллектива и исполнителей',
    ],
  },
];

function MemberCard({ member, index }: { member: typeof members[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${index === 1 ? 'md:mt-10' : ''} ${index === 3 ? 'md:mt-6' : ''}`}
    >
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-bg-card group">
        <Image
          src={member.photo}
          alt={member.role}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tag */}
        <div className="absolute top-4 left-4 px-2.5 py-1 bg-bg/90 backdrop-blur-sm">
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-accent">
            {member.tag}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            {member.name && (
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-ink mb-0.5">
                {member.name}
              </p>
            )}
            <h3
              className="font-display font-bold uppercase text-ink leading-tight"
              style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}
            >
              {member.role}
            </h3>
          </div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="shrink-0 mt-1 text-ink-3 hover:text-accent transition-colors"
            aria-label={expanded ? 'Скрыть' : 'Подробнее'}
          >
            {expanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>

        {member.bio && !expanded && (
          <p className="text-xs text-ink-3 leading-relaxed">{member.bio}</p>
        )}
      </div>

      {/* Expanded skills */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-line"
          >
            <div className="pt-4 pb-2">
              {member.bio && (
                <p className="text-xs text-ink-3 italic mb-3 leading-relaxed">{member.bio}</p>
              )}
              <ul className="space-y-2">
                {member.skills.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-ink-2 leading-relaxed">
                    <span className="mt-1.5 shrink-0 block w-2.5 h-[1px] bg-accent/50" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-bg-2">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="rule-accent" />
          <span className="text-xs tracking-[0.3em] uppercase text-ink-3 font-medium">
            Люди
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16"
        >
          <h2
            className="font-display font-bold uppercase leading-[0.9] text-ink"
            style={{ fontSize: 'clamp(36px, 8vw, 80px)' }}
          >
            Команда
          </h2>
          <p className="text-sm text-ink-3 max-w-xs leading-relaxed sm:text-right">
            Профессионалы с реальным опытом в fashion-индустрии
          </p>
        </motion.div>

        {/* Grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 items-start">
          {members.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
