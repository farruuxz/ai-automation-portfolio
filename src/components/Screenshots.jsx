import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'
import { useLanguage } from '../i18n/LanguageContext'

export default function Screenshots() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' })
  const { t } = useLanguage()
  const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`
  
  // Real images are fixed, but text comes from translations
  const showcases = [
    {
      id: 'consultation',
      image: asset('consultation.png'),
      ...t.demo.items[0]
    },
    {
      id: 'admin',
      image: asset('admin-notification.png'),
      ...t.demo.items[1]
    },
    {
      id: 'crm',
      image: asset('crm.png'),
      ...t.demo.items[2]
    },
  ]

  return (
    <section id="demo" className="section-padding bg-dark-900 border-y border-white/[0.04]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20 md:mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t.demo.title}
          </h2>
        </motion.div>

        <div className="space-y-20 sm:space-y-24 md:space-y-40">
          {showcases.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? 'lg:grid-cols-[1.3fr_1fr]' : ''
              }`}
            >
              <div className={`flex flex-col ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-[17px] text-dark-300 leading-relaxed font-medium">{item.caption}</p>
              </div>

              <div
                className={`relative cursor-zoom-in group ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                onClick={() => setLightbox({ open: true, src: item.image, alt: item.alt })}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setLightbox({ open: true, src: item.image, alt: item.alt })
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={item.alt}
              >
                <div className="relative rounded-[20px] overflow-hidden bg-dark-800 border border-white/[0.08] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:border-white/[0.15]">
                  <div className="flex items-center justify-center relative h-10 bg-[#1c1c1e] border-b border-white/[0.04]">
                    <div className="absolute left-4 flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                  </div>
                  <div className="p-1">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-auto rounded-[12px] opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        src={lightbox.src}
        alt={lightbox.alt}
        isOpen={lightbox.open}
        onClose={() => setLightbox({ open: false, src: '', alt: '' })}
      />
    </section>
  )
}
