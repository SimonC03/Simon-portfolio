'use client'

import { useState } from 'react'
import { Education } from '@/data/cvData'
import Modal from './Modal'
import AttachmentSection from './AttachmentSection'

export default function EducationList({ education }: { education: Education[] }) {
  const [selected, setSelected] = useState<Education | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent, edu: Education) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(edu)
    }
  }

  return (
    <>
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="focus:ring-primary-500 flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50 focus:ring-2 focus:outline-none dark:border-gray-700 dark:hover:bg-gray-800/50"
            onClick={() => setSelected(edu)}
            onKeyDown={(e) => handleKeyDown(e, edu)}
            role="button"
            tabIndex={0}
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{edu.school}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
            </div>
            <div className="text-right">
              <span className="block text-sm text-gray-500">{edu.year}</span>
              <span className="text-primary-500 text-xs font-medium hover:underline">Läs mer</span>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.school}>
        {selected && (
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {selected.degree}
              </h2>
              <p className="text-gray-500">
                {selected.year} | {selected.location}
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300">{selected.summary}</p>

            {selected.details && (
              <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-400">
                {selected.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}

            {selected.attachments && <AttachmentSection attachments={selected.attachments} />}

            {selected.relatedSkills && (
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                <h4 className="mb-2 text-xs font-bold text-gray-500 uppercase">
                  Relevanta kurser & verktyg
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.relatedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  )
}
