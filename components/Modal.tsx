'use client'

import { useEffect, useId, useRef } from 'react'
import { useLocale } from 'next-intl'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  maxWidth?: string // Tailwind max-w-* class for the panel
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = 'max-w-2xl',
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const closeLabel = useLocale() === 'en' ? 'Close' : 'Stäng'

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEsc)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  // Move focus into the dialog on open and back to the opener on close.
  // Separate effect: callers pass a new onClose every render, which must not refire this.
  useEffect(() => {
    if (!isOpen) return
    const opener = document.activeElement as HTMLElement | null
    panelRef.current?.focus()
    return () => opener?.focus()
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0c0d]/70 p-4">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        className={`bg-bg relative max-h-[90svh] w-full ${maxWidth} overflow-y-auto outline-none`}
      >
        <div className="bg-bg sticky top-0 z-10 flex items-center justify-between gap-6 px-6 pt-5 pb-4 md:px-10 md:pt-7">
          <p id={titleId} className="font-medium">
            {title}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="text-muted hover:text-ink -mr-2 flex h-10 w-10 shrink-0 items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-10 md:px-10 md:pb-14">{children}</div>
      </div>
    </div>
  )
}
