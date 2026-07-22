import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, categories } from '../data/projects'
import Reveal from '../components/Reveal'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div>
      <section className="mb-10 rounded-3xl bg-gray-950 px-6 py-10 text-white sm:px-10 sm:py-14">
        <p className="text-sm font-medium tracking-widest text-orange-500 uppercase">
          Selected Work
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Projects</h1>
        <p className="mt-3 max-w-xl text-gray-400">
          A selection of things I&apos;ve built. Filter by category to narrow things down.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'border-orange-600 bg-orange-600 text-white'
                  : 'border-gray-700 text-gray-300 hover:border-orange-400 hover:text-orange-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 100}>
              <Link
                to={`/projects/${project.id}`}
                className="group block overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg dark:border-gray-800 dark:hover:border-orange-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                    {project.category}
                  </span>
                  <h2 className="mt-1 font-medium text-gray-900 group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
