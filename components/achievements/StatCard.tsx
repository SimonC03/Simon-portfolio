import { Achievement } from '@/data/cvData'

export const StatCard = ({ item }: { item: Achievement }) => (
  <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
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
