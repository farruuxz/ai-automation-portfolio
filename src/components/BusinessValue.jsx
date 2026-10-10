import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function BusinessValue() {
  const { t } = useLanguage()

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t.value.title}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.value.cards.map((v) => (
            <motion.div key={v.title} variants={item} className="glass p-8 hover:bg-white/[0.06] transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{v.title}</h3>
              <p className="text-[15px] text-dark-300 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
