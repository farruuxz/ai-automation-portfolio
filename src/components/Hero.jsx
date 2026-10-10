import { motion } from 'framer-motion'
import { CONFIG } from '../config'
import { useLanguage } from '../i18n/LanguageContext'

const techBadges = ['Python', 'Telegram', 'Gemini', 'SQLite', 'Google Sheets']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const { t } = useLanguage()
  const consultationImage = `${import.meta.env.BASE_URL}images/consultation.png`

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle radial highlight instead of colored orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 backdrop-blur-md"
          >
            <span className="text-[11px] font-semibold text-dark-200 tracking-wider uppercase">
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter mb-6 text-white"
          >
            {t.hero.title1}
            <br />
            <span className="text-dark-400">{t.hero.title2}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-dark-300 leading-relaxed max-w-2xl mb-10 font-medium"
          >
            {t.hero.text}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold text-[15px] transition-all duration-300 hover:scale-[1.02] hover:bg-dark-50 shadow-[0_4px_14px_0_rgba(255,255,255,0.2)]"
            >
              {t.hero.btnPrimary}
            </a>
            <a
              href={CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/[0.04] border border-white/[0.1] text-white hover:bg-white/[0.08] font-medium text-[15px] transition-all duration-300 backdrop-blur-md"
            >
              {t.hero.btnSecondary}
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-[13px] font-medium text-dark-300 bg-white/[0.02] border border-white/[0.05] rounded-full"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero Screenshot Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-dark-900 border border-white/[0.1] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
            {/* macOS window chrome */}
            <div className="flex items-center justify-center relative h-12 bg-[#1c1c1e] border-b border-white/[0.05]">
              <div className="absolute left-4 sm:left-5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[13px] font-medium text-dark-400">Telegram</span>
            </div>
            <div className="bg-dark-800 p-1 sm:p-2">
              <img
                src={consultationImage}
                alt="AI-консультация в Telegram"
                className="w-full h-auto rounded-[16px] sm:rounded-[24px] border border-white/[0.05]"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
