'use client'

import { useState } from 'react'
import { Experience } from '@/data/types'
import Modal from './Modal'
import AchievementsWidget from './achievements'
import AttachmentSection from './AttachmentSection'
import ReferencesSection from './ReferencesSection'
import HardSkillRating from './HardSkillRating'
import Link from './Link'

import { SKILLS as SKILLS_SV } from '@/data/sv/resume/skills'
import { SKILLS as SKILLS_EN } from '@/data/en/resume/skills'

interface ExperienceListProps {
  experiences: Experience[]
  locale?: string
}

export default function ExperienceList({ experiences, locale = 'sv' }: ExperienceListProps) {
  const [selected, setSelected] = useState<Experience | null>(null)
  const [activeTab, setActiveTab] = useState<string>('overview')

  const t = {
    sv: {
      visitWebsite: 'Besök webbplats',
      tabs: {
        overview: 'Översikt',
        achievements: 'Prestationer',
        references: 'Referenser',
        attachments: 'Bilagor',
      },
      headers: {
        about: 'Om rollen',
        responsibilities: 'Huvudsakliga ansvarsområden & resultat',
        skills: 'Kompetenser',
      },
    },
    en: {
      visitWebsite: 'Visit website',
      tabs: {
        overview: 'Overview',
        achievements: 'Achievements',
        references: 'References',
        attachments: 'Attachments',
      },
      headers: {
        about: 'About the role',
        responsibilities: 'Key Impact & Responsibilities',
        skills: 'Competencies',
      },
    },
  }[locale === 'en' ? 'en' : 'sv']

  const CURRENT_SKILLS = locale === 'en' ? SKILLS_EN : SKILLS_SV

  const openModal = (exp: Experience) => {
    setSelected(exp)
    setActiveTab('overview')
  }

  const handleKeyDown = (e: React.KeyboardEvent, exp: Experience) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openModal(exp)
    }
  }

  return (
    <>
      <ul className="reveal space-y-12 md:space-y-14">
        {experiences.map((d) => (
          <li key={d.id}>
            <div
              onClick={() => openModal(d)}
              onKeyDown={(e) => handleKeyDown(e, d)}
              role="button"
              tabIndex={0}
              className="group grid cursor-pointer grid-cols-1 gap-2 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="text-small text-muted tabular-nums">{d.range}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-lead group-hover:text-accent-text leading-[1.25] font-medium transition-colors">
                  {d.title}
                  <span
                    aria-hidden="true"
                    className="text-accent-text ml-2 inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </h2>
                <p className="text-small text-muted mt-1">
                  {[d.company, d.location].filter(Boolean).join(' · ')}
                </p>
                <p className="text-muted mt-3 line-clamp-2 max-w-[60ch]">{d.summary}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.company}
        maxWidth="max-w-5xl"
      >
        {selected && (
          <>
            <div className="mt-4 md:mt-6">
              <h2 className="text-head leading-[1.05] font-medium tracking-[-0.03em] break-words hyphens-auto">
                {selected.title}
              </h2>
              <p className="text-small text-muted mt-4">
                {[selected.location, selected.range].filter(Boolean).join(' · ')}
              </p>
              {selected.url && (
                <Link
                  href={selected.url}
                  className="text-small text-accent-text mt-4 inline-block font-medium underline-offset-4 hover:underline"
                >
                  {t.visitWebsite} ↗
                </Link>
              )}
            </div>

            {/* Tab row only when there is more than the overview to switch to */}
            {(!!selected.achievements?.length ||
              !!selected.references?.length ||
              !!selected.attachments?.length) && (
              <div className="no-scrollbar mt-10 flex gap-8 overflow-x-auto">
                <TabButton
                  label={t.tabs.overview}
                  isActive={activeTab === 'overview'}
                  onClick={() => setActiveTab('overview')}
                />
                {selected.achievements && selected.achievements.length > 0 && (
                  <TabButton
                    label={t.tabs.achievements}
                    isActive={activeTab === 'achievements'}
                    onClick={() => setActiveTab('achievements')}
                  />
                )}
                {selected.references && selected.references.length > 0 && (
                  <TabButton
                    label={t.tabs.references}
                    isActive={activeTab === 'references'}
                    onClick={() => setActiveTab('references')}
                  />
                )}
                {selected.attachments && selected.attachments.length > 0 && (
                  <TabButton
                    label={t.tabs.attachments}
                    isActive={activeTab === 'attachments'}
                    onClick={() => setActiveTab('attachments')}
                  />
                )}
              </div>
            )}

            <div className="mt-10 min-h-[300px]">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <h3 className="font-medium">{t.headers.about}</h3>
                    <p className="mt-3 max-w-[62ch]">{selected.summary}</p>

                    <h3 className="mt-10 font-medium">{t.headers.responsibilities}</h3>
                    <ul className="marker:text-muted mt-3 max-w-[62ch] list-disc space-y-2 pl-5">
                      {selected.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  {selected.relatedSkills && selected.relatedSkills.length > 0 && (
                    <div>
                      <h3 className="font-medium">{t.headers.skills}</h3>
                      <div className="mt-4 flex flex-col gap-3">
                        {selected.relatedSkills.map((skillId) => {
                          const skill = CURRENT_SKILLS.find(
                            (s) => s.id === skillId || s.name === skillId
                          )
                          if (!skill) return <p key={skillId}>{skillId}</p>
                          return <HardSkillRating key={skillId} skill={skill} />
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'achievements' && selected.achievements && (
                <AchievementsWidget achievements={selected.achievements} />
              )}
              {activeTab === 'references' && selected.references && (
                <ReferencesSection references={selected.references} />
              )}
              {activeTab === 'attachments' && selected.attachments && (
                <AttachmentSection attachments={selected.attachments} />
              )}
            </div>
          </>
        )}
      </Modal>
    </>
  )
}

const TabButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string
  isActive: boolean
  onClick: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={isActive}
    className={`relative pb-3 font-medium whitespace-nowrap transition-colors ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`}
  >
    {label}
    {isActive && (
      <span aria-hidden="true" className="bg-accent absolute inset-x-0 bottom-0 h-0.5" />
    )}
  </button>
)
