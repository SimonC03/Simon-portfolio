'use client'

import { useState, KeyboardEvent } from 'react' // Importera KeyboardEvent
import { Certificate } from '@/data/cvData'
import Modal from './Modal'
import AttachmentSection from './AttachmentSection'

export default function CertificateList({ certificates }: { certificates: Certificate[] }) {
  const [selected, setSelected] = useState<Certificate | null>(null)

  // Hantera Enter/Space tryck
  const handleKeyDown = (e: KeyboardEvent, cert: Certificate) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(cert)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            onClick={() => setSelected(cert)}
            onKeyDown={(e) => handleKeyDown(e, cert)} // Lägg till
            role="button" // Lägg till
            tabIndex={0} // Lägg till
            className="hover:border-primary-500 focus:ring-primary-500 cursor-pointer rounded-lg border border-gray-200 p-5 transition-all hover:shadow-md focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800/40" // La till focus-ring för tydlighet
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="bg-primary-100 dark:bg-primary-900/30 flex h-10 w-10 items-center justify-center rounded-full text-xl">
                📜
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            </div>
            <div className="mt-2 text-right text-xs text-gray-400">{cert.date}</div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title="Certifikat">
        {selected && (
          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 py-6 text-center dark:bg-gray-800/50">
              <h2 className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
                {selected.title}
              </h2>
              <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                {selected.issuer}
              </p>
              <p className="mt-1 text-sm text-gray-500">{selected.date}</p>
            </div>

            {selected.url && (
              <div className="text-center">
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 font-medium hover:underline"
                >
                  Verifiera certifikat hos utfärdaren &rarr;
                </a>
              </div>
            )}

            {selected.attachments && <AttachmentSection attachments={selected.attachments} />}
          </div>
        )}
      </Modal>
    </>
  )
}
