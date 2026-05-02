'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[6%] py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07090f]/90 backdrop-blur-xl border-b border-[#63b3ed]/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Animated Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="relative w-9 h-9"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {/* Outer ring */}
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#63b3ed" />
                  <stop offset="100%" stopColor="#4fd1c5" />
                </linearGradient>
              </defs>
              <circle cx="18" cy="18" r="16" fill="none" stroke="url(#logoGrad)" strokeWidth="2" opacity="0.5" />
              <circle cx="18" cy="18" r="10" fill="url(#logoGrad)" opacity="0.15" />
              <text x="18" y="23" textAnchor="middle" fill="url(#logoGrad)" fontSize="13" fontWeight="800" fontFamily="Syne, sans-serif">H</text>
            </svg>
          </motion.div>
          {/* <span className="font-syne font-extrabold text-lg grad-text hidden sm:block">Hadiuzzaman</span> */}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="btn text-xs font-semibold tracking-[2px] uppercase text-[#718096] hover:text-[#63b3ed] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#63b3ed] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="/Md__Hadiuzzaman.pdf"
            download="Md_Hadiuzzaman_CV.pdf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-bold px-4 py-2 border border-[#63b3ed] text-[#63b3ed] rounded-lg hover:bg-[#63b3ed] hover:text-[#07090f] transition-all duration-200 tracking-wide"
          >
            ↓ CV
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="w-5 h-px bg-[#e2e8f0] block origin-center" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="w-5 h-px bg-[#e2e8f0] block" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="w-5 h-px bg-[#e2e8f0] block origin-center" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 flex flex-col gap-4 px-[6%] py-6 bg-[#07090f]/97 backdrop-blur-xl border-b border-[#63b3ed]/10 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-[2px] text-[#718096] hover:text-[#63b3ed] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Md__Hadiuzzaman.pdf"
              download="Md_Hadiuzzaman_CV.pdf"
              className="text-sm font-bold px-4 py-2 border border-[#63b3ed] text-[#63b3ed] rounded-lg w-fit hover:bg-[#63b3ed] hover:text-[#07090f] transition-all"
            >
              ↓ Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
