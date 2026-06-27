'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    id: 'design',
    number: '01',
    title: 'ДИЗАЙН',
    description: 'Эскизы, техдокументация и подбор материалов',
    details: [
      'Создание эскизов, тех. рисунков. Консультации по выбору тканей и фурнитуры',
      'Подготовка технической документации для любых целей'
    ]
  },
  {
    id: 'engineering',
    number: '02',
    title: 'ПРОЕКТИРОВАНИЕ',
    description: 'Лекала, посадка и пошив образца',
    details: [
      'Создание и проверка лекал',
      'Диагностика и решение проблем посадки и технология производства',
      'Пошив образца'
    ]
  },
  {
    id: 'consulting',
    number: '03',
    title: 'КОНСУЛЬТАЦИЯ',
    description: 'Диагностика швейного проекта до вложений',
    details: [
      'Консультация/диагностика швейного проекта',
      'Устранение проблем до вложений'
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 px-4 bg-background relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight uppercase relative z-20"
        >
          Направления <span className="text-gray-600">работы</span>
        </motion.h2>

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
                        <p className="text-gray-300 mb-8 text-xl font-light leading-relaxed border-l-2 border-white/20 pl-6">
                          {service.description}
                        </p>
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
                        
                        <motion.button
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.5 }}
                           className="mt-10 px-8 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                        >
                          Заказать услугу
                        </motion.button>
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
