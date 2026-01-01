import { Achievement } from '@/data/cvData'

export const TrendGraph = ({ item }: { item: Achievement }) => {
  if (!item.data || item.data.length < 2) return null

  // Enkel logik för att skapa SVG path från data
  const values = item.data.map((d) => d.value)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1 // Undvik division med noll

  // Normalisera punkter till 100x100 box
  const points = values
    .map((val, i) => {
      const x = (i / (values.length - 1)) * 100
      const y = 100 - ((val - min) / range) * 80 // 80% höjd för marginal
      return `${x},${y}`
    })
    .join(' ')

  const fillPath = `${points} 100,100 0,100`

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 dark:border-gray-700 dark:bg-gray-800/50">
      <div className="mb-4 flex justify-between">
        <div>
          <div className="text-sm font-bold text-gray-700 uppercase dark:text-gray-200">
            {item.label}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{item.subtext}</div>
        </div>
        <div className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
          {item.value}
        </div>
      </div>

      <div className="relative h-24 w-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stopColor="currentColor"
                stopOpacity="0.4"
                className="text-primary-500"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                stopOpacity="0"
                className="text-primary-500"
              />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <polygon points={fillPath} fill="url(#gradient)" />
          {/* Line stroke */}
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-600"
          />
        </svg>
      </div>
      {/* Labels x-axis */}
      <div className="mt-2 flex justify-between text-[10px] font-medium text-gray-400 uppercase">
        {item.data.map((d, i) => (
          <span key={i}>{d.label}</span>
        ))}
      </div>
    </div>
  )
}
