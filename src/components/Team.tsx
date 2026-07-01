'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

type Member = {
  id: string;
  name: string | null;
  role: string;
  photo: string;
  tag: string;
  bio: string | null;
  skills: string[];
};

type CardMode = 'grid' | 'compact' | 'expanded';

const LAYOUT_EASE = [0.22, 1, 0.36, 1] as const;
const layoutTransition = {
  layout: { duration: 0.52, ease: LAYOUT_EASE },
};
const photoRevealTransition = {
  layout: { duration: 0.52, ease: LAYOUT_EASE },
  scale: { duration: 0.5, ease: LAYOUT_EASE },
  opacity: { duration: 0.38, ease: LAYOUT_EASE },
};
const textRevealTransition = {
  duration: 0.44,
  delay: 0.18,
  ease: LAYOUT_EASE,
};

const members: Member[] = [
  {
    id: 'alex',
    name: 'Александр',
    role: 'Продажи & Маркетплейсы',
    photo: '/images/team/alex.png',
    tag: 'Финансы',
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
    tag: 'Стиль',
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
    tag: 'Дизайн',
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
    tag: 'Эксперт',
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

const memberIndex = (id: string) => members.findIndex((m) => m.id === id);

function TagBadge({ tag, compact }: { tag: string; compact?: boolean }) {
  return (
    <div
      className={`absolute top-3 left-3 z-10 bg-bg/90 backdrop-blur-sm ${
        compact ? 'px-2 py-0.5' : 'px-2.5 py-1'
      }`}
    >
      <span
        className={`font-semibold text-accent-soft ${
          compact ? 'text-[8px] tracking-wide' : 'text-[10px] tracking-wide'
        }`}
      >
        {tag}
      </span>
    </div>
  );
}

function MemberPhotoContent({
  member,
  mode,
}: {
  member: Member;
  mode: CardMode;
}) {
  return (
    <>
      <Image
        src={member.photo}
        alt={member.role}
        fill
        className="object-cover object-top pointer-events-none"
        sizes={
          mode === 'expanded'
            ? '(max-width: 768px) 100vw, 50vw'
            : mode === 'compact'
              ? '33vw'
              : '(max-width: 640px) 50vw, 25vw'
        }
        priority={mode === 'expanded'}
      />
      <TagBadge tag={member.tag} compact={mode === 'compact'} />
      {mode === 'grid' && (
        <div className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-bg/90 text-ink-3 pointer-events-none">
          <Plus className="w-4 h-4" />
        </div>
      )}
    </>
  );
}

function MemberPhoto({
  member,
  mode,
}: {
  member: Member;
  mode: CardMode;
}) {
  return (
    <motion.div
      layoutId={`team-photo-${member.id}`}
      layout
      transition={layoutTransition}
      className={`relative overflow-hidden bg-bg-card shrink-0 ${
        mode === 'expanded'
          ? 'w-full aspect-[4/5]'
          : mode === 'compact'
            ? 'w-full aspect-square sm:aspect-[4/5] lg:aspect-[3/4]'
            : 'w-full aspect-[3/4]'
      }`}
    >
      <MemberPhotoContent member={member} mode={mode} />
    </motion.div>
  );
}

function ExpandedMemberView({
  member,
  onCollapse,
}: {
  member: Member;
  onCollapse: () => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-start overflow-visible">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`photo-${member.id}`}
          layoutId={`team-photo-${member.id}`}
          layout
          initial={{ scale: 0.86, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={photoRevealTransition}
          style={{ originY: 0.35 }}
          className="relative w-full aspect-[4/5] overflow-hidden bg-bg-card shrink-0"
        >
          <MemberPhotoContent member={member} mode="expanded" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`details-${member.id}`}
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 22, scale: 0.98 }}
          transition={textRevealTransition}
          className="min-w-0"
        >
          <MemberDetails
            member={member}
            mode="expanded"
            onCollapse={onCollapse}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MemberDetails({
  member,
  mode,
  onCollapse,
}: {
  member: Member;
  mode: CardMode;
  onCollapse?: () => void;
}) {
  if (mode === 'compact') {
    return (
      <motion.div
        layout="position"
        transition={layoutTransition}
        className="mt-1.5 min-w-0"
      >
        {member.name && (
          <p className="text-[9px] font-bold tracking-wide text-ink-3 mb-0.5 normal-case">
            {member.name}
          </p>
        )}
        <p
          className="font-display font-bold uppercase text-ink leading-tight line-clamp-2"
          style={{ fontSize: 'clamp(9px, 2.45vw, 13px)' }}
        >
          {member.role}
        </p>
      </motion.div>
    );
  }

  if (mode === 'grid') {
    return (
      <motion.div
        layout="position"
        transition={layoutTransition}
        className="pt-4 pb-2"
      >
        {member.name && (
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-ink mb-0.5">
            {member.name}
          </p>
        )}
        <h3
          className="font-display font-bold uppercase text-ink leading-tight pr-2"
          style={{ fontSize: 'clamp(16px, 3.5vw, 22px)' }}
        >
          {member.role}
        </h3>
        {member.bio && (
          <p className="text-xs text-ink-3 leading-relaxed mt-2 line-clamp-2">
            {member.bio}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <div className="relative z-10 -mt-[28%] mx-3 md:mx-0 md:mt-0 flex flex-col min-w-0 rounded-[28px] bg-bg p-5 shadow-[0_18px_60px_rgba(var(--ink-rgb),0.10)] ring-1 ring-line/70 md:p-7">
      <div className="flex items-start justify-between gap-3 mb-4 md:mb-5">
        <div>
          {member.name && (
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-ink-3 mb-1.5">
              {member.name}
            </p>
          )}
          <h3
            className="font-display font-bold uppercase text-ink leading-tight"
            style={{ fontSize: 'clamp(24px, 7vw, 36px)' }}
          >
            {member.role}
          </h3>
        </div>
        {onCollapse && (
          <button
            type="button"
            onClick={onCollapse}
            className="shrink-0 p-2 rounded-full border border-line bg-bg-2 text-ink-3 hover:text-ink hover:border-ink transition-colors"
            aria-label="Свернуть"
          >
            <Minus className="w-4 h-4" />
          </button>
        )}
      </div>

      {member.bio && (
        <p className="text-base md:text-lg text-ink-2 leading-relaxed mb-5">
          {member.bio}
        </p>
      )}

      <ul className="space-y-3 md:space-y-3.5">
        {member.skills.map((skill, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.32 + i * 0.05,
              duration: 0.35,
              ease: LAYOUT_EASE,
            }}
            className="flex items-start gap-3 text-base md:text-lg text-ink-2 leading-relaxed"
          >
            <span className="mt-3 shrink-0 block w-4 h-[1px] bg-accent-soft/70" />
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function TeamCard({
  member,
  mode,
  expanded,
  onSelect,
  onCollapse,
}: {
  member: Member;
  mode: CardMode;
  expanded: boolean;
  onSelect: () => void;
  onCollapse: () => void;
}) {
  const index = memberIndex(member.id);

  return (
    <motion.article
      layout
      transition={layoutTransition}
      className={`min-w-0 ${
        mode === 'expanded'
          ? 'col-span-3 order-last border-t border-line pt-4 md:pt-8'
          : 'col-span-1'
      } ${!expanded && index === 1 ? 'md:mt-10' : ''} ${
        !expanded && index === 3 ? 'md:mt-6' : ''
      }`}
    >
      {mode === 'expanded' ? (
        <ExpandedMemberView member={member} onCollapse={onCollapse} />
      ) : (
        <button
          type="button"
          onClick={onSelect}
          className="flex flex-col w-full text-left group"
        >
          <MemberPhoto member={member} mode={mode} />
          <MemberDetails member={member} mode={mode} />
        </button>
      )}
    </motion.article>
  );
}

export default function Team() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="team" className="py-20 md:py-32 bg-bg-2">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
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

        <LayoutGroup id="team-section">
          <motion.div
            layout
            transition={layoutTransition}
            className={
              expandedId
                ? 'grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 items-start'
                : 'grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 items-start'
            }
          >
            {members.map((member) => {
              const isExpanded = expandedId === member.id;
              const mode: CardMode = expandedId
                ? isExpanded
                  ? 'expanded'
                  : 'compact'
                : 'grid';

              return (
                <TeamCard
                  key={member.id}
                  member={member}
                  mode={mode}
                  expanded={Boolean(expandedId)}
                  onSelect={() => setExpandedId(member.id)}
                  onCollapse={() => setExpandedId(null)}
                />
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
