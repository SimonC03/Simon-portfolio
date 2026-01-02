'use client'

import { useState, KeyboardEvent } from 'react'
import { Education } from '@/data/types' // <-- ÄNDRAD
import { SKILLS } from '@/data/resume/skills' // <-- ÄNDRAD
import Modal from './Modal'
import AttachmentSection from './AttachmentSection'
import HardSkillRating from './HardSkillRating'

export default function EducationList({ education }: { education: Education[] }) {
  // ... (Resten av koden är densamma, behåll din logik)
  const [selected, setSelected] = useState<Education | null>(null)
  const [activeTab, setActiveTab] = useState<string>('overview')

  const openModal = (edu: Education) => {
    setSelected(edu)
    setActiveTab('overview')
  }

  const handleKeyDown = (e: KeyboardEvent, edu: Education) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openModal(edu)
    }
  }

  return (
    <>
      {/* Behåll din JSX exakt som den var */}
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="group focus:ring-primary-500 flex cursor-pointer items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800/40"
            onClick={() => openModal(edu)}
            onKeyDown={(e) => handleKeyDown(e, edu)}
            role="button"
            tabIndex={0}
          >
            <div>
              <h3 className="group-hover:text-primary-500 text-lg font-bold text-gray-900 transition-colors dark:text-gray-100">
                {edu.school}
              </h3>
              <p className="font-medium text-gray-700 dark:text-gray-300">{edu.degree}</p>
            </div>
            <div className="text-right">
              <span className="block text-sm font-medium text-gray-500">{edu.year}</span>
              <span className="text-primary-500 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                Visa mer &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.school}
        maxWidth="max-w-4xl"
      >
        {selected && (
          <div className="flex h-full flex-col">
            <div className="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                {selected.degree}
              </h2>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <span className="font-medium">{selected.school}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span>{selected.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <span>{selected.year}</span>
                </div>
              </div>
            </div>

            <div className="no-scrollbar mb-6 flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
              <TabButton
                label="Översikt"
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              {selected.courses && selected.courses.length > 0 && (
                <TabButton
                  label={`Kurser (${selected.courses.length})`}
                  isActive={activeTab === 'courses'}
                  onClick={() => setActiveTab('courses')}
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
                  <div className="space-y-6 md:col-span-2">
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                        Sammanfattning
                      </h3>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {selected.summary}
                      </p>
                    </div>
                    {selected.details && (
                      <div>
                        <h3 className="mb-3 text-sm font-bold tracking-wider text-gray-500 uppercase">
                          Höjdpunkter
                        </h3>
                        <ul className="space-y-2">
                          {selected.details.map((detail, i) => (
                            <li key={i} className="flex gap-2 text-gray-700 dark:text-gray-300">
                              <span className="text-primary-500">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    {selected.relatedSkills && (
                      <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5 dark:border-gray-800 dark:bg-gray-800/30">
                        <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-500 uppercase">
                          Färdigheter
                        </h4>
                        <div className="flex flex-col space-y-3">
                          {selected.relatedSkills.map((skillId) => {
                            const skill = SKILLS[skillId]
                            if (!skill) return null
                            return <HardSkillRating key={skillId} skill={skill} />
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'courses' && selected.courses && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            Kurs
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            Omfattning
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            Betyg
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                        {selected.courses.map((course, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900 dark:text-gray-100">
                                {course.name}
                              </div>
                              {course.code && (
                                <div className="text-xs text-gray-500">{course.code}</div>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                              {course.credits}
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap">
                              {course.grade ? (
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset dark:bg-green-900/20 dark:text-green-400 dark:ring-green-500/30">
                                  {course.grade}
                                </span>
                              ) : (
                                <span className="text-sm text-gray-400">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
