import { Skill } from '@/data/types' // <-- ÄNDRAD

interface Props {
  skill: Skill
}

export default function HardSkillRating({ skill }: Props) {
  // Standardvärde 3 om inget anges, max 5
  const level = skill.proficiency || 3
  const maxLevel = 5

  return (
    <div className="flex items-center justify-between rounded-md border border-gray-100 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800/50">
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>

      {/* Plupparna */}
      <div className="flex gap-1.5">
        {[...Array(maxLevel)].map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full border ${
              index < level
                ? 'border-blue-500 bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.4)]' // Ifylld
                : 'border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-700' // Tom
            }`}
          />
        ))}
      </div>
    </div>
  )
}
