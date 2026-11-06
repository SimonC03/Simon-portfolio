interface Props {
  text: string
}

// Plain text label (no pill): the site has no /tags/* routes, so linking would lead to a 404.
const Tag = ({ text }: Props) => <span>{text}</span>

export default Tag
