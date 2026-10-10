import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Solution() {
  const { t } = useLanguage()

  return (
    <section id="solution" className="section-padding bg-dark-900 border-y border-white/[0.04]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              {t.solution.title}
            </h2>
            <p className="text-lg text-dark-300 leading-relaxed font-medium">
              {t.solution.desc}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-4"
          >
            {t.solution.features.map((feature) => (
              <motion.div
                key={feature}
                variants={item}
                className="flex items-center gap-4 py-4 border-b border-white/[0.06]"
              >
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 text-white">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-[15px] font-medium text-dark-100">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
