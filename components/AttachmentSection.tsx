import { Attachment } from '@/data/types'

const AttachmentSection = ({ attachments }: { attachments: Attachment[] }) => {
  if (!attachments || attachments.length === 0) return null

  return (
    <div>
      <h4 className="text-small text-muted mb-4 font-medium">Bilagor & Länkar</h4>
      <ul className="space-y-5">
        {attachments.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-accent-text font-medium underline decoration-1 underline-offset-4 transition-colors"
            >
              {item.name} <span aria-hidden="true">↗</span>
            </a>
            <p className="text-small text-muted mt-1">
              {item.type === 'file' ? 'Dokument / PDF' : 'Extern länk'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AttachmentSection
