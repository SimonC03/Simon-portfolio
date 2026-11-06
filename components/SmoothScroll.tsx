'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

// Eases wheel scrolling so scroll-linked motion glides instead of stepping. Keyboard and
// touch stay native; under prefers-reduced-motion Lenis tracks the wheel 1:1.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.085 })
    return () => lenis.destroy()
  }, [])
  return null
}
