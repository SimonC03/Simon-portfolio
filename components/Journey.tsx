'use client'

import { useEffect, useRef, useState } from 'react'
import type { Shape } from './journeyScene'

interface Chapter {
  year: string
  title: string
  org: string
  text: string
  shape: string
}
interface Props {
  content: { title: string; intro: string; chapters: Chapter[] }
}

const canRun3d = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

// A pinned section where particles form a symbol for each chapter as you scroll.
// Without WebGL, or with reduced motion, it is a plain list of the same chapters.
export default function Journey({ content }: Props) {
  const section = useRef<HTMLElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = useState(false)
  const [active, setActive] = useState(0) // 0 = intro, k = chapter k-1
  const [scrollbar, setScrollbar] = useState(0)
  const states = content.chapters.length + 1

  useEffect(() => {
    setPinned(canRun3d())
    // 100vw includes a classic scrollbar; subtract it so the band lines up with the page
    const measure = () => setScrollbar(window.innerWidth - document.documentElement.clientWidth)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (!pinned) return
    const el = section.current!
    let scene: { setProgress: (p: number) => void; dispose: () => void } | null = null
    let disposed = false

    const progress = () => {
      const r = el.getBoundingClientRect()
      const run = Math.max(1, r.height - window.innerHeight)
      return Math.max(0, Math.min(1, -r.top / run)) * (states - 1)
    }
    const onScroll = () => {
      const p = progress()
      setActive(Math.round(p))
      scene?.setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Fetch three.js only when the section is getting close.
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || scene) return
        io.disconnect()
        const { createJourneyScene } = await import('./journeyScene')
        if (disposed || !stage.current) return
        const shapes = ['cloud', ...content.chapters.map((c) => c.shape)] as Shape[]
        scene = createJourneyScene(stage.current, shapes, window.innerWidth < 768)
        scene.setProgress(progress())
      },
      { rootMargin: '800px 0px' }
    )
    io.observe(el)

    return () => {
      disposed = true
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      scene?.dispose()
    }
  }, [pinned, content, states])

  return (
    <section
      ref={section}
      aria-labelledby="journey-title"
      className="relative left-1/2 mt-32 -translate-x-1/2 bg-[#111214] text-[#eff0f1] md:mt-44"
      style={{
        width: `calc(100vw - ${scrollbar}px)`,
        height: pinned ? `${(states - 1) * 80 + 100}svh` : undefined,
      }}
    >
      <div className={pinned ? 'sticky top-0 h-svh overflow-hidden' : ''}>
        {pinned && <div ref={stage} className="absolute inset-0" aria-hidden="true" />}

        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-4 py-16 sm:px-6 md:py-20 xl:px-0">
          <h2
            id="journey-title"
            className="text-head leading-[1.05] font-medium tracking-[-0.03em]"
          >
            {content.title}
          </h2>
          <p
            className={`text-lead mt-4 max-w-[34ch] text-[#a3a5aa] transition-opacity duration-500 ${
              pinned && active > 0 ? 'opacity-0' : ''
            }`}
          >
            {content.intro}
          </p>

          <ol
            className={
              pinned ? 'relative mt-auto min-h-[15rem] md:min-h-[13rem]' : 'mt-16 space-y-14'
            }
          >
            {content.chapters.map((c, i) => {
              const on = active === i + 1
              return (
                <li
                  key={c.year + c.title}
                  aria-current={pinned && on ? 'step' : undefined}
                  className={
                    pinned
                      ? `absolute bottom-0 left-0 max-w-[34rem] transition-[opacity,transform] duration-500 ease-out ${
                          on ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                        }`
                      : 'max-w-[34rem]'
                  }
                >
                  <p className="text-head leading-none font-medium text-[#ff4a1f] tabular-nums">
                    {c.year}
                  </p>
                  <h3 className="text-lead mt-4 leading-[1.25] font-medium">{c.title}</h3>
                  <p className="text-small mt-1 text-[#a3a5aa]">{c.org}</p>
                  <p className="mt-4 max-w-[46ch] leading-[1.55] text-[#d5d7da]">{c.text}</p>
                </li>
              )
            })}
          </ol>
        </div>

        {pinned && (
          <ul
            aria-hidden="true"
            className="text-small absolute right-4 bottom-16 hidden flex-col items-end gap-2 sm:right-6 md:bottom-20 md:flex xl:right-[max(1.5rem,calc((100%-80rem)/2))]"
          >
            {content.chapters.map((c, i) => (
              <li
                key={c.year}
                className={`tabular-nums transition-colors duration-300 ${
                  active === i + 1 ? 'text-[#eff0f1]' : 'text-[#8b8e94]'
                }`}
              >
                {c.year}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
