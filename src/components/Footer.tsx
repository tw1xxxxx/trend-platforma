'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, MapPin, Mail } from 'lucide-react';
import ContactModal from './ContactModal';
import ProductionMap from './ProductionMap';
import { MessengerIcon } from './MessengerIcon';

const navLinks = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Команда', href: '/#team' },
  { label: 'Обучение', href: '/#education' },
  { label: 'Трендвотчинг', href: '/#about' },
  { label: 'Курсы', href: '/education' },
];

const PHONE_DISPLAY = '+7 (962) 938-89-33';
const PHONE_HREF = 'tel:+79629388933';

const messengers = [
  {
    id: 'telegram' as const,
    label: 'Telegram',
    href: 'https://t.me/trendplatforma',
    hover: 'hover:border-[#27A7E7]/50 hover:bg-[#27A7E7]/10',
  },
  {
    id: 'max' as const,
    label: 'MAX',
    href: 'https://max.ru/write?phone=79629388933',
    hover: 'hover:border-[#7B5CFF]/50 hover:bg-[#7B5CFF]/10',
  },
  {
    id: 'whatsapp' as const,
    label: 'WhatsApp',
    href: 'https://wa.me/79629388933',
    hover: 'hover:border-[#25D366]/50 hover:bg-[#25D366]/10',
  },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M21.643 3.03c.534-.535 1.36-.086 1.15.645l-3.328 14.544c-.164.717-.98.98-1.57.505l-5.188-4.172-2.65 2.65c-.38.38-1.03.11-1.03-.43V13.5l8.6-8.2c.4-.38-.1-.95-.6-.56L7.3 11.2 3.1 9.9c-.7-.2-.7-1.2 0-1.4l17-6.5c.6-.2 1.3.2 1.54 1.03z"
      />
    </svg>
  );
}

function VkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.609 2.18-3.609.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.744-.576.744z"
      />
    </svg>
  );
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer id="footer">

        {/* ── DARK CTA BLOCK ── */}
        <div className="bg-ink px-5 sm:px-6 py-14 sm:py-16 md:py-20">
          <div className="max-w-md mx-auto w-full">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-warm/40 mb-6 text-center">
              Тренд-Платформа
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white text-sm font-semibold uppercase tracking-[0.1em] hover:bg-accent-hover transition-colors duration-200"
            >
              <span>Бесплатная консультация</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={PHONE_HREF}
              className="text-phone block text-center mt-5 text-[17px] text-warm/60 hover:text-warm transition-colors"
            >
              {PHONE_DISPLAY}
            </a>

            <div className="flex flex-col gap-2 mt-6">
              {messengers.map(({ id, label, href, hover }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-4 py-3 border border-warm/15 bg-warm/5 text-warm/90 text-sm font-medium transition-all duration-200 ${hover}`}
                >
                  <MessengerIcon id={id} size="md" />
                  <span>Написать</span>
                  <span className="sr-only">в {label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── INFO GRID ── */}
        <div className="bg-bg-2 border-t border-line/40 px-5 sm:px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-8 md:gap-10 lg:grid-cols-4">

              <div className="col-span-2 lg:col-span-1">
                <Link href="/" className="inline-block mb-4 group">
                  <span className="font-display font-bold uppercase text-xl text-ink group-hover:text-accent transition-colors">
                    Тренд
                  </span>
                  <span className="font-display font-light uppercase text-xl text-ink-3">
                    {' '}— Платформа
                  </span>
                </Link>
                <p className="text-xs text-ink-3 leading-relaxed max-w-[220px]">
                  Создание и развитие брендов одежды. От идеи до полного цикла производства.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-3 mb-4">
                  Навигация
                </p>
                <ul className="space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-ink-2 hover:text-accent transition-colors tracking-wide"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-3 mb-4">
                  Связь
                </p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center gap-2 text-ink-2 hover:text-accent transition-colors group"
                    >
                      <Phone className="w-3.5 h-3.5 text-ink-3 group-hover:text-accent shrink-0" />
                      <span className="text-phone text-sm">{PHONE_DISPLAY}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:trend_platforma@mail.ru"
                      className="flex items-center gap-2 text-ink-2 hover:text-accent transition-colors group"
                    >
                      <Mail className="w-3.5 h-3.5 text-ink-3 group-hover:text-accent shrink-0" />
                      <span className="text-xs break-all">trend_platforma@mail.ru</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/trendplatforma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-ink-3 hover:text-[#229ED9] transition-colors"
                    >
                      <TelegramIcon className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-xs">@trendplatforma</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vk.com/trendplatforma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-ink-3 hover:text-[#4C75A3] transition-colors"
                    >
                      <VkIcon className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-xs">ВКонтакте</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-3 mb-4">
                  Адреса
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-ink-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-ink mb-1">
                        Офис
                      </p>
                      <p className="text-xs text-ink-3 leading-relaxed">
                        г. Москва, ул. Тверская, д. 12, офис 405
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-ink-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-ink mb-1">
                        Производство
                      </p>
                      <p className="text-xs text-ink-3 leading-relaxed">
                        Московская обл., г. Подольск, ул. Промышленная, д. 8
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAP BLOCK ── */}
        <div className="border-t border-line/40 px-5 sm:px-6 pt-10 pb-0 bg-bg-2">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="rule-accent" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-3">
                Наш цех — Подольск
              </span>
            </div>
            <ProductionMap />
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="bg-bg-2 border-t border-line/40 px-5 sm:px-6 py-4 mt-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ink-3">
            <p>© {new Date().getFullYear()} Тренд-Платформа. Все права защищены.</p>
            <a href="#" className="hover:text-accent transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
