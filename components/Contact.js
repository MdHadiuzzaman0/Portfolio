'use client'
import { useState } from 'react'
import FadeUp from './FadeUp'
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

// ⚠️ SETUP REQUIRED:
// 1. Go to https://emailjs.com and create a free account
// 2. Create a Service (Gmail) → copy SERVICE_ID
// 3. Create a Template → copy TEMPLATE_ID
// 4. Get your PUBLIC_KEY from Account → API Keys
// Replace the values below with your actual IDs

// ⚠️ EmailJS Config 
const EMAILJS_SERVICE_ID  = 'service_ghica2g';
const EMAILJS_TEMPLATE_ID = 'template_p6oogp2';
const EMAILJS_PUBLIC_KEY  = '04t_X9YqWSaVfbcPG';

const contactInfo = [
  {
    icon: <HiOutlineMail />,
    label: 'Email',
    val: 'mdhadiuzzaman483@gmail.com',
    href: 'mailto:mdhadiuzzaman483@gmail.com'
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    val: '+880 1794 093742',
    href: 'https://wa.me/8801794093742'
  },
  {
    icon: <HiOutlineLocationMarker />,
    label: 'Location',
    val: 'Chattogram, Bangladesh',
    href: null
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/MdHadiuzzaman0', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mdhadiuzzaman/', icon: <FaLinkedinIn /> },
  { label: 'Facebook', href: 'https://www.facebook.com/hadiuzzaman.ridoy', icon: <FaFacebookF /> },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="relative z-10 py-24 bg-[#0d1117]">
      <div className="max-w-[1100px] mx-auto px-[6%]">

        <FadeUp>
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#63b3ed] mb-3 text-center lg:text-left">
            Get In Touch
          </p>
          <h2 className="font-syne font-extrabold text-white mb-12 text-center lg:text-left" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Contact Me
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT — Info Section (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <FadeUp delay={0.1}>
              <h3 className="font-syne font-bold text-white text-xl mb-6">Let's work together</h3>

              <div className="flex flex-col gap-5 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="group flex items-center gap-5 p-4 rounded-2xl bg-[#111827]/50 border border-[#63b3ed]/10 hover:border-[#63b3ed]/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#63b3ed]/10 border border-[#63b3ed]/20 flex items-center justify-center text-xl text-[#63b3ed] group-hover:bg-[#63b3ed] group-hover:text-white transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] text-[#718096] font-bold uppercase tracking-[2px] mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm md:text-base text-[#cbd5e1] hover:text-[#63b3ed] transition-colors break-all">
                          {item.val}
                        </a>
                      ) : (
                        <p className="text-sm md:text-base text-[#cbd5e1]">{item.val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-[#63b3ed]/15 bg-[#111827] flex items-center justify-center text-lg text-[#718096] hover:border-[#63b3ed] hover:text-[#63b3ed] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — Form Section (7 Columns) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-[#111827]/30 p-6 md:p-8 rounded-3xl border border-[#63b3ed]/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#718096] block mb-2 ml-1">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-[#0d1117] border border-[#63b3ed]/15 rounded-xl px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#4a5568] outline-none focus:border-[#63b3ed] focus:shadow-[0_0_0_3px_rgba(99,179,237,0.1)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[#718096] block mb-2 ml-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[#0d1117] border border-[#63b3ed]/15 rounded-xl px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#4a5568] outline-none focus:border-[#63b3ed] focus:shadow-[0_0_0_3px_rgba(99,179,237,0.1)] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#718096] block mb-2 ml-1">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full bg-[#0d1117] border border-[#63b3ed]/15 rounded-xl px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#4a5568] outline-none focus:border-[#63b3ed] focus:shadow-[0_0_0_3px_rgba(99,179,237,0.1)] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-[#718096] block mb-2 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="w-full bg-[#0d1117] border border-[#63b3ed]/15 rounded-xl px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#4a5568] outline-none focus:border-[#63b3ed] focus:shadow-[0_0_0_3px_rgba(99,179,237,0.1)] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 mt-2 rounded-xl font-bold text-sm text-[#07090f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,179,237,0.3)] disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden relative group"
                  style={{ background: 'linear-gradient(135deg, #63b3ed, #4fd1c5)' }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : status === 'error' ? '✕ Error — Try Again' : 'Send Message'}
                  </span>
                </button>

                <p className="text-xs text-[#4a5568] text-center">
                  Message goes directly to mdhadiuzzaman483@gmail.com
                </p>

              </form>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  )
}