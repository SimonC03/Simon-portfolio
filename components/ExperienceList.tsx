'use client'

import { useState } from 'react'
import { Experience, SKILLS } from '@/data/cvData' // Importera SKILLS
import Modal from './Modal'
import AchievementsWidget from './achievements'
import AttachmentSection from './AttachmentSection'
import ReferencesSection from './ReferencesSection'
import HardSkillRating from './HardSkillRating' // Importera komponenten

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
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
            className="group focus:ring-primary-500 relative flex cursor-pointer flex-col gap-1 rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800/40"
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
              Klicka för att se detaljer & statistik &rarr;
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.company}>
        {selected && (
          <div className="flex h-full flex-col">
            {/* HEADER */}
            <div className="mb-6 border-b border-gray-100 pb-6 dark:border-gray-800">
              <h2 className="text-3xl leading-tight font-extrabold text-gray-900 dark:text-gray-100">
                {selected.title}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🏢</span>
                  <span className="font-medium text-gray-900 dark:text-gray-200">
                    {selected.company}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">📍</span>
                  <span>{selected.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg">🗓</span>
                  <span>{selected.range}</span>
                </div>
              </div>
            </div>

            {/* TAB MENY */}
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

            {/* CONTENT */}
            <div className="min-h-[300px]">
              {/* ÖVERSIKT */}
              {activeTab === 'overview' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      Om rollen
                    </h3>
                    <p className="text-gray-600 italic dark:text-gray-300">{selected.summary}</p>

                    <h4 className="mt-6 mb-3 text-sm font-bold tracking-wider text-gray-500 uppercase">
                      Ansvarsområden
                    </h4>
                    <ul className="space-y-2">
                      {selected.description.map((point, i) => (
                        <li
                          key={i}
                          className="border-primary-200 dark:border-primary-800 border-l-2 pl-2 text-gray-700 dark:text-gray-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* --- SKILLS SEKTION (Vertikal Lista) --- */}
                  {selected.relatedSkills && (
                    <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-800">
                      <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase">
                        Hard Skills & Kompetensnivå
                      </h4>

                      {/* Flex-col för en vertikal lista av rader */}
                      <div className="flex flex-col space-y-2">
                        {selected.relatedSkills.map((skillId) => {
                          const skill = SKILLS[skillId]
                          if (!skill) return null
                          return <HardSkillRating key={skillId} skill={skill} />
                        })}
                      </div>
                    </div>
                  )}
                  {/* ------------------------------------- */}
                </div>
              )}

              {/* ÖVRIGA FLIKAR (Samma som förut) */}
              {activeTab === 'achievements' && selected.achievements && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      Nyckeltal & Resultat
                    </h3>
                  </div>
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
