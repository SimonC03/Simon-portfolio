/* eslint-disable jsx-a11y/anchor-has-content */
import { AnchorHTMLAttributes, ComponentProps } from 'react'
import { Link } from '../app/navigation' // Använder @-alias för att vara säker på sökvägen

// Vi skapar en typ som kombinerar Props från Link och vanliga HTML-länkar
type Props = ComponentProps<typeof Link> & AnchorHTMLAttributes<HTMLAnchorElement>

const CustomLink = ({ href, ...rest }: Props) => {
  // Konvertera till sträng för att kunna göra startsWith-kontrollen säkert
  const hrefStr = href ? href.toString() : ''

  const isInternalLink = href && hrefStr.startsWith('/')
  const isAnchorLink = href && hrefStr.startsWith('#')

  if (isInternalLink) {
    return <Link className="break-words" href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a className="break-words" href={hrefStr} {...rest} />
  }

  return (
    <a className="break-words" target="_blank" rel="noopener noreferrer" href={hrefStr} {...rest} />
  )
}

export default CustomLink
