import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Flow() {
  const { t } = useLanguage()
  const steps = t.flow.steps

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            {t.flow.title}
          </h2>
        </motion.div>

        {/* Desktop horizontal flow */}
        <div className="hidden md:flex items-center justify-between gap-3 relative max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center flex-1 relative z-10"
            >
              <div className="bg-dark-900 border border-white/[0.08] rounded-2xl p-5 text-center flex-1 min-w-0 shadow-lg">
                <h4 className="text-[15px] font-semibold text-white mb-1 truncate">{step.label}</h4>
                <p className="text-[13px] text-dark-400 truncate">{step.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="flex-shrink-0 w-8 flex items-center justify-center text-dark-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
          {/* Subtle background connection line */}
          <div className="absolute top-1/2 left-10 right-10 h-px bg-white/[0.04] -translate-y-1/2 -z-10" />
        </div>

        {/* Mobile vertical flow */}
        <div className="md:hidden flex flex-col gap-2 max-w-sm mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="bg-dark-900 border border-white/[0.08] rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-[15px] font-semibold text-white">{step.label}</h4>
                  <p className="text-[13px] text-dark-400">{step.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] flex items-center justify-center text-dark-400 font-medium text-xs border border-white/[0.05]">
                  0{i + 1}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2 text-dark-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
