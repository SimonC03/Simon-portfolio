import { Achievement } from '@/data/types'

export const DonutChart = ({ item }: { item: Achievement }) => {
  const radius = 32
  const circumference = 2 * Math.PI * radius
  const percentage = item.current || 0
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex items-center gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/40">
      <div className="relative h-24 w-24 shrink-0">
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            strokeWidth="6"
            fill="transparent"
            className="text-gray-100 dark:text-gray-700"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-primary-500 transition-all duration-1000 ease-in-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl leading-none font-black text-gray-900 dark:text-white">
            {item.value}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-black tracking-tight text-gray-700 uppercase dark:text-gray-200">
          {item.label}
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
          {item.subtext}
        </p>
      </div>
    </div>
  )
}
