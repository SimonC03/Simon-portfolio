import { Achievement } from '@/data/cvData'
import { StatCard } from './StatCard'
import { ProgressBar } from './ProgressBar'
import { DonutChart } from './DonutChart'
import { BarChart } from './BarChart'
import { TrendGraph } from './TrendGraph'

const AchievementsWidget = ({ achievements }: { achievements: Achievement[] }) => {
  if (!achievements || achievements.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {achievements.map((item, index) => {
        switch (item.type) {
          case 'stat':
            return <StatCard key={index} item={item} />
          case 'progress':
            return <ProgressBar key={index} item={item} />
          case 'donut':
            return <DonutChart key={index} item={item} />
          case 'bar':
            return <BarChart key={index} item={item} />
          case 'graph':
            return <TrendGraph key={index} item={item} />
          default:
            return <StatCard key={index} item={item} />
        }
      })}
    </div>
  )
}

export default AchievementsWidget
