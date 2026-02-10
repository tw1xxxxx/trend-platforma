'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    role: "ВИЗИОНЕРЫ",
    project: "StreetStyle",
    description: "Концепция уличной моды будущего",
    color: "from-purple-900 to-blue-900" // Placeholder for image color/mood
  },
  {
    id: 2,
    role: "ТЕХНОЛОГИ",
    project: "SportPro",
    description: "Разработали и внедрили линейку инновационных тканей с мембранным покрытием, обеспечивающих идеальную терморегуляцию для профессиональных спортсменов.",
    color: "from-emerald-900 to-teal-900"
  },
  {
    id: 3,
    role: "ПРОИЗВОДИТЕЛИ",
    project: "EcoLine",
    description: "Экологичное производство",
    color: "from-orange-900 to-red-900"
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Text Content */}
          <div className="w-full md:w-1/3 sticky top-32">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 leading-none">
                 Мы <br/>
                 <span className="text-gray-600">Создаем</span> <br/>
                 Бренды
               </h2>
               <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                 Мы — компания полного цикла. Помогаем трансформировать смелые идеи в успешные fashion-проекты, 
                 объединяя творчество, технологии и бизнес-экспертизу.
               </p>
               <div className="h-[1px] w-20 bg-white/20 mb-8" />
               <p className="text-sm text-gray-500 uppercase tracking-widest">
                 Scroll to explore
               </p>
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  {/* "Image" - In real project replace this div with <Image /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-9xl overflow-hidden select-none">
                    {index + 1}
                  </div>
                  
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
