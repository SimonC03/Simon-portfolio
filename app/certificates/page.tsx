import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Certifikat & Utmärkelser' })

export default function CertificatesPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Certifikat & Utmärkelser
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold dark:border-gray-700">
            Licenser & Certifikat
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="font-semibold">Certified Board Member</span>
              <span className="text-sm text-gray-500">Styrelseakademien</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Heta Arbeten</span>
              <span className="text-sm text-gray-500">Brandskyddsföreningen</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Skyddsvaktsbevis</span>
              <span className="text-sm text-gray-500">Försvarsmakten</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold dark:border-gray-700">
            Utmärkelser & Medlemskap
          </h2>
          <ul className="space-y-4">
            <li className="block">
              <span className="block font-semibold">Nova Member</span>
              <span className="text-sm text-gray-500">Top 3% Talent (Global Network)</span>
            </li>
            <li className="block">
              <span className="block font-semibold">Chalmers Börssällskap</span>
              <span className="text-sm text-gray-500">Aktiv Medlem</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
