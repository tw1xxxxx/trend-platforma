'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#161616] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-2/3 md:w-1/2 relative mx-auto md:mx-0"
        >
           <div className="aspect-[3/4] bg-neutral-800 rounded-sm overflow-hidden relative group">
             {/* Placeholder for specialist photo */}
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 flex items-center justify-center text-gray-600 border border-white/5">
               <span className="uppercase tracking-widest text-sm">[Фото специалиста]</span>
             </div>
             
             {/* Decorative frame */}
             <div className="absolute -inset-4 border border-white/10 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
           </div>
        </motion.div>

        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4"
            >
              Expertise & Knowledge
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold uppercase leading-tight"
            >
              Обучение у <br/>
              <span className="text-gray-500">Профессионалов</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-gray-300 font-light text-lg leading-relaxed"
          >
            <p>
              Наш ведущий специалист с более чем 10-летним опытом в индустрии моды. 
              Прошла путь от швеи до создателя собственного бренда. Мы делимся реальным опытом, а не теорией.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              className="group relative px-8 py-4 bg-transparent border border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-white font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                Подробнее о курсах
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
