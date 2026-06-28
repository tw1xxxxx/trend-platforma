'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    role: "01",
    project: "Индустрия",
    description: "Швейная и модная — разборы как должно быть и что реально происходит.",
    image: "/images/about/industry.jpg",
    color: "from-purple-900 to-blue-900"
  },
  {
    id: 2,
    role: "02",
    project: "Производство",
    description: "Как устроено и как работает в реальности.",
    image: "/images/about/production.jpg",
    color: "from-emerald-900 to-teal-900"
  },
  {
    id: 3,
    role: "03",
    project: "Стиль",
    description: "Тренды через мышление.",
    image: "/images/about/style.jpg",
    color: "from-orange-900 to-red-900"
  }
];

const trendwatchingPoints = [
  'Следим за изменениями в технологиях, новостях индустрии и поведении людей.',
  'Выявляем закономерности — куда движется рынок.',
  'На основе анализа строим прогнозы, ищем новые возможности для продуктов, услуг или маркетинговых стратегий.',
];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Text Content */}
          <div className="w-full md:w-1/3 sticky top-32">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-none tracking-tight text-hero-warm-light">
                 Трендвотчинг
               </h2>
               <p className="text-xl md:text-2xl font-light uppercase tracking-wide text-hero-warm-mid mb-8">
                 в fashion.
               </p>
               <ul className="space-y-5 mb-8">
                 {trendwatchingPoints.map((point, index) => (
                   <li key={index} className="flex items-start gap-4 text-hero-warm-mid group/item">
                     <div className="w-8 h-[1px] bg-hero-warm-mid/40 mt-3 shrink-0 group-hover/item:w-12 group-hover/item:bg-hero-warm-light transition-all duration-300" />
                     <span className="font-light text-base md:text-lg leading-relaxed tracking-wide">
                       {point}
                     </span>
                   </li>
                 ))}
               </ul>
               <div className="h-[1px] w-20 bg-hero-warm-mid/30" />
             </motion.div>
          </div>

          {/* Projects Gallery */}
          <div className="w-full md:w-2/3 grid grid-cols-1 gap-12 md:gap-24">
            {projects.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative group cursor-pointer ${index % 2 !== 0 ? 'md:ml-auto' : ''} md:w-4/5`}
              >
                {/* Image Placeholder with Hover Effect */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.project}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="text-xs font-bold tracking-[0.2em] text-white/70 mb-2 uppercase">
                      {item.role}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase">
                      {item.project}
                    </h3>
                    <p className="text-gray-300 font-light text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-white/20 group-hover:border-white/50 transition-colors duration-500 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/20 group-hover:border-white/50 transition-colors duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
