'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VERSION_IDS, themes } from '@/lib/themes';

export default function VersionSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-wrap gap-1 p-1.5 bg-bg/95 backdrop-blur-sm border border-line shadow-sm max-w-[260px] sm:max-w-none">
        {VERSION_IDS.map((id) => {
          const href = `/${id}`;
          const active = pathname === href;
          return (
            <Link
              key={id}
              href={href}
              title={themes[id].label}
              className={`px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors ${
                active
                  ? 'bg-ink text-bg'
                  : 'text-ink-3 hover:text-ink hover:bg-bg-2'
              }`}
            >
              {id}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
