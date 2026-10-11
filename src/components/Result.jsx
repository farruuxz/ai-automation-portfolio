import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Result() {
  const { t } = useLanguage()

  return (
    <section className="section-padding border-t border-white/[0.04] bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
            {t.result.title}
          </h2>
          <div className="glass-panel p-6 sm:p-8 md:p-12 mb-10 text-left md:text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium mb-4">
              {t.result.p1}
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed font-medium">
              {t.result.p2}
            </p>
          </div>
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1]">
            <span className="text-[12px] font-medium text-dark-300 tracking-wide">
              {t.result.badge}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
