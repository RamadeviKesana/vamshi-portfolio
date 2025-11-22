import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { Container } from '@/components/Container'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import clsx from 'clsx'

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all bg-white/60 dark:bg-gray-900/40 backdrop-blur">
      {children}
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience - {siteMetadata.author}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>

      <Container className="mt-24">
        {/* HEADER */}
        <div className="mb-16 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-white">
            Professional Experience & Education
          </h1>
          <p className="mx-auto max-w-2xl text-primaryText-600 dark:text-primaryText-400">
            My background includes structural design, residential construction, site coordination, 
            and project planning using tools like AutoCAD, Revit, STAAD Pro, and MS Project.
          </p>
        </div>

        {/* WORK EXPERIENCE SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <HiBriefcase className="text-3xl text-blue-600" />
            <h2 className="text-2xl font-bold text-primaryText-800 dark:text-white">
              Work Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EXPERIENCE CARD 1 */}
            <Card>
              <h3 className="text-lg font-semibold text-primaryText-800 dark:text-white">
                Associate Site Engineer (Public Projects)
              </h3>
              <p className="text-sm text-primaryText-500 dark:text-primaryText-400 mt-1">
                Aditya Construction Company Pvt Ltd • Mar 2021 – Mar 2023
              </p>

              <ul className="mt-4 space-y-2 text-primaryText-600 dark:text-primaryText-400">
                <li>• Coordinated 10+ subcontractors to ensure quality & workflow efficiency.</li>
                <li>• Resolved onsite conflicts and maintained schedule within budget.</li>
                <li>• Supervised daily workforce allocation & delivery of materials.</li>
                <li>• Facilitated safety meetings, planning sessions & documentation.</li>
                <li>• Reviewed materials, verified approvals & reduced project delays.</li>
                <li>• Contributed to senior management reporting.</li>
              </ul>
            </Card>

            {/* EXPERIENCE CARD 2 */}
            <Card>
              <h3 className="text-lg font-semibold text-primaryText-800 dark:text-white">
                Junior Site Engineer (Residential Projects)
              </h3>
              <p className="text-sm text-primaryText-500 dark:text-primaryText-400 mt-1">
                Aditya Construction Company Pvt Ltd • May 2019 – Mar 2021
              </p>

              <ul className="mt-4 space-y-2 text-primaryText-600 dark:text-primaryText-400">
                <li>• Supervised foundation, block work & finishing stages.</li>
                <li>• Ensured quality of concrete, reinforcement & shuttering.</li>
                <li>• Reviewed drawings, BOQs & coordinated with procurement teams.</li>
                <li>• Prepared DPR (Daily Progress Reports) & billing measurements.</li>
                <li>• Ensured compliance with quality & safety standards.</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <HiAcademicCap className="text-3xl text-purple-600" />
            <h2 className="text-2xl font-bold text-primaryText-800 dark:text-white">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteMetadata.experience.education.map((edu, index) => (
              <Card key={index}>
                <p className="text-sm text-primaryText-500 dark:text-primaryText-400">
                  {edu.startDate} — {edu.endDate}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-primaryText-800 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="font-medium text-primaryText-700 dark:text-primaryText-300">
                  {edu.schoolName}
                </p>
                <p className="mt-3 text-primaryText-600 dark:text-primaryText-400">
                  {edu.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
