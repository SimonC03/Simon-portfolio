import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Utbildning' })

export default function EducationPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Utbildning
        </h1>
      </div>

      <div className="container py-8">
        <div className="mb-10 flex flex-col md:flex-row">
          <div className="mb-2 md:mb-0 md:w-1/4">
            <span className="font-medium text-gray-500 dark:text-gray-400">2023 – 2026</span>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              BSc Mechatronics & Automation Engineering
            </h3>
            <span className="text-primary-500 mb-2 block">Chalmers University of Technology</span>
            <p className="text-gray-600 dark:text-gray-300">
              Systemteknik, robotik och AI. Har arbetat med integration av mekanik och mjukvara
              (C/C++, Python).
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-col md:flex-row">
          <div className="mb-2 md:mb-0 md:w-1/4">
            <span className="font-medium text-gray-500 dark:text-gray-400">2024 – 2027</span>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              BSc Business Administration
            </h3>
            <span className="text-primary-500 mb-2 block">
              School of Business, Economics and Law
            </span>
            <p className="text-gray-600 dark:text-gray-300">
              Ekonomistyrning, marknadsföring och strategiskt ledarskap.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
