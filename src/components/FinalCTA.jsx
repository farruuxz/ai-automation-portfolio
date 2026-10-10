import { motion } from 'framer-motion'
import { CONFIG } from '../config'
import { useLanguage } from '../i18n/LanguageContext'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-[32px] p-12 sm:p-16 lg:p-24 text-center overflow-hidden backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            {/* Subtle light hit */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />

            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
              {t.cta.title1}<br />
              <span className="text-dark-400">{t.cta.title2}</span>
            </h2>

            <p className="relative text-dark-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
              {t.cta.desc}
            </p>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-black font-semibold text-[16px] transition-all duration-300 hover:scale-[1.02] hover:bg-dark-50 shadow-[0_4px_20px_0_rgba(255,255,255,0.25)]"
              >
                {t.cta.btn}
              </a>
              <span className="text-[14px] text-dark-400 font-medium">
                {t.cta.tg}{' '}
                <a href={CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">
                  {CONFIG.telegram}
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
