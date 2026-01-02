import { Achievement } from '@/data/types'

export const DonutChart = ({ item }: { item: Achievement }) => {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const percentage = item.current || 0
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-row items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
      <div className="relative h-20 w-20 shrink-0">
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-100 dark:text-gray-700"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-primary-500 transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900 dark:text-gray-100">
          {item.value}
        </div>
      </div>
      <div>
        <div className="text-sm font-bold text-gray-700 uppercase dark:text-gray-200">
          {item.label}
        </div>
        {item.subtext && (
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.subtext}</div>
        )}
      </div>
    </div>
  )
}
