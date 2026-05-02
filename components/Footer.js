'use client'

import { useState } from 'react'

export default function Footer() {
  const [modalContent, setModalContent] = useState(null)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // পলিসি ডাটা
  const policies = {
    privacy: {
      title: "Privacy Policy",
      text: "We value your privacy. Your data is safe with us and we only use essential cookies to improve your experience."
    },
    terms: {
      title: "Terms of Service",
      text: "By using this site, you agree to our terms. This is a personal portfolio showcasing frontend development projects."
    }
  }

  return (
    <footer className="relative z-10 bg-[#07090f] border-t border-[#63b3ed]/10 py-10 px-[6%]">
      <div className="max-w-[1100px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Left Side: Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-[#63b3ed] font-bold text-lg mb-1">Md. Hadiuzzaman</h2>
            <p className="text-[10px] uppercase tracking-widest text-[#4a5568]">
              Frontend Developer • MERN Stack
            </p>
          </div>

          {/* Middle: Modal Trigger Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setModalContent(policies.privacy)}
              className="text-xs text-[#718096] hover:text-[#63b3ed] transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setModalContent(policies.terms)}
              className="text-xs text-[#718096] hover:text-[#63b3ed] transition-colors"
            >
              Terms of Service
            </button>
          </nav>

          {/* Right Side: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl border border-[#63b3ed]/20 flex items-center justify-center text-[#718096] hover:border-[#63b3ed] hover:text-[#63b3ed] transition-all duration-300"
          >
            ↑
          </button>
        </div>

        <div className="text-center pt-8 border-t border-[#63b3ed]/5">
          <p className="text-xs text-[#2d3748]">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>
      </div>

      {/* --- MODAL UI --- */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-[#63b3ed]/30 p-6 rounded-2xl max-w-md w-full shadow-2xl">
            <h3 className="text-[#63b3ed] text-xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
              {modalContent.text}
            </p>
            <button 
              onClick={() => setModalContent(null)}
              className="w-full py-2 bg-[#63b3ed]/10 hover:bg-[#63b3ed]/20 text-[#63b3ed] rounded-xl transition-all font-medium border border-[#63b3ed]/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}