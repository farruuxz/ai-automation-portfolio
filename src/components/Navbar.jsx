import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONFIG } from '../config'
import { useLanguage } from '../i18n/LanguageContext'

const NAV_LINKS = [
  { href: '#problem', key: 'problem' },
  { href: '#solution', key: 'solution' },
  { href: '#demo', key: 'demo' },
  { href: '#contact', key: 'contact' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()

  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const lastScrollY = useRef(0)

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      setScrolled(currentY > 20)

      if (currentY < 80) {
        setVisible(true)
      } else if (currentY > lastScrollY.current + 8) {
        setVisible(false)
        setMenuOpen(false)
      } else if (currentY < lastScrollY.current - 8) {
        setVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect active section
  useEffect(() => {
    const sections = NAV_LINKS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.5, 0.7],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const links = [
    { href: '#problem', label: t.nav.problem, id: 'problem' },
    { href: '#solution', label: t.nav.solution, id: 'solution' },
    { href: '#demo', label: t.nav.demo, id: 'demo' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setMenuOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{
          y: visible ? 0 : -120,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 24,
          mass: 0.8,
        }}
        className="
          fixed
          top-[max(0.75rem,env(safe-area-inset-top))]
          md:top-5
          left-0
          right-0
          z-[100]
          px-2
          min-[360px]:px-3
          md:px-6
          pointer-events-none
        "
      >
        <motion.nav
          layout
          className={`
            pointer-events-auto
            relative
            mx-auto
            w-full
            max-w-[900px]
            rounded-[22px]
            sm:rounded-[26px]
            border
            overflow-visible
            transition-all
            duration-500

            ${
              scrolled || menuOpen
                ? `
                  bg-black/55
                  backdrop-blur-[30px]
                  border-white/[0.12]
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                `
                : `
                  bg-black/20
                  backdrop-blur-2xl
                  border-white/[0.07]
                  shadow-[0_12px_50px_rgba(0,0,0,0.22)]
                `
            }
          `}
        >
          {/* subtle glass highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-6
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
            "
          />

          <div
            className="
              relative
              flex
              min-h-[64px]
              items-center
              justify-between
              px-3
              min-[360px]:px-4
              md:px-6
            "
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
                setActiveSection('')
              }}
              className="
                group
                flex
                items-center
                gap-2
                shrink-0
                min-h-11
              "
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.06 }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 18,
                }}
                className="
                  relative
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[11px]
                  border
                  border-white/15
                  bg-white
                  text-[11px]
                  font-black
                  text-black
                  shadow-[0_8px_25px_rgba(255,255,255,0.08)]
                "
              >
                N
              </motion.div>

              <div className="flex flex-col leading-none">
                <span
                  className="
                    text-[13px]
                    font-semibold
                    tracking-[-0.01em]
                    text-white
                  "
                >
                  NexdenAI
                </span>

                <span
                  className="
                    mt-1
                    hidden
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-white/35
                    sm:block
                  "
                >
                  AI Case
                </span>
              </div>
            </a>

            {/* Desktop navigation */}
            <div
              className="
                hidden
                md:flex
                items-center
                gap-1
                rounded-full
                border
                border-white/[0.06]
                bg-white/[0.025]
                p-1
              "
            >
              {links.map((link) => {
                const active = activeSection === link.id

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) =>
                      scrollToSection(e, link.href)
                    }
                    className="
                      relative
                      inline-flex
                      min-h-11
                      items-center
                      rounded-full
                      px-3.5
                      py-2
                      text-[12px]
                      font-medium
                      transition-colors
                      duration-300
                    "
                  >
                    {active && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="
                          absolute
                          inset-0
                          rounded-full
                          border
                          border-white/[0.12]
                          bg-white/[0.09]
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                        "
                        transition={{
                          type: 'spring',
                          stiffness: 320,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`
                        relative z-10
                        ${
                          active
                            ? 'text-white'
                            : 'text-white/45 hover:text-white'
                        }
                      `}
                    >
                      {link.label}
                    </span>
                  </a>
                )
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Language switcher */}
              <div
                className="
                  relative
                  flex
                  items-center
                  rounded-full
                  border
                  border-white/[0.09]
                  bg-white/[0.035]
                  p-0.5
                  min-[360px]:p-1
                  backdrop-blur-xl
                "
              >
                {['ru', 'uz'].map((code) => {
                  const active = lang === code

                  return (
                    <button
                      key={code}
                      onClick={() => setLang(code)}
                      className="
                        relative
                        h-11
                        min-w-11
                        rounded-full
                        px-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        outline-none
                      "
                    >
                      {active && (
                        <motion.span
                          layoutId="language-pill"
                          className="
                            absolute
                            inset-0
                            rounded-full
                            bg-white
                            shadow-[0_5px_20px_rgba(255,255,255,0.15)]
                          "
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <span
                        className={`
                          relative z-10
                          transition-colors
                          ${
                            active
                              ? 'text-black'
                              : 'text-white/40 hover:text-white'
                          }
                        `}
                      >
                        {code}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Desktop CTA */}
              <motion.a
                href={CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.025,
                  y: -1,
                }}
                whileTap={{ scale: 0.97 }}
                className="
                  group
                  hidden
                  lg:flex
                  h-11
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-4
                  text-[12px]
                  font-semibold
                  text-black
                  shadow-[0_8px_30px_rgba(255,255,255,0.1)]
                "
              >
                <span>{t.nav.contactBtn}</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                >
                  <path
                    d="M7 17L17 7M9 7H17V15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  md:hidden
                "
                aria-label="Toggle menu"
              >
                <div className="relative h-4 w-4">
                  <motion.span
                    animate={
                      menuOpen
                        ? {
                            rotate: 45,
                            y: 6,
                          }
                        : {
                            rotate: 0,
                            y: 2,
                          }
                    }
                    className="
                      absolute
                      left-0
                      top-0
                      block
                      h-[1.5px]
                      w-4
                      rounded-full
                      bg-white
                    "
                  />

                  <motion.span
                    animate={{
                      opacity: menuOpen ? 0 : 1,
                    }}
                    className="
                      absolute
                      left-0
                      top-[7px]
                      block
                      h-[1.5px]
                      w-4
                      rounded-full
                      bg-white
                    "
                  />

                  <motion.span
                    animate={
                      menuOpen
                        ? {
                            rotate: -45,
                            y: -6,
                          }
                        : {
                            rotate: 0,
                            y: 0,
                          }
                    }
                    className="
                      absolute
                      bottom-0
                      left-0
                      block
                      h-[1.5px]
                      w-4
                      rounded-full
                      bg-white
                    "
                  />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  overflow-hidden
                  md:hidden
                "
              >
                <div
                  className="
                    mx-2
                    min-[360px]:mx-3
                    mb-3
                    border-t
                    border-white/[0.06]
                    pt-3
                  "
                >
                  <div
                    className="
                      rounded-[22px]
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      p-2
                    "
                  >
                    {links.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.045,
                        }}
                        onClick={(e) =>
                          scrollToSection(
                            e,
                            link.href
                          )
                        }
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          rounded-[16px]
                          px-4
                          py-3.5
                          min-h-12
                          text-[14px]
                          font-medium
                          text-white/65
                          transition-colors
                          hover:bg-white/[0.05]
                          hover:text-white
                        "
                      >
                        <span>{link.label}</span>

                        <motion.span
                          className="
                            text-lg
                            text-white/25
                          "
                          whileHover={{ x: 3 }}
                        >
                          ↗
                        </motion.span>
                      </motion.a>
                    ))}

                    <div
                      className="
                        my-2
                        h-px
                        bg-white/[0.06]
                      "
                    />

                    <motion.a
                      href={CONFIG.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-[16px]
                        bg-white
                        px-4
                        py-3.5
                        min-h-12
                        text-[14px]
                        font-semibold
                        text-black
                      "
                    >
                      <span>
                        {t.nav.contactTg}
                      </span>

                      <span>↗</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.div>
    </>
  )
}
