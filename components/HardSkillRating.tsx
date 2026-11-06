import { Skill } from '@/data/types'

interface Props {
  skill: Skill
}

export default function HardSkillRating({ skill }: Props) {
  // Default 3 when unset, scale of 5
  const level = skill.proficiency || 3
  const maxLevel = 5

  return (
    <div className="flex items-center justify-between gap-4">
      <span>{skill.name}</span>
      <span role="img" aria-label={`${level}/${maxLevel}`} className="flex shrink-0 gap-1">
        {[...Array(maxLevel)].map((_, index) => (
          <span key={index} className={`h-1.5 w-3 ${index < level ? 'bg-ink' : 'bg-ink/15'}`} />
        ))}
      </span>
    </div>
  )
}
