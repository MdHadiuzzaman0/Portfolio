'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '../lib/projects'

// ── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [showAllTech, setShowAllTech] = useState(false)
  const visibleTech = showAllTech ? project.tech : project.tech.slice(0, 3)
  const remaining = project.tech.length - 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.1 }}
    >
      <div className="group bg-[#111827] border border-[#63b3ed]/12 rounded-2xl overflow-hidden hover:border-[#63b3ed]/30 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)] transition-all duration-300 flex flex-col h-full">

        {/* Screenshot */}
        <div className="relative w-full h-48 bg-[#0d1117] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 font-syne font-extrabold text-xs text-[#63b3ed] bg-[#07090f]/85 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-[#63b3ed]/20">
            {project.num}
          </div>

          <div className="absolute top-3 right-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md bg-[#4fd1c5]/20 border border-[#4fd1c5]/30 text-[#4fd1c5] hover:bg-[#4fd1c5]/30 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4fd1c5] animate-pulse" />
              LIVE
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-syne font-extrabold text-lg text-white mb-0.5 group-hover:text-[#63b3ed] transition-colors duration-200">
            {project.emoji} {project.name}
          </h3>
          <p className="text-[10px] text-[#718096] mb-3 font-bold tracking-[1.5px] uppercase">{project.tagline}</p>
          <p className="text-sm text-[#94a3b8] leading-[1.7] mb-4 flex-1 line-clamp-2">{project.description}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {visibleTech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#63b3ed]/8 border border-[#63b3ed]/15 text-[#63b3ed]"
              >
                {t}
              </span>
            ))}
            {!showAllTech && remaining > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setShowAllTech(true) }}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#718096]/10 border border-[#718096]/20 text-[#718096] hover:bg-[#63b3ed]/10 hover:border-[#63b3ed]/20 hover:text-[#63b3ed] transition-all cursor-pointer"
              >
                +{remaining} more
              </button>
            )}
            {showAllTech && (
              <button
                onClick={(e) => { e.stopPropagation(); setShowAllTech(false) }}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#718096]/10 border border-[#718096]/20 text-[#718096] hover:text-[#63b3ed] transition-all cursor-pointer"
              >
                show less
              </button>
            )}
          </div>

          {/* Buttons row */}
          <div className="flex gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold text-[#07090f] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(99,179,237,0.35)] active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #63b3ed, #4fd1c5)' }}
            >
              View Details →
            </Link>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-xl border border-[#63b3ed]/20 text-[#63b3ed] hover:bg-[#63b3ed]/10 hover:border-[#63b3ed]/40 transition-all text-sm font-semibold"
              title="View Live Site"
            >
              ↗
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-xl border border-[#718096]/20 text-[#718096] hover:bg-[#718096]/10 hover:border-[#718096]/40 hover:text-[#e2e8f0] transition-all text-sm font-semibold"
              title="GitHub Repository"
            >
              ⌥
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

// ── MAIN PROJECTS SECTION ─────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 bg-[#0d1117]">
      <div className="max-w-[1100px] mx-auto px-[6%]">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#63b3ed] mb-3">Work</p>
          <h2 className="font-syne font-extrabold text-white mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Featured Projects
          </h2>
          <p className="text-sm text-[#718096] mb-12 max-w-xl">
            Click <strong className="text-[#94a3b8]">View Details</strong> for full breakdown — tech stack, challenges, improvements, live link & GitHub repo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  )
}