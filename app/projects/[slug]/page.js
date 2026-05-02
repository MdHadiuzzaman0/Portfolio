import Link from 'next/link'
import { getProject, projects } from '../../../lib/projects'
import { notFound } from 'next/navigation'

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  return {
    title: project ? `${project.name} — Hadiuzzaman` : 'Project Not Found',
  }
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-[#07090f] pt-24 pb-20 relative">

      {/* Back button */}
      <div className="max-w-[900px] mx-auto px-[6%] mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#718096] hover:text-[#63b3ed] transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="max-w-[900px] mx-auto px-[6%]">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#63b3ed] mb-3">{project.num} / 04</p>
          <h1 className="font-syne font-extrabold text-white mb-2" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-1px' }}>
            {project.emoji} {project.name}
          </h1>
          <p className="text-[#718096] font-medium text-lg">{project.tagline}</p>
        </div>

        {/* Project image */}
        <div className="w-full h-64 sm:h-80 bg-[#111827] rounded-2xl border border-[#63b3ed]/12 overflow-hidden mb-10 flex items-center justify-center relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top"
          />
          <span className="text-7xl opacity-10 absolute">{project.emoji}</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 flex-wrap mb-12">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#07090f] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(99,179,237,0.3)] transition-all"
            style={{ background: 'linear-gradient(135deg, #63b3ed, #4fd1c5)' }}
          >
            ↗ View Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[#63b3ed]/25 text-[#e2e8f0] hover:border-[#63b3ed] hover:text-[#63b3ed] transition-all"
          >
            ⌥ GitHub Repository
          </a>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT col — tech + description */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Description */}
            <div className="bg-[#111827] border border-[#63b3ed]/12 rounded-2xl p-6">
              <h2 className="font-syne font-bold text-[#63b3ed] text-xs tracking-[2px] uppercase mb-4">Description</h2>
              <p className="text-sm text-[#94a3b8] leading-[1.85]">{project.description}</p>
            </div>

            {/* Challenges */}
            <div className="bg-[#111827] border border-[#f6ad55]/12 rounded-2xl p-6">
              <h2 className="font-syne font-bold text-[#f6ad55] text-xs tracking-[2px] uppercase mb-5">Challenges Faced</h2>
              <div className="flex flex-col gap-4">
                {project.challenges.map((c, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-md bg-[#f6ad55]/10 border border-[#f6ad55]/20 flex items-center justify-center text-[#f6ad55] text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-[#94a3b8] leading-[1.75]">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div className="bg-[#111827] border border-[#4fd1c5]/12 rounded-2xl p-6">
              <h2 className="font-syne font-bold text-[#4fd1c5] text-xs tracking-[2px] uppercase mb-5">Future Improvements</h2>
              <div className="flex flex-col gap-3">
                {project.improvements.map((imp, i) => (
                  <div key={i} className="flex gap-3 items-start text-sm text-[#94a3b8]">
                    <span className="text-[#4fd1c5] mt-1 shrink-0">▸</span>
                    <p className="leading-[1.75]">{imp}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT col — tech stack */}
          <div>
            <div className="bg-[#111827] border border-[#63b3ed]/12 rounded-2xl p-6 sticky top-24">
              <h2 className="font-syne font-bold text-[#63b3ed] text-xs tracking-[2px] uppercase mb-5">Tech Stack</h2>
              <div className="flex flex-col gap-2">
                {project.tech.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-sm text-[#94a3b8] py-2 border-b border-[#63b3ed]/6 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#63b3ed] shrink-0" />
                    {t}
                  </div>
                ))}
              </div>

              {/* Links again */}
              <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-[#63b3ed]/10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#63b3ed] hover:underline flex items-center gap-1"
                >
                  ↗ Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#718096] hover:text-[#63b3ed] flex items-center gap-1 transition-colors"
                >
                  ⌥ GitHub Repo
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Other projects */}
        <div className="mt-16 pt-10 border-t border-[#63b3ed]/10">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#718096] mb-6">Other Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects.filter(p => p.slug !== project.slug).map(p => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="bg-[#111827] border border-[#63b3ed]/12 rounded-xl p-4 hover:border-[#63b3ed]/30 hover:-translate-y-0.5 transition-all group"
              >
                <p className="font-syne font-bold text-sm text-white group-hover:text-[#63b3ed] transition-colors">{p.emoji} {p.name}</p>
                <p className="text-xs text-[#718096] mt-1">{p.tagline}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}