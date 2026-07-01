import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteLayout from '@/components/SiteLayout';
import { VERSION_IDS, isVersionId, themes, type VersionId } from '@/lib/themes';

type Props = {
  children: React.ReactNode;
  params: Promise<{ version: string }>;
};

export function generateStaticParams() {
  return VERSION_IDS.map((version) => ({ version }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { version } = await params;
  if (!isVersionId(version)) return {};
  const theme = themes[version];
  return {
    title: `${theme.label} | Тренд-Платформа`,
    description: `Версия ${version.toUpperCase()} — ${theme.description}`,
  };
}

export default async function VersionLayout({ children, params }: Props) {
  const { version } = await params;
  if (!isVersionId(version)) notFound();

  return <SiteLayout version={version as VersionId}>{children}</SiteLayout>;
}
