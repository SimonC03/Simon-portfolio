// components/AchievementsWidget.tsx
import { Achievement } from '@/data/cvData'

const AchievementsWidget = ({ achievements }: { achievements: Achievement[] }) => {
  if (!achievements || achievements.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {achievements.map((item, index) => (
        <AchievementCard key={index} item={item} />
      ))}
    </div>
  )
}

const AchievementCard = ({ item }: { item: Achievement }) => {
  // Gemensam container-stil
  const cardClass =
    'flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50'

  // 1. STATISTIK (ENKEL SIFFRA)
  if (item.type === 'stat') {
    return (
      <div className={cardClass}>
        <div>
          <div className="text-primary-600 dark:text-primary-400 text-3xl font-extrabold">
            {item.value}
          </div>
          <div className="text-sm font-bold tracking-wide text-gray-700 uppercase dark:text-gray-200">
            {item.label}
          </div>
        </div>
        {item.subtext && (
          <div className="mt-2 border-t border-gray-100 pt-2 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
            {item.subtext}
          </div>
        )}
      </div>
    )
  }

  // 2. PROGRESS BAR (MÅLUPPFYLLELSE)
  if (item.type === 'progress' && item.current !== undefined && item.target !== undefined) {
    const percentage = Math.min(100, Math.round((item.current / item.target) * 100))
    return (
      <div className={cardClass}>
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
            className="bg-primary-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {item.subtext && (
          <div className="mt-3 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{item.subtext}</span>
          </div>
        )}
      </div>
    )
  }

  // 3. DONUT CHART (CIRKELDIAGRAM)
  if (item.type === 'donut' && item.current !== undefined) {
    const radius = 30
    const circumference = 2 * Math.PI * radius
    const percentage = item.current
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className={`${cardClass} flex-row items-center gap-4`}>
        <div className="relative h-20 w-20 shrink-0">
          <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 80 80">
            {/* Bakgrundscirkel */}
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-100 dark:text-gray-700"
            />
            {/* Fyllnadscirkel */}
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

  // 4. BAR CHART (STAPELDIAGRAM)
  if (item.type === 'chart' && item.data) {
    const maxVal = Math.max(...item.data.map((d) => d.value))
    return (
      <div className={`${cardClass} sm:col-span-2`}>
        {' '}
        {/* Tar upp 2 kolumner */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <div className="text-sm font-bold text-gray-700 uppercase dark:text-gray-200">
              {item.label}
            </div>
            {item.subtext && (
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.subtext}</div>
            )}
          </div>
          <div className="text-primary-600 dark:text-primary-400 text-xl font-bold">
            {item.value}
          </div>
        </div>
        <div className="flex h-32 items-end gap-2 sm:gap-4">
          {item.data.map((bar, idx) => {
            const heightPct = (bar.value / maxVal) * 100
            return (
              <div
                key={idx}
                className="group relative flex h-full flex-1 flex-col items-center justify-end"
              >
                {/* Tooltip för värde */}
                <div className="absolute -top-6 text-xs font-bold text-gray-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-300">
                  {bar.value}
                </div>
                {/* Stapel */}
                <div
                  className="bg-primary-200 dark:bg-primary-900/50 hover:bg-primary-500 dark:hover:bg-primary-500 w-full rounded-t-md transition-colors"
                  style={{ height: `${heightPct}%` }}
                />
                {/* Label under */}
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

  return null
}

export default AchievementsWidget
