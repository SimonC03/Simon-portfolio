'use client'

import { useState, KeyboardEvent } from 'react'
import { Education } from '@/data/types'
import Modal from './Modal'
import AttachmentSection from './AttachmentSection'
import HardSkillRating from './HardSkillRating'

// Importera båda språkens bibliotek
import { SKILLS as SKILLS_SV } from '@/data/sv/resume/skills'
import { SKILLS as SKILLS_EN } from '@/data/en/resume/skills'

export default function EducationList({
  education,
  locale = 'sv',
}: {
  education: Education[]
  locale?: string
}) {
  const [selected, setSelected] = useState<Education | null>(null)
  const [activeTab, setActiveTab] = useState<string>('overview')

  // Översättningar
  const t = {
    sv: {
      viewMore: 'Visa mer',
      tabs: {
        overview: 'Översikt',
        courses: 'Kurser',
        attachments: 'Bilagor',
      },
      headers: {
        summary: 'Sammanfattning',
        highlights: 'Höjdpunkter',
        skills: 'Kompetenser',
      },
      table: {
        course: 'Kurs',
        credits: 'Omfattning',
        grade: 'Betyg',
      },
    },
    en: {
      viewMore: 'View more',
      tabs: {
        overview: 'Overview',
        courses: 'Courses',
        attachments: 'Attachments',
      },
      headers: {
        summary: 'Summary',
        highlights: 'Highlights',
        skills: 'Competencies',
      },
      table: {
        course: 'Course',
        credits: 'Credits',
        grade: 'Grade',
      },
    },
  }[locale === 'en' ? 'en' : 'sv']

  const CURRENT_SKILLS = locale === 'en' ? SKILLS_EN : SKILLS_SV

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

  const hasGrades = !!selected?.courses?.some((c) => c.grade)

  return (
    <>
      <ul className="reveal space-y-12 md:space-y-14">
        {education.map((edu) => (
          <li key={edu.school + edu.year}>
            <div
              className="group grid cursor-pointer grid-cols-1 gap-x-8 md:grid-cols-12"
              onClick={() => openModal(edu)}
              onKeyDown={(e) => handleKeyDown(e, edu)}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
            >
              <p className="text-small text-muted mb-2 tabular-nums md:col-span-3 md:mb-0 md:pt-1.5">
                {edu.year}
              </p>
              <div className="md:col-span-7">
                <h3 className="text-lead group-hover:text-accent-text leading-[1.25] font-medium transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-small text-muted mt-1">
                  {edu.school} · {edu.location}
                </p>
                <p className="text-muted mt-3 line-clamp-2 max-w-[60ch]">{edu.summary}</p>
              </div>
              <span className="text-small text-accent-text mt-3 font-medium md:col-span-2 md:mt-0 md:pt-1.5 md:text-right">
                {t.viewMore} →
              </span>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.school}
        maxWidth="max-w-4xl"
      >
        {selected && (
          <div className="flex h-full flex-col">
            <div className="mb-10">
              <h2 className="text-head leading-[1.05] font-medium tracking-[-0.03em]">
                {selected.degree}
              </h2>
              <p className="text-small text-muted mt-4">
                {selected.location} · {selected.year}
              </p>
            </div>

            <div className="no-scrollbar mb-10 flex gap-8 overflow-x-auto">
              <TabButton
                label={t.tabs.overview}
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              {selected.courses && selected.courses.length > 0 && (
                <TabButton
                  label={`${t.tabs.courses} (${selected.courses.length})`}
                  isActive={activeTab === 'courses'}
                  onClick={() => setActiveTab('courses')}
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

            <div className="min-h-[300px]">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
                  <div className="space-y-10 md:col-span-2">
                    <div>
                      <h3 className="text-small text-muted mb-3 font-medium">
                        {t.headers.summary}
                      </h3>
                      <p className="max-w-[60ch] leading-[1.6]">{selected.summary}</p>
                    </div>
                    {selected.details && (
                      <div>
                        <h3 className="text-small text-muted mb-4 font-medium">
                          {t.headers.highlights}
                        </h3>
                        <ul className="max-w-[60ch] space-y-3">
                          {selected.details.map((detail, i) => (
                            <li key={i} className="flex gap-4 leading-[1.6]">
                              <span
                                aria-hidden="true"
                                className="bg-accent mt-[0.7em] h-1.5 w-1.5 shrink-0"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {selected.relatedSkills && (
                    <div>
                      <h3 className="text-small text-muted mb-4 font-medium">{t.headers.skills}</h3>
                      <div className="flex flex-col gap-y-3">
                        {selected.relatedSkills.map((skillId) => {
                          const skill = CURRENT_SKILLS.find(
                            (s) => s.id === skillId || s.name === skillId
                          )
                          if (!skill) {
                            return <p key={skillId}>{skillId}</p>
                          }
                          return <HardSkillRating key={skillId} skill={skill} />
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'courses' && selected.courses && (
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-small text-muted">
                      <th scope="col" className="px-3 pb-3 font-medium md:px-4">
                        {t.table.course}
                      </th>
                      <th scope="col" className="px-3 pb-3 text-right font-medium md:px-4">
                        {t.table.credits}
                      </th>
                      {hasGrades && (
                        <th scope="col" className="px-3 pb-3 text-right font-medium md:px-4">
                          {t.table.grade}
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="tabular-nums">
                    {selected.courses.map((course, idx) => (
                      <tr key={idx} className="odd:bg-surface">
                        <td className="px-3 py-3 md:px-4">
                          {course.name}
                          {course.code && (
                            <span className="text-small text-muted block">{course.code}</span>
                          )}
                        </td>
                        <td className="text-muted px-3 py-3 text-right whitespace-nowrap md:px-4">
                          {course.credits}
                        </td>
                        {hasGrades && (
                          <td className="px-3 py-3 text-right font-medium whitespace-nowrap md:px-4">
                            {course.grade || <span className="text-muted">–</span>}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'attachments' && selected.attachments && (
                <AttachmentSection attachments={selected.attachments} />
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
