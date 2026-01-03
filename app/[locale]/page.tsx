import Main from './Main'

export default async function Page({ params }: { params: { locale: string } }) {
  return <Main locale={params.locale} />
}
