'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check, Calendar, Clock } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Создание бренда с нуля',
    description: 'Полный курс для тех, кто хочет запустить свой модный бренд. От идеи до первых продаж.',
    duration: '2 месяца',
    format: 'Онлайн + Оффлайн',
    modules: [
      'Анализ рынка и целевой аудитории',
      'Разработка концепции и ДНК бренда',
      'Производственный процесс и выбор тканей',
      'Маркетинг и продажи'
    ]
  },
  {
    id: 2,
    title: 'Конструирование и моделирование',
    description: 'Профессиональный курс по созданию лекал и технической документации.',
    duration: '3 месяца',
    format: 'Оффлайн',
    modules: [
      'Основы конструирования',
      'Моделирование сложных форм',
      'Работа с САПР',
      'Градация лекал'
    ]
  },
  {
    id: 3,
    title: 'Технология пошива',
    description: 'Практический курс по технологии пошива изделий различной сложности.',
    duration: '1.5 месяца',
    format: 'Оффлайн',
    modules: [
      'Оборудование и швы',
      'Поузловая обработка',
      'ВТО (Влажно-тепловая обработка)',
      'Пошив готового изделия'
    ]
  }
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-wider text-sm">На главную</span>
        </Link>
      </nav>

      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6">
            Образовательные <br/> <span className="text-gray-600">программы</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Мы передаем практические знания, накопленные за 10 лет работы в индустрии моды. 
            Никакой воды, только работающие инструменты и методики.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-[#111] border border-white/10 p-8 rounded-sm hover:border-white/30 transition-colors group"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-gray-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 mb-8 font-light">
                  {course.description}
                </p>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{course.format}</span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6 mt-auto">
                  {course.modules.map((module, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-white/40 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{module}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-8 py-4 bg-white/5 hover:bg-white text-white hover:text-black font-bold uppercase tracking-wider text-sm transition-all rounded-sm">
                  Записаться
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
