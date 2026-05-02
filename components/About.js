import FadeUp from './FadeUp'

const focus = [
  { label: 'Development', text: 'Transitioning to full-stack by mastering Express.js, MongoDB and Firebase integration.' },
  { label: 'Collaboration', text: 'Actively seeking opportunities on frontend open-source projects to refine code quality.' },
  { label: 'Problem Solving', text: 'Applying structured logic to optimize web performance and ensure state consistency.' },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 bg-[#0d1117]">
      <div className="max-w-[1100px] mx-auto px-[6%]">

        <FadeUp>
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#63b3ed] mb-3">About Me</p>
          <h2 className="font-syne font-extrabold text-white mb-12" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Who I Am
          </h2>
        </FadeUp>

        {/* Grid: left | divider | right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-14 items-start">

          {/* LEFT — bio text */}
          <FadeUp delay={0.1}>
            <p className="text-sm text-[#94a3b8] leading-[1.85] mb-5 text-justify">
              Passionate Frontend Developer focused on crafting{' '}
              <strong className="text-[#e2e8f0]">scalable, high-performance</strong> and user-centric web applications.
              My work is defined by a commitment to{' '}
              <strong className="text-[#e2e8f0]">clean, maintainable code</strong> and seamless user experiences.
            </p>
            <p className="text-sm text-[#94a3b8] leading-[1.85] mb-5 text-justify">
              I approach development with a logical mindset, prioritizing efficient{' '}
              <strong className="text-[#e2e8f0]">component architecture</strong> and state management. I am now actively
              expanding into the <strong className="text-[#e2e8f0]">MERN stack</strong> to bridge the gap between clean
              frontend interfaces and powerful backend technologies.
            </p>

          </FadeUp>

          {/* DIVIDER — Responsive and thin */}
          <div className="hidden lg:block w-[2px] h-full bg-gradient-to-b from-transparent via-[#63b3ed] to-transparent mx-auto" />

          {/* RIGHT — Current Focus */}
          <FadeUp delay={0.2}>
            <p className="text-xs font-bold tracking-[2px] uppercase text-[#63b3ed] mb-4">Current Focus & Goals</p>
            <div className="flex flex-col gap-3">
              {focus.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="mt-0.5 w-6 h-6 rounded-md bg-[#63b3ed]/10 border border-[#63b3ed]/20 flex items-center justify-center text-[#63b3ed] text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-[#e2e8f0] text-sm mb-1">{f.label}</p>
                    <p className="text-xs text-[#94a3b8] opacity-80 leading-[1.75] text-justify">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </FadeUp>

        </div>
      </div>
    </section>
  )
}




