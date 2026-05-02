import FadeUp from './FadeUp'

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24 bg-[#07090f]">
      <div className="max-w-[1100px] mx-auto px-[6%]">

        <FadeUp>
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#63b3ed] mb-3">Background</p>
          <h2 className="font-syne font-extrabold text-white mb-12" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Education
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT — Degrees */}
          {/* <div className="flex flex-col gap-5"> */}

          {/* KUET */}
          <FadeUp delay={0.1}>
            <div className="relative bg-[#111827] border border-[#63b3ed]/15 rounded-2xl p-6 overflow-hidden hover:border-[#63b3ed]/30 hover:-translate-y-1 transition-all h-full flex flex-col">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#63b3ed] to-[#4fd1c5]" />

              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#4fd1c5]">2020 — 2025</span>
                <span className="text-xs font-bold text-[#63b3ed] bg-[#63b3ed]/10 border border-[#63b3ed]/20 px-2 py-0.5 rounded-md">CGPA 3.53 / 4.00</span>
              </div>

              <h3 className="font-syne font-bold text-white text-lg mb-1">B.Sc. in Textile Engineering</h3>
              <p className="text-sm text-[#63b3ed] font-medium mb-3">Khulna University of Engineering & Technology (KUET)</p>

              {/* Flex grow ব্যবহার করা হয়েছে যাতে নিচের কন্টেন্টটি নিচে থাকে এবং কার্ড সমান হয় */}
              <div className="mt-auto">
                <div className="inline-flex items-center gap-2 bg-[#f6ad55]/10 border border-[#f6ad55]/20 text-[#f6ad55] text-xs font-semibold px-3 py-1 rounded-lg">
                  🏆 University Merit Board Scholarship ×3
                </div>
              </div>
            </div>
          </FadeUp>

          {/* HSC */}
          <FadeUp delay={0.2}>
            <div className="relative bg-[#111827] border border-[#63b3ed]/15 rounded-2xl p-6 overflow-hidden hover:border-[#63b3ed]/30 hover:-translate-y-1 transition-all h-full flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4fd1c5] to-[#f6ad55]" />

              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#4fd1c5]">2017 — 2019</span>
                <span className="text-xs font-bold text-[#4fd1c5] bg-[#4fd1c5]/10 border border-[#4fd1c5]/20 px-2 py-0.5 rounded-md">GPA 5.00 / 5.00</span>
              </div>

              <h3 className="font-syne font-bold text-white text-lg mb-1">Higher Secondary Certificate (HSC)</h3>
              <p className="text-sm text-[#63b3ed] font-medium">Govt. Haji Muhammad Mohsin College, Chattogram</p>
            </div>
          </FadeUp>
          {/* </div> */}

          {/* RIGHT — Thesis */}
          {/* <FadeUp delay={0.15}>
            <div className="relative bg-[#111827] border border-[#f6ad55]/15 rounded-2xl p-6 h-full overflow-hidden hover:border-[#f6ad55]/30 hover:-translate-y-1 transition-all">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f6ad55] to-[#ed8936]" />
              <p className="text-xs font-bold tracking-[2px] uppercase text-[#f6ad55] mb-4">Final Year Thesis</p>
              <h3 className="font-syne font-bold text-white text-base mb-4 leading-[1.5]">
                Green Synthesis of TiO₂ Nanoparticles for Functional Enhancement of Cotton Fabric
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { title: 'Green Synthesis', desc: 'Synthesized TiO₂NPs using Moringa Stenopetala extract for sustainable fabric modification.' },
                  { title: 'Fabric Coating', desc: 'Applied nanoparticles to 100% cotton via pad-dry-cure method to enhance performance.' },
                  { title: 'Technical Analysis', desc: 'Verified anti-microbial and UV-protective properties using XRD, FESEM and FTIR.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <span className="text-[#f6ad55] mt-0.5 shrink-0 text-xs font-bold">▸</span>
                    <div>
                      <p className="text-sm font-semibold text-[#e2e8f0] mb-0.5">{item.title}</p>
                      <p className="text-xs text-[#94a3b8] leading-[1.7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp> */}

        </div>
      </div>
    </section>
  )
}
