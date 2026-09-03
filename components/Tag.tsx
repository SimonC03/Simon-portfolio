interface Props {
  text: string
}

// Rendered as a plain label: the site has no /tags/* routes, so linking would lead to a 404.
const Tag = ({ text }: Props) => {
  return (
    <span className="text-primary-500 dark:text-primary-400 mr-3 text-sm font-medium uppercase">
      {text.split(' ').join('-')}
    </span>
  )
}

export default Tag
