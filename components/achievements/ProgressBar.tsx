import { Achievement } from '@/data/types'

export const ProgressBar = ({ item }: { item: Achievement }) => {
  const current = item.current || 0
  const target = item.target || 100
  const percentage = Math.min(100, Math.round((current / target) * 100))

  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
      <div className="mb-2 flex items-end justify-between">
        <span className="text-sm font-bold text-gray-700 uppercase dark:text-gray-200">
          {item.label}
        </span>
        <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
          {item.value}
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
        <div
          className="bg-primary-500 h-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {item.subtext && (
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">{item.subtext}</div>
      )}
    </div>
  )
}
