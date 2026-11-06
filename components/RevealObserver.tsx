'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Fades in each direct child of a `.reveal` element as it scrolls into view; children that
// arrive together are staggered. Content stays visible without JavaScript: the hiding styles
// only apply once `js-reveal` is set on <html>.
export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal > *:not(.is-in)'))
    const io = new IntersectionObserver(
      (entries) => {
        let i = 0
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          el.style.transitionDelay = `${Math.min(i++, 5) * 80}ms`
          el.classList.add('is-in')
          io.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    )
    // Items already on screen are marked first, so nothing flickers when hiding starts.
    items.forEach((el) =>
      el.getBoundingClientRect().top < window.innerHeight
        ? el.classList.add('is-in')
        : io.observe(el)
    )
    document.documentElement.classList.add('js-reveal')
    return () => io.disconnect()
  }, [pathname])

  return null
}
