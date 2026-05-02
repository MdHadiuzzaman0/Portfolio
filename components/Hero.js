'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { label: 'GitHub', href: 'https://github.com/MdHadiuzzaman0', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mdhadiuzzaman/', icon: <FaLinkedin /> },
  { label: 'Facebook', href: 'https://www.facebook.com/hadiuzzaman.ridoy', icon: <FaFacebookF /> },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 z-10">
      <div className="max-w-[1500px] mx-auto px-[6%] w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-center py-16">

        {/* LEFT — Text */}
        <div className="">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#4fd1c5]/10 border border-[#4fd1c5]/25 px-4 py-1.5 rounded-full text-xs font-semibold text-[#4fd1c5] tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4fd1c5] animate-pulse-dot" />
            Available for Hire
          </motion.div>

          {/* Name — different font weight/style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-syne leading-[1.05] tracking-tight text-white mb-3"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', fontWeight: 710, letterSpacing: '-2px' }}
          >
            Md.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #63b3ed 0%, #4fd1c5 50%, #f6ad55 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Hadiuzzaman
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-syne font-bold text-[#718096] tracking-widest uppercase text-sm mb-5"
          >
            Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[0.95rem] text-[#94a3b8] leading-[1.8] max-w-[460px] mb-8"
          >
            Building scalable, high-performance web applications with clean code and seamless user experiences. Currently bridging frontend expertise with the MERN stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-3 flex-wrap mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-xl text-[#07090f] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,179,237,0.3)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #63b3ed, #4fd1c5)' }}
            >
              View Projects →
            </a>
            <a
              href="/Md__Hadiuzzaman.pdf"
              download="Md_Hadiuzzaman_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl border border-[#63b3ed]/25 text-[#e2e8f0] hover:border-[#63b3ed] hover:text-[#63b3ed] transition-all duration-300"
            >
              ↓ Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#63b3ed]/15 flex items-center justify-center text-xs font-bold text-[#718096] hover:border-[#63b3ed] hover:text-[#63b3ed] hover:-translate-y-0.5 transition-all duration-200"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo with animated ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" flex justify-center items-center relative order-first lg:order-last"
        >
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-[radial-gradient(circle,rgba(99,179,237,0.12)_0%,transparent_70%)]" />

          <div
            className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full p-[3px]"
            style={{ background: 'conic-gradient(from 180deg, #63b3ed, #4fd1c5, #f6ad55, #63b3ed)' }}
          >
            {/* Photo container */}
            <div className="w-full h-full rounded-full overflow-hidden border-[5px] border-[#07090f] bg-[#111827]">
              <Image
                src="/portfolio_image_1.png"
                alt="Md. Hadiuzzaman"
                width={500} 
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating badge */}
          {/* <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-[#111827] border border-[#63b3ed]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#63b3ed] shadow-xl"
          >
            💻 4 Projects Live
          </motion.div> */}
        </motion.div>

      </div>
    </section>
  )
}
