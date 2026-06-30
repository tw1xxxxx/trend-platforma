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
    <div className="flex flex-col lg:flex-row gap-6 items-stretch">
      <div className="shrink-0 flex flex-col justify-between gap-6 lg:w-56 py-1">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-ink mb-2">
            Производство
          </p>
          <p className="text-sm text-ink-3 leading-relaxed">
            Московская обл.,
            <br />
            г. Подольск,
            <br />
            ул. Промышленная, д. 8
          </p>
        </div>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-accent hover:text-accent-hover transition-colors group"
        >
          <span>Открыть в Яндекс.Картах</span>
          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <Link
        href={MAP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex-1 overflow-hidden rounded-2xl border border-line/60 bg-bg-card shadow-sm"
        style={{ minHeight: '280px' }}
        aria-label="Открыть карту производства в Подольске"
      >
        {/* Scaled iframe — crops Yandex UI chrome at edges */}
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

        {/* Warm brand overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(160deg, rgba(250,248,245,0.12) 0%, rgba(196,82,42,0.05) 60%, rgba(28,22,18,0.08) 100%)',
          }}
        />

        {/* Location badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-bg/92 backdrop-blur-sm rounded-full border border-line/60 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse" />
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-ink-2">
            Наш цех · Подольск
          </span>
        </div>
      </Link>
    </div>
  );
}
