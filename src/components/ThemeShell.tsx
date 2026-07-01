'use client';

import { themes, type VersionId } from '@/lib/themes';

function themeVars(version: VersionId): React.CSSProperties {
  const t = themes[version];
  const c = t.colors;
  return {
    ['--bg' as string]: c.bg,
    ['--bg-2' as string]: c.bg2,
    ['--bg-card' as string]: c.bgCard,
    ['--ink' as string]: c.ink,
    ['--ink-2' as string]: c.ink2,
    ['--ink-3' as string]: c.ink3,
    ['--accent' as string]: c.accent,
    ['--accent-hover' as string]: c.accentHover,
    ['--accent-soft' as string]: c.accentSoft,
    ['--warm' as string]: c.warm,
    ['--line' as string]: c.line,
    ['--bg-rgb' as string]: c.bgRgb,
    ['--ink-rgb' as string]: c.inkRgb,
    ['--font-sans' as string]: t.fontSans,
    ['--font-display' as string]: t.fontDisplay,
    fontFamily: `${t.fontSans}, system-ui, sans-serif`,
    background: c.bg,
    color: c.ink,
  };
}

export default function ThemeShell({
  version,
  children,
}: {
  version: VersionId;
  children: React.ReactNode;
}) {
  const theme = themes[version];

  return (
    <div data-theme={version} className="min-h-screen" style={themeVars(version)}>
      <div
        className="fixed bottom-4 left-4 z-50 pointer-events-none hidden sm:block"
        aria-hidden
      >
        <div className="px-3 py-2 bg-bg/90 backdrop-blur-sm border border-line shadow-sm">
          <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-ink-3">
            {version.toUpperCase()}
          </p>
          <p className="text-[10px] text-ink-2 mt-0.5">{theme.label}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
