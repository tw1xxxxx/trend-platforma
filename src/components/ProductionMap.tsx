'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Подольск, ул. Промышленная, 8
const LAT = 55.4178;
const LON = 37.5442;

const MAP_EMBED = `https://yandex.ru/map-widget/v1/?ll=${LON}%2C${LAT}&z=16&l=map&pt=${LON}%2C${LAT}%2Cpm2rdm&lang=ru_RU&scroll=false`;
const MAP_LINK = `https://yandex.ru/maps/?pt=${LON},${LAT}&z=16&l=map`;

export default function ProductionMap() {
  return (
    <div className="flex flex-col gap-5 w-full lg:flex-row lg:gap-8 lg:items-stretch">
      <div className="shrink-0 flex flex-col gap-4 lg:w-72 lg:justify-between lg:py-1">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-ink mb-2">
            Производство
          </p>
          <p className="text-sm text-ink-3 leading-relaxed">
            Московская обл., г. Подольск,
            <br />
            ул. Промышленная, д. 8
          </p>
        </div>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-accent hover:text-accent-hover transition-colors group"
        >
          <span>Открыть в Яндекс.Картах</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <Link
        href={MAP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full flex-1 overflow-hidden rounded-2xl border border-line/60 bg-bg-card shadow-sm"
        style={{ minHeight: '220px' }}
        aria-label="Открыть карту производства в Подольске"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src={MAP_EMBED}
            title="Производство — Подольск, ул. Промышленная, 8"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
            style={{
              width: '120%',
              height: '120%',
              filter: 'saturate(0.9) contrast(1.02) sepia(8%)',
            }}
            loading="lazy"
            tabIndex={-1}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(160deg, rgba(var(--bg-rgb),0.12) 0%, rgba(var(--ink-rgb),0.04) 60%, rgba(var(--ink-rgb),0.08) 100%)',
          }}
        />

        <div className="absolute bottom-4 left-4 right-4 sm:right-auto flex items-center justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-bg/92 backdrop-blur-sm rounded-full border border-line/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-soft shrink-0 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-ink-2 whitespace-nowrap">
              Наш цех · Подольск
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
