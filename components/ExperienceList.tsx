'use client'

import { useState } from 'react'
import { Experience } from '@/data/types' // <-- ÄNDRAD
import { SKILLS } from '@/data/sv/resume/skills' // <-- ÄNDRAD
import Modal from './Modal'
import AchievementsWidget from './achievements'
import AttachmentSection from './AttachmentSection'
import ReferencesSection from './ReferencesSection'
import HardSkillRating from './HardSkillRating'
import Link from 'next/link'

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
  // ... (Resten av koden är densamma)
  const [selected, setSelected] = useState<Experience | null>(null)
  const [activeTab, setActiveTab] = useState<string>('overview')

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
      <div className="space-y-4">
        {experiences.map((d) => (
          <div
            key={d.id}
            onClick={() => openModal(d)}
            onKeyDown={(e) => handleKeyDown(e, d)}
            role="button"
            tabIndex={0}
            className="group focus:ring-primary-500 relative flex cursor-pointer flex-col gap-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800/40"
          >
            <div className="flex flex-col justify-between sm:flex-row sm:items-start">
              <div>
                <h3 className="group-hover:text-primary-500 text-xl font-bold text-gray-900 transition-colors dark:text-gray-100">
                  {d.title}
                </h3>
                <span className="text-md font-medium text-gray-700 dark:text-gray-300">
                  {d.company}
                </span>
              </div>
              <div className="mt-1 shrink-0 text-sm text-gray-500 sm:mt-0 sm:text-right">
                <div className="font-medium">{d.range}</div>
                <div className="text-xs text-gray-400">{d.location}</div>
              </div>
            </div>

            <p className="mt-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {d.summary}
            </p>

            <div className="text-primary-500 mt-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
              Klicka för mer detaljer &rarr;
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.company}
        maxWidth="max-w-5xl"
      >
        {selected && (
          <div className="flex h-full flex-col">
            <div className="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h2 className="text-3xl leading-tight font-extrabold text-gray-900 dark:text-gray-100">
                    {selected.title}
                  </h2>
                  <div className="text-primary-600 dark:text-primary-400 mt-2 text-lg font-medium">
                    {selected.company}
                  </div>
                </div>
                {selected.url && (
                  <Link
                    href={selected.url}
                    target="_blank"
                    className="transition-hover shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    Besök webbplats ↗
                  </Link>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 shadow-sm dark:bg-gray-800">
                  <span>📍</span> {selected.location}
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 shadow-sm dark:bg-gray-800">
                  <span>🗓</span> {selected.range}
                </div>
              </div>
            </div>

            <div className="no-scrollbar mb-6 flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
              <TabButton
                label="Översikt"
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              {selected.achievements && selected.achievements.length > 0 && (
                <TabButton
                  label="Prestationer"
                  isActive={activeTab === 'achievements'}
                  onClick={() => setActiveTab('achievements')}
                />
              )}
              {selected.references && selected.references.length > 0 && (
                <TabButton
                  label="Referenser"
                  isActive={activeTab === 'references'}
                  onClick={() => setActiveTab('references')}
                />
              )}
              {selected.attachments && selected.attachments.length > 0 && (
                <TabButton
                  label="Bilagor"
                  isActive={activeTab === 'attachments'}
                  onClick={() => setActiveTab('attachments')}
                />
              )}
            </div>

            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 grid grid-cols-1 gap-8 duration-300 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
                      Om rollen
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                      {selected.summary}
                    </p>

                    <h4 className="mb-3 text-sm font-bold tracking-wider text-gray-500 uppercase">
                      Huvudsakliga ansvarsområden
                    </h4>
                    <ul className="space-y-3">
                      {selected.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                          <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-1">
                    {selected.relatedSkills && selected.relatedSkills.length > 0 && (
                      <div className="sticky top-6 space-y-6">
                        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 dark:border-gray-800 dark:bg-gray-800/30">
                          <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                            Teknisk Kompetens
                          </h4>
                          <div className="flex flex-col space-y-4">
                            {selected.relatedSkills.map((skillId) => {
                              const skill = SKILLS[skillId]

                              // Om färdigheten finns i din SKILLS-databas, visa med rating-bar
                              if (skill) {
                                return (
                                  <div key={skillId} className="group">
                                    <HardSkillRating skill={skill} />
                                  </div>
                                )
                              }

                              // Om det är en färdighet som inte har rating (t.ex. "Leadership"),
                              // visa den som en snygg "tag" istället längst ner
                              return null
                            })}
                          </div>

                          {/* Sektion för övriga kompetenser/fokusområden som inte har rating */}
                          {selected.relatedSkills.some((id) => !SKILLS[id]) && (
                            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
                              <h5 className="mb-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                                Fokusområden
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {selected.relatedSkills.map((skillId) => {
                                  if (!SKILLS[skillId]) {
                                    return (
                                      <span
                                        key={skillId}
                                        className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 ring-inset dark:bg-gray-700/50 dark:text-gray-300 dark:ring-gray-600"
                                      >
                                        {skillId}
                                      </span>
                                    )
                                  }
                                  return null
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && selected.achievements && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <AchievementsWidget achievements={selected.achievements} />
                </div>
              )}
              {activeTab === 'references' && selected.references && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <ReferencesSection references={selected.references} />
                </div>
              )}
              {activeTab === 'attachments' && selected.attachments && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <AttachmentSection attachments={selected.attachments} />
                </div>
              )}
            </div>
          </div>
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
    onClick={onClick}
    className={`mr-6 border-b-2 pb-3 text-sm font-medium whitespace-nowrap transition-all ${
      isActive
        ? 'border-primary-500 text-primary-600 dark:text-primary-400'
        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
    }`}
  >
    {label}
  </button>
)
