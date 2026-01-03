import { Achievement } from '@/data/types'

export const BarChart = ({ item }: { item: Achievement }) => {
  if (!item.data) return null
  const maxVal = Math.max(...item.data.map((d) => d.value))

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md sm:col-span-2 dark:border-gray-700/50 dark:bg-gray-800/40">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <span className="text-primary-600 dark:text-primary-400 text-[11px] font-black tracking-widest uppercase">
            Performance Metric
          </span>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.label}</h3>
          {item.subtext && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtext}</p>
          )}
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-gray-900 tabular-nums dark:text-white">
            {item.value}
          </span>
        </div>
      </div>

      <div className="flex h-36 items-end gap-3">
        {item.data.map((bar, idx) => {
          const heightPct = (bar.value / maxVal) * 100
          return (
            <div
              key={idx}
              className="group/bar relative flex h-full flex-1 flex-col items-center justify-end"
            >
              <div
                className="from-primary-600 to-primary-400 dark:from-primary-700 dark:to-primary-500 relative w-full rounded-t-lg bg-gradient-to-t transition-all duration-700 ease-out group-hover/bar:brightness-110"
                style={{ height: `${heightPct}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-90 opacity-0 transition-all group-hover/bar:scale-100 group-hover/bar:opacity-100">
                  <span className="rounded-lg bg-gray-900 px-2.5 py-1 text-xs font-bold text-white shadow-xl dark:bg-white dark:text-gray-900">
                    {bar.value}
                  </span>
                </div>
              </div>
              <span className="mt-3 text-[10px] font-bold tracking-tighter text-gray-400 uppercase dark:text-gray-500">
                {bar.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
