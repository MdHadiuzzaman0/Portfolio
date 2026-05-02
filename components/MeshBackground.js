'use client'
// Animated background — three soft glowing orbs that move slowly
export default function MeshBackground() {
  return (
    <div className="mesh-bg" aria-hidden="true">
      <div className="mesh-orb" />
      <div className="mesh-orb" />
      <div className="mesh-orb" />
    </div>
  )
}
