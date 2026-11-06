import { Achievement } from '@/data/types'

export const ProgressBar = ({ item }: { item: Achievement }) => {
  const current = item.current || 0
  const target = item.target || 100
  const percentage = Math.min(100, Math.round((current / target) * 100))

  return (
    <div>
      <p className="text-small text-muted">{item.label}</p>
      <p className="text-head mt-2 leading-[1.05] font-medium tracking-[-0.03em] tabular-nums">
        {item.value}
      </p>
      <div className="bg-bg mt-5 h-1.5" aria-hidden="true">
        <div className="bg-accent h-full" style={{ width: `${percentage}%` }} />
      </div>
      {item.subtext && <p className="text-small text-muted mt-4 max-w-[40ch]">{item.subtext}</p>}
    </div>
  )
}
