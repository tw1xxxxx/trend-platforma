import type { Metadata } from "next";
import { Raleway, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
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
      <body className={`${raleway.variable} ${cormorant.variable} antialiased`}>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
