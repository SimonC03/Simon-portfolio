import { Attachment } from '@/data/types' // <-- ÄNDRAD

const AttachmentSection = ({ attachments }: { attachments: Attachment[] }) => {
  if (!attachments || attachments.length === 0) return null

  return (
    <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">
      <h4 className="mb-3 text-sm font-bold tracking-wider text-gray-500 uppercase">
        Bilagor & Länkar
      </h4>
      <div className="flex flex-col gap-2">
        {attachments.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:border-primary-500 hover:bg-primary-50 dark:hover:border-primary-500 dark:hover:bg-primary-900/20 flex items-center gap-3 rounded-md border border-gray-200 bg-white p-3 transition-colors dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-lg group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-gray-800">
              {item.type === 'file' ? '📎' : '🔗'}
            </div>
            <div>
              <div className="group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium text-gray-900 dark:text-gray-100">
                {item.name}
              </div>
              <div className="text-xs text-gray-500">
                {item.type === 'file' ? 'Dokument / PDF' : 'Extern länk'}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default AttachmentSection
