import { Achievement } from '@/data/cvData'

export const BarChart = ({ item }: { item: Achievement }) => {
  if (!item.data) return null
  const maxVal = Math.max(...item.data.map((d) => d.value))

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 dark:border-gray-700 dark:bg-gray-800/50">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="text-sm font-bold text-gray-700 uppercase dark:text-gray-200">
            {item.label}
          </div>
          {item.subtext && (
            <div className="text-xs text-gray-500 dark:text-gray-400">{item.subtext}</div>
          )}
        </div>
        <div className="text-primary-600 dark:text-primary-400 text-xl font-bold">{item.value}</div>
      </div>

      <div className="flex h-32 items-end gap-2 sm:gap-4">
        {item.data.map((bar, idx) => {
          const heightPct = (bar.value / maxVal) * 100
          return (
            <div
              key={idx}
              className="group relative flex h-full flex-1 flex-col items-center justify-end"
            >
              {/* Tooltip */}
              <div className="absolute -top-8 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded bg-gray-900 px-2 py-1 text-xs text-white dark:bg-gray-100 dark:text-gray-900">
                  {bar.value}
                </span>
              </div>
              {/* Bar */}
              <div
                className="bg-primary-200 hover:bg-primary-500 dark:bg-primary-900/50 dark:hover:bg-primary-500 w-full rounded-t-sm transition-all duration-500"
                style={{ height: `${heightPct}%` }}
              />
              {/* Label */}
              <div className="mt-2 text-center text-[10px] font-medium text-gray-500 uppercase dark:text-gray-400">
                {bar.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
