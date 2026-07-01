import type { Metadata } from 'next';
import { allFontVariables } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Разработка бренда одежды | Тренд-Платформа',
  description:
    'Создание и развитие брендов одежды — дизайн, проектирование, пошив, обучение. Трендвотчинг в fashion.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${allFontVariables} antialiased`}>{children}</body>
    </html>
  );
}
