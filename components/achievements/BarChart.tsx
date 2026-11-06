import { useLocale } from 'next-intl'
import { Achievement } from '@/data/types'

export const BarChart = ({ item }: { item: Achievement }) => {
  const locale = useLocale()
  if (!item.data) return null
  const maxVal = Math.max(...item.data.map((d) => d.value))
  const last = item.data.length - 1

  return (
    <div className={item.data.length > 4 ? 'sm:col-span-2' : undefined}>
      <p className="text-small text-muted">{item.label}</p>
      <p className="text-head mt-2 leading-[1.05] font-medium tracking-[-0.03em] tabular-nums">
        {item.value}
      </p>
      {item.subtext && <p className="text-small text-muted mt-4 max-w-[40ch]">{item.subtext}</p>}

      <ul className="mt-6 space-y-3">
        {item.data.map((bar, idx) => (
          <li key={idx}>
            <div className="text-small flex justify-between gap-4">
              <span className="text-muted">{bar.label}</span>
              <span className="tabular-nums">{bar.value.toLocaleString(locale)}</span>
            </div>
            <div className="bg-bg mt-1.5 h-1.5" aria-hidden="true">
              <div
                className={`h-full ${idx === last ? 'bg-accent' : 'bg-muted'}`}
                style={{ width: `${maxVal > 0 ? (bar.value / maxVal) * 100 : 0}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
