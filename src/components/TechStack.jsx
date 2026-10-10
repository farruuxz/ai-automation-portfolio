import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const techs = ['Python', 'Telegram Bot API', 'Google Gemini', 'SQLite', 'Google Sheets', 'Apps Script', 'Webhooks']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="py-20 border-t border-white/[0.04]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {t.tech.title}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech}
              variants={item}
              className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-colors duration-300 cursor-default text-[13px] font-medium text-dark-200 hover:text-white"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
