'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';
import ContactModal from './ContactModal';

const contacts = {
  phone: '+7 (999) 000-00-00',
  phoneHref: 'tel:+79990000000',
  telegram: 'https://t.me/username',
  telegramLabel: '@trendplatforma',
  vk: 'https://vk.com/trendplatforma',
  vkLabel: 'ВКонтакте',
};

const addresses = {
  office: 'г. Москва, ул. Тверская, д. 12, офис 405',
  production: 'Московская обл., г. Подольск, ул. Промышленная, д. 8',
};

const navLinks = [
  { title: 'Услуги', href: '/#services' },
  { title: 'Обучение', href: '/#education' },
  { title: 'Трендвотчинг', href: '/#about' },
  { title: 'Курсы', href: '/education' },
  { title: 'Контакты', href: '/#footer' },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="currentColor"
        d="M21.643 3.03c.534-.535 1.36-.086 1.15.645l-3.328 14.544c-.164.717-.98.98-1.57.505l-5.188-4.172-2.65 2.65c-.38.38-1.03.11-1.03-.43V13.5l8.6-8.2c.4-.38-.1-.95-.6-.56L7.3 11.2 3.1 9.9c-.7-.2-.7-1.2 0-1.4l17-6.5c.6-.2 1.3.2 1.54 1.03z"
      />
    </svg>
  );
}

function VkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="currentColor"
        d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.609 2.18-3.609.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.744-.576.744z"
      />
    </svg>
  );
}

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="bg-background border-t border-hero-warm-deep/30">
        {/* CTA */}
        <div className="border-b border-hero-warm-deep/20">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] text-hero-warm-muted uppercase mb-4">
                  Тренд-Платформа
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-hero-warm-light">
                  Готовы создать
                  <br />
                  <span className="text-hero-warm-mid">свой бренд?</span>
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-hero-warm-soft/90 text-hero-warm-deep border border-hero-warm-mid/40 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-hero-warm-light hover:border-hero-warm-mid/60 transition-all duration-300 shrink-0"
              >
                <span>Отправить заявку</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-black uppercase tracking-tight text-hero-warm-light">
                  Тренд
                </span>
                <span className="text-2xl font-light uppercase tracking-tight text-hero-warm-mid">
                  {' '}— Платформа
                </span>
              </Link>
              <p className="text-sm text-hero-warm-mid font-light leading-relaxed max-w-xs">
                Смотрим в будущее — создаём{' '}
                <span className="text-hero-warm-light font-semibold tracking-wide uppercase">
                  настоящее
                </span>
                . Полный цикл для fashion-брендов: от идеи до производства.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-hero-warm-muted uppercase mb-5">
                Навигация
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-hero-warm-mid hover:text-hero-warm-light transition-colors text-sm font-light tracking-wide"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-hero-warm-muted uppercase mb-5">
                Связь
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={contacts.phoneHref}
                    className="inline-flex items-center gap-3 text-hero-warm-light hover:text-hero-warm-soft transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-hero-warm-mid group-hover:text-hero-warm-light shrink-0" />
                    <span className="text-sm font-medium tracking-wide">{contacts.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contacts.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-hero-warm-mid hover:text-[#229ED9] transition-colors group"
                  >
                    <TelegramIcon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-light">
                      Telegram — {contacts.telegramLabel}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contacts.vk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-hero-warm-mid hover:text-[#4C75A3] transition-colors group"
                  >
                    <VkIcon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-light">Группа {contacts.vkLabel}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Addresses */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] text-hero-warm-muted uppercase mb-5">
                Адреса
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-hero-warm-mid shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-hero-warm-light mb-1">
                      Офис
                    </p>
                    <p className="text-sm text-hero-warm-mid font-light leading-relaxed">
                      {addresses.office}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-hero-warm-mid shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-hero-warm-light mb-1">
                      Производство
                    </p>
                    <p className="text-sm text-hero-warm-mid font-light leading-relaxed">
                      {addresses.production}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-hero-warm-deep/20">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-hero-warm-muted">
            <p>© {new Date().getFullYear()} Тренд-Платформа. Все права защищены.</p>
            <a href="#" className="hover:text-hero-warm-light transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
