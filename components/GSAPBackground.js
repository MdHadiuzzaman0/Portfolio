'use client'
import { useEffect, useRef } from 'react'

// GSAP animated background with floating orbs and grid
export default function GSAPBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    let gsap
    let ctx

    async function init() {
      const { default: gsapLib } = await import('gsap')
      gsap = gsapLib

      const orbs = document.querySelectorAll('.gsap-orb')

      // Animate each orb with GSAP
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          x: () => (Math.random() - 0.5) * 120,
          y: () => (Math.random() - 0.5) * 80,
          scale: 0.85 + Math.random() * 0.3,
          duration: 8 + i * 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 1.5,
        })

        gsap.to(orb, {
          opacity: 0.04 + Math.random() * 0.05,
          duration: 4 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.8,
        })
      })

      // Animate grid lines
      const lines = document.querySelectorAll('.gsap-gridline')
      lines.forEach((line, i) => {
        gsap.to(line, {
          opacity: 0.02 + Math.random() * 0.04,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: Math.random() * 2,
        })
      })
    }

    init()

    return () => {
      if (gsap) gsap.killTweensOf('.gsap-orb, .gsap-gridline')
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Orbs */}
      <div
        className="gsap-orb"
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: '#63b3ed',
          filter: 'blur(120px)',
          opacity: 0.05,
          top: '-200px',
          left: '-150px',
        }}
      />
      <div
        className="gsap-orb"
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: '#4fd1c5',
          filter: 'blur(100px)',
          opacity: 0.05,
          bottom: '-150px',
          right: '-100px',
        }}
      />
      <div
        className="gsap-orb"
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: '#f6ad55',
          filter: 'blur(100px)',
          opacity: 0.03,
          top: '40%',
          left: '45%',
        }}
      />
      <div
        className="gsap-orb"
        style={{
          position: 'absolute',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: '#63b3ed',
          filter: 'blur(80px)',
          opacity: 0.04,
          top: '30%',
          right: '10%',
        }}
      />

      {/* Subtle grid lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="gsap-gridline"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 1,
            top: `${(i + 1) * 12.5}%`,
            background: 'linear-gradient(90deg, transparent, rgba(99,179,237,0.06), transparent)',
            opacity: 0.03,
          }}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="gsap-gridline"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: 1,
            left: `${(i + 1) * 16.66}%`,
            background: 'linear-gradient(180deg, transparent, rgba(99,179,237,0.06), transparent)',
            opacity: 0.03,
          }}
        />
      ))}
    </div>
  )
}
