'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Fades in each direct child of a `.reveal` element as it scrolls into view; children that
// arrive together are staggered. Content stays visible without JavaScript: the hiding styles
// only apply once `js-reveal` is set on <html>.
export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal > :not(.reveal):not(.is-in)')
    )
    // Promote to a compositor layer a little before the entrance, so the transition's first
    // frame is not spent rasterising; the hint is dropped again once the element has settled.
    const warm = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          ;(e.target as HTMLElement).style.willChange = 'transform, opacity'
          warm.unobserve(e.target)
        }),
      { rootMargin: '50% 0px' }
    )
    const io = new IntersectionObserver(
      (entries) => {
        let i = 0
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          el.style.transitionDelay = `${Math.min(i++, 5) * 70}ms`
          el.addEventListener('transitionend', () => (el.style.willChange = ''), { once: true })
          el.classList.add('is-in')
          io.unobserve(el)
          warm.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    )
    // Items already on screen are marked first, so nothing flickers when hiding starts.
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in')
      else {
        warm.observe(el)
        io.observe(el)
      }
    })
    document.documentElement.classList.add('js-reveal')
    return () => {
      io.disconnect()
      warm.disconnect()
    }
  }, [pathname])

  return null
}
