// src/pages/projects.jsx
import { Fragment, useMemo, useState } from 'react'
import Head from 'next/head'
import { Dialog, Transition } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Card } from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

// Icons for the different kinds of projects
import { GiMountainRoad, GiConcreteBag } from 'react-icons/gi'
import { TbBuildingSkyscraper, TbMicroscope } from 'react-icons/tb'
import { MdOutlineArchitecture } from 'react-icons/md'
import { HiOutlineClipboardList } from 'react-icons/hi'

/**
 * Small helper to attach category, icon and tools
 * to each project without touching projectsData.js
 */
function decorateProject(project) {
  const title = project.title?.toLowerCase() || ''

  // Defaults
  let category = 'Other'
  let Icon = HiOutlineClipboardList
  let tools = ['AutoCAD', 'Revit', 'MS Project']

  if (title.includes('geotechnical')) {
    category = 'Geotechnical'
    Icon = GiMountainRoad
    tools = ['GeoStudio', 'Plaxis', 'STAAD Pro']
  } else if (title.includes('bim')) {
    category = 'BIM / Structural'
    Icon = MdOutlineArchitecture
    tools = ['Revit', 'Navisworks', 'AutoCAD']
  } else if (title.includes('recplex') || title.includes('expansion')) {
    category = 'Structural / Campus'
    Icon = TbBuildingSkyscraper
    tools = ['Revit', 'AutoCAD', 'MS Project']
  } else if (title.includes('research')) {
    category = 'Research'
    Icon = TbMicroscope
    tools = ['Lab Testing', 'SPSS / Excel', 'Concrete Mix Design']
  } else if (title.includes('concrete') || title.includes('mix')) {
    category = 'Materials / Concrete'
    Icon = GiConcreteBag
    tools = ['Concrete Mix Design', 'Slump Test', 'Compressive Strength Tests']
  }

  return { ...project, category, Icon, tools }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  // Add category + icon + tools info to each project
  const enhancedProjects = useMemo(
    () => projectsData.map((p) => decorateProject(p)),
    []
  )

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(enhancedProjects.map((p) => p.category)))],
    [enhancedProjects]
  )

  const visibleProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? enhancedProjects
        : enhancedProjects.filter((p) => p.category === activeCategory),
    [activeCategory, enhancedProjects]
  )

  return (
    <>
      <Head>
        <title>Projects - {siteMetadata.author}</title>
        <meta
          name="description"
          content="Civil engineering projects across geotechnical analysis, BIM modeling, structural design, materials, and construction management."
        />
      </Head>

      <SimpleLayout
        title="Civil Engineering Projects"
        intro="A collection of engineering, research, and construction projects I have worked on across geotechnical analysis, BIM modeling, material testing, and construction management."
      >
        {/* CATEGORY FILTER TABS (OPTION C) */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? 'bg-accent-600 text-white shadow-lg shadow-accent-500/40'
                    : 'bg-white/80 text-primaryText-700 ring-1 ring-primaryText-200 hover:bg-accent-50 dark:bg-primaryText-900/80 dark:text-primaryText-100 dark:ring-primaryText-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS WITH ICONS (OPTION A) */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <li key={project.title}>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="block text-left"
              >
                <Card className="h-full cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/10">
                  {/* Icon + category */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-50 text-accent-600 shadow-sm dark:bg-accent-500/10 dark:text-accent-300">
                      <project.Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
                      {project.category}
                    </p>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {project.title}
                  </h2>

                  {/* Short description */}
                  <Card.Description className="mt-2 text-sm">
                    {project.description}
                  </Card.Description>

                  {/* Tools line */}
                  {project.tools?.length > 0 && (
                    <p className="mt-4 text-xs font-medium uppercase tracking-wide text-primaryText-400 dark:text-primaryText-500">
                      Tools:&nbsp;
                      <span className="normal-case">
                        {project.tools.join(' · ')}
                      </span>
                    </p>
                  )}

                  {/* Read more CTA (opens modal) */}
                  <p className="mt-4 text-sm font-semibold text-accent-600 underline underline-offset-4">
                    View project details
                  </p>
                </Card>
              </button>
            </li>
          ))}
        </ul>

        {/* MODAL / POPUP FOR PROJECT DETAILS (OPTION D) */}
        <Transition.Root show={!!selectedProject} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
            </Transition.Child>

            {/* Modal panel */}
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-200"
                  enterFrom="opacity-0 translate-y-4 scale-95"
                  enterTo="opacity-100 translate-y-0 scale-100"
                  leave="ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0 scale-100"
                  leaveTo="opacity-0 translate-y-4 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-2xl ring-1 ring-primaryText-100 dark:bg-primaryText-900 dark:ring-primaryText-700">
                    {selectedProject && (
                      <>
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
                              {selectedProject.category}
                            </p>
                            <Dialog.Title className="mt-2 text-xl font-bold text-primaryText-900 dark:text-primaryText-50">
                              {selectedProject.title}
                            </Dialog.Title>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            className="rounded-full px-2 py-1 text-sm font-semibold text-primaryText-400 hover:bg-primaryText-100 hover:text-primaryText-700 dark:hover:bg-primaryText-800"
                          >
                            ✕
                          </button>
                        </div>

                        <div className="space-y-3 text-sm leading-relaxed text-primaryText-700 dark:text-primaryText-200">
                          <p>{selectedProject.description}</p>

                          {selectedProject.longDescription && (
                            <p>{selectedProject.longDescription}</p>
                          )}

                          {selectedProject.tools?.length > 0 && (
                            <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-primaryText-400 dark:text-primaryText-500">
                              Tools used:&nbsp;
                              <span className="normal-case font-normal">
                                {selectedProject.tools.join(', ')}
                              </span>
                            </p>
                          )}

                          {selectedProject.role && (
                            <p className="text-xs text-primaryText-500 dark:text-primaryText-400">
                              Role:&nbsp;
                              <span className="font-medium">
                                {selectedProject.role}
                              </span>
                            </p>
                          )}

                          {selectedProject.href && (
                            <p className="pt-3 text-sm">
                              <a
                                href={selectedProject.href}
                                target="_blank"
                                rel="noreferrer"
                                className="font-semibold text-accent-600 underline underline-offset-4 hover:text-accent-700"
                              >
                                View supporting documents / drawings
                              </a>
                            </p>
                          )}
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            className="rounded-full px-4 py-2 text-sm font-semibold text-primaryText-600 ring-1 ring-primaryText-200 hover:bg-primaryText-50 dark:text-primaryText-100 dark:ring-primaryText-700 dark:hover:bg-primaryText-800/60"
                          >
                            Close
                          </button>
                        </div>
                      </>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </SimpleLayout>
    </>
  )
}
