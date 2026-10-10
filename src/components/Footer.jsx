import { CONFIG } from '../config'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 border-t border-white/[0.04]">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[13px] font-medium text-dark-500">{t.footer.brand}</span>
        <span className="text-[13px] font-medium text-dark-500">
          {t.footer.built} {CONFIG.authorName}
        </span>
      </div>
    </footer>
  )
}
