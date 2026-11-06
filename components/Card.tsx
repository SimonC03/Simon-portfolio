import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  // Lead tile: image and text side by side across the whole grid row (md and up).
  wide?: boolean
}

// Project tile: image on bg-surface, title and one muted line under it. Without imgSrc it is a plain text entry.
const Card = ({ title, description, imgSrc, href, wide }: CardProps) => {
  const className = `group ${wide ? 'grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end md:gap-8' : 'block'}`
  const body = (
    <>
      {imgSrc && (
        <div
          className={`bg-surface relative overflow-hidden ${wide ? 'aspect-square md:col-span-6' : 'aspect-[16/10]'}`}
        >
          {/* object-left: most images are site screenshots whose content starts at the left edge */}
          <Image
            src={imgSrc}
            alt=""
            fill
            sizes={wide ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 45vw, 100vw'}
            className="object-cover object-left transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className={wide ? 'md:col-span-5 md:col-start-8' : imgSrc ? 'mt-6' : undefined}>
        <h2
          className={`text-lead leading-[1.25] font-medium transition-colors ${href ? 'group-hover:text-accent-text' : ''}`}
        >
          {title}
        </h2>
        <p className="text-muted mt-3 max-w-[60ch]">{description}</p>
      </div>
    </>
  )

  return href ? (
    <Link href={href} className={className}>
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  )
}

export default Card
