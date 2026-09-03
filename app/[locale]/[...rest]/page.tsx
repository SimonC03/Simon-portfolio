import { notFound } from 'next/navigation'

// Catch-all for unknown paths under a locale, so the localized not-found page renders
// inside the normal layout instead of Next's default 404 page.
export default function CatchAllPage() {
  notFound()
}
