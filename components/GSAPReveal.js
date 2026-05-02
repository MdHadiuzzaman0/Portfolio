'use client'
import { useEffect, useRef } from 'react'

// Uses GSAP to animate a text element when it enters viewport
export default function GSAPReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    let gsap, ScrollTrigger

    async function init() {
      const gsapLib = (await import('gsap')).default
      const { ScrollTrigger: ST } = await import('gsap/ScrollTrigger')
      gsap = gsapLib
      ScrollTrigger = ST
      gsap.registerPlugin(ScrollTrigger)

      if (!ref.current) return

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }

    init()

    return () => {
      if (ScrollTrigger) ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [delay])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
