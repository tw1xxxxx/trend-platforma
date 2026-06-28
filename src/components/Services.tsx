'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    id: 'design',
    number: '01',
    title: 'ДИЗАЙН',
    details: [
      'Создание художественных эскизов',
      'Создание технических рисунков',
      'Формирование тех.документации для договоров и для цеха.'
    ],
    contactUrl: 'https://t.me/username'
  },
  {
    id: 'engineering',
    number: '02',
    title: 'ПРОЕКТИРОВАНИЕ',
    details: [
      'Создание лекал с нуля',
      'Проверка готовых лекал',
      'Диагностика и решение проблемы посадки вещи.',
      'Технология пошива для цеха.',
      'Отшив образца.'
    ],
    contactUrl: 'https://t.me/username'
  },
  {
    id: 'sewing',
    number: '03',
    title: 'ПОШИВ',
    details: [
      'Пошив для индивидуальных заказчиков',
      'Дизайнерская реконструкция готовых вещей. (Апсайклинг)',
      'Отшив образца для цеха, тестовых партий (от 5 шт).'
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 px-4 bg-background relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="space-y-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative border-b border-white/10 transition-all duration-500 group ${
                activeService === service.id ? 'bg-white/5 rounded-sm border-none py-12 px-6 md:px-12' : 'py-8'
              }`}
            >
              <div className="relative z-10">
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full text-left flex items-center justify-between group/btn"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className={`text-sm md:text-base font-bold transition-colors duration-300 ${
                      activeService === service.id ? 'text-white/50' : 'text-white/30'
                    }`}>
                      {service.number}
                    </span>
                    <h3 className={`text-4xl md:text-6xl lg:text-7xl font-black transition-colors duration-300 uppercase tracking-tighter ${
                      activeService === service.id ? 'text-white' : 'text-gray-500 group-hover/btn:text-white'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`p-4 rounded-full border border-white/10 transition-all duration-300 ${
                    activeService === service.id ? 'rotate-180 bg-white text-black border-white' : 'group-hover/btn:bg-white/10 group-hover/btn:border-white/30'
                  }`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 md:pt-12 md:w-2/3">
                        <ul className="grid grid-cols-1 gap-4">
                          {service.details.map((detail, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.1 }}
                              className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group/item"
                            >
                              <div className="w-8 h-[1px] bg-white/20 group-hover/item:w-12 group-hover/item:bg-white transition-all duration-300" />
                              <span className="text-base md:text-lg tracking-wide">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        {service.contactUrl && (
                          <motion.a
                            href={service.contactUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="inline-block mt-10 text-base md:text-lg text-white hover:text-gray-300 transition-colors"
                          >
                            Контакт 👉
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
