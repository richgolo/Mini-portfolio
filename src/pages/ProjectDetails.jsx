import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react'
import { getProjectById } from '../data/projects'
import NotFound from './NotFound'

function ProjectDetails() {
  const { id } = useParams()
  // Remount on id change so loading/project state re-initializes per project.
  return <ProjectDetailsView key={id} id={id} />
}

function ProjectDetailsView({ id }) {
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProject(getProjectById(id))
      setLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-orange-600 border-t-transparent" />
      </div>
    )
  }

  if (!project) {
    return <NotFound />
  }

  return (
    <div>
      <Link
        to="/projects"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <img
        src={project.image}
        alt={project.title}
        className="aspect-video w-full rounded-lg border border-gray-200 object-cover dark:border-gray-800"
      />

      <div className="mt-6">
        <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
          {project.category}
        </span>
        <h1 className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-8 flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700"
              >
                Live Demo <ExternalLink size={15} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-orange-400 dark:border-gray-700 dark:text-gray-200"
              >
                Source <Code2 size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetails
