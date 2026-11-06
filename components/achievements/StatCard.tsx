import { Achievement } from '@/data/types'

export const StatCard = ({ item }: { item: Achievement }) => (
  <div>
    <p className="text-small text-muted">{item.label}</p>
    <p className="text-head mt-2 leading-[1.05] font-medium tracking-[-0.03em] tabular-nums">
      {item.value}
    </p>
    {item.subtext && <p className="text-small text-muted mt-4 max-w-[40ch]">{item.subtext}</p>}
  </div>
)
