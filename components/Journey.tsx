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

const RUN_PER_STEP = 90 // svh of scrolling per chapter

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
  const [active, setActive] = useState(0) // 0 = intro, k = chapter k
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
    let scene: { dispose: () => void } | null = null
    let disposed = false

    // 0 at the top of the section, states - 1 when the sticky stage is about to release
    const progress = () => {
      const r = el.getBoundingClientRect()
      const run = Math.max(1, r.height - window.innerHeight)
      return Math.max(0, Math.min(1, -r.top / run)) * (states - 1)
    }

    // Warm the three.js chunk while the page is idle, then build the scene as the section nears.
    const load = () => import('./journeyScene')
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 400))
    idle(() => void load().catch(() => {}))
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || scene) return
        io.disconnect()
        try {
          const { createJourneyScene } = await load()
          if (disposed || !stage.current) return
          const shapes = ['cloud', ...content.chapters.map((c) => c.shape)] as Shape[]
          scene = createJourneyScene(stage.current, shapes, {
            small: window.innerWidth < 768,
            getTarget: progress,
            onStep: setActive,
          })
        } catch {
          if (!disposed) setPinned(false) // no three.js: show the plain list
        }
      },
      { rootMargin: '1200px 0px' }
    )
    io.observe(el)

    return () => {
      disposed = true
      io.disconnect()
      scene?.dispose()
    }
  }, [pinned, content, states])

  return (
    <section
      ref={section}
      aria-labelledby="journey-title"
      className="relative mt-32 bg-[#111214] text-[#eff0f1] md:mt-44"
      style={{
        // full-bleed without a transform, so the tall section never becomes a huge layer
        width: `calc(100vw - ${scrollbar}px)`,
        marginLeft: `calc(50% - (100vw - ${scrollbar}px) / 2)`,
        height: pinned ? `${(states - 1) * RUN_PER_STEP + 100}svh` : undefined,
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
            className={`text-lead mt-4 max-w-[34ch] text-[#a3a5aa] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.7,0,1)] ${
              pinned && active > 0 ? '-translate-y-3 opacity-0' : ''
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
              const k = i + 1
              const on = active === k
              // passed chapters leave upwards, coming ones wait below
              const hidden = active > k ? '-translate-y-6' : 'translate-y-6'
              return (
                <li
                  key={c.year + c.title}
                  aria-current={pinned && on ? 'step' : undefined}
                  className={
                    pinned
                      ? `absolute bottom-0 left-0 max-w-[34rem] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.7,0,1)] ${
                          on ? 'opacity-100' : `pointer-events-none opacity-0 ${hidden}`
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
                className={`tabular-nums transition-colors duration-500 ${
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
