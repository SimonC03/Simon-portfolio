import { Achievement } from '@/data/types'

export const TrendGraph = ({ item }: { item: Achievement }) => {
  if (!item.data || item.data.length < 2) return null

  // Build an SVG polyline from the data
  const values = item.data.map((d) => d.value)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1 // avoid division by zero

  // Normalise points to a 100x100 box, 80% height for margin
  const points = values
    .map((val, i) => {
      const x = (i / (values.length - 1)) * 100
      const y = 100 - ((val - min) / range) * 80
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="sm:col-span-2">
      <p className="text-small text-muted">{item.label}</p>
      <p className="text-head mt-2 leading-[1.05] font-medium tracking-[-0.03em] tabular-nums">
        {item.value}
      </p>
      {item.subtext && <p className="text-small text-muted mt-4 max-w-[40ch]">{item.subtext}</p>}

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="mt-8 h-24 w-full"
        aria-hidden="true"
      >
        <polyline
          points={points}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="text-small text-muted mt-3 flex justify-between">
        {item.data.map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  )
}
