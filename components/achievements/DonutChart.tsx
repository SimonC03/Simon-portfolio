import { Achievement } from '@/data/types'

export const DonutChart = ({ item }: { item: Achievement }) => {
  const radius = 32
  const circumference = 2 * Math.PI * radius
  const percentage = item.current || 0
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-small text-muted">{item.label}</p>
        <p className="text-head mt-2 leading-[1.05] font-medium tracking-[-0.03em] tabular-nums">
          {item.value}
        </p>
        {item.subtext && <p className="text-small text-muted mt-4 max-w-[40ch]">{item.subtext}</p>}
      </div>
      <svg className="h-16 w-16 shrink-0 -rotate-90" viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r={radius} strokeWidth="8" fill="none" stroke="var(--bg)" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          strokeWidth="8"
          fill="none"
          stroke="var(--accent)"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  )
}
