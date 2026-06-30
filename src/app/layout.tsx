import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ttFirsNeue = localFont({
  src: "../fonts/tt-firs-neue/TTFirsNeue-Variable.woff2",
  variable: "--font-tt-firs",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Разработка бренда одежды | Тренд-Платформа",
  description:
    "Создание и развитие брендов одежды — дизайн, проектирование, пошив, обучение. Трендвотчинг в fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${ttFirsNeue.variable} antialiased`}>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
